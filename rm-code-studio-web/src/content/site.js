import { pick } from '@/i18n.js'

// Textos comunes a todas las páginas: cabecera, pie y plantilla de páginas legales
export const SITE_TEXT = pick({
  es: {
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    languageSelector: 'Idioma',
    backToSite: 'Volver a la web',
    tagline: 'Consultoría tecnológica y desarrollo de software',
    rights: 'Todos los derechos reservados.',
    lastUpdated: 'Última actualización',
    tableOfContents: 'Índice'
  },
  ca: {
    openMenu: 'Obrir el menú',
    closeMenu: 'Tancar el menú',
    languageSelector: 'Idioma',
    backToSite: 'Tornar al web',
    tagline: 'Consultoria tecnològica i desenvolupament de programari',
    rights: 'Tots els drets reservats.',
    lastUpdated: 'Darrera actualització',
    tableOfContents: 'Índex'
  },
  en: {
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageSelector: 'Language',
    backToSite: 'Back to the website',
    tagline: 'Technology consulting and software development',
    rights: 'All rights reserved.',
    lastUpdated: 'Last updated',
    tableOfContents: 'Contents'
  }
})
