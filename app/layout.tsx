import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono,Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
const _Inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DCode Analytics",
  description:
    "DCode Analyticsv is  multi partners Data Scientists and AI Automation Developers  share there contributtion to world!",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes",
    generator: 'Nextjs'
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
