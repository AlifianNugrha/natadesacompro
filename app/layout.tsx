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
  title: "Natadesa Nusantara ",

  keywords: ["desa wisata", "pemberdayaan desa", "BUMDes", "sustainable development", "Indonesia", "natadesanusantara"],
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
    // Tambahkan suppressHydrationWarning di sini untuk fix error hydration atribut body
    <html lang="id" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}