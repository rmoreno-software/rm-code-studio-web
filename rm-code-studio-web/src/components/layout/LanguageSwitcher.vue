<script setup>
// Selector ES · CA · EN: enlaza a la misma página en cada idioma (rutas en src/routes.js)
import { LANGUAGES, LOCALE, routeTo } from '@/i18n.js'
import { SITE_TEXT } from '@/content/site.js'

defineProps({
  page: { type: String, required: true }
})
</script>

<template>
  <ul class="language-switcher" :aria-label="SITE_TEXT.languageSelector">
    <li v-for="language in LANGUAGES" :key="language.code">
      <a
        :href="routeTo(page, language.code)"
        :hreflang="language.code"
        :lang="language.code"
        :title="language.name"
        :aria-current="language.code === LOCALE ? 'page' : undefined"
      >
        <span aria-hidden="true">{{ language.label }}</span>
        <span class="sr-only">{{ language.name }}</span>
      </a>
    </li>
  </ul>
</template>

<style scoped>
.language-switcher {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
}

.language-switcher li + li::before {
  content: '·';
  padding-inline: 6px;
  opacity: 0.5;
}

.language-switcher a {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
}

.language-switcher a[aria-current='page'] {
  color: var(--color-accent-700);
  text-decoration: underline;
  text-decoration-thickness: 2px;
  text-underline-offset: 5px;
}
</style>
