import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Beef } from "lucide-react"

const featuredBurgers = [
  {
    name: "L'Endémique",
    description: "Pain boulanger - Steak de bœuf - Comté - Bacon - Oignons confits - Sauce maison",
    price: "13€",
  },
  {
    name: "Le Classique",
    description: "Pain boulanger - Steak de bœuf - Comté ou Morbier - Salade - Sauce maison",
    price: "10€",
  },
  {
    name: "Le Jurassique",
    description: "Pain boulanger - Steak de bœuf - Morbier - Salade - Mayonnaise",
    price: "11€",
  },
  {
    name: "Le Végétarien",
    description: "Pain boulanger - Salade - Tomate - Oignons rouges - Cornichons - Comté ou Morbier - Sauce maison",
    price: "11€",
  },
]

export function Menu() {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Nos Créations</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Burgers préparés avec des produits frais et locaux - Pain boulanger - Viande d'origine française
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-8 justify-center">
              <div className="p-3 bg-accent/10 rounded-lg">
                <Beef className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-3xl font-bold">Nos Burgers</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredBurgers.map((burger) => (
                <Card key={burger.name} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">{burger.name}</CardTitle>
                    <CardDescription className="text-sm leading-relaxed mb-3">{burger.description}</CardDescription>
                    <span className="text-lg font-bold text-accent">{burger.price}</span>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
