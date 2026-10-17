<script setup>
// Antetítulo en mayúsculas sobre los títulos de sección ("01 — Servicios")
defineProps({
  marker: { type: Boolean, default: true }
})
</script>

<template>
  <p class="eyebrow">
    <span v-if="marker" class="eyebrow-marker" aria-hidden="true"></span>
    <slot />
  </p>
</template>

<style scoped>
.eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-accent-700);
  font-weight: 600;
  margin: 0;
}

.eyebrow-marker {
  width: 12px;
  height: 12px;
  background: var(--color-accent);
}
</style>
