import { pick } from '@/i18n.js'

export const ABOUT_SECTION = pick({
  es: {
    eyebrow: '02 — Sobre mí',
    title: 'Hola, soy Roger.',
    portraitAlt: 'Retrato de Roger Moreno',
    lead: 'Hola, soy Roger. Ingeniero informático especializado en software y MBA. Ayudo a empresas a resolver problemas reales con tecnología: menos tareas manuales, sistemas conectados y herramientas que su equipo usa de verdad.',
    text: 'Me ocupo del proyecto de principio a fin, desde el análisis y la propuesta hasta el desarrollo y la puesta en marcha. Mi regla es sencilla: escuchar primero, proponer después, y no complicar lo que puede ser simple.',
    business: ['Negocio', 'MBA'],
    software: ['Software', 'Ingeniería'],
    overlap: 'Doble mirada'
  },
  ca: {
    eyebrow: '02 — Sobre mi',
    title: 'Hola, soc en Roger.',
    portraitAlt: 'Retrat de Roger Moreno',
    lead: "Hola, soc en Roger. Enginyer informàtic especialitzat en programari i MBA. Ajudo empreses a resoldre problemes reals amb tecnologia: menys tasques manuals, sistemes connectats i eines que el seu equip fa servir de debò.",
    text: "M'ocupo del projecte de principi a fi, des de l'anàlisi i la proposta fins al desenvolupament i la posada en marxa. La meva regla és senzilla: escoltar primer, proposar després, i no complicar el que pot ser simple.",
    business: ['Negoci', 'MBA'],
    software: ['Programari', 'Enginyeria'],
    overlap: 'Doble mirada'
  },
  en: {
    eyebrow: '02 — About me',
    title: "Hi, I'm Roger.",
    portraitAlt: 'Portrait of Roger Moreno',
    lead: "Hi, I'm Roger. A computer engineer specialising in software, with an MBA. I help companies solve real problems with technology: fewer manual tasks, connected systems and tools their teams actually use.",
    text: "I take care of the project from start to finish, from analysis and proposal through to development and go-live. My rule is simple: listen first, propose second, and don't overcomplicate what can be simple.",
    business: ['Business', 'MBA'],
    software: ['Software', 'Engineering'],
    overlap: 'Dual perspective'
  }
})

export const ABOUT_FACTS = pick({
  es: [
    {
      title: 'Formación',
      items: [
        'Ingeniería Informática, especialidad en Ingeniería del Software',
        'MBA (Master in Business Administration)'
      ]
    },
    {
      title: 'Cómo me gusta trabajar',
      items: [
        'Explico las cosas con claridad, sin tecnicismos innecesarios.',
        'Busco la solución más sencilla que resuelva el problema.',
        'Soy transparente con plazos y costes, también cuando algo no sale como estaba previsto.'
      ]
    }
  ],
  ca: [
    {
      title: 'Formació',
      items: [
        'Enginyeria Informàtica, especialitat en Enginyeria del Programari',
        'MBA (Master in Business Administration)'
      ]
    },
    {
      title: "Com m'agrada treballar",
      items: [
        'Explico les coses amb claredat, sense tecnicismes innecessaris.',
        'Busco la solució més senzilla que resolgui el problema.',
        'Soc transparent amb terminis i costos, també quan alguna cosa no surt com estava previst.'
      ]
    }
  ],
  en: [
    {
      title: 'Education',
      items: [
        'Degree in Computer Engineering, specialising in Software Engineering',
        'MBA (Master of Business Administration)'
      ]
    },
    {
      title: 'How I like to work',
      items: [
        'I explain things clearly, without unnecessary jargon.',
        'I look for the simplest solution that solves the problem.',
        "I'm transparent about timelines and costs, even when something doesn't go to plan."
      ]
    }
  ]
})
