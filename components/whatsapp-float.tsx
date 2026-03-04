"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppFloat() {
  const whatsappUrl =
    "https://wa.me/5491112345678?text=Hola!%20Quiero%20consultar%20por%20neumaticos."

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg shadow-[#25D366]/30 transition-all hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 active:scale-95"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-7 w-7 text-white" fill="white" />
      <span className="absolute -left-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
        1
      </span>
    </a>
  )
}
