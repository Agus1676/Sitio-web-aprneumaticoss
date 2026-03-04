import { Phone, Mail, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer id="contacto" className="border-t border-border bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 items-start">
          
          {/* Columna Marca - Logo con tamaño real y alineado */}
          <div className="flex flex-col gap-6">
            <div className="relative w-[240px] md:w-[280px] h-20"> 
              <Image
                src="/images/logo.png"
                alt="APR Neumáticos"
                fill
                className="object-contain object-left filter brightness-110"
                priority
              />
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground pr-4">
              Tu experto en neumáticos desde 2005. Calidad, confianza y los
              mejores precios del mercado.
            </p>
          </div>

          {/* Columna Enlaces - Ajuste de altura visual */}
          <div className="lg:pt-4">
            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-foreground">
              Enlaces
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="/#ofertas" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Productos
                </a>
              </li>
              <li>
                <a href="#marcas" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Marcas
                </a>
              </li>
              <li>
                <a href="#herramientas" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                  Herramientas
                </a>
              </li>
            </ul>
          </div>

          {/* Columna Contacto */}
          <div className="lg:pt-4">
            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-foreground">
              Contacto
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary shrink-0" />
                <span>(2262) 225731</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary shrink-0" />
                <span className="break-all">info@aprneumaticos.com.ar</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <span>Necochea, Argentina</span>
              </li>
            </ul>
          </div>

          {/* Columna Horarios */}
          <div className="lg:pt-4">
            <h3 className="mb-6 text-xs font-black uppercase tracking-[0.2em] text-foreground">
              Horarios
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Lun - Vie</span>
                <span className="text-foreground font-semibold">8:00 - 18:00</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Sábados</span>
                <span className="text-foreground font-semibold">9:00 - 14:00</span>
              </li>
              <li className="flex justify-between">
                <span>Domingos</span>
                <span className="text-red-500 font-bold uppercase text-[10px]">Cerrado</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Inferior */}
        <div className="mt-20 border-t border-white/5 pt-10 text-center">
          <p className="text-[10px] text-muted-foreground tracking-[0.3em] uppercase">
            © 2026 APR Neumáticos. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}