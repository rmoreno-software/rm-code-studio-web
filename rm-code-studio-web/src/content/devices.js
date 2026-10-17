import { pick } from '@/i18n.js'

export const DEVICES_SECTION = pick({
  es: {
    title: 'Una solución. Todas las pantallas.',
    intro: 'Ordenador, web, móvil, tablet, reloj o máquina: una sola persona para todo el ecosistema.'
  },
  ca: {
    title: 'Una solució. Totes les pantalles.',
    intro: "Ordinador, web, mòbil, tauleta, rellotge o màquina: una sola persona per a tot l'ecosistema."
  },
  en: {
    title: 'One solution. Every screen.',
    intro: 'Desktop, web, mobile, tablet, watch or machine: one person for the whole ecosystem.'
  }
})

// `kind` elige la maqueta dibujada en DeviceMockup.vue
const LABELS = pick({
  es: { desktop: 'Ordenador', browser: 'Web', tablet: 'Tablet', phone: 'Móvil', watch: 'Reloj', machine: 'Maquinaria' },
  ca: { desktop: 'Ordinador', browser: 'Web', tablet: 'Tauleta', phone: 'Mòbil', watch: 'Rellotge', machine: 'Maquinària' },
  en: { desktop: 'Desktop', browser: 'Web', tablet: 'Tablet', phone: 'Mobile', watch: 'Watch', machine: 'Machinery' }
})

export const DEVICES = ['desktop', 'browser', 'tablet', 'phone', 'watch', 'machine'].map(kind => ({
  kind,
  label: LABELS[kind]
}))
