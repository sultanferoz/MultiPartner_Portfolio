import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono,Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
const _Inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MultiPartner_Portfolio",
  description:
    "The web sites is build for multi partners companies to share there contributtion tto world!",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
    generator: 'SF_laskir'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${_Inter.className}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
