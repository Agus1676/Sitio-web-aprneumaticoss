import { createClient } from 'next-sanity'
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProductGrid } from "@/components/product-grid"
import { FeaturesSection } from "@/components/features-section"
import { BrandsSection } from "@/components/brands-section"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Mail, Phone, Instagram, MessageCircle } from "lucide-react"

const client = createClient({
  projectId: 'chfqu4zx',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

// Forzamos a que Next.js sepa que esta página es dinámica
export const dynamic = 'force-dynamic'

export default async function Home(props: {
  searchParams: Promise<{ cat?: string }>
}) {
  // Requisito de Next.js 15: esperar los parámetros
  const searchParams = await props.searchParams;
  const categoriaSeleccionada = searchParams.cat;

  const neumaticosRaw = await client.fetch(`*[_type == "neumatico"]{
    _id, marca, modelo, precio, medida, stock, categoria, "imagenUrl": imagen.asset->url
  }`)

  const herramientas = await client.fetch(`*[_type == "herramienta"]{
    _id, nombre, marca, precio, descripcion, "imagenUrl": imagen.asset->url
  }`)

  const neumaticosFiltrados = categoriaSeleccionada
    ? neumaticosRaw.filter((n: any) => n.categoria === categoriaSeleccionada)
    : neumaticosRaw

  const tituloDinamico = categoriaSeleccionada
    ? `NEUMÁTICOS: ${categoriaSeleccionada.toUpperCase()}`
    : "NEUMÁTICOS EN OFERTAS"

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <div id="ofertas" className="scroll-mt-24">
          <ProductGrid products={neumaticosFiltrados} title={tituloDinamico} />
        </div>
        <FeaturesSection />
        <div id="herramientas">
          <ProductGrid products={herramientas} title="Herramientas y Accesorios" />
        </div>
        <div id="marcas">
          <BrandsSection />
        </div>
        <section id="contacto" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <h2 className="text-3xl font-bold mb-12">Contacto APR Neumáticos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a href="https://wa.me/5492262225731" target="_blank" className="p-6 bg-background rounded-xl border border-border">
                <MessageCircle className="w-10 h-10 text-green-500 mx-auto mb-2" />
                <span className="block font-bold">WhatsApp</span>
              </a>
              <a href="https://instagram.com/aprneumaticoss" target="_blank" className="p-6 bg-background rounded-xl border border-border">
                <Instagram className="w-10 h-10 text-pink-500 mx-auto mb-2" />
                <span className="block font-bold">Instagram</span>
              </a>
              <a href="tel:+5492262225731" className="p-6 bg-background rounded-xl border border-border">
                <Phone className="w-10 h-10 text-blue-500 mx-auto mb-2" />
                <span className="block font-bold">Llamar</span>
              </a>
              <a href="mailto:info@aprneumaticos.com.ar" className="p-6 bg-background rounded-xl border border-border">
                <Mail className="w-10 h-10 text-red-500 mx-auto mb-2" />
                <span className="block font-bold">Email</span>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}