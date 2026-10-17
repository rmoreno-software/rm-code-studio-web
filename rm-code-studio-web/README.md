# Roger Moreno — Web (Vue 3 + Vite)

## Arrancar
```
npm install
npm run dev      # desarrollo en http://localhost:5173
npm run build    # genera /dist listo para subir a cualquier hosting
```

## Estructura
```
src/
├── App.vue                 Monta la página: menú, secciones en orden y pie
├── main.js                 Punto de entrada (carga estilos globales y App)
├── config.js               Ajustes: animaciones, cifras, mostrar/ocultar secciones
├── content/                TEXTOS Y LISTAS — lo que más vas a editar
│   ├── contact.js          Email, teléfono, LinkedIn, zona, nombre comercial
│   ├── navigation.js       Enlaces del menú, anclas de sección, enlaces legales
│   ├── services.js         Servicios y sus puntos
│   ├── method.js           Pasos del método y modalidades de colaboración
│   ├── sectors.js · faq.js · differentiators.js · highlights.js · about.js · devices.js
├── components/
│   ├── layout/             SiteNav, SiteFooter
│   ├── sections/           Una sección de la página por componente (HTML + estilos propios)
│   ├── ui/                 Piezas reutilizables: AppIcon, SectionEyebrow, SectionHeader, BulletList
│   └── graphics/           Ilustraciones: HeroDiagram, DeviceMockup
├── composables/            Lógica reutilizable (animaciones, contador, acordeón, scroll)
├── utils/                  Funciones puras (formato de números, ayudas de animación)
└── assets/
    ├── modernist.css       Sistema de diseño (colores, tipografía, botones, formularios)
    ├── base.css            Reset y estilos de enlaces
    └── site.css            Patrones compartidos (contenedor, título de sección, listas…)
public/retrato-roger.jpg    Tu foto (se muestra en blanco y negro)
```

## Cómo hacer cambios habituales
- **Cambiar un texto de una lista** (servicios, FAQ, sectores…): edita el archivo de `src/content/`.
- **Cambiar un párrafo suelto** (entradillas, títulos): está en el componente de su sección, en `src/components/sections/`.
- **Añadir una sección**: crea `src/components/sections/MiSeccion.vue` y añádela en `App.vue`.
- **Animar un elemento al hacer scroll**: ponle `data-reveal="up"` (o `left`, `right`, `scale`) y, opcionalmente, `data-delay="200"` (ms).
- **Nuevo icono**: añade su trazado en `src/components/ui/AppIcon.vue` y úsalo con `<AppIcon name="..." />`.
- Las importaciones pueden usar `@/` como atajo de `src/` (p. ej. `import { FAQ } from '@/content/faq.js'`).

## Pendiente
- Rellenar los datos entre corchetes en `src/content/contact.js` (email, teléfono, LinkedIn, zona, nombre comercial)
- Indicar años y proyectos en `src/config.js`
- Conectar el formulario (función `handleSubmit` en `src/components/sections/ContactSection.vue`) a tu backend o a un servicio tipo Formspree / EmailJS
- Enlazar las páginas legales (`LEGAL_LINKS` en `src/content/navigation.js`)
