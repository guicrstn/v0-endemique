import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar } from "lucide-react"

const emplacements = [
  {
    day: "Lundi soir",
    place: "Hôtel du Moulin - Samognat (01)",
    detail: "À côté du golf - jusqu'à la fin de la période estivale",
    mapQuery: "Hôtel du Moulin, Samognat, 01580",
  },
  {
    day: "Mercredi & Dimanche soir",
    place: "Nantua (01)",
    detail: "Parking du Marché des Affaires",
    mapQuery: "Marché aux Affaires, Nantua, 01130",
  },
  {
    day: "Jeudi soir",
    place: "Martignat (01)",
    detail: "Parking Jardin de Julien",
    mapQuery: "Jardin de Julien, Martignat, 01100",
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
            <Card key={index} className="hover:shadow-lg transition-shadow border-2 overflow-hidden flex flex-col">
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
              <div className="mt-auto">
                <iframe
                  title={`Carte ${emplacement.place}`}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(emplacement.mapQuery)}&output=embed`}
                  width="100%"
                  height="200"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full border-0"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
