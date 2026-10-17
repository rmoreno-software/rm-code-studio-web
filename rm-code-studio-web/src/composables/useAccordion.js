import { ref } from 'vue'

/** Estado de un acordeón: qué elementos están abiertos y cómo abrir/cerrar uno. */
export function useAccordion({ initiallyOpen = [], multiple = false } = {}) {
  const openItems = ref([...initiallyOpen])

  const isOpen = index => openItems.value.includes(index)

  function toggle(index) {
    if (isOpen(index)) {
      openItems.value = openItems.value.filter(i => i !== index)
    } else {
      openItems.value = multiple ? [...openItems.value, index] : [index]
    }
  }

  return { isOpen, toggle }
}
