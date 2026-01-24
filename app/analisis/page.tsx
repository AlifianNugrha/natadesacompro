import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Target, MapPin, CheckCircle, AlertCircle, Lightbulb, Shield } from "lucide-react"

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

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-balance">Analisis & Insight</h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Analisis mendalam terhadap peluang pasar dan strategi pengembangan desa
              </p>
            </div>
          </div>
        </section>

        {/* Market Analysis TAM SAM SOM */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Analisis Pasar: TAM • SAM • SOM</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Peluang pengembangan desa di Indonesia</p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              <Card className="border-primary">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-3">
                    <Target className="h-8 w-8 text-primary" />
                    TAM (Total Addressable Market)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-4xl font-bold text-primary mb-2">83,971</p>
                      <p className="text-muted-foreground">Desa di Indonesia</p>
                    </div>
                    <MapPin className="h-16 w-16 text-primary/20" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">Scope: Seluruh Indonesia</p>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-3">
                    <Target className="h-7 w-7 text-primary" />
                    SAM (Serviceable Addressable Market)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-4xl font-bold text-primary mb-2">6,042</p>
                      <p className="text-muted-foreground">Desa wisata aktif</p>
                    </div>
                    <MapPin className="h-14 w-14 text-primary/20" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Scope: Desa wisata yang sudah aktif di seluruh Indonesia
                  </p>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-primary" />
                    SOM (Serviceable Obtainable Market)
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-4xl font-bold text-primary mb-2">±1,921</p>
                      <p className="text-muted-foreground">Desa di Jawa & Bali</p>
                    </div>
                    <MapPin className="h-12 w-12 text-primary/20" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">Scope: Target pasar awal yang paling feasible</p>
                </CardContent>
              </Card>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
                <p className="font-semibold text-lg">
                  Terdapat ruang lingkup yang besar untuk pengembangan desa berkelanjutan secara nasional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SWOT Analysis */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Analisa SWOT</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Analisis SWOT membantu memprioritaskan strategi yang memanfaatkan kekuatan dan peluang sekaligus
                meminimalkan kelemahan dan ancaman
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
              {/* Strengths */}
              <Card className="border-green-500">
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

              {/* Weaknesses */}
              <Card className="border-amber-500">
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

              {/* Opportunities */}
              <Card className="border-blue-500">
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

              {/* Threats */}
              <Card className="border-red-500">
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
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Fokus Area</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Bidang prioritas dalam pengembangan desa berkelanjutan
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
              {focusAreas.map((area, index) => (
                <Card key={index}>
                  <CardContent className="pt-6">
                    <area.icon className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold mb-3">{area.title}</h3>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </CardContent>
                </Card>
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
