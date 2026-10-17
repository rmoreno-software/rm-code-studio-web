<script setup>
import AppIcon from '@/components/ui/AppIcon.vue'
import BulletList from '@/components/ui/BulletList.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { SERVICES, SERVICES_SECTION } from '@/content/services.js'
import { PRIMARY_CTA, SECTION_IDS } from '@/content/navigation.js'
import { padNumber } from '@/utils/format.js'

const CARDS_PER_ROW = 3
const REVEAL_STAGGER_MS = 100
</script>

<template>
  <div class="container">
    <section :id="SECTION_IDS.services" class="section-anchor services">
      <SectionHeader :eyebrow="SERVICES_SECTION.eyebrow" :title="SERVICES_SECTION.title">
        {{ SERVICES_SECTION.intro }}
      </SectionHeader>

      <div class="service-grid">
        <article
          v-for="(service, index) in SERVICES"
          :key="service.title"
          data-reveal="up"
          :data-delay="(index % CARDS_PER_ROW) * REVEAL_STAGGER_MS"
          class="service"
        >
          <div class="service-top">
            <AppIcon :name="service.icon" :size="44" class="text-accent" />
            <span class="service-number">{{ padNumber(index + 1) }}</span>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          <BulletList :items="service.features" class="service-features" />
        </article>
      </div>

      <p data-reveal="up" class="services-more">
        {{ SERVICES_SECTION.more }}
        <a :href="PRIMARY_CTA.href">{{ SERVICES_SECTION.moreLink }}</a>
      </p>
    </section>
  </div>
</template>

<style scoped>
.services { padding: var(--section-space-lg) 0 var(--section-space); }

.service-grid {
  margin-top: var(--block-space);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 340px), 1fr));
  border-top: 2px solid var(--color-text);
  border-left: 2px solid var(--color-text);
}

.service {
  border-right: 2px solid var(--color-text);
  border-bottom: 2px solid var(--color-text);
  padding: clamp(24px, 6vw, 32px);
  display: flex;
  flex-direction: column;
  gap: 18px;
  transition: background-color 0.3s, color 0.3s;
  cursor: default;
}
.service:hover {
  background: var(--color-text);
  color: var(--color-bg);
}

.service-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.service-number {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 15px;
}

.service-title {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 26px;
  line-height: 30px;
  margin: 12px 0 0;
}

.service-description {
  font-size: 15.5px;
  line-height: 25px;
  margin: 0;
  opacity: 0.82;
}

.service-features {
  padding: 20px 0 0;
  margin: auto 0 0;
  border-top: 2px solid var(--color-divider);
  gap: 10px;
  font-size: 14.5px;
  line-height: 21px;
}

.services-more {
  font-size: 18px;
  line-height: 28px;
  margin: 36px 0 0;
}
.services-more a { font-weight: 700; }
</style>
