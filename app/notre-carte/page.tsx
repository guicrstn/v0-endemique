import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function NotreCarte() {
  const formulesBurgers = [
    { name: "BURGER SEUL", price: "10€" },
    { name: "BURGER XL", price: "12€" },
    { name: "BURGER DOUBLE XL SEUL", price: "14€" },
    { name: "BURGER + FRITES", price: "13€" },
    { name: "BURGER XL + FRITES", price: "15€" },
    { name: "BURGER DOUBLE XL + FRITES", price: "17€" },
    { name: "BURGER + FRITES + SOFT/BIÈRE", price: "15€/16€" },
    { name: "BURGER XL + FRITES+ SOFT/BIÈRE", price: "17€/19€" },
    { name: "BURGER DOUBLE XL + FRITES ° SOFT/BIÈRE", price: "19€/20€" },
  ]

  const formulesPainsAmericains = [
    { name: "PAIN AMÉRICAIN", price: "14€" },
    { name: "PAIN AMÉRICAIN XL", price: "18€" },
    { name: "PAIN AMÉRICAIN + SOFT/BIÈRE", price: "16€/17€" },
    { name: "PAIN AMÉRICAIN XL + SOFT/BIÈRE", price: "20€/21€" },
  ]

  const formulesLoustik = [
    { name: "DEMI BURGER SEUL", price: "5€" },
    { name: "DEMI BURGER + FRITES", price: "7€" },
    { name: "DEMI BURGER + FRITES + SOFT", price: "9€" },
  ]

  const frites = [
    { name: "MOYENNE", price: "4€", note: "(CUITES DANS LA GRAISSE DE BŒUF)" },
    { name: "GRANDE", price: "6€", note: "(CUITES DANS LA GRAISSE DE BŒUF)" },
  ]

  const boissons = [
    { category: "BOISSONS SOFT", price: "3€", items: ["DR PEPPER/COCA COLA", "OASIS", "ICE TEA"] },
    {
      category: "BIÈRES ARTISANALES L'ÉTINCELLE",
      price: "4€",
      items: ["BLONDE/AMBRE/AUTRES SAVEURS", "(STOCKS POUVANT VARIER)"],
    },
  ]

  const burgerDetails = [
    {
      name: "LE LOUSTIK'",
      description: "DEMI PAIN BURGER - STEAK DE BŒUF* – COMTE - SAUCE AU CHOIX KETCHUP/MAYO/SAUCE MAISON)",
    },
    {
      name: "LE BURGER",
      description: "PAIN BOULANGER - STEAK DE BŒUF* - COMTE OU MORBIER - SALADE SAUCE MAISON",
    },
    {
      name: "LE BURGER XL",
      description:
        "PAIN BOULANGER - STEAK DE BŒUF* - COMTE OU MORBIER – SALADE – TOMATE - OIGNONS ROUGES - SAUCE MAISON",
    },
    {
      name: "LE BURGER DOUBLE XL",
      description: "PAIN BOULANGER – STEAK DE BŒUF* X2 COMTE OU MORBIER X2 – SALADE – TOMATE – OIGNONS ROUGES",
    },
    {
      name: "LE BURGER VEGETARIEN",
      description: "PAIN BOULANGER – SALADE – TOMATE - OIGNONS ROUGES – CORNICHONS - COMTE OU MORBIER - SAUCE MAISON",
    },
    {
      name: "PAIN AMÉRICAIN",
      description: "DEMI FLÛTE - STEAK DE BŒUF* - COMTE OU MORBIER – SALADE – TOMATE - OIGNONS ROUGES - SAUCE MAISON",
    },
    {
      name: "PAIN AMÉRICAIN XL",
      description: "DEMI FLÛTE - STEAK DE BŒUF* X2 - COMTE OU MORBIER X2 SALADE – TOMATE - OIGNONS ROUGES",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">Notre Carte</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 text-pretty">
              Découvrez nos formules et nos créations gourmandes
            </p>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              * VIANDE D'ORIGINE FRANÇAISE
            </Badge>
          </div>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Formules Burgers */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">FORMULES BURGERS</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {formulesBurgers.map((formule, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-base leading-tight">{formule.name}</CardTitle>
                        <span className="text-lg font-bold text-accent shrink-0">{formule.price}</span>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Formules Pains Américains */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">FORMULES PAINS AMÉRICAINS</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {formulesPainsAmericains.map((formule, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-base leading-tight">{formule.name}</CardTitle>
                        <span className="text-lg font-bold text-accent shrink-0">{formule.price}</span>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Formules Loustik' */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">FORMULES LOUSTIK'</h2>
                <p className="text-muted-foreground">Pour les plus petits</p>
              </div>
              <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                {formulesLoustik.map((formule, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-base leading-tight">{formule.name}</CardTitle>
                        <span className="text-lg font-bold text-accent shrink-0">{formule.price}</span>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Frites Seules */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">FRITES SEULES</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {frites.map((frite, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <div className="space-y-1">
                          <CardTitle className="text-lg">{frite.name}</CardTitle>
                          <CardDescription className="text-xs">{frite.note}</CardDescription>
                        </div>
                        <span className="text-lg font-bold text-accent shrink-0">{frite.price}</span>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Boissons */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">BOISSONS</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {boissons.map((boisson, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="space-y-3">
                        <div className="flex items-start justify-between gap-2">
                          <CardTitle className="text-xl">{boisson.category}</CardTitle>
                          <span className="text-xl font-bold text-accent shrink-0">{boisson.price}</span>
                        </div>
                        <div className="space-y-1">
                          {boisson.items.map((item, i) => (
                            <p key={i} className="text-sm text-muted-foreground">
                              {item}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Produits Locaux & Fait Maison */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 hover:shadow-lg transition-shadow bg-accent/5">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Produits Locaux</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    Nous privilégions les circuits courts et travaillons avec des produits frais et de qualité. Notre
                    viande est d&apos;origine française et nos ingrédients sont soigneusement sélectionnés.
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow bg-accent/5">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Fait Maison</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    La majorité de nos préparations sont faites maison, de notre sauce signature aux marinades. Nous
                    utilisons du pain boulanger plutôt que du pain burger industriel pour un goût authentique.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* Détails des Menus */}
            <div className="space-y-8 bg-muted/30 p-8 rounded-xl">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">CARTE DU MOMENT</h2>
                <p className="text-muted-foreground">Composition détaillée de nos burgers</p>
              </div>
              <div className="space-y-4">
                {burgerDetails.map((burger, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg mb-2">{burger.name}</CardTitle>
                      <CardDescription className="text-sm leading-relaxed">{burger.description}</CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
              <div className="text-center mt-8">
                <p className="text-sm text-muted-foreground italic">
                  NOTRE SAUCE MAISON EST COMPOSÉE DE MAYONNAISE, KETCHUP, OIGNONS JAUNES ET CORNICHONS MIXÉES PUIS
                  AGRÉMENTÉE DE VINAIGRE DE VIN ROUGE
                </p>
              </div>
            </div>

            {/* Burgers Signatures */}
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <Badge variant="default" className="text-lg px-6 py-2">
                  NOS SIGNATURES
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold">Nos Burgers Signatures</h2>
                <p className="text-muted-foreground">Nos créations exclusives</p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                <Card className="border-2 border-accent hover:shadow-lg transition-shadow bg-accent/5">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-2xl">L&apos;ENDÉMIQUE</CardTitle>
                      <span className="text-2xl font-bold text-accent shrink-0">12€</span>
                    </div>
                    <CardDescription className="text-base leading-relaxed pt-2">
                      Pain boulanger, steak de boeuf*, comté, bacon, oignons confits, sauce maison
                    </CardDescription>
                  </CardHeader>
                </Card>
                <Card className="border-2 border-accent hover:shadow-lg transition-shadow bg-accent/5">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-2xl">JURASSIQUE</CardTitle>
                      <span className="text-2xl font-bold text-accent shrink-0">11€</span>
                    </div>
                    <CardDescription className="text-base leading-relaxed pt-2">
                      Pain boulanger, steak de boeuf*, morbier, salade, mayonnaise
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>

            {/* Note */}
            <div className="text-center space-y-4 p-6 bg-muted/50 rounded-lg">
              <p className="text-lg font-semibold">Nous travaillons constamment à étoffer notre carte</p>
              <p className="text-muted-foreground">
                De nouveaux burgers, pains américains et recettes sont régulièrement ajoutés. Suivez-nous pour découvrir
                nos dernières créations !
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
