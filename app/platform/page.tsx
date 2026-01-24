import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { LayoutDashboard, GraduationCap, Search, FileText, Database, ShoppingCart, Globe, Zap } from "lucide-react"
import Link from "next/link"

export default function PlatformPage() {
  const desaPortalFeatures = [
    {
      icon: LayoutDashboard,
      title: "Dashboard",
      features: ["Overview operasional desa", "Monitoring kinerja real-time", "Manajemen data terpadu"],
    },
    {
      icon: GraduationCap,
      title: "Training",
      features: ["Modul pelatihan digital", "Learning management system", "Progress tracking"],
    },
  ]

  const investorPortalFeatures = [
    {
      icon: Search,
      title: "Search",
      features: ["Pencarian desa berdasarkan kriteria", "Filter berdasarkan potensi", "Data analitik lengkap"],
    },
    {
      icon: FileText,
      title: "Detail",
      features: ["Informasi lengkap desa", "Profil usaha dan produk", "Peluang investasi"],
    },
  ]

  const keyFeatures = [
    {
      icon: Zap,
      title: "Optimized untuk Konektivitas Rendah",
      description: "ERP system yang tetap berfungsi efektif bahkan dengan koneksi internet terbatas",
    },
    {
      icon: ShoppingCart,
      title: "Marketplace Terintegrasi",
      description: "Menghubungkan UMKM/BUMDes langsung ke pasar tanpa perantara berlebih",
    },
    {
      icon: Globe,
      title: "User-Friendly Interface",
      description: "Dirancang untuk literasi teknologi dasar dengan antarmuka yang mudah dipahami",
    },
    {
      icon: Database,
      title: "Operasional Transparan",
      description: "Sistem pelaporan otomatis yang akuntabel dan dapat diaudit",
    },
  ]

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-balance">Platform Bisnisdesa.id</h1>
              <p className="text-2xl text-primary mb-4 font-semibold">
                Ekosistem digital untuk "Nata Desa" (Organize the Village)
              </p>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Platform terpadu untuk mengorganisir, mendigitalisasi, dan mengkomersialkan potensi desa
              </p>
            </div>
          </div>
        </section>

        {/* Portal Desa */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Portal Desa</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tools lengkap untuk manajemen dan pengembangan desa
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {desaPortalFeatures.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portal Investor */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Portal Investor</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Platform pencarian dan analisis peluang investasi desa
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
              {investorPortalFeatures.map((feature, index) => (
                <Card key={index}>
                  <CardHeader>
                    <feature.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle>{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portal Data Client */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <Card className="max-w-3xl mx-auto">
              <CardHeader className="text-center">
                <Database className="h-16 w-16 text-primary mb-4 mx-auto" />
                <CardTitle>Portal Data Client</CardTitle>
                <CardDescription>Manajemen relasi dan data terpusat</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">•</span>
                    <span className="text-muted-foreground">Database klien terintegrasi</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">•</span>
                    <span className="text-muted-foreground">Manajemen relasi pelanggan (CRM)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl">•</span>
                    <span className="text-muted-foreground">Reporting & analytics komprehensif</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Fitur Utama</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Teknologi yang disesuaikan dengan realitas desa</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {keyFeatures.map((feature, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <feature.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-balance">Tertarik Menggunakan Platform Kami?</h2>
            <p className="text-lg mb-8 opacity-90 text-pretty max-w-2xl mx-auto">
              Jadwalkan demo untuk melihat bagaimana bisnisdesa.id dapat mentransformasi operasional desa Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/kontak">Request Demo</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="https://bisnisdesa.id" target="_blank" rel="noopener noreferrer">
                  Kunjungi bisnisdesa.id
                </Link>
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
