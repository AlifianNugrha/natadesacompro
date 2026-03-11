export interface Project {
    id: string;
    year: string;
    name: string;
    kecamatan?: string;
    kabupaten: string;
    provinsi: string;
    kategori?: string;
    jenis?: string;
    desa?: string;
    badge?: string;
    description?: string;
    content: string;
    image?: string;
    gallery?: string[]; // Properti untuk menampung 3 gambar tambahan
    features?: string[];
    client?: string;
    category: "masterplan" | "training" | "tech" | "showcase";
}

export const allProjects: Project[] = [
    // --- MASTERPLAN PROJECTS ---
    {
        id: "desa-cisitu",
        year: "2025",
        name: "Desa Cisitu",
        kecamatan: "Cisitu",
        kabupaten: "Sumedang",
        provinsi: "Jawa Barat",
        kategori: "Rencana Induk Desa",
        category: "masterplan",
        badge: "NEW",
        content: "Wilayah ini memiliki karakteristik agraris yang kuat dengan potensi utama pada sektor pertanian hortikultura, khususnya sebagai produsen sayuran dan buah-buahan yang mencerminkan pola pedesaan produktif di Pulau Jawa.",
        gallery: ["/porto/desacisitu/cisitu.JPG", "/porto/desacisitu/cisitu1.JPG", "/porto/desacisitu/cisitu2.JPG"]
    },
    {
        id: "desa-grenggeng",
        year: "2025",
        name: "Desa Grenggeng",
        kecamatan: "Karanganyar",
        kabupaten: "Kebumen",
        provinsi: "Jawa Tengah",
        kategori: "Rencana Induk Desa",
        category: "masterplan",
        badge: "NEW",
        content: "Terletak di wilayah kabupaten agraris, desa ini mengandalkan komoditas agrikultur lokal seperti padi dan buah tropis yang dikombinasikan dengan pengembangan sektor kerajinan tangan serta pelestarian nilai-nilai sosial budaya masyarakat setempat.",
        gallery: ["/porto/grenggeng/grenggeng.JPG", "/porto/grenggeng/grenggeng1.JPG", "/porto/grenggeng/grenggeng2.JPG"]
    },
    {
        id: "desa-loa-lepu",
        year: "2025",
        name: "Desa Loa Lepu",
        kecamatan: "Tenggarong Seberang",
        kabupaten: "Kutai Kartanegara",
        provinsi: "Kalimantan Timur",
        kategori: "Rencana Induk Desa",
        category: "masterplan",
        badge: "NEW",
        content: "Berlokasi di Kutai Kartanegara, desa ini memiliki potensi ekonomi besar di sektor perkebunan kelapa sawit dan pertanian pangan, serta peluang strategis pengembangan agrowisata berbasis edukasi alam dan pemberdayaan masyarakat melalui BUMDes.",
        gallery: ["/porto/loalepu/loalepu.jpg", "/porto/loalepu/loalepu.jpg", "/porto/loalepu/loalepu.jpg"]

    },
    {
        id: "desa-muara-muntai-ilir",
        year: "2025",
        name: "Desa Muara Muntai Ilir",
        kecamatan: "Muara Muntai",
        kabupaten: "Kutai Kartanegara",
        provinsi: "Kalimantan Timur",
        kategori: "Rencana Induk Desa",
        category: "masterplan",
        badge: "NEW",
        content: "Penyusunan rencana induk desa yang fokus pada optimalisasi potensi perairan pedalaman dan pengembangan pariwisata sungai sebagai penggerak ekonomi berbasis lingkungan.",
        gallery: ["/porto/muarailir/muarailir.jpeg", "/porto/muarailir/muarailir.jpeg", "/porto/muarailir/muarailir.jpeg"]

    },
    {
        id: "desa-bumi-etam",
        year: "2025",
        name: "Desa Bumi Etam",
        kecamatan: "Kaubun",
        kabupaten: "Kutai Timur",
        provinsi: "Kalimantan Timur",
        kategori: "Rencana Induk Desa",
        category: "masterplan",
        badge: "NEW",
        content: "Perencanaan strategis yang diarahkan untuk menjadikan Desa Bumi Etam sebagai pusat pertumbuhan ekonomi baru di Kutai Timur melalui penguatan infrastruktur dan manajemen sumber daya desa.",
        gallery: ["/porto/bumietan/bumietan.jpeg", "/porto/bumietan/bumietan.jpeg", "/porto/bumietan/bumietan.jpeg"]

    },

    {
        id: "desa-ghatak",
        year: "2025",
        name: "Desa Ghatak",
        kecamatan: "Delanggu",
        kabupaten: "Klaten",
        provinsi: "Jawa Tengah",
        kategori: "Rencana Induk Desa",
        category: "masterplan",
        badge: "NEW",
        content: "Penyusunan rencana induk Desa Ghatak untuk memperkuat tata ruang wilayah dan manajemen sumber daya dalam rangka menciptakan desa wisata dan ekonomi kreatif yang tangguh serta berkelanjutan.",
        gallery: ["/porto/ghatakatas/ghatakatas.jpg", "/porto/ghatakatas/ghatakatas.jpg", "/porto/ghatakatas/ghatakatas.jpg"]
    },
    {
        id: "pendampingan-delanggu-ecopark",
        year: "2025",
        name: "Pendampingan Delanggu Eco Park",
        kecamatan: "Delanggu",
        kabupaten: "Klaten",
        provinsi: "Jawa Tengah",
        kategori: "Pendampingan Eco Park",
        category: "masterplan",
        badge: "NEW",
        content: "Pendampingan pengembangan kawasan pariwisata Delanggu Eco Park untuk meningkatkan potensi ekowisata, keberlanjutan lingkungan, dan manajemen sumber daya desa secara terpadu.",
        gallery: ["/porto/pendampingandelanggupark/delanggu1.png", "/porto/pendampingandelanggupark/delanggu2.png", "/porto/pendampingandelanggupark/delanggu2.png"]
    },
    {
        id: "RFID-Umbul-Ponggok",
        year: "2025",
        name: "RFID Umbul Ponggok",
        kecamatan: "Polanharjo",
        kabupaten: "Klaten",
        provinsi: "Jawa Tengah",
        kategori: "RFID-Umbul-Ponggok",
        category: "masterplan",
        badge: "NEW",
        content: "Penerapan sistem teknologi informasi dan RFID di objek wisata air Umbul Ponggok untuk digitalisasi manajemen tiket, efisiensi pengunjung, dan peningkatan pelayanan berstandar tinggi.",
        gallery: ["/porto/rfidumbul/rfid.png", "/porto/rfidumbul/rfid.png", "/porto/rfidumbul/rfid.png"]
    },
    {
        id: "website-bumdes-tirtamandiri",
        year: "2025",
        name: "Website BUMDes Tirtamandiri",
        kecamatan: "Polanharjo",
        kabupaten: "Klaten",
        provinsi: "Jawa Tengah",
        kategori: "Website BUMDes Tirtamandiri",
        category: "masterplan",
        badge: "NEW",
        content: "Pengembangan platform Website BUMDes Tirtamandiri untuk mendukung digitalisasi promosi produk unggulan, tata kelola administrasi modern, dan keterbukaan informasi desa.",
        gallery: ["/porto/websitetirtamandiri/tirtamandiri.png", "/porto/websitetirtamandiri/tirtamandiri1.png", "/porto/websitetirtamandiri/tirtamandiri2.png"]
    },
    {
        id: "bp-soko-alas",
        year: "2025",
        name: "BP Soko Alas",
        kecamatan: "Polanharjo",
        kabupaten: "Klaten",
        provinsi: "Jawa Tengah",
        kategori: "BP Soko Alas",
        category: "masterplan",
        badge: "NEW",
        content: "Penyusunan Business Plan kawasan Soko Alas untuk mengarahkan pendayagunaan destinasi wisata unggulan yang mendorong pertumbuhan ekonomi terpusat bagi masyarakat serta BUMDes setempat.",
        gallery: ["/porto/sokoalas/sokoalas.png", "/porto/sokoalas/sokoalas1.png", "/porto/sokoalas/sokoalas2.png"]
    },
    {
        id: "bumdes-sidowayah",
        year: "2025",
        name: "BUMDes Sidowayah",
        kecamatan: "Polanharjo",
        kabupaten: "Klaten",
        provinsi: "Jawa Tengah",
        kategori: "BUMDes Sidowayah",
        category: "masterplan",
        badge: "NEW",
        content: "Pendampingan dan pengembangan tata kelola BUMDes Sidowayah demi optimalisasi unit-unit usaha desa, pariwisata inovatif, hingga pemberdayaan elemen masyarakat dan UMKM.",
        gallery: ["/porto/bumdessidowayah/bumdessidowayah.png", "/porto/bumdessidowayah/bumdessidowayah1.png", "/porto/bumdessidowayah/bumdessidowayah2.png"]
    },
    {
        id: "bp-bumdes-ponggok",
        year: "2025",
        name: "BP BUMDes Ponggok",
        kecamatan: "Polanharjo",
        kabupaten: "Klaten",
        provinsi: "Jawa Tengah",
        kategori: "BP BUMDes Ponggok",
        category: "masterplan",
        badge: "NEW",
        content: "Perancangan sistem strategis lewat penyusunan Business Plan bagi BUMDes Ponggok guna membangun ekosistem wisata air yang ramah pengunjung, mandiri secara finansial, dan inklusif.",
        gallery: ["/porto/bpbumdesponggok/bpbumdespong.png", "/porto/bpbumdesponggok/bpbumdespong1.png", "/porto/bpbumdesponggok/bpbumdespong1.png"]
    },
    {
        id: "bp-jejak-bintang",
        year: "2025",
        name: "BP Jejak Bintang",
        kecamatan: "Polanharjo",
        kabupaten: "Klaten",
        provinsi: "Jawa Tengah",
        kategori: "BP Jejak Bintang",
        category: "masterplan",
        badge: "NEW",
        content: "Penyusunan Business Plan Jejak Bintang sebagai landasan pelaksanaan manajerial ekowisata, pembangunan kemandirian pemuda, dan inkubasi usaha kreatif masyarakat lokal.",
        gallery: ["/porto/bpjejakbintang/jejakbintang.png", "/porto/bpjejakbintang/jejakbintang1.png", "/porto/bpjejakbintang/jejakbintang2.png"]
    },
    {
        id: "bp-pelatihan-gatak",
        year: "2025",
        name: "BP Pelatihan Gatak",
        kecamatan: "Delanggu",
        kabupaten: "Klaten",
        provinsi: "Jawa Tengah",
        kategori: "BP Pelatihan Gatak",
        category: "masterplan",
        badge: "NEW",
        content: "Penyusunan Business Plan serta modul operasional untuk pusat Pelatihan Gatak guna menguatkan profil keahlian SDM pengelola sektor wisata dan aparatur BUMDes yang handal.",
        gallery: ["/porto/bppelatihanbumdesgatak/pelatihangatak.png", "/porto/bppelatihanbumdesgatak/pelatihangatak.png", "/porto/bppelatihanbumdesgatak/pelatihangatak.png"]
    },
    {
        id: "desa-barudua-garut",
        year: "2026",
        name: "Desa Barudua Garut",
        kecamatan: "Malangbong",
        kabupaten: "Garut",
        provinsi: "Jawa Barat",
        kategori: "Rencana Induk Desa",
        category: "masterplan",
        badge: "NEW",
        content: "Rencana strategis yang disusun secara holistik untuk memproyeksikan Desa Barudua Garut sebagai simpul pertumbuhan ekonomi regional yang sinergis antara sektor pertanian dan wisata alam.",
        gallery: ["/porto/baruduagarut/barudua.JPEG", "/porto/baruduagarut/barudua.JPEG", "/porto/baruduagarut/barudua.JPEG"]
    },
    {
        id: "kopidilselatan",
        year: "2026",
        name: "Desa kopidil selatan",
        kecamatan: "Kabola",
        kabupaten: "Alor",
        provinsi: "Nusa Tenggara Timur",
        kategori: "Rencana Induk Desa",
        category: "masterplan",
        badge: "NEW",
        content: "Penyusunan masterplan kawasan yang selaras dengan kekayaan nusantara dan potensi sumber daya alam dalam membangkitkan perekonomian masyarakat Desa Kopidil Selatan.",
        gallery: ["/porto/kopidilselatan/kopidilselatan.JPEG", "/porto/kopidilselatan/kopidilselatan.JPEG", "/porto/kopidilselatan/kopidilselatan.JPEG"]
    },
    {
        id: "pintumas",
        year: "2026",
        name: "Desa Pintumas",
        kecamatan: "Bintan Pesisir",
        kabupaten: "Bintan",
        provinsi: "Kepulauan Riau",
        kategori: "Pendampingan Desa",
        category: "masterplan",
        badge: "NEW",
        content: "Langkah-langkah strategis dan program pendampingan komprehensif untuk memandu optimalisasi kekuatan sumber daya kehidupan maritim dan tata kelola wisata pesisir percontohan.",
        gallery: ["/porto/pintumas/pintumas.JPEG", "/porto/pintumas/pintumas.JPEG", "/porto/pintumas/pintumas.JPEG"]
    },
    {
        id: "telukbakau",
        year: "2026",
        name: "Desa Teluk Bakau",
        kecamatan: "Gunung Kijang",
        kabupaten: "Bintan",
        provinsi: "Kepulauan Riau",
        kategori: "Pendampingan Desa",
        category: "masterplan",
        badge: "NEW",
        content: "Pemberdayaan aparatur dan warga yang terfokus pada revitalisasi potensi perairan desa guna menggarap kawasan ekowisata pantai yang indah serta berkelanjutan di Teluk Bakau.",
        gallery: ["/porto/telukbakau/telukbakau.JPEG", "/porto/telukbakau/telukbakau.JPEG", "/porto/telukbakau/telukbakau.JPEG"]
    },
    {
        id: "gunung-kijang",
        year: "2026",
        name: "Desa Gunung Kijang",
        kecamatan: "Gunung Kijang",
        kabupaten: "Bintan",
        provinsi: "Kepulauan Riau",
        kategori: "Pendampingan Desa",
        category: "masterplan",
        badge: "NEW",
        content: "Penyusunan arahan pendampingan desa inklusif dalam mengakomodasi pembangunan prasarana, menciptakan keunggulan pariwisata lokal, dan mendorong pemerataan ekonomi di Gunung Kijang.",
        gallery: ["/porto/gunungkijang/gunungkijang.JPEG", "/porto/gunungkijang/gunungkijang.JPEG", "/porto/gunungkijang/gunungkijang.JPEG"]
    },
    {
        id: "sidowayah-klaten",
        year: "2026",
        name: "Desa Sidowayah Klaten",
        kecamatan: "Polanharjo",
        kabupaten: "Klaten",
        provinsi: "Jawa Tengah",
        kategori: "Pendampingan Desa",
        category: "masterplan",
        badge: "NEW",
        content: "Pendampingan terarah untuk peningkatan keterampilan dalam perancangan desa wisata edukasi maupun atraksi rekreasi air khas Sidowayah, untuk ekonomi produktif yang matang.",
        gallery: ["/porto/sidowayah/sidowayah.JPEG", "/porto/sidowayah/sidowayah.JPEG", "/porto/sidowayah/sidowayah.JPEG"]
    },
    {
        id: "canden-boyolali",
        year: "2026",
        name: "Desa Canden Boyolali",
        kecamatan: "Sambi",
        kabupaten: "Boyolali",
        provinsi: "Jawa Tengah",
        kategori: "Pendampingan Desa",
        category: "masterplan",
        badge: "NEW",
        content: "Program advokasi dan manajemen lingkungan secara komprehensif yang dirancang khusus untuk membangun fondasi kawasan desa wisata sehat dan berketahanan ekologis tangguh di Canden.",
        gallery: ["/porto/candenboyolali/candenboyolali.JPEG", "/porto/candenboyolali/candenboyolali.JPEG", "/porto/candenboyolali/candenboyolali.JPEG"]
    },
    {
        id: "tibayan-klaten",
        year: "2026",
        name: "Desa Tibayan Klaten",
        kecamatan: "Jatinom",
        kabupaten: "Klaten",
        provinsi: "Jawa Tengah",
        kategori: "Pendampingan Desa",
        category: "masterplan",
        badge: "NEW",
        content: "Pemberdayaan sosial-ekonomi strategis bagi masyarakat setempat pada ekosistem usaha agrowisata untuk menaikkan kesejahteraan, lewat BUMDes Tibayan dan optimalisasi potensi lokal.",
        gallery: ["/porto/tibayanklaten/tibayanklaten.JPEG", "/porto/tibayanklaten/tibayanklaten.JPEG", "/porto/tibayanklaten/tibayanklaten.JPEG"]
    },
    {
        id: "motongbang",
        year: "2026",
        name: "Desa motongbang",
        kecamatan: "Teluk Mutiara",
        kabupaten: "Alor",
        provinsi: "Nusa Tenggara Timur",
        kategori: "Pendampingan Desa",
        category: "masterplan",
        badge: "NEW",
        content: "Harmonisasi dan pendampingan pengelolaan desa produktif, difokuskan pada penguatan produk-produk lokal, konservasi lingkungan cerdas, serta penambahan aset dan sarana prasarana wisata Motongbang.",
        gallery: ["/porto/motongbang/motongbang.JPEG", "/porto/motongbang/motongbang.JPEG", "/porto/motongbang/motongbang.JPEG"]
    },
    {
        id: "padidipa",
        year: "2026",
        name: "Wisata Padidipa",
        kecamatan: "Alor Selatan",
        kabupaten: "Alor",
        provinsi: "Nusa Tenggara Timur",
        kategori: "Pendampingan Desa",
        category: "masterplan",
        badge: "NEW",
        content: "Aktivitas fasilitasi dan pendampingan pelestarian wisata alam menakjubkan di Padidipa demi mengoptimalkan nilai jual wisata, meningkatkan keamanan kawasan, sekaligus membuka potensi kewirausahaan warga setempat.",
        gallery: ["/porto/padidipa/padidipa.JPEG", "/porto/padidipa/padidipa.JPEG", "/porto/padidipa/padidipa.JPEG"]
    },



];