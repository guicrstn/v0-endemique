import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Emplacements } from "@/components/emplacements"

export default function EmplacementsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">Nos Emplacements</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 text-pretty">
              Retrouvez notre food truck chaque semaine près de chez vous dans l&apos;Ain
            </p>
          </div>
        </div>
      </section>

      <Emplacements />

      <Footer />
    </main>
  )
}
