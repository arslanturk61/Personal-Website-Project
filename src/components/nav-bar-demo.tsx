"use client"

import { Home, User, Briefcase, BookOpen } from 'lucide-react'
import { NavBar } from "./ui/tubelight-navbar"
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

export function NavBarDemo() {
  const t = useTranslations('navigation')
  const pathname = usePathname()
  const locale = useLocale()

  const navItems = [
    { name: t('home'), url: `/${locale}`, icon: Home },
    { name: t('about'), url: `/${locale}/about`, icon: User },
    { name: t('projects'), url: `/${locale}/projects`, icon: Briefcase },
    { name: t('blog'), url: `/${locale}/blog`, icon: BookOpen }
  ]

  const currentPath = pathname.split('/').pop() || ''
  const activeItem = navItems.find(item => 
    currentPath === locale ? item.url === `/${locale}` : item.url.includes(currentPath)
  )?.name || navItems[0].name

  return <NavBar items={navItems} defaultActiveTab={activeItem} />
}