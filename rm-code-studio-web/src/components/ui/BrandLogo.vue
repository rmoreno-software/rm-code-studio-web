<script setup>
defineProps({ size: { type: Number, default: 24 } })
</script>

<template>
  <svg
    class="brand-logo"
    viewBox="121 150 376 282"
    :height="size"
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <polygon points="176,150 436,150 497,241 237,241" />
    <polygon points="237,250 355,250 253,432 121,432" />
    <polygon points="361,250 497,250 447,341 314,341" />
    <polygon points="314,350 434,350 491,432 371,432" />
  </svg>
</template>

<style scoped>
.brand-logo { flex: none; width: auto; display: block; }
</style>
