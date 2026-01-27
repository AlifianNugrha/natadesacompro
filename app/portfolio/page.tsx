"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"


import {
  MapPin,
  Calendar,
  FileText,
  GraduationCap,
  Laptop,
  Star,
  Search,
  Download,
  ArrowRight,
  Users,
  Building2,
  TrendingUp,
  CheckCircle2,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function PortfolioPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedYear, setSelectedYear] = useState("all")
  const [selectedProvince, setSelectedProvince] = useState("all")

  const masterPlanProjects = [
    {
      year: "2025",
      name: "Desa Cisitu",
      kecamatan: "Cisitu",
      kabupaten: "Sumedang",
      provinsi: "Jawa Barat",
      kategori: "Rencana Induk Desa",
      badge: "NEW",
    },
    {
      year: "2025",
      name: "Desa Grenggeng",
      kecamatan: "Karanganyar",
      kabupaten: "Kebumen",
      provinsi: "Jawa Tengah",
      kategori: "Rencana Induk Desa",
      badge: "NEW",
    },
    {
      year: "2025",
      name: "Desa Loa Lepu",
      kecamatan: "Tenggarong Selatan",
      kabupaten: "Kutai Kartanegara",
      provinsi: "Kalimantan Timur",
      kategori: "Rencana Induk Desa",
      badge: "NEW",
    },
    {
      year: "2025",
      name: "Desa Muara Muntai Ilir",
      kecamatan: "Muara Muntai",
      kabupaten: "Kutai Kartanegara",
      provinsi: "Kalimantan Timur",
      kategori: "Rencana Induk Desa",
      badge: "NEW",
    },
    {
      year: "2025",
      name: "Desa Bumi Etam",
      kecamatan: "Kaubun",
      kabupaten: "Kutai Timur",
      provinsi: "Kalimantan Timur",
      kategori: "Rencana Induk Desa",
      badge: "NEW",
    },
    {
      year: "2024",
      name: 'RW 01 Desa Ponggok "Fish and Farm"',
      kecamatan: "Polanharjo",
      kabupaten: "Klaten",
      provinsi: "Jawa Tengah",
      kategori: "Rencana Induk Kawasan",
      badge: "FEATURED",
    },
    {
      year: "2024",
      name: "Desa Gatak",
      kecamatan: "Delanggu",
      kabupaten: "Klaten",
      provinsi: "Jawa Tengah",
      kategori: "Rencana Induk Desa",
    },
    {
      year: "2024",
      name: "Desa Manggis",
      kecamatan: "Teras",
      kabupaten: "Boyolali",
      provinsi: "Jawa Tengah",
      kategori: "Rencana Induk Desa",
    },
    {
      year: "2024",
      name: "Desa Barudua",
      kecamatan: "Malangbong",
      kabupaten: "Garut",
      provinsi: "Jawa Barat",
      kategori: "Rencana Induk Desa",
    },
    {
      year: "2024",
      name: 'Objek Wisata "Padidipa"',
      kecamatan: "Mojosongo",
      kabupaten: "Boyolali",
      provinsi: "Jawa Tengah",
      kategori: "Rencana Objek Wisata",
      badge: "FEATURED",
    },
    {
      year: "2023",
      name: "Desa Motongbang",
      kecamatan: "Teluk Mutirara",
      kabupaten: "Alor",
      provinsi: "Nusa Tenggara Timur",
      kategori: "Rencana Induk Desa",
      cluster: "Alor Development Program",
    },
    {
      year: "2023",
      name: "Desa Lewalu",
      kecamatan: "Alor Barat Laut",
      kabupaten: "Alor",
      provinsi: "Nusa Tenggara Timur",
      kategori: "Rencana Induk Desa",
      cluster: "Alor Development Program",
    },
    {
      year: "2023",
      name: "Desa Kopidil",
      kecamatan: "Kabola",
      kabupaten: "Alor",
      provinsi: "Nusa Tenggara Timur",
      kategori: "Rencana Induk Desa",
      cluster: "Alor Development Program",
    },
    {
      year: "2023",
      name: "Desa Alila Selatan",
      kecamatan: "Alor Barat Laut",
      kabupaten: "Alor",
      provinsi: "Nusa Tenggara Timur",
      kategori: "Rencana Induk Desa",
      cluster: "Alor Development Program",
    },
    {
      year: "2023",
      name: "Desa Pintumas",
      kecamatan: "Alor Barat Daya",
      kabupaten: "Alor",
      provinsi: "Nusa Tenggara Timur",
      kategori: "Rencana Induk Desa",
      cluster: "Alor Development Program",
    },
    {
      year: "2022",
      name: "Desa Teluk Bakau",
      kecamatan: "Gunung Kijang",
      kabupaten: "Bintan",
      provinsi: "Kepulauan Riau",
      kategori: "Rencana Induk Desa",
      cluster: "Bintan Island Development",
    },
    {
      year: "2022",
      name: "Desa Gunung Kijang",
      kecamatan: "Gunung Kijang",
      kabupaten: "Bintan",
      provinsi: "Kepulauan Riau",
      kategori: "Rencana Induk Desa",
      cluster: "Bintan Island Development",
    },
    {
      year: "2021",
      name: "Desa Sidowayah",
      kecamatan: "Polanharjo",
      kabupaten: "Klaten",
      provinsi: "Jawa Tengah",
      kategori: "Rencana Induk Desa",
      badge: "FIRST PROJECT",
    },
    {
      year: "2021",
      name: "Desa Canden",
      kecamatan: "Sambi",
      kabupaten: "Boyolali",
      provinsi: "Jawa Tengah",
      kategori: "Rencana Induk Desa",
    },
    {
      year: "2021",
      name: "Desa Tibayan",
      kecamatan: "Jatinom",
      kabupaten: "Klaten",
      provinsi: "Jawa Tengah",
      kategori: "Rencana Induk Desa",
    },
  ]

  const trainingProjects = [
    {
      year: "2025",
      name: "Pelatihan KDMP Tanggeran",
      desa: "Tanggeran",
      kecamatan: "Tanjong",
      kabupaten: "Brebes",
      provinsi: "Jawa Tengah",
      jenis: "Pelatihan KDMP",
      peserta: "30+",
    },
    {
      year: "2025",
      name: "Pelatihan KDMP Rempoah",
      desa: "Rempoah",
      kecamatan: "Baturaden",
      kabupaten: "Banyumas",
      provinsi: "Jawa Tengah",
      jenis: "Pelatihan KDMP",
    },
    {
      year: "2025",
      name: "Pelatihan KDMP Dinas Pemberdayaan Masyarakat dan Pemerintahan Desa",
      kabupaten: "Kediri",
      provinsi: "Jawa Timur",
      jenis: "Pelatihan KDMP (Tingkat Kabupaten)",
      scope: "Multi-village training",
    },
    {
      year: "2025",
      name: "Pelatihan KDMP Dinas Sosial PMD",
      kabupaten: "Sukamara",
      provinsi: "Kalimantan Tengah",
      jenis: "Pelatihan KDMP (Tingkat Kabupaten)",
    },
    {
      year: "2025",
      name: "Pelatihan KDMP Dinas PPKUKM",
      kabupaten: "Paser",
      provinsi: "Kalimantan Timur",
      jenis: "Pelatihan KDMP (Tingkat Kabupaten)",
    },
    {
      year: "2025",
      name: "Pelatihan KDMP Desa Bentangan",
      desa: "Bentangan",
      kecamatan: "Wonosari",
      kabupaten: "Klaten",
      provinsi: "Jawa Tengah",
      jenis: "Pelatihan KDMP",
    },
    {
      year: "2024",
      name: "Pelatihan BUMDesa Ponggok",
      desa: "Ponggok",
      kecamatan: "Polanharjo",
      kabupaten: "Klaten",
      provinsi: "Jawa Tengah",
      jenis: "Pelatihan BUMDes",
      client: "BUMDesa Tirta Mandiri",
    },
    {
      year: "2024",
      name: "Pelatihan BUMDesa Gatak",
      desa: "Gatak",
      kecamatan: "Delanggu",
      kabupaten: "Klaten",
      provinsi: "Jawa Tengah",
      jenis: "Pelatihan BUMDes",
    },
    {
      year: "2023",
      name: 'Business Plan Objek Wisata "Jejak Bintang"',
      desa: "Karanglo",
      kecamatan: "Polanharjo",
      kabupaten: "Klaten",
      provinsi: "Jawa Tengah",
      jenis: "Business Plan - Tourism",
      deliverable: "5-Year Business Plan",
    },
    {
      year: "2023",
      name: "Business Plan BUMDesa Ponggok",
      desa: "Ponggok",
      kecamatan: "Polanharjo",
      kabupaten: "Klaten",
      provinsi: "Jawa Tengah",
      jenis: "Business Plan - BUMDes",
      client: "BUMDesa Tirta Mandiri",
    },
    {
      year: "2023",
      name: "Pelatihan SDM BUMDesa Sidowayah",
      desa: "Sidowayah",
      kecamatan: "Polanharjo",
      kabupaten: "Klaten",
      provinsi: "Jawa Tengah",
      jenis: "Pelatihan SDM BUMDes",
    },
    {
      year: "2022",
      name: 'Business Plan Objek Wisata "Soko Alas Resort"',
      desa: "Ponggok",
      kecamatan: "Polanharjo",
      kabupaten: "Klaten",
      provinsi: "Jawa Tengah",
      jenis: "Business Plan - Resort",
      type: "Private Investor Project",
    },
  ]

  const techProjects = [
    {
      year: "2024",
      name: "Pembuatan Website BUMDesa Tirta Mandiri",
      desa: "Ponggok",
      kecamatan: "Polanharjo",
      kabupaten: "Klaten",
      provinsi: "Jawa Tengah",
      teknologi: "Website Development",
      platform: "Custom CMS",
      features: [
        "Company profile",
        "Product catalog",
        "Online booking",
        "News & updates",
        "Contact form",
        "Mobile responsive",
      ],
    },
    {
      year: "2024",
      name: 'Penerapan Sistem RFID Objek Wisata "Umbul Ponggok"',
      desa: "Ponggok",
      kecamatan: "Polanharjo",
      kabupaten: "Klaten",
      provinsi: "Jawa Tengah",
      teknologi: "RFID System",
      type: "Smart Ticketing & Cashless Payment",
      innovation: "First RFID in rural tourism",
      features: [
        "RFID ticketing automation",
        "Visitor tracking",
        "Cashless payment",
        "Real-time monitoring",
        "Analytics dashboard",
      ],
    },
    {
      year: "2024",
      name: 'Jasa Pendampingan Pengelolaan Objek Wisata "Delanggu Ecopark"',
      desa: "Gatak",
      kecamatan: "Delanggu",
      kabupaten: "Klaten",
      provinsi: "Jawa Tengah",
      service: "Operational Management",
      scope: "Full operational support",
      features: [
        "Daily operations management",
        "Staff training & supervision",
        "Marketing & promotion",
        "Financial management",
        "Performance monitoring",
      ],
    },
  ]

  const showcaseProjects = [
    {
      name: "Situ Salawe",
      desa: "Baru Dua Village",
      kecamatan: "Malangbong",
      kabupaten: "Garut",
      provinsi: "Jawa Barat",
      type: "Perencanaan Obyek Wisata",
      description: "Lake tourism development with natural recreation facilities",
      image: "/situ-salawe-lake-tourism-destination.jpg",
    },
    {
      name: "Padidipa",
      desa: "Dlingo",
      kecamatan: "Mojosongo",
      kabupaten: "Boyolali",
      provinsi: "Jawa Tengah",
      type: "Perencanaan Obyek Wisata",
      description: "Educational tourism with family-friendly destination and modern facilities",
      image: "/padidipa-education-tourism.jpg",
      badge: "FEATURED",
    },
    {
      name: "Ponggok Fish & Farm",
      desa: "Ponggok",
      kecamatan: "Polanharjo",
      kabupaten: "Klaten",
      provinsi: "Jawa Tengah",
      type: "Agro-tourism Development",
      description: "Integrated farming concept with fish farming, educational tours, and farm-to-table experience",
      image: "/ponggok-fish-farm-sustainable-village.jpg",
      badge: "FEATURED",
    },
    {
      name: "Delanggu Eco Park",
      desa: "Gatak",
      kecamatan: "Delanggu",
      kabupaten: "Klaten",
      provinsi: "Jawa Tengah",
      type: "Eco-tourism Park",
      description: "Eco-friendly design with educational programs and green spaces",
      image: "/delanggu-eco-park-sustainable-tourism.jpg",
      badge: "FEATURED",
    },
    {
      name: "Ponggok Agrotechnopark",
      desa: "Ponggok",
      kecamatan: "Polanharjo",
      kabupaten: "Klaten",
      provinsi: "Jawa Tengah",
      type: "Agro-technology Center",
      status: "Planning Phase",
      description: "Modern agriculture technology with training center and research facilities",
    },
    {
      name: "Soko Alas Resort",
      desa: "Ponggok",
      kecamatan: "Polanharjo",
      kabupaten: "Klaten",
      provinsi: "Jawa Tengah",
      type: "Private Resort Development",
      client: "Private Investor",
      description: "Premium accommodation in natural setting with modern amenities",
    },
    {
      name: "Ponggok Paradeso",
      desa: "Ponggok",
      kecamatan: "Polanharjo",
      kabupaten: "Klaten",
      provinsi: "Jawa Tengah",
      type: "Tourism Development",
      partner: "CSR BNI 46",
      description: "CSR collaboration for community benefit with sustainable tourism facilities",
      badge: "CSR",
    },
    {
      name: "Bumi Tirta Village",
      desa: "Ponggok",
      kecamatan: "Polanharjo",
      kabupaten: "Klaten",
      provinsi: "Jawa Tengah",
      type: "Accommodation Development",
      category: "Homestay/Village Stay",
      partner: "CSR BNI 46",
      description: "Traditional-modern blend for comfortable accommodation with local experience",
      badge: "CSR",
    },
  ]

  const filterProjects = (projects: any[]) => {
    return projects.filter((project) => {
      const matchesSearch =
        searchQuery === "" ||
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (project.desa && project.desa.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.kabupaten?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.provinsi.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesYear = selectedYear === "all" || project.year === selectedYear
      const matchesProvince = selectedProvince === "all" || project.provinsi === selectedProvince

      return matchesSearch && matchesYear && matchesProvince
    })
  }

  const filteredMasterPlan = filterProjects(masterPlanProjects)
  const filteredTraining = filterProjects(trainingProjects)
  const filteredTech = filterProjects(techProjects)
  const filteredShowcase = filterProjects(showcaseProjects)

  const allProjects = [...masterPlanProjects, ...trainingProjects, ...techProjects]

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


  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold mb-6 text-balance">Portfolio Kami</h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Periode 2021–2025 merupakan tonggak penting bagi Natadesa dalam mengembangkan potensi desa melalui
                berbagai program pemberdayaan dan inovasi berkelanjutan di sektor pariwisata dan ekonomi lokal
              </p>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
              <div className="bg-background/80 backdrop-blur rounded-lg p-4 text-center border">
                <div className="text-2xl font-bold text-primary mb-1">20+</div>
                <div className="text-sm text-muted-foreground">Dokumen Rencana Induk</div>
              </div>
              <div className="bg-background/80 backdrop-blur rounded-lg p-4 text-center border">
                <div className="text-2xl font-bold text-primary mb-1">12+</div>
                <div className="text-sm text-muted-foreground">Pelatihan & Business Plan</div>
              </div>
              <div className="bg-background/80 backdrop-blur rounded-lg p-4 text-center border">
                <div className="text-2xl font-bold text-primary mb-1">3</div>
                <div className="text-sm text-muted-foreground">Implementasi Teknologi</div>
              </div>
              <div className="bg-background/80 backdrop-blur rounded-lg p-4 text-center border">
                <div className="text-2xl font-bold text-primary mb-1">8</div>
                <div className="text-sm text-muted-foreground">Showcase Projects</div>
              </div>
              <div className="bg-background/80 backdrop-blur rounded-lg p-4 text-center border">
                <div className="text-2xl font-bold text-primary mb-1">5</div>
                <div className="text-sm text-muted-foreground">Provinsi</div>
              </div>
            </div>
          </div>
        </section>

        <section className="sticky top-16 z-10 bg-background/95 backdrop-blur border-b py-4">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Cari nama desa, kabupaten, atau jenis proyek..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Year Filter */}
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-full md:w-[180px]">
                  <SelectValue placeholder="Semua Tahun" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Tahun</SelectItem>
                  <SelectItem value="2025">2025</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2021">2021</SelectItem>
                </SelectContent>
              </Select>

              {/* Province Filter */}
              <Select value={selectedProvince} onValueChange={setSelectedProvince}>
                <SelectTrigger className="w-full md:w-[200px]">
                  <SelectValue placeholder="Semua Provinsi" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Provinsi</SelectItem>
                  <SelectItem value="Jawa Tengah">Jawa Tengah</SelectItem>
                  <SelectItem value="Kalimantan Timur">Kalimantan Timur</SelectItem>
                  <SelectItem value="Nusa Tenggara Timur">Nusa Tenggara Timur</SelectItem>
                  <SelectItem value="Jawa Barat">Jawa Barat</SelectItem>
                  <SelectItem value="Jawa Timur">Jawa Timur</SelectItem>
                  <SelectItem value="Kepulauan Riau">Kepulauan Riau</SelectItem>
                  <SelectItem value="Kalimantan Tengah">Kalimantan Tengah</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 md:grid-cols-5 gap-2 mb-12 h-auto">
                <TabsTrigger value="all" className="whitespace-normal text-center py-3">
                  <FileText className="mr-2 h-4 w-4" />
                  Semua Portfolio
                </TabsTrigger>
                <TabsTrigger value="masterplan" className="whitespace-normal text-center py-3">
                  <FileText className="mr-2 h-4 w-4" />
                  Rencana Induk
                </TabsTrigger>
                <TabsTrigger value="training" className="whitespace-normal text-center py-3">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Pelatihan
                </TabsTrigger>
                <TabsTrigger value="tech" className="whitespace-normal text-center py-3">
                  <Laptop className="mr-2 h-4 w-4" />
                  Teknologi
                </TabsTrigger>
                <TabsTrigger value="showcase" className="whitespace-normal text-center py-3">
                  <Star className="mr-2 h-4 w-4" />
                  Showcase
                </TabsTrigger>
              </TabsList>

              {/* Semua Portfolio Tab */}
              <TabsContent value="all">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-2">Semua Portfolio</h2>
                  <p className="text-muted-foreground">43+ proyek di seluruh Indonesia (2021-2025)</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filterProjects(allProjects).map((project, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                          <Badge variant="secondary">
                            <Calendar className="mr-1 h-3 w-3" />
                            {project.year}
                          </Badge>
                          {project.badge && (
                            <Badge variant={project.badge === "FEATURED" ? "default" : "outline"}>
                              {project.badge}
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg leading-tight">{project.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          {project.desa && (
                            <div className="flex items-start gap-2 text-muted-foreground">
                              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                              <span>{project.desa}</span>
                            </div>
                          )}
                          <div className="flex items-start gap-2 text-muted-foreground">
                            <Building2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>
                              {project.kecamatan && `Kec. ${project.kecamatan}, `}Kab. {project.kabupaten}
                            </span>
                          </div>
                          <div className="flex items-start gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>{project.provinsi}</span>
                          </div>
                          {project.kategori && (
                            <Badge variant="outline" className="mt-2">
                              {project.kategori}
                            </Badge>
                          )}
                          {project.jenis && (
                            <Badge variant="outline" className="mt-2">
                              {project.jenis}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Dokumen Rencana Induk Tab */}
              <TabsContent value="masterplan">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-2">Dokumen Rencana Induk</h2>
                  <p className="text-muted-foreground">
                    Master plan komprehensif untuk pengembangan desa berkelanjutan
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">{filteredMasterPlan.length} proyek</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredMasterPlan.map((project, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                          <Badge variant="secondary">
                            <Calendar className="mr-1 h-3 w-3" />
                            {project.year}
                          </Badge>
                          {project.badge && (
                            <Badge variant={project.badge === "FEATURED" ? "default" : "outline"}>
                              {project.badge}
                            </Badge>
                          )}
                        </div>
                        <CardTitle className="text-lg leading-tight">{project.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>Kec. {project.kecamatan}</span>
                          </div>
                          <div className="flex items-start gap-2 text-muted-foreground">
                            <Building2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>Kab. {project.kabupaten}</span>
                          </div>
                          <div className="flex items-start gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>Prov. {project.provinsi}</span>
                          </div>
                          <Badge variant="outline" className="mt-2">
                            {project.kategori}
                          </Badge>
                          {project.cluster && (
                            <div className="text-xs text-muted-foreground mt-2">{project.cluster}</div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Pelatihan & Business Plan Tab */}
              <TabsContent value="training">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-2">Pelatihan & Rencana Bisnis</h2>
                  <p className="text-muted-foreground">
                    Program peningkatan kapasitas dan pengembangan business plan untuk BUMDes dan KDMP
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">{filteredTraining.length} proyek</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredTraining.map((project, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">
                            <Calendar className="mr-1 h-3 w-3" />
                            {project.year}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg leading-tight">{project.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          {project.desa && (
                            <div className="flex items-start gap-2 text-muted-foreground">
                              <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                              <span>Desa {project.desa}</span>
                            </div>
                          )}
                          {project.kecamatan && (
                            <div className="flex items-start gap-2 text-muted-foreground">
                              <Building2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                              <span>Kec. {project.kecamatan}</span>
                            </div>
                          )}
                          <div className="flex items-start gap-2 text-muted-foreground">
                            <Building2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>Kab. {project.kabupaten}</span>
                          </div>
                          <div className="flex items-start gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>Prov. {project.provinsi}</span>
                          </div>
                          <Badge variant="outline" className="mt-2">
                            {project.jenis}
                          </Badge>
                          {project.peserta && (
                            <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                              <Users className="h-3 w-3" />
                              <span>{project.peserta} peserta</span>
                            </div>
                          )}
                          {project.client && (
                            <div className="text-xs text-muted-foreground mt-2">Client: {project.client}</div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Teknologi Digital Tab */}
              <TabsContent value="tech">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-2">Implementasi Teknologi Digital</h2>
                  <p className="text-muted-foreground">
                    Solusi digital untuk meningkatkan efisiensi operasional dan transparansi
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">{filteredTech.length} proyek</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredTech.map((project, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all hover:-translate-y-1">
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary">
                            <Calendar className="mr-1 h-3 w-3" />
                            {project.year}
                          </Badge>
                          {project.innovation && <Badge variant="default">INNOVATION</Badge>}
                        </div>
                        <CardTitle className="text-lg leading-tight">{project.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 text-sm">
                          <div className="flex items-start gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>
                              Desa {project.desa}, Kec. {project.kecamatan}, Kab. {project.kabupaten}
                            </span>
                          </div>
                          <div className="flex items-start gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>Prov. {project.provinsi}</span>
                          </div>
                          {project.teknologi && (
                            <Badge variant="outline" className="mt-2">
                              <Laptop className="mr-1 h-3 w-3" />
                              {project.teknologi}
                            </Badge>
                          )}
                          {project.service && (
                            <Badge variant="outline" className="mt-2">
                              {project.service}
                            </Badge>
                          )}
                          {project.features && (
                            <div className="mt-3 space-y-1">
                              <div className="font-medium text-xs">Features:</div>
                              {project.features.slice(0, 3).map((feature: string, i: number) => (
                                <div key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                                  <CheckCircle2 className="h-3 w-3 mt-0.5 flex-shrink-0 text-primary" />
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              {/* Featured Showcase Tab */}
              <TabsContent value="showcase">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-2">Project Showcase</h2>
                  <p className="text-muted-foreground">Transformasi visual dari perencanaan hingga hasil akhir</p>
                  <p className="text-sm text-muted-foreground mt-2">{filteredShowcase.length} showcase projects</p>
                </div>
                <div className="grid gap-8 md:grid-cols-2">
                  {filteredShowcase.map((project, index) => (
                    <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden">
                      {project.image && (
                        <div className="aspect-video relative overflow-hidden bg-muted">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex items-center justify-between mb-2 flex-wrap gap-2">
                          <Badge variant={project.badge === "FEATURED" ? "default" : "outline"}>
                            {project.badge || project.type}
                          </Badge>
                          {project.status && <Badge variant="secondary">{project.status}</Badge>}
                        </div>
                        <CardTitle className="text-xl">{project.name}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                            <span>
                              Desa {project.desa}, Kec. {project.kecamatan}, Kab. {project.kabupaten},{" "}
                              {project.provinsi}
                            </span>
                          </div>
                          {project.partner && (
                            <div className="flex items-center gap-2 text-xs bg-primary/10 p-2 rounded">
                              <TrendingUp className="h-3 w-3 text-primary" />
                              <span className="font-medium">Partner: {project.partner}</span>
                            </div>
                          )}
                          {project.client && (
                            <div className="text-xs text-muted-foreground">
                              <span className="font-medium">Client:</span> {project.client}
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="relative py-20 md:py-32 overflow-hidden flex items-center justify-center">
          {/* Gambar Background Utama */}
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white tracking-tight">Pencapaian & Dampak</h2>
              <p className="text-green-50/70 max-w-2xl mx-auto text-lg">
                Dedikasi kami dalam menggerakkan ekonomi dan menjaga kelestarian desa wisata di seluruh penjuru negeri.
              </p>
            </div>

            {/* Container Grid dengan Animasi Stagger */}
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
              className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 max-w-7xl mx-auto"
            >
              {[
                { label: "Total Projects", value: 43, suffix: "+" },
                { label: "Desa Dampingan", value: 31, suffix: "" },
                { label: "Kabupaten", value: 15, suffix: "" },
                { label: "Provinsi", value: 7, suffix: "" },
                { label: "People Trained", value: 500, suffix: "+" },
                { label: "BUMDes Assisted", value: 10, suffix: "+" },
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                  whileHover={{ y: -10 }}
                  className="h-full"
                >
                  <Card className="group relative h-full overflow-hidden border-none bg-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/20 ring-1 ring-white/20 hover:ring-[#fa9223]/50 shadow-2xl">
                    {/* Efek Cahaya Oranye saat Hover */}
                    <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-[#fa9223]/20 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />

                    <CardContent className="relative pt-10 pb-8 px-4 flex flex-col items-center justify-center">
                      <div className="text-center">
                        <p className="text-3xl md:text-4xl font-black text-white mb-2 tracking-tighter group-hover:text-[#fa9223] transition-colors duration-300">
                          {/* Angka Statis sesuai permintaan (tanpa Counter Error) */}
                          {metric.value}
                          <span className="text-[#fa9223]">{metric.suffix}</span>
                        </p>

                        {/* Garis Aksen Oranye */}
                        <div className="h-1 w-8 bg-[#fa9223] mx-auto mb-4 rounded-full opacity-50 group-hover:w-12 group-hover:opacity-100 transition-all duration-300" />

                        <p className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-green-50/80 leading-tight">
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

        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Testimoni Klien</h2>
              <p className="text-muted-foreground">Kepercayaan dari mitra kami</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="border-2">
                <CardHeader>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {'"'}Natadesa membantu kami mewujudkan visi desa wisata yang berkelanjutan. Dari perencanaan hingga
                    implementasi, pendampingan sangat profesional.{'"'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold">Kepala Desa Ponggok</div>
                  <div className="text-sm text-muted-foreground">Kabupaten Klaten</div>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardHeader>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {'"'}Program pelatihan KDMP sangat membantu meningkatkan kapasitas tim kami dalam mengelola usaha
                    desa.{'"'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold">Ketua BUMDes Tirta Mandiri</div>
                  <div className="text-sm text-muted-foreground">Desa Ponggok, Klaten</div>
                </CardContent>
              </Card>
              <Card className="border-2">
                <CardHeader>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <CardDescription className="text-base leading-relaxed">
                    {'"'}Implementasi sistem RFID mengubah cara kami mengelola pengunjung. Efisiensi meningkat
                    signifikan.{'"'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="font-semibold">Pengelola Umbul Ponggok</div>
                  <div className="text-sm text-muted-foreground">Desa Ponggok, Klaten</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/50">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Unduh Materi Portfolio</h2>
              <p className="text-muted-foreground">Dapatkan informasi lengkap tentang layanan dan proyek kami</p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5 max-w-5xl mx-auto">
              <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 bg-transparent">
                <Download className="h-5 w-5" />
                <span className="text-sm">Company Profile</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 bg-transparent">
                <Download className="h-5 w-5" />
                <span className="text-sm">Portfolio Brochure</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 bg-transparent">
                <Download className="h-5 w-5" />
                <span className="text-sm">Case Study Ponggok</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 bg-transparent">
                <Download className="h-5 w-5" />
                <span className="text-sm">Project Gallery</span>
              </Button>
              <Button variant="outline" className="h-auto py-4 flex flex-col gap-2 bg-transparent">
                <Download className="h-5 w-5" />
                <span className="text-sm">Testimoni</span>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-balance">Ingin Desa Anda Menjadi Portfolio Selanjutnya?</h2>
              <p className="text-lg mb-8 text-primary-foreground/90 text-pretty">
                Bergabunglah dengan 30+ desa yang telah bertransformasi bersama Natadesa
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/kontak">
                    Konsultasi Gratis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Company Profile
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  asChild
                >
                  <Link href="/layanan">Lihat Layanan Kami</Link>
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
