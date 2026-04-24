import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Notre Histoire | L'Endémique",
  description:
    "Découvrez l'histoire de L'Endémique, notre passion pour les burgers de qualité et notre engagement pour les produits locaux et le fait maison.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
