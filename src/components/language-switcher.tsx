"use client"

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from '../i18n/navigation'

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const switchLanguage = () => {
    const nextLocale = locale === 'tr' ? 'en' : 'tr'
    router.replace(pathname, { locale: nextLocale })
  }

  return (
    <button
      onClick={switchLanguage}
      className="fixed top-4 right-4 bg-primary/10 hover:bg-primary/20 text-primary px-4 py-2 rounded-full transition-colors"
    >
      {locale === 'tr' ? 'English' : 'Türkçe'}
    </button>
  )
}
