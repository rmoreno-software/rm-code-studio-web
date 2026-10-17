<script setup>
import { ref } from 'vue'
import AppIcon from '@/components/ui/AppIcon.vue'
import SectionEyebrow from '@/components/ui/SectionEyebrow.vue'
import { CONTACT_DETAILS } from '@/content/contact.js'
import { LEGAL_LINKS, SECTION_IDS } from '@/content/navigation.js'

const FORM_FIELDS = [
  { id: 'f-nombre', name: 'nombre', label: 'Nombre', autocomplete: 'name', required: true },
  { id: 'f-empresa', name: 'empresa', label: 'Empresa', autocomplete: 'organization' },
  { id: 'f-email', name: 'email', label: 'Email', type: 'email', autocomplete: 'email', required: true },
  { id: 'f-tel', name: 'telefono', label: 'Teléfono (opcional)', type: 'tel', autocomplete: 'tel' }
]

const isSent = ref(false)

function handleSubmit() {
  // TODO: enviar el formulario a tu backend o a un servicio de email (Formspree, EmailJS…)
  isSent.value = true
}

function resetForm() {
  isSent.value = false
}
</script>

<template>
  <div class="container">
    <section :id="SECTION_IDS.contact" class="section-anchor contact">
      <div class="contact-intro">
        <SectionEyebrow data-reveal="up">07 — Contacto</SectionEyebrow>
        <h2 data-reveal="up" data-delay="80" class="section-title contact-title">¿Hablamos de tu proyecto?</h2>
        <p data-reveal="up" data-delay="160" class="contact-lead">
          Cuéntame qué necesitas o qué problema quieres resolver. Te respondo en menos de 24 horas laborables y
          la primera reunión no tiene coste ni compromiso.
        </p>
        <dl data-reveal="up" data-delay="220" class="contact-details">
          <template v-for="detail in CONTACT_DETAILS" :key="detail.label">
            <dt>{{ detail.label }}</dt>
            <dd>
              <a v-if="detail.href" :href="detail.href">{{ detail.value }}</a>
              <template v-else>{{ detail.value }}</template>
            </dd>
          </template>
        </dl>
      </div>

      <div data-reveal="right" data-delay="120" class="contact-panel">
        <div v-if="isSent" class="contact-success" role="status">
          <span class="contact-success-icon">
            <AppIcon name="check" :size="32" :stroke-width="2.5" />
          </span>
          <p class="contact-success-message">Gracias. He recibido tu mensaje y te contestaré muy pronto.</p>
          <button type="button" class="btn btn-ghost contact-reset" @click="resetForm">Enviar otra consulta</button>
        </div>

        <form v-else class="contact-form" @submit.prevent="handleSubmit">
          <div class="contact-fields">
            <div v-for="field in FORM_FIELDS" :key="field.id" class="field">
              <label :for="field.id">{{ field.label }}</label>
              <input
                :id="field.id"
                class="input"
                :name="field.name"
                :type="field.type ?? 'text'"
                :required="field.required"
                :autocomplete="field.autocomplete"
              >
            </div>
          </div>
          <div class="field">
            <label for="f-msg">¿En qué puedo ayudarte?</label>
            <textarea id="f-msg" class="input contact-message" name="mensaje" rows="5" required></textarea>
          </div>
          <label class="consent">
            <input type="checkbox" required>
            <span>He leído y acepto la <a :href="LEGAL_LINKS.privacy.href">política de privacidad</a>.</span>
          </label>
          <button type="submit" class="btn btn-primary btn-cta contact-submit">
            Enviar consulta <AppIcon name="arrow" :size="18" />
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact {
  padding: var(--section-space) 0 var(--section-space-md);
  border-top: 2px solid var(--color-divider);
  display: flex;
  flex-wrap: wrap;
  gap: 48px clamp(32px, 6vw, 96px);
}

/* — columna de texto — */
.contact-intro {
  flex: 1 1 320px;
  max-width: 460px;
}

.contact-title {
  font-size: clamp(40px, 5.4vw, 76px);
  line-height: 0.98;
}

.contact-lead {
  font-size: 17px;
  line-height: 28px;
  margin: 28px 0 0;
  opacity: 0.85;
}

.contact-details {
  margin: 40px 0 0;
  display: grid;
  grid-template-columns: auto 1fr;
  font-size: 15.5px;
  line-height: 24px;
  border-bottom: 2px solid var(--color-divider);
}
.contact-details dt {
  padding: 12px 24px 12px 0;
  border-top: 2px solid var(--color-divider);
  font-weight: 700;
}
.contact-details dd {
  margin: 0;
  padding: 12px 0;
  border-top: 2px solid var(--color-divider);
}

/* — formulario — */
.contact-panel {
  flex: 1 1 460px;
  min-width: 0;
  background: var(--color-surface);
  padding: clamp(24px, 4vw, 48px);
  border-top: 6px solid var(--color-accent);
}

.contact-form {
  display: grid;
  gap: 20px;
}

.contact-fields {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 200px), 1fr));
  gap: 20px;
}

.contact-message {
  resize: vertical;
  font-family: inherit;
}

.consent {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  font-size: 14.5px;
  line-height: 22px;
  cursor: pointer;
}
.consent input {
  accent-color: var(--color-accent);
  width: 18px;
  height: 18px;
  margin: 2px 0 0;
  flex: none;
}

.contact-submit { justify-self: start; }

/* — mensaje de confirmación — */
.contact-success {
  min-height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
}

.contact-success-icon {
  width: 64px;
  height: 64px;
  background: var(--color-accent);
  color: var(--color-bg);
  display: grid;
  place-items: center;
}

.contact-success-message {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 30px;
  line-height: 36px;
  margin: 0;
  max-width: 20ch;
}

.contact-reset { align-self: flex-start; }
</style>
