import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "L'Endémique - Food Truck Burgers Artisanaux | Événementiel",
  description:
    "Food truck de burgers artisanaux avec produits frais et locaux. Disponible pour vos événements : mariages, fêtes de villages, entreprises. Circuit court et fait maison.",
  keywords: ["food truck", "burger", "artisanal", "événementiel", "mariage", "fête", "local", "fait maison"],
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
