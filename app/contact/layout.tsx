import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | L'Endémique",
  description:
    "Contactez L'Endémique pour vos commandes ou événements. Téléphone : 06 22 83 86 45 | Email : lendemique01@outlook.com",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
