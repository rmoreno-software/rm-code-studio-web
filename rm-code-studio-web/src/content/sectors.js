import { pick } from '@/i18n.js'

export const SECTORS_SECTION = pick({
  es: {
    eyebrow: '04 — Sectores y casos de uso',
    title: 'Soluciones para cualquier tipo de empresa',
    intro: 'Desde pymes y comercios hasta grandes organizaciones y sector público. Algunos ejemplos de lo que puedo resolver:',
    note: 'Si tu sector no aparece, no importa: los problemas de fondo (tiempo, errores, comunicación, datos) se repiten en todas partes.'
  },
  ca: {
    eyebrow: "04 — Sectors i casos d'ús",
    title: "Solucions per a qualsevol tipus d'empresa",
    intro: 'Des de pimes i comerços fins a grans organitzacions i sector públic. Alguns exemples del que puc resoldre:',
    note: "Si el teu sector no hi apareix, no passa res: els problemes de fons (temps, errors, comunicació, dades) es repeteixen a tot arreu."
  },
  en: {
    eyebrow: '04 — Industries and use cases',
    title: 'Solutions for any kind of company',
    intro: 'From small businesses and shops to large organisations and the public sector. Some examples of what I can solve:',
    note: "If your industry isn't listed, it doesn't matter: the underlying problems (time, errors, communication, data) are the same everywhere."
  }
})

export const SECTORS = pick({
  es: [
    { name: 'Servicios y atención al cliente', example: 'Recordatorios de cita y avisos por WhatsApp que reducen ausencias y llamadas.' },
    { name: 'Comercio y e-commerce', example: 'Tienda online sincronizada con stock, facturación y logística.' },
    { name: 'Industria y fabricación', example: 'Aplicaciones para máquinas y terminales de planta que registran producción en tiempo real.' },
    { name: 'Logística y transporte', example: 'App móvil para conductores con rutas, entregas y firma digital.' },
    { name: 'Sector público y empresas municipales', example: 'Integración con sistemas de la administración y gestión de trámites.' },
    { name: 'Salud y bienestar', example: 'Agenda online, comunicación con pacientes y datos en dispositivos portátiles.' },
    { name: 'Despachos profesionales', example: 'Automatización de documentos y clasificación de correo con IA.' },
    { name: 'Hostelería y turismo', example: 'Reservas, pedidos y comunicación con clientes desde el móvil.' }
  ],
  ca: [
    { name: 'Serveis i atenció al client', example: 'Recordatoris de cita i avisos per WhatsApp que redueixen absències i trucades.' },
    { name: 'Comerç i e-commerce', example: 'Botiga en línia sincronitzada amb estoc, facturació i logística.' },
    { name: 'Indústria i fabricació', example: 'Aplicacions per a màquines i terminals de planta que registren la producció en temps real.' },
    { name: 'Logística i transport', example: 'App mòbil per a conductors amb rutes, lliuraments i signatura digital.' },
    { name: 'Sector públic i empreses municipals', example: "Integració amb sistemes de l'administració i gestió de tràmits." },
    { name: 'Salut i benestar', example: 'Agenda en línia, comunicació amb pacients i dades en dispositius portàtils.' },
    { name: 'Despatxos professionals', example: 'Automatització de documents i classificació de correu amb IA.' },
    { name: 'Hostaleria i turisme', example: 'Reserves, comandes i comunicació amb clients des del mòbil.' }
  ],
  en: [
    { name: 'Services and customer care', example: 'Appointment reminders and WhatsApp notifications that reduce no-shows and calls.' },
    { name: 'Retail and e-commerce', example: 'Online shop synchronised with stock, invoicing and logistics.' },
    { name: 'Industry and manufacturing', example: 'Applications for machines and shop-floor terminals that record production in real time.' },
    { name: 'Logistics and transport', example: 'Mobile app for drivers with routes, deliveries and digital signatures.' },
    { name: 'Public sector and municipal companies', example: 'Integration with government systems and management of administrative procedures.' },
    { name: 'Health and wellbeing', example: 'Online booking, patient communication and data on wearable devices.' },
    { name: 'Professional firms', example: 'Document automation and AI-powered email sorting.' },
    { name: 'Hospitality and tourism', example: 'Bookings, orders and customer communication from a mobile phone.' }
  ]
})
