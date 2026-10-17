<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import { NAV_LINKS, PRIMARY_CTA } from '@/content/navigation.js'
import { useScrollProgress } from '@/composables/useScrollProgress.js'

// Debe coincidir con el @media del <style> de abajo
const COMPACT_MENU_QUERY = '(max-width: 1023px)'

const progressBar = ref(null)
useScrollProgress(progressBar)

const isMenuOpen = ref(false)
let compactMenuQuery

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu() {
  isMenuOpen.value = false
}

function closeOnEscape(event) {
  if (event.key === 'Escape') closeMenu()
}

onMounted(() => {
  window.addEventListener('keydown', closeOnEscape)
  compactMenuQuery = window.matchMedia(COMPACT_MENU_QUERY)
  compactMenuQuery.addEventListener('change', closeMenu)
})

onBeforeUnmount(() => {
  window.removeEventListener('keydown', closeOnEscape)
  compactMenuQuery?.removeEventListener('change', closeMenu)
})
</script>

<template>
  <nav class="nav site-nav" :class="{ 'is-open': isMenuOpen }">
    <span class="nav-brand brand">
      <span class="brand-mark" aria-hidden="true"></span>Roger Moreno
    </span>

    <button
      type="button"
      class="btn-reset menu-toggle"
      aria-controls="site-menu"
      :aria-expanded="isMenuOpen"
      @click="toggleMenu"
    >
      <span class="sr-only">{{ isMenuOpen ? 'Cerrar menú' : 'Abrir menú' }}</span>
      <AppIcon :name="isMenuOpen ? 'close' : 'menu'" :size="26" />
    </button>

    <!-- En escritorio sus enlaces se colocan directamente en la barra (display: contents) -->
    <div id="site-menu" class="site-menu" @click="closeMenu">
      <a v-for="link in NAV_LINKS" :key="link.href" :href="link.href">{{ link.label }}</a>
      <a class="btn btn-primary" :href="PRIMARY_CTA.href">{{ PRIMARY_CTA.label }}</a>
    </div>

    <span ref="progressBar" class="scroll-progress" aria-hidden="true"></span>
  </nav>
</template>

<style scoped>
.site-nav {
  position: sticky;
  top: 0;
  z-index: 20;
  flex-wrap: wrap;
  gap: 4px 24px;
  padding-inline: clamp(20px, 5vw, 72px);
  background: var(--color-bg);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-mark {
  flex: none;
  width: 14px;
  height: 14px;
  background: var(--color-accent);
}

.site-menu { display: contents; }

.menu-toggle {
  display: none;
  place-items: center;
  width: 44px;
  height: 44px;
  margin-right: -10px;
}

.scroll-progress {
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 100%;
  height: 4px;
  background: var(--color-accent);
  transform-origin: left center;
  pointer-events: none;
}

/* — menú compacto (móvil y tablet): botón hamburguesa + panel desplegable — */
@media (max-width: 1023px) {
  .site-nav {
    flex-wrap: nowrap;
    padding-block: 8px;
  }

  .menu-toggle { display: grid; }

  .site-menu {
    display: none;
    position: absolute;
    top: calc(100% + 2px);
    left: 0;
    right: 0;
    flex-direction: column;
    padding: 8px clamp(20px, 5vw, 72px) 24px;
    background: var(--color-bg);
    border-bottom: 2px solid var(--color-text);
    max-height: calc(100dvh - 100%);
    overflow-y: auto;
  }
  .site-nav.is-open .site-menu { display: flex; }

  .site-menu a:not(.btn) {
    padding: 14px 0;
    font-family: var(--font-heading);
    font-weight: 800;
    font-size: 20px;
    border-bottom: 2px solid var(--color-divider);
  }

  .site-menu .btn {
    margin-top: 24px;
    padding: 14px 16px;
    font-size: 16px;
  }
}
</style>
