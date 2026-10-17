import { onMounted, onBeforeUnmount } from 'vue'
import { isMotionEnabled } from '@/utils/motion.js'

/**
 * Avanza `indexRef` cíclicamente (0 … count-1) cada `intervalMs`.
 * Solo con animaciones activadas. Llama a `stop()` cuando el usuario elija a mano.
 */
export function useAutoCycle(indexRef, count, intervalMs) {
  let timer

  function stop() {
    clearInterval(timer)
  }

  onMounted(() => {
    if (!isMotionEnabled()) return
    timer = setInterval(() => {
      indexRef.value = (indexRef.value + 1) % count
    }, intervalMs)
  })

  onBeforeUnmount(stop)

  return { stop }
}
