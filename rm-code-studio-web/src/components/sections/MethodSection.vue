<script setup>
import { ref, computed } from 'vue'
import SectionEyebrow from '@/components/ui/SectionEyebrow.vue'
import { STEPS, ENGAGEMENT_MODELS } from '@/content/method.js'
import { CONTACT } from '@/content/contact.js'
import { SECTION_IDS } from '@/content/navigation.js'
import { useAutoCycle } from '@/composables/useAutoCycle.js'
import { useFlashOnChange } from '@/composables/useFlashOnChange.js'
import { padNumber } from '@/utils/format.js'

const AUTO_ADVANCE_MS = 3800
const ENGAGEMENT_STAGGER_MS = 80

const activeStep = ref(0)
const stepDetail = ref(null)
const currentStep = computed(() => STEPS[activeStep.value])

const { stop: stopAutoAdvance } = useAutoCycle(activeStep, STEPS.length, AUTO_ADVANCE_MS)
useFlashOnChange(activeStep, stepDetail)

function selectStep(index) {
  stopAutoAdvance()
  activeStep.value = index
}
</script>

<template>
  <div class="container">
    <section :id="SECTION_IDS.method" class="section-anchor method">
      <SectionEyebrow data-reveal="up">03 — Cómo trabajo</SectionEyebrow>
      <h2 data-reveal="up" data-delay="80" class="section-title">Un método claro, sin sorpresas</h2>

      <div data-reveal="up" data-delay="160" class="step-tabs">
        <button
          v-for="(step, index) in STEPS"
          :key="step.title"
          type="button"
          class="btn-reset step-tab"
          :class="{ 'is-reached': index <= activeStep, 'is-active': index === activeStep }"
          :aria-current="index === activeStep ? 'step' : undefined"
          @click="selectStep(index)"
        >
          <span class="step-tab-number">{{ padNumber(index + 1) }}</span>
          <span class="step-tab-title">{{ step.title }}</span>
        </button>
      </div>

      <div ref="stepDetail" class="step-detail">
        <p class="step-detail-number">{{ padNumber(activeStep + 1) }}</p>
        <div class="step-detail-body">
          <h3 class="step-detail-title">{{ currentStep.title }}.</h3>
          <p class="step-detail-text">{{ currentStep.description }}</p>
        </div>
      </div>

      <h3 data-reveal="up" class="engagement-heading">Modalidades de colaboración</h3>
      <div class="engagement-grid">
        <div
          v-for="(model, index) in ENGAGEMENT_MODELS"
          :key="model.title"
          data-reveal="up"
          :data-delay="index * ENGAGEMENT_STAGGER_MS"
          class="engagement"
        >
          <span class="engagement-marks" aria-hidden="true">
            <span v-for="(mark, markIndex) in model.marks" :key="markIndex" class="engagement-mark" :class="`is-${mark}`"></span>
          </span>
          <h4 class="engagement-title">{{ model.title }}</h4>
          <p class="engagement-text">{{ model.description }}</p>
        </div>
      </div>
      <p class="method-note">Trabajo en remoto y presencialmente en {{ CONTACT.area }}.</p>
    </section>
  </div>
</template>

<style scoped>
.method {
  padding: var(--section-space) 0;
  border-top: 2px solid var(--color-divider);
}

/* — pasos del método — */
.step-tabs {
  margin-top: 56px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 120px), 1fr));
  gap: 12px 8px;
}

.step-tab {
  padding: 16px 0 0;
  border-top: 6px solid var(--color-neutral-300);
  transition: border-color 0.4s;
  display: grid;
  gap: 6px;
}
.step-tab.is-reached { border-top-color: var(--color-accent); }

.step-tab-number {
  font-size: 13px;
  letter-spacing: 0.08em;
  font-weight: 700;
  opacity: 0.7;
}

.step-tab-title {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 20px;
  color: var(--color-text);
}
.step-tab.is-active .step-tab-title { color: var(--color-accent-700); }

.step-detail {
  margin-top: 48px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 16px clamp(32px, 5vw, 80px);
  min-height: clamp(180px, 40vw, 220px);
}

.step-detail-number {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: clamp(120px, 18vw, 260px);
  line-height: 0.8;
  letter-spacing: -0.05em;
  color: var(--color-accent);
  margin: 0 0 0 -0.06em;
  font-feature-settings: 'tnum' 1;
}

.step-detail-body {
  flex: 1 1 360px;
  max-width: 560px;
  padding-bottom: 8px;
}

.step-detail-title {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: clamp(32px, 3.6vw, 48px);
  line-height: 1;
  margin: 0;
}

.step-detail-text {
  font-size: 19px;
  line-height: 30px;
  margin: 18px 0 0;
  opacity: 0.85;
}

/* — modalidades de colaboración — */
.engagement-heading {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 28px;
  margin: var(--section-space-md) 0 0;
}

.engagement-grid {
  margin-top: 28px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr));
  gap: 2px;
  background: var(--color-text);
  border: 2px solid var(--color-text);
}

.engagement {
  padding: 28px 24px 32px;
  background: var(--color-bg);
  display: grid;
  gap: 12px;
  align-content: start;
}

.engagement-marks {
  display: flex;
  gap: 4px;
}

.engagement-mark {
  width: 14px;
  height: 14px;
}
.engagement-mark.is-filled { background: var(--color-accent); }
.engagement-mark.is-outline { border: 2px solid var(--color-accent); }

.engagement-title {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 21px;
  margin: 8px 0 0;
}

.engagement-text {
  font-size: 15px;
  line-height: 24px;
  margin: 0;
  opacity: 0.82;
}

.method-note {
  font-size: 15.5px;
  line-height: 24px;
  margin: 20px 0 0;
  opacity: 0.75;
}
</style>
