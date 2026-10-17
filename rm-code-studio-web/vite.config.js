import { fileURLToPath, URL } from 'node:url'
import { relative } from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ROUTES, LOCALES, DEFAULT_LOCALE, routeToFile } from './src/routes.js'

// Dominio público: se usa para las URLs canónicas y los enlaces hreflang
const SITE_URL = 'https://rogermorenotech.com'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))

// Un HTML por página e idioma (ver src/routes.js)
const pageFiles = Object.values(ROUTES).flatMap(byLocale => Object.values(byLocale).map(routeToFile))

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
        ...LOCALES.map(locale => link({ rel: 'alternate', hreflang: locale, href: SITE_URL + byLocale[locale] })),
        link({ rel: 'alternate', hreflang: 'x-default', href: SITE_URL + byLocale[DEFAULT_LOCALE] })
      ]
    }
  }
}

export default defineConfig({
  plugins: [vue(), pageHead()],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
  },
  build: {
    rollupOptions: {
      input: Object.fromEntries(pageFiles.map(file => [file.replace(/\/?index\.html$/, '') || 'home', fileURLToPath(new URL(file, import.meta.url))]))
    }
  }
})
