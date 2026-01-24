import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-20">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8 max-w-4xl">
            <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
              <p>Terakhir diperbarui: 14 Januari 2026</p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Informasi yang Kami Kumpulkan</h2>
              <p>
                Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami, seperti nama, email, nomor
                telepon, dan informasi lainnya saat Anda menghubungi kami atau menggunakan layanan kami.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Penggunaan Informasi</h2>
              <p>
                Informasi yang kami kumpulkan digunakan untuk menyediakan dan meningkatkan layanan kami, berkomunikasi
                dengan Anda, dan memenuhi kewajiban hukum kami.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Keamanan Data</h2>
              <p>
                Kami mengambil langkah-langkah yang wajar untuk melindungi informasi pribadi Anda dari akses,
                penggunaan, atau pengungkapan yang tidak sah.
              </p>

              <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Kontak</h2>
              <p>
                Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami di hello@bisnisdesa.id
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
