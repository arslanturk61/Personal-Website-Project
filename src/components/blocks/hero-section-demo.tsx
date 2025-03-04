"use client"

import { HeroSection } from "@/components/blocks/hero-section"
import { Icons } from "@/components/ui/icons"

export function HeroSectionDemo() {
  return (
    <HeroSection
      badge={{
        text: "Modern Digital Agency",
        action: {
          text: "Learn more",
          href: "/about",
        },
      }}
      title="Creative Solutions for Digital Growth"
      description="We craft stunning digital experiences that drive engagement and deliver results for businesses of all sizes."
      actions={[
        {
          text: "Our Services",
          href: "/services",
          variant: "default",
        },
        {
          text: "Portfolio",
          href: "/portfolio",
          variant: "glow",
          icon: <Icons.rocket className="h-5 w-5" />,
        },
      ]}
      image={{
        light: "https://www.launchuicomponents.com/app-light.png",
        dark: "https://www.launchuicomponents.com/app-dark.png",
        alt: "Digital Agency Portfolio Preview",
      }}
    />
  )
}