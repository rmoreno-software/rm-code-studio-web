import { pick } from '@/i18n.js'

// Los tres puntos fuertes bajo la cabecera. `icon` es un nombre de AppIcon (mismo orden que los textos).
const ICONS = ['growth', 'end-to-end', 'devices']

const TEXTS = pick({
  es: [
    {
      title: 'Visión de negocio',
      text: 'Ingeniero informático con MBA: entiendo tus números y tus procesos antes de proponer tecnología.'
    },
    {
      title: 'De la idea al resultado',
      text: 'Analizo, diseño, desarrollo e implanto. Sin intermediarios ni cadenas de subcontratas.'
    },
    {
      title: 'Cualquier plataforma',
      text: 'Ordenadores, web, móvil, tablet, reloj inteligente o maquinaria específica: la solución va donde está tu negocio.'
    }
  ],
  ca: [
    {
      title: 'Visió de negoci',
      text: 'Enginyer informàtic amb MBA: entenc els teus números i els teus processos abans de proposar tecnologia.'
    },
    {
      title: 'De la idea al resultat',
      text: 'Analitzo, dissenyo, desenvolupo i implanto. Sense intermediaris ni cadenes de subcontractes.'
    },
    {
      title: 'Qualsevol plataforma',
      text: 'Ordinadors, web, mòbil, tauleta, rellotge intel·ligent o maquinària específica: la solució va allà on és el teu negoci.'
    }
  ],
  en: [
    {
      title: 'Business insight',
      text: 'Computer engineer with an MBA: I understand your numbers and your processes before proposing any technology.'
    },
    {
      title: 'From idea to results',
      text: 'I analyse, design, build and deploy. No middlemen, no chains of subcontractors.'
    },
    {
      title: 'Any platform',
      text: 'Desktop, web, mobile, tablet, smartwatch or specialised machinery: the solution goes wherever your business is.'
    }
  ]
})

export const HIGHLIGHTS = TEXTS.map((highlight, index) => ({ icon: ICONS[index], ...highlight }))
