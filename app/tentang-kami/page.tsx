import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Target,
  Users,
  TrendingUp,
  Leaf,
  Heart,
  Handshake,
  CheckCircle,
  Briefcase,
  Building,
  Code,
  ShoppingCart,
  Camera,
  PenTool,
  FileCheck,
  Award,
  Globe,
  Lightbulb,
  Sprout,
  Palette,
  Rocket,
  ArrowRight,
  Download,
  Phone,
} from "lucide-react"
import Link from "next/link"

export default function TentangKamiPage() {
  const missions = [
    {
      icon: Lightbulb,
      title: "Mengembangkan Potensi Ekonomi",
      description: "Inovasi produk berbasis sumber daya lokal",
      detail: "Diversifikasi ekonomi desa",
    },
    {
      icon: Users,
      title: "Meningkatkan Keterampilan Masyarakat",
      description: "Pelatihan berkelanjutan",
      detail: "Pemberdayaan SDM lokal",
    },
    {
      icon: Code,
      title: "Mendorong Digitalisasi",
      description: "Transformasi digital desa",
      detail: "Meningkatkan efisiensi & daya saing",
    },
    {
      icon: Sprout,
      title: "Melestarikan Lingkungan",
      description: "Mengadopsi praktik berkelanjutan",
      detail: "Green economy",
    },
    {
      icon: Palette,
      title: "Mempromosikan Kearifan Lokal",
      description: "Mempertahankan identitas budaya unik",
      detail: "Cultural preservation",
    },
    {
      icon: Handshake,
      title: "Membangun Kemitraan Strategis",
      description: "Ekonomi yang adil dan tangguh",
      detail: "Kolaborasi multi-stakeholder",
    },
  ]

  const mainMissions = [
    {
      icon: TrendingUp,
      title: "Meningkatkan Kesejahteraan Masyarakat",
      points: ["Pemberdayaan ekonomi lokal", "Peningkatan pendapatan desa"],
    },
    {
      icon: Briefcase,
      title: "Mengurangi Pengangguran",
      points: ["Menciptakan lapangan kerja", "Mengembangkan UMKM lokal"],
    },
    {
      icon: Leaf,
      title: "Melestarikan Alam",
      points: ["Praktik berkelanjutan", "Konservasi lingkungan"],
    },
    {
      icon: Building,
      title: "Memperkuat Identitas Lokal",
      points: ["Pelestarian budaya", "Kearifan lokal"],
    },
  ]

  const timeline = [
    {
      year: "Akhir 2021",
      title: "Program Awal",
      description: "Dimulainya program bantuan desa pasca-COVID",
      detail: "Fase awal pendampingan masyarakat desa",
    },
    {
      year: "2021-2023",
      title: "Ekspansi Regional",
      description: "Ekspansi ke berbagai daerah (NTT, Kepulauan Riau, Jawa Tengah)",
      detail: "20+ proyek rencana induk desa",
    },
    {
      year: "2024",
      title: "Pendirian Resmi",
      description: "Pendirian resmi PT Natadesa Bangun Negeri",
      detail: "Peluncuran platform bisnisdesa.id dan implementasi teknologi digital (RFID, ERP)",
    },
    {
      year: "2025",
      title: "Ekspansi Berkelanjutan",
      description: "Ekspansi ke Kalimantan Timur & Jawa Barat",
      detail: "Pelatihan KDMP skala kabupaten",
    },
  ]

  const teamLeaders = [
    { name: "Harri Yudho P, SE", position: "Founder - CEO" },
    { name: "Irfan Saputra S. Ars", position: "COO" },
    { name: "Alifta Asyari R, A.MD", position: "Business Development" },
  ]

  const teamSupport = [
    {
      department: "IT Support",
      icon: Code,
      members: ["Arnold Tumewu", "Kholilurrohman"],
    },
    {
      department: "Media & Content",
      icon: Camera,
      members: [
        "M. Rafly Nur Iswandi (Videografer)",
        "Nizam Rifyal Aufa (Media Sosial Spesialis)",
        "Farih Zuhair Al Haidar (Fotografer)",
      ],
    },
    {
      department: "Perencanaan & Desain",
      icon: PenTool,
      members: [
        "Fatimah Azahro (Plano)",
        "Nafila Nur Izza (Perancangan Kawasan)",
        "Thifaltsabita Zharifah Hanin (Perancangan Kawasan)",
        "Auuwalatussa'iyah Nurrohmah (Arsitektur)",
        "Muhammad Fathir Al Kahfi (Arsitektur)",
        "Muhammad Galvani Nauval Zahid (Teknik Sipil)",
      ],
    },
    {
      department: "E-Commerce",
      icon: ShoppingCart,
      members: ["Fatichah Eri (E-commerce Team)"],
    },
  ]

  const values = [
    { icon: Target, title: "Transparansi", description: "Operasional yang akuntabel" },
    { icon: Globe, title: "Keberlanjutan", description: "Praktik ramah lingkungan" },
    { icon: Handshake, title: "Kolaborasi", description: "Kemitraan yang kuat" },
    { icon: Lightbulb, title: "Inovasi", description: "Solusi kreatif untuk desa" },
    { icon: Heart, title: "Pemberdayaan", description: "Fokus pada masyarakat" },
  ]

  const impactMetrics = [
    { number: "83,971", label: "Total desa di Indonesia (TAM)" },
    { number: "6,042", label: "Desa wisata aktif (SAM)" },
    { number: "1,921", label: "Target desa di Jawa & Bali (SOM)" },
    { number: "20+", label: "Proyek selesai" },
    { number: "5", label: "Provinsi jangkauan" },
  ]

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6 text-balance">Tentang Kami</h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Mitra Terpercaya dalam Pemberdayaan Desa Berkelanjutan
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Profil Perusahaan</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground mb-1">Nama Resmi</p>
                      <p className="text-lg">PT Natadesa Bangun Negeri</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground mb-1">Merek Dagang</p>
                      <p className="text-lg">Natadesa Nusantara</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground mb-1">Website</p>
                      <div className="flex flex-wrap gap-2">
                        <Link href="https://bisnisdesa.id" className="text-primary hover:underline">
                          bisnisdesa.id
                        </Link>
                        <span className="text-muted-foreground">•</span>
                        <Link href="https://natadesanusantara.com" className="text-primary hover:underline">
                          natadesanusantara.com
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Deskripsi Perusahaan</p>
                      <p className="text-muted-foreground">
                        Perusahaan sosial berfokus pada pengembangan desa wisata dan berkelanjutan.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Pendekatan</p>
                      <p className="text-muted-foreground">
                        Kolaborasi antara komunitas, pemerintah, dan mitra swasta.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold mb-1">Hasil yang Dicapai</p>
                      <p className="text-muted-foreground">
                        Mengubah desa-desa menjadi destinasi unggulan—secara ekonomi, budaya, dan lingkungan.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Riwayat & Perjalanan</h2>
              <p className="text-muted-foreground">Jejak perjalanan kami dalam pemberdayaan desa berkelanjutan</p>
            </div>
            <div className="max-w-4xl mx-auto space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    {index < timeline.length - 1 && <div className="w-0.5 h-full bg-primary/20 mt-2" />}
                  </div>
                  <Card className="flex-1 mb-4">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground mb-1">{item.description}</p>
                      <p className="text-sm text-muted-foreground">{item.detail}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Misi Utama</h2>
              <p className="text-muted-foreground">Empat pilar utama dalam pemberdayaan desa</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {mainMissions.map((mission, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-8">
                    <mission.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-3">{mission.title}</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {mission.points.map((point, idx) => (
                        <li key={idx} className="flex items-center gap-2 justify-center">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Bagaimana Kami Bekerja</h2>
              <p className="text-muted-foreground max-w-4xl mx-auto text-pretty leading-relaxed">
                Natadesa beroperasi di bidang teknologi dan pemberdayaan masyarakat. Melalui platform{" "}
                <span className="font-semibold text-foreground">bisnisdesa.id</span>, kami menyediakan ekosistem dari
                hulu ke hilir untuk 'Mengorganisir Desa' — standarisasi operasional, digitalisasi catatan, dan
                menghubungkan UMKM/BUMDes/KDMP pedesaan ke pasar yang andal.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                  <CardTitle>Peningkatan Kapasitas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Pelatihan literasi keuangan</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Pelatihan pemasaran digital</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Standarisasi produksi</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">2</span>
                  </div>
                  <CardTitle>Integrasi Digital</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">ERP system untuk desa</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Marketplace bisnisdesa.id</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Dirancang untuk konektivitas rendah</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Literasi teknologi rendah</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <CardTitle>Keterkaitan Pasar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Jalur distribusi langsung</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Koneksi ke ritel nasional</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">Akses ke pusat ekspor</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <CardContent className="pt-8 pb-8">
                  <div className="text-center mb-6">
                    <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-4">Visi Perusahaan</h2>
                  </div>
                  <blockquote className="text-lg text-center text-muted-foreground text-pretty leading-relaxed italic">
                    "Menjadi mitra terpercaya dalam mengembangkan potensi desa dan produk yang kompetitif, memperkuat
                    tata kelola melalui partisipasi masyarakat, menjaga lingkungan, dan menghormati kearifan lokal untuk
                    mencapai kemandirian ekonomi yang berkeadilan."
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">6 Misi Strategis</h2>
              <p className="text-muted-foreground">Enam misi memperkuat visi dan memandu pelaksanaan program</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {missions.map((mission, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <mission.icon className="h-10 w-10 text-primary mb-4" />
                    <h3 className="font-semibold mb-2 text-lg">{mission.title}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{mission.description}</p>
                    <p className="text-xs text-muted-foreground">{mission.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Tim Kami</h2>
              <p className="text-muted-foreground">
                Struktur tim selaras dengan pelaksanaan program desa berkelanjutan
              </p>
            </div>

            {/* Leadership Team */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">Tim Kepemimpinan</h3>
              <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
                {teamLeaders.map((leader, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardContent className="pt-8">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 mx-auto mb-4 flex items-center justify-center">
                        <Users className="h-12 w-12 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-1">{leader.name}</h3>
                      <p className="text-sm text-primary font-medium">{leader.position}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Support Team */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">Tim Support</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {teamSupport.map((team, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <team.icon className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">{team.department}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {team.members.map((member, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{member}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">Legalitas</h2>
              <p className="text-center text-muted-foreground mb-12">
                Dokumen hukum formal yang mengkonfirmasi kepatuhan perusahaan
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <FileCheck className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">Akta Pendirian PT</h3>
                      <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-3">
                        ✓ Terdaftar
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        Akta pendirian resmi yang mengkonfirmasi pendirian badan hukum
                      </p>
                      <div className="w-full bg-muted p-3 rounded">
                        <p className="text-xs text-muted-foreground mb-1">Nomor AHU</p>
                        <p className="font-mono text-sm font-semibold">AHU-00910.AH.02.01.TAHUN2021</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">Nomor Izin Usaha</h3>
                      <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-3">
                        ✓ AKTIF
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">Otorisasi operasional</p>
                      <p className="text-sm text-muted-foreground">Berlaku untuk operasional bisnis</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-8">
                Dokumen tersedia atas permintaan • Natadesa Nusantara
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nilai-Nilai Perusahaan</h2>
              <p className="text-muted-foreground">Prinsip yang memandu setiap langkah kami</p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <value.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Pencapaian & Dampak</h2>
              <p className="text-muted-foreground">Jangkauan dan hasil kerja kami</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 max-w-5xl mx-auto">
              {impactMetrics.map((metric, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <p className="text-4xl font-bold text-primary mb-2">{metric.number}</p>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <Rocket className="h-16 w-16 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold mb-4">Mari Berkolaborasi</h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty">
                Bergabunglah dengan kami dalam membangun desa berkelanjutan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/kontak">
                    <Phone className="mr-2 h-5 w-5" />
                    Hubungi Kami
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/portfolio">
                    Lihat Portfolio
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <a href="/company-profile.pdf" download>
                    <Download className="mr-2 h-5 w-5" />
                    Download Company Profile
                  </a>
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
