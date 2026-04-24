import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function MentionsLegales() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">Mentions Légales</h1>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Éditeur du site */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Éditeur du site</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong className="text-foreground">L&apos;Endémique</strong><br />
                Food Truck - Burgers Artisanaux<br />
                <br />
                <strong className="text-foreground">Téléphone :</strong> 06 22 83 86 45<br />
                <strong className="text-foreground">Email :</strong> contact@lendemique.fr
              </p>
            </div>

            {/* Hébergement */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Hébergement</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ce site est hébergé par :<br />
                <br />
                <strong className="text-foreground">OVH SAS</strong><br />
                2 rue Kellermann<br />
                59100 Roubaix - France<br />
                Téléphone : 1007<br />
                Site web : <a href="https://www.ovhcloud.com" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">www.ovhcloud.com</a>
              </p>
            </div>

            {/* Conception et réalisation */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Conception et réalisation</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ce site a été conçu et réalisé par :<br />
                <br />
                <strong className="text-foreground">GC Informatik</strong><br />
                Guillaume CRISTINI<br />
                255 Route de Talour<br />
                01100 MARTIGNAT - France
              </p>
            </div>

            {/* Propriété intellectuelle */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Propriété intellectuelle</h2>
              <p className="text-muted-foreground leading-relaxed">
                L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                La reproduction de tout ou partie de ce site sur un support électronique quel qu&apos;il soit est formellement interdite sauf autorisation expresse de L&apos;Endémique.
              </p>
            </div>

            {/* Protection des données personnelles */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Protection des données personnelles</h2>
              <p className="text-muted-foreground leading-relaxed">
                Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données personnelles vous concernant.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Pour exercer ces droits, vous pouvez nous contacter par email à l&apos;adresse : <a href="mailto:contact@lendemique.fr" className="text-accent hover:underline">contact@lendemique.fr</a>
              </p>
            </div>

            {/* Cookies */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ce site peut utiliser des cookies à des fins de statistiques et d&apos;amélioration de l&apos;expérience utilisateur. En naviguant sur ce site, vous acceptez l&apos;utilisation de ces cookies.
              </p>
            </div>

            {/* Responsabilité */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Responsabilité</h2>
              <p className="text-muted-foreground leading-relaxed">
                L&apos;Endémique s&apos;efforce d&apos;assurer au mieux de ses possibilités, l&apos;exactitude et la mise à jour des informations diffusées sur ce site, dont elle se réserve le droit de corriger, à tout moment et sans préavis, le contenu.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Toutefois, L&apos;Endémique ne peut garantir l&apos;exactitude, la précision ou l&apos;exhaustivité des informations mises à disposition sur ce site.
              </p>
            </div>

            {/* Liens externes */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Liens externes</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ce site peut contenir des liens vers d&apos;autres sites internet. L&apos;Endémique n&apos;exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
              </p>
            </div>

            {/* Crédits photos */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Crédits photos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Les photos présentes sur ce site sont la propriété de L&apos;Endémique ou utilisées avec autorisation.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
