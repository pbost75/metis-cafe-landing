import { useEffect, useState } from 'react'

/** Mobile (≤768px) : lien tel: direct. Desktop : popup réservation. */
const MOBILE_MQ = '(max-width: 768px)'

export type PhoneLinkMode = 'tel' | 'modal'

function getMode(): PhoneLinkMode {
  if (typeof window === 'undefined') return 'tel'
  return window.matchMedia(MOBILE_MQ).matches ? 'tel' : 'modal'
}

export function usePhoneLinkMode(): PhoneLinkMode {
  const [mode, setMode] = useState<PhoneLinkMode>(getMode)

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ)
    const onChange = () => setMode(mq.matches ? 'tel' : 'modal')
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return mode
}
