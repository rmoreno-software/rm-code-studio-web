import { onMounted, onBeforeUnmount } from 'vue'
import {
  EASE_OUT,
  OBSERVER_FAILSAFE_MS,
  REVEAL_OBSERVER_OPTIONS,
  isInViewport,
  isMotionEnabled
} from '@/utils/motion.js'

const REVEAL_DURATION_MS = 850
const REVEAL_START_TRANSFORMS = {
  up: 'translateY(36px)',
  left: 'translateX(-56px)',
  right: 'translateX(56px)',
  scale: 'scale(0.92)'
}

const BAR_DURATION_MS = 1800
const BAR_STAGGER_MS = 260
const BAR_EASING = 'cubic-bezier(.6,0,.3,1)'

/**
 * Animaciones globales de la página. Llamar una sola vez, desde App.vue.
 *
 * - `data-reveal="up|left|right|scale"`: el elemento aparece al entrar en pantalla.
 *   `data-delay="ms"` retrasa su entrada.
 * - `data-bar`: barra que crece y decrece en bucle (maquetas de dispositivos).
 */
export function useRevealAnimations() {
  const animations = []
  const pendingReveals = new WeakMap()
  let observer
  let failsafeTimer

  function animateBars() {
    document.querySelectorAll('[data-bar]').forEach((bar, index) => {
      animations.push(bar.animate(
        [{ transform: 'scaleX(0.1)' }, { transform: 'scaleX(1)' }],
        {
          duration: BAR_DURATION_MS,
          delay: index * BAR_STAGGER_MS,
          iterations: Infinity,
          direction: 'alternate',
          easing: BAR_EASING
        }
      ))
    })
  }

  function prepareReveal(el) {
    const from = REVEAL_START_TRANSFORMS[el.dataset.reveal] ?? REVEAL_START_TRANSFORMS.up
    const animation = el.animate(
      [{ opacity: 0, transform: from }, { opacity: 1, transform: 'none' }],
      { duration: REVEAL_DURATION_MS, delay: Number(el.dataset.delay || 0), easing: EASE_OUT, fill: 'both' }
    )
    animations.push(animation)

    if (isInViewport(el)) return
    animation.pause()
    pendingReveals.set(el, animation)
    observer.observe(el)
  }

  function playAllPending() {
    animations.forEach(animation => {
      if (animation.playState === 'paused') animation.play()
    })
  }

  onMounted(() => {
    if (!isMotionEnabled()) return

    animateBars()

    let observerFired = false
    observer = new IntersectionObserver(entries => {
      observerFired = true
      entries
        .filter(entry => entry.isIntersecting)
        .forEach(({ target }) => {
          observer.unobserve(target)
          pendingReveals.get(target)?.play()
        })
    }, REVEAL_OBSERVER_OPTIONS)

    document.querySelectorAll('[data-reveal]').forEach(prepareReveal)

    failsafeTimer = setTimeout(() => {
      if (!observerFired) playAllPending()
    }, OBSERVER_FAILSAFE_MS)
  })

  onBeforeUnmount(() => {
    clearTimeout(failsafeTimer)
    observer?.disconnect()
    animations.forEach(animation => animation.cancel())
  })
}
