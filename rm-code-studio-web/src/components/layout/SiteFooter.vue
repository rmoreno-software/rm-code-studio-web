<script setup>
import { CONTACT } from '@/content/contact.js'
import { LEGAL_LINKS } from '@/content/navigation.js'
import BrandLogo from '@/components/ui/BrandLogo.vue'
import { SITE_TEXT } from '@/content/site.js'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="container footer-main">
      <div class="footer-identity">
        <span class="footer-brand">
          <BrandLogo :size="20" class="footer-brand-mark" /> Roger Moreno
        </span>
        <span class="footer-tagline">{{ SITE_TEXT.tagline }}</span>
      </div>
      <div class="footer-links">
        <a v-for="link in LEGAL_LINKS" :key="link.label" :href="link.href">{{ link.label }}</a>
      </div>
    </div>
    <div class="container">
      <p class="footer-copyright">© {{ currentYear }} {{ CONTACT.businessName }}. {{ SITE_TEXT.rights }}</p>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--color-text);
  color: var(--color-bg);
}

.footer-main {
  padding-block: 48px 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 24px 48px;
  font-size: 14px;
  line-height: 22px;
}

.footer-identity {
  display: grid;
  gap: 6px;
}

.footer-brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 18px;
}

.footer-brand-mark {
  color: var(--color-accent);
}

.footer-tagline { opacity: 0.75; }

.footer-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
}

.footer-copyright {
  margin: 0;
  padding: 20px 0 28px;
  border-top: 2px solid var(--color-neutral-700);
  font-size: 13px;
  opacity: 0.7;
}
</style>
