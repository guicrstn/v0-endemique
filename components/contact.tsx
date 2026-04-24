"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">Contactez-nous</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Une envie de burger ? N'hésitez pas à nous contacter pour passer commande
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="hover:shadow-lg transition-shadow">
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

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-fit">
                <Mail className="w-8 h-8 text-accent" />
              </div>
              <CardTitle>Email</CardTitle>
              <CardDescription>Envoyez-nous un message</CardDescription>
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

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-full w-fit">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <CardTitle>Food Truck</CardTitle>
              <CardDescription>Retrouvez-nous</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg font-semibold">
                Suivez-nous sur les réseaux sociaux pour connaître notre emplacement
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
            onClick={() => (window.location.href = "tel:0622838645")}
          >
            Appelez maintenant
          </Button>
        </div>
      </div>
    </section>
  )
}
