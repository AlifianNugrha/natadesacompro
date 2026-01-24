import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import Link from "next/link"

export default function SitemapPage() {
  const sections = [
    {
      title: "Halaman Utama",
      links: [
        { title: "Beranda", href: "/" },
        { title: "Tentang Kami", href: "/tentang-kami" },
        { title: "Layanan", href: "/layanan" },
        { title: "Solusi", href: "/solusi" },
        { title: "Portfolio", href: "/portfolio" },
        { title: "Platform Bisnisdesa.id", href: "/platform" },
        { title: "Analisis & Insight", href: "/analisis" },
        { title: "Mitra & Rekanan", href: "/mitra" },
        { title: "Artikel & Berita", href: "/artikel" },
        { title: "Kontak", href: "/kontak" },
      ],
    },
    {
      title: "Portfolio",
      links: [
        { title: "Portfolio Utama", href: "/portfolio" },
        { title: "Showcase Projects", href: "/portfolio/showcase" },
      ],
    },
    {
      title: "Informasi Lainnya",
      links: [
        { title: "Karir", href: "/karir" },
        { title: "FAQ", href: "/faq" },
        { title: "Privacy Policy", href: "/privacy-policy" },
        { title: "Terms of Service", href: "/terms-of-service" },
        { title: "Sitemap", href: "/sitemap" },
      ],
    },
  ]

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-6 text-center">Sitemap</h1>
            <p className="text-lg text-muted-foreground text-center mb-8">
              Daftar lengkap halaman di website Natadesa Nusantara
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8 max-w-5xl">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {sections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h2 className="text-xl font-bold">{section.title}</h2>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block p-3 border rounded-lg hover:bg-muted transition-colors text-sm"
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
