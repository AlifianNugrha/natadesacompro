import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Company Info */}
          <div className="lg:col-span-1">
            {/* Menggunakan inline style untuk memaksa ukuran maksimal logo */}
            <div className="mb-6" style={{ width: '180px' }}>
              <Image
                src="/logo.png"
                alt="NATADESA NUSANTARA"
                width={100}
                height={30}
                priority
                style={{ width: '100%', height: 'auto' }}
                className="object-contain"
              />
            </div>
            <p className="text-sm font-bold text-slate-900 mb-2">PT. Natadesa Bangun Negeri</p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Penggerak desa berkelanjutan di Indonesia melalui inovasi dan kolaborasi.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Tautan Cepat</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/tentang-kami" className="text-slate-500 hover:text-[#172317] transition-colors">Tentang Kami</Link></li>
              <li><Link href="/layanan" className="text-slate-500 hover:text-[#172317] transition-colors">Layanan</Link></li>
              <li><Link href="/solusi" className="text-slate-500 hover:text-[#172317] transition-colors">Solusi</Link></li>
              <li><Link href="/portfolio" className="text-slate-500 hover:text-[#172317] transition-colors">Portfolio</Link></li>
              <li><Link href="/platform" className="text-slate-500 hover:text-[#172317] transition-colors">Platform</Link></li>
              <li><Link href="/analisis" className="text-slate-500 hover:text-[#172317] transition-colors">Analisis</Link></li>
              <li><Link href="/mitra" className="text-slate-500 hover:text-[#172317] transition-colors">Mitra</Link></li>
              <li><Link href="/artikel" className="text-slate-500 hover:text-[#172317] transition-colors">Artikel</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/karir" className="text-slate-500 hover:text-[#172317] transition-colors">Karir</Link></li>
              <li><Link href="/faq" className="text-slate-500 hover:text-[#172317] transition-colors">FAQ</Link></li>
              <li><Link href="/privacy-policy" className="text-slate-500 hover:text-[#172317] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-slate-500 hover:text-[#172317] transition-colors">Terms of Service</Link></li>
              <li><Link href="/sitemap" className="text-slate-500 hover:text-[#172317] transition-colors">Sitemap</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Kontak</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#172317]" />
                <span className="hover:text-[#172317] cursor-pointer transition-colors">0882-0063-78745</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#172317]" />
                <span className="hover:text-[#172317] cursor-pointer transition-colors">hello@bisnisdesa.id</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-[#172317] shrink-0" />
                <div>
                  <p className="font-bold text-slate-900 mb-1">HEAD OFFICE</p>
                  <p className="text-xs leading-normal">House of Dolan Indonesia (Lantai 1)<br />Jl. Sidoluhur No.59, Laweyan, Surakarta</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 text-[#172317] shrink-0" />
                <div>
                  <p className="font-bold text-slate-900 mb-1">REPRESENTATIVE OFFICE</p>
                  <p className="text-xs leading-normal">Tresno Building (Lantai 3)<br />Jl. Pakubuwono VI No.5, Jakarta Selatan</p>
                </div>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href="#" className="p-2 rounded-md bg-slate-50 text-slate-400 hover:bg-[#172317] hover:text-white transition-all">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/natadesanusantara"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-slate-50 text-slate-400 hover:bg-[#172317] hover:text-white transition-all"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="p-2 rounded-md bg-slate-50 text-slate-400 hover:bg-[#172317] hover:text-white transition-all">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-8 text-center text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} PT Natadesa Bangun Negeri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}