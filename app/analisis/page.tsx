"use client"

import { useState, useEffect, useRef } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Target, MapPin, CheckCircle, AlertCircle, Lightbulb, Shield, Calendar, Clock } from "lucide-react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

// --- KOMPONEN COUNTER ---
// Menangani animasi angka berjalan dengan pembersihan string yang aman
function Counter({ value, duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let start = 0
      // Membersihkan karakter non-angka agar tidak NaN
      const cleanValue = value.toString().replace(/\D/g, "")
      const end = parseInt(cleanValue)

      if (isNaN(end)) return

      const totalMiliseconds = duration * 1000
      const incrementTime = 20
      const totalSteps = totalMiliseconds / incrementTime
      const increment = end / totalSteps

      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, incrementTime)

      return () => clearInterval(timer)
    }
  }, [isInView, value, duration])

  return (
    <span ref={ref}>
      {value.toString().includes("±") ? "±" : ""}
      {count.toLocaleString("id-ID")}
    </span>
  )
}

export default function AnalisisPage() {
  const swot = {
    strengths: [
      "Pengalaman dalam konsultasi desa",
      "Jaringan dengan pemerintah dan lembaga",
      "Penawaran yang disesuaikan dengan kebutuhan BUMDes",
      "Model bisnis berkelanjutan dengan prospek pertumbuhan",
      "Kolaborasi strategis dengan mitra",
    ],
    weaknesses: [
      "Modal terbatas untuk ekspansi",
      "Ketergantungan pada proyek eksternal",
      "Pemanfaatan teknologi yang kurang optimal",
      "Kesadaran merek yang rendah di pasar yang lebih luas",
      "Jaringan yang terbatas",
    ],
    opportunities: [
      "Momentum pertumbuhan ekonomi desa",
      "Dukungan kebijakan untuk BUMDes",
      "Peningkatan digitalisasi di sektor pedesaan",
      "Permintaan tinggi akan pelatihan dan pendampingan",
      "Peningkatan skala melalui model kemitraan/waralaba",
    ],
    threats: [
      "Perubahan regulasi yang memengaruhi operasional",
      "Persaingan dari penyedia layanan serupa",
      "Rendahnya kesadaran akan kebutuhan profesionalisasi",
      "Ketergantungan pada kebijakan pendanaan publik",
      "Variasi teknologi dan infrastruktur menurut wilayah",
    ],
  }

  const focusAreas = [
    {
      icon: TrendingUp,
      title: "Pertumbuhan Ekonomi Inklusif",
      description:
        "Memastikan semua lapisan masyarakat desa dapat berpartisipasi dan menikmati hasil pembangunan ekonomi",
    },
    {
      icon: Lightbulb,
      title: "Literasi Digital",
      description: "Meningkatkan kemampuan masyarakat desa dalam menggunakan teknologi untuk operasional dan pemasaran",
    },
    {
      icon: Shield,
      title: "GEDSI (Gender Equality, Disability & Social Inclusion)",
      description: "Memastikan kesetaraan gender, inklusi disabilitas, dan inklusi sosial dalam semua program",
    },
  ]

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-22 overflow-hidden flex items-center justify-center">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <img
              src="/sawah.jpg" // Disarankan menggunakan gambar bertema data/peta desa
              alt="Background Analisis"
              className="w-full h-full object-cover"
            />
            {/* Overlay Hijau Gelap Natadesa dengan Transparansi */}
            <div className="absolute inset-0 bg-black/40" />
          </div>

          <div className="container relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white tracking-tight">
                Analisis & Insight
              </h1>
              <p className="text-lg md:text-xl text-white/80 text-pretty leading-relaxed">
                Analisis mendalam terhadap peluang pasar dan strategi pengembangan desa
              </p>
            </motion.div>
          </div>
        </section>

        {/* Market Analysis TAM SAM SOM */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Analisis Pasar: TAM • SAM • SOM</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Peluang pengembangan desa di Indonesia</p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {/* TAM Card */}
              <motion.div {...fadeUp}>
                <Card className="border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-default">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="flex items-center gap-3">
                      <Target className="h-8 w-8 text-primary" />
                      TAM (Total Addressable Market)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-4xl font-bold text-primary mb-2">
                          <Counter value="83971" />
                        </p>
                        <p className="text-muted-foreground">Desa di Indonesia</p>
                      </div>
                      <MapPin className="h-16 w-16 text-primary/20" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">Scope: Seluruh Indonesia</p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* SAM Card */}
              <motion.div {...fadeUp}>
                <Card className="border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-default">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="flex items-center gap-3">
                      <Target className="h-7 w-7 text-primary" />
                      SAM (Serviceable Addressable Market)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-4xl font-bold text-primary mb-2">
                          <Counter value="6042" />
                        </p>
                        <p className="text-muted-foreground">Desa wisata aktif</p>
                      </div>
                      <MapPin className="h-14 w-14 text-primary/20" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      Scope: Desa wisata yang sudah aktif di seluruh Indonesia
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* SOM Card */}
              <motion.div {...fadeUp}>
                <Card className="border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-default">
                  <CardHeader className="bg-primary/5">
                    <CardTitle className="flex items-center gap-3">
                      <Target className="h-6 w-6 text-primary" />
                      SOM (Serviceable Obtainable Market)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-4xl font-bold text-primary mb-2">
                          <Counter value="±1921" />
                        </p>
                        <p className="text-muted-foreground">Desa di Jawa & Bali</p>
                      </div>
                      <MapPin className="h-12 w-12 text-primary/20" />
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">Scope: Target pasar awal yang paling feasible</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeUp} className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
                <p className="font-semibold text-lg">
                  Terdapat ruang lingkup yang besar untuk pengembangan desa berkelanjutan secara nasional.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SWOT Analysis Section */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Analisa SWOT</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Analisis SWOT membantu memprioritaskan strategi yang memanfaatkan kekuatan dan peluang sekaligus
                meminimalkan kelemahan dan ancaman
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
              {/* Strengths */}
              <motion.div {...fadeUp}>
                <Card className="border-green-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-default">
                  <CardHeader className="bg-green-50">
                    <CardTitle className="flex items-center gap-2 text-green-700">
                      <CheckCircle className="h-6 w-6" />
                      Kekuatan (Strengths)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      {swot.strengths.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-green-600 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Weaknesses */}
              <motion.div {...fadeUp}>
                <Card className="border-amber-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-default">
                  <CardHeader className="bg-amber-50">
                    <CardTitle className="flex items-center gap-2 text-amber-700">
                      <AlertCircle className="h-6 w-6" />
                      Kelemahan (Weaknesses)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      {swot.weaknesses.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-amber-600 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Opportunities */}
              <motion.div {...fadeUp}>
                <Card className="border-blue-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-default">
                  <CardHeader className="bg-blue-50">
                    <CardTitle className="flex items-center gap-2 text-blue-700">
                      <Lightbulb className="h-6 w-6" />
                      Peluang (Opportunities)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      {swot.opportunities.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Threats */}
              <motion.div {...fadeUp}>
                <Card className="border-red-500 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-default">
                  <CardHeader className="bg-red-50">
                    <CardTitle className="flex items-center gap-2 text-red-700">
                      <Shield className="h-6 w-6" />
                      Ancaman (Threats)
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-2">
                      {swot.threats.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-red-600 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Focus Areas Section with Background Image */}
        <section className="relative py-24 overflow-hidden">
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <img
              src="/sawah.jpg"
              alt="Background Sawah"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
          </div>

          <div className="container relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div {...fadeUp} className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-white">Fokus Area</h2>
              <p className="max-w-2xl mx-auto text-white/80">
                Bidang prioritas dalam pengembangan desa berkelanjutan
              </p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              {focusAreas.map((area, index) => (
                <motion.div key={index} {...fadeUp}>
                  {/* Update: 
              1. bg-white/10 agar lebih gelap & transparan
              2. hover:bg-white/20 untuk efek hover yang elegan
          */}
                  <Card className="transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-default h-full bg-white/10 backdrop-blur-lg border-white/20 group">
                    <CardContent className="pt-6">
                      {/* Icon warna primer yang sedikit lebih terang agar tetap terlihat */}
                      <area.icon className="h-12 w-12 text-primary mb-4 transition-transform group-hover:scale-110 duration-300" />

                      {/* Teks diubah menjadi putih */}
                      <h3 className="font-semibold mb-3 text-white text-lg">{area.title}</h3>
                      <p className="text-sm text-white/70 leading-relaxed">
                        {area.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
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