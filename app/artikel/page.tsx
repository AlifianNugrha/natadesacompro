import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Calendar } from "lucide-react"

export default function ArtikelPage() {
  const articles = [
    {
      category: "Berita & Update",
      title: "Natadesa Meluncurkan Platform Bisnisdesa.id",
      excerpt: "Platform digital terpadu untuk mendukung operasional BUMDes dan desa wisata di seluruh Indonesia.",
      date: "15 Jan 2026",
      readTime: "5 min",
    },
    {
      category: "Studi Kasus",
      title: "Transformasi Desa Ponggok: Dari Desa Biasa Menjadi Destinasi Wisata",
      excerpt:
        "Kisah sukses bagaimana Desa Ponggok berkembang menjadi salah satu destinasi wisata terpopuler di Jawa Tengah.",
      date: "10 Jan 2026",
      readTime: "8 min",
    },
    {
      category: "Tips & Best Practice",
      title: "5 Strategi Pemasaran Digital untuk Desa Wisata",
      excerpt:
        "Panduan praktis menggunakan media sosial dan platform digital untuk meningkatkan visibilitas desa wisata.",
      date: "5 Jan 2026",
      readTime: "6 min",
    },
    {
      category: "Insight Industri",
      title: "Tren Pariwisata Berkelanjutan di Indonesia 2026",
      excerpt: "Analisis mendalam tentang perkembangan pariwisata berkelanjutan dan peluang bagi desa wisata.",
      date: "1 Jan 2026",
      readTime: "7 min",
    },
    {
      category: "Studi Kasus",
      title: "Implementasi RFID di Umbul Ponggok: Efisiensi Operasional",
      excerpt: "Bagaimana teknologi RFID meningkatkan efisiensi pengelolaan pengunjung dan transparansi operasional.",
      date: "28 Des 2025",
      readTime: "5 min",
    },
    {
      category: "Tips & Best Practice",
      title: "Membangun BUMDes yang Berkelanjutan: Panduan Lengkap",
      excerpt: "Langkah-langkah praktis untuk membangun dan mengelola BUMDes yang profitable dan berkelanjutan.",
      date: "20 Des 2025",
      readTime: "10 min",
    },
  ]

  const categories = ["Semua", "Berita & Update", "Studi Kasus", "Tips & Best Practice", "Insight Industri"]

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-balance">Artikel & Berita</h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Insight, studi kasus, dan tips terbaru seputar pemberdayaan desa dan pariwisata berkelanjutan
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant="outline"
                  className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground"
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">
                      {article.category}
                    </Badge>
                    <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
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
