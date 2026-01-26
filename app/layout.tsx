import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Konfigurasi font Poppins sesuai brand Natadesa
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  // Title dengan template agar SEO konsisten di semua halaman
  title: {
    default: "Natadesa Nusantara | Penggerak Desa Berkelanjutan Indonesia",
    template: "%s | Natadesa Nusantara"
  },

  // Deskripsi sangat penting agar Google tidak mengambil teks acak dari halaman lain
  description: "PT. Natadesa Bangun Negeri adalah perusahaan sosial yang berfokus pada pemberdayaan desa, pengembangan desa wisata, dan digitalisasi BUMDes di Indonesia.",

  keywords: [
    "desa wisata",
    "pemberdayaan desa",
    "BUMDes",
    "sustainable development",
    "Indonesia",
    "natadesanusantara",
    "pembangunan desa berkelanjutan"
  ],

  // Canonical URL memberitahu Google bahwa ini adalah URL utama (Home)
  alternates: {
    canonical: "https://natadesa.id", // Ganti dengan domain asli Anda nanti
  },

  // Open Graph agar saat link disebar di Sosmed/WA muncul gambar dan deskripsi rapi
  openGraph: {
    title: "Natadesa Nusantara",
    description: "Membangun potensi lokal dan melestarikan kearifan budaya melalui teknologi.",
    url: "https://natadesa.id",
    siteName: "Natadesa Nusantara",
    images: [
      {
        url: "/NDLOGO.png", // Pastikan file ini ada di folder public
        width: 800,
        height: 600,
        alt: "Logo Natadesa Nusantara",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  icons: {
    icon: [
      {
        url: "/NDLOGO.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/NDLOGO.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased font-poppins`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}