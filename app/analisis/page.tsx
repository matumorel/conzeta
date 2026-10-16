import type { Metadata } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { FunctionalAnalysisPage } from '@/components/functional-analysis-page'

export const metadata: Metadata = {
  title: 'Análisis funcional y de gestión | ConZeta Consultora',
  description:
    'Análisis funcional y de gestión para empresas: procesos, roles, información e indicadores para decidir con datos. Mateo Manuel Morello, ConZeta Consultora.',
}

export default function AnalysisRoute() {
  return (
    <>
      <SiteHeader />
      <FunctionalAnalysisPage />
      <SiteFooter />
    </>
  )
}
