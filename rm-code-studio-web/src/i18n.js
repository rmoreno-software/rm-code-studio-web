// Idioma de la página actual. Lo fija el atributo <html lang="…"> de cada HTML,
// así que cada idioma tiene su propia URL y no hace falta cambiarlo en tiempo de ejecución.
import { LOCALES, DEFAULT_LOCALE, ROUTES } from './routes.js'

const htmlLang = document.documentElement.lang

export const LOCALE = LOCALES.includes(htmlLang) ? htmlLang : DEFAULT_LOCALE

export const LANGUAGES = [
  { code: 'es', label: 'ES', name: 'Castellano' },
  { code: 'ca', label: 'CA', name: 'Català' },
  { code: 'en', label: 'EN', name: 'English' }
]

/** Devuelve la versión del idioma actual: pick({ es: …, ca: …, en: … }) */
export const pick = translations => translations[LOCALE] ?? translations[DEFAULT_LOCALE]

/** Ruta de una página ('home', 'legalNotice'…) en el idioma actual o en el indicado */
export const routeTo = (page, locale = LOCALE) => ROUTES[page][locale]
