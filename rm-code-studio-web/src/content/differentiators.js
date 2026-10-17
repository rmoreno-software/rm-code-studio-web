import { pick } from '@/i18n.js'

export const DIFFERENTIATORS_SECTION = pick({
  es: { eyebrow: '05 — Por qué trabajar conmigo', title: 'Lo que me diferencia' },
  ca: { eyebrow: '05 — Per què treballar amb mi', title: 'El que em diferencia' },
  en: { eyebrow: '05 — Why work with me', title: 'What sets me apart' }
})

export const DIFFERENTIATORS = pick({
  es: [
    { title: 'Un solo interlocutor', text: 'Hablas siempre con quien diseña y construye tu solución. Sin teléfono escacharrado.' },
    { title: 'Negocio primero', text: 'Cada propuesta se justifica por su retorno: horas ahorradas, errores evitados o ventas ganadas.' },
    { title: 'Experiencia real de dirección', text: 'He sido el responsable de tecnología de una organización. Sé lo que preocupa a quien firma el presupuesto.' },
    { title: 'Tecnología independiente', text: 'No vendo licencias ni tengo comisiones: recomiendo lo que te conviene.' },
    { title: 'Todo tipo de dispositivos', text: 'Ordenador, web, móvil, tablet, reloj o máquina: una sola persona para todo el ecosistema.' },
    { title: 'Transparencia', text: 'Presupuestos claros, plazos realistas y el código y los datos siempre son tuyos.' }
  ],
  ca: [
    { title: 'Un sol interlocutor', text: 'Parles sempre amb qui dissenya i construeix la teva solució. Sense telèfon espatllat.' },
    { title: 'Primer, el negoci', text: 'Cada proposta es justifica pel seu retorn: hores estalviades, errors evitats o vendes guanyades.' },
    { title: 'Experiència real de direcció', text: "He estat el responsable de tecnologia d'una organització. Sé què preocupa a qui signa el pressupost." },
    { title: 'Tecnologia independent', text: 'No venc llicències ni tinc comissions: recomano el que et convé.' },
    { title: 'Tota mena de dispositius', text: "Ordinador, web, mòbil, tauleta, rellotge o màquina: una sola persona per a tot l'ecosistema." },
    { title: 'Transparència', text: 'Pressupostos clars, terminis realistes i el codi i les dades sempre són teus.' }
  ],
  en: [
    { title: 'One point of contact', text: 'You always talk to the person who designs and builds your solution. Nothing gets lost in translation.' },
    { title: 'Business first', text: 'Every proposal is justified by its return: hours saved, errors avoided or sales won.' },
    { title: 'Real leadership experience', text: "I've been the head of technology at an organisation. I know what worries the person who signs off the budget." },
    { title: 'Vendor-independent', text: "I don't sell licences or take commissions: I recommend what's right for you." },
    { title: 'Every kind of device', text: 'Desktop, web, mobile, tablet, watch or machine: one person for the whole ecosystem.' },
    { title: 'Transparency', text: 'Clear quotes, realistic timelines, and the code and data are always yours.' }
  ]
})
