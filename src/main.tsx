import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { getGtmId, initGtm } from './lib/gtm.ts'

// Google Tag Manager (activé si VITE_GTM_ID est défini dans .env ou sur Vercel)
const gtmId = getGtmId()
if (gtmId) initGtm(gtmId)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
