<script setup>
import AppIcon from '@/components/ui/AppIcon.vue'
import { HIGHLIGHTS } from '@/content/highlights.js'

const REVEAL_STAGGER_MS = 120
</script>

<template>
  <div class="container">
    <section class="highlights">
      <div
        v-for="(highlight, index) in HIGHLIGHTS"
        :key="highlight.title"
        data-reveal="up"
        :data-delay="index * REVEAL_STAGGER_MS"
        class="highlight"
      >
        <AppIcon :name="highlight.icon" :size="36" class="text-accent" />
        <h3 class="highlight-title">{{ highlight.title }}</h3>
        <p class="highlight-text">{{ highlight.text }}</p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.highlights {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr));
  gap: 0 40px;
}

.highlight {
  border-top: 2px solid var(--color-text);
  padding: 24px 0 40px;
}

.highlight-title {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 26px;
  line-height: 30px;
  margin: 20px 0 0;
}

.highlight-text {
  font-size: 16px;
  line-height: 26px;
  margin: 12px 0 0;
  opacity: 0.82;
}
</style>
