"use client" // Dibutuhkan untuk menjalankan Intersection Observer (Animasi Scroll)

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion";

import {
  MapPin,
  Users,
  TrendingUp,
  Globe,
  Lightbulb,
  Heart,
  Target,
  Laptop,
  Handshake,
  FileText,
  GraduationCap,
  Smartphone,
  Briefcase,
  CheckCircle,
  Copy,
  Network,
  UserCheck,
  Award,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Komponen Internal untuk Animasi Angka
const Counter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [end, duration])

  return <span>{count.toLocaleString()}</span>
}

export default function HomePage() {
  // Logic untuk mendeteksi scroll agar animasi muncul bertahap saat masuk layar
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Muncul jika 10% elemen terlihat
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")
        }
      });
    }, observerOptions)

    const targets = document.querySelectorAll(".reveal")
    targets.forEach((target) => observer.observe(target))

    return () => observer.disconnect()
  }, [])

  const [activeBg, setActiveBg] = useState("/sawah.jpg")
  const [prevBg, setPrevBg] = useState("/sawah.jpg")

  const focusItems = [
    { icon: TrendingUp, title: "Pertumbuhan Ekonomi Inklusif", image: "/sawah.jpg", delay: "d-1" },
    { icon: Lightbulb, title: "Literasi Digital", image: "/training-session-in-village-community.jpg", delay: "d-2" },
    { icon: Handshake, title: "Mata Pencaharian Berkelanjutan", image: "/situ-salawe-lake-tourism-destination.jpg", delay: "d-3" },
    { icon: Heart, title: "GEDSI (Kesetaraan Sosial)", image: "/delanggu-eco-park-sustainable-tourism.jpg", delay: "d-4" },
    { icon: Users, title: "Pendekatan Terukur & Teknologi", image: "/training-session-in-village-community.jpg", delay: "d-5" },
  ]

  const handleHover = (newImage: string) => {
    setPrevBg(activeBg)
    setActiveBg(newImage)
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
          .reveal {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s ease-out;
          }
          .reveal.is-visible {
            opacity: 1;
            transform: translateY(0);
          }
          .d-1 { transition-delay: 0.1s; }
          .d-2 { transition-delay: 0.2s; }
          .d-3 { transition-delay: 0.3s; }
          .d-4 { transition-delay: 0.4s; }
          .d-5 { transition-delay: 0.5s; }
        `}} />

      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[100vh] lg:min-h-[90vh] flex flex-col items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/sawah.jpg"
              alt="Background Sawah Natadesa"
              fill
              className="object-cover"
              priority
            />
            {/* Overlay dibuat sedikit lebih gelap di mobile agar teks putih tetap terbaca jelas */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/90" />
          </div>

          <div className="container relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20">
            <div className="mx-auto max-w-5xl text-center">
              {/* Label atas dengan spacing yang lebih baik di mobile */}
              <div className="mb-4 reveal d-1">
                <p className="text-[10px] sm:text-sm font-bold tracking-[0.3em] uppercase text-white/90 drop-shadow-md">
                  Natadesa Nusantara
                </p>
              </div>

              {/* Font size disesuaikan secara bertahap: 3xl (mobile) -> 6xl (tablet) -> 7xl (desktop) */}
              <h1 className="text-3xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 reveal d-2 leading-[1.2] lg:leading-[1.1] drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)] px-2">
                Penggerak Desa <br className="hidden sm:block" /> Berkelanjutan di Indonesia
              </h1>

              {/* Deskripsi: text-base di mobile agar tidak terlalu panjang kebawah */}
              <p className="text-base sm:text-lg lg:text-xl text-white/90 font-medium text-pretty mb-10 max-w-2xl mx-auto leading-relaxed reveal d-3 drop-shadow-md px-4">
                Membangun potensi lokal, memberdayakan masyarakat, melestarikan kearifan budaya dan lingkungan melalui
                produk yang inovatif dan kolaboratif
              </p>

              {/* Button Group: Full width di mobile, inline di desktop */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center reveal d-4 w-full max-w-xs sm:max-w-none mx-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto px-10 shadow-2xl bg-[#ff8c00] hover:bg-[#e67e22] border-none text-white font-bold h-14 transition-all duration-300 hover:scale-105 active:scale-95"
                  asChild
                >
                  <Link href="/kontak">Konsultasi Gratis</Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto group px-10 bg-white/10 text-white border-2 border-white hover:bg-white hover:text-black backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 font-bold h-14"
                  asChild
                >
                  <Link href="/portfolio" className="flex items-center gap-2">
                    Lihat Portfolio
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Statistics - Enhanced & Responsive */}
        <section className="py-16 md:py-24 bg-white relative overflow-hidden">
          {/* Garis pemisah halus di atas */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

          <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">

            {/* Penambahan Title Section */}
            <div className="text-center mb-12 md:mb-16 reveal">
              <h2 className="text-2xl md:text-3xl font-bold text-[#172317] mb-4">Dampak & Potensi Desa</h2>
              <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto">
                Data yang menggerakkan kami untuk terus berkontribusi dalam pembangunan desa yang mandiri dan berkelanjutan.
              </p>
            </div>

            {/* Grid Responsive: 1 kolom di HP, 2 kolom di Tablet, 4 kolom di Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

              {/* Stat 1 */}
              <Card className="reveal d-1 bg-white border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group cursor-default overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#065a45]/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#065a45] transition-all duration-300">
                    <MapPin className="h-6 w-6 text-[#065a45] group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-3xl font-extrabold mb-2 text-slate-900 flex items-center justify-center">
                    <Counter end={75000} />+
                  </div>
                  <p className="text-xs md:text-sm text-slate-500 font-medium leading-snug px-4">
                    Desa di Indonesia yang perlu pemberdayaan
                  </p>
                </CardContent>
              </Card>

              {/* Stat 2 */}
              <Card className="reveal d-2 bg-white border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group cursor-default overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#065a45]/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#065a45] transition-all duration-300">
                    <Award className="h-6 w-6 text-[#065a45] group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-3xl font-extrabold mb-2 text-slate-900 flex items-center justify-center">
                    <Counter end={20} />+
                  </div>
                  <p className="text-xs md:text-sm text-slate-500 font-medium leading-snug px-4">
                    Proyek selesai (2021-2025)
                  </p>
                </CardContent>
              </Card>

              {/* Stat 3 */}
              <Card className="reveal d-3 bg-white border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group cursor-default overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#065a45]/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#065a45] transition-all duration-300">
                    <Globe className="h-6 w-6 text-[#065a45] group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-3xl font-extrabold mb-2 text-slate-900 flex items-center justify-center">
                    <Counter end={6042} />
                  </div>
                  <p className="text-xs md:text-sm text-slate-500 font-medium leading-snug px-4">
                    Desa wisata aktif di Indonesia
                  </p>
                </CardContent>
              </Card>

              {/* Stat 4 */}
              <Card className="reveal d-4 bg-white border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group cursor-default overflow-hidden">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#065a45]/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#065a45] transition-all duration-300">
                    <Target className="h-6 w-6 text-[#065a45] group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-3xl font-extrabold mb-2 text-slate-900 flex items-center justify-center">
                    <Counter end={1921} />
                  </div>
                  <p className="text-xs md:text-sm text-slate-500 font-medium leading-snug px-4">
                    Desa di Jawa & Bali (target market)
                  </p>
                </CardContent>
              </Card>

            </div>
          </div>
        </section>

        {/* Area Fokus Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-black">
            <Image src={prevBg} alt="Previous Background" fill className="object-cover" />
            <Image key={activeBg} src={activeBg} alt="Current Background" fill className="object-cover animate-in fade-in duration-1000" />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="container relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16 reveal d-1">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4 drop-shadow-lg">Area Fokus Kami</h2>
              <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed px-4">Lima pilar utama dalam pemberdayaan desa berkelanjutan untuk masa depan Indonesia yang lebih kuat.</p>
            </div>

            {/* Responsive Grid: 2 kolom di mobile, 5 kolom di desktop */}
            <div className="grid gap-4 md:gap-6 grid-cols-2 lg:grid-cols-5">
              {focusItems.map((item, index) => (
                <Card
                  key={index}
                  onMouseEnter={() => handleHover(item.image)}
                  onMouseLeave={() => handleHover("/sawah.jpg")}
                  // Menambahkan fungsi klik agar user mobile bisa trigger ganti background
                  onClick={() => handleHover(item.image)}
                  className={`relative overflow-hidden group border-none shadow-xl transition-all duration-500 hover:-translate-y-3 bg-white hover:bg-black/40 backdrop-blur-sm reveal ${item.delay} cursor-pointer 
            ${index === 4 ? 'col-span-2 lg:col-span-1' : 'col-span-1'}`}
                >
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <CardContent className="p-6 md:p-8 flex flex-col items-center text-center h-full justify-center">
                    <div className="relative mb-4 md:mb-6">
                      {/* Ukuran box icon yang sedikit menyesuaikan di mobile */}
                      <div className="relative w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                        <item.icon className="h-6 w-6 md:h-8 md:w-8 transition-transform duration-500 group-hover:scale-110" />
                      </div>
                    </div>
                    <h3 className="text-xs md:text-base font-bold text-slate-800 group-hover:text-white leading-snug transition-colors duration-300">
                      {item.title}
                    </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        {/* Tentang Kami Section */}
        <section className="py-16 md:py-24 bg-[#172317] text-white">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              {/* Judul: Naik sedikit saja dari 3xl ke 4xl di desktop */}
              <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal d-1 text-white">
                Tentang Kami
              </h2>

              {/* Teks: Ukuran tetap terjaga namun sedikit lebih padat di desktop */}
              <p className="text-lg md:text-xl text-white/95 mb-4 reveal d-2 leading-relaxed">
                <strong className="text-white">PT. Natadesa Bangun Negeri</strong> adalah perusahaan sosial yang berfokus pada pengembangan desa wisata dan berkelanjutan di Indonesia.
              </p>

              <p className="text-base md:text-lg text-white/80 mb-8 reveal d-3 leading-relaxed">
                Kami menggunakan pendekatan kolaboratif antara komunitas, pemerintah, dan mitra swasta untuk menciptakan dampak positif yang berkelanjutan bagi masyarakat desa.
              </p>

              <div className="reveal d-4">
                {/* Button: Ukuran standar yang solid */}
                <Button
                  variant="outline"
                  asChild
                  className="bg-[#ff8c00] hover:bg-[#e67e22] text-white border-none px-8 h-12 text-base font-semibold transition-all"
                >
                  <Link href="/tentang-kami">Selengkapnya →</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* --- SECTION SOLUSI KAMI (COMPACT VERSION) --- */}
        <section className="py-12 md:py-16 bg-[#ffffff]">
          <div className="container mx-auto max-w-5xl px-6 lg:px-8">
            <div className="text-center mb-10 reveal d-1">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl mb-2">Solusi Kami</h2>
              <p className="text-sm md:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Tiga pilar strategi untuk pemberdayaan desa berkelanjutan
              </p>
            </div>

            {/* Grid Kartu: Minimalist White Style */}
            <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3 mb-12">
              {/* Pilar 1 */}
              <Card className="reveal d-1 border border-slate-100 hover:border-[#065a45] shadow-sm hover:shadow-md transition-all duration-300 bg-white group cursor-default">
                <CardContent className="p-6 flex flex-col items-start h-full">
                  <div className="w-12 h-12 bg-[#172317]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#172317] transition-colors duration-300">
                    <GraduationCap className="h-6 w-6 text-[#065a45] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-slate-900 leading-tight">Pilar 1: Peningkatan Kapasitas</h3>
                  <p className="text-xs text-slate-600 leading-relaxed text-left">
                    Pelatihan dan pendampingan SDM desa dalam pengelolaan bisnis dan pariwisata berkelanjutan.
                  </p>
                </CardContent>
              </Card>

              {/* Pilar 2 */}
              <Card className="reveal d-2 border border-slate-100 hover:border-[#065a45] shadow-sm hover:shadow-md transition-all duration-300 bg-white group cursor-default">
                <CardContent className="p-6 flex flex-col items-start h-full">
                  <div className="w-12 h-12 bg-[#172317]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#172317] transition-colors duration-300">
                    <Smartphone className="h-6 w-6 text-[#065a45] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-slate-900 leading-tight">Pilar 2: Integrasi Digital</h3>
                  <p className="text-xs text-slate-600 leading-relaxed text-left">
                    Digitalisasi proses bisnis dan pemasaran melalui platform teknologi untuk efisiensi pasar.
                  </p>
                </CardContent>
              </Card>

              {/* Pilar 3 */}
              <Card className="reveal d-3 border border-slate-100 hover:border-[#172317] shadow-sm hover:shadow-md transition-all duration-300 bg-white group cursor-default">
                <CardContent className="p-6 flex flex-col items-start h-full">
                  <div className="w-12 h-12 bg-[#172317]/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#172317] transition-colors duration-300">
                    <Network className="h-6 w-6 text-[#172317] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-base font-bold mb-2 text-slate-900 leading-tight">Pilar 3: Keterkaitan Pasar</h3>
                  <p className="text-xs text-slate-600 leading-relaxed text-left">
                    Membangun koneksi dengan pasar dan mitra strategis demi keberlanjutan ekonomi desa.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Backbone Banner */}
            <div className="reveal d-4 bg-[#172317] rounded-2xl p-6 md:p-8 text-center shadow-lg max-w-3xl mx-auto border border-white/10 hover:border-white/30 transition-all duration-300">
              <h4 className="text-sm md:text-lg font-bold text-white mb-2 leading-snug">
                Platform {" "}
                <Link
                  href="https://bisnisdesa.id"
                  target="_blank"
                  className="text-[#fa9223] hover:text-[#ffb366] underline decoration-2 underline-offset-4 transition-all font-extrabold"
                >
                  bisnisdesa.id
                </Link>
                {" "} sebagai tulang punggung operasional
              </h4>
              <p className="text-[10px] md:text-sm text-white/70">
                Solusi digital terintegrasi untuk manajemen desa wisata dan BUMDes
              </p>
            </div>
          </div>
        </section>

        {/* --- LAYANAN UTAMA SECTION (CLEAN & ELEGANT HOVER) --- */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-14 reveal d-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-slate-900">
                Layanan Utama
              </h2>
              <p className="text-slate-500 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
                Layanan komprehensif untuk pengembangan desa berkelanjutan
              </p>
            </div>

            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { title: "Rencana Jangka Panjang Desa", icon: FileText, desc: "Penyusunan masterplan dan strategi pengembangan desa wisata yang berkelanjutan.", delay: "d-1" },
                { title: "Peningkatan Kapasitas HR", icon: GraduationCap, desc: "Pelatihan SDM desa dalam manajemen, pemasaran, dan operasional bisnis pariwisata.", delay: "d-2" },
                { title: "Digitalisasi dan Teknologi", icon: Laptop, desc: "Implementasi sistem digital untuk reservasi, pembayaran, dan manajemen desa.", delay: "d-3" },
                { title: "Bantuan Manajemen Bisnis", icon: Briefcase, desc: "Pendampingan dalam pengelolaan keuangan dan pengembangan produk wisata.", delay: "d-4" }
              ].map((item, index) => (
                <Card
                  key={index}
                  className={`reveal ${item.delay} border border-slate-100 bg-white group transition-all duration-300 ease-out hover:-translate-y-2 hover:border-yellow-500 hover:shadow-[0_15px_30px_-10px_rgba(234,179,8,0.2)] cursor-default overflow-hidden`}
                >
                  <CardContent className="pt-8 pb-8 px-6 flex flex-col h-full">
                    {/* Icon Container */}
                    <div className="bg-[#172317]/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-yellow-500/10">
                      <item.icon className="h-7 w-7 text-[#172317] transition-colors duration-300 group-hover:text-yellow-600" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold mb-3 text-slate-900 transition-colors duration-300 group-hover:text-yellow-700 leading-tight">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>


        {/* Portfolio Highlights Section - Background Hijau #172317 dengan Marquee */}
        <section className="py-12 md:py-20 bg-[#172317] overflow-hidden">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8 mb-8 md:mb-12">
            <div className="text-center reveal d-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">Portfolio Highlights</h2>
              <p className="text-slate-300 text-sm md:text-base text-pretty max-w-2xl mx-auto leading-relaxed">
                Proyek-proyek unggulan yang telah kami kerjakan di seluruh Indonesia
              </p>
            </div>
          </div>

          {/* Marquee Container */}
          <div className="flex relative">
            <motion.div
              className="flex gap-4 md:gap-6 pr-4 md:pr-6"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 35, // Sedikit diperlambat agar teks tetap terbaca di layar kecil
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {/* 10 Portfolio Cards Asli */}
              {[...Array(10)].map((_, i) => (
                <Card key={i} className="w-[260px] md:w-[280px] flex-shrink-0 overflow-hidden border-none bg-white shadow-xl group transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={`/portofolio${i + 1}.jpeg`}
                      alt={`Project ${i + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-4 md:pt-5 bg-white">
                    <Badge className="mb-2 bg-[#172317]/10 text-[#172317] border-none text-[9px] md:text-[10px]">
                      {["Jawa Tengah", "Bali", "Jawa Barat", "Sumatera", "NTB", "Kalimantan", "Sulawesi", "Papua", "Maluku", "Lampung"][i % 10]}
                    </Badge>
                    <h3 className="text-sm md:text-md font-bold mb-1 text-slate-900 group-hover:text-[#fa9223] transition-colors line-clamp-1">
                      {["Ponggok Fish & Farm", "Ubud Eco Resort", "Situ Salawe", "Nagari Digital", "Mandalika Village", "Borneo Green", "Celebes Tech", "Papua Rise", "Spice Island", "Way Kambas View"][i % 10]}
                    </h3>
                    {/* Deskripsi tetap ada, hanya ukuran teks sedikit menyesuaikan layar */}
                    <p className="text-slate-500 text-[9px] md:text-[10px] leading-relaxed mb-3 line-clamp-2">
                      Transformasi strategis untuk meningkatkan ekonomi desa berkelanjutan.
                    </p>
                    <p className="text-[10px] md:text-[11px] font-bold text-[#172317]">2022-2024</p>
                  </CardContent>
                </Card>
              ))}

              {/* Duplikasi Card Lengkap untuk looping */}
              {[...Array(10)].map((_, i) => (
                <Card key={`dup-${i}`} className="w-[260px] md:w-[280px] flex-shrink-0 overflow-hidden border-none bg-white shadow-xl group transition-all duration-300 hover:-translate-y-2">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={`/portofolio${i + 1}.jpeg`}
                      alt="Project"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform"
                    />
                  </div>
                  <CardContent className="p-4 md:pt-5 bg-white">
                    <Badge className="mb-2 bg-[#172317]/10 text-[#172317] border-none text-[9px] md:text-[10px]">
                      {["Jawa Tengah", "Bali", "Jawa Barat", "Sumatera", "NTB", "Kalimantan", "Sulawesi", "Papua", "Maluku", "Lampung"][i % 10]}
                    </Badge>
                    <h3 className="text-sm md:text-md font-bold mb-1 text-slate-900 group-hover:text-[#fa9223] transition-colors line-clamp-1">
                      {["Ponggok Fish & Farm", "Ubud Eco Resort", "Situ Salawe", "Nagari Digital", "Mandalika Village", "Borneo Green", "Celebes Tech", "Papua Rise", "Spice Island", "Way Kambas View"][i % 10]}
                    </h3>
                    <p className="text-slate-500 text-[9px] md:text-[10px] leading-relaxed mb-3 line-clamp-2">
                      Transformasi strategis untuk meningkatkan ekonomi desa berkelanjutan.
                    </p>
                    <p className="text-[10px] md:text-[11px] font-bold text-[#172317]">2022-2024</p>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>

          <div className="text-center mt-12 md:mt-16 px-6">
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full md:w-auto border-white text-white hover:bg-white hover:text-[#172317] transition-all bg-transparent"
            >
              <Link href="/portfolio">Lihat Semua Portfolio →</Link>
            </Button>
          </div>
        </section>

        {/* Keunggulan Kompetitif Section - Card Hijau ke Putih saat Hover */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12 reveal d-1">
              <h2 className="text-3xl font-bold mb-4 text-balance text-slate-900">Keunggulan Kompetitif</h2>
              <p className="text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                Mengapa memilih Natadesa Nusantara sebagai mitra pengembangan desa
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {/* Card 1 */}
              <Card className="reveal d-1 border-none shadow-sm bg-[#172317] group transition-all duration-300 ease-out hover:bg-white hover:-translate-y-3 hover:shadow-xl cursor-default">
                <CardContent className="p-6">
                  <CheckCircle className="h-7 w-7 mb-4 text-green-500 transition-colors duration-300 group-hover:text-yellow-500" />
                  <h3 className="text-md font-bold mb-2 text-white transition-colors duration-300 group-hover:text-slate-900">Solusi Khusus</h3>
                  <p className="text-slate-300 text-xs leading-relaxed transition-colors duration-300 group-hover:text-slate-600">
                    Pendekatan customized sesuai karakteristik dan potensi unik setiap desa.
                  </p>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="reveal d-2 border-none shadow-sm bg-[#172317] group transition-all duration-300 ease-out hover:bg-white hover:-translate-y-3 hover:shadow-xl cursor-default">
                <CardContent className="p-6">
                  <Copy className="h-7 w-7 mb-4 text-green-500 transition-colors duration-300 group-hover:text-yellow-500" />
                  <h3 className="text-md font-bold mb-2 text-white transition-colors duration-300 group-hover:text-slate-900">Model Replikasi</h3>
                  <p className="text-slate-300 text-xs leading-relaxed transition-colors duration-300 group-hover:text-slate-600">
                    Framework teruji yang dapat diadaptasi untuk berbagai konteks desa di Indonesia.
                  </p>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="reveal d-3 border-none shadow-sm bg-[#172317] group transition-all duration-300 ease-out hover:bg-white hover:-translate-y-3 hover:shadow-xl cursor-default">
                <CardContent className="p-6">
                  <Smartphone className="h-7 w-7 mb-4 text-green-500 transition-colors duration-300 group-hover:text-yellow-500" />
                  <h3 className="text-md font-bold mb-2 text-white transition-colors duration-300 group-hover:text-slate-900">Integrasi Digital</h3>
                  <p className="text-slate-300 text-xs leading-relaxed transition-colors duration-300 group-hover:text-slate-600">
                    Platform teknologi bisnisdesa.id untuk operasional dan pemasaran yang efisien.
                  </p>
                </CardContent>
              </Card>

              {/* Card 4 */}
              <Card className="reveal d-1 border-none shadow-sm bg-[#172317] group transition-all duration-300 ease-out hover:bg-white hover:-translate-y-3 hover:shadow-xl cursor-default">
                <CardContent className="p-6">
                  <Handshake className="h-7 w-7 mb-4 text-green-500 transition-colors duration-300 group-hover:text-yellow-500" />
                  <h3 className="text-md font-bold mb-2 text-white transition-colors duration-300 group-hover:text-slate-900">Kemitraan Strategis</h3>
                  <p className="text-slate-300 text-xs leading-relaxed transition-colors duration-300 group-hover:text-slate-600">
                    Jaringan luas dengan pemerintah, universitas, dan sektor swasta untuk keberlanjutan.
                  </p>
                </CardContent>
              </Card>

              {/* Card 5 */}
              <Card className="reveal d-2 border-none shadow-sm bg-[#172317] group transition-all duration-300 ease-out hover:bg-white hover:-translate-y-3 hover:shadow-xl cursor-default">
                <CardContent className="p-6">
                  <UserCheck className="h-7 w-7 mb-4 text-green-500 transition-colors duration-300 group-hover:text-yellow-500" />
                  <h3 className="text-md font-bold mb-2 text-white transition-colors duration-300 group-hover:text-slate-900">Keterlibatan Komunitas</h3>
                  <p className="text-slate-300 text-xs leading-relaxed transition-colors duration-300 group-hover:text-slate-600">
                    Pendekatan partisipatif yang memberdayakan masyarakat sebagai aktor utama pembangunan.
                  </p>
                </CardContent>
              </Card>

              {/* Card 6 */}
              <Card className="reveal d-3 border-none shadow-sm bg-[#172317] group transition-all duration-300 ease-out hover:bg-white hover:-translate-y-3 hover:shadow-xl cursor-default">
                <CardContent className="p-6">
                  <Award className="h-7 w-7 mb-4 text-green-500 transition-colors duration-300 group-hover:text-yellow-500" />
                  <h3 className="text-md font-bold mb-2 text-white transition-colors duration-300 group-hover:text-slate-900">Track Record Terbukti</h3>
                  <p className="text-slate-300 text-xs leading-relaxed transition-colors duration-300 group-hover:text-slate-600">
                    20+ proyek sukses dengan dampak nyata bagi ekonomi dan masyarakat desa.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mitra & Klien Section */}
        <section className="py-12 md:py-20 bg-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 lg:px-8">
            <div className="text-center mb-10 md:mb-16 reveal d-1">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-slate-900">Mitra & Klien</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
                Dipercaya oleh berbagai institusi dan organisasi terkemuka
              </p>
            </div>

            {/* Container dengan Gradient Fade untuk efek profesional */}
            <div className="relative">
              {/* Gradient Overlays */}
              <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

              {/* Baris 1: Bergerak ke Kiri */}
              <div className="relative flex overflow-x-hidden mb-8 md:mb-12">
                <div className="flex animate-marquee whitespace-nowrap items-center">
                  {[
                    { name: "BNI", src: "/BNI.png" },
                    { name: "PT Dolan Kreasi Indonesia", src: "/DOLAN.png" },
                    { name: "Agriculture Companies", src: "/AGRICOMP.png" },
                    { name: "PT Dua Kawan Digital", src: "/DEKADE.png" },
                    { name: "UNISA", src: "/UNISA.png" },
                    { name: "BUM Des Tirta Mandiri", src: "/TIRTAMANDIRI.png" },
                    { name: "Biofertilizer EXTRAGEN", src: "/EXTRAGEN.png" },
                  ].map((client, i) => (
                    <div key={`r1-${i}`} className="mx-6 md:mx-12 flex flex-col items-center justify-center min-w-[100px] md:min-w-[140px]">
                      <div className="h-12 w-24 md:h-16 md:w-32 relative mb-2 flex items-center justify-center">
                        <Image
                          src={client.src}
                          alt={client.name}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100px, 150px"
                        />
                      </div>
                      <p className="text-[8px] md:text-[10px] font-medium text-slate-400 uppercase tracking-wider text-center">{client.name}</p>
                    </div>
                  ))}
                </div>
                {/* Duplikasi untuk Infinite Loop */}
                <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap items-center">
                  {[
                    { name: "BNI", src: "/BNI.png" },
                    { name: "PT Dolan Kreasi Indonesia", src: "/DOLAN.png" },
                    { name: "Agriculture Companies", src: "/AGRICOMP.png" },
                    { name: "PT Dua Kawan Digital", src: "/DEKADE.png" },
                    { name: "UNISA", src: "/UNISA.png" },
                    { name: "BUM Des Tirta Mandiri", src: "/TIRTAMANDIRI.png" },
                    { name: "Biofertilizer EXTRAGEN", src: "/EXTRAGEN.png" },
                  ].map((client, i) => (
                    <div key={`r1-dup-${i}`} className="mx-6 md:mx-12 flex flex-col items-center justify-center min-w-[100px] md:min-w-[140px]">
                      <div className="h-12 w-24 md:h-16 md:w-32 relative mb-2 flex items-center justify-center">
                        <Image
                          src={client.src}
                          alt={client.name}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100px, 150px"
                        />
                      </div>
                      <p className="text-[8px] md:text-[10px] font-medium text-slate-400 uppercase tracking-wider text-center">{client.name}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Baris 2: Bergerak ke Kanan */}
              <div className="relative flex overflow-x-hidden">
                <div className="flex animate-marquee-reverse whitespace-nowrap items-center">
                  {[
                    { name: "UPNS", src: "/UPNS.png" },
                    { name: "Delanggu Eco Park", src: "/DELANGGUECO.png" },
                    { name: "Konten Keren", src: "/KOKE.png" },
                    { name: "Kedung Sumber", src: "/KEDUNG.png" },
                    { name: "BSI", src: "/BSI.png" },
                    { name: "Energi Dagang", src: "/ENERGIDAGANG.png" },
                    { name: "Orra Narupa", src: "/ORRA.png" },
                  ].map((client, i) => (
                    <div key={`r2-${i}`} className="mx-6 md:mx-12 flex flex-col items-center justify-center min-w-[100px] md:min-w-[140px]">
                      <div className="h-12 w-24 md:h-16 md:w-32 relative mb-2 flex items-center justify-center">
                        <Image
                          src={client.src}
                          alt={client.name}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100px, 150px"
                        />
                      </div>
                      <p className="text-[8px] md:text-[10px] font-medium text-slate-400 uppercase tracking-wider text-center">{client.name}</p>
                    </div>
                  ))}
                </div>
                {/* Duplikasi untuk Infinite Loop */}
                <div className="absolute top-0 flex animate-marquee-reverse2 whitespace-nowrap items-center">
                  {[
                    { name: "UPNS", src: "/UPNS.png" },
                    { name: "Delanggu Eco Park", src: "/DELANGGUECO.png" },
                    { name: "Konten Keren", src: "/KOKE.png" },
                    { name: "Kedung Sumber", src: "/KEDUNG.png" },
                    { name: "BSI", src: "/BSI.png" },
                    { name: "Energi Dagang", src: "/ENERGIDAGANG.png" },
                    { name: "Orra Narupa", src: "/ORRA.png" },
                  ].map((client, i) => (
                    <div key={`r2-dup-${i}`} className="mx-6 md:mx-12 flex flex-col items-center justify-center min-w-[100px] md:min-w-[140px]">
                      <div className="h-12 w-24 md:h-16 md:w-32 relative mb-2 flex items-center justify-center">
                        <Image
                          src={client.src}
                          alt={client.name}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100px, 150px"
                        />
                      </div>
                      <p className="text-[8px] md:text-[10px] font-medium text-slate-400 uppercase tracking-wider text-center">{client.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <style dangerouslySetInnerHTML={{
            __html: `
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-100%); }
    }
    @keyframes marquee2 {
      0% { transform: translateX(100%); }
      100% { transform: translateX(0%); }
    }
    @keyframes marquee-reverse {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(0%); }
    }
    @keyframes marquee-reverse2 {
      0% { transform: translateX(0%); }
      100% { transform: translateX(100%); }
    }
    .animate-marquee { animation: marquee 30s linear infinite; }
    .animate-marquee2 { animation: marquee2 30s linear infinite; }
    .animate-marquee-reverse { animation: marquee-reverse 30s linear infinite; }
    .animate-marquee-reverse2 { animation: marquee-reverse2 30s linear infinite; }
    
    @media (max-width: 768px) {
      .animate-marquee, .animate-marquee2, 
      .animate-marquee-reverse, .animate-marquee-reverse2 {
        animation-duration: 20s;
      }
    }
  `
          }} />
        </section>

        {/* CTA Section - Hijau #172317 & Button #fa9223 */}
        <section className="py-20 bg-[#172317] text-white">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-balance reveal d-1">
              Siap Membangun Desa Berkelanjutan?
            </h2>
            <p className="text-lg mb-8 opacity-80 text-pretty max-w-2xl mx-auto leading-relaxed reveal d-2">
              Konsultasikan kebutuhan desa Anda dengan tim expert kami
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center reveal d-3">
              {/* Button Kuning: Text Putih -> Hover Text Hitam, BG tetap Kuning */}
              <Button
                size="lg"
                className="bg-[#fa9223] text-white hover:bg-[#fa9223] hover:text-black font-bold border-none transition-colors duration-200"
                asChild
              >
                <Link href="/kontak">Hubungi Kami</Link>
              </Button>

              {/* Button Outline: Text Putih -> Hover Text Kuning (#fa9223), BG tetap transparan */}
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-transparent hover:text-[#fa9223] hover:border-[#fa9223] transition-colors duration-200"
                asChild
              >
                <a href="#">Download Company Profile</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </>
  )
}