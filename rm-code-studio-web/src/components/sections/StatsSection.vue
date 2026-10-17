<script setup>
import { ref, computed } from 'vue'
import config from '@/config.js'
import { useCountUp } from '@/composables/useCountUp.js'
import { formatCount } from '@/utils/format.js'

// El tiempo de respuesta "cuenta hacia atrás" desde COUNTDOWN_FROM_HOURS hasta RESPONSE_HOURS
const RESPONSE_HOURS = 24
const COUNTDOWN_FROM_HOURS = 99

const statsSection = ref(null)
const progress = useCountUp(statsSection)

const responseHours = computed(() =>
  Math.round(COUNTDOWN_FROM_HOURS - (COUNTDOWN_FROM_HOURS - RESPONSE_HOURS) * progress.value)
)

const stats = computed(() => [
  {
    value: `+${formatCount(config.years, progress.value)}`,
    label: 'Años de experiencia en entornos profesionales'
  },
  {
    value: `+${formatCount(config.projects, progress.value)}`,
    label: 'Proyectos implantados'
  },
  {
    value: `<${responseHours.value} h`,
    label: 'Tiempo de respuesta en días laborables'
  }
])
</script>

<template>
  <div class="container">
    <section ref="statsSection" class="stats">
      <div v-for="stat in stats" :key="stat.label" class="stat">
        <p class="stat-value">{{ stat.value }}</p>
        <p class="stat-label">{{ stat.label }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: 0 40px;
  padding-bottom: 40px;
}

.stat {
  border-top: 2px solid var(--color-divider);
  padding-top: 28px;
}

.stat-value {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: clamp(56px, 7vw, 104px);
  line-height: 0.9;
  letter-spacing: -0.04em;
  color: var(--color-accent);
  margin: 0 0 0 -0.04em;
  font-feature-settings: 'tnum' 1;
}

.stat-label {
  font-size: 13px;
  line-height: 20px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin: 18px 0 0;
  opacity: 0.75;
  max-width: 28ch;
}
</style>
