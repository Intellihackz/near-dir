import './globals.css'
import type { Metadata } from 'next'
import { Comic_Neue } from 'next/font/google'

const comicSans = Comic_Neue({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NEAR Project Directory',
  description: 'A comprehensive directory of projects in the NEAR ecosystem',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={comicSans.className}>{children}</body>
    </html>
  )
}
