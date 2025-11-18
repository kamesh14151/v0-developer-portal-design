import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import ConsoleLogger from '@/components/console-logger'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'AJ STUDIOZ | Technologies',
  description: 'Premium web development and AI technology solutions. Discover Nexariq AI models: Lynxa-mini, AJ, and Hanuman S1.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/AJ.svg', sizes: '32x32', type: 'image/svg+xml' },
      { url: '/AJ.svg', sizes: '192x192', type: 'image/svg+xml' },
      { url: '/AJ.svg', sizes: '512x512', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/AJ.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
    shortcut: '/AJ.svg',
  },
  openGraph: {
    title: 'AJ STUDIOZ | Technologies',
    description: 'Premium web development and AI technology solutions. Discover Nexariq AI models: Lynxa-mini, AJ, and Hanuman S1.',
    images: ['/AJ.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AJ STUDIOZ | Technologies',
    description: 'Premium web development and AI technology solutions. Discover Nexariq AI models: Lynxa-mini, AJ, and Hanuman S1.',
    images: ['/AJ.svg'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ConsoleLogger />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
