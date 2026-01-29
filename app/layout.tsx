import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: {
    default: "Natadesa Nusantara | Penggerak Desa Berkelanjutan Indonesia",
    template: "%s | Natadesa Nusantara",
  },
  description:
    "PT. Natadesa Bangun Negeri adalah perusahaan sosial yang berfokus pada pemberdayaan desa, pengembangan desa wisata, dan digitalisasi BUMDes di Indonesia.",
  keywords: ["desa wisata", "pemberdayaan desa", "BUMDes", "natadesanusantara"],

  // Perbaikan Ikon dengan Query String (?v=2) untuk memaksa Google update
  icons: {
    icon: [
      { url: "/NDICO.ico?v=2" },
      { url: "/NDLOGO.png?v=2", type: "image/png" },
    ],
    shortcut: "/NDICO.ico?v=2",
    apple: "/NDICO.ico?v=2",
  },

  // Verifikasi sudah benar menggunakan kode terbaru Anda
  verification: {
    google: "6TVm1svVxduS3buPJLwdINf4NYTlyZodfGk2sffzoVU",
  },

  alternates: {
    canonical: "https://natadesanusantara.com",
  },

  openGraph: {
    title: "Natadesa Nusantara",
    description: "Membangun potensi lokal dan melestarikan kearifan budaya melalui teknologi.",
    url: "https://natadesanusantara.com",
    siteName: "Natadesa Nusantara",
    images: [
      {
        url: "/NDLOGO.png",
        width: 800,
        height: 600,
        alt: "Logo Natadesa Nusantara",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}