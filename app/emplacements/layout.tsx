import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nos Emplacements | L'Endémique",
  description:
    "Retrouvez notre food truck chaque semaine : Samognat (lundi), Nantua (mercredi et dimanche), Martignat (jeudi). Burgers gourmands près de chez vous dans l'Ain.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
