// Datos de contacto: rellena los valores entre corchetes y se actualizan en toda la web
export const CONTACT = {
  businessName: 'Roger Moreno',
  email: 'contact@rogermorenotech.com',
  phone: '+34 609 56 86 83',
  linkedinLabel: '[LinkedIn]',
  linkedinUrl: '#',
  area: 'Cataluña',
  formEndpoint: 'https://formspree.io/f/maeqvnwr'
}

export const CONTACT_DETAILS = [
  { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { label: 'Teléfono / WhatsApp', value: CONTACT.phone },
  /*{ label: 'LinkedIn', value: CONTACT.linkedinLabel, href: CONTACT.linkedinUrl },*/
  { label: 'Zona', value: CONTACT.area }
]
