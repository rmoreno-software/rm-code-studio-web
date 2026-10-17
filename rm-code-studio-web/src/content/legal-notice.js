import { pick } from '@/i18n.js'
import { CONTACT, OWNER } from '@/content/contact.js'
import { LEGAL_LINKS } from '@/content/navigation.js'

// Contenido de la página de aviso legal, en cada idioma.
// Los tipos de bloque de cada apartado se explican en src/pages/LegalPage.vue.
const EMAIL_HREF = `mailto:${CONTACT.email}`
const PHONE_HREF = `tel:${CONTACT.phone.replaceAll(' ', '')}`
const PRIVACY_HREF = LEGAL_LINKS.privacy.href
const COOKIES_HREF = LEGAL_LINKS.cookies.href

export const LEGAL_NOTICE = pick({
  es: {
    eyebrow: 'Información legal',
    title: 'Aviso legal',
    updated: '17 de octubre de 2026',
    sections: [
      {
        id: 'titular',
        title: 'Datos del titular',
        blocks: [
          'En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se informa de los datos identificativos del titular de este sitio web:',
          {
            details: [
              { label: 'Titular', value: OWNER.legalName },
              { label: 'NIF', value: OWNER.taxId },
              { label: 'Domicilio', value: OWNER.address },
              { label: 'Email', value: CONTACT.email, href: EMAIL_HREF },
              { label: 'Teléfono', value: CONTACT.phone, href: PHONE_HREF },
              { label: 'Actividad', value: 'Consultoría tecnológica y desarrollo de software' }
            ]
          }
        ]
      },
      {
        id: 'objeto',
        title: 'Objeto',
        blocks: [
          'Este sitio web tiene como finalidad informar sobre los servicios de consultoría tecnológica, desarrollo de software, integración de sistemas, inteligencia artificial y mensajería automática que ofrece el titular, así como facilitar un medio de contacto a las personas y empresas interesadas.'
        ]
      },
      {
        id: 'condiciones-de-uso',
        title: 'Condiciones de uso',
        blocks: [
          'El acceso a este sitio web es gratuito y atribuye la condición de usuario a quien lo visita, lo que implica la aceptación de las condiciones recogidas en este aviso legal.',
          'El usuario se compromete a hacer un uso adecuado de los contenidos y a no emplearlos para actividades ilícitas, contrarias a la buena fe o al orden público, ni para dañar los sistemas del titular o de terceros, introducir virus o cualquier otro sistema que pueda causar daños.'
        ]
      },
      {
        id: 'propiedad-intelectual',
        title: 'Propiedad intelectual e industrial',
        shortTitle: 'Propiedad intelectual',
        blocks: [
          'Los textos, imágenes, logotipos, diseño gráfico y código fuente de este sitio web son propiedad del titular o se utilizan con la debida autorización, y están protegidos por la normativa de propiedad intelectual e industrial.',
          'Queda prohibida su reproducción, distribución, comunicación pública o transformación, total o parcial, sin autorización expresa y por escrito del titular, salvo para uso personal y privado.'
        ]
      },
      {
        id: 'responsabilidad',
        title: 'Exclusión de responsabilidad',
        shortTitle: 'Responsabilidad',
        blocks: [
          'El titular procura que la información publicada sea correcta y esté actualizada, pero no garantiza la ausencia de errores ni la disponibilidad ininterrumpida del sitio. La información tiene carácter general y no constituye una propuesta ni asesoramiento para un caso concreto.',
          'El titular no se hace responsable de los daños que pudieran derivarse de interrupciones del servicio, fallos técnicos, virus o del uso indebido de los contenidos por parte de los usuarios.'
        ]
      },
      {
        id: 'enlaces-externos',
        title: 'Enlaces externos',
        blocks: [
          'Este sitio puede incluir enlaces a páginas de terceros, como perfiles en redes sociales. El titular no controla ni se responsabiliza del contenido, las políticas ni el funcionamiento de esos sitios.'
        ]
      },
      {
        id: 'datos-personales',
        title: 'Datos personales y cookies',
        blocks: [
          [
            'El tratamiento de los datos personales que se facilitan a través del formulario de contacto se rige por la ',
            { label: 'política de privacidad', href: PRIVACY_HREF },
            '. El uso de cookies se explica en la ',
            { label: 'política de cookies', href: COOKIES_HREF },
            '.'
          ]
        ]
      },
      {
        id: 'legislacion',
        title: 'Legislación aplicable y jurisdicción',
        shortTitle: 'Legislación y jurisdicción',
        blocks: [
          'Este aviso legal se rige por la legislación española. Para la resolución de cualquier controversia, las partes se someten a los juzgados y tribunales que correspondan conforme a la normativa vigente; cuando el usuario tenga la condición de consumidor, serán competentes los de su domicilio.'
        ]
      }
    ]
  },

  ca: {
    eyebrow: 'Informació legal',
    title: 'Avís legal',
    updated: "17 d'octubre de 2026",
    sections: [
      {
        id: 'titular',
        title: 'Dades del titular',
        blocks: [
          "En compliment de l'article 10 de la Llei 34/2002, d'11 de juliol, de serveis de la societat de la informació i de comerç electrònic (LSSI-CE), s'informa de les dades identificatives del titular d'aquest lloc web:",
          {
            details: [
              { label: 'Titular', value: OWNER.legalName },
              { label: 'NIF', value: OWNER.taxId },
              { label: 'Domicili', value: OWNER.address },
              { label: 'Correu electrònic', value: CONTACT.email, href: EMAIL_HREF },
              { label: 'Telèfon', value: CONTACT.phone, href: PHONE_HREF },
              { label: 'Activitat', value: 'Consultoria tecnològica i desenvolupament de programari' }
            ]
          }
        ]
      },
      {
        id: 'objeto',
        title: 'Objecte',
        blocks: [
          "Aquest lloc web té com a finalitat informar sobre els serveis de consultoria tecnològica, desenvolupament de programari, integració de sistemes, intel·ligència artificial i missatgeria automàtica que ofereix el titular, així com facilitar un mitjà de contacte a les persones i empreses interessades."
        ]
      },
      {
        id: 'condiciones-de-uso',
        title: "Condicions d'ús",
        blocks: [
          "L'accés a aquest lloc web és gratuït i atribueix la condició d'usuari a qui el visita, la qual cosa implica l'acceptació de les condicions recollides en aquest avís legal.",
          "L'usuari es compromet a fer un ús adequat dels continguts i a no emprar-los per a activitats il·lícites, contràries a la bona fe o a l'ordre públic, ni per danyar els sistemes del titular o de tercers, introduir virus o qualsevol altre sistema que pugui causar danys."
        ]
      },
      {
        id: 'propiedad-intelectual',
        title: 'Propietat intel·lectual i industrial',
        shortTitle: 'Propietat intel·lectual',
        blocks: [
          "Els textos, imatges, logotips, disseny gràfic i codi font d'aquest lloc web són propietat del titular o s'utilitzen amb la deguda autorització, i estan protegits per la normativa de propietat intel·lectual i industrial.",
          "Queda prohibida la seva reproducció, distribució, comunicació pública o transformació, total o parcial, sense autorització expressa i per escrit del titular, llevat de l'ús personal i privat."
        ]
      },
      {
        id: 'responsabilidad',
        title: 'Exclusió de responsabilitat',
        shortTitle: 'Responsabilitat',
        blocks: [
          "El titular procura que la informació publicada sigui correcta i estigui actualitzada, però no garanteix l'absència d'errors ni la disponibilitat ininterrompuda del lloc. La informació té caràcter general i no constitueix cap proposta ni assessorament per a un cas concret.",
          "El titular no es fa responsable dels danys que es puguin derivar d'interrupcions del servei, errors tècnics, virus o de l'ús indegut dels continguts per part dels usuaris."
        ]
      },
      {
        id: 'enlaces-externos',
        title: 'Enllaços externs',
        blocks: [
          "Aquest lloc pot incloure enllaços a pàgines de tercers, com ara perfils a xarxes socials. El titular no controla ni es responsabilitza del contingut, les polítiques ni el funcionament d'aquests llocs."
        ]
      },
      {
        id: 'datos-personales',
        title: 'Dades personals i cookies',
        blocks: [
          [
            "El tractament de les dades personals que es faciliten a través del formulari de contacte es regeix per la ",
            { label: 'política de privacitat', href: PRIVACY_HREF },
            ". L'ús de cookies s'explica a la ",
            { label: 'política de cookies', href: COOKIES_HREF },
            '.'
          ]
        ]
      },
      {
        id: 'legislacion',
        title: 'Legislació aplicable i jurisdicció',
        shortTitle: 'Legislació i jurisdicció',
        blocks: [
          "Aquest avís legal es regeix per la legislació espanyola. Per a la resolució de qualsevol controvèrsia, les parts se sotmeten als jutjats i tribunals que corresponguin d'acord amb la normativa vigent; quan l'usuari tingui la condició de consumidor, seran competents els del seu domicili."
        ]
      }
    ]
  },

  en: {
    eyebrow: 'Legal information',
    title: 'Legal notice',
    updated: '17 October 2026',
    sections: [
      {
        id: 'titular',
        title: 'Website owner',
        blocks: [
          'In accordance with article 10 of Spanish Law 34/2002, of 11 July, on Information Society Services and Electronic Commerce (LSSI-CE), the identification details of the owner of this website are as follows:',
          {
            details: [
              { label: 'Owner', value: OWNER.legalName },
              { label: 'Tax ID (NIF)', value: OWNER.taxId },
              { label: 'Address', value: OWNER.address },
              { label: 'Email', value: CONTACT.email, href: EMAIL_HREF },
              { label: 'Phone', value: CONTACT.phone, href: PHONE_HREF },
              { label: 'Activity', value: 'Technology consulting and software development' }
            ]
          }
        ]
      },
      {
        id: 'objeto',
        title: 'Purpose',
        blocks: [
          'The purpose of this website is to provide information about the technology consulting, software development, system integration, artificial intelligence and automated messaging services offered by the owner, and to provide a means of contact for interested individuals and companies.'
        ]
      },
      {
        id: 'condiciones-de-uso',
        title: 'Terms of use',
        blocks: [
          'Access to this website is free of charge and makes whoever visits it a user, which implies acceptance of the terms set out in this legal notice.',
          'Users undertake to make appropriate use of the content and not to use it for unlawful activities or activities contrary to good faith or public order, nor to damage the systems of the owner or third parties, or to introduce viruses or any other system that may cause damage.'
        ]
      },
      {
        id: 'propiedad-intelectual',
        title: 'Intellectual and industrial property',
        shortTitle: 'Intellectual property',
        blocks: [
          'The texts, images, logos, graphic design and source code of this website are the property of the owner or are used with due authorisation, and are protected by intellectual and industrial property law.',
          'Their reproduction, distribution, public communication or transformation, in whole or in part, is prohibited without the express written authorisation of the owner, except for personal and private use.'
        ]
      },
      {
        id: 'responsabilidad',
        title: 'Disclaimer',
        blocks: [
          'The owner endeavours to ensure that the information published is correct and up to date, but does not guarantee that it is free of errors or that the site will be available without interruption. The information is general in nature and does not constitute an offer or advice for any specific case.',
          'The owner accepts no liability for any damage that may result from service interruptions, technical failures, viruses or the misuse of the content by users.'
        ]
      },
      {
        id: 'enlaces-externos',
        title: 'External links',
        blocks: [
          'This site may include links to third-party pages, such as social media profiles. The owner does not control and is not responsible for the content, policies or operation of those sites.'
        ]
      },
      {
        id: 'datos-personales',
        title: 'Personal data and cookies',
        blocks: [
          [
            'The processing of personal data provided through the contact form is governed by the ',
            { label: 'privacy policy', href: PRIVACY_HREF },
            '. The use of cookies is explained in the ',
            { label: 'cookie policy', href: COOKIES_HREF },
            '.'
          ]
        ]
      },
      {
        id: 'legislacion',
        title: 'Applicable law and jurisdiction',
        shortTitle: 'Law and jurisdiction',
        blocks: [
          'This legal notice is governed by Spanish law. For the resolution of any dispute, the parties submit to the courts that have jurisdiction under the applicable regulations; where the user is a consumer, the courts of their place of residence shall have jurisdiction.'
        ]
      }
    ]
  }
})
