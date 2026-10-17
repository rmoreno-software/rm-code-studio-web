// Datos de contacto: rellena los valores entre corchetes y se actualizan en toda la web
export const CONTACT = {
  businessName: '[Nombre comercial]',
  email: '[email]',
  phone: '[teléfono]',
  linkedinLabel: '[LinkedIn]',
  linkedinUrl: '#',
  area: '[zona de trabajo]'
}

export const CONTACT_DETAILS = [
  { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { label: 'Teléfono / WhatsApp', value: CONTACT.phone },
  { label: 'LinkedIn', value: CONTACT.linkedinLabel, href: CONTACT.linkedinUrl },
  { label: 'Zona', value: CONTACT.area }
]
