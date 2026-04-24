import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notre Carte | L'Endémique",
  description:
    "Découvrez notre carte complète : burgers, pains américains, formules avec frites et boissons. Viande d'origine française et produits frais.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
