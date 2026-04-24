"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Facebook, CreditCard, Banknote } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">Contactez-nous</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 text-pretty">
              Une envie de burger ? Un événement à organiser ? Nous sommes à votre écoute
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow border-2">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-fit">
                    <Phone className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle>Téléphone</CardTitle>
                  <CardDescription>Appelez-nous directement</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <a href="tel:0622838645" className="text-xl font-semibold text-accent hover:underline">
                    06 22 83 86 45
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-2">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-fit">
                    <Mail className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle>Email</CardTitle>
                  <CardDescription>Pour vos demandes de devis</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <a
                    href="mailto:contact@lendemique.fr"
                    className="text-lg font-semibold text-accent hover:underline break-all"
                  >
                    contact@lendemique.fr
                  </a>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-2">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-fit">
                    <MapPin className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle>Notre Food Truck</CardTitle>
                  <CardDescription>Nous venons à vous</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-base font-semibold">Mobile dans toute la région</p>
                </CardContent>
              </Card>
            </div>

            {/* Social Media */}
            <div className="bg-muted/30 p-8 rounded-xl space-y-6">
              <div className="text-center space-y-4">
                <h2 className="text-3xl font-bold">Suivez-nous</h2>
                <p className="text-muted-foreground">
                  Restez informés de notre emplacement et de nos nouveautés sur les réseaux sociaux
                </p>
              </div>

              <div className="flex justify-center">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-transparent"
                  onClick={() => window.open("https://www.facebook.com/p/LEnd%C3%A9mique-61559082871253/", "_blank")}
                >
                  <Facebook className="w-5 h-5 mr-2" />
                  Facebook
                </Button>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="bg-accent/10 p-8 rounded-xl">
              <div className="text-center space-y-6">
                <h2 className="text-2xl font-bold">Moyens de Paiement</h2>
                <div className="flex flex-wrap gap-6 justify-center items-center">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-background rounded-lg">
                      <CreditCard className="w-8 h-8 text-accent" />
                    </div>
                    <span className="text-lg font-semibold">Carte Bancaire</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-background rounded-lg">
                      <Banknote className="w-8 h-8 text-accent" />
                    </div>
                    <span className="text-lg font-semibold">Espèces</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center space-y-6 pt-8">
              <h2 className="text-3xl font-bold">Prêt à Commander ?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Pour une commande ou un événement, contactez-nous par téléphone ou email. Nous vous répondrons dans les
                plus brefs délais !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
                  onClick={() => (window.location.href = "tel:0622838645")}
                >
                  Appeler Maintenant
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-transparent"
                  onClick={() => (window.location.href = "mailto:contact@lendemique.fr")}
                >
                  Envoyer un Email
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
