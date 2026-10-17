<script setup>
// Cabecera de las páginas legales: misma barra que la portada, con un único enlace de vuelta
import { ref } from 'vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import SiteBrand from '@/components/layout/SiteBrand.vue'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher.vue'
import { HOME_HREF } from '@/content/navigation.js'
import { SITE_TEXT } from '@/content/site.js'
import { useScrollProgress } from '@/composables/useScrollProgress.js'

defineProps({
  page: { type: String, required: true }
})

const progressBar = ref(null)
useScrollProgress(progressBar)
</script>

<template>
  <nav class="nav legal-nav">
    <SiteBrand :href="HOME_HREF" />
    <LanguageSwitcher :page="page" />
    <a :href="HOME_HREF" class="legal-nav-back">
      <AppIcon name="arrow-left" :size="18" /><span class="legal-nav-back-label">{{ SITE_TEXT.backToSite }}</span>
    </a>
    <span ref="progressBar" class="scroll-progress" aria-hidden="true"></span>
  </nav>
</template>

<style scoped>
.legal-nav {
  position: sticky;
  top: 0;
  z-index: 20;
  gap: 24px;
  min-height: 58px;
  padding-inline: clamp(20px, 5vw, 72px);
  background: var(--color-bg);
}

.legal-nav-back {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 16px;
}

/* En móvil solo se ve la flecha, para que quepa el selector de idioma (el texto sigue para lectores de pantalla) */
@media (max-width: 560px) {
  .legal-nav-back-label {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
  }
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
</style>
