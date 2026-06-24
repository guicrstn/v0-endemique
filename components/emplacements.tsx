import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar } from "lucide-react"

const emplacements = [
  {
    day: "Lundi soir",
    place: "Hôtel du Moulin - Samognat",
    detail: "À côté du golf - jusqu'à la fin de la période estivale",
  },
  {
    day: "Mercredi & Dimanche soir",
    place: "Nantua",
    detail: "Parking du Marché des Affaires",
  },
  {
    day: "Jeudi soir",
    place: "Martignat",
    detail: "Parking Jardin de Julien",
  },
]

export function Emplacements() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Nos Emplacements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Retrouvez notre food truck chaque semaine près de chez vous
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {emplacements.map((emplacement, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-2">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-2 text-accent">
                  <Calendar className="w-5 h-5" />
                  <span className="font-bold text-lg">{emplacement.day}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-lg">{emplacement.place}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{emplacement.detail}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
