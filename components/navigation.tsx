"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: "/", label: "Accueil" },
    { href: "/notre-histoire", label: "Notre Histoire" },
    { href: "/notre-carte", label: "Notre Carte" },
    { href: "/evenementiel", label: "Événementiel" },
    { href: "/galerie", label: "Galerie" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black">
      <div className="absolute top-0 right-0 w-[78%] h-20 bg-white rounded-bl-[120px] hidden lg:block" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="L'Endémique" width={80} height={80} className="object-contain" />
          </Link>

          <div className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 absolute right-0 w-[78%]">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-black hover:text-accent transition-colors font-medium text-sm xl:text-base whitespace-nowrap"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-white/10 ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-white/20">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-accent transition-colors font-medium py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
