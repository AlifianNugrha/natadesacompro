import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin } from "lucide-react"

export default function ShowcasePage() {
  const showcaseProjects = [
    {
      name: "Situ Salawe",
      location: "Desa Baru Dua Village, Kec. Malangbong, Kab. Garut, Jawa Barat",
      type: "Perencanaan Obyek Wisata",
      hasPlanning: true,
      hasResult: true,
    },
    {
      name: "Padidipa",
      location: "Desa Dlingo, Kec. Mojosongo, Kab. Boyolali, Jawa Tengah",
      type: "Perencanaan Obyek Wisata",
      hasPlanning: true,
      hasResult: true,
    },
    {
      name: "Ponggok Fish & Farm",
      location: "Desa Ponggok, Kec. Polanharjo, Kab. Klaten, Jawa Tengah",
      type: "Perencanaan",
      hasPlanning: true,
      hasResult: true,
    },
    {
      name: "Delanggu Eco Park",
      location: "Desa Gatak, Kec. Delanggu, Kab. Klaten, Jawa Tengah",
      type: "Perencanaan Obyek Wisata",
      hasPlanning: true,
      hasResult: true,
    },
    {
      name: "Ponggok Agrotechnopark",
      location: "Desa Ponggok, Kec. Polanharjo, Kab. Klaten, Jawa Tengah",
      type: "Perencanaan",
      hasPlanning: true,
      hasResult: false,
    },
    {
      name: "Soko Alas Resort",
      location: "Desa Ponggok, Kec. Polanharjo, Kab. Klaten, Jawa Tengah",
      type: "Perencanaan Objek Wisata (private investor)",
      hasPlanning: true,
      hasResult: true,
    },
    {
      name: "Ponggok Paradeso",
      location: "Desa Ponggok, Kec. Polanharjo, Kab. Klaten, Jawa Tengah",
      type: "Perencanaan Objek Wisata dengan CSR BNI 46",
      hasPlanning: true,
      hasResult: true,
      partner: "BNI 46",
    },
    {
      name: "Bumi Tirta Village",
      location: "Desa Ponggok, Kec. Polanharjo, Kab. Klaten, Jawa Tengah",
      type: "Perencanaan Penginapan dengan CSR BNI 46",
      hasPlanning: false,
      hasResult: true,
      partner: "BNI 46",
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
              <h1 className="text-4xl font-bold mb-6 text-balance">Showcase Projects</h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Galeri visual proyek-proyek wisata unggulan kami dari perencanaan hingga hasil akhir
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {showcaseProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.name}</CardTitle>
                    <CardDescription>{project.type}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>{project.location}</span>
                    </div>

                    {/* Placeholder Images */}
                    <div className="space-y-2">
                      {project.hasPlanning && (
                        <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                          <img
                            src={`/.jpg?height=200&width=400&query=${encodeURIComponent(
                              `${project.name} planning design architectural blueprint`,
                            )}`}
                            alt={`${project.name} - Tahap Perencanaan`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-2 left-2">
                            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                              Tahap Perencanaan
                            </Badge>
                          </div>
                        </div>
                      )}
                      {project.hasResult && (
                        <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
                          <img
                            src={`/.jpg?height=200&width=400&query=${encodeURIComponent(
                              `${project.name} completed tourism destination beautiful landscape`,
                            )}`}
                            alt={`${project.name} - Hasil Akhir`}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-2 left-2">
                            <Badge className="bg-primary/80 backdrop-blur-sm">Hasil Akhir</Badge>
                          </div>
                        </div>
                      )}
                    </div>

                    {project.partner && (
                      <div className="pt-2 border-t">
                        <p className="text-xs text-muted-foreground">Kemitraan dengan {project.partner}</p>
                      </div>
                    )}
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
