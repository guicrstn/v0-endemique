import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mentions Légales | L'Endémique",
  description: "Mentions légales du site L'Endémique - Food Truck Burgers Artisanaux",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
