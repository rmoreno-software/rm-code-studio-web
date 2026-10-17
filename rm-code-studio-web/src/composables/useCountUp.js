import { ref, onMounted, onBeforeUnmount } from 'vue'
import {
  OBSERVER_FAILSAFE_MS,
  REVEAL_OBSERVER_OPTIONS,
  isInViewport,
  isMotionEnabled
} from '@/utils/motion.js'

const DEFAULT_DURATION_MS = 1500

const easeOutCubic = p => 1 - Math.pow(1 - p, 3)

/**
 * Devuelve un `progress` reactivo que va de 0 a 1 cuando `targetRef` entra en pantalla.
 * Sirve para animar contadores. Sin animaciones, vale 1 desde el principio.
 */
export function useCountUp(targetRef, durationMs = DEFAULT_DURATION_MS) {
  const progress = ref(0)
  let frame
  let observer
  let failsafeTimer
  let started = false

  function start() {
    if (started) return
    started = true
    const startTime = performance.now()
    const tick = now => {
      const elapsed = Math.min(1, (now - startTime) / durationMs)
      progress.value = easeOutCubic(elapsed)
      if (elapsed < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
  }

  onMounted(() => {
    const target = targetRef.value
    if (!target || !isMotionEnabled()) {
      progress.value = 1
      return
    }
    if (isInViewport(target)) {
      start()
      return
    }

    let observerFired = false
    observer = new IntersectionObserver(entries => {
      observerFired = true
      if (!entries.some(entry => entry.isIntersecting)) return
      observer.disconnect()
      start()
    }, REVEAL_OBSERVER_OPTIONS)
    observer.observe(target)

    failsafeTimer = setTimeout(() => {
      if (!observerFired) start()
    }, OBSERVER_FAILSAFE_MS)
  })

  onBeforeUnmount(() => {
    cancelAnimationFrame(frame)
    clearTimeout(failsafeTimer)
    observer?.disconnect()
  })

  return progress
}
