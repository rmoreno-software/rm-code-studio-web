import { pick } from '@/i18n.js'

// Datos de contacto: rellena los valores entre corchetes y se actualizan en toda la web
export const CONTACT = {
  businessName: 'Roger Moreno',
  email: 'contact@rogermorenotech.com',
  phone: '+34 609 56 86 83',
  linkedinLabel: '[LinkedIn]',
  linkedinUrl: '#',
  area: pick({ es: 'Cataluña', ca: 'Catalunya', en: 'Catalonia' }),
  formEndpoint: 'https://formspree.io/f/maeqvnwr'
}

// Datos identificativos del titular (aviso legal y política de privacidad)
export const OWNER = {
  legalName: 'Roger Moreno González',
  taxId: '46380156N',
  address: "C/ Font de l'Escot 34 2º 2ª"
}

const DETAIL_LABELS = pick({
  es: { email: 'Email', phone: 'Teléfono / WhatsApp', area: 'Zona' },
  ca: { email: 'Correu', phone: 'Telèfon / WhatsApp', area: 'Zona' },
  en: { email: 'Email', phone: 'Phone / WhatsApp', area: 'Area' }
})

export const CONTACT_DETAILS = [
  { label: DETAIL_LABELS.email, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { label: DETAIL_LABELS.phone, value: CONTACT.phone },
  /*{ label: 'LinkedIn', value: CONTACT.linkedinLabel, href: CONTACT.linkedinUrl },*/
  { label: DETAIL_LABELS.area, value: CONTACT.area }
]

// Textos de la sección de contacto y del formulario
export const CONTACT_SECTION = pick({
  es: {
    eyebrow: '07 — Contacto',
    title: '¿Hablamos de tu proyecto?',
    lead: 'Cuéntame qué necesitas o qué problema quieres resolver. Te respondo en menos de 24 horas laborables y la primera reunión no tiene coste ni compromiso.',
    fields: { name: 'Nombre', company: 'Empresa', email: 'Email', phone: 'Teléfono (opcional)', message: '¿En qué puedo ayudarte?' },
    consentBefore: 'He leído y acepto la ',
    consentLink: 'política de privacidad',
    submit: 'Enviar consulta',
    sending: 'Enviando…',
    error: `No se ha podido enviar. Inténtalo de nuevo o escríbeme a ${CONTACT.email}.`,
    success: 'Gracias. He recibido tu mensaje y te contestaré muy pronto.',
    sendAnother: 'Enviar otra consulta'
  },
  ca: {
    eyebrow: '07 — Contacte',
    title: 'Parlem del teu projecte?',
    lead: "Explica'm què necessites o quin problema vols resoldre. Et responc en menys de 24 hores laborables i la primera reunió no té cost ni compromís.",
    fields: { name: 'Nom', company: 'Empresa', email: 'Correu electrònic', phone: 'Telèfon (opcional)', message: 'En què et puc ajudar?' },
    consentBefore: "He llegit i accepto la ",
    consentLink: 'política de privacitat',
    submit: 'Enviar consulta',
    sending: 'Enviant…',
    error: `No s'ha pogut enviar. Torna-ho a provar o escriu-me a ${CONTACT.email}.`,
    success: "Gràcies. He rebut el teu missatge i et respondré molt aviat.",
    sendAnother: 'Enviar una altra consulta'
  },
  en: {
    eyebrow: '07 — Contact',
    title: 'Shall we talk about your project?',
    lead: "Tell me what you need or what problem you want to solve. I'll reply within 24 working hours, and the first meeting is free and with no obligation.",
    fields: { name: 'Name', company: 'Company', email: 'Email', phone: 'Phone (optional)', message: 'How can I help?' },
    consentBefore: "I have read and accept the ",
    consentLink: 'privacy policy',
    submit: 'Send enquiry',
    sending: 'Sending…',
    error: `The message could not be sent. Please try again or email me at ${CONTACT.email}.`,
    success: "Thank you. I've received your message and will reply very soon.",
    sendAnother: 'Send another enquiry'
  }
})
