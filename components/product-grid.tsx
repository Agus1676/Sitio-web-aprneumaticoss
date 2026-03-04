import Image from "next/image"
import { MessageCircle, Tag, Gauge } from "lucide-react"

function formatPrice(price: number) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,    maximumFractionDigits: 0,
  }).format(price)
}

function ProductCard({ n }: { n: any }) {
  // Ahora manejamos nombres para herramientas o marca/modelo para neumáticos
  const title = n.nombre || n.modelo || "Producto"
  const subtitle = n.marca || ""
  const price = n.precio || 0
  const detail = n.medida || n.descripcion || "" // Usa medida o descripción
  const stock = n.stock ?? "Consultar"
  const image = n.imagenUrl || "/images/hero-tire.jpg" 

  const whatsappMessage = encodeURIComponent(
    `Hola! Me interesa consultar por: ${subtitle} ${title}. ¿Tienen disponibilidad?`
  )
  // ¡Cambiá este número por el tuyo!
  const whatsappUrl = `https://wa.me/5491112345678?text=${whatsappMessage}`

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
      <div className="absolute left-3 top-3 z-10 flex items-center gap-1 rounded-md bg-primary px-2.5 py-1">
        <Tag className="h-3 w-3 text-primary-foreground" />
        <span className="text-xs font-bold uppercase text-primary-foreground text-white">Nuevo</span>
      </div>

      <div className="relative flex items-center justify-center overflow-hidden bg-secondary/50 p-6 text-white">
        <div className="relative h-44 w-44 transition-transform duration-300 group-hover:scale-105">
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-contain" 
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="font-[var(--font-heading)] text-xs font-bold uppercase tracking-widest text-primary">
            {subtitle}
          </span>
          {n.stock !== undefined && (
            <span className="flex items-center gap-1 rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
              <Gauge className="h-2.5 w-2.5" />
              Stock: {stock}
            </span>
          )}
        </div>

        <h3 className="text-base font-semibold leading-tight text-foreground line-clamp-1">{title}</h3>
        <p className="mt-1 font-mono text-sm text-muted-foreground line-clamp-2">{detail}</p>

        <div className="mt-3 flex items-end gap-2">
          <span className="font-[var(--font-heading)] text-2xl font-bold text-foreground">
            {formatPrice(price)}
          </span>
        </div>

        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1EBE5B] active:scale-[0.98]"
        >
          <MessageCircle className="h-4 w-4" />
          Consultar
        </a>
      </div>
    </article>
  )
}

// Agregamos la prop "title" para que sea dinámico
export function ProductGrid({ products, title }: { products: any[], title: string }) {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-primary">Catálogo</span>
          <h2 className="font-[var(--font-heading)] text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
            {title}
          </h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products?.map((product: any) => (
            <ProductCard key={product._id} n={product} />
          ))}
        </div>
        
        {products?.length === 0 && (
          <p className="text-center text-muted-foreground italic">Próximamente más productos...</p>
        )}
      </div>
    </section>
  )
}