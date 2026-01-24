import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p>Terakhir diperbarui: 14 Januari 2026</p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Penerimaan Ketentuan</h2>
              <p>
                Dengan mengakses dan menggunakan website ini, Anda menyetujui untuk terikat oleh Ketentuan Layanan ini.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Penggunaan Layanan</h2>
              <p>
                Anda setuju untuk menggunakan layanan kami hanya untuk tujuan yang sah dan sesuai dengan semua hukum
                yang berlaku.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Hak Kekayaan Intelektual</h2>
              <p>
                Semua konten di website ini, termasuk teks, grafik, logo, dan gambar, adalah milik PT Natadesa Bangun
                Negeri dan dilindungi oleh hukum hak cipta.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Batasan Tanggung Jawab</h2>
              <p>
                Kami tidak bertanggung jawab atas kerugian atau kerusakan yang timbul dari penggunaan layanan kami,
                kecuali jika disyaratkan oleh hukum.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
