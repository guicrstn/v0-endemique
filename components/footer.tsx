import Image from "next/image"
import Link from "next/link"
import { Facebook, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="flex flex-col items-center md:items-start space-y-4">
              <div className="w-32 h-32 relative">
                <Image src="/logo.png" alt="L'Endémique Logo" fill className="object-contain" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold">L'Endémique</h3>
                <p className="text-primary-foreground/70 text-sm">Food Truck - Burgers Artisanaux</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col items-center space-y-3">
              <h4 className="font-bold text-lg mb-2">Navigation</h4>
              <Link
                href="/"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Accueil
              </Link>
              <Link
                href="/notre-histoire"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Notre Histoire
              </Link>
              <Link
                href="/notre-carte"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Notre Carte
              </Link>
              <Link
                href="/evenementiel"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Événementiel
              </Link>
              <Link
                href="/galerie"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Galerie
              </Link>
              <Link
                href="/contact"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                Contact
              </Link>
            </div>

            {/* Contact & Social */}
            <div className="flex flex-col items-center md:items-end space-y-4">
              <h4 className="font-bold text-lg mb-2">Contact</h4>
              <a
                href="tel:0622838645"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                06 22 83 86 45
              </a>
              <a
                href="mailto:contact@lendemique.fr"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                contact@lendemique.fr
              </a>

              <div className="flex gap-4 pt-4">
                <a
                  href="https://www.facebook.com/p/LEnd%C3%A9mique-61559082871253/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60 space-y-2">
            <p>&copy; {new Date().getFullYear()} L&apos;Endémique. Tous droits réservés.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/mentions-legales" className="hover:text-primary-foreground transition-colors">
                Mentions légales
              </Link>
              <span>|</span>
              <span>Site réalisé par GC Informatik</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
