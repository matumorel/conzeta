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
  title: 'ConZeta | Consultora empresarial',
  description:
    'ConZeta Consultora: estrategia, gestión e informes para empresas que necesitan decisiones respaldadas por datos.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
