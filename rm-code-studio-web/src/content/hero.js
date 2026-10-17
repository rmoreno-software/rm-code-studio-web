import { pick } from '@/i18n.js'

// Cabecera de la portada. `titleLines`: cada línea del titular; la última palabra de la última va en rojo.
export const HERO = pick({
  es: {
    eyebrow: 'Consultoría tecnológica · Software · IA',
    titleLines: ['Tecnología', 'que resuelve', 'problemas de'],
    titleAccent: 'negocio.',
    lead: 'Consultoría informática, desarrollo de software, integraciones e inteligencia artificial para empresas que quieren trabajar mejor, vender más y perder menos tiempo. Un solo interlocutor, de la estrategia a la puesta en marcha.',
    secondaryCta: 'Ver servicios'
  },
  ca: {
    eyebrow: 'Consultoria tecnològica · Programari · IA',
    titleLines: ['Tecnologia', 'que resol', 'problemes de'],
    titleAccent: 'negoci.',
    lead: "Consultoria informàtica, desenvolupament de programari, integracions i intel·ligència artificial per a empreses que volen treballar millor, vendre més i perdre menys temps. Un sol interlocutor, de l'estratègia a la posada en marxa.",
    secondaryCta: 'Veure serveis'
  },
  en: {
    eyebrow: 'Technology consulting · Software · AI',
    titleLines: ['Technology', 'that solves', 'real'],
    titleAccent: 'business problems.',
    lead: 'IT consulting, software development, integrations and artificial intelligence for companies that want to work better, sell more and waste less time. One single point of contact, from strategy to go-live.',
    secondaryCta: 'See services'
  }
})

// Etiquetas del diagrama animado de la cabecera
export const HERO_DIAGRAM = pick({
  es: { ai: 'IA', machine: 'MÁQUINA', center: ['TU', 'NEGOCIO'] },
  ca: { ai: 'IA', machine: 'MÀQUINA', center: ['EL TEU', 'NEGOCI'] },
  en: { ai: 'AI', machine: 'MACHINE', center: ['YOUR', 'BUSINESS'] }
})

// Cifras bajo la cabecera (los números se configuran en src/config.js)
export const STATS_LABELS = pick({
  es: {
    years: 'Años de experiencia en entornos profesionales',
    projects: 'Proyectos implantados',
    response: 'Tiempo de respuesta en días laborables'
  },
  ca: {
    years: "Anys d'experiència en entorns professionals",
    projects: 'Projectes implantats',
    response: 'Temps de resposta en dies laborables'
  },
  en: {
    years: 'Years of experience in professional environments',
    projects: 'Projects delivered',
    response: 'Response time on working days'
  }
})

// Banda roja "Hablemos"
export const CALL_TO_ACTION = pick({
  es: { lines: ['Si un proceso te cuesta', 'tiempo, dinero o clientes,', 'probablemente tiene solución.'], emphasis: 'Hablemos.' },
  ca: { lines: ["Si un procés et costa", 'temps, diners o clients,', 'probablement té solució.'], emphasis: 'Parlem-ne.' },
  en: { lines: ['If a process is costing you', 'time, money or customers,', 'it can probably be fixed.'], emphasis: "Let's talk." }
})
