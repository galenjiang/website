import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "galen's bog ",
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'h-screen')}>
        {children}
      </body>
    </html>
  )
}
