import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, TrendingUp, Laptop, LinkIcon, Target, Copy, Globe, Handshake, Heart, Award } from "lucide-react"
import Link from "next/link"

export default function SolusiPage() {
  const problems = [
    {
      icon: AlertCircle,
      title: "Kurangnya infrastruktur digital",
      description: "Konektivitas dan perangkat yang terbatas menghambat operasional dan pengambilan data",
    },
    {
      icon: AlertCircle,
      title: "Kualitas produk yang tidak konsisten",
      description: "Produksi yang tidak terstandarisasi mengurangi kepercayaan pembeli dan skalabilitas",
    },
    {
      icon: AlertCircle,
      title: "Rantai pasokan predator/perantara",
      description: "Tingkat perantara yang tinggi mengikis margin keuntungan bagi UKM pedesaan dan BUMDE",
    },
  ]

  const pillars = [
    {
      icon: TrendingUp,
      title: "Peningkatan Kapasitas",
      description:
        "Pelatihan terarah untuk pengelola desa wisata: literasi keuangan, pemasaran digital, dan standardisasi produksi",
    },
    {
      icon: Laptop,
      title: "Integrasi Digital",
      description:
        "ERP & marketplace bisnisdesa.id yang dioptimalkan untuk konektivitas rendah dan literasi teknologi dasar",
    },
    {
      icon: LinkIcon,
      title: "Keterkaitan Pasar",
      description: "Pipelines direct-to-market yang menghubungkan produk desa ke ritel nasional dan hub ekspor",
    },
  ]

  const advantages = [
    {
      icon: Target,
      title: "Solusi Khusus",
      subtitle: "Desain khusus desa",
      description: "Pendekatan sesuai karakter lokal agar implementasi tepat sasaran",
    },
    {
      icon: Copy,
      title: "Model Replikasi",
      subtitle: "Model bertahap MVP replikatif",
      description: "Model bertahap yang mudah direplikasi lintas wilayah",
    },
    {
      icon: Globe,
      title: "Integrasi Digital",
      subtitle: "Operasional efektif dan transparan",
      description: "ERP/marketplace bisnisdesa.id untuk operasi yang efisien & akuntabel",
    },
    {
      icon: Handshake,
      title: "Kemitraan Strategis",
      subtitle: "Kolaborasi lintas sektor",
      description: "Kemitraan lintas sektor untuk memperkuat skala & keberlanjutan",
    },
    {
      icon: Heart,
      title: "Keterlibatan Komunitas",
      subtitle: "Kepemilikan & keberlanjutan",
      description: "Keterlibatan warga dari awal untuk rasa memiliki yang kuat",
    },
    {
      icon: Award,
      title: "Track Record Terbukti",
      subtitle: "Pengalaman dengan berbagai desa",
      description: "Pengalaman nyata di banyak desa membuktikan efektivitas",
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
              <h1 className="text-4xl font-bold mb-6 text-balance">Solusi Kami</h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Kerangka strategis untuk mempercepat kemandirian ekonomi desa
              </p>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Peluang Natadesa</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Lebih dari 75.000 desa di Indonesia masih terpinggirkan dari rantai nilai modern
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3 mb-8">
              {problems.map((problem, index) => (
                <Card key={index} className="border-destructive/50">
                  <CardContent className="pt-6">
                    <problem.icon className="h-10 w-10 text-destructive mb-4" />
                    <h3 className="font-semibold mb-2">{problem.title}</h3>
                    <p className="text-sm text-muted-foreground">{problem.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 max-w-3xl mx-auto">
              <p className="text-center text-muted-foreground">
                <strong className="text-foreground">Risiko:</strong> Tanpa intervensi yang terukur, kesenjangan ekonomi
                antara pedesaan dan perkotaan akan terus melebar, menghambat kemakmuran yang merata.
              </p>
            </div>
          </div>
        </section>

        {/* Solution Framework */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Solusinya: Kerangka Natadesa</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Tiga pilar strategi untuk mempercepat kemandirian ekonomi desa
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {pillars.map((pillar, index) => (
                <Card key={index} className="border-primary">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      <CardTitle className="text-lg">Pilar {index + 1}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <pillar.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold mb-3">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground">{pillar.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-3">Platform bisnisdesa.id</h3>
              <p className="text-lg mb-2">Tulang punggung operasional untuk "Nata Desa" (Organize the Village)</p>
              <p className="opacity-90 mb-4">
                Ekosistem Hulu ke Hilir • Mengorganisasi • Mendigitalisasi • Mengkomersialkan
              </p>
              <Button variant="secondary" asChild>
                <Link href="/platform">Pelajari Platform</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Keunggulan Kompetitif</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Faktor-faktor pendukung yang membuat pembangunan desa menjadi terukur, digital, dan berkelanjutan
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {advantages.map((advantage, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <advantage.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-semibold mb-1">{advantage.title}</h3>
                    <p className="text-sm text-primary/80 mb-2">{advantage.subtitle}</p>
                    <p className="text-sm text-muted-foreground">{advantage.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-balance">Mari Terapkan Solusi Ini Bersama</h2>
            <p className="text-lg mb-8 opacity-90 text-pretty max-w-2xl mx-auto">
              Hubungi kami untuk mendiskusikan bagaimana kerangka Natadesa dapat diterapkan di desa Anda
            </p>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/kontak">Konsultasi Gratis</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
