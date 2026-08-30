import type React from "react"
import { MantineProvider } from "@mantine/core"
// import '@mantine/core/styles.css'
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Koustav Singh | Full-Stack MERN & Web3 Developer",
  description:
    "Full-Stack MERN & Web3 Developer building scalable, user-centric web & AI products. Based in Kolkata, India.",
  keywords: ["Full-Stack Developer", "MERN", "Web3", "React", "Next.js", "TypeScript", "Solidity", "AI"],
  authors: [{ name: "Koustav Singh" }],
  openGraph: {
    title: "Koustav Singh | Full-Stack MERN & Web3 Developer",
    description: "Building scalable, user-centric web & AI products that actually ship.",
    url: "https://koustavx08.vercel.app",
    siteName: "Koustav Singh Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Koustav Singh | Full-Stack MERN & Web3 Developer",
    description: "Building scalable, user-centric web & AI products that actually ship.",
  }
}

export const viewport: Viewport = {
  themeColor: "#1a1a2e",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-accent-blue focus:text-background focus:font-semibold focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Skip to main content
        </a>
        <MantineProvider theme={{ primaryColor: 'blue' }}>
          <div className="relative z-10">{children}</div>
        </MantineProvider>
        <Analytics />
      </body>
    </html>
  )
}
