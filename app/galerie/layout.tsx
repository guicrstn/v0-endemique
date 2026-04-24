import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Galerie Photos | L'Endémique",
  description:
    "Découvrez nos créations et nos événements en images. Photos de nos burgers artisanaux et de notre food truck en action.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
