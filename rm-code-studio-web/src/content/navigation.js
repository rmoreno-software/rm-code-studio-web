import { pick, routeTo } from '@/i18n.js'

// Anclas de las secciones: si cambias una, el menú y los enlaces internos se actualizan solos
export const SECTION_IDS = {
  services: 'servicios',
  about: 'sobre-mi',
  method: 'metodo',
  sectors: 'sectores',
  faq: 'faq',
  contact: 'contacto'
}

const NAV_LABELS = pick({
  es: { services: 'Servicios', about: 'Sobre mí', method: 'Cómo trabajo', sectors: 'Sectores', faq: 'Preguntas' },
  ca: { services: 'Serveis', about: 'Sobre mi', method: 'Com treballo', sectors: 'Sectors', faq: 'Preguntes' },
  en: { services: 'Services', about: 'About me', method: 'How I work', sectors: 'Industries', faq: 'FAQ' }
})

export const NAV_LINKS = ['services', 'about', 'method', 'sectors', 'faq'].map(key => ({
  label: NAV_LABELS[key],
  href: `#${SECTION_IDS[key]}`
}))

export const PRIMARY_CTA = {
  label: pick({ es: 'Cuéntame tu proyecto', ca: "Explica'm el teu projecte", en: 'Tell me about your project' }),
  href: `#${SECTION_IDS.contact}`
}

export const HOME_HREF = routeTo('home')

// Páginas legales (una página HTML por idioma, ver src/routes.js)
export const LEGAL_LINKS = {
  legalNotice: {
    label: pick({ es: 'Aviso legal', ca: 'Avís legal', en: 'Legal notice' }),
    href: routeTo('legalNotice')
  },
  privacy: {
    label: pick({ es: 'Política de privacidad', ca: 'Política de privacitat', en: 'Privacy policy' }),
    href: routeTo('privacy')
  },
  cookies: {
    label: pick({ es: 'Política de cookies', ca: 'Política de cookies', en: 'Cookie policy' }),
    href: routeTo('cookies')
  }
}
