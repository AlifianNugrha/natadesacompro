import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google" // Menggunakan Poppins sesuai permintaan
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// Konfigurasi font Poppins
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Natadesa Nusantara - Penggerak Desa Berkelanjutan",
  description:
    "Membangun potensi lokal, memberdayakan masyarakat, melestarikan kearifan budaya dan lingkungan melalui produk yang inovatif dan kolaboratif",
  generator: "v0.app",
  keywords: ["desa wisata", "pemberdayaan desa", "BUMDes", "sustainable development", "Indonesia"],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
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
    // Tambahkan suppressHydrationWarning di sini untuk fix error hydration atribut body
    <html lang="id" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}