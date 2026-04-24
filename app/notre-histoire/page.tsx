import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function NotreHistoire() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">Notre Histoire</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 text-pretty">
              Arnaud et Olivier, 2 amis d'enfance passionnés de burgers
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Welcome Message */}
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Salutations à toi et bienvenue</h2>
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Si tu t&apos;es perdu sur notre site c&apos;est que tu cherches de quoi te sustenter à prix raisonnable et de qualité incomparable ?
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                <strong className="text-foreground">L&apos;Endémique</strong>, foodtruck spécialisé dans les burgers te propose des burgers préparés par nos soins à base de produits frais et travaillant avec les commerces locaux pour t&apos;offrir une dégustation mémorable.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                L&apos;Endémique ce nom te rappelle sans doute un foodtruck qui a sillonné la région quelques années auparavant et qui a disparu pendant 2 ans...
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Et bien nous, <strong className="text-foreground">Arnaud et Olivier</strong>, 2 amis d&apos;enfance originaires de la plaine de l&apos;Ain avons décidé de reprendre le concept originel, tout en apportant notre touche personnelle et proposant de nouveaux burgers tout aussi délicieux qu&apos;originaux.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                <strong className="text-foreground">Depuis 2024</strong> nous sillonnons la région dans les communes avoisinantes, et pour tous types d&apos;événements, avec comme objectif : <strong className="text-accent">la satisfaction de nos clients</strong>.
              </p>

              <p className="text-lg leading-relaxed text-muted-foreground">
                Mais trêve de bavardage nous te laissons surfer tranquillement sur le site et nous te souhaitons une bonne visite.
              </p>
            </div>

            {/* Signature */}
            <div className="text-center pt-8">
              <p className="text-2xl font-bold italic">L&apos;Endémique</p>
              <p className="text-muted-foreground mt-2">Arnaud & Olivier</p>
            </div>

            {/* Additional Info */}
            <div className="mt-16 p-8 bg-muted/30 rounded-xl space-y-4">
              <h3 className="text-2xl font-bold">Notre Engagement</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chez L&apos;Endémique, nous croyons qu&apos;un bon burger commence par de bons ingrédients. C&apos;est pourquoi nous
                sélectionnons avec soin nos fournisseurs locaux et privilégions la qualité à la quantité. Notre food
                truck est équipé pour vous servir dans les meilleures conditions, que ce soit pour un déjeuner rapide ou
                un événement spécial.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous acceptons les paiements par carte bancaire et espèces pour votre confort.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
