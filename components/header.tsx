"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [tentangKamiOpen, setTentangKamiOpen] = useState(false)
  const [layananOpen, setLayananOpen] = useState(false)
  const [portfolioOpen, setPortfolioOpen] = useState(false)

  const pathname = usePathname()

  const navigation = [
    { name: "Beranda", href: "/" },
    {
      name: "Tentang Kami",
      href: "/tentang-kami",
      submenu: [
        { name: "Profil Perusahaan", href: "/tentang-kami" },
        { name: "Solusi & Framework", href: "/solusi" },
        { name: "Analisis Bisnis", href: "/analisis" },
      ],
    },
    {
      name: "Layanan",
      href: "/layanan",
      submenu: [
        { name: "Layanan Kami", href: "/layanan" },
        { name: "Platform Bisnisdesa.id", href: "/platform" },
      ],
    },
    {
      name: "Portfolio",
      href: "/portfolio",
      submenu: [
        { name: "Proyek Kami", href: "/portfolio" },
        { name: "Mitra", href: "/mitra" },
      ],
    },
    { name: "Artikel", href: "/artikel" },
    { name: "Kontak", href: "/kontak" },
  ]

  return (
    // FIX: Pakai bg-white solid, tanpa blur, tanpa transparansi sama sekali
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center group">
            <span className="sr-only">Natadesa Nusantara</span>
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Logo Natadesa Nusantara"
                width={120}
                height={32}
                className="h-8 w-auto object-contain"
                priority
              />
              <div className="mx-2 h-4 w-[1px] bg-primary/20 rotate-12" />
            </div>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.submenu && item.submenu.some(sub => pathname === sub.href));

            return item.submenu ? (
              <div key={item.name} className="relative group">
                <button className={`flex items-center gap-1 text-sm font-medium leading-6 transition-colors relative py-1 hover:text-primary ${isActive ? 'text-primary' : 'text-foreground/70'}`}>
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                </button>
                {/* Dropdown: Putih Solid 100% */}
                <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white border border-gray-200 rounded-md shadow-lg overflow-hidden py-1">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.name}
                      href={subitem.href}
                      className={`block px-4 py-3 text-sm transition-colors hover:bg-gray-100 ${pathname === subitem.href ? 'text-primary font-bold' : 'text-foreground'}`}
                    >
                      {subitem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium leading-6 transition-colors relative py-1 group hover:text-primary ${pathname === item.href ? 'text-primary' : 'text-foreground/70'}`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-primary transition-all duration-300 ${pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            );
          })}
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="default" size="sm" className="font-semibold transition-transform active:scale-95" asChild>
            <Link href="/kontak">Konsultasi Gratis</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu: Putih Solid 100% */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="space-y-1 px-4 pb-6 pt-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.submenu && item.submenu.some(sub => pathname === sub.href));
              return item.submenu ? (
                <div key={item.name}>
                  <button
                    className={`flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 ${isActive ? 'text-primary' : 'text-foreground'}`}
                    onClick={() => {
                      if (item.name === "Tentang Kami") setTentangKamiOpen(!tentangKamiOpen)
                      else if (item.name === "Layanan") setLayananOpen(!layananOpen)
                      else if (item.name === "Portfolio") setPortfolioOpen(!portfolioOpen)
                    }}
                  >
                    {item.name}
                    <ChevronDown className={`h-4 w-4 transition-transform ${((item.name === "Tentang Kami" && tentangKamiOpen) || (item.name === "Layanan" && layananOpen) || (item.name === "Portfolio" && portfolioOpen)) ? "rotate-180" : ""}`} />
                  </button>
                  {((item.name === "Tentang Kami" && tentangKamiOpen) || (item.name === "Layanan" && layananOpen) || (item.name === "Portfolio" && portfolioOpen)) && (
                    <div className="ml-4 space-y-1 mt-1 border-l border-gray-200 pl-2">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className={`block rounded-md px-3 py-2 text-sm hover:bg-gray-100 ${pathname === subitem.href ? 'text-primary font-bold' : 'text-foreground/70'}`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-100 ${pathname === item.href ? 'text-primary' : 'text-foreground'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-4 pb-2 px-3">
              <Button size="sm" className="w-full font-bold" asChild>
                <Link href="/kontak">Konsultasi Gratis</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}