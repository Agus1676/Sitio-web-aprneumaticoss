import { Shield, Truck, CreditCard } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Garantia oficial",
    description: "Todos nuestros neumaticos cuentan con garantia oficial de fabrica.",
  },
  {
    icon: Truck,
    title: "Envios a todo el pais",
    description: "Envio gratis a CABA y GBA. Envios economicos al interior.",
  },
  {
    icon: CreditCard,
    title: "Hasta 12 cuotas",
    description: "Paga en cuotas sin interes con todas las tarjetas de credito.",
  },
]

export function FeaturesSection() {
  return (
    <section id="servicios" className="border-t border-border bg-secondary py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-[var(--font-heading)] text-lg font-bold uppercase text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
