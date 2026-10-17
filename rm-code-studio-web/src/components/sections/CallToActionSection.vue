<script setup>
import AppIcon from '@/components/ui/AppIcon.vue'
import { PRIMARY_CTA } from '@/content/navigation.js'
</script>

<template>
  <section class="cta">
    <div class="cta-grid" aria-hidden="true"></div>
    <div class="container cta-inner">
      <p class="cta-message">
        <span data-reveal="up" class="cta-line">Si un proceso te cuesta</span>
        <span data-reveal="up" data-delay="100" class="cta-line">tiempo, dinero o clientes,</span>
        <span data-reveal="up" data-delay="200" class="cta-line">probablemente tiene solución.</span>
        <span data-reveal="up" data-delay="320" class="cta-line cta-line-emphasis">Hablemos.</span>
      </p>
      <a data-reveal="up" data-delay="420" class="btn btn-ghost btn-cta cta-button" :href="PRIMARY_CTA.href">
        {{ PRIMARY_CTA.label }} <AppIcon name="arrow" :size="18" />
      </a>
    </div>
  </section>
</template>

<style scoped>
.cta {
  background: var(--color-accent);
  color: var(--color-bg);
  position: relative;
  overflow: hidden;
}

/* Líneas verticales de fondo: seis columnas */
.cta-grid {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: linear-gradient(90deg, var(--color-accent-600) 2px, transparent 2px);
  background-size: calc(100% / 6) 100%;
}

.cta-inner {
  position: relative;
  padding-block: clamp(80px, 10vw, 144px);
}

.cta-message {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: clamp(40px, 6.4vw, 100px);
  line-height: 0.98;
  letter-spacing: -0.035em;
  margin: 0 0 0 -0.05em;
}

.cta-line { display: block; }
.cta-line-emphasis { color: var(--color-text); }

.cta-button {
  margin-top: 48px;
  color: var(--color-bg);
  border-color: var(--color-bg);
}
</style>
