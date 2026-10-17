<script setup>
// Cabecera de sección a dos columnas: antetítulo + título a la izquierda, entradilla (slot) a la derecha
import SectionEyebrow from './SectionEyebrow.vue'

defineProps({
  eyebrow: { type: String, required: true },
  title: { type: String, required: true }
})
</script>

<template>
  <div class="section-header">
    <div class="section-header-main">
      <SectionEyebrow data-reveal="up">{{ eyebrow }}</SectionEyebrow>
      <h2 data-reveal="up" data-delay="80" class="section-title section-header-title">{{ title }}</h2>
    </div>
    <p data-reveal="up" data-delay="160" class="section-header-intro"><slot /></p>
  </div>
</template>

<style scoped>
.section-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px 64px;
}

.section-header-main { flex: 1 1 520px; }

.section-header-title { max-width: 14ch; }

.section-header-intro {
  flex: 1 1 340px;
  max-width: 46ch;
  font-size: 17px;
  line-height: 28px;
  margin: 0;
  opacity: 0.82;
}
</style>
