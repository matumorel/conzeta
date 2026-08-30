import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { ExportSection } from '@/components/export-section'
import { HeroSection } from '@/components/hero-section'
import { LogoBand } from '@/components/logo-band'
import { ServicesSection } from '@/components/services-section'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <LogoBand />
        <ExportSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
