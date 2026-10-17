import { pick } from '@/i18n.js'
import { CONTACT } from '@/content/contact.js'
import { LEGAL_LINKS } from '@/content/navigation.js'

// Contenido de la página de política de cookies, en cada idioma.
// Los tipos de bloque de cada apartado se explican en src/pages/LegalPage.vue.
//
// Si más adelante añades analítica (Google Analytics, Matomo…), añade sus cookies a la tabla,
// indica el proveedor y si hay transferencia internacional, y activa un aviso que pida
// el consentimiento antes de instalarlas (y actualiza el apartado "Consentimiento").
const emailLink = { label: CONTACT.email, href: `mailto:${CONTACT.email}` }
const PRIVACY_HREF = LEGAL_LINKS.privacy.href

// Ayuda oficial de cada navegador. Safari, Edge y Firefox no tienen versión en catalán: se enlaza la castellana.
const BROWSER_HELP_ES = [
  { label: 'Google Chrome', href: 'https://support.google.com/chrome/answer/95647?hl=es' },
  { label: 'Mozilla Firefox', href: 'https://support.mozilla.org/es/kb/Borrar%20cookies' },
  { label: 'Safari', href: 'https://support.apple.com/es-es/guide/safari/sfri11471/mac' },
  { label: 'Microsoft Edge', href: 'https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' }
]

const BROWSER_HELP_CA = [
  { label: 'Google Chrome', href: 'https://support.google.com/chrome/answer/95647?hl=ca' },
  ...BROWSER_HELP_ES.slice(1)
]

const BROWSER_HELP_EN = [
  { label: 'Google Chrome', href: 'https://support.google.com/chrome/answer/95647?hl=en' },
  { label: 'Mozilla Firefox', href: 'https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox' },
  { label: 'Safari', href: 'https://support.apple.com/en-gb/guide/safari/sfri11471/mac' },
  { label: 'Microsoft Edge', href: 'https://support.microsoft.com/en-gb/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09' }
]

export const COOKIE_POLICY = pick({
  es: {
    eyebrow: 'Información legal',
    title: 'Política de cookies',
    updated: '17 de octubre de 2026',
    intro: 'Esta web usa el mínimo de cookies posible. Aquí te explico cuáles son, para qué sirven y cómo puedes gestionarlas, conforme al artículo 22.2 de la LSSI-CE y a la guía sobre cookies de la Agencia Española de Protección de Datos.',
    sections: [
      {
        id: 'que-son',
        title: 'Qué son las cookies',
        blocks: [
          'Las cookies son pequeños archivos que una web guarda en tu navegador para recordar información sobre tu visita. Algunas son imprescindibles para que la página funcione; otras sirven para medir visitas o mostrar publicidad, y solo pueden usarse con tu consentimiento.'
        ]
      },
      {
        id: 'cookies-de-esta-web',
        title: 'Cookies que usa esta web',
        shortTitle: 'Cookies de esta web',
        blocks: [
          {
            table: {
              rowHeader: true,
              columns: ['Cookie', 'Tipo', 'Finalidad', 'Duración'],
              rows: [
                [
                  '__cf_bm',
                  'Técnica · de terceros (Cloudflare)',
                  'Seguridad del alojamiento: distinguir las visitas reales del tráfico automatizado y proteger la web y el formulario de contacto frente a bots.',
                  '30 minutos'
                ]
              ]
            }
          },
          'Esta web no utiliza cookies de analítica, publicidad ni redes sociales. Las cookies técnicas están exentas de consentimiento porque son necesarias para prestar el servicio que solicitas.'
        ]
      },
      {
        id: 'consentimiento',
        title: 'Consentimiento',
        blocks: [
          'Como solo se usan cookies técnicas, no es necesario pedir tu consentimiento ni mostrar un aviso de cookies. Si en el futuro se incorporan cookies no necesarias, solo se instalarán después de que las aceptes, y podrás retirar tu consentimiento en cualquier momento con la misma facilidad.'
        ]
      },
      {
        id: 'gestion',
        title: 'Cómo gestionarlas en tu navegador',
        shortTitle: 'Gestión en el navegador',
        blocks: [
          'Puedes ver, bloquear o eliminar las cookies desde la configuración de tu navegador. Ten en cuenta que, si bloqueas las técnicas, algunas partes de la web podrían no funcionar correctamente.',
          { links: BROWSER_HELP_ES }
        ]
      },
      {
        id: 'cambios',
        title: 'Cambios y contacto',
        blocks: [
          [
            'Esta política puede actualizarse si cambian las cookies que usa la web; la fecha de la última actualización figura al principio. Si tienes cualquier duda, escríbeme a ',
            emailLink,
            '. Más información sobre el tratamiento de tus datos en la ',
            { label: 'Política de privacidad', href: PRIVACY_HREF },
            '.'
          ]
        ]
      }
    ]
  },

  ca: {
    eyebrow: 'Informació legal',
    title: 'Política de cookies',
    updated: "17 d'octubre de 2026",
    intro: "Aquest web fa servir el mínim de cookies possible. Aquí t'explico quines són, per a què serveixen i com les pots gestionar, d'acord amb l'article 22.2 de la LSSI-CE i la guia sobre cookies de l'Agència Espanyola de Protecció de Dades.",
    sections: [
      {
        id: 'que-son',
        title: 'Què són les cookies',
        blocks: [
          "Les cookies són petits fitxers que un web desa al teu navegador per recordar informació sobre la teva visita. Algunes són imprescindibles perquè la pàgina funcioni; d'altres serveixen per mesurar visites o mostrar publicitat, i només es poden fer servir amb el teu consentiment."
        ]
      },
      {
        id: 'cookies-de-esta-web',
        title: 'Cookies que fa servir aquest web',
        shortTitle: "Cookies d'aquest web",
        blocks: [
          {
            table: {
              rowHeader: true,
              columns: ['Cookie', 'Tipus', 'Finalitat', 'Durada'],
              rows: [
                [
                  '__cf_bm',
                  'Tècnica · de tercers (Cloudflare)',
                  "Seguretat de l'allotjament: distingir les visites reals del trànsit automatitzat i protegir el web i el formulari de contacte contra bots.",
                  '30 minuts'
                ]
              ]
            }
          },
          "Aquest web no fa servir cookies d'analítica, publicitat ni xarxes socials. Les cookies tècniques estan exemptes de consentiment perquè són necessàries per prestar el servei que sol·licites."
        ]
      },
      {
        id: 'consentimiento',
        title: 'Consentiment',
        blocks: [
          "Com que només es fan servir cookies tècniques, no cal demanar el teu consentiment ni mostrar un avís de cookies. Si en el futur s'incorporen cookies no necessàries, només s'instal·laran després que les acceptis, i podràs retirar el teu consentiment en qualsevol moment amb la mateixa facilitat."
        ]
      },
      {
        id: 'gestion',
        title: 'Com gestionar-les al navegador',
        shortTitle: 'Gestió al navegador',
        blocks: [
          'Pots veure, bloquejar o eliminar les cookies des de la configuració del teu navegador. Tingues en compte que, si bloqueges les tècniques, algunes parts del web podrien no funcionar correctament.',
          { links: BROWSER_HELP_CA }
        ]
      },
      {
        id: 'cambios',
        title: 'Canvis i contacte',
        blocks: [
          [
            "Aquesta política es pot actualitzar si canvien les cookies que fa servir el web; la data de la darrera actualització figura al principi. Si tens qualsevol dubte, escriu-me a ",
            emailLink,
            '. Més informació sobre el tractament de les teves dades a la ',
            { label: 'Política de privacitat', href: PRIVACY_HREF },
            '.'
          ]
        ]
      }
    ]
  },

  en: {
    eyebrow: 'Legal information',
    title: 'Cookie policy',
    updated: '17 October 2026',
    intro: 'This website uses as few cookies as possible. Here I explain which ones they are, what they are for and how you can manage them, in accordance with article 22.2 of the Spanish LSSI-CE and the cookie guidelines of the Spanish Data Protection Agency.',
    sections: [
      {
        id: 'que-son',
        title: 'What cookies are',
        blocks: [
          'Cookies are small files that a website stores in your browser to remember information about your visit. Some are essential for the page to work; others are used to measure visits or show advertising, and can only be used with your consent.'
        ]
      },
      {
        id: 'cookies-de-esta-web',
        title: 'Cookies used on this website',
        shortTitle: 'Cookies on this site',
        blocks: [
          {
            table: {
              rowHeader: true,
              columns: ['Cookie', 'Type', 'Purpose', 'Duration'],
              rows: [
                [
                  '__cf_bm',
                  'Technical · third-party (Cloudflare)',
                  'Hosting security: telling real visits apart from automated traffic and protecting the website and the contact form against bots.',
                  '30 minutes'
                ]
              ]
            }
          },
          'This website does not use analytics, advertising or social media cookies. Technical cookies are exempt from consent because they are necessary to provide the service you request.'
        ]
      },
      {
        id: 'consentimiento',
        title: 'Consent',
        blocks: [
          'Since only technical cookies are used, there is no need to ask for your consent or display a cookie banner. If non-essential cookies are added in the future, they will only be set after you accept them, and you will be able to withdraw your consent at any time just as easily.'
        ]
      },
      {
        id: 'gestion',
        title: 'How to manage them in your browser',
        shortTitle: 'Managing cookies',
        blocks: [
          'You can view, block or delete cookies in your browser settings. Please note that if you block technical cookies, some parts of the website may not work properly.',
          { links: BROWSER_HELP_EN }
        ]
      },
      {
        id: 'cambios',
        title: 'Changes and contact',
        blocks: [
          [
            'This policy may be updated if the cookies used by the website change; the date of the last update is shown at the top. If you have any questions, write to me at ',
            emailLink,
            '. More information about how your data is processed in the ',
            { label: 'Privacy policy', href: PRIVACY_HREF },
            '.'
          ]
        ]
      }
    ]
  }
})
