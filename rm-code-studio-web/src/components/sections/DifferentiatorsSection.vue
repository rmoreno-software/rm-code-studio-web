<script setup>
import SectionEyebrow from '@/components/ui/SectionEyebrow.vue'
import { DIFFERENTIATORS } from '@/content/differentiators.js'
import { padNumber } from '@/utils/format.js'

const ITEMS_PER_ROW = 3
const REVEAL_STAGGER_MS = 100
</script>

<template>
  <div class="container">
    <section class="differentiators">
      <SectionEyebrow data-reveal="up">05 — Por qué trabajar conmigo</SectionEyebrow>
      <h2 data-reveal="up" data-delay="80" class="section-title">Lo que me diferencia</h2>

      <div class="differentiator-grid">
        <div
          v-for="(item, index) in DIFFERENTIATORS"
          :key="item.title"
          data-reveal="up"
          :data-delay="(index % ITEMS_PER_ROW) * REVEAL_STAGGER_MS"
          class="differentiator"
        >
          <p class="differentiator-number">{{ padNumber(index + 1) }}</p>
          <h3 class="differentiator-title">{{ item.title }}</h3>
          <p class="differentiator-text">{{ item.text }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.differentiators {
  padding: var(--section-space) 0 var(--section-space-lg);
  border-top: 2px solid var(--color-divider);
}

.differentiator-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
  gap: clamp(40px, 5.6vw, 56px) 40px;
  margin-top: var(--block-space);
}

.differentiator {
  border-top: 2px solid var(--color-text);
  padding-top: 20px;
}

.differentiator-number {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 56px;
  line-height: 1;
  letter-spacing: -0.04em;
  margin: 0;
  color: var(--color-neutral-400);
}

.differentiator-title {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 24px;
  margin: 16px 0 0;
}

.differentiator-text {
  font-size: 16px;
  line-height: 26px;
  margin: 12px 0 0;
  opacity: 0.82;
}
</style>
