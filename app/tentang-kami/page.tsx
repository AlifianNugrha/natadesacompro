"use client";

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import React, { useRef, useEffect } from "react"; // Tambahkan useEffect di sini
import { motion, useScroll, useSpring, useTransform, useMotionValue, animate, useInView } from "framer-motion" // Tambahkan useMotionValue, animate, useInView
import Typewriter from 'typewriter-effect';


import {
  Target,
  Users,
  TrendingUp,
  Leaf,
  Heart,
  Handshake,
  CheckCircle,
  Briefcase,
  Building,
  Code,
  ShoppingCart,
  Camera,
  PenTool,
  FileCheck,
  Award,
  Globe,
  Lightbulb,
  Sprout,
  Palette,
  Rocket,
  ArrowRight,
  Download,
  Phone,
} from "lucide-react"
import Link from "next/link"

function CounterWrapper({ value, delay }: { value: number; delay: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString("id-ID")
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        delay: delay,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, value, delay]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}


export default function TentangKamiPage() {
  const missions = [
    {
      icon: Lightbulb,
      title: "Mengembangkan Potensi Ekonomi",
      description: "Inovasi produk berbasis sumber daya lokal",
      detail: "Diversifikasi ekonomi desa",
    },
    {
      icon: Users,
      title: "Meningkatkan Keterampilan Masyarakat",
      description: "Pelatihan berkelanjutan",
      detail: "Pemberdayaan SDM lokal",
    },
    {
      icon: Code,
      title: "Mendorong Digitalisasi",
      description: "Transformasi digital desa",
      detail: "Meningkatkan efisiensi & daya saing",
    },
    {
      icon: Sprout,
      title: "Melestarikan Lingkungan",
      description: "Mengadopsi praktik berkelanjutan",
      detail: "Green economy",
    },
    {
      icon: Palette,
      title: "Mempromosikan Kearifan Lokal",
      description: "Mempertahankan identitas budaya unik",
      detail: "Cultural preservation",
    },
    {
      icon: Handshake,
      title: "Membangun Kemitraan Strategis",
      description: "Ekonomi yang adil dan tangguh",
      detail: "Kolaborasi multi-stakeholder",
    },
  ]

  const mainMissions = [
    {
      icon: TrendingUp,
      title: "Meningkatkan Kesejahteraan Masyarakat",
      points: ["Pemberdayaan ekonomi lokal", "Peningkatan pendapatan desa"],
    },
    {
      icon: Briefcase,
      title: "Mengurangi Pengangguran",
      points: ["Menciptakan lapangan kerja", "Mengembangkan UMKM lokal"],
    },
    {
      icon: Leaf,
      title: "Melestarikan Alam",
      points: ["Praktik berkelanjutan", "Konservasi lingkungan"],
    },
    {
      icon: Building,
      title: "Memperkuat Identitas Lokal",
      points: ["Pelestarian budaya", "Kearifan lokal"],
    },
  ]

  const timeline = [
    {
      year: "Akhir 2021",
      title: "Program Awal",
      description: "Dimulainya program bantuan desa pasca-COVID",
      detail: "Fase awal pendampingan masyarakat desa",
    },
    {
      year: "2021-2023",
      title: "Ekspansi Regional",
      description: "Ekspansi ke berbagai daerah (NTT, Kepulauan Riau, Jawa Tengah)",
      detail: "20+ proyek rencana induk desa",
    },
    {
      year: "2024",
      title: "Pendirian Resmi",
      description: "Pendirian resmi PT Natadesa Bangun Negeri",
      detail: "Peluncuran platform bisnisdesa.id dan implementasi teknologi digital (RFID, ERP)",
    },
    {
      year: "2025",
      title: "Ekspansi Berkelanjutan",
      description: "Ekspansi ke Kalimantan Timur & Jawa Barat",
      detail: "Pelatihan KDMP skala kabupaten",
    },
  ]

  const teamLeaders = [
    {
      name: "Harri Yudho P .SE",
      position: "Ketua",
      image: "/HARRI.png" // Path relatif ke folder public
    },
    {
      name: "Irfan Saputra S. Ars",
      position: "COO",
      image: "/IRFAN.png" // Path relatif ke folder public
    },
    {
      name: "Alifta Asyari R, A.MD",
      position: "Business Development",
      image: "/TATA.png" // Path relatif ke folder public
    },
  ]

  const teamSupport = [
    {
      department: "IT Support",
      icon: Code,
      members: ["P Alifian Nugroho ( Software Engineer)", "Arnold Tumewu", "Kholilurrohman"],
    },
    {
      department: "Media & Content",
      icon: Camera,
      members: [
        "M. Rafly Nur Iswandi (Videografer)",
        "Nizam Rifyal Aufa (Media Sosial Spesialis)",
        "Farih Zuhair Al Haidar (Fotografer)",
      ],
    },
    {
      department: "Perencanaan & Desain",
      icon: PenTool,
      members: [
        "Fatimah Azahro (Plano)",
        "Nafila Nur Izza (Perancangan Kawasan)",
        "Thifaltsabita Zharifah Hanin (Perancangan Kawasan)",
        "Auuwalatussa'iyah Nurrohmah (Arsitektur)",
        "Muhammad Fathir Al Kahfi (Arsitektur)",
        "Muhammad Galvani Nauval Zahid (Teknik Sipil)",
      ],
    },
    {
      department: "E-Commerce",
      icon: ShoppingCart,
      members: ["Fatichah Eri (E-commerce Team)"],
    },
  ]

  const values = [
    { icon: Target, title: "Transparansi", description: "Operasional yang akuntabel" },
    { icon: Globe, title: "Keberlanjutan", description: "Praktik ramah lingkungan" },
    { icon: Handshake, title: "Kolaborasi", description: "Kemitraan yang kuat" },
    { icon: Lightbulb, title: "Inovasi", description: "Solusi kreatif untuk desa" },
    { icon: Heart, title: "Pemberdayaan", description: "Fokus pada masyarakat" },
  ]

  const impactMetrics = [
    { number: 83971, label: "Total desa di Indonesia (TAM)", suffix: "" },
    { number: 6042, label: "Desa wisata aktif (SAM)", suffix: "" },
    { number: 1921, label: "Target desa di Jawa & Bali (SOM)", suffix: "" },
    { number: 20, label: "Proyek selesai", suffix: "+" },
    { number: 5, label: "Provinsi jangkauan", suffix: "" },
  ];



  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]

  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative py-24 bg-gradient-to-br from-green-50 via-background to-emerald-50/20 overflow-hidden">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            {/* Wrapper Animasi Fade Up */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl mx-auto text-center"
            >
              {/* Judul dengan warna hijau bold */}
              <h1 className="text-5xl font-bold mb-6 text-balance text-[#172317]">
                Tentang Kami
              </h1>

              {/* Deskripsi dengan warna hijau lembut */}
              <p className="text-xl text-[#172317]/80 text-pretty leading-relaxed">
                Mitra Terpercaya dalam Pemberdayaan Desa Berkelanjutan
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-[#172317] text-white overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container max-w-7xl mx-auto px-6 lg:px-8"
          >
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div>
                  {/* Ukuran judul dikurangi agar tidak terlalu raksasa */}
                  <h2 className="text-2xl font-bold mb-6 text-white">Profil Perusahaan</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-xs text-white-200 uppercase tracking-wider mb-1">Nama Resmi</p>
                      <p className="text-base text-white">PT Natadesa Bangun Negeri</p>
                    </div>
                    <div>
                      <p className="font-medium text-xs text-white-200 uppercase tracking-wider mb-1">Merek Dagang</p>
                      <p className="text-base text-white">Natadesa Nusantara</p>
                    </div>
                    <div>
                      <p className="font-medium text-xs text-white-200 uppercase tracking-wider mb-1">Website</p>
                      <div className="flex flex-wrap gap-2 text-base">
                        <Link href="https://bisnisdesa.id" className="text-yellow-400 hover:text-yellow-300 transition-colors underline-offset-4 hover:underline">
                          bisnisdesa.id
                        </Link>
                        <span className="text-green-400">•</span>
                        <Link href="https://natadesanusantara.com" className="text-yellow-400 hover:text-yellow-300 transition-colors underline-offset-4 hover:underline">
                          natadesanusantara.com
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-md text-white">
                  <CardContent className="pt-6 space-y-5">
                    {/* Komponen Card dan isinya tetap utuh 100% */}
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm mb-1 text-white">Deskripsi Perusahaan</p>
                        <p className="text-sm text-green-50/90 leading-relaxed">
                          Perusahaan sosial berfokus pada pengembangan desa wisata dan berkelanjutan.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm mb-1 text-white">Pendekatan</p>
                        <p className="text-sm text-green-50/90 leading-relaxed">
                          Kolaborasi antara komunitas, pemerintah, dan mitra swasta.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm mb-1 text-white">Hasil yang Dicapai</p>
                        <p className="text-sm text-green-50/90 leading-relaxed">
                          Mengubah desa-desa menjadi destinasi unggulan—secara ekonomi, budaya, dan lingkungan.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <section className="py-12 md:py-20 bg-muted/30 overflow-hidden">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#172317]">Riwayat & Perjalanan</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
                Jejak perjalanan kami dalam pemberdayaan desa berkelanjutan
              </p>
            </div>

            <div ref={containerRef} className="relative max-w-4xl mx-auto">
              {/* Garis Dasar (Track) - Posisi disesuaikan untuk mobile */}
              <div className="absolute left-[20px] md:left-[23px] top-2 bottom-2 w-[2px] bg-green-100" />

              {/* Progress Bar Aktif */}
              <motion.div
                className="absolute left-[20px] md:left-[23px] top-2 bottom-2 w-[2px] bg-green-600 origin-top z-0"
                style={{ scaleY }}
              />

              <div className="space-y-6 md:space-y-10">
                {timeline && timeline.map((item, index) => (
                  <div key={index} className="flex gap-4 md:gap-8 relative group">
                    {/* Penomoran Bulat - Lebih kecil di mobile */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-green-600 text-green-600 group-hover:bg-green-600 group-hover:text-white flex items-center justify-center font-bold text-xs md:text-sm z-10 shadow-sm transition-all duration-300">
                        {index + 1}
                      </div>
                    </div>

                    {/* Card Konten */}
                    <motion.div
                      className="flex-1 min-w-0" // min-w-0 mencegah flex item meluap
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="relative overflow-hidden border-none shadow-sm ring-1 ring-black/5 transition-all duration-500 hover:shadow-lg hover:ring-green-600/30">

                        {/* Top Beam Effect */}
                        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-green-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <CardContent className="relative p-5 md:p-6">
                          <div className="flex items-center mb-3">
                            <span className="text-[10px] md:text-xs font-bold tracking-wider text-green-700 uppercase bg-green-50 px-2 md:px-3 py-1 rounded-md">
                              {item.year}
                            </span>
                          </div>

                          <h3 className="font-bold text-base md:text-xl mb-2 text-slate-800 group-hover:text-green-700 transition-colors">
                            {item.title}
                          </h3>

                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-3">
                            {item.description}
                          </p>

                          {item.detail && (
                            <div className="pt-3 border-t border-slate-100">
                              <p className="text-xs md:text-sm text-muted-foreground font-normal flex items-start gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 shrink-0" />
                                {item.detail}
                              </p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-16 overflow-hidden">
          {/* Image Background */}
          <div className="absolute inset-0 -z-10">
            <img
              src="/sawah.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 dark:bg-black/90" />
          </div>

          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Misi Utama</h2>
              <p className="text-white/80">Empat pilar utama dalam pemberdayaan desa</p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {mainMissions.map((mission, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1 // Animasi muncul satu per satu
                  }}
                >
                  <Card className="h-full text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-default bg-white/95 dark:bg-zinc-900/95 backdrop-blur-sm border-none">
                    <CardContent className="pt-8">
                      <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                        <mission.icon className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-3">{mission.title}</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {mission.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-left">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="leading-tight">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#172317] text-white overflow-hidden">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">Bagaimana Kami Bekerja</h2>
              <p className="text-green-50/80 max-w-3xl mx-auto text-pretty leading-relaxed">
                Natadesa beroperasi di bidang teknologi dan pemberdayaan masyarakat. Melalui platform{" "}
                <a
                  href="https://bisnisdesa.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#E67E22] hover:text-yellow-500 underline underline-offset-4 decoration-yellow-400 transition-colors"
                >
                  bisnisdesa.id
                </a>, kami menyediakan ekosistem dari hulu ke hilir untuk 'Mengorganisir Desa'.
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card className="bg-white border-none shadow-xl h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 ring-8 ring-green-50">
                      <span className="text-xl font-bold text-green-600">1</span>
                    </div>
                    <CardTitle className="text-slate-900 font-bold">Peningkatan Kapasitas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      "Pelatihan literasi keuangan",
                      "Pelatihan pemasaran digital",
                      "Standarisasi produksi"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600 leading-snug">{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-white border-none shadow-xl h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 ring-8 ring-green-50">
                      <span className="text-xl font-bold text-green-600">2</span>
                    </div>
                    <CardTitle className="text-slate-900 font-bold">Integrasi Digital</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      "ERP system untuk desa",
                      "Marketplace bisnisdesa.id",
                      "Dirancang untuk konektivitas rendah",
                      "Optimasi literasi teknologi"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600 leading-snug">{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="bg-white border-none shadow-xl h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 ring-8 ring-green-50">
                      <span className="text-xl font-bold text-green-600">3</span>
                    </div>
                    <CardTitle className="text-slate-900 font-bold">Keterkaitan Pasar</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      "Jalur distribusi langsung",
                      "Koneksi ke ritel nasional",
                      "Akses ke pusat ekspor"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-slate-600 leading-snug">{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 overflow-hidden bg-white"> {/* Background putih sesuai preferensi sebelumnya */}
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Card className="relative border-none bg-gradient-to-br from-primary/[0.08] via-transparent to-accent/[0.08] shadow-2xl shadow-primary/5 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                  <CardContent className="pt-16 pb-16 px-8 md:px-16">
                    <div className="text-center mb-8">
                      <motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <Award className="h-16 w-16 text-primary mx-auto mb-6 opacity-80" />
                      </motion.div>
                      <h2 className="text-4xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white">
                        Visi Perusahaan
                      </h2>
                    </div>

                    <blockquote className="relative min-h-[160px] flex items-center justify-center">
                      {/* Tanda kutip dekoratif */}
                      <span className="absolute -top-8 -left-4 text-8xl text-primary/10 font-serif leading-none">“</span>

                      <div className="text-xl md:text-2xl text-center text-muted-foreground text-pretty leading-relaxed italic relative z-10">
                        <Typewriter
                          options={{
                            delay: 40, // Kecepatan mengetik (ms)
                            cursor: "|",
                            autoStart: true,
                            loop: false,
                          }}
                          onInit={(typewriter) => {
                            typewriter
                              .typeString('Menjadi mitra terpercaya dalam mengembangkan potensi desa dan produk yang kompetitif, memperkuat tata kelola melalui partisipasi masyarakat, menjaga lingkungan, dan menghormati kearifan lokal untuk mencapai kemandirian ekonomi yang berkeadilan.')
                              .start();
                          }}
                        />
                      </div>

                      <span className="absolute -bottom-16 -right-4 text-8xl text-primary/10 font-serif leading-none">”</span>
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-slate-900">6 Misi Strategis</h2>
              <p className="text-muted-foreground">Enam misi memperkuat visi dan memandu pelaksanaan program</p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {missions.map((mission, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1
                  }}
                >
                  <Card className="bg-white border-2 border-transparent hover:border-green-600 transition-all duration-300 shadow-sm hover:shadow-lg h-full">
                    <CardContent className="pt-6">
                      <mission.icon className="h-10 w-10 text-green-600 mb-4" />
                      <h3 className="font-semibold mb-2 text-lg text-slate-900">{mission.title}</h3>
                      <p className="text-sm text-slate-600 mb-1">{mission.description}</p>
                      <p className="text-xs text-slate-500">{mission.detail}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Tim Kami</h2>
              <p className="text-muted-foreground">
                Struktur tim selaras dengan pelaksanaan program desa berkelanjutan
              </p>
            </div>

            {/* Leadership Team - Dengan Foto */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-10">Tim Kepemimpinan</h3>
              <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                {teamLeaders.map((leader, index) => (
                  <Card
                    key={index}
                    className="group overflow-hidden border-none shadow-none bg-transparent"
                  >
                    <CardContent className="p-0">
                      {/* Frame Foto: Menggunakan aspect-square dengan rounded-2xl agar terlihat profesional */}
                      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted mb-4 transition-transform duration-500 group-hover:shadow-xl">
                        {leader.image ? (
                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-slate-100">
                            <Users className="h-12 w-12 text-slate-300" />
                          </div>
                        )}

                        {/* Overlay tipis saat hover untuk kesan premium */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Info Text - Rata Kiri atau Tengah sesuai selera, di sini saya gunakan rata tengah */}
                      <div className="text-center">
                        <h3 className="font-bold text-xl text-slate-900 group-hover:text-primary transition-colors duration-300">
                          {leader.name}
                        </h3>
                        <p className="text-sm font-semibold uppercase tracking-wider text-primary mt-1">
                          {leader.position}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Support Team - Tetap Minimalis (Tanpa Foto) */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">Tim Support</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {teamSupport.map((team, index) => (
                  <Card
                    key={index}
                    className="bg-white border-transparent hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <CardHeader>
                      <team.icon className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">{team.department}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {team.members.map((member, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{member}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">Legalitas</h2>
              <p className="text-center text-muted-foreground mb-12">
                Dokumen hukum formal yang mengkonfirmasi kepatuhan perusahaan
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <FileCheck className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">Akta Pendirian PT</h3>
                      <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-3">
                        ✓ Terdaftar
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Akta pendirian resmi yang mengkonfirmasi pendirian badan hukum
                      </p>
                      <div className="w-full bg-muted p-3 rounded">
                        <p className="text-xs text-muted-foreground mb-1">Nomor AHU</p>
                        <p className="font-mono text-sm font-semibold">AHU-00910.AH.02.01.TAHUN2021</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">Nomor Izin Usaha</h3>
                      <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-3">
                        ✓ AKTIF
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">Otorisasi operasional</p>
                      <p className="text-sm text-muted-foreground">Berlaku untuk operasional bisnis</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-8">
                Dokumen tersedia atas permintaan • Natadesa Nusantara
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            {/* Animasi untuk Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">Nilai-Nilai Perusahaan</h2>
              <p className="text-muted-foreground">Prinsip yang memandu setiap langkah kami</p>
            </motion.div>

            {/* Container untuk Grid dengan Stagger Effect */}
            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15 // Memberikan jeda antar kartu 0.15 detik
                  }
                }
              }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 }, // Mulai dari bawah (y: 30)
                    show: { opacity: 1, y: 0 }    // Berakhir di posisi asli (y: 0)
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Card className="text-center h-full hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
                    <CardContent className="pt-6">
                      <value.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="relative py-20 overflow-hidden">
          {/* Gambar Background */}
          <div className="absolute inset-0 -z-10">
            <img
              src="/sawah.jpg"
              alt="Pencapaian Background"
              className="w-full h-full object-cover"
            />
            {/* Overlay Hijau Gelap dengan gradien agar lebih dalam */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#172317]/95 via-[#172317]/80 to-[#172317]/95" />
          </div>

          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white tracking-tight">Pencapaian & Dampak</h2>
              <p className="text-green-50/70 max-w-2xl mx-auto">
                Dedikasi kami dalam menggerakkan ekonomi dan menjaga kelestarian desa wisata di seluruh penjuru negeri.
              </p>
            </div>

            {/* Container Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto"
            >
              {impactMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                  whileHover={{ y: -10 }} // Card naik sedikit saat dihover
                  className="h-full"
                >
                  <Card className="group relative h-full overflow-hidden border-none bg-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/20 ring-1 ring-white/20 hover:ring-[#E67E22]/50">
                    {/* Efek Cahaya Orange saat Hover */}
                    <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-[#E67E22]/20 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />

                    <CardContent className="relative pt-8 pb-6 px-4">
                      <div className="text-center">
                        <p className="text-4xl font-extrabold text-white mb-2 tracking-tighter group-hover:text-[#E67E22] transition-colors duration-300">
                          <CounterWrapper value={metric.number} delay={0.6 + (index * 0.1)} />
                          <span className="text-[#E67E22]">{metric.suffix}</span>
                        </p>
                        <div className="h-1 w-8 bg-[#E67E22] mx-auto mb-4 rounded-full opacity-50 group-hover:w-12 group-hover:opacity-100 transition-all duration-300" />
                        <p className="text-[11px] font-medium uppercase tracking-widest text-green-50/80 leading-snug">
                          {metric.label}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 from-primary/10 via-background to-accent/10 bg-[#172317]">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              {/* Rocket Putih */}
              <Rocket className="h-16 w-16 text-white mx-auto mb-6" />

              <h2 className="text-3xl font-bold mb-4 text-white">Mari Berkolaborasi</h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty text-white">
                Bergabunglah dengan kami dalam membangun desa berkelanjutan
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Hubungi Kami */}
                <Button asChild size="lg">
                  <Link href="/kontak">
                    <Phone className="mr-2 h-5 w-5" />
                    Hubungi Kami
                  </Link>
                </Button>

                {/* Portfolio: Awal Orange, Hover Outline */}
                <Button
                  asChild
                  size="lg"
                  className="bg-[#E67E22] text-white border-2 border-[#E67E22] hover:bg-transparent hover:text-[#E67E22] transition-all duration-300"
                >
                  <Link href="/portfolio">
                    Lihat Portfolio
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                {/* Download: PAKSA Teks Hitam (!text-black) */}
                <Button
                  asChild
                  size="lg"
                  className="bg-white !text-black border-2 border-white hover:bg-transparent hover:!text-white transition-all duration-300"
                >
                  <a href="https://drive.google.com/file/d/1WiQJcSd8FrrU_rjYAcEYH-YMqfHzMWxn/view?usp=sharing" download>
                    <Download className="mr-2 h-5 w-5" />
                    Download Company Profile
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
