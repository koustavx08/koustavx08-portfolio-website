import type React from "react"
import { MantineProvider } from "@mantine/core"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  metadataBase: new URL("https://koustavx08.vercel.app"),
  title: "Koustav Singh | Full-Stack, Systems & Web3 Engineer",
  description:
    "Portfolio of Koustav Singh — full-stack engineer focused on scalable systems, AI-enabled products, and Web3 applications.",
  keywords: [
    "Full-Stack Engineer",
    "Systems Engineering",
    "Web3 Developer",
    "MERN",
    "React",
    "Node.js",
    "TypeScript",
    "AI Product Engineering",
  ],
  authors: [{ name: "Koustav Singh" }],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Koustav Singh | Full-Stack, Systems & Web3 Engineer",
    description: "Building and operating production-ready systems across web, AI, and Web3.",
    url: "https://koustavx08.vercel.app",
    siteName: "Koustav Singh Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Koustav Singh | Full-Stack, Systems & Web3 Engineer",
    description: "Builder of scalable products and developer ecosystem contributor.",
  },
}

export const viewport: Viewport = {
  themeColor: "#1a1a2e",
  width: "device-width",
  initialScale: 1,
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Koustav Singh",
  url: "https://koustavx08.vercel.app",
  sameAs: ["https://github.com/koustavx08", "https://linkedin.com/in/koustavx08"],
  jobTitle: "Full-Stack, Systems & Web3 Engineer",
  knowsAbout: ["MERN", "Web3", "Systems Engineering", "AI Product Development"],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <Script id="person-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <MantineProvider theme={{ primaryColor: "blue" }}>
          <div className="relative z-10">{children}</div>
        </MantineProvider>
        <Analytics />
      </body>
    </html>
  )
}
