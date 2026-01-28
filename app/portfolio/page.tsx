"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, FileText, GraduationCap, Laptop, Search, Download, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Import sumber data tunggal
import { allProjects, Project } from "@/data/projects"

export default function PortfolioPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedYear, setSelectedYear] = useState("all")
  const [selectedCategory, setSelectedCategory] = useState("all")

  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      searchQuery === "" ||
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.kabupaten.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.provinsi.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesYear = selectedYear === "all" || project.year === selectedYear
    const matchesCategory = selectedCategory === "all" || project.category === selectedCategory

    return matchesSearch && matchesYear && matchesCategory
  })

  return (
    <>
      <Header />
      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="py-20 border-b bg-muted/30">
          <div className="container max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight mb-4 text-foreground">Portfolio proyek</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Kumpulan jejak langkah Natadesa dalam memberdayakan potensi desa di seluruh Indonesia melalui perencanaan strategis, teknologi, dan peningkatan kapasitas sumber daya manusia.
              </p>
            </div>
          </div>
        </section>

        {/* Controls */}
        <section className="sticky top-16 z-20 bg-background/80 backdrop-blur-md border-b py-4">
          <div className="container max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Cari lokasi atau nama proyek..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-muted/50 border-none rounded-md focus:ring-1 focus:ring-primary outline-none text-sm"
              />
            </div>
            <div className="flex gap-2">
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-[140px] bg-muted/50 border-none">
                  <SelectValue placeholder="Tahun" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua tahun</SelectItem>
                  {Array.from(new Set(allProjects.map(p => p.year))).sort().reverse().map(year => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6">
            <Tabs defaultValue="all" onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="flex flex-wrap justify-start gap-2 bg-transparent h-auto p-0 mb-10">
                <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border px-6 py-2 rounded-full capitalize">Semua</TabsTrigger>
                <TabsTrigger value="masterplan" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border px-6 py-2 rounded-full capitalize">Rencana induk</TabsTrigger>
                <TabsTrigger value="training" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border px-6 py-2 rounded-full capitalize">Pelatihan</TabsTrigger>
                <TabsTrigger value="tech" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground border px-6 py-2 rounded-full capitalize">Teknologi</TabsTrigger>
              </TabsList>

              <TabsContent value={selectedCategory} className="mt-0">
                {filteredProjects.length > 0 ? (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredProjects.map((project) => (
                      <PortfolioCard key={project.id} project={project} />
                    ))}
                  </div>
                ) : (
                  <div className="py-20 text-center border rounded-2xl border-dashed">
                    <p className="text-muted-foreground">Tidak ada proyek yang ditemukan.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-muted/30 border-y">
          <div className="container max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-2xl font-bold mb-4">Mulai transformasi desa anda</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">Konsultasikan kebutuhan perencanaan dan pengembangan teknologi desa anda bersama tim ahli kami.</p>
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/kontak">Hubungi kami <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}

function PortfolioCard({ project }: { project: Project }) {
  const getIcon = () => {
    switch (project.category) {
      case 'training': return <GraduationCap className="h-4 w-4" />;
      case 'tech': return <Laptop className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  }

  return (
    <Link href={`/portfolio/${project.id}`}>
      <Card className="group h-full flex flex-col hover:shadow-md transition-all border-muted/60 overflow-hidden rounded-xl">
        {(project.image || project.gallery?.[0]) && (
          <div className="aspect-video overflow-hidden bg-muted">
            <img
              src={project.image || project.gallery?.[0] || "/placeholder-village.jpg"}
              alt={project.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        )}

        <CardHeader className="p-5 flex-none">
          <div className="flex items-center justify-between mb-3">
            <Badge variant="outline" className="font-medium rounded-md">{project.year}</Badge>
            <div className="text-primary">{getIcon()}</div>
          </div>
          <CardTitle className="text-lg group-hover:text-primary transition-colors leading-tight font-semibold">
            {project.name}
          </CardTitle>
        </CardHeader>

        <CardContent className="p-5 pt-0 flex-1 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-start gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mt-0.5 flex-none" />
              <span>{project.kabupaten}, {project.provinsi}</span>
            </div>
            {project.kategori && (
              <p className="text-xs font-medium text-primary/80 tracking-normal normal-case">
                {project.kategori}
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}