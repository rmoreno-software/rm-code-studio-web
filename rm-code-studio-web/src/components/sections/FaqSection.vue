<script setup>
import config from '@/config.js'
import AppIcon from '@/components/ui/AppIcon.vue'
import SectionEyebrow from '@/components/ui/SectionEyebrow.vue'
import { FAQ, FAQ_SECTION } from '@/content/faq.js'
import { SECTION_IDS } from '@/content/navigation.js'
import { useAccordion } from '@/composables/useAccordion.js'

const { isOpen, toggle } = useAccordion({ initiallyOpen: [0], multiple: config.faqMultiple })
</script>

<template>
  <div class="container">
    <section :id="SECTION_IDS.faq" class="section-anchor faq">
      <div class="faq-intro">
        <SectionEyebrow data-reveal="up">{{ FAQ_SECTION.eyebrow }}</SectionEyebrow>
        <h2 data-reveal="up" data-delay="80" class="section-title faq-title">{{ FAQ_SECTION.title }}</h2>
      </div>

      <div data-reveal="up" data-delay="120" class="faq-list">
        <div v-for="(item, index) in FAQ" :key="item.question" class="faq-item">
          <button type="button" class="btn-reset faq-question" :aria-expanded="isOpen(index)" @click="toggle(index)">
            <span>{{ item.question }}</span>
            <span class="faq-toggle" :class="{ 'is-open': isOpen(index) }">
              <AppIcon :name="isOpen(index) ? 'minus' : 'plus'" :size="18" :stroke-width="2.5" />
            </span>
          </button>
          <p v-if="isOpen(index)" class="faq-answer">{{ item.answer }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.faq {
  padding: var(--section-space-md) 0 var(--section-space);
  display: flex;
  flex-wrap: wrap;
  gap: 40px clamp(32px, 6vw, 96px);
}

.faq-intro {
  flex: 1 1 280px;
  max-width: 400px;
}

.faq-title { font-size: clamp(36px, 4.6vw, 64px); }

.faq-list {
  flex: 1 1 480px;
  min-width: 0;
  border-bottom: 2px solid var(--color-divider);
}

.faq-item { border-top: 2px solid var(--color-divider); }

.faq-question {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  padding: 22px 0;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 20px;
  line-height: 26px;
}
.faq-question:hover { color: var(--color-accent-700); }

.faq-toggle {
  flex: none;
  width: 32px;
  height: 32px;
  display: grid;
  place-items: center;
  background: transparent;
  color: var(--color-accent);
  transition: background 0.25s, color 0.25s;
}
.faq-toggle.is-open {
  background: var(--color-accent);
  color: var(--color-bg);
}

.faq-answer {
  font-size: 16.5px;
  line-height: 27px;
  margin: 0;
  padding: 0 clamp(0px, 5.6vw, 56px) 26px 0;
  max-width: 62ch;
  opacity: 0.85;
}
</style>
