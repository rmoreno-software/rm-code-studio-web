// Arranque de las páginas legales. Cada HTML indica qué página es con <div id="app" data-page="…">
// (una clave de src/routes.js) y su idioma con <html lang="…">.
import { createApp } from 'vue'
import './assets/modernist.css'
import './assets/base.css'
import './assets/site.css'
import LegalPage from './pages/LegalPage.vue'
import { LEGAL_NOTICE } from './content/legal-notice.js'
import { PRIVACY_POLICY } from './content/privacy-policy.js'
import { COOKIE_POLICY } from './content/cookie-policy.js'

const PAGES = {
  legalNotice: LEGAL_NOTICE,
  privacy: PRIVACY_POLICY,
  cookies: COOKIE_POLICY
}

const root = document.getElementById('app')
const pageKey = root.dataset.page

createApp(LegalPage, { page: PAGES[pageKey], pageKey }).mount(root)
