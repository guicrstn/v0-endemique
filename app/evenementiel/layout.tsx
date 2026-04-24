import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Événementiel | L'Endémique",
  description:
    "Food truck pour tous vos événements : mariages, fêtes de villages, événements sportifs, CE d'entreprises. Service sur-mesure et flexible.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
