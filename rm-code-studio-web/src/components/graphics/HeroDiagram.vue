<script setup>
// Diagrama de la cabecera: cada sistema se conecta con "TU NEGOCIO" por una línea
// por la que circula un paquete (animación SVG nativa).
import { ref, onMounted } from 'vue'
import { isMotionEnabled } from '@/utils/motion.js'
import { HERO_DIAGRAM } from '@/content/hero.js'

const NODE_SIZE = 64
const LABEL_OFFSET = { x: 8, y: 54 }

const SYSTEMS = [
  { label: 'ERP', x: 8, y: 8, path: 'M40 40H200V160', duration: '3s', delay: '0s' },
  { label: 'WEB', x: 248, y: 8, path: 'M280 40V160', duration: '2.2s', delay: '-0.6s' },
  { label: 'CRM', x: 408, y: 88, path: 'M440 120V200H320', duration: '2.8s', delay: '-1.4s' },
  { label: HERO_DIAGRAM.ai, x: 8, y: 248, path: 'M40 280H160', duration: '2s', delay: '-0.3s' },
  { label: 'WHATSAPP', x: 408, y: 328, path: 'M440 360H380V280H320', duration: '3.2s', delay: '-2s' },
  { label: 'APP', x: 88, y: 408, path: 'M120 440V380H200V320', duration: '2.6s', delay: '-1s' },
  { label: HERO_DIAGRAM.machine, x: 328, y: 408, path: 'M360 440V400H280V320', duration: '2.4s', delay: '-1.8s' }
]

const diagram = ref(null)

onMounted(() => {
  if (!isMotionEnabled()) diagram.value?.pauseAnimations?.()
})
</script>

<template>
  <div class="hero-diagram">
    <svg ref="diagram" viewBox="0 0 480 480" font-family="Archivo, system-ui, sans-serif" aria-hidden="true">
      <g fill="none" stroke="var(--color-text)" stroke-width="2">
        <path v-for="system in SYSTEMS" :key="system.label" :d="system.path" />
      </g>
      <g fill="var(--color-accent)">
        <rect v-for="system in SYSTEMS" :key="system.label" x="-5" y="-5" width="10" height="10">
          <animateMotion :dur="system.duration" :begin="system.delay" repeatCount="indefinite" :path="system.path" />
        </rect>
      </g>
      <g fill="var(--color-bg)" stroke="var(--color-text)" stroke-width="2">
        <rect v-for="system in SYSTEMS" :key="system.label" :x="system.x" :y="system.y" :width="NODE_SIZE" :height="NODE_SIZE" />
      </g>
      <g fill="var(--color-text)" font-size="11" font-weight="700" letter-spacing="0.06em">
        <text v-for="system in SYSTEMS" :key="system.label" :x="system.x + LABEL_OFFSET.x" :y="system.y + LABEL_OFFSET.y">{{ system.label }}</text>
      </g>

      <rect x="152" y="152" width="176" height="176" fill="none" stroke="var(--color-accent)" stroke-width="2">
        <animate attributeName="stroke-opacity" values="0;1;0" dur="2.4s" repeatCount="indefinite" />
      </rect>
      <rect x="160" y="160" width="160" height="160" fill="var(--color-accent)" />
      <text x="174" y="282" fill="var(--color-bg)" font-size="24" font-weight="800">{{ HERO_DIAGRAM.center[0] }}</text>
      <text x="174" y="306" fill="var(--color-bg)" font-size="24" font-weight="800">{{ HERO_DIAGRAM.center[1] }}</text>
    </svg>
  </div>
</template>

<style scoped>
.hero-diagram {
  flex: 1 1 360px;
  max-width: 540px;
  width: 100%;
  aspect-ratio: 1;
  position: relative;
  border-right: 2px solid var(--color-neutral-300);
  border-bottom: 2px solid var(--color-neutral-300);
  background-image:
    linear-gradient(var(--color-neutral-300) 2px, transparent 2px),
    linear-gradient(90deg, var(--color-neutral-300) 2px, transparent 2px);
  background-size: calc(100% / 6) calc(100% / 6);
}

svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  overflow: visible;
}
</style>
