import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nos Emplacements | L'Endémique",
  description:
    "Retrouvez notre food truck chaque semaine : Samognat (lundi soir), Nantua (mercredi soir et samedi matin, 1 rue Paul Painlevé), Martignat (jeudi soir). Burgers gourmands près de chez vous dans l'Ain.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
