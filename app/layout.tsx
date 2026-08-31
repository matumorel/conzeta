import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const alanSans = localFont({
  src: [
    { path: '../public/fonts/AlanSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../public/fonts/AlanSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../public/fonts/AlanSans-Black.ttf', weight: '900', style: 'normal' },
  ],
  variable: '--font-alan-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'ConZeta | Consultora estratégica y comercial',
  description:
    'ConZeta Consultora: estrategia, gestión e informes para empresas que necesitan decisiones respaldadas por datos.',
  generator: 'v0.app',
  icons: {
    icon: '/conzeta-logo-menu.png',
    apple: '/conzeta-logo-menu.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f6f7f8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`light bg-background ${alanSans.variable}`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
