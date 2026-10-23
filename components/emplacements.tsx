import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Calendar } from "lucide-react"

const emplacements = [
  {
    day: "Lundi soir",
    place: "Hôtel du Moulin - Samognat (01)",
    detail: "À côté du golf", 
    mapQuery: "Hôtel du Moulin, Samognat, 01580",
  },
  {
    day: "Samedi matin",
    place: "E-Monétique - Nantua (01)",
    detail: "1 rue Paul Painlevé",
    mapQuery: "1 Rue Paul Painlevé, 01130 Nantua, France",
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
        <Card className="mx-auto mb-12 max-w-5xl overflow-hidden border-2 border-accent bg-primary text-primary-foreground shadow-xl">
          <div className="grid md:grid-cols-[1.1fr_1fr]">
            <div className="relative min-h-64 md:min-h-[360px]">
              <Image
                src="/le-spot-arbent.jpg"
                alt="Vue intérieure du bâtiment Le Spot, futur emplacement de L'Endémique à Arbent"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col justify-center gap-5 p-6 md:p-10">
              <span className="w-fit rounded-full bg-accent px-4 py-2 text-sm font-extrabold uppercase tracking-wider text-accent-foreground">
                Bientôt
              </span>
              <div className="space-y-3">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                  Nouvel emplacement
                </p>
                <h3 className="text-3xl font-extrabold tracking-tight md:text-4xl">On arrive au Spot !</h3>
                <p className="text-lg leading-relaxed text-primary-foreground/85">
                  L&apos;Endémique s&apos;installera prochainement dans le bâtiment Le Spot, au 8 rue du Marais,
                  dernier local de gauche, à Arbent (01100). Nous avons hâte de vous y retrouver. Plus
                  d&apos;informations très bientôt.
                </p>
              </div>
              <div className="flex items-center gap-2 font-semibold text-primary-foreground">
                <MapPin className="h-5 w-5 text-accent" aria-hidden="true" />
                <span>Le Spot, Arbent (01100)</span>
              </div>
            </div>
          </div>
        </Card>

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
