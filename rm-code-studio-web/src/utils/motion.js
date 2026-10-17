import config from '@/config.js'

export const EASE_OUT = 'cubic-bezier(.2,.7,.2,1)'
export const REVEAL_OBSERVER_OPTIONS = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }

/** Si el navegador no avisa de qué entra en pantalla en este tiempo, se muestra todo igualmente */
export const OBSERVER_FAILSAFE_MS = 2500

const FLASH_DURATION_MS = 450

export function isMotionEnabled() {
  return config.motion && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function isInViewport(el) {
  const { top, bottom } = el.getBoundingClientRect()
  return top < window.innerHeight && bottom > 0
}

/** Entrada breve desde abajo, para destacar un contenido que acaba de cambiar */
export function flashIn(el) {
  if (!el || !isMotionEnabled()) return
  el.animate(
    [{ opacity: 0, transform: 'translateY(14px)' }, { opacity: 1, transform: 'none' }],
    { duration: FLASH_DURATION_MS, easing: EASE_OUT }
  )
}
