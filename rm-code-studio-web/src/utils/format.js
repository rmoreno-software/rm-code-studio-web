const MISSING_NUMBER = '[nº]'

/** 1 → "01" */
export const padNumber = n => String(n).padStart(2, '0')

/** Valor de una cifra durante el contador animado (progress de 0 a 1). Sin valor configurado muestra un marcador. */
export function formatCount(value, progress) {
  if (value == null || value === '') return MISSING_NUMBER
  return String(Math.round(Number(value) * progress))
}
