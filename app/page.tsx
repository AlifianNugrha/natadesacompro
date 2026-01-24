"use client" // Dibutuhkan untuk menjalankan Intersection Observer (Animasi Scroll)

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

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
        <section className="relative overflow-hidden min-h-[90vh] flex flex-col items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="/sawah.jpg"
              alt="Background Sawah Natadesa"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90" />
          </div>

          <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-24 lg:pb-32">
            <div className="mx-auto max-w-5xl text-center">
              <div className="mb-2 reveal d-1">
                <p className="text-sm font-bold tracking-[0.2em] uppercase text-white drop-shadow-md">
                  Natadesa Nusantara
                </p>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6 reveal d-2 leading-[1.1] drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                Penggerak Desa Berkelanjutan di Indonesia
              </h1>

              <p className="text-lg text-white font-semibold text-pretty mb-10 max-w-2xl mx-auto leading-relaxed reveal d-3 drop-shadow-md">
                Membangun potensi lokal, memberdayakan masyarakat, melestarikan kearifan budaya dan lingkungan melalui
                produk yang inovatif and kolaboratif
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center reveal d-4">
                <Button
                  size="lg"
                  className="px-10 shadow-2xl bg-[#ff8c00] hover:bg-[#e67e22] border-none text-white font-bold h-14 transition-all duration-300 hover:scale-105 active:scale-95"
                  asChild
                >
                  <Link href="/kontak">Konsultasi Gratis</Link>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="group px-10 bg-white/10 text-white border-2 border-white hover:bg-white hover:text-primary backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 font-bold h-14"
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

        {/* Key Statistics - Compact & Minimalist */}
        <section className="py-16 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-px bg-slate-100" />
          <div className="container mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {/* Stat 1 */}
              <Card className="reveal d-1 bg-white border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group cursor-default">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#065a45]/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#065a45] transition-all duration-300">
                    <MapPin className="h-6 w-6 text-[#065a45] group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-3xl font-extrabold mb-1 text-slate-900">
                    <Counter end={75000} />+
                  </p>
                  <p className="text-xs text-slate-500 font-medium leading-tight">Desa di Indonesia yang perlu pemberdayaan</p>
                </CardContent>
              </Card>

              {/* Stat 2 */}
              <Card className="reveal d-2 bg-white border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group cursor-default">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#065a45]/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#065a45] transition-all duration-300">
                    <Award className="h-6 w-6 text-[#065a45] group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-3xl font-extrabold mb-1 text-slate-900">
                    <Counter end={20} />+
                  </p>
                  <p className="text-xs text-slate-500 font-medium leading-tight">Proyek selesai (2021-2025)</p>
                </CardContent>
              </Card>

              {/* Stat 3 */}
              <Card className="reveal d-3 bg-white border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group cursor-default">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#065a45]/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#065a45] transition-all duration-300">
                    <Globe className="h-6 w-6 text-[#065a45] group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-3xl font-extrabold mb-1 text-slate-900">
                    <Counter end={6042} />
                  </p>
                  <p className="text-xs text-slate-500 font-medium leading-tight">Desa wisata aktif di Indonesia</p>
                </CardContent>
              </Card>

              {/* Stat 4 */}
              <Card className="reveal d-4 bg-white border-slate-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md group cursor-default">
                <CardContent className="p-6 text-center">
                  <div className="bg-[#065a45]/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#065a45] transition-all duration-300">
                    <Target className="h-6 w-6 text-[#065a45] group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-3xl font-extrabold mb-1 text-slate-900">
                    <Counter end={1921} />
                  </p>
                  <p className="text-xs text-slate-500 font-medium leading-tight">Desa di Jawa & Bali (target market)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Area Fokus Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-black">
            <Image src={prevBg} alt="Previous Background" fill className="object-cover" />
            <Image key={activeBg} src={activeBg} alt="Current Background" fill className="object-cover animate-in fade-in duration-1000" />
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16 reveal d-1">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4 drop-shadow-lg">Area Fokus Kami</h2>
              <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">Lima pilar utama dalam pemberdayaan desa berkelanjutan untuk masa depan Indonesia yang lebih kuat.</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {focusItems.map((item, index) => (
                <Card
                  key={index}
                  onMouseEnter={() => handleHover(item.image)}
                  onMouseLeave={() => handleHover("/sawah.jpg")}
                  className={`relative overflow-hidden group border-none shadow-xl transition-all duration-500 hover:-translate-y-3 bg-white hover:bg-black/40 backdrop-blur-sm reveal ${item.delay} cursor-pointer`}
                >
                  <div className="absolute bottom-0 left-0 w-full h-1.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                  <CardContent className="p-8 flex flex-col items-center text-center h-full justify-center">
                    <div className="relative mb-6">
                      <div className="relative w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                        <item.icon className="h-8 w-8 transition-transform duration-500 group-hover:scale-110" />
                      </div>
                    </div>
                    <h3 className="font-bold text-slate-800 group-hover:text-white leading-snug transition-colors duration-300">{item.title}</h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tentang Kami Section */}
        <section className="py-16 bg-[#172317] text-white">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 reveal d-1 text-white">Tentang Kami</h2>
              <p className="text-lg text-white/90 mb-4 reveal d-2">
                <strong className="text-white">PT. Natadesa Bangun Negeri</strong> adalah perusahaan sosial yang berfokus pada pengembangan desa wisata dan berkelanjutan di Indonesia.
              </p>
              <p className="text-white/80 mb-6 reveal d-3">
                Kami menggunakan pendekatan kolaboratif antara komunitas, pemerintah, and mitra swasta untuk menciptakan dampak positif yang berkelanjutan bagi masyarakat desa.
              </p>
              <div className="reveal d-4">
                <Button variant="outline" asChild className="bg-[#ff8c00] hover:bg-[#e67e22] text-white border-none">
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
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3 mb-12">
              {/* Pilar 1 */}
              <Card className="reveal d-1 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white group">
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
              <Card className="reveal d-2 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white group">
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
              <Card className="reveal d-3 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 bg-white group">
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

            {/* Backbone Banner: Menjaga kontras dengan tetap berwarna gelap */}
            <div className="reveal d-4 bg-[#172317] rounded-2xl p-6 md:p-8 text-center shadow-lg max-w-3xl mx-auto border border-white/10">
              <h4 className="text-base md:text-lg font-bold text-white mb-2 leading-snug">
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
              <p className="text-xs md:text-sm text-white/70">
                Solusi digital terintegrasi untuk manajemen desa wisata dan BUMDes
              </p>
            </div>
          </div>
        </section>

        {/* Layanan Utama Section - Background Putih #ffffff dengan Aksen Hijau #172317 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12 reveal d-1">
              <h2 className="text-3xl font-bold mb-4 text-balance text-slate-900">
                Layanan Utama
              </h2>
              <p className="text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                Layanan komprehensif untuk pengembangan desa berkelanjutan
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Card 1 */}
              <Card className="reveal d-1 border border-slate-100 shadow-sm hover:shadow-md transition-all bg-white">
                <CardContent className="pt-8">
                  <div className="bg-[#172317]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <FileText className="h-10 w-10 text-[#172317]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    Rencana Jangka Panjang Desa
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Penyusunan masterplan dan strategi pengembangan desa wisata yang berkelanjutan dan terukur.
                  </p>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="reveal d-2 border border-slate-100 shadow-sm hover:shadow-md transition-all bg-white">
                <CardContent className="pt-8">
                  <div className="bg-[#172317]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <GraduationCap className="h-10 w-10 text-[#172317]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    Peningkatan Kapasitas HR
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Pelatihan SDM desa dalam manajemen, pemasaran, dan operasional bisnis pariwisata.
                  </p>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="reveal d-3 border border-slate-100 shadow-sm hover:shadow-md transition-all bg-white">
                <CardContent className="pt-8">
                  <div className="bg-[#172317]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Laptop className="h-10 w-10 text-[#172317]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    Digitalisasi dan Teknologi
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Implementasi sistem digital untuk reservasi, pembayaran, dan manajemen operasional desa.
                  </p>
                </CardContent>
              </Card>

              {/* Card 4 */}
              <Card className="reveal d-4 border border-slate-100 shadow-sm hover:shadow-md transition-all bg-white">
                <CardContent className="pt-8">
                  <div className="bg-[#172317]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                    <Briefcase className="h-10 w-10 text-[#172317]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">
                    Bantuan Manajemen Bisnis
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Pendampingan dalam pengelolaan keuangan, operasional, dan pengembangan produk wisata desa.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Portfolio Highlights Section - Background Hijau #172317, 4 Cards Kecil */}
        <section className="py-16 bg-[#172317]">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12 reveal d-1">
              <h2 className="text-3xl font-bold mb-4 text-balance text-white">Portfolio Highlights</h2>
              <p className="text-slate-300 text-pretty max-w-2xl mx-auto leading-relaxed">
                Proyek-proyek unggulan yang telah kami kerjakan
              </p>
            </div>

            {/* Grid diubah ke 4 kolom untuk mengecilkan ukuran card */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Card 1 */}
              <Card className="overflow-hidden reveal d-1 border-none bg-white shadow-lg">
                <div className="aspect-video relative">
                  <Image src="/ponggok-fish-farm-sustainable-village.jpg" alt="Ponggok" fill className="object-cover" />
                </div>
                <CardContent className="pt-5 bg-white">
                  <Badge className="mb-2 bg-[#172317]/10 text-[#172317] hover:bg-[#172317]/20 border-none text-[10px]">Jawa Tengah</Badge>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 leading-tight">Ponggok Fish & Farm</h3>
                  <p className="text-slate-600 mb-4 text-xs leading-relaxed">
                    Pengembangan desa wisata berbasis perikanan dan pertanian berkelanjutan.
                  </p>
                  <p className="text-[11px] font-bold text-[#172317]">2023-2024</p>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="overflow-hidden reveal d-2 border-none bg-white shadow-lg">
                <div className="aspect-video relative">
                  <Image src="/delanggu-eco-park-sustainable-tourism.jpg" alt="Delanggu" fill className="object-cover" />
                </div>
                <CardContent className="pt-5 bg-white">
                  <Badge className="mb-2 bg-[#172317]/10 text-[#172317] hover:bg-[#172317]/20 border-none text-[10px]">Jawa Tengah</Badge>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 leading-tight">Delanggu Eco Park</h3>
                  <p className="text-slate-600 mb-4 text-xs leading-relaxed">
                    Transformasi area hijau menjadi destinasi ekowisata edukasi modern.
                  </p>
                  <p className="text-[11px] font-bold text-[#172317]">2022-2023</p>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="overflow-hidden reveal d-3 border-none bg-white shadow-lg">
                <div className="aspect-video relative">
                  <Image src="/situ-salawe-lake-tourism-destination.jpg" alt="Situ Salawe" fill className="object-cover" />
                </div>
                <CardContent className="pt-5 bg-white">
                  <Badge className="mb-2 bg-[#172317]/10 text-[#172317] hover:bg-[#172317]/20 border-none text-[10px]">Jawa Barat</Badge>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 leading-tight">Situ Salawe</h3>
                  <p className="text-slate-600 mb-4 text-xs leading-relaxed">
                    Revitalisasi danau dan pengembangan kawasan wisata alam ramah lingkungan.
                  </p>
                  <p className="text-[11px] font-bold text-[#172317]">2023</p>
                </CardContent>
              </Card>

              {/* Card 4 (Tambahan agar jadi 4) */}
              <Card className="overflow-hidden reveal d-4 border-none bg-white shadow-lg">
                <div className="aspect-video relative">
                  <Image src="/situ-salawe-lake-tourism-destination.jpg" alt="Desa Wisata" fill className="object-cover" />
                </div>
                <CardContent className="pt-5 bg-white">
                  <Badge className="mb-2 bg-[#172317]/10 text-[#172317] hover:bg-[#172317]/20 border-none text-[10px]">Bali</Badge>
                  <h3 className="text-lg font-bold mb-2 text-slate-900 leading-tight">Ubud Sustainable</h3>
                  <p className="text-slate-600 mb-4 text-xs leading-relaxed">
                    Pendampingan manajemen limbah dan energi terbarukan di kawasan wisata.
                  </p>
                  <p className="text-[11px] font-bold text-[#172317]">2024</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12 reveal d-5">
              {/* Perbaikan Button: Memaksa teks putih dan border terlihat */}
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-white text-white hover:bg-white hover:text-[#172317] transition-all bg-transparent"
              >
                <Link href="/portfolio">Lihat Semua Portfolio →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Keunggulan Kompetitif Section - Susunan 3-3 & Aksen Hijau #172317 */}
        <section className="py-16 bg-white">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12 reveal d-1">
              <h2 className="text-3xl font-bold mb-4 text-balance text-slate-900">Keunggulan Kompetitif</h2>
              <p className="text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                Mengapa memilih Natadesa Nusantara sebagai mitra pengembangan desa
              </p>
            </div>

            {/* Menggunakan grid-cols-3 untuk susunan 3-3 yang seimbang */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {/* Card 1 */}
              <Card className="reveal d-1 border border-slate-100 shadow-sm hover:shadow-md transition-all bg-white">
                <CardContent className="p-5"> {/* Padding diperkecil agar card tampak ringkas */}
                  <CheckCircle className="h-7 w-7 mb-3 text-[#172317]" />
                  <h3 className="text-md font-bold mb-2 text-slate-900">Solusi Khusus</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Pendekatan customized sesuai karakteristik and potensi unik setiap desa.
                  </p>
                </CardContent>
              </Card>

              {/* Card 2 */}
              <Card className="reveal d-2 border border-slate-100 shadow-sm hover:shadow-md transition-all bg-white">
                <CardContent className="p-5">
                  <Copy className="h-7 w-7 mb-3 text-[#172317]" />
                  <h3 className="text-md font-bold mb-2 text-slate-900">Model Replikasi</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Framework teruji yang dapat diadaptasi untuk berbagai konteks desa di Indonesia.
                  </p>
                </CardContent>
              </Card>

              {/* Card 3 */}
              <Card className="reveal d-3 border border-slate-100 shadow-sm hover:shadow-md transition-all bg-white">
                <CardContent className="p-5">
                  <Smartphone className="h-7 w-7 mb-3 text-[#172317]" />
                  <h3 className="text-md font-bold mb-2 text-slate-900">Integrasi Digital</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Platform teknologi bisnisdesa.id untuk operasional and pemasaran yang efisien.
                  </p>
                </CardContent>
              </Card>

              {/* Card 4 */}
              <Card className="reveal d-1 border border-slate-100 shadow-sm hover:shadow-md transition-all bg-white">
                <CardContent className="p-5">
                  <Handshake className="h-7 w-7 mb-3 text-[#172317]" />
                  <h3 className="text-md font-bold mb-2 text-slate-900">Kemitraan Strategis</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Jaringan luas dengan pemerintah, universitas, and sektor swasta untuk keberlanjutan.
                  </p>
                </CardContent>
              </Card>

              {/* Card 5 */}
              <Card className="reveal d-2 border border-slate-100 shadow-sm hover:shadow-md transition-all bg-white">
                <CardContent className="p-5">
                  <UserCheck className="h-7 w-7 mb-3 text-[#172317]" />
                  <h3 className="text-md font-bold mb-2 text-slate-900">Keterlibatan Komunitas</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    Pendekatan partisipatif yang memberdayakan masyarakat sebagai aktor utama pembangunan.
                  </p>
                </CardContent>
              </Card>

              {/* Card 6 */}
              <Card className="reveal d-3 border border-slate-100 shadow-sm hover:shadow-md transition-all bg-white">
                <CardContent className="p-5">
                  <Award className="h-7 w-7 mb-3 text-[#172317]" />
                  <h3 className="text-md font-bold mb-2 text-slate-900">Track Record Terbukti</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    20+ proyek sukses dengan dampak nyata bagi ekonomi and masyarakat desa.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mitra & Klien Section - Marquee Effect */}
        <section className="py-16 bg-white overflow-hidden">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12 reveal d-1">
              <h2 className="text-3xl font-bold mb-4 text-balance text-slate-900">Mitra & Klien</h2>
              <p className="text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                Dipercaya oleh berbagai institusi and organisasi terkemuka
              </p>
            </div>

            {/* Marquee Container */}
            <div className="relative flex overflow-x-hidden">
              <div className="flex animate-marquee whitespace-nowrap items-center py-4">
                {[
                  { name: "BUM Desa Tirta Mandiri", src: "/logo-bumdes.png" },
                  { name: "Unsoed", src: "/logo-unsoed.png" },
                  { name: "Polnes", src: "/logo-polnes.png" },
                  { name: "UNSA", src: "/logo-unsa.png" },
                  { name: "Dolan Kreasi", src: "/logo-dolan.png" },
                  { name: "Kemendesa", src: "/logo-kemendesa.png" },
                  { name: "Pemda", src: "/logo-pemda.png" },
                  { name: "BUMDes", src: "/logo-bumdes-nasional.png" },
                ].map((client, i) => (
                  <div key={i} className="mx-8 flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                    <div className="h-16 w-32 relative mb-2 flex items-center justify-center">
                      <Image
                        src={client.src}
                        alt={client.name}
                        width={120}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">{client.name}</p>
                  </div>
                ))}
              </div>

              {/* Duplicate for seamless loop */}
              <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap items-center py-4">
                {[
                  { name: "BUM Desa Tirta Mandiri", src: "/logo-bumdes.png" },
                  { name: "Unsoed", src: "/logo-unsoed.png" },
                  { name: "Polnes", src: "/logo-polnes.png" },
                  { name: "UNSA", src: "/logo-unsa.png" },
                  { name: "Dolan Kreasi", src: "/logo-dolan.png" },
                  { name: "Kemendesa", src: "/logo-kemendesa.png" },
                  { name: "Pemda", src: "/logo-pemda.png" },
                  { name: "BUMDes", src: "/logo-bumdes-nasional.png" },
                ].map((client, i) => (
                  <div key={`dup-${i}`} className="mx-8 flex flex-col items-center justify-center grayscale hover:grayscale-0 transition-all duration-300">
                    <div className="h-16 w-32 relative mb-2 flex items-center justify-center">
                      <Image
                        src={client.src}
                        alt={client.name}
                        width={120}
                        height={60}
                        className="object-contain"
                      />
                    </div>
                    <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">{client.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CSS untuk Animasi Marquee - Tambahkan ini di global.css Anda atau dalam tag style */}
          <style jsx global>{`
    @keyframes marquee {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-100%); }
    }
    @keyframes marquee2 {
      0% { transform: translateX(100%); }
      100% { transform: translateX(0%); }
    }
    .animate-marquee {
      animation: marquee 30s linear infinite;
    }
    .animate-marquee2 {
      animation: marquee2 30s linear infinite;
    }
  `}</style>
        </section>

        {/* Testimonial Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center reveal d-1">
              <div className="mb-6">
                <svg className="h-12 w-12 mx-auto text-primary opacity-50" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <blockquote className="text-xl font-medium text-foreground mb-6 leading-relaxed reveal d-2">
                "Berkat pendampingan Natadesa Nusantara, desa kami berhasil meningkatkan pendapatan dari sektor
                pariwisata hingga 300% dalam setahun. Platform bisnisdesa.id sangat membantu dalam mengelola reservasi
                and keuangan."
              </blockquote>
              <div className="flex items-center justify-center gap-4 reveal d-3">
                <div className="text-center">
                  <p className="font-bold">Pak Budi Santoso</p>
                  <p className="text-sm text-muted-foreground">Direktur BUMDes Tirta Mandiri, Klaten</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-balance reveal d-1">Siap Membangun Desa Berkelanjutan?</h2>
            <p className="text-lg mb-8 opacity-90 text-pretty max-w-2xl mx-auto leading-relaxed reveal d-2">
              Konsultasikan kebutuhan desa Anda dengan tim expert kami
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center reveal d-3">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/kontak">Hubungi Kami</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
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