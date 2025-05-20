import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import WearableDetector from "@/components/wearable-detector"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mundial Escolar de Fútbol",
  description: "Sitio oficial del Mundial Escolar de Fútbol",
  viewport: "width=device-width, initial-scale=1, viewport-fit=cover",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <WearableDetector>
            <div className="flex min-h-screen flex-col">
              <Header />
              <Navigation />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </WearableDetector>
        </ThemeProvider>
      </body>
    </html>
  )
}
