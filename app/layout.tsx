import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'AJ STUDIOZ | Premium Web Development & AI Solutions',
  description: 'Premium web development and AI technology solutions. Discover Nexariq AI models: Lynxa-mini, AJ, and Hanuman S1.',
  generator: 'v0.app',
  icons: {
    icon: '/AJ.svg',
    apple: '/AJ.svg',
    shortcut: '/AJ.svg',
  },
  openGraph: {
    title: 'AJ STUDIOZ | Premium Web Development & AI Solutions',
    description: 'Premium web development and AI technology solutions. Discover Nexariq AI models: Lynxa-mini, AJ, and Hanuman S1.',
    images: ['/AJ.svg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AJ STUDIOZ | Premium Web Development & AI Solutions',
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
