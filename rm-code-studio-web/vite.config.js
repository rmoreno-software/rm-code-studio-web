import { fileURLToPath, URL } from 'node:url'
import { relative } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ROUTES, LOCALES, DEFAULT_LOCALE, routeToFile } from './src/routes.js'

// Dominio público: se usa para las URLs canónicas, los enlaces hreflang y el sitemap
const SITE_URL = 'https://rogermorenotech.com'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))

// Un HTML por página e idioma (ver src/routes.js)
const pageFiles = Object.values(ROUTES).flatMap(byLocale => Object.values(byLocale).map(routeToFile))

/** Versiones de una página en cada idioma, más x-default (la del idioma por defecto) */
const alternatesOf = byLocale => [
  ...LOCALES.map(locale => ({ hreflang: locale, href: SITE_URL + byLocale[locale] })),
  { hreflang: 'x-default', href: SITE_URL + byLocale[DEFAULT_LOCALE] }
]

/**
 * Añade a la <head> de cada HTML lo que es igual en todas las páginas: iconos, color del tema,
 * URL canónica y los enlaces hreflang a la misma página en los demás idiomas.
 */
function pageHead() {
  return {
    name: 'page-head',
    transformIndexHtml(html, { filename }) {
      const file = relative(projectRoot, filename).replaceAll('\\', '/')
      const byLocale = Object.values(ROUTES).find(routes => LOCALES.some(locale => routeToFile(routes[locale]) === file))
      const currentRoute = byLocale && Object.values(byLocale).find(route => routeToFile(route) === file)

      const link = attrs => ({ tag: 'link', attrs, injectTo: 'head' })
      const tags = [
        link({ rel: 'icon', href: '/logo-r.svg', type: 'image/svg+xml' }),
        link({ rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }),
        { tag: 'meta', attrs: { name: 'theme-color', content: '#ec3013' }, injectTo: 'head' }
      ]
      if (!currentRoute) return tags

      return [
        ...tags,
        link({ rel: 'canonical', href: SITE_URL + currentRoute }),
        ...alternatesOf(byLocale).map(alternate => link({ rel: 'alternate', ...alternate }))
      ]
    }
  }
}

/**
 * Genera dist/sitemap.xml en cada build: una entrada por página e idioma,
 * cada una con sus versiones en los demás idiomas.
 */
function sitemap() {
  return {
    name: 'sitemap',
    apply: 'build',
    generateBundle() {
      const entries = Object.values(ROUTES).flatMap(byLocale =>
        LOCALES.map(locale => {
          const alternates = alternatesOf(byLocale)
            .map(({ hreflang, href }) => `    <xhtml:link rel="alternate" hreflang="${hreflang}" href="${href}"/>`)
            .join('\n')
          return `  <url>\n    <loc>${SITE_URL + byLocale[locale]}</loc>\n${alternates}\n  </url>`
        })
      )

      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: [
          '<?xml version="1.0" encoding="UTF-8"?>',
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
          ...entries,
          '</urlset>',
          ''
        ].join('\n')
      })
    }
  }
}

export default defineConfig({
  plugins: [vue(), pageHead(), sitemap()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(pageFiles.map(file => [file.replace(/\/?index\.html$/, '') || 'home', fileURLToPath(new URL(file, import.meta.url))]))
    }
  }
})
