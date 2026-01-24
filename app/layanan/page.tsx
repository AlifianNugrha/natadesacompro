"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
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

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-balance">Produk dan Layanan</h1>
              <p className="text-lg text-muted-foreground mb-4 text-pretty leading-relaxed">
                Natadesa menyediakan layanan terpadu untuk mengorganisir desa-desa dan membuka jalan bagi mata
                pencaharian yang berkelanjutan
              </p>
              <p className="text-xl font-semibold text-primary text-balance">
                Empat penawaran untuk membangun usaha desa yang kuat, digital, dan siap pasar
              </p>
            </div>
          </div>
        </section>

        {/* Overview Layanan - 4 Main Service Cards */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              {services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <service.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base font-medium text-primary/80">
                      {service.tagline}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{service.description}</p>

                    <Button
                      variant="ghost"
                      className="w-full justify-between"
                      onClick={() => setExpandedService(expandedService === index ? null : index)}
                    >
                      <span>Lihat Detail</span>
                      {expandedService === index ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </Button>

                    {expandedService === index && (
                      <div className="space-y-4 pt-4 border-t animate-in slide-in-from-top-2">
                        {service.details && (
                          <div>
                            <h4 className="font-semibold mb-2">Detail Layanan:</h4>
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
                                <h4 className="font-semibold mb-2">{cat.name}:</h4>
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
                            <h4 className="font-semibold">Platform Digital:</h4>
                            {service.platforms.map((platform, i) => (
                              <div key={i}>
                                <h5 className="font-medium text-sm mb-1">
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
                            <h4 className="font-semibold">Jenis Usaha yang Didampingi:</h4>
                            {service.businessTypes.map((type, i) => (
                              <div key={i}>
                                <h5 className="font-medium text-sm mb-1">
                                  {type.icon} {type.name}
                                </h5>
                                <p className="text-sm text-muted-foreground ml-6">{type.examples.join(", ")}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {service.deliverables && (
                          <div>
                            <h4 className="font-semibold mb-2">Deliverables:</h4>
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
                            <h4 className="font-semibold mb-2">Ideal Untuk:</h4>
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
                            <h4 className="font-semibold mb-2">Khusus Untuk:</h4>
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
                            <h4 className="font-semibold mb-2">Keunggulan Teknologi Kami:</h4>
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
                            <h4 className="font-semibold mb-2">Paket Layanan:</h4>
                            <div className="space-y-2">
                              {service.packages.map((pkg, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm">
                                  <span className="font-medium">📦 {pkg.name}:</span>
                                  <span className="text-muted-foreground">{pkg.desc}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    <Button className="w-full mt-4" asChild>
                      <Link href="/kontak">{service.cta} →</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Proses Kerja - How We Work */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Bagaimana Kami Bekerja</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Proses terstruktur dari perencanaan hingga keberlanjutan
              </p>
            </div>

            <div className="relative">
              {/* Timeline line - hidden on mobile */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 -translate-x-1/2" />

              <div className="space-y-8">
                {workProcess.map((step, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row gap-6 items-center ${
                      index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content Card */}
                    <div className="flex-1 w-full">
                      <Card className="hover:shadow-lg transition-shadow">
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="p-2 rounded-lg bg-primary/10">
                              <step.icon className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-primary">Tahap {step.number}</div>
                              <h3 className="font-bold text-lg">{step.title}</h3>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {step.items.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Center Circle */}
                    <div className="hidden md:flex relative z-10 flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-lg">
                        {step.number}
                      </div>
                    </div>

                    {/* Spacer for alternating layout */}
                    <div className="hidden md:block flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Keunggulan Layanan */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Mengapa Memilih Natadesa?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Faktor-faktor yang membuat kami menjadi partner terbaik untuk pembangunan desa
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {advantages.map((advantage, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <advantage.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">{advantage.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Layanan - Case Studies */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Proyek yang Telah Kami Kerjakan</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Pengalaman nyata dari berbagai jenis layanan kami
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {portfolioProjects.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
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
                    <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                      <Link href="/portfolio">Lihat Detail →</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button size="lg" variant="outline" asChild>
                <Link href="/portfolio">Lihat Semua Portfolio →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Layanan */}
        <section className="py-16">
          <div className="container max-w-4xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Pertanyaan yang Sering Diajukan</h2>
              <p className="text-muted-foreground">Jawaban atas pertanyaan umum tentang layanan kami</p>
            </div>
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
          </div>
        </section>

        {/* Tools & Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Tools & Sumber Daya</h2>
              <p className="text-muted-foreground">Download resources gratis untuk membantu desa Anda</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Download className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Template Business Plan Desa Wisata</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Panduan lengkap membuat business plan untuk desa wisata
                  </p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Download className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Checklist Digitalisasi Desa</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Checklist lengkap untuk transformasi digital desa
                  </p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Download className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Panduan Social Media untuk BUMDes</h3>
                  <p className="text-sm text-muted-foreground mb-4">Strategi social media marketing untuk BUMDes</p>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section with Form */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
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
              </div>

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
            </div>

            <div className="flex flex-wrap gap-4 justify-center mt-12">
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
              >
                <Download className="mr-2 h-5 w-5" />
                Download Company Profile
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
