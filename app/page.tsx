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

// Agregamos searchParams para capturar el clic desde el Navbar
export default async function Home({
  searchParams,
}: {
  searchParams: { cat?: string }
}) {
  const categoriaSeleccionada = searchParams.cat

  // Pedimos los neumáticos incluyendo el campo 'categoria'
  const neumaticosRaw = await client.fetch(`*[_type == "neumatico"]{
    _id, marca, modelo, precio, medida, stock, categoria, "imagenUrl": imagen.asset->url
  }`)

  const herramientas = await client.fetch(`*[_type == "herramienta"]{
    _id, nombre, marca, precio, descripcion, "imagenUrl": imagen.asset->url
  }`)

  // LÓGICA DE FILTRADO
  const neumaticosFiltrados = categoriaSeleccionada
    ? neumaticosRaw.filter((n: any) => n.categoria === categoriaSeleccionada)
    : neumaticosRaw

  // Título dinámico según lo que elija el usuario
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
          
          {/* Si está filtrado, mostramos un botoncito para volver a ver todos */}
          {categoriaSeleccionada && (
            <div className="flex justify-center pb-12">
              <a 
                href="/#ofertas" 
                className="text-xs font-bold uppercase border-b-2 border-primary pb-1 hover:text-primary transition-all"
              >
                ← Volver a ver todas las ofertas
              </a>
            </div>
          )}
        </div>

        <FeaturesSection />

        <div id="herramientas">
          <ProductGrid products={herramientas} title="Herramientas y Accesorios" />
        </div>

        <div id="marcas">
          <BrandsSection />
        </div>

        <section id="contacto" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="text-3xl font-bold text-center mb-12">Nuestras Vías de Contacto</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <a href="https://wa.me/5492262225731" target="_blank" className="flex flex-col items-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-all border border-border group">
                <MessageCircle className="w-10 h-10 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-lg">WhatsApp</span>
                <p className="text-muted-foreground text-sm text-center mt-2">Atención inmediata por chat</p>
              </a>
              <a href="https://instagram.com/aprneumaticoss" target="_blank" className="flex flex-col items-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-all border border-border group">
                <Instagram className="w-10 h-10 text-pink-500 mb-4 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-lg">Instagram</span>
                <p className="text-muted-foreground text-sm text-center mt-2">Seguinos y mirá lo nuevo</p>
              </a>
              <a href="tel:+5491145678900" className="flex flex-col items-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-all border border-border group">
                <Phone className="w-10 h-10 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-lg">Llamanos</span>
                <p className="text-muted-foreground text-sm text-center mt-2">(2262) 225731</p>
              </a>
              <a href="mailto:info@aprneumaticos.com.ar" className="flex flex-col items-center p-6 bg-background rounded-xl shadow-sm hover:shadow-md transition-all border border-border group">
                <Mail className="w-10 h-10 text-red-500 mb-4 group-hover:scale-110 transition-transform" />
                <span className="font-semibold text-lg">Email</span>
                <p className="text-muted-foreground text-sm text-center mt-2">Consultas formales</p>
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