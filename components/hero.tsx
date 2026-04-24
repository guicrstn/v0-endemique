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

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Logo */}
          <div className="w-64 h-64 md:w-80 md:h-80 relative animate-fade-in">
            <Image src="/logo.png" alt="L'Endémique Logo" fill className="object-contain" priority />
          </div>

          {/* Tagline */}
          <div className="space-y-4 max-w-3xl animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Des burgers qui prennent leur envol
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto text-pretty">
              Food truck mobile pour vos événements et communes - Produits frais, locaux et fait maison
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up">
            <Link href="/notre-carte">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8">
                Voir la Carte
              </Button>
            </Link>
            <Link href="/evenementiel">
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 bg-transparent"
              >
                Événementiel
              </Button>
            </Link>
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
