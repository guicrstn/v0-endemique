import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Menu } from "@/components/menu"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Menu />
      <Contact />
      <Footer />
    </main>
  )
}
