import { pick } from '@/i18n.js'
import { CONTACT } from './contact.js'

export const METHOD_SECTION = pick({
  es: {
    eyebrow: '03 — Cómo trabajo',
    title: 'Un método claro, sin sorpresas',
    engagementTitle: 'Modalidades de colaboración',
    note: `Trabajo en remoto y presencialmente en ${CONTACT.area}.`
  },
  ca: {
    eyebrow: '03 — Com treballo',
    title: 'Un mètode clar, sense sorpreses',
    engagementTitle: 'Modalitats de col·laboració',
    note: `Treballo en remot i presencialment a ${CONTACT.area}.`
  },
  en: {
    eyebrow: '03 — How I work',
    title: 'A clear method, no surprises',
    engagementTitle: 'Ways of working together',
    note: `I work remotely and on-site in ${CONTACT.area}.`
  }
})

export const STEPS = pick({
  es: [
    { title: 'Escucho', description: 'Una primera reunión gratuita para entender tu negocio, el problema y lo que esperas conseguir.' },
    { title: 'Analizo', description: 'Reviso procesos, sistemas y datos para detectar la causa real y las opciones posibles.' },
    { title: 'Propongo', description: 'Recibes una propuesta por escrito con alcance, plazos y presupuesto cerrado o estimado.' },
    { title: 'Construyo', description: 'Desarrollo e integro por fases, con entregas frecuentes para que veas avances desde el principio.' },
    { title: 'Implanto', description: 'Pongo la solución en marcha, formo a tu equipo y acompaño los primeros días de uso.' },
    { title: 'Mejoro', description: 'Mido resultados y propongo ajustes para sacar el máximo partido a la inversión.' }
  ],
  ca: [
    { title: 'Escolto', description: 'Una primera reunió gratuïta per entendre el teu negoci, el problema i el que esperes aconseguir.' },
    { title: 'Analitzo', description: 'Reviso processos, sistemes i dades per detectar la causa real i les opcions possibles.' },
    { title: 'Proposo', description: 'Reps una proposta per escrit amb abast, terminis i pressupost tancat o estimat.' },
    { title: 'Construeixo', description: 'Desenvolupo i integro per fases, amb lliuraments freqüents perquè vegis avenços des del principi.' },
    { title: 'Implanto', description: "Poso la solució en marxa, formo el teu equip i t'acompanyo els primers dies d'ús." },
    { title: 'Milloro', description: 'Mesuro resultats i proposo ajustos per treure el màxim profit de la inversió.' }
  ],
  en: [
    { title: 'Listen', description: 'A free first meeting to understand your business, the problem and what you hope to achieve.' },
    { title: 'Analyse', description: 'I review processes, systems and data to find the real cause and the possible options.' },
    { title: 'Propose', description: 'You receive a written proposal with scope, timeline and a fixed or estimated budget.' },
    { title: 'Build', description: 'I develop and integrate in phases, with frequent deliveries so you see progress from the start.' },
    { title: 'Deploy', description: 'I put the solution into operation, train your team and support you through the first days of use.' },
    { title: 'Improve', description: 'I measure results and propose adjustments to get the most out of your investment.' }
  ]
})

// `marks`: cuadrados decorativos sobre cada modalidad ('filled' = relleno, 'outline' = solo borde)
const ENGAGEMENT_MARKS = [['filled'], ['filled', 'filled'], ['filled', 'outline'], ['filled', 'filled', 'filled']]

const ENGAGEMENT_TEXTS = pick({
  es: [
    { title: 'Proyecto cerrado', description: 'Necesidades bien definidas con alcance, plazo y precio fijos.' },
    { title: 'Bolsa de horas', description: 'Mejoras continuas, soporte y pequeños desarrollos.' },
    { title: 'Consultoría por sesiones', description: 'Decisiones puntuales, auditorías o segunda opinión.' },
    { title: 'CIO a tiempo parcial', description: 'Empresas sin director de tecnología que necesitan dirección estratégica.' }
  ],
  ca: [
    { title: 'Projecte tancat', description: 'Necessitats ben definides amb abast, termini i preu fixos.' },
    { title: "Borsa d'hores", description: 'Millores contínues, suport i petits desenvolupaments.' },
    { title: 'Consultoria per sessions', description: 'Decisions puntuals, auditories o segona opinió.' },
    { title: 'CIO a temps parcial', description: 'Empreses sense director de tecnologia que necessiten direcció estratègica.' }
  ],
  en: [
    { title: 'Fixed-scope project', description: 'Well-defined needs with fixed scope, timeline and price.' },
    { title: 'Pre-paid hours', description: 'Ongoing improvements, support and small developments.' },
    { title: 'Consulting sessions', description: 'One-off decisions, audits or a second opinion.' },
    { title: 'Part-time CIO', description: 'Companies without a technology director that need strategic leadership.' }
  ]
})

export const ENGAGEMENT_MODELS = ENGAGEMENT_TEXTS.map((model, index) => ({ ...model, marks: ENGAGEMENT_MARKS[index] }))
