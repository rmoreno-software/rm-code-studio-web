import { pick } from '@/i18n.js'
import { CONTACT, OWNER } from '@/content/contact.js'
import { LEGAL_LINKS } from '@/content/navigation.js'

// Contenido de la página de política de privacidad, en cada idioma.
// Los tipos de bloque de cada apartado se explican en src/pages/LegalPage.vue.
const emailLink = { label: CONTACT.email, href: `mailto:${CONTACT.email}` }
const aepdLink = { label: 'www.aepd.es', href: 'https://www.aepd.es' }
const COOKIES_HREF = LEGAL_LINKS.cookies.href

export const PRIVACY_POLICY = pick({
  es: {
    eyebrow: 'Información legal',
    title: 'Política de privacidad',
    updated: '17 de octubre de 2026',
    intro: 'En esta página te explico, de forma clara, qué datos personales trato cuando usas esta web o me escribes, para qué los uso y qué derechos tienes, conforme al Reglamento (UE) 2016/679 (RGPD) y a la Ley Orgánica 3/2018 (LOPDGDD).',
    sections: [
      {
        id: 'responsable',
        title: 'Responsable del tratamiento',
        shortTitle: 'Responsable',
        blocks: [
          {
            details: [
              { label: 'Responsable', value: OWNER.legalName },
              { label: 'NIF', value: OWNER.taxId },
              { label: 'Domicilio', value: OWNER.address },
              { label: 'Email de contacto', value: CONTACT.email, href: emailLink.href }
            ]
          }
        ]
      },
      {
        id: 'datos',
        title: 'Qué datos recojo',
        blocks: [
          'Solo los que tú me facilitas al rellenar el formulario de contacto o al escribirme por email, teléfono o WhatsApp:',
          {
            list: [
              'Nombre y empresa.',
              'Email y, si lo indicas, teléfono.',
              'La información que incluyas en tu mensaje.'
            ]
          },
          'Te pido que no envíes datos especialmente sensibles (salud, ideología, etc.) a través del formulario.'
        ]
      },
      {
        id: 'finalidad',
        title: 'Finalidad y base legal',
        blocks: [
          {
            table: {
              columns: ['Para qué', 'Base legal'],
              rows: [
                [
                  'Responder a tu consulta y, si lo pides, preparar una propuesta.',
                  'Tu consentimiento y la aplicación de medidas precontractuales a petición tuya (art. 6.1.a y 6.1.b RGPD).'
                ],
                [
                  'Prestar el servicio contratado y gestionar la facturación.',
                  'Ejecución del contrato y cumplimiento de obligaciones legales (art. 6.1.b y 6.1.c RGPD).'
                ]
              ]
            }
          },
          'No uso tus datos para enviarte publicidad ni tomo decisiones automatizadas ni elaboro perfiles con ellos.'
        ]
      },
      {
        id: 'conservacion',
        title: 'Cuánto tiempo los conservo',
        shortTitle: 'Conservación',
        blocks: [
          'Los datos de una consulta que no llega a convertirse en proyecto se conservan durante 12 meses y después se eliminan. Si trabajamos juntos, se conservan mientras dure la relación y, después, durante los plazos que exige la normativa fiscal y mercantil.'
        ]
      },
      {
        id: 'destinatarios',
        title: 'Con quién se comparten',
        shortTitle: 'Destinatarios',
        blocks: [
          'No cedo tus datos a terceros, salvo obligación legal. Para que la web y el correo funcionen, algunos proveedores tratan datos en mi nombre como encargados del tratamiento, con contrato y garantías adecuadas:',
          {
            list: [
              'Alojamiento web: Cloudflare.',
              'Correo electrónico: Brevo.',
              'Envío del formulario: Formspree.'
            ]
          },
          'Si alguno de estos proveedores está fuera del Espacio Económico Europeo, la transferencia se ampara en una decisión de adecuación de la Comisión Europea o en cláusulas contractuales tipo.'
        ]
      },
      {
        id: 'derechos',
        title: 'Tus derechos',
        blocks: [
          [
            'Puedes ejercer en cualquier momento tus derechos de acceso, rectificación, supresión, oposición, limitación del tratamiento y portabilidad, así como retirar tu consentimiento, escribiendo a ',
            emailLink,
            ' e indicando qué derecho quieres ejercer. Te responderé en el plazo máximo de un mes.'
          ],
          [
            'Si consideras que no he atendido correctamente tu solicitud, puedes presentar una reclamación ante la Agencia Española de Protección de Datos (',
            aepdLink,
            ').'
          ]
        ]
      },
      {
        id: 'seguridad',
        title: 'Seguridad',
        blocks: [
          'Aplico medidas técnicas y organizativas adecuadas para proteger tus datos frente a pérdida, acceso no autorizado o alteración, como la conexión cifrada (HTTPS), el control de accesos y las copias de seguridad.'
        ]
      },
      {
        id: 'cambios',
        title: 'Cambios en esta política',
        blocks: [
          [
            'Puedo actualizar esta política para adaptarla a cambios legales o del servicio. La fecha de la última actualización figura al principio de la página. El uso de cookies se explica en la ',
            { label: 'Política de cookies', href: COOKIES_HREF },
            '.'
          ]
        ]
      }
    ]
  },

  ca: {
    eyebrow: 'Informació legal',
    title: 'Política de privacitat',
    updated: "17 d'octubre de 2026",
    intro: "En aquesta pàgina t'explico, de manera clara, quines dades personals tracto quan fas servir aquest web o m'escrius, per a què les faig servir i quins drets tens, d'acord amb el Reglament (UE) 2016/679 (RGPD) i la Llei orgànica 3/2018 (LOPDGDD).",
    sections: [
      {
        id: 'responsable',
        title: 'Responsable del tractament',
        shortTitle: 'Responsable',
        blocks: [
          {
            details: [
              { label: 'Responsable', value: OWNER.legalName },
              { label: 'NIF', value: OWNER.taxId },
              { label: 'Domicili', value: OWNER.address },
              { label: 'Correu de contacte', value: CONTACT.email, href: emailLink.href }
            ]
          }
        ]
      },
      {
        id: 'datos',
        title: 'Quines dades recullo',
        blocks: [
          "Només les que em facilites quan omples el formulari de contacte o quan m'escrius per correu electrònic, telèfon o WhatsApp:",
          {
            list: [
              'Nom i empresa.',
              'Correu electrònic i, si ho indiques, telèfon.',
              'La informació que incloguis al teu missatge.'
            ]
          },
          "Et demano que no enviïs dades especialment sensibles (salut, ideologia, etc.) a través del formulari."
        ]
      },
      {
        id: 'finalidad',
        title: 'Finalitat i base legal',
        blocks: [
          {
            table: {
              columns: ['Per a què', 'Base legal'],
              rows: [
                [
                  'Respondre la teva consulta i, si ho demanes, preparar una proposta.',
                  "El teu consentiment i l'aplicació de mesures precontractuals a petició teva (art. 6.1.a i 6.1.b RGPD)."
                ],
                [
                  'Prestar el servei contractat i gestionar la facturació.',
                  "Execució del contracte i compliment d'obligacions legals (art. 6.1.b i 6.1.c RGPD)."
                ]
              ]
            }
          },
          'No faig servir les teves dades per enviar-te publicitat, ni prenc decisions automatitzades ni elaboro perfils amb elles.'
        ]
      },
      {
        id: 'conservacion',
        title: 'Quant de temps les conservo',
        shortTitle: 'Conservació',
        blocks: [
          "Les dades d'una consulta que no arriba a convertir-se en projecte es conserven durant 12 mesos i després s'eliminen. Si treballem junts, es conserven mentre duri la relació i, després, durant els terminis que exigeix la normativa fiscal i mercantil."
        ]
      },
      {
        id: 'destinatarios',
        title: 'Amb qui es comparteixen',
        shortTitle: 'Destinataris',
        blocks: [
          "No cedeixo les teves dades a tercers, llevat d'obligació legal. Perquè el web i el correu funcionin, alguns proveïdors tracten dades en nom meu com a encarregats del tractament, amb contracte i garanties adequades:",
          {
            list: [
              'Allotjament web: Cloudflare.',
              'Correu electrònic: Brevo.',
              'Enviament del formulari: Formspree.'
            ]
          },
          "Si algun d'aquests proveïdors és fora de l'Espai Econòmic Europeu, la transferència s'empara en una decisió d'adequació de la Comissió Europea o en clàusules contractuals tipus."
        ]
      },
      {
        id: 'derechos',
        title: 'Els teus drets',
        blocks: [
          [
            "Pots exercir en qualsevol moment els teus drets d'accés, rectificació, supressió, oposició, limitació del tractament i portabilitat, així com retirar el teu consentiment, escrivint a ",
            emailLink,
            " i indicant quin dret vols exercir. Et respondré en el termini màxim d'un mes."
          ],
          [
            "Si consideres que no he atès correctament la teva sol·licitud, pots presentar una reclamació davant l'Agència Espanyola de Protecció de Dades (",
            aepdLink,
            ').'
          ]
        ]
      },
      {
        id: 'seguridad',
        title: 'Seguretat',
        blocks: [
          "Aplico mesures tècniques i organitzatives adequades per protegir les teves dades contra la pèrdua, l'accés no autoritzat o l'alteració, com ara la connexió xifrada (HTTPS), el control d'accessos i les còpies de seguretat."
        ]
      },
      {
        id: 'cambios',
        title: 'Canvis en aquesta política',
        blocks: [
          [
            "Puc actualitzar aquesta política per adaptar-la a canvis legals o del servei. La data de la darrera actualització figura al principi de la pàgina. L'ús de cookies s'explica a la ",
            { label: 'Política de cookies', href: COOKIES_HREF },
            '.'
          ]
        ]
      }
    ]
  },

  en: {
    eyebrow: 'Legal information',
    title: 'Privacy policy',
    updated: '17 October 2026',
    intro: 'On this page I explain clearly what personal data I process when you use this website or write to me, what I use it for and what rights you have, in accordance with Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD).',
    sections: [
      {
        id: 'responsable',
        title: 'Data controller',
        shortTitle: 'Controller',
        blocks: [
          {
            details: [
              { label: 'Controller', value: OWNER.legalName },
              { label: 'Tax ID (NIF)', value: OWNER.taxId },
              { label: 'Address', value: OWNER.address },
              { label: 'Contact email', value: CONTACT.email, href: emailLink.href }
            ]
          }
        ]
      },
      {
        id: 'datos',
        title: 'What data I collect',
        blocks: [
          'Only the data you give me when you fill in the contact form or write to me by email, phone or WhatsApp:',
          {
            list: [
              'Name and company.',
              'Email and, if you provide it, phone number.',
              'The information you include in your message.'
            ]
          },
          'Please do not send particularly sensitive data (health, beliefs, etc.) through the form.'
        ]
      },
      {
        id: 'finalidad',
        title: 'Purpose and legal basis',
        blocks: [
          {
            table: {
              columns: ['Purpose', 'Legal basis'],
              rows: [
                [
                  'Replying to your enquiry and, if you ask, preparing a proposal.',
                  'Your consent and taking steps at your request prior to entering into a contract (Art. 6(1)(a) and 6(1)(b) GDPR).'
                ],
                [
                  'Providing the contracted service and handling invoicing.',
                  'Performance of a contract and compliance with legal obligations (Art. 6(1)(b) and 6(1)(c) GDPR).'
                ]
              ]
            }
          },
          "I don't use your data to send you advertising, make automated decisions or build profiles."
        ]
      },
      {
        id: 'conservacion',
        title: 'How long I keep it',
        shortTitle: 'Retention',
        blocks: [
          'Data from an enquiry that does not turn into a project is kept for 12 months and then deleted. If we work together, it is kept for the duration of our relationship and, afterwards, for the periods required by tax and commercial law.'
        ]
      },
      {
        id: 'destinatarios',
        title: 'Who it is shared with',
        shortTitle: 'Recipients',
        blocks: [
          "I don't share your data with third parties unless legally required to. To keep the website and email running, some providers process data on my behalf as data processors, under contract and with appropriate safeguards:",
          {
            list: [
              'Web hosting: Cloudflare.',
              'Email: Brevo.',
              'Form submission: Formspree.'
            ]
          },
          'If any of these providers is located outside the European Economic Area, the transfer is covered by a European Commission adequacy decision or by standard contractual clauses.'
        ]
      },
      {
        id: 'derechos',
        title: 'Your rights',
        blocks: [
          [
            'You can exercise your rights of access, rectification, erasure, objection, restriction of processing and data portability at any time, as well as withdraw your consent, by writing to ',
            emailLink,
            ' and stating which right you wish to exercise. I will reply within one month at the latest.'
          ],
          [
            'If you believe your request has not been handled properly, you can lodge a complaint with the Spanish Data Protection Agency (',
            aepdLink,
            ').'
          ]
        ]
      },
      {
        id: 'seguridad',
        title: 'Security',
        blocks: [
          'I apply appropriate technical and organisational measures to protect your data against loss, unauthorised access or alteration, such as encrypted connections (HTTPS), access control and backups.'
        ]
      },
      {
        id: 'cambios',
        title: 'Changes to this policy',
        blocks: [
          [
            'I may update this policy to reflect legal or service changes. The date of the last update is shown at the top of the page. The use of cookies is explained in the ',
            { label: 'Cookie policy', href: COOKIES_HREF },
            '.'
          ]
        ]
      }
    ]
  }
})
