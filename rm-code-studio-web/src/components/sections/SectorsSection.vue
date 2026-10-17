<script setup>
import { ref, computed } from 'vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import { SECTORS, SECTORS_SECTION } from '@/content/sectors.js'
import { SECTION_IDS } from '@/content/navigation.js'
import { useFlashOnChange } from '@/composables/useFlashOnChange.js'
import { padNumber } from '@/utils/format.js'

const activeSector = ref(0)
const sectorDetail = ref(null)
const currentSector = computed(() => SECTORS[activeSector.value])

useFlashOnChange(activeSector, sectorDetail)

function selectSector(index) {
  activeSector.value = index
}
</script>

<template>
  <div class="container">
    <section :id="SECTION_IDS.sectors" class="section-anchor sectors">
      <SectionHeader :eyebrow="SECTORS_SECTION.eyebrow" :title="SECTORS_SECTION.title">
        {{ SECTORS_SECTION.intro }}
      </SectionHeader>

      <div class="sectors-layout">
        <div data-reveal="up" class="sector-list">
          <button
            v-for="(sector, index) in SECTORS"
            :key="sector.name"
            type="button"
            class="btn-reset sector-option"
            :class="{ 'is-active': index === activeSector }"
            :aria-pressed="index === activeSector"
            @click="selectSector(index)"
            @mouseenter="selectSector(index)"
            @focus="selectSector(index)"
          >
            <span class="sector-option-number">{{ padNumber(index + 1) }}</span>
            <span class="sector-option-name">{{ sector.name }}</span>
            <AppIcon v-if="index === activeSector" name="arrow" :size="22" :stroke-width="2.5" class="text-accent" />
          </button>
        </div>

        <div data-reveal="right" class="sector-panel">
          <div class="sector-panel-header">
            <span class="sector-counter">{{ padNumber(activeSector + 1) }} / {{ padNumber(SECTORS.length) }}</span>
            <span class="sector-dots" aria-hidden="true">
              <span
                v-for="(sector, index) in SECTORS"
                :key="sector.name"
                class="sector-dot"
                :class="{ 'is-active': index === activeSector }"
              ></span>
            </span>
          </div>
          <div ref="sectorDetail" class="sector-detail">
            <p class="sector-detail-name">{{ currentSector.name }}</p>
            <p class="sector-detail-example">{{ currentSector.example }}</p>
          </div>
        </div>
      </div>

      <p class="sectors-note">{{ SECTORS_SECTION.note }}</p>
    </section>
  </div>
</template>

<style scoped>
.sectors {
  padding: var(--section-space) 0;
  border-top: 2px solid var(--color-divider);
}

.sectors-layout {
  margin-top: 56px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px clamp(32px, 5vw, 72px);
  align-items: stretch;
}

/* — lista de sectores — */
.sector-list {
  flex: 1 1 360px;
  min-width: 0;
  border-bottom: 2px solid var(--color-divider);
}

.sector-option {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 0;
  border-top: 2px solid var(--color-divider);
  color: var(--color-text);
  transition: color 0.2s;
}
.sector-option.is-active { color: var(--color-accent-700); }

.sector-option-number {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  width: 28px;
  opacity: 0.7;
}

.sector-option-name {
  flex: 1;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: clamp(18px, 1.7vw, 22px);
  line-height: 1.2;
}

/* — panel con el ejemplo del sector activo — */
.sector-panel {
  flex: 1 1 420px;
  min-width: 0;
  background: var(--color-text);
  color: var(--color-bg);
  padding: clamp(28px, 4vw, 48px);
  display: flex;
  flex-direction: column;
  min-height: clamp(300px, 75vw, 440px);
}

.sector-panel-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px;
}

.sector-counter {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 15px;
  letter-spacing: 0.06em;
}

.sector-dots {
  display: grid;
  grid-template-columns: repeat(4, 16px);
  gap: 4px;
}

.sector-dot {
  width: 16px;
  height: 16px;
  border: 2px solid var(--color-neutral-600);
  background: transparent;
  transition: background 0.3s;
}
.sector-dot.is-active { background: var(--color-accent); }

.sector-detail {
  margin-top: auto;
  padding-top: clamp(32px, 8vw, 48px);
}

.sector-detail-name {
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-weight: 700;
  color: var(--color-accent-400);
  margin: 0;
}

.sector-detail-example {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: clamp(28px, 3vw, 42px);
  line-height: 1.08;
  letter-spacing: -0.02em;
  margin: 18px 0 0;
}

.sectors-note {
  font-size: 15.5px;
  line-height: 24px;
  margin: 28px 0 0;
  max-width: 62ch;
  opacity: 0.75;
}
</style>
