<script setup>
import AppIcon from '@/components/ui/AppIcon.vue'
import SectionEyebrow from '@/components/ui/SectionEyebrow.vue'
import HeroDiagram from '@/components/graphics/HeroDiagram.vue'
import { PRIMARY_CTA, SECTION_IDS } from '@/content/navigation.js'
import { HERO } from '@/content/hero.js'

const LINE_STAGGER_MS = 80
</script>

<template>
  <div class="container">
    <section class="hero">
      <div class="hero-copy">
        <SectionEyebrow data-reveal="up" :marker="false">{{ HERO.eyebrow }}</SectionEyebrow>
        <h1 class="hero-title">
          <span
            v-for="(line, index) in HERO.titleLines"
            :key="line"
            data-reveal="up"
            :data-delay="(index + 1) * LINE_STAGGER_MS"
            class="hero-title-line"
          >
            {{ line }}
            <span v-if="index === HERO.titleLines.length - 1" class="text-accent">{{ HERO.titleAccent }}</span>
          </span>
        </h1>
        <p data-reveal="up" data-delay="360" class="hero-lead">{{ HERO.lead }}</p>
        <div data-reveal="up" data-delay="460" class="hero-actions">
          <a class="btn btn-primary btn-cta" :href="PRIMARY_CTA.href">
            {{ PRIMARY_CTA.label }} <AppIcon name="arrow" :size="18" />
          </a>
          <a class="btn btn-ghost" :href="`#${SECTION_IDS.services}`">{{ HERO.secondaryCta }}</a>
        </div>
      </div>

      <HeroDiagram data-reveal="scale" data-delay="200" />
    </section>
  </div>
</template>

<style scoped>
.hero {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 56px clamp(32px, 5vw, 80px);
  padding: clamp(56px, 8vw, 112px) 0 clamp(56px, 8vw, 96px);
}

.hero-copy {
  flex: 1 1 480px;
  min-width: 0;
}

.hero-title {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: clamp(44px, 6.4vw, 96px);
  line-height: 1;
  letter-spacing: -0.03em;
  margin: 28px 0 0 -0.05em;
}

.hero-title-line { display: block; }

.hero-lead {
  font-size: 19px;
  line-height: 30px;
  max-width: 54ch;
  margin: 36px 0 0;
  opacity: 0.85;
}

.hero-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 36px;
}
</style>
