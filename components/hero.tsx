"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-primary text-primary-foreground overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 order-2 lg:order-1">
            <div className="space-y-4 max-w-2xl animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                Des burgers qui prennent leur envol
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl text-pretty">
                Food truck mobile pour vos événements et communes - Produits frais, locaux et fait maison
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
              <Link href="/evenementiel">
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                  Événementiel
                </Button>
              </Link>
            </div>
          </div>

          {/* Affiche */}
          <div className="relative w-full max-w-sm mx-auto animate-fade-in order-1 lg:order-2">
            <Image
              src="/affiche-endemique.jpg"
              alt="Affiche L'Endémique - Burgers gourmands et authentiques, produits locaux, événements, fait maison"
              width={1040}
              height={1500}
              className="w-full h-auto rounded-xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
