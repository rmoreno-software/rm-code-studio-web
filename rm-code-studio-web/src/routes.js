// Rutas de cada página en cada idioma. Las usan el selector de idioma, los enlaces internos
// y vite.config.js (que compila un HTML por ruta). Sin dependencias del navegador.
// Cada ruta es una carpeta con su index.html: la URL es la misma en local y en cualquier hosting.
export const LOCALES = ['es', 'ca', 'en']
export const DEFAULT_LOCALE = 'es'

export const ROUTES = {
  home: { es: '/', ca: '/ca/', en: '/en/' },
  legalNotice: { es: '/aviso-legal/', ca: '/ca/avis-legal/', en: '/en/legal-notice/' },
  privacy: { es: '/politica-de-privacidad/', ca: '/ca/politica-de-privacitat/', en: '/en/privacy-policy/' },
  cookies: { es: '/politica-de-cookies/', ca: '/ca/politica-de-cookies/', en: '/en/cookie-policy/' }
}

/** '/' → 'index.html' · '/ca/avis-legal/' → 'ca/avis-legal/index.html' */
export const routeToFile = route => `${route.slice(1)}index.html`
