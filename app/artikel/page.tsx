import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar } from "lucide-react"
import Link from "next/link"
import Image from "next/image" // Import komponen Image untuk performa lebih baik

export default function ArtikelPage() {
  const articles = [
    {
      category: "Berita & Update",
      title: "Kades Cs Ramai-Ramai Demo di Dekat Monas, Teriak-Teriak Ini",
      excerpt: "Ratusan kepala desa berkumpul di Jakarta untuk menyuarakan aspirasi terkait kebijakan pembangunan desa tahun 2026.",
      date: "08 Des 2025",
      readTime: "4 min",
      image: "/sawah.jpg", // Sumber gambar demo kades
      url: "https://www.cnbcindonesia.com/news/20251208134245-7-692082/kades-cs-ramai-ramai-demo-di-dekat-monas-teriak-teriak-ini",
    },
    {
      category: "Berita & Update",
      title: "Natadesa Meluncurkan Platform Bisnisdesa.id",
      excerpt: "Platform digital terpadu untuk mendukung operasional BUMDes dan desa wisata di seluruh Indonesia.",
      date: "15 Jan 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      url: "https://bisnisdesa.id",
    },
    // Tambahkan artikel lainnya di sini dengan properti image dan url
  ]

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-6 text-balance">Artikel & Berita</h1>
            <p className="text-lg text-muted-foreground">Insight seputar pemberdayaan desa dan pariwisata berkelanjutan</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, index) => (
                <Link key={index} href={article.url} target="_blank" rel="noopener noreferrer">
                  <Card className="overflow-hidden hover:shadow-xl transition-all h-full border-none bg-card hover:-translate-y-2">
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <Badge variant="secondary" className="w-fit mb-2 bg-[#E67E22]/10 text-[#E67E22] hover:bg-[#E67E22] hover:text-white border-none">
                        {article.category}
                      </Badge>
                      <CardTitle className="text-xl leading-tight line-clamp-2 hover:text-[#E67E22] transition-colors">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
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