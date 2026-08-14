import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"

export function AvisGoogle() {
  const googleReviewsUrl = "https://maps.app.goo.gl/9wG5gf8U6Stn7SSB9"

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-8 h-8 fill-accent text-accent" />
            ))}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Vos Avis Comptent</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Vous avez goûté nos burgers ? Partagez votre expérience et consultez les avis de nos clients sur Google
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
            >
              <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                Laisser un avis
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent">
              <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer">
                Voir les avis Google
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
