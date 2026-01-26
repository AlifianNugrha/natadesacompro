import React from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Globe } from "lucide-react"

export default function ArtikelPage() {
  const articles = [
    {
      category: "Berita & Update",
      title: "Kades Cs Ramai-Ramai Demo di Dekat Monas, Teriak-Teriak Ini",
      excerpt: "Ratusan kepala desa (kades) yang tergabung dalam berbagai asosiasi menggelar aksi unjuk rasa di kawasan Monas, Jakarta Pusat. Mereka menyuarakan aspirasi mendesak terkait revisi kebijakan operasional dan anggaran pembangunan desa untuk tahun anggaran 2026.",
      date: "08 Des 2025",
      readTime: "4 min",
      image: "/artikel1.jpeg",
      url: "https://www.cnbcindonesia.com/news/20251208134245-7-692082/kades-cs-ramai-ramai-demo-di-dekat-monas-teriak-teriak-ini",
      source: "CNBC Indonesia"
    },
    {
      category: "Berita & Update",
      title: "Natadesa Meluncurkan Platform Bisnisdesa.id",
      excerpt: "Guna mempercepat digitalisasi pedesaan, Natadesa resmi merilis Bisnisdesa.id, sebuah platform digital terpadu yang dirancang khusus untuk mengoptimalkan manajemen operasional BUMDes serta efisiensi tata kelola desa wisata secara nasional.",
      date: "15 Jan 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      url: "https://bisnisdesa.id",
      source: "Natadesa News"
    },
    {
      category: "Berita & Update",
      title: "Sukses Tingkatkan Kesejahteraan Warga, Desa Ponggok Jadi Inspirasi",
      excerpt: "Platform digital terpadu untuk mendukung operasional BUMDes dan desa wisata di seluruh Indonesia melalui inspirasi keberhasilan pembangunan kawasan.",
      date: "15 Jan 2026",
      readTime: "5 min",
      image: "/artikel2.jpg",
      url: "https://www.transmigrasi.go.id/sukses-tingkatkan-kesejahteraan-warganya-desa-ponggok-jadi-inspirasi-pembangunan-kawasan-transmigrasi/?utm_source=chatgpt.com",
      source: "Kemenaker"
    },
    {
      category: "Berita & Update",
      title: "Penglipuran Raih Penghargaan Best Tourism Village 2023 dari UNWTO",
      excerpt: "Desa Wisata Penglipuran di Bali berhasil mengharumkan nama Indonesia dengan meraih penghargaan internasional sebagai salah satu desa wisata terbaik dunia versi UNWTO, mengungguli ribuan kandidat global lainnya.",
      date: "19 Okt 2023",
      readTime: "3 min",
      image: "/artikel3.webp",
      url: "https://www.antaranews.com/berita/3785523/penglipuran-raih-penghargaan-best-tourism-village-2023-dari-unwto?utm_source=chatgpt.com",
      source: "Antara News"
    },
    {
      category: "Berita & Update",
      title: "Desa Nglanggeran: Contoh Keberhasilan Pengembangan Desa Wisata",
      excerpt: "Kemenko PMK menyoroti Desa Nglanggeran sebagai model sukses tata kelola desa wisata berbasis komunitas. Keberhasilan ini dibuktikan melalui integrasi kearifan lokal dengan manajemen profesional yang mampu menggerakkan ekonomi warga.",
      date: "12 Nov 2025",
      readTime: "4 min",
      image: "/artikel5.jpg",
      url: "https://www.kemenkopmk.go.id/desa-nglanggeran-contoh-keberhasilan-pengembangan-desa-wisata?utm_source=chatgpt.com",
      source: "Kemenko PMK"
    },
    {
      category: "Berita & Update",
      title: "BNI Perkuat Ekosistem Desa Melalui Digitalisasi BUMDes",
      excerpt: "Melalui sinergi strategis, BNI terus mendorong transformasi digital di pedesaan dengan menyediakan layanan perbankan terintegrasi untuk memperkuat tata kelola keuangan BUMDes secara transparan dan akuntabel.",
      date: "20 Jan 2026",
      readTime: "4 min",
      image: "/artikel6.jpeg",
      url: "https://www.bni.co.id/id-id/beranda/kabar-bni/berita/articleid/25353?utm_source=chatgpt.com",
      source: "Kabar BNI"
    },
    {
      category: "Berita & Update",
      title: "Desa Ponggok: Dari Desa Tertinggal Menjadi Desa Wisata Mandiri",
      excerpt: "Kisah inspiratif transformasi Desa Ponggok yang berhasil mengelola potensi sumber daya air menjadi destinasi wisata unggulan. Keberhasilan ini membawa desa meraih kemandirian ekonomi berkelanjutan melalui pengelolaan BUMDes yang profesional.",
      date: "10 Jan 2026",
      readTime: "6 min",
      image: "/artikel7.jpeg",
      url: "https://www.kompas.tv/advertorial/619056/desa-ponggok-dari-tertinggal-jadi-desa-wisata-mandiri-berkelanjutan",
      source: "Kompas TV"
    },
    {
      category: "Berita & Update",
      title: "Aksi Protes Jalan Rusak: Kades di Sragen Nekat Mandi Lumpur",
      excerpt: "Sebagai bentuk protes karena jalan rusak yang tak kunjung diperbaiki, seorang Kepala Desa di Sragen melakukan aksi nekat mandi lumpur di jalan berlubang. Aksi ini menarik perhatian publik dan menjadi viral di media sosial.",
      date: "14 Jan 2026",
      readTime: "3 min",
      image: "/artikel8.webp",
      url: "https://kumparan.com/kumparannews/tak-kunjung-diperbaiki-kades-di-sragen-nekat-mandi-lumpur-di-jalan-berlubang-26ffp25eqkT",
      source: "Kumparan News"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-emerald-50 via-background to-emerald-50/30 dark:from-emerald-950/20">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-6 text-balance">Artikel & Berita</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insight seputar pemberdayaan desa, transformasi digital, dan pariwisata berkelanjutan.
            </p>
          </div>
        </section>

        {/* Article Grid Section */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {articles.map((article, index) => (
                <Link key={index} href={article.url} target="_blank" rel="noopener noreferrer">
                  <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 h-full border border-border/50 bg-card hover:-translate-y-2 flex flex-col">
                    {/* Image Layer */}
                    <div className="relative h-52 w-full overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                    </div>

                    <CardHeader className="space-y-3">
                      <Badge
                        variant="secondary"
                        className="w-fit bg-emerald-50 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400 border-none px-3 py-1"
                      >
                        {article.category}
                      </Badge>
                      <CardTitle className="text-xl leading-snug line-clamp-2 group-hover:text-emerald-600 transition-colors duration-300">
                        {article.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-col flex-1">
                      <p className="text-muted-foreground mb-6 line-clamp-3 text-sm leading-relaxed">
                        {article.excerpt}
                      </p>

                      {/* Source & Metadata Footer */}
                      <div className="mt-auto pt-4 border-t border-border/50 flex flex-wrap items-center gap-y-2 gap-x-4 text-[11px] font-medium text-muted-foreground uppercase tracking-wider">
                        <div className="flex items-center gap-1.5">
                          <Calendar className="h-3.5 w-3.5 text-emerald-600" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3.5 w-3.5 text-emerald-600" />
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Globe className="h-3.5 w-3.5 text-emerald-600" />
                          <span className="text-emerald-700 dark:text-emerald-400 font-bold tracking-widest">{article.source || "News"}</span>
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
    </div>
  )
}