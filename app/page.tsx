import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Menu } from "@/components/menu"
import { Formules } from "@/components/formules"
import { Emplacements } from "@/components/emplacements"
import { AvisGoogle } from "@/components/avis-google"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Menu />
      <Formules />
      <Emplacements />
      <AvisGoogle />
      <Contact />
      <Footer />
    </main>
  )
}
