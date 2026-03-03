"use client"

import React, { useState, useCallback } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Globe, ChevronLeft, ChevronRight } from "lucide-react"

const ARTICLES_PER_PAGE = 6;

const articles = [
  {
    category: "Berita & Update",
    title: "Kades Cs Ramai-Ramai Demo di Dekat Monas, Teriak-Teriak Ini",
    excerpt: "Ratusan kepala desa (kades) yang tergabung dalam berbagai asosiasi menggelar aksi unjuk rasa di kawasan Monas, Jakarta Pusat. Mereka menyuarakan aspirasi mendesak terkait revisi kebijakan operasional dan anggaran pembangunan desa untuk tahun anggaran 2026.",
    date: "08 Des 2025",
    readTime: "4 min",
    image: "/artikel/artikel1.jpeg",
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
    image: "/artikel/artikel2.jpg",
    url: "https://www.transmigrasi.go.id/sukses-tingkatkan-kesejahteraan-warganya-desa-ponggok-jadi-inspirasi-pembangunan-kawasan-transmigrasi/?utm_source=chatgpt.com",
    source: "Kemenaker"
  },
  {
    category: "Berita & Update",
    title: "Penglipuran Raih Penghargaan Best Tourism Village 2023 dari UNWTO",
    excerpt: "Desa Wisata Penglipuran di Bali berhasil mengharumkan nama Indonesia dengan meraih penghargaan internasional sebagai salah satu desa wisata terbaik dunia versi UNWTO, mengungguli ribuan kandidat global lainnya.",
    date: "19 Okt 2023",
    readTime: "3 min",
    image: "/artikel/artikel3.webp",
    url: "https://www.antaranews.com/berita/3785523/penglipuran-raih-penghargaan-best-tourism-village-2023-dari-unwto?utm_source=chatgpt.com",
    source: "Antara News"
  },
  {
    category: "Berita & Update",
    title: "Desa Nglanggeran: Contoh Keberhasilan Pengembangan Desa Wisata",
    excerpt: "Kemenko PMK menyoroti Desa Nglanggeran sebagai model sukses tata kelola desa wisata berbasis komunitas. Keberhasilan ini dibuktikan melalui integrasi kearifan lokal dengan manajemen profesional yang mampu menggerakkan ekonomi warga.",
    date: "12 Nov 2025",
    readTime: "4 min",
    image: "/artikel/artikel5.jpg",
    url: "https://www.kemenkopmk.go.id/desa-nglanggeran-contoh-keberhasilan-pengembangan-desa-wisata?utm_source=chatgpt.com",
    source: "Kemenko PMK"
  },
  {
    category: "Berita & Update",
    title: "BNI Perkuat Ekosistem Desa Melalui Digitalisasi BUMDes",
    excerpt: "Melalui sinergi strategis, BNI terus mendorong transformasi digital di pedesaan dengan menyediakan layanan perbankan terintegrasi untuk memperkuat tata kelola keuangan BUMDes secara transparan dan akuntabel.",
    date: "20 Jan 2026",
    readTime: "4 min",
    image: "/artikel/artikel6.jpeg",
    url: "https://www.bni.co.id/id-id/beranda/kabar-bni/berita/articleid/25353?utm_source=chatgpt.com",
    source: "Kabar BNI"
  },
  {
    category: "Berita & Update",
    title: "Desa Ponggok: Dari Desa Tertinggal Menjadi Desa Wisata Mandiri",
    excerpt: "Kisah inspiratif transformasi Desa Ponggok yang berhasil mengelola potensi sumber daya air menjadi destinasi wisata unggulan. Keberhasilan ini membawa desa meraih kemandirian ekonomi berkelanjutan melalui pengelolaan BUMDes yang profesional.",
    date: "10 Jan 2026",
    readTime: "6 min",
    image: "/artikel/artikel7.jpeg",
    url: "https://www.kompas.tv/advertorial/619056/desa-ponggok-dari-tertinggal-jadi-desa-wisata-mandiri-berkelanjutan",
    source: "Kompas TV"
  },
  {
    category: "Berita & Update",
    title: "Aksi Protes Jalan Rusak: Kades di Sragen Nekat Mandi Lumpur",
    excerpt: "Sebagai bentuk protes karena jalan rusak yang tak kunjung diperbaiki, seorang Kepala Desa di Sragen melakukan aksi nekat mandi lumpur di jalan berlubang. Aksi ini menarik perhatian publik dan menjadi viral di media sosial.",
    date: "14 Jan 2026",
    readTime: "3 min",
    image: "/artikel/artikel8.webp",
    url: "https://kumparan.com/kumparannews/tak-kunjung-diperbaiki-kades-di-sragen-nekat-mandi-lumpur-di-jalan-berlubang-26ffp25eqkT",
    source: "Kumparan News"
  },
  {
    category: "Berita & Update",
    title: "Terang di Titik Rawan: Aksi Nyata KKN 26 Desa Kalijurang Melalui Pemasangan Lampu Reflektor",
    excerpt: "Keselamatan pengguna jalan merupakan salah satu aspek yang sangat penting dalam kehidupan masyarakat, khususnya di wilayah pedesaan yang masih memiliki keterbatasan penerangan jalan. Kondisi jalan yang gelap dan minim penanda sering kali menjadi faktor risiko terjadinya kecelakaan, terutama pada malam hari. Melihat kondisi tersebut, Mahasiswa KKN Kelompok 26 dari Universitas Peradaban melaksanakan program kerja berupa pemasangan lampu reflektor sebagai bentuk pengabdian kepada masyarakat di Desa Kalijurang",
    date: "14 Jan 2026",
    readTime: "3 min",
    image: "/artikel/artikel9.jpg",
    url: "https://www.kompasiana.com/linaaahaerunnisa5337/699bac9bc925c44661345112/terang-di-titik-rawan-aksi-nyata-kkn-26-desa-kalijurang-melalui-pemasangan-lampu-reflektor",
    source: "Kompasiana"
  },
  {
    category: "Berita & Update",
    title: "Galeri UMKM Desa Lakardowo Langkah nyata pengabdian UMKM menggerakan Ekonomi Warga",
    excerpt: "Program Galeri UMKM Desa Lakardowo yang dijalankan oleh tim Pengabdian Masyarakat Universitas Muhammadiyah Gresik (UMG) menjadi langkah konkret dalam mendorong transformasi ekonomi desa. Di bawah pendampingan Dosen Pembimbing Lapangan (DPL) Ibu Ratih Surkawi, S.H., M.H., mahasiswa tidak hanya melakukan pendataan dan kurasi produk, tetapi juga mengarahkan UMKM agar mampu bersaing di era digital.",
    date: "14 Jan 2026",
    readTime: "3 min",
    image: "/artikel/artikel10.png",
    url: "https://www.kompasiana.com/sabialusama5548/69a11660c925c406ab60d242/galeri-umkm-desa-lakardowo-langkah-nyata-pengabdian-umg-menggerakkan-ekonomi-warga",
    source: "Kompasiana"
  },
  {
    category: "Berita & Update",
    title: "Sentuhan Kreatif yang Mengubah Jajanan Pasar Jadi Produk Bernilai Tinggi di Desa Tanjung Raya",
    excerpt: "Di tengah hamparan perkebunan karet dan kelapa sawit yang menjadi denyut ekonomi masyarakat, Desa Tanjung Raya menyimpan potensi lain yang selama ini belum tergarap secara maksimal. Bukan tambang, bukan pula industri besar, melainkan dapur-dapur sederhana milik para ibu rumah tangga yang setiap hari memproduksi jajanan tradisional dengan cita rasa khas.",
    date: "14 Jan 2026",
    readTime: "3 min",
    image: "/artikel/artikel11.png",
    url: "https://www.kompasiana.com/tesa3175/69a5608bed64153e3c40f192/sentuhan-kreatif-yang-mengubah-jajanan-pasar-jadi-produk-bernilai-tinggi-di-desa-tanjung-raya",
    source: "Kompasiana"
  },
  {
    category: "Berita & Update",
    title: "Di Balik Polemik Netizen atas Pernyataan Menteri Desa: Uang Desa Mengalir ke Mana?",
    excerpt: "Polemik netizen terhadap pernyataan Menteri Desa dan Pembangunan Daerah Tertinggal, Yandri Susanto, tentang keberadaan ritel modern segera membelah ruang digital. Riuh itu bergerak cepat, sering kali lebih cepat daripada upaya memahami konteks yang melatarbelakanginya, sementara diskusi substantif kerap berhenti di permukaan",
    date: "14 Jan 2026",
    readTime: "3 min",
    image: "/artikel/artikel12.png",
    url: "https://www.kompasiana.com/imtihanberin3971/69a46650ed641506713ba8d2/uang-desa-mengalir-ke-mana",
    source: "Kompasiana"
  },
  {
    category: "Berita & Update",
    title: "Perempuan Desa Air Keruh Melek Digital: Langkah Nyata Meningkatkan Ekonomi Keluarga Lewat Digital Marketing",
    excerpt: "Di era digital saat ini, teknologi bukan lagi sekadar alat komunikasi, melainkan juga jembatan menuju peluang ekonomi yang lebih luas. Hal inilah yang menjadi semangat pelaksanaan program Kuliah Kerja Nyata (KKN) di Desa Air Keruh, yang berfokus pada pemberdayaan kaum perempuan melalui literasi digital marketing.",
    date: "14 Jan 2026",
    readTime: "3 min",
    image: "/artikel/artikel13.png",
    url: "https://www.kompasiana.com/imtihanberin3971/69a46650ed641506713ba8d2/uang-desa-mengalir-ke-mana",
    source: "Kompasiana"
  },
  {
    category: "Berita & Update",
    title: "Saatnya Desa Berbenah, Menuju Pelayanan Publik Yang Lebih Baik",
    excerpt: "Pelayanan publik merupakan wajah utama pemerintahan desa. Dari pelayanan administrasi kependudukan, surat menyurat, bantuan sosial, hingga pelayanan kemasyarakatan, semuanya menjadi tolok ukur kepuasan dan kepercayaan masyarakat terhadap pemerintah desa. Oleh karena itu, sudah saatnya desa berbenah demi mewujudkan pelayanan publik yang lebih baik, cepat, transparan, dan profesional.",
    date: "14 Jan 2026",
    readTime: "3 min",
    image: "/artikel/artikel14.png",
    url: "https://www.kompasiana.com/rahmatapendi0404/69a0f1dfed64155e8d7ac6c2/saatnya-desa-berbenah-menuju-pelayanan-publik-yang-lebih-baik",
    source: "Kompasiana"
  },
  {
    category: "Berita & Update",
    title: "Sosialisasi Keamanan Data Digital Bagi Perangkat Desa sebagai Upaya Peningkatan Literasi Digital dan Perlindungan Informasi Warga Desa Suka Cinta",
    excerpt: "Pada hari Senin tanggal 19 Januari 2026, bertempat di Kantor Desa Suka Cinta, Kecamatan Sungai Rotan, Kabupaten Muara Enim telah dilaksanakan kegiatan  yang diselenggarakan oleh mahasiswa Kuliah Kerja Nyata (KKN) UIN Raden Fatah Palembang.",
    date: "14 Jan 2026",
    readTime: "3 min",
    image: "/artikel/artikel15.png",
    url: "https://www.kompasiana.com/dliigfrii13/699f0b6dc925c446d61cab82/sosialisasi-keamanan-data-digital-bagi-perangkat-desa-sebagai-upaya-peningkatan-literasi-digital-dan-perlindungan-informasi-warga-desa-suka-cinta",
    source: "Kompasiana"
  },
];

export default function ArtikelPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const endIndex = startIndex + ARTICLES_PER_PAGE;
  const currentArticles = articles.slice(startIndex, endIndex);

  const goToPage = useCallback((page: number) => {
    setCurrentPage(page);
    // Scroll ke atas section artikel
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const goToPrev = useCallback(() => {
    if (currentPage > 1) goToPage(currentPage - 1);
  }, [currentPage, goToPage]);

  const goToNext = useCallback(() => {
    if (currentPage < totalPages) goToPage(currentPage + 1);
  }, [currentPage, totalPages, goToPage]);

  // Generate array of page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) pages.push("...");

      // Pages around current
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);

      if (currentPage < totalPages - 2) pages.push("...");

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  };

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
            {/* Info jumlah artikel */}
            <div className="mb-8 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                Menampilkan <span className="font-semibold text-foreground">{startIndex + 1}–{Math.min(endIndex, articles.length)}</span> dari <span className="font-semibold text-foreground">{articles.length}</span> artikel
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {currentArticles.map((article, index) => (
                <Link key={startIndex + index} href={article.url} target="_blank" rel="noopener noreferrer">
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

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-16 flex justify-center">
                <nav className="inline-flex items-center gap-2" aria-label="Pagination">
                  {/* Previous Button */}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={goToPrev}
                    disabled={currentPage === 1}
                    aria-label="Halaman sebelumnya"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  {/* Page Numbers */}
                  {getPageNumbers().map((page, idx) =>
                    page === "..." ? (
                      <span
                        key={`dots-${idx}`}
                        className="inline-flex items-center justify-center w-9 h-9 text-sm text-muted-foreground select-none"
                      >
                        ···
                      </span>
                    ) : (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "ghost"}
                        size="icon"
                        onClick={() => goToPage(page as number)}
                        aria-label={`Halaman ${page}`}
                        aria-current={currentPage === page ? "page" : undefined}
                      >
                        {page}
                      </Button>
                    )
                  )}

                  {/* Next Button */}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={goToNext}
                    disabled={currentPage === totalPages}
                    aria-label="Halaman berikutnya"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </nav>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </div>
  )
}