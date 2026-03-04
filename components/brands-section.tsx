const brands = [
  "Sunset",
  "Xbri",
  "Sunny",
  "Firemax",
  "Atlas Tire",
  "Linglong",
  "Aderenza",
  "Crosswind",
]

export function BrandsSection() {
  return (
    <section id="marcas" className="border-t border-border bg-background py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-widest text-primary">
            Marcas
          </span>
          <h2 className="font-[var(--font-heading)] text-3xl font-bold uppercase tracking-tight text-foreground sm:text-4xl">
            Trabajamos con las mejores
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6">
          {brands.map((brand) => (
            <div
              key={brand}
              className="flex h-20 w-36 items-center justify-center rounded-lg border border-border bg-card px-4 transition-all hover:border-primary/40 hover:shadow-md hover:shadow-primary/5"
            >
              <span className="font-[var(--font-heading)] text-base font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground">
                {brand}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
