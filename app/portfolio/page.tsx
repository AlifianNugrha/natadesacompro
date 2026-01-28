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

  // --- DATA PREPARATION ---
  // Fungsi helper untuk generate ID otomatis dari nama (Slug)
  const generateSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, "-").replace(/-+/g, "-");

  const masterPlanProjects = [
    { year: "2025", name: "Desa Cisitu", kecamatan: "Cisitu", kabupaten: "Sumedang", provinsi: "Jawa Barat", kategori: "Rencana Induk Desa", badge: "NEW" },
    { year: "2025", name: "Desa Grenggeng", kecamatan: "Karanganyar", kabupaten: "Kebumen", provinsi: "Jawa Tengah", kategori: "Rencana Induk Desa", badge: "NEW" },
    { year: "2025", name: "Desa Loa Lepu", kecamatan: "Tenggarong Selatan", kabupaten: "Kutai Kartanegara", provinsi: "Kalimantan Timur", kategori: "Rencana Induk Desa", badge: "NEW" },
    { year: "2025", name: "Desa Muara Muntai Ilir", kecamatan: "Muara Muntai", kabupaten: "Kutai Kartanegara", provinsi: "Kalimantan Timur", kategori: "Rencana Induk Desa", badge: "NEW" },
    { year: "2025", name: "Desa Bumi Etam", kecamatan: "Kaubun", kabupaten: "Kutai Timur", provinsi: "Kalimantan Timur", kategori: "Rencana Induk Desa", badge: "NEW" },
    { year: "2024", name: 'RW 01 Desa Ponggok "Fish and Farm"', kecamatan: "Polanharjo", kabupaten: "Klaten", provinsi: "Jawa Tengah", kategori: "Rencana Induk Kawasan", badge: "FEATURED" },
    { year: "2024", name: "Desa Gatak", kecamatan: "Delanggu", kabupaten: "Klaten", provinsi: "Jawa Tengah", kategori: "Rencana Induk Desa" },
    { year: "2024", name: "Desa Manggis", kecamatan: "Teras", kabupaten: "Boyolali", provinsi: "Jawa Tengah", kategori: "Rencana Induk Desa" },
    { year: "2024", name: "Desa Barudua", kecamatan: "Malangbong", kabupaten: "Garut", provinsi: "Jawa Barat", kategori: "Rencana Induk Desa" },
    { year: "2024", name: 'Objek Wisata "Padidipa"', kecamatan: "Mojosongo", kabupaten: "Boyolali", provinsi: "Jawa Tengah", kategori: "Rencana Objek Wisata", badge: "FEATURED" },
    { year: "2023", name: "Desa Motongbang", kecamatan: "Teluk Mutirara", kabupaten: "Alor", provinsi: "Nusa Tenggara Timur", kategori: "Rencana Induk Desa" },
    { year: "2021", name: "Desa Sidowayah", kecamatan: "Polanharjo", kabupaten: "Klaten", provinsi: "Jawa Tengah", kategori: "Rencana Induk Desa", badge: "FIRST PROJECT" },
  ].map(p => ({ ...p, id: generateSlug(p.name), category: "masterplan" }));

  const trainingProjects = [
    { year: "2025", name: "Pelatihan KDMP Tanggeran", desa: "Tanggeran", kecamatan: "Tanjong", kabupaten: "Brebes", provinsi: "Jawa Tengah", jenis: "Pelatihan KDMP", peserta: "30+" },
    { year: "2025", name: "Pelatihan KDMP Rempoah", desa: "Rempoah", kecamatan: "Baturaden", kabupaten: "Banyumas", provinsi: "Jawa Tengah", jenis: "Pelatihan KDMP" },
    { year: "2024", name: "Pelatihan BUMDesa Ponggok", desa: "Ponggok", kabupaten: "Klaten", provinsi: "Jawa Tengah", jenis: "Pelatihan BUMDes" },
    { year: "2022", name: 'Business Plan "Soko Alas Resort"', desa: "Ponggok", kabupaten: "Klaten", provinsi: "Jawa Tengah", jenis: "Business Plan - Resort" },
  ].map(p => ({ ...p, id: generateSlug(p.name), category: "training" }));

  const techProjects = [
    { year: "2024", name: "Website BUMDesa Tirta Mandiri", desa: "Ponggok", kabupaten: "Klaten", provinsi: "Jawa Tengah", teknologi: "Website Development", features: ["Company profile", "Online booking"] },
    { year: "2024", name: "Sistem RFID Umbul Ponggok", desa: "Ponggok", kabupaten: "Klaten", provinsi: "Jawa Tengah", teknologi: "RFID System", innovation: true, features: ["Ticketing automation", "Cashless"] },
    { year: "2024", name: "Delanggu Ecopark Management", desa: "Gatak", kabupaten: "Klaten", provinsi: "Jawa Tengah", service: "Operational Management" },
  ].map(p => ({ ...p, id: generateSlug(p.name), category: "tech" }));

  const showcaseProjects = [
    { id: "situ-salawe", name: "Situ Salawe", desa: "Baru Dua", kabupaten: "Garut", provinsi: "Jawa Barat", type: "Perencanaan", description: "Lake tourism development", image: "/situ-salawe-lake-tourism-destination.jpg" },
    { id: "padidipa", name: "Padidipa", desa: "Dlingo", kabupaten: "Boyolali", provinsi: "Jawa Tengah", type: "Perencanaan", description: "Educational tourism", image: "/padidipa-education-tourism.jpg", badge: "FEATURED" },
    { id: "ponggok-fish-farm", name: "Ponggok Fish & Farm", desa: "Ponggok", kabupaten: "Klaten", provinsi: "Jawa Tengah", type: "Agro-tourism", description: "Integrated farming concept", image: "/ponggok-fish-farm-sustainable-village.jpg", badge: "FEATURED" },
  ].map(p => ({ ...p, category: "showcase" }));

  const allProjects = [...masterPlanProjects, ...trainingProjects, ...techProjects];

  // --- FILTER LOGIC ---
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

  const filteredAll = filterProjects(allProjects);
  const filteredMaster = filterProjects(masterPlanProjects);
  const filteredTraining = filterProjects(trainingProjects);
  const filteredTech = filterProjects(techProjects);
  const filteredShowcase = filterProjects(showcaseProjects);

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold mb-6 text-balance">Portfolio Kami</h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Periode 2021–2025 merupakan tonggak penting bagi Natadesa dalam mengembangkan potensi desa.
              </p>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {[
                { label: "Rencana Induk", val: "20+" },
                { label: "Pelatihan", val: "12+" },
                { label: "Teknologi", val: "3" },
                { label: "Showcase", val: "8" },
                { label: "Provinsi", val: "5" },
              ].map((s, i) => (
                <div key={i} className="bg-background/80 backdrop-blur rounded-lg p-4 text-center border shadow-sm">
                  <div className="text-2xl font-bold text-primary mb-1">{s.val}</div>
                  <div className="text-sm text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STICKY FILTER */}
        <section className="sticky top-16 z-10 bg-background/95 backdrop-blur border-b py-4">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Cari desa, kabupaten, atau provinsi..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className="w-full md:w-[180px]"><SelectValue placeholder="Tahun" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Semua Tahun</SelectItem>
                <SelectItem value="2025">2025</SelectItem>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* TABS CONTENT */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-2 md:grid-cols-5 gap-2 mb-12 h-auto">
                <TabsTrigger value="all" className="py-3"><FileText className="mr-2 h-4 w-4" /> Semua</TabsTrigger>
                <TabsTrigger value="masterplan" className="py-3"><FileText className="mr-2 h-4 w-4" /> Rencana Induk</TabsTrigger>
                <TabsTrigger value="training" className="py-3"><GraduationCap className="mr-2 h-4 w-4" /> Pelatihan</TabsTrigger>
                <TabsTrigger value="tech" className="py-3"><Laptop className="mr-2 h-4 w-4" /> Teknologi</TabsTrigger>
                <TabsTrigger value="showcase" className="py-3"><Star className="mr-2 h-4 w-4" /> Showcase</TabsTrigger>
              </TabsList>

              {/* Tab Content: All */}
              <TabsContent value="all">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredAll.map((p) => <PortfolioCard key={p.id} project={p} />)}
                </div>
              </TabsContent>

              {/* Tab Content: Masterplan */}
              <TabsContent value="masterplan">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredMaster.map((p) => <PortfolioCard key={p.id} project={p} />)}
                </div>
              </TabsContent>

              {/* Tab Content: Training */}
              <TabsContent value="training">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredTraining.map((p) => <PortfolioCard key={p.id} project={p} />)}
                </div>
              </TabsContent>

              {/* Tab Content: Tech */}
              <TabsContent value="tech">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {filteredTech.map((p) => <PortfolioCard key={p.id} project={p} />)}
                </div>
              </TabsContent>

              {/* Tab Content: Showcase */}
              <TabsContent value="showcase">
                <div className="grid gap-8 md:grid-cols-2">
                  {filteredShowcase.map((p) => (
                    <Link href={`/portfolio/${p.id}`} key={p.id}>
                      <Card className="hover:shadow-xl transition-all overflow-hidden cursor-pointer group">
                        <div className="aspect-video relative overflow-hidden bg-muted">
                          <img src={p.image || "/placeholder.svg"} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt={p.name} />
                        </div>
                        <CardHeader>
                          <Badge className="w-fit mb-2">{p.badge || p.type}</Badge>
                          <CardTitle className="text-xl">{p.name}</CardTitle>
                          <CardDescription>{p.description}</CardDescription>
                        </CardHeader>
                      </Card>
                    </Link>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* IMPACT SECTION (ACHIEVEMENT) */}
        <section className="relative py-20 md:py-32 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 -z-10">
            <img src="/sawah.jpg" alt="BG" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#172317]/95 via-[#172317]/80 to-[#172317]/95" />
          </div>
          <div className="container max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-16 text-white">Pencapaian & Dampak</h2>
            <div className="grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
              {[
                { label: "Total Projects", val: "43+" },
                { label: "Desa Dampingan", val: "31" },
                { label: "Kabupaten", val: "15" },
                { label: "Provinsi", val: "7" },
                { label: "Trained", val: "500+" },
                { label: "BUMDes", val: "10+" },
              ].map((m, i) => (
                <Card key={i} className="bg-white/10 backdrop-blur border-none text-white p-6 shadow-2xl">
                  <div className="text-3xl font-black text-[#fa9223] mb-2">{m.val}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest">{m.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Testimoni Klien</h2>
          </div>
          <div className="container max-w-7xl mx-auto px-6 grid gap-6 md:grid-cols-3">
            <TestimonialCard name="Kepala Desa Ponggok" loc="Kabupaten Klaten" />
            <TestimonialCard name="Ketua BUMDes" loc="Sidowayah" />
            <TestimonialCard name="Pengelola Wisata" loc="Garut" />
          </div>
        </section>

        {/* DOWNLOAD SECTION */}
        <section className="py-16 bg-muted/50">
          <div className="container max-w-7xl mx-auto px-6 text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Unduh Materi Portfolio</h2>
          </div>
          <div className="container max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Company Profile", "Brochure", "Case Study", "Gallery", "Testimoni"].map(t => (
              <Button key={t} variant="outline" className="h-auto py-4 flex flex-col gap-2"><Download className="h-4 w-4" />{t}</Button>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-primary text-primary-foreground text-center">
          <h2 className="text-3xl font-bold mb-4">Ingin Desa Anda Menjadi Portfolio Selanjutnya?</h2>
          <div className="flex justify-center gap-4 mt-8">
            <Button size="lg" variant="secondary" asChild><Link href="/kontak">Konsultasi Gratis <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}

// SUB-COMPONENTS
function PortfolioCard({ project }: { project: any }) {
  return (
    <Link href={`/portfolio/${project.id}`}>
      <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full border-2 hover:border-primary/50">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <Badge variant="secondary">{project.year}</Badge>
            {project.badge && <Badge variant="default">{project.badge}</Badge>}
          </div>
          <CardTitle className="text-lg leading-tight">{project.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <div className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5" /><span>{project.provinsi}, Kab. {project.kabupaten}</span></div>
          {project.kategori && <Badge variant="outline" className="mt-2 text-[10px]">{project.kategori}</Badge>}
        </CardContent>
      </Card>
    </Link>
  )
}

function TestimonialCard({ name, loc }: { name: string, loc: string }) {
  return (
    <Card className="border-2 p-6 text-center">
      <div className="flex justify-center gap-1 mb-4 text-primary">
        {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
      </div>
      <p className="text-sm italic mb-6">"Natadesa membantu mewujudkan visi desa wisata yang berkelanjutan."</p>
      <div className="font-bold">{name}</div>
      <div className="text-xs text-muted-foreground">{loc}</div>
    </Card>
  )
}