import { pick } from '@/i18n.js'

export const SERVICES_SECTION = pick({
  es: {
    eyebrow: '01 — Servicios',
    title: 'Qué puedo hacer por tu empresa',
    intro: 'Cada empresa tiene problemas distintos, pero casi todos se resuelven con la misma receta: entender bien el negocio, elegir la tecnología adecuada y ponerla en marcha sin fricciones.',
    more: '¿No ves tu caso en la lista? Probablemente también tenga solución.',
    moreLink: 'Escríbeme →'
  },
  ca: {
    eyebrow: '01 — Serveis',
    title: 'Què puc fer per la teva empresa',
    intro: "Cada empresa té problemes diferents, però gairebé tots es resolen amb la mateixa recepta: entendre bé el negoci, triar la tecnologia adequada i posar-la en marxa sense friccions.",
    more: 'No hi veus el teu cas? Probablement també té solució.',
    moreLink: 'Escriu-me →'
  },
  en: {
    eyebrow: '01 — Services',
    title: 'What I can do for your company',
    intro: 'Every company has different problems, but almost all of them are solved with the same recipe: understand the business well, choose the right technology and roll it out smoothly.',
    more: "Don't see your case on the list? It can probably be solved too.",
    moreLink: 'Write to me →'
  }
})

// `icon` es un nombre de AppIcon (mismo orden que los servicios)
const ICONS = ['target', 'code', 'integration', 'sparkle', 'chat', 'wrench']

const TEXTS = pick({
  es: [
    {
      title: 'Consultoría tecnológica y estratégica',
      description: 'Te ayudo a decidir antes de invertir. Analizo tus procesos, sistemas y costes, detecto dónde se pierde tiempo o dinero y te propongo un plan de acción priorizado y realista.',
      features: [
        'Diagnóstico de sistemas y procesos',
        'Plan director de tecnología y transformación digital',
        'Selección de proveedores, software y herramientas',
        'Dirección de proyectos y CIO a tiempo parcial'
      ]
    },
    {
      title: 'Desarrollo de software a medida',
      description: 'Cuando las herramientas estándar no encajan, construyo la que necesitas. Aplicaciones de gestión, portales, áreas de cliente y herramientas internas, pensadas para que tu equipo las use desde el primer día.',
      features: [
        'Aplicaciones web y de escritorio',
        'Apps para smartphone y tablet',
        'Aplicaciones para relojes inteligentes y dispositivos conectados',
        'Software para maquinaria, terminales y equipos específicos'
      ]
    },
    {
      title: 'Integraciones entre sistemas',
      description: 'Haz que tus programas hablen entre sí. Conecto ERP, CRM, contabilidad, tienda online, bases de datos y servicios externos para eliminar el trabajo manual y los errores de copiar y pegar.',
      features: [
        'Conexión mediante API y servicios web',
        'Sincronización de datos entre aplicaciones',
        'Migración de datos desde sistemas antiguos',
        'Automatización de flujos de trabajo'
      ]
    },
    {
      title: 'Inteligencia artificial aplicada',
      description: 'IA útil, no de escaparate. Identifico las tareas donde la IA ahorra horas reales y la integro en tus herramientas de forma segura y controlada.',
      features: [
        'Asistentes y chatbots entrenados con la información de tu empresa',
        'Clasificación y extracción automática de documentos',
        'Análisis de datos y apoyo a la toma de decisiones',
        'Formación del equipo en el uso de herramientas de IA'
      ]
    },
    {
      title: 'Mensajería automática y WhatsApp Business',
      description: 'Comunícate con tus clientes donde ya están. Implanto envíos automáticos y conversaciones por WhatsApp conectados a tus sistemas.',
      features: [
        'Avisos, recordatorios y confirmaciones automáticas',
        'Notificaciones de estado de pedidos, citas o servicios',
        'Atención al cliente con respuestas automáticas e IA',
        'Integración con la API oficial de WhatsApp Business'
      ]
    },
    {
      title: 'Soporte, mantenimiento y evolución',
      description: 'La tecnología no termina en la entrega. Mantengo, actualizo y mejoro las soluciones para que sigan funcionando y creciendo con tu negocio.',
      features: [
        'Mantenimiento correctivo y evolutivo',
        'Revisión de seguridad y copias de respaldo',
        'Bolsa de horas para mejoras y soporte'
      ]
    }
  ],
  ca: [
    {
      title: 'Consultoria tecnològica i estratègica',
      description: "T'ajudo a decidir abans d'invertir. Analitzo els teus processos, sistemes i costos, detecto on es perd temps o diners i et proposo un pla d'acció prioritzat i realista.",
      features: [
        'Diagnòstic de sistemes i processos',
        'Pla director de tecnologia i transformació digital',
        'Selecció de proveïdors, programari i eines',
        'Direcció de projectes i CIO a temps parcial'
      ]
    },
    {
      title: 'Desenvolupament de programari a mida',
      description: "Quan les eines estàndard no encaixen, construeixo la que necessites. Aplicacions de gestió, portals, àrees de client i eines internes, pensades perquè el teu equip les faci servir des del primer dia.",
      features: [
        "Aplicacions web i d'escriptori",
        'Apps per a telèfon mòbil i tauleta',
        'Aplicacions per a rellotges intel·ligents i dispositius connectats',
        'Programari per a maquinària, terminals i equips específics'
      ]
    },
    {
      title: 'Integracions entre sistemes',
      description: "Fes que els teus programes parlin entre ells. Connecto ERP, CRM, comptabilitat, botiga en línia, bases de dades i serveis externs per eliminar la feina manual i els errors de copiar i enganxar.",
      features: [
        'Connexió mitjançant API i serveis web',
        'Sincronització de dades entre aplicacions',
        'Migració de dades des de sistemes antics',
        'Automatització de fluxos de treball'
      ]
    },
    {
      title: 'Intel·ligència artificial aplicada',
      description: "IA útil, no d'aparador. Identifico les tasques on la IA estalvia hores reals i la integro a les teves eines de manera segura i controlada.",
      features: [
        'Assistents i xatbots entrenats amb la informació de la teva empresa',
        'Classificació i extracció automàtica de documents',
        'Anàlisi de dades i suport a la presa de decisions',
        "Formació de l'equip en l'ús d'eines d'IA"
      ]
    },
    {
      title: 'Missatgeria automàtica i WhatsApp Business',
      description: "Comunica't amb els teus clients allà on ja són. Implanto enviaments automàtics i converses per WhatsApp connectats als teus sistemes.",
      features: [
        'Avisos, recordatoris i confirmacions automàtiques',
        "Notificacions d'estat de comandes, cites o serveis",
        'Atenció al client amb respostes automàtiques i IA',
        "Integració amb l'API oficial de WhatsApp Business"
      ]
    },
    {
      title: 'Suport, manteniment i evolució',
      description: "La tecnologia no s'acaba amb el lliurament. Mantinc, actualitzo i milloro les solucions perquè continuïn funcionant i creixent amb el teu negoci.",
      features: [
        'Manteniment correctiu i evolutiu',
        'Revisió de seguretat i còpies de seguretat',
        "Borsa d'hores per a millores i suport"
      ]
    }
  ],
  en: [
    {
      title: 'Technology and strategy consulting',
      description: 'I help you decide before you invest. I analyse your processes, systems and costs, find where time or money is being lost and propose a prioritised, realistic action plan.',
      features: [
        'Assessment of systems and processes',
        'Technology and digital transformation roadmap',
        'Selection of vendors, software and tools',
        'Project management and part-time CIO'
      ]
    },
    {
      title: 'Custom software development',
      description: "When off-the-shelf tools don't fit, I build the one you need. Management applications, portals, customer areas and internal tools, designed so your team can use them from day one.",
      features: [
        'Web and desktop applications',
        'Smartphone and tablet apps',
        'Applications for smartwatches and connected devices',
        'Software for machinery, terminals and specialised equipment'
      ]
    },
    {
      title: 'System integrations',
      description: 'Make your software talk to each other. I connect ERP, CRM, accounting, online shop, databases and external services to eliminate manual work and copy-and-paste errors.',
      features: [
        'Connection via APIs and web services',
        'Data synchronisation between applications',
        'Data migration from legacy systems',
        'Workflow automation'
      ]
    },
    {
      title: 'Applied artificial intelligence',
      description: 'Useful AI, not window dressing. I identify the tasks where AI saves real hours and integrate it into your tools safely and under control.',
      features: [
        "Assistants and chatbots trained on your company's information",
        'Automatic document classification and extraction',
        'Data analysis and decision support',
        'Training your team to use AI tools'
      ]
    },
    {
      title: 'Automated messaging and WhatsApp Business',
      description: 'Reach your customers where they already are. I set up automated messages and WhatsApp conversations connected to your systems.',
      features: [
        'Automatic alerts, reminders and confirmations',
        'Status updates for orders, appointments or services',
        'Customer service with automated replies and AI',
        'Integration with the official WhatsApp Business API'
      ]
    },
    {
      title: 'Support, maintenance and evolution',
      description: "Technology doesn't end at delivery. I maintain, update and improve solutions so they keep working and growing with your business.",
      features: [
        'Corrective and evolutionary maintenance',
        'Security reviews and backups',
        'Pre-paid hours for improvements and support'
      ]
    }
  ]
})

export const SERVICES = TEXTS.map((service, index) => ({ icon: ICONS[index], ...service }))
