import { pick } from '@/i18n.js'
import { CONTACT } from './contact.js'

export const FAQ_SECTION = pick({
  es: { eyebrow: '06 — FAQ', title: 'Preguntas frecuentes' },
  ca: { eyebrow: '06 — FAQ', title: 'Preguntes freqüents' },
  en: { eyebrow: '06 — FAQ', title: 'Frequently asked questions' }
})

export const FAQ = pick({
  es: [
    {
      question: '¿Trabajas con empresas pequeñas?',
      answer: 'Sí. Adapto el alcance al tamaño y presupuesto de cada empresa. A menudo, una mejora pequeña y bien elegida tiene más impacto que un gran proyecto.'
    },
    {
      question: '¿Cuánto cuesta un proyecto?',
      answer: 'Depende del alcance. Tras la primera reunión, gratuita, recibes una propuesta con precio cerrado o una estimación detallada. Sin letra pequeña.'
    },
    {
      question: '¿Cuánto tarda?',
      answer: 'Una integración o automatización sencilla puede estar lista en pocas semanas. Los desarrollos mayores se entregan por fases para que obtengas valor desde el principio.'
    },
    {
      question: '¿Puedes trabajar con los sistemas que ya tengo?',
      answer: 'Sí. Gran parte de mi trabajo consiste en conectar y mejorar lo que ya existe, sin obligarte a cambiarlo todo.'
    },
    {
      question: '¿Es segura la inteligencia artificial para mis datos?',
      answer: 'Se puede implantar de forma segura. Elijo proveedores y configuraciones que protegen tu información y cumplen el RGPD, y te explico qué datos se usan y cómo.'
    },
    {
      question: '¿Qué pasa cuando el proyecto termina?',
      answer: 'Puedes contratar mantenimiento o una bolsa de horas. Si prefieres gestionarlo internamente, entrego documentación y formación, y el código es tuyo.'
    },
    {
      question: '¿Trabajas en remoto?',
      answer: `Sí, en toda España y en otros países. Para reuniones o implantaciones presenciales me desplazo en ${CONTACT.area}.`
    }
  ],
  ca: [
    {
      question: 'Treballes amb empreses petites?',
      answer: "Sí. Adapto l'abast a la mida i al pressupost de cada empresa. Sovint, una millora petita i ben triada té més impacte que un gran projecte."
    },
    {
      question: 'Quant costa un projecte?',
      answer: "Depèn de l'abast. Després de la primera reunió, gratuïta, reps una proposta amb preu tancat o una estimació detallada. Sense lletra petita."
    },
    {
      question: 'Quant temps triga?',
      answer: "Una integració o automatització senzilla pot estar llesta en poques setmanes. Els desenvolupaments més grans es lliuren per fases perquè n'obtinguis valor des del principi."
    },
    {
      question: 'Pots treballar amb els sistemes que ja tinc?',
      answer: 'Sí. Bona part de la meva feina consisteix a connectar i millorar el que ja existeix, sense obligar-te a canviar-ho tot.'
    },
    {
      question: 'És segura la intel·ligència artificial per a les meves dades?',
      answer: "Es pot implantar de manera segura. Trio proveïdors i configuracions que protegeixen la teva informació i compleixen el RGPD, i t'explico quines dades s'utilitzen i com."
    },
    {
      question: 'Què passa quan el projecte acaba?',
      answer: "Pots contractar manteniment o una borsa d'hores. Si prefereixes gestionar-ho internament, lliuro documentació i formació, i el codi és teu."
    },
    {
      question: 'Treballes en remot?',
      answer: `Sí, a tot Espanya i a altres països. Per a reunions o implantacions presencials em desplaço per ${CONTACT.area}.`
    }
  ],
  en: [
    {
      question: 'Do you work with small businesses?',
      answer: 'Yes. I adapt the scope to the size and budget of each company. Often, a small, well-chosen improvement has more impact than a big project.'
    },
    {
      question: 'How much does a project cost?',
      answer: 'It depends on the scope. After the first meeting, which is free, you receive a proposal with a fixed price or a detailed estimate. No small print.'
    },
    {
      question: 'How long does it take?',
      answer: 'A simple integration or automation can be ready in a few weeks. Larger developments are delivered in phases so you get value from the start.'
    },
    {
      question: 'Can you work with the systems I already have?',
      answer: "Yes. Much of my work is connecting and improving what already exists, without forcing you to change everything."
    },
    {
      question: 'Is artificial intelligence safe for my data?',
      answer: "It can be implemented safely. I choose providers and configurations that protect your information and comply with the GDPR, and I explain which data is used and how."
    },
    {
      question: 'What happens when the project ends?',
      answer: 'You can hire maintenance or a block of pre-paid hours. If you prefer to manage it in-house, I hand over documentation and training, and the code is yours.'
    },
    {
      question: 'Do you work remotely?',
      answer: `Yes, across Spain and in other countries. For in-person meetings or deployments I travel within ${CONTACT.area}.`
    }
  ]
})
