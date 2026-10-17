// Anclas de las secciones: si cambias una, el menú y los enlaces internos se actualizan solos
export const SECTION_IDS = {
  services: 'servicios',
  about: 'sobre-mi',
  method: 'metodo',
  sectors: 'sectores',
  faq: 'faq',
  contact: 'contacto'
}

export const NAV_LINKS = [
  { label: 'Servicios', href: `#${SECTION_IDS.services}` },
  { label: 'Sobre mí', href: `#${SECTION_IDS.about}` },
  { label: 'Cómo trabajo', href: `#${SECTION_IDS.method}` },
  { label: 'Sectores', href: `#${SECTION_IDS.sectors}` },
  { label: 'Preguntas', href: `#${SECTION_IDS.faq}` }
]

export const PRIMARY_CTA = { label: 'Cuéntame tu proyecto', href: `#${SECTION_IDS.contact}` }

// TODO: enlazar las páginas legales
export const LEGAL_LINKS = {
  legalNotice: { label: 'Aviso legal', href: '#' },
  privacy: { label: 'Política de privacidad', href: '#' },
  cookies: { label: 'Política de cookies', href: '#' }
}
