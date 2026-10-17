export const STEPS = [
  { title: 'Escucho', description: 'Una primera reunión gratuita para entender tu negocio, el problema y lo que esperas conseguir.' },
  { title: 'Analizo', description: 'Reviso procesos, sistemas y datos para detectar la causa real y las opciones posibles.' },
  { title: 'Propongo', description: 'Recibes una propuesta por escrito con alcance, plazos y presupuesto cerrado o estimado.' },
  { title: 'Construyo', description: 'Desarrollo e integro por fases, con entregas frecuentes para que veas avances desde el principio.' },
  { title: 'Implanto', description: 'Pongo la solución en marcha, formo a tu equipo y acompaño los primeros días de uso.' },
  { title: 'Mejoro', description: 'Mido resultados y propongo ajustes para sacar el máximo partido a la inversión.' }
]

// `marks`: cuadrados decorativos sobre cada modalidad ('filled' = relleno, 'outline' = solo borde)
export const ENGAGEMENT_MODELS = [
  {
    title: 'Proyecto cerrado',
    description: 'Necesidades bien definidas con alcance, plazo y precio fijos.',
    marks: ['filled']
  },
  {
    title: 'Bolsa de horas',
    description: 'Mejoras continuas, soporte y pequeños desarrollos.',
    marks: ['filled', 'filled']
  },
  {
    title: 'Consultoría por sesiones',
    description: 'Decisiones puntuales, auditorías o segunda opinión.',
    marks: ['filled', 'outline']
  },
  {
    title: 'CIO a tiempo parcial',
    description: 'Empresas sin director de tecnología que necesitan dirección estratégica.',
    marks: ['filled', 'filled', 'filled']
  }
]
