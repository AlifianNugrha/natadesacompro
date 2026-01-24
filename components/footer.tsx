import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 py-12 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold text-primary mb-4">NATADESA NUSANTARA</h3>
            <p className="text-sm text-muted-foreground mb-4">PT. Natadesa Bangun Negeri</p>
            <p className="text-sm text-muted-foreground">Penggerak desa berkelanjutan di Indonesia</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Tautan Cepat</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tentang-kami" className="text-muted-foreground hover:text-primary">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="text-muted-foreground hover:text-primary">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/solusi" className="text-muted-foreground hover:text-primary">
                  Solusi
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-muted-foreground hover:text-primary">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/platform" className="text-muted-foreground hover:text-primary">
                  Platform
                </Link>
              </li>
              <li>
                <Link href="/analisis" className="text-muted-foreground hover:text-primary">
                  Analisis
                </Link>
              </li>
              <li>
                <Link href="/mitra" className="text-muted-foreground hover:text-primary">
                  Mitra
                </Link>
              </li>
              <li>
                <Link href="/artikel" className="text-muted-foreground hover:text-primary">
                  Artikel
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/karir" className="text-muted-foreground hover:text-primary">
                  Karir
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-muted-foreground hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-muted-foreground hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/sitemap" className="text-muted-foreground hover:text-primary">
                  Sitemap
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>0882-0063-78745</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>hello@bisnisdesa.id</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">HEAD OFFICE</p>
                  <p>House of Dolan Indonesia (Lantai 1)</p>
                  <p>Jl. Sidoluhur No.59, Laweyan</p>
                  <p>Kec. Laweyan, Kota Surakarta</p>
                  <p>Jawa Tengah 57148</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-foreground">REPRESENTATIVE OFFICE</p>
                  <p>Tresno Building (Lantai 3)</p>
                  <p>Jl. Pakubuwono VI No.5, RT.8/RW.4</p>
                  <p>Gunung, Kec. Kby. Baru</p>
                  <p>Kota Jakarta Selatan</p>
                  <p>DKI Jakarta 12120</p>
                </div>
              </li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} PT Natadesa Bangun Negeri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
