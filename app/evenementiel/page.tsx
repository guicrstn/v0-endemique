"use client"

import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone } from "lucide-react"

export default function Evenementiel() {
  const eventTypes = [
    {
      title: "Mariages",
      description: "Offrez à vos invités une expérience culinaire unique pour votre grand jour",
      image: "/event-wedding.jpg",
    },
    {
      title: "Cousinades & Fêtes Familiales",
      description: "Rassemblez votre famille autour de burgers gourmands et conviviaux",
      image: "/event-family.jpg",
    },
    {
      title: "Fêtes de Villages",
      description: "Animez vos événements communaux avec notre food truck mobile",
      image: "/event-village.jpg",
    },
    {
      title: "Événements Sportifs",
      description: "Régalez les sportifs et spectateurs lors de vos compétitions",
      image: "/event-sport.jpg",
    },
    {
      title: "Événements Associatifs & Caritatifs",
      description: "Soutenez vos causes avec une restauration de qualité",
      image: "/event-charity.jpg",
    },
    {
      title: "CE d'Entreprises",
      description: "Proposez une pause déjeuner originale à vos collaborateurs",
      image: "/event-corporate.jpg",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">Événementiel</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 text-pretty">
              Votre food truck pour tous vos événements privés et professionnels
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {/* Formule Selection - Mise en avant */}
            <div className="bg-accent/10 p-8 md:p-12 rounded-xl space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Choisissez Votre Formule</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Pour vos événements, choisissez la formule qui vous convient et personnalisez les ingrédients selon vos envies. Notre menu est entièrement flexible et adaptable à vos besoins !
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="border-2 bg-background hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center space-y-3">
                    <h3 className="text-xl font-bold">Formules Burgers</h3>
                    <p className="text-muted-foreground">Burger seul, avec frites, avec boisson... à vous de choisir !</p>
                  </CardContent>
                </Card>
                <Card className="border-2 bg-background hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center space-y-3">
                    <h3 className="text-xl font-bold">Ingrédients Flexibles</h3>
                    <p className="text-muted-foreground">Personnalisez les ingrédients de vos burgers selon vos préférences</p>
                  </CardContent>
                </Card>
                <Card className="border-2 bg-background hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center space-y-3">
                    <h3 className="text-xl font-bold">Menu Sur-Mesure</h3>
                    <p className="text-muted-foreground">Salades, plancha et autres préparations traiteur disponibles</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Introduction */}
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Notre Objectif Principal : Vos Événements</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                L&apos;événementiel est au cœur de notre activité. Que vous organisiez un mariage, une fête de village, un
                événement sportif ou une célébration d&apos;entreprise, nous nous déplaçons avec notre food truck entièrement
                équipé pour régaler vos invités.
              </p>
            </div>

            {/* Event Types Grid with Images */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {eventTypes.map((event, index) => (
                <Card key={index} className="border-2 hover:shadow-lg transition-all hover:-translate-y-1 overflow-hidden">
                  <div className="relative h-48 w-full">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6 space-y-3">
                    <h3 className="text-xl font-bold">{event.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Flexibility Section */}
            <div className="bg-muted/30 p-8 md:p-12 rounded-xl space-y-6">
              <div className="text-center space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Flexibilité & Sur-Mesure</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Nous nous adaptons à vos besoins spécifiques
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Menu Personnalisé</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Vous avez des envies qui ne figurent pas sur notre carte ? Pas de problème ! Nous pouvons adapter
                    notre offre selon vos souhaits. Nous proposons également du service traiteur avec des salades
                    préparées en amont et tout ce qui peut se faire sur une plancha.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Service Complet</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Notre food truck entièrement autonome s'installe sur votre lieu d'événement. Nous gérons la
                    préparation et le service pour que vous puissiez profiter pleinement de votre événement. Paiement
                    par carte bancaire et espèces acceptés.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-accent/10 p-8 md:p-12 rounded-xl text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">Prêt à Organiser Votre Événement ?</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                  Contactez-nous par email pour discuter de votre projet. Nous vous répondrons rapidement avec un devis
                  personnalisé adapté à vos besoins et à votre budget.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8"
                  onClick={() =>
                    (window.location.href = "mailto:contact@lendemique.fr?subject=Demande de devis événementiel")
                  }
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Demander un Devis
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 bg-transparent"
                  onClick={() => (window.location.href = "tel:0622838645")}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Nous Appeler
                </Button>
              </div>

              <div className="pt-6 border-t border-border space-y-2">
                <p className="font-semibold text-lg">Coordonnées</p>
                <p className="text-muted-foreground">
                  <a href="mailto:contact@lendemique.fr" className="hover:text-accent transition-colors">
                    contact@lendemique.fr
                  </a>
                </p>
                <p className="text-muted-foreground">
                  <a href="tel:0622838645" className="hover:text-accent transition-colors">
                    06 22 83 86 45
                  </a>
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground italic">
                "Notre passion est de rendre vos événements inoubliables avec des burgers qui marquent les esprits.
                Chaque prestation est unique et pensée pour s'adapter parfaitement à votre occasion."
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
