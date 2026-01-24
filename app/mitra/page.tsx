import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Building2, GraduationCap, Briefcase, Users } from "lucide-react"

export default function MitraPage() {
  const bumdesMitra = ["BUM Desa Tirta Mandiri"]

  const universitasMitra = ["Universitas Jenderal Soedirman", "Politeknik Negeri Samarinda", "Universitas Surakarta"]

  const korporatMitra = [
    "PT. Kedung Sumber Panguripan",
    "Delanggu Eco Park",
    "CV. Energi Dagang Anak Negeri",
    "PT. Dolan Kreasi Indonesia",
    "PT. Dua Kawan Digital",
  ]

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-balance">Rekanan Bisnis</h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Kemitraan Strategis - Kolaborasi lintas sektor untuk memperkuat skala & keberlanjutan
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Statement */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Kemitraan lintas sektor untuk memperkuat skala & keberlanjutan. Keterlibatan warga dari awal untuk rasa
                memiliki yang kuat. Kami bekerja sama dengan berbagai pihak untuk menciptakan dampak yang lebih besar
                dan berkelanjutan.
              </p>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {/* BUMDes Partners */}
              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Mitra BUMDes</CardTitle>
                  <CardDescription>Badan Usaha Milik Desa</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {bumdesMitra.map((mitra, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{mitra}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* University Partners */}
              <Card>
                <CardHeader>
                  <GraduationCap className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Mitra Universitas</CardTitle>
                  <CardDescription>Institusi Pendidikan Tinggi</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {universitasMitra.map((mitra, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{mitra}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Corporate Partners */}
              <Card className="lg:col-span-1 md:col-span-2">
                <CardHeader>
                  <Building2 className="h-12 w-12 text-primary mb-4" />
                  <CardTitle>Mitra Korporat</CardTitle>
                  <CardDescription>Perusahaan & Organisasi Bisnis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {korporatMitra.map((mitra, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-1">•</span>
                        <span>{mitra}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Partner with Us */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-primary">
                <CardHeader className="text-center">
                  <Briefcase className="h-16 w-16 text-primary mb-4 mx-auto" />
                  <CardTitle className="text-2xl">Bergabung sebagai Mitra</CardTitle>
                  <CardDescription className="text-base">
                    Kami terbuka untuk kolaborasi dengan berbagai organisasi yang memiliki visi yang sama dalam
                    pemberdayaan desa
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3 text-center">
                    <div>
                      <p className="font-semibold mb-2">Pemerintah Daerah</p>
                      <p className="text-sm text-muted-foreground">Kolaborasi program pemberdayaan</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Institusi Akademik</p>
                      <p className="text-sm text-muted-foreground">Riset dan pengembangan</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Sektor Swasta</p>
                      <p className="text-sm text-muted-foreground">Investasi dan CSR</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
