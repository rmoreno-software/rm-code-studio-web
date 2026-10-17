<script setup>
// Iconos de trazo (24×24). Toman el color del texto: dales color con una clase (p. ej. .text-accent).
defineProps({
  name: { type: String, required: true },
  size: { type: Number, default: 24 },
  strokeWidth: { type: Number, default: 2 }
})
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    :stroke-width="strokeWidth"
    stroke-linecap="square"
    aria-hidden="true"
  >
    <template v-if="name === 'arrow'">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </template>
    <template v-else-if="name === 'check'">
      <path d="M4 12l5 5L20 6" />
    </template>
    <template v-else-if="name === 'plus'">
      <path d="M4 12h16" /><path d="M12 4v16" />
    </template>
    <template v-else-if="name === 'minus'">
      <path d="M4 12h16" />
    </template>
    <template v-else-if="name === 'menu'">
      <path d="M3 6h18M3 12h18M3 18h18" />
    </template>
    <template v-else-if="name === 'close'">
      <path d="M6 6l12 12M18 6L6 18" />
    </template>
    <template v-else-if="name === 'growth'">
      <path d="M3 3v18h18" /><path d="M7 15l4-4 3 3 6-6" />
    </template>
    <template v-else-if="name === 'end-to-end'">
      <path d="M4 12h14M12 5l7 7-7 7" /><path d="M4 5v14" />
    </template>
    <template v-else-if="name === 'devices'">
      <rect x="2" y="4" width="14" height="10" /><rect x="16" y="8" width="6" height="12" /><path d="M6 18h6" />
    </template>
    <template v-else-if="name === 'target'">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </template>
    <template v-else-if="name === 'code'">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </template>
    <template v-else-if="name === 'integration'">
      <circle cx="18" cy="18" r="3" /><circle cx="6" cy="6" r="3" /><path d="M6 21V9a9 9 0 0 0 9 9" />
    </template>
    <template v-else-if="name === 'sparkle'">
      <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
    </template>
    <template v-else-if="name === 'chat'">
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /><path d="M8 12h.01M12 12h.01M16 12h.01" />
    </template>
    <template v-else-if="name === 'wrench'">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </template>
  </svg>
</template>
