import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function Galerie() {
  const galleryImages = [
    { src: "/delicious-gourmet-burger-close-up.jpg", alt: "Burger gourmand L'Endémique" },
    { src: "/food-truck-at-outdoor-event.jpg", alt: "Notre food truck en événement extérieur" },
    { src: "/fresh-burger-ingredients-preparation.jpg", alt: "Préparation des ingrédients frais" },
    { src: "/burger-and-fries-on-plate.jpg", alt: "Burger et frites fraîches" },
    { src: "/food-truck-at-wedding.jpg", alt: "Food truck lors d'un mariage" },
    { src: "/grilled-burger-patties-on-grill.jpg", alt: "Cuisson des steaks sur le grill" },
    { src: "/happy-customers-at-food-truck.jpg", alt: "Clients satisfaits" },
    { src: "/variety-of-gourmet-burgers.jpg", alt: "Variété de nos burgers gourmands" },
    { src: "/food-truck-at-village-festival.jpg", alt: "Food truck à une fête de village" },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">Galerie Photos</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 text-pretty">
              Découvrez nos créations et nos événements en images
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg group cursor-pointer hover:shadow-xl transition-all"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <p className="text-white text-lg font-semibold px-4 text-center">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Section */}
            <div className="mt-16 text-center space-y-4 max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                Suivez-nous sur les réseaux sociaux pour découvrir nos dernières créations et connaître notre
                emplacement en temps réel !
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
