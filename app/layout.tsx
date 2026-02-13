import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
const _Inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://multi-partner-portfolio.vercel.app"),
  title: {
    default: "DCode Analytics | AI & Data Science Solutions",
    template: "%s | DCode Analytics",
  },
  description:
    "Global collective of Data Scientists and AI Automation Developers delivering world class AI solutions.",
  openGraph: {
    images: "/og-image.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${_Inter.className}`}>
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "DCode Analytics",
              url: "https://multi-partner-portfolio.vercel.app",
              logo: "https://multi-partner-portfolio.vercel.app/favicon.ico",
              description:
                "Multi partners Data Scientists and AI Automation Developers.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
