import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  const faqs = [
    {
      question: "Apa itu Natadesa Nusantara?",
      answer:
        "Natadesa Nusantara adalah perusahaan sosial yang fokus pada pengembangan desa wisata dan berkelanjutan melalui kolaborasi antara komunitas, pemerintah, dan mitra swasta.",
    },
    {
      question: "Layanan apa saja yang ditawarkan Natadesa?",
      answer:
        "Kami menawarkan empat layanan utama: Rencana Jangka Panjang Desa, Peningkatan Kapasitas HR, Digitalisasi dan Teknologi, serta Bantuan Manajemen Bisnis.",
    },
    {
      question: "Bagaimana cara bekerjasama dengan Natadesa?",
      answer:
        "Anda dapat menghubungi kami melalui halaman kontak untuk konsultasi gratis. Tim kami akan menghubungi Anda untuk membahas kebutuhan dan solusi terbaik.",
    },
    {
      question: "Apa itu platform bisnisdesa.id?",
      answer:
        "Bisnisdesa.id adalah platform digital terpadu yang menyediakan ekosistem dari hulu ke hilir untuk mengorganisir desa, termasuk ERP, marketplace, dan sistem manajemen.",
    },
    {
      question: "Berapa lama durasi proyek pengembangan desa?",
      answer:
        "Durasi proyek bervariasi tergantung pada kebutuhan dan skala proyek. Kami akan mendiskusikan timeline yang realistis dalam konsultasi awal.",
    },
  ]

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-balance">Frequently Asked Questions</h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Pertanyaan yang sering diajukan tentang Natadesa Nusantara
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
