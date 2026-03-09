"use client"

import { useState } from "react"
import { Menu, X, Phone, MapPin, ChevronDown } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-full items-center justify-between px-8 py-1.5 text-[10px] md:text-xs font-medium">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><Phone className="h-3 w-3" /> (2262) 225731</span>
            <span className="hidden sm:flex items-center gap-1.5"><MapPin className="h-3 w-3" /> Necochea provincia Buenos Aires, Argentina.</span>
          </div>
          <span className="uppercase tracking-widest text-[10px]">Envios a todo el pais</span>
        </div>
      </div>

      <nav className="mx-auto flex max-w-full items-center justify-between px-10 h-20 md:h-24 relative"> 
        
        {/* LOGO */}
        <a href="/" className="flex-shrink-0 group relative z-50"> 
          <div className="relative h-20 w-52 md:h-40 md:w-80 -mt-2 md:-mt-4"> 
            <Image 
              src="/images/logo.png" 
              alt="APR Neumaticos" 
              fill 
              className="object-contain object-left drop-shadow-xl transition-transform duration-300 group-hover:scale-105" 
              priority 
            />
          </div>
        </a>

        {/* MENÚ DERECHA */}
        <div className="hidden xl:flex items-center gap-x-6 lg:gap-x-9">
          
          {/* Neumáticos: Link principal restaurado a #ofertas */}
          <div className="relative group py-8">
            <a 
              href="/#ofertas" 
              className="flex items-center gap-1 text-[13px] font-bold uppercase hover:text-primary transition-colors cursor-pointer"
            >
              Neumáticos <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </a>
            
            <div className="absolute top-[80%] left-0 w-48 bg-background border border-border shadow-2xl rounded-sm py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <a href="/?cat=autos#ofertas" className="block px-5 py-2 text-[12px] font-bold hover:bg-muted hover:text-primary uppercase">Autos</a>
              <a href="/?cat=camionetas#ofertas" className="block px-5 py-2 text-[12px] font-bold hover:bg-muted hover:text-primary uppercase">Camionetas</a>
              <a href="/?cat=camiones#ofertas" className="block px-5 py-2 text-[12px] font-bold hover:bg-muted hover:text-primary uppercase">Camiones</a>
              <a href="/?cat=agricolas#ofertas" className="block px-5 py-2 text-[12px] font-bold hover:bg-muted hover:text-primary uppercase">Agrícolas</a>
              <a href="/?cat=industriales#ofertas" className="block px-5 py-2 text-[12px] font-bold hover:bg-muted hover:text-primary uppercase">Industriales</a>
            </div>
          </div>

          <a href="#marcas" className="text-[13px] font-bold uppercase hover:text-primary transition-colors">Marcas</a>
          <a href="#herramientas" className="text-[13px] font-bold uppercase hover:text-primary transition-colors">Herramientas</a>
          
          {/* Dropdown Accesorios */}
          <div className="relative group py-8">
            <button className="flex items-center gap-1 text-[13px] font-bold uppercase hover:text-primary transition-colors">
              Accesorios <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
            </button>
            <div className="absolute top-[80%] left-0 w-56 bg-background border border-border shadow-2xl rounded-sm py-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <a href="#herramientas" className="block px-5 py-2 text-[12px] font-bold hover:bg-muted hover:text-primary uppercase">Lonas Marítimas</a>
              <a href="#herramientas" className="block px-5 py-2 text-[12px] font-bold hover:bg-muted hover:text-primary uppercase">Barra Anti vuelco</a>
              <a href="#herramientas" className="block px-5 py-2 text-[12px] font-bold hover:bg-muted hover:text-primary uppercase">Variado</a>
            </div>
          </div>
          
          <a href="#contacto" className="ml-4 bg-primary text-white px-8 py-3.5 rounded-full text-[12px] font-bold hover:bg-red-700 transition-all uppercase tracking-widest shadow-lg">
            Contacto
          </a>
        </div>

        <button className="xl:hidden p-2 text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
        </button>
      </nav>

      {/* Menú Móvil */}
      {mobileOpen && (
        <div className="xl:hidden bg-background border-t p-6 flex flex-col gap-1 shadow-2xl max-h-[85vh] overflow-y-auto">
          <p className="text-[10px] font-black text-muted-foreground uppercase border-b pb-1">Neumáticos</p>
          <a href="/#ofertas" className="font-bold uppercase py-2 text-sm text-primary" onClick={() => setMobileOpen(false)}>Ver Todas las Ofertas</a>
          <a href="/?cat=autos#ofertas" className="font-bold uppercase py-2 text-sm pl-2" onClick={() => setMobileOpen(false)}>Autos</a>
          <a href="/?cat=camionetas#ofertas" className="font-bold uppercase py-2 text-sm pl-2" onClick={() => setMobileOpen(false)}>Camionetas</a>
          <a href="/?cat=camiones#ofertas" className="font-bold uppercase py-2 text-sm pl-2" onClick={() => setMobileOpen(false)}>Camiones</a>
          
          <p className="text-[10px] font-black text-muted-foreground uppercase border-b pb-1 mt-4">Sitio</p>
          <a href="#marcas" className="font-bold uppercase py-2 text-sm" onClick={() => setMobileOpen(false)}>Marcas</a>
          <a href="#herramientas" className="font-bold uppercase py-2 text-sm" onClick={() => setMobileOpen(false)}>Herramientas</a>
          <a href="#contacto" className="uppercase font-bold text-center bg-primary text-white py-4 mt-3 rounded-sm" onClick={() => setMobileOpen(false)}>Contacto</a>
        </div>
      )}
    </header>
  )
}