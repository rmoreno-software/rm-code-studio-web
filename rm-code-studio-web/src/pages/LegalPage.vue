<script setup>
// Plantilla de las páginas legales: índice a la izquierda y apartados numerados a la derecha.
// El contenido llega por `page` (ver src/content/legal-notice.js) y `pageKey` es su clave en src/routes.js.
// Cada apartado es una lista de bloques, que se pintan en orden:
//   'texto' o ['texto', { label, href }, …]   → párrafo
//   { list: [...] }                            → lista con viñetas
//   { details: [{ label, value, href? }] }     → ficha de datos (etiqueta / valor)
//   { table: { columns: [...], rows: [[...]], rowHeader? } } → tabla (rowHeader: 1ª columna en negrita)
//   { links: [{ label, href }] }               → enlaces externos (se abren en otra pestaña)
import AppIcon from '@/components/ui/AppIcon.vue'
import RichText from '@/components/ui/RichText.vue'
import SectionEyebrow from '@/components/ui/SectionEyebrow.vue'
import LegalNav from '@/components/layout/LegalNav.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import { HOME_HREF } from '@/content/navigation.js'
import { SITE_TEXT } from '@/content/site.js'
import { padNumber } from '@/utils/format.js'

defineProps({
  page: { type: Object, required: true },
  pageKey: { type: String, required: true }
})

const isParagraph = block => typeof block === 'string' || Array.isArray(block)
</script>

<template>
  <LegalNav :page="pageKey" />
  <main class="container legal">
    <aside class="legal-aside">
      <SectionEyebrow>{{ page.eyebrow }}</SectionEyebrow>
      <h1 class="section-title legal-title">{{ page.title }}</h1>
      <p class="legal-updated">{{ SITE_TEXT.lastUpdated }}: {{ page.updated }}</p>

      <nav class="legal-toc" :aria-label="SITE_TEXT.tableOfContents">
        <ol>
          <li v-for="(section, index) in page.sections" :key="section.id">
            <a :href="`#${section.id}`">
              <span class="legal-number">{{ padNumber(index + 1) }}</span>
              {{ section.shortTitle ?? section.title }}
            </a>
          </li>
        </ol>
      </nav>
    </aside>

    <div class="legal-body">
      <p v-if="page.intro" class="legal-intro"><RichText :content="page.intro" /></p>

      <section
        v-for="(section, index) in page.sections"
        :id="section.id"
        :key="section.id"
        class="section-anchor legal-section"
      >
        <h2 class="legal-heading">
          <span class="legal-number">{{ padNumber(index + 1) }}</span>{{ section.title }}
        </h2>

        <template v-for="(block, i) in section.blocks" :key="i">
          <p v-if="isParagraph(block)"><RichText :content="block" /></p>

          <ul v-else-if="block.list" class="bullet-list legal-list">
            <li v-for="(item, j) in block.list" :key="j"><span><RichText :content="item" /></span></li>
          </ul>

          <dl v-else-if="block.details" class="legal-details">
            <template v-for="detail in block.details" :key="detail.label">
              <dt>{{ detail.label }}</dt>
              <dd>
                <a v-if="detail.href" :href="detail.href">{{ detail.value }}</a>
                <template v-else>{{ detail.value }}</template>
              </dd>
            </template>
          </dl>

          <table v-else-if="block.table" class="legal-table">
            <thead>
              <tr><th v-for="column in block.table.columns" :key="column" scope="col">{{ column }}</th></tr>
            </thead>
            <tbody>
              <tr v-for="(row, j) in block.table.rows" :key="j">
                <component
                  :is="block.table.rowHeader && k === 0 ? 'th' : 'td'"
                  v-for="(cell, k) in row"
                  :key="k"
                  :scope="block.table.rowHeader && k === 0 ? 'row' : undefined"
                  :data-label="block.table.columns[k]"
                >{{ cell }}</component>
              </tr>
            </tbody>
          </table>

          <ul v-else-if="block.links" class="legal-links">
            <li v-for="link in block.links" :key="link.href">
              <a :href="link.href" target="_blank" rel="noopener noreferrer">
                {{ link.label }} <AppIcon name="external" :size="18" />
              </a>
            </li>
          </ul>
        </template>
      </section>

      <a :href="HOME_HREF" class="btn btn-primary btn-cta legal-back">
        <AppIcon name="arrow-left" :size="18" /> {{ SITE_TEXT.backToSite }}
      </a>
    </div>
  </main>
  <SiteFooter />
</template>

<style scoped>
.legal {
  padding-block: var(--section-space) var(--section-space-md);
  display: grid;
  grid-template-columns: minmax(0, 450px) minmax(0, 1fr);
  gap: 48px clamp(48px, 7vw, 90px);
  align-items: start;
}

/* — columna izquierda: título e índice — */
.legal-aside {
  position: sticky;
  top: 100px;
}

.legal-title {
  font-size: clamp(48px, 6vw, 84px);
}

.legal-updated {
  margin: 28px 0 0;
  font-size: 16px;
  color: color-mix(in srgb, var(--color-text) 70%, transparent);
}

.legal-toc ol {
  list-style: none;
  margin: 48px 0 0;
  padding: 0;
  border-bottom: 2px solid var(--color-divider);
}

.legal-toc a {
  display: flex;
  gap: 20px;
  padding: 14px 0;
  border-top: 2px solid var(--color-divider);
  font-size: 17px;
  text-decoration: none;
}

.legal-number {
  flex: none;
  min-width: 26px;
  font-family: var(--font-heading);
  font-weight: 800;
  color: var(--color-accent-700);
}

/* — columna derecha: apartados — */
.legal-section {
  padding-top: 28px;
  margin-bottom: 56px;
  border-top: 2px solid var(--color-text);
  scroll-margin-top: 90px;
}

.legal-heading {
  display: flex;
  align-items: baseline;
  gap: 20px;
  margin: 0 0 24px;
  font-size: clamp(26px, 3vw, 34px);
}
.legal-heading .legal-number { font-size: 20px; }

.legal-intro {
  margin: 0 0 64px;
  font-size: clamp(19px, 1.8vw, 23px);
  line-height: 1.65;
}

.legal-section p {
  margin: 0 0 20px;
  font-size: 19px;
  line-height: 1.85;
}

.legal-list {
  --bullet-offset: 13px;
  margin: 0 0 28px;
  padding: 0;
  gap: 10px;
  font-size: 19px;
  line-height: 1.7;
}

.legal-details {
  margin: 36px 0 0;
  display: grid;
  grid-template-columns: minmax(140px, 250px) 1fr;
  font-size: 19px;
  line-height: 1.5;
  border-bottom: 2px solid var(--color-divider);
}
.legal-details dt {
  padding: 16px 24px 16px 0;
  border-top: 2px solid var(--color-divider);
  font-family: var(--font-heading);
  font-weight: 800;
}
.legal-details dd {
  margin: 0;
  padding: 16px 0;
  border-top: 2px solid var(--color-divider);
  overflow-wrap: anywhere;
}
.legal-heading + .legal-details { margin-top: 0; }

.legal-table {
  width: 100%;
  margin: 8px 0 28px;
  border-collapse: collapse;
  font-size: 17px;
  line-height: 1.6;
  text-align: left;
  border-bottom: 2px solid var(--color-divider);
}
.legal-table thead th {
  padding: 14px 24px 14px 0;
  border-top: 2px solid var(--color-text);
  border-bottom: 2px solid var(--color-text);
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}
.legal-table tbody > tr > * {
  padding: 16px 24px 16px 0;
  border-top: 2px solid var(--color-divider);
  vertical-align: top;
  font-weight: 400;
}
.legal-table tbody th {
  font-family: var(--font-heading);
  font-weight: 800;
  overflow-wrap: anywhere;
}
.legal-table :is(th, td):last-child { padding-right: 0; }

.legal-links {
  list-style: none;
  margin: 8px 0 28px;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
  gap: 0 32px;
}
.legal-links a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  padding: 14px 0;
  border-bottom: 2px solid var(--color-divider);
  font-size: 18px;
  text-decoration: none;
}
.legal-links svg { color: var(--color-accent); flex: none; }

.legal-back {
  margin-top: 8px;
  justify-content: flex-start;
  gap: 16px;
}

/* — una sola columna en pantallas estrechas — */
@media (max-width: 959px) {
  .legal { grid-template-columns: minmax(0, 1fr); }
  .legal-aside { position: static; }
  .legal-section p,
  .legal-list,
  .legal-details { font-size: 17px; }
}

/* En móvil la ficha y la tabla se apilan: etiqueta encima del valor */
@media (max-width: 520px) {
  .legal-details { grid-template-columns: minmax(0, 1fr); }
  .legal-details dt { padding-bottom: 0; }
  .legal-details dd { border-top: 0; padding-top: 4px; }

  .legal-table thead { display: none; }
  .legal-table tr { display: block; padding: 12px 0; border-top: 2px solid var(--color-divider); }
  .legal-table tbody > tr > * { display: block; padding: 4px 0; border: 0; }
  .legal-table tbody td::before {
    content: attr(data-label);
    display: block;
    font-family: var(--font-heading);
    font-weight: 800;
  }
}
</style>
