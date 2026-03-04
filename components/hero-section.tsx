"use client"

import { useState } from "react"
import { Search } from "lucide-react"
import Image from "next/image"

const WIDTHS = ["155", "165", "175", "185", "195", "205", "215", "225", "235", "245", "255", "265"]
const PROFILES = ["40", "45", "50", "55", "60", "65", "70", "75", "80"]
const RIMS = ["13", "14", "15", "16", "17", "18", "19", "20"]

export function HeroSection() {
  const [width, setWidth] = useState("")
  const [profile, setProfile] = useState("")
  const [rim, setRim] = useState("")

  const handleSearch = () => {
    const section = document.getElementById("productos")
    if (section) section.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-24">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-tire.jpg"
          alt="Neumatico de alta performance"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Lider en neumaticos
            </span>
          </div>

          <h1 className="font-[var(--font-heading)] text-4xl font-bold uppercase leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            <span className="text-balance">
              Encontra el neumatico{" "}
              <span className="text-primary">ideal</span> para tu vehiculo
            </span>
          </h1>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
            Las mejores marcas, los mejores precios. Pirelli, Michelin,
            Bridgestone, Continental y mas. Asesoria personalizada y envios a
            todo el pais.
          </p>

          {/* Filter */}
          <div className="mt-8 rounded-xl border border-border bg-card/80 p-4 backdrop-blur-sm sm:p-6">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Busca por medida
            </h2>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
              {/* Width */}
              <div className="flex-1">
                <label
                  htmlFor="width"
                  className="mb-1.5 block text-xs font-medium text-muted-foreground"
                >
                  Ancho
                </label>
                <select
                  id="width"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                  className="h-11 w-full rounded-lg border border-border bg-input px-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">Seleccionar</option>
                  {WIDTHS.map((w) => (
                    <option key={w} value={w}>
                      {w}
                    </option>
                  ))}
                </select>
              </div>

              {/* Profile */}
              <div className="flex-1">
                <label
                  htmlFor="profile"
                  className="mb-1.5 block text-xs font-medium text-muted-foreground"
                >
                  Perfil
                </label>
                <select
                  id="profile"
                  value={profile}
                  onChange={(e) => setProfile(e.target.value)}
                  className="h-11 w-full rounded-lg border border-border bg-input px-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">Seleccionar</option>
                  {PROFILES.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>

              {/* Rim */}
              <div className="flex-1">
                <label
                  htmlFor="rim"
                  className="mb-1.5 block text-xs font-medium text-muted-foreground"
                >
                  Rodado
                </label>
                <select
                  id="rim"
                  value={rim}
                  onChange={(e) => setRim(e.target.value)}
                  className="h-11 w-full rounded-lg border border-border bg-input px-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  <option value="">Seleccionar</option>
                  {RIMS.map((r) => (
                    <option key={r} value={r}>
                      R{r}
                    </option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleSearch}
                className="flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-[0.98]"
              >
                <Search className="h-4 w-4" />
                <span>Buscar</span>
              </button>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              Envio gratis CABA
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              Garantia oficial
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              +10.000 clientes
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
