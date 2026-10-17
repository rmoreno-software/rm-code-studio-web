import { watch } from 'vue'
import { flashIn } from '@/utils/motion.js'

/** Anima la entrada de `targetRef` cada vez que cambia `source`. */
export function useFlashOnChange(source, targetRef) {
  watch(source, () => flashIn(targetRef.value))
}
