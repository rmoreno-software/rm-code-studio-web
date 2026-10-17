<script setup>
// Logo + nombre de la cabecera. En la portada sube arriba del todo; en otras páginas vuelve a la portada.
import BrandLogo from '@/components/ui/BrandLogo.vue'

defineProps({
  href: { type: String, default: '#' }
})
</script>

<template>
  <a :href="href" class="nav-brand brand">
    <BrandLogo :size="22" class="brand-mark" />Roger Moreno
  </a>
</template>

<style scoped>
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-mark { color: var(--color-accent); }
</style>
