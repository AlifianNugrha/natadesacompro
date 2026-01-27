"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

import {
  MapIcon,
  Users,
  Laptop,
  Briefcase,
  Target,
  Copy,
  Globe,
  Handshake,
  Heart,
  Award,
  CheckCircle,
  Search,
  FileText,
  Rocket,
  BarChart3,
  Sprout,
  Phone,
  Mail,
  MessageSquare,
  Calendar,
  Download,
  ChevronDown,
  ChevronUp,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function LayananPage() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  const services = [
    {
      icon: MapIcon,
      title: "Rencana Jangka Panjang Desa",
      tagline: "Pembangunan desa yang strategis",
      description:
        "Pemetaan partisipatif, perencanaan, implementasi, dan peta jalan keberlanjutan untuk pertumbuhan desa",
      details: [
        "Pemetaan potensi desa secara partisipatif",
        "Perencanaan strategis jangka panjang",
        "Master plan pengembangan kawasan",
        "Roadmap implementasi bertahap",
        "Perencanaan spasial dan tata ruang",
        "Sustainability roadmap",
        "Penyusunan dokumen rencana induk",
      ],
      deliverables: [
        "Dokumen Master Plan Desa",
        "Peta Potensi & Zonasi",
        "Rencana Implementasi 5 Tahun",
        "Business Model Canvas",
      ],
      idealFor: [
        "Desa wisata baru",
        "BUMDes yang ingin ekspansi",
        "Pokdarwis yang butuh arah strategis",
        "Pemerintah desa untuk perencanaan pembangunan",
      ],
      cta: "Konsultasi Perencanaan Desa",
    },
    {
      icon: Users,
      title: "Peningkatan Kapasitas HR",
      tagline: "Pengembangan keterampilan untuk daya saing",
      description:
        "Program-program keterampilan teknis & non-teknis, pelatihan manajerial, dan literasi digital yang disesuaikan untuk usaha di daerah pedesaan",
      categories: [
        {
          name: "Pelatihan Teknis",
          items: [
            "Manajemen keuangan & pembukuan",
            "Standardisasi produksi",
            "Quality control produk",
            "Packaging & branding",
            "Manajemen inventori",
          ],
        },
        {
          name: "Pelatihan Non-Teknis",
          items: [
            "Leadership & organizational management",
            "Customer service excellence",
            "Team building & collaboration",
            "Komunikasi efektif",
          ],
        },
        {
          name: "Literasi Digital",
          items: [
            "Pemasaran digital & social media",
            "E-commerce & marketplace",
            "Content creation (foto, video)",
            "Online payment & fintech",
            "Digital bookkeeping",
          ],
        },
        {
          name: "Pelatihan Manajerial",
          items: ["Business planning", "Strategic management", "Risk management", "Performance monitoring"],
        },
      ],
      formats: [
        "Workshop intensif",
        "Pelatihan bertahap",
        "Mentoring 1-on-1",
        "Online learning modules",
        "Train the trainer",
      ],
      targetAudience: [
        "KDMP (Kelompok Daya Masyarakat Produktif)",
        "Pengurus BUMDes",
        "Pengelola desa wisata",
        "UMKM pedesaan",
        "Dinas terkait di tingkat kabupaten",
      ],
      cta: "Daftar Pelatihan",
    },
    {
      icon: Laptop,
      title: "Digitalisasi dan Teknologi",
      tagline: "Alat untuk operasional yang transparan",
      description:
        "Situs web, media sosial, POS/ERP, dan marketplace melalui bisnisdesa.id untuk memungkinkan operasional yang efisien dalam kondisi konektivitas rendah",
      platforms: [
        {
          name: "Website Development",
          icon: "🌐",
          features: [
            "Website BUMDes professional",
            "Website desa wisata",
            "Booking system terintegrasi",
            "Multi-language support",
            "Mobile responsive",
            "SEO optimized",
          ],
        },
        {
          name: "Social Media Management",
          icon: "📱",
          features: [
            "Setup akun bisnis (Instagram, Facebook, TikTok)",
            "Content strategy & calendar",
            "Graphic design templates",
            "Community management training",
            "Analytics & reporting",
          ],
        },
        {
          name: "POS/ERP System",
          icon: "💳",
          features: [
            "Point of Sale untuk objek wisata",
            "Inventory management",
            "Financial reporting",
            "Multi-outlet support",
            "Offline mode capability",
            "Cloud backup",
          ],
        },
        {
          name: "Marketplace Integration",
          icon: "🛒",
          features: [
            "Integrasi ke bisnisdesa.id",
            "Product listing & management",
            "Order processing system",
            "Payment gateway integration",
            "Logistics coordination",
          ],
        },
      ],
      specialSystems: [
        {
          name: "RFID System",
          features: [
            "Ticketing automation",
            "Visitor tracking",
            "Cashless payment",
            "Real-time monitoring",
            "(Contoh: Umbul Ponggok)",
          ],
        },
        {
          name: "Dashboard Analytics",
          features: [
            "Real-time sales monitoring",
            "Visitor statistics",
            "Revenue analytics",
            "Performance KPIs",
            "Custom reports",
          ],
        },
      ],
      advantages: [
        "Optimized untuk konektivitas rendah",
        "User-friendly untuk literasi teknologi dasar",
        "Operasional transparan & akuntabel",
        "Cloud-based dengan offline capability",
        "Affordable pricing untuk desa",
      ],
      cta: "Demo Platform",
    },
    {
      icon: Briefcase,
      title: "Bantuan Manajemen Bisnis",
      tagline: "Dari konsep hingga operasional",
      description: "Usaha pariwisata, agrowisata, kesehatan, budaya, dan lingkungan dengan panduan menyeluruh",
      businessPlanning: [
        "Market research & feasibility study",
        "Business model development",
        "Financial projection (3-5 tahun)",
        "Risk assessment",
        "Investment requirements",
      ],
      operationalSetup: [
        "SOP (Standard Operating Procedures)",
        "Organizational structure",
        "Job descriptions",
        "Workflow optimization",
        "Quality standards",
      ],
      businessTypes: [
        {
          icon: "🏞️",
          name: "Pariwisata & Desa Wisata",
          examples: [
            "Objek wisata alam",
            "Wisata budaya",
            "Wisata edukasi",
            "Adventure tourism",
            "Glamping & homestay",
          ],
        },
        {
          icon: "🌾",
          name: "Agrowisata",
          examples: [
            "Farm tourism",
            "Organic farming experience",
            "Harvest experience",
            "Agro-processing",
            "Farm-to-table concepts",
          ],
        },
        {
          icon: "🏥",
          name: "Kesehatan & Wellness",
          examples: ["Eco-therapy retreat", "Herbal tourism", "Traditional healing center", "Wellness programs"],
        },
        {
          icon: "🎭",
          name: "Budaya & Heritage",
          examples: [
            "Cultural performance venues",
            "Traditional craft centers",
            "Heritage conservation",
            "Cultural festivals",
          ],
        },
        {
          icon: "🌿",
          name: "Lingkungan & Konservasi",
          examples: ["Eco-tourism", "Conservation projects", "Environmental education", "Green economy initiatives"],
        },
      ],
      packages: [
        { name: "Starter", desc: "Business plan + Setup consultation" },
        { name: "Growth", desc: "Full setup + 6 bulan pendampingan" },
        { name: "Premium", desc: "Full management + ongoing support" },
      ],
      cta: "Konsultasi Bisnis",
    },
  ]

  const workProcess = [
    {
      number: 1,
      icon: Search,
      title: "Discovery & Assessment",
      items: [
        "Kunjungan lapangan",
        "Pemetaan potensi",
        "Analisis kondisi eksisting",
        "Identifikasi kebutuhan",
        "Stakeholder meeting",
      ],
    },
    {
      number: 2,
      icon: FileText,
      title: "Planning & Strategy",
      items: [
        "Penyusunan rencana strategis",
        "Design & blueprint",
        "Financial modeling",
        "Risk assessment",
        "Approval & agreement",
      ],
    },
    {
      number: 3,
      icon: Rocket,
      title: "Implementation",
      items: [
        "Execution sesuai timeline",
        "Training & capacity building",
        "Technology implementation",
        "Quality control",
        "Progress monitoring",
      ],
    },
    {
      number: 4,
      icon: BarChart3,
      title: "Monitoring & Evaluation",
      items: ["Performance tracking", "Impact assessment", "Problem-solving", "Optimization", "Reporting"],
    },
    {
      number: 5,
      icon: Sprout,
      title: "Sustainability",
      items: [
        "Continuous improvement",
        "Knowledge transfer",
        "Community empowerment",
        "Long-term partnership",
        "Scale-up opportunities",
      ],
    },
  ]

  const advantages = [
    {
      icon: Target,
      title: "Solusi Khusus Desa",
      description: "Desain disesuaikan karakter lokal, implementasi tepat sasaran, cultural sensitivity",
    },
    {
      icon: Copy,
      title: "Model Replikasi",
      description: "Model MVP yang terbukti, mudah direplikasi lintas wilayah, scalable & sustainable",
    },
    {
      icon: Globe,
      title: "Integrasi Digital",
      description: "Platform bisnisdesa.id, operasional efisien & transparan, akuntabel & terukur",
    },
    {
      icon: Handshake,
      title: "Kemitraan Strategis",
      description:
        "Kolaborasi lintas sektor, jaringan luas (pemerintah, universitas, korporat), akses ke funding & market",
    },
    {
      icon: Heart,
      title: "Keterlibatan Komunitas",
      description: "Partisipatif dari awal, community ownership, rasa memiliki yang kuat",
    },
    {
      icon: Award,
      title: "Track Record Terbukti",
      description: "20+ proyek selesai, pengalaman di 5 provinsi, success stories nyata",
    },
  ]

  const portfolioProjects = [
    {
      title: "Desa Ponggok - Fish & Farm",
      service: "Rencana Jangka Panjang + Teknologi",
      location: "Klaten, Jawa Tengah",
      year: "2024",
      brief: "Master planning + RFID system",
      image: "/ponggok-fish-farm-sustainable-village.jpg",
    },
    {
      title: "Pelatihan KDMP Brebes",
      service: "Peningkatan Kapasitas",
      location: "Brebes, Jawa Tengah",
      year: "2025",
      brief: "Training untuk KDMP",
      image: "/training-session-in-village-community.jpg",
    },
    {
      title: "BUMDes Tirta Mandiri Website",
      service: "Digitalisasi",
      location: "Klaten, Jawa Tengah",
      year: "2024",
      brief: "Website development",
      image: "/website-dashboard-bumdes.jpg",
    },
    {
      title: "Delanggu Ecopark Management",
      service: "Manajemen Bisnis",
      location: "Klaten, Jawa Tengah",
      year: "2024",
      brief: "Operational management",
      image: "/delanggu-eco-park-sustainable-tourism.jpg",
    },
  ]

  const faqs = [
    {
      q: "Berapa lama waktu yang dibutuhkan untuk perencanaan desa?",
      a: "Tergantung kompleksitas, umumnya 2-4 bulan dari assessment hingga dokumen final.",
    },
    {
      q: "Apakah layanan bisa disesuaikan dengan budget desa?",
      a: "Ya, kami menyediakan paket fleksibel sesuai kebutuhan dan budget.",
    },
    {
      q: "Apakah ada pendampingan pasca-implementasi?",
      a: "Ya, kami menyediakan monitoring dan evaluasi berkelanjutan.",
    },
    {
      q: "Bagaimana cara mendaftar pelatihan?",
      a: "Hubungi kami melalui form kontak atau WhatsApp untuk informasi jadwal pelatihan.",
    },
    {
      q: "Apakah platform bisnisdesa.id gratis?",
      a: "Ada paket gratis dengan fitur dasar, dan paket berbayar untuk fitur lengkap.",
    },
    {
      q: "Wilayah mana saja yang dilayani?",
      a: "Kami melayani seluruh Indonesia, dengan fokus awal Jawa & Bali.",
    },
  ]

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
        {/* Hero Section */}
        <section className="relative py-20 bg-[#172317]">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold mb-6 text-white"
              >
                Produk dan Layanan
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-white mb-4 text-pretty leading-relaxed"
              >
                Natadesa menyediakan layanan terpadu untuk mengorganisir desa-desa dan membuka jalan bagi mata
                pencaharian yang berkelanjutan
              </motion.p>
            </div>
          </div>
        </section>
        {/* Overview Layanan - 4 Main Service Cards */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 items-stretch">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col h-full"
                >
                  <Card className="flex flex-col h-full transition-shadow hover:shadow-lg rounded-none border-primary/20">
                    <CardHeader className="flex-none">
                      <service.icon className="h-12 w-12 text-primary mb-4" />
                      <CardTitle className="text-2xl">{service.title}</CardTitle>
                      <CardDescription className="text-base font-medium text-primary/80 normal-case">
                        {service.tagline}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex flex-col flex-grow space-y-4">
                      <p className="text-muted-foreground">{service.description}</p>

                      <Button
                        variant="ghost"
                        className="w-full justify-between rounded-none border-y border-transparent hover:bg-[#fa9223] border-primary/10 normal-case"
                        onClick={() => setExpandedService(expandedService === index ? null : index)}
                      >
                        <span>Lihat detail</span>
                        {expandedService === index ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>

                      {expandedService === index && (
                        <div className="space-y-4 pt-4 border-t border-primary/10 animate-in slide-in-from-top-2">
                          {service.details && (
                            <div>
                              <h4 className="font-semibold mb-2 normal-case">Detail layanan:</h4>
                              <ul className="space-y-1">
                                {service.details.map((detail, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                    <span>{detail}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {service.categories && (
                            <div className="space-y-3">
                              {service.categories.map((cat, i) => (
                                <div key={i}>
                                  <h4 className="font-semibold mb-2 normal-case">{cat.name}:</h4>
                                  <ul className="space-y-1">
                                    {cat.items.map((item, j) => (
                                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}

                          {service.platforms && (
                            <div className="space-y-3">
                              <h4 className="font-semibold normal-case">Platform digital:</h4>
                              {service.platforms.map((platform, i) => (
                                <div key={i}>
                                  <h5 className="font-medium text-sm mb-1 normal-case">
                                    {platform.icon} {platform.name}
                                  </h5>
                                  <ul className="space-y-1">
                                    {platform.features.map((feature, j) => (
                                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground ml-6">
                                        <CheckCircle className="h-3 w-3 text-primary flex-shrink-0 mt-1" />
                                        <span>{feature}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}

                          {service.businessTypes && (
                            <div className="space-y-3">
                              <h4 className="font-semibold normal-case">Jenis usaha yang didampingi:</h4>
                              {service.businessTypes.map((type, i) => (
                                <div key={i}>
                                  <h5 className="font-medium text-sm mb-1 normal-case">
                                    {type.icon} {type.name}
                                  </h5>
                                  <p className="text-sm text-muted-foreground ml-6">{type.examples.join(", ")}</p>
                                </div>
                              ))}
                            </div>
                          )}

                          {service.deliverables && (
                            <div>
                              <h4 className="font-semibold mb-2 normal-case">Deliverables:</h4>
                              <ul className="space-y-1">
                                {service.deliverables.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {service.idealFor && (
                            <div>
                              <h4 className="font-semibold mb-2 normal-case">Ideal untuk:</h4>
                              <ul className="space-y-1">
                                {service.idealFor.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {service.targetAudience && (
                            <div>
                              <h4 className="font-semibold mb-2 normal-case">Khusus untuk:</h4>
                              <ul className="space-y-1">
                                {service.targetAudience.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {service.advantages && (
                            <div>
                              <h4 className="font-semibold mb-2 normal-case">Keunggulan teknologi kami:</h4>
                              <ul className="space-y-1">
                                {service.advantages.map((item, i) => (
                                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {service.packages && (
                            <div>
                              <h4 className="font-semibold mb-2 normal-case">Paket layanan:</h4>
                              <div className="space-y-2">
                                {service.packages.map((pkg, i) => (
                                  <div key={i} className="flex items-start gap-2 text-sm">
                                    <span className="font-medium normal-case">📦 {pkg.name}:</span>
                                    <span className="text-muted-foreground">{pkg.desc}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Spacer pushed button to the bottom */}
                      <div className="mt-auto pt-4">
                        <Button className="w-full rounded-none" asChild>
                          <Link href="/kontak">{service.cta} →</Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Proses Kerja - How We Work */}
        <section className="py-16 bg-muted/30 relative overflow-hidden">
          {/* Ref untuk tracking scroll di section ini */}
          <div ref={containerRef} className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2 /* ... props */ >Bagaimana Kami Bekerja</motion.h2>
              <motion.p /* ... props */ >
                Proses terstruktur dari perencanaan hingga keberlanjutan
              </motion.p>
            </div>

            <div className="relative">
              {/* Background Line (Garis Abu-abu Statis) */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/10 -translate-x-1/2" />

              {/* Animated Progress Line (Garis Biru Mengikuti Scroll) */}
              <motion.div
                className="hidden md:block absolute left-1/2 top-0 w-0.5 bg-primary origin-top -translate-x-1/2"
                style={{
                  scaleY,
                  height: '100%'
                }}
              />

              <div className="space-y-12">
                {workProcess.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                    className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                      }`}
                  >
                    {/* Content Card */}
                    <div className="flex-1 w-full">
                      <Card className="hover:shadow-lg transition-shadow border-none bg-background/60 backdrop-blur-sm">
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-3 mb-4">
                            <div className="p-2 rounded-lg bg-primary/10">
                              <step.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <div className="text-xs font-bold uppercase tracking-wider text-primary/60">
                                Tahap {step.number}
                              </div>
                              <h3 className="font-bold text-xl">{step.title}</h3>
                            </div>
                          </div>
                          <ul className="space-y-3">
                            {step.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Center Circle Indicator */}
                    <div className="hidden md:flex relative z-20 flex-shrink-0">
                      <motion.div
                        whileInView={{ scale: [0.8, 1.2, 1], backgroundColor: ["#ccc", "#172131"] }}
                        className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold shadow-xl border-4 border-background"
                      >
                        {step.number}
                      </motion.div>
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block flex-1" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Keunggulan Layanan */}
        <section className="relative py-20 overflow-hidden">
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <img
              src="/sawah.jpg"
              alt="Background Sawah"
              className="w-full h-full object-cover"
            />
            {/* Overlay Gelap agar card putih terlihat kontras */}
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="container relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-3 text-white"
              >
                Mengapa Memilih Natadesa?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-200 max-w-xl mx-auto text-sm"
              >
                Faktor utama yang membuat kami menjadi partner terbaik pembangunan desa.
              </motion.p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  {/* Card Putih Solid & Lebih Kecil/Compact */}
                  <Card className="bg-white border-none shadow-xl hover:scale-[1.02] transition-transform duration-300">
                    <CardContent className="p-5">
                      <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary/10 mb-4">
                        <advantage.icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="font-bold mb-2 text-base text-slate-900">
                        {advantage.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {advantage.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Portfolio Layanan - Case Studies */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-4"
              >
                Proyek yang Telah Kami Kerjakan
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground max-w-2xl mx-auto"
              >
                Pengalaman nyata dari berbagai jenis layanan kami
              </motion.p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {portfolioProjects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="pt-4">
                      <div className="text-xs font-medium text-primary mb-2">{project.service}</div>
                      <h3 className="font-semibold mb-2 text-balance">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{project.location}</p>
                      <p className="text-sm text-muted-foreground mb-2">{project.year}</p>
                      <p className="text-sm mb-3">{project.brief}</p>
                      <Button variant="outline" size="sm" className="w-full bg-white hover:bg-[#fa9223]" asChild>
                        <Link href="/portfolio">Lihat Detail →</Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button size="lg" variant="outline" className="bg-white hover:bg-[#fa9223]" asChild>
                <Link href="/portfolio">Lihat Semua Portfolio →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Layanan */}
        <section className="py-16">
          <div className="container max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-4"
              >
                Pertanyaan yang Sering Diajukan
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground"
              >
                Jawaban atas pertanyaan umum tentang layanan kami
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <span className="font-semibold">{faq.q}</span>
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* Tools & Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-4"
              >
                Tools & Sumber Daya
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-muted-foreground"
              >
                Download resources gratis untuk membantu desa Anda
              </motion.p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "E-Book PEran Media Sosial Untuk Bumdes",
                  desc: "Panduan lengkap membuat business plan untuk desa wisata",
                  link: "https://drive.google.com/file/d/1BsB3ToaJH4DN_oykLkhdmkJixcQoezCD/view?usp=sharing" // Ganti dengan link PDF 1
                },
                {
                  title: "E-Book Manajemen Bumdes",
                  desc: "Checklist lengkap untuk transformasi digital desa",
                  link: "https://drive.google.com/file/d/1dXQ4jupUYWAOc0oBo81IghmUETAX_NEC/view?usp=sharing" // Ganti dengan link PDF 2
                },
                {
                  title: "Identifikasi Produk Unggulan Bumdes",
                  desc: "Strategi social media marketing untuk BUMDes",
                  link: "https://drive.google.com/file/d/1hbXzvvQMdgkFRUOnvs4a0Zlekn2yHSs-/view?usp=sharing" // Ganti dengan link PDF 3
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <Download className="h-8 w-8 text-primary mb-3" />
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>

                      {/* Menggunakan tag <a> agar tombol berfungsi sebagai link download */}
                      <a href={item.link} download target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="sm" className="w-full bg-transparent">
                          Download PDF
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with Form */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4 text-balance">Siap Transformasi Desa Anda?</h2>
                <p className="text-lg mb-6 opacity-90 text-pretty leading-relaxed">
                  Konsultasikan kebutuhan desa Anda dengan tim expert kami. Konsultasi awal GRATIS!
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    <div>
                      <div className="text-sm opacity-80">WhatsApp</div>
                      <div className="font-semibold">0882-0063-78745</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5" />
                    <div>
                      <div className="text-sm opacity-80">Email</div>
                      <div className="font-semibold">hello@bisnisdesa.id</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Card className="bg-background text-foreground">
                  <CardContent className="pt-6">
                    <form className="space-y-4">
                      <div>
                        <Input placeholder="Nama Lengkap" className="bg-background" />
                      </div>
                      <div>
                        <Input placeholder="Nama Desa/BUMDes" className="bg-background" />
                      </div>
                      <div>
                        <Input placeholder="Kabupaten/Provinsi" className="bg-background" />
                      </div>
                      <div>
                        <Input placeholder="No. WhatsApp" className="bg-background" />
                      </div>
                      <div>
                        <select className="w-full h-10 px-3 rounded-md border border-input bg-background">
                          <option value="">Layanan yang Diminati</option>
                          <option>Rencana Jangka Panjang Desa</option>
                          <option>Peningkatan Kapasitas HR</option>
                          <option>Digitalisasi dan Teknologi</option>
                          <option>Bantuan Manajemen Bisnis</option>
                        </select>
                      </div>
                      <div>
                        <Textarea placeholder="Pesan (optional)" className="bg-background" rows={3} />
                      </div>
                      <Button type="submit" className="w-full" size="lg">
                        Konsultasi Gratis
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center mt-12"
            >
              <Button size="lg" variant="secondary" asChild>
                <Link href="/kontak">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Live Chat
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/kontak">
                  <Calendar className="mr-2 h-5 w-5" />
                  Jadwalkan Meeting
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a
                  href="https://drive.google.com/file/d/1WiQJcSd8FrrU_rjYAcEYH-YMqfHzMWxn/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Company_Profile_Natadesa.pdf"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Company Profile
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}