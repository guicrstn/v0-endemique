import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const burgers = ["L'Endémique", "Le Classique", "Le Jurassique", "Le Végétarien"]

const rows = [
  {
    label: "Seul",
    prices: ["13€", "10€", "11€", "11€"],
  },
  {
    label: "Avec frites",
    prices: ["16€", "13€", "14€", "14€"],
  },
  {
    label: "Frites + boisson (soft / bière)",
    prices: ["18€ / 19€", "15€ / 16€", "16€ / 17€", "16€ / 17€"],
  },
]

export function Formules() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Nos Formules</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Composez votre formule selon votre appétit et vos envies
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-10">
          {/* Tableau des formules burgers */}
          <div className="overflow-x-auto rounded-xl border-2 border-border bg-background">
            <table className="w-full border-collapse min-w-[640px]">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="p-4 text-left font-bold text-base">Formule</th>
                  {burgers.map((burger) => (
                    <th key={burger} className="p-4 text-center font-bold text-base whitespace-nowrap">
                      {burger}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr key={row.label} className={index % 2 === 0 ? "bg-background" : "bg-muted/40"}>
                    <td className="p-4 font-semibold text-sm md:text-base border-t border-border">{row.label}</td>
                    {row.prices.map((price, i) => (
                      <td
                        key={i}
                        className="p-4 text-center font-bold text-accent text-base md:text-lg border-t border-border whitespace-nowrap"
                      >
                        {price}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Phrase steak ou fromage */}
          <div className="text-center bg-accent/10 rounded-xl p-6">
            <p className="text-base md:text-lg font-semibold text-pretty">
              Burger doublé : 16€ (L&apos;Endémique et Le Jurassique), Le Classique à 15€
            </p>
          </div>

          {/* Autres formules */}
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow border-2">
              <CardHeader>
                <CardTitle className="text-xl">Pain Américain</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>+ boisson (soft)</span>
                  <span className="font-bold text-accent">16€</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>+ boisson (bière)</span>
                  <span className="font-bold text-accent">17€</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2">
              <CardHeader>
                <CardTitle className="text-xl">Loustik&apos;</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Loustik&apos; + frites</span>
                  <span className="font-bold text-accent">7€</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>+ boisson</span>
                  <span className="font-bold text-accent">9€</span>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2">
              <CardHeader>
                <CardTitle className="text-xl">Frites</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Petite barquette</span>
                  <span className="font-bold text-accent">4€</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Grande barquette</span>
                  <span className="font-bold text-accent">6€</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
