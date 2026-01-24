"use client"

import { MessageCircle, FileDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp */}
      <Button
        size="icon"
        className="h-12 w-12 rounded-full shadow-lg bg-[#25D366] hover:bg-[#20BA5A] text-white"
        onClick={() => window.open("https://wa.me/6288200637845", "_blank")}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="sr-only">WhatsApp Chat</span>
      </Button>

      {/* Konsultasi Gratis */}
      <Button
        size="icon"
        className="h-12 w-12 rounded-full shadow-lg"
        onClick={() => (window.location.href = "/kontak")}
      >
        <Phone className="h-5 w-5" />
        <span className="sr-only">Konsultasi Gratis</span>
      </Button>

      {/* Download Company Profile */}
      <Button
        size="icon"
        variant="secondary"
        className="h-12 w-12 rounded-full shadow-lg"
        onClick={() => alert("Download Company Profile PDF akan segera tersedia")}
      >
        <FileDown className="h-5 w-5" />
        <span className="sr-only">Download Company Profile</span>
      </Button>
    </div>
  )
}
