import { onMounted, onBeforeUnmount } from 'vue'

/** Escala horizontalmente el elemento de `barRef` según cuánto se ha recorrido la página (0 → 1). */
export function useScrollProgress(barRef) {
  function update() {
    const bar = barRef.value
    if (!bar) return
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    const progress = scrollable > 0 ? Math.min(1, window.scrollY / scrollable) : 0
    bar.style.transform = `scaleX(${progress})`
  }

  onMounted(() => {
    window.addEventListener('scroll', update, { passive: true })
    update()
  })

  onBeforeUnmount(() => window.removeEventListener('scroll', update))
}
