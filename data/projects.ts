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
        content: "Berlokasi di Kutai Kartanegara, desa ini memiliki potensi ekonomi besar di sektor perkebunan kelapa sawit dan pertanian pangan, serta peluang strategis pengembangan agrowisata berbasis edukasi alam dan pemberdayaan masyarakat melalui BUMDes."
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
        content: "Penyusunan rencana induk desa yang fokus pada optimalisasi potensi perairan pedalaman dan pengembangan pariwisata sungai sebagai penggerak ekonomi berbasis lingkungan."
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
        content: "Perencanaan strategis yang diarahkan untuk menjadikan Desa Bumi Etam sebagai pusat pertumbuhan ekonomi baru di Kutai Timur melalui penguatan infrastruktur dan manajemen sumber daya desa."
    },

    // --- TRAINING PROJECTS ---
    {
        id: "pelatihan-kdmp-tanggeran",
        year: "2025",
        name: "Pelatihan KDMP Tanggeran",
        desa: "Tanggeran",
        kabupaten: "Brebes",
        provinsi: "Jawa Tengah",
        jenis: "Pelatihan KDMP",
        category: "training",
        content: "Program pelatihan peningkatan kapasitas masyarakat dalam pengelolaan sumber daya desa dan pengembangan ekonomi kreatif berbasis potensi lokal di wilayah Tanggeran."
    },
    {
        id: "pelatihan-bumdesa-ponggok",
        year: "2024",
        name: "Pelatihan BUMDesa Ponggok",
        desa: "Ponggok",
        kabupaten: "Klaten",
        provinsi: "Jawa Tengah",
        jenis: "Pelatihan BUMDes",
        category: "training",
        content: "Penyelenggaraan workshop manajemen profesional yang berfokus pada penguatan unit usaha BUMDesa Ponggok untuk mempertahankan ekosistem pariwisata desa yang berkelanjutan."
    },

    // --- TECH PROJECTS ---
    {
        id: "website-bumdesa-tirta-mandiri",
        year: "2024",
        name: "Website BUMDesa Tirta Mandiri",
        desa: "Ponggok",
        kabupaten: "Klaten",
        provinsi: "Jawa Tengah",
        category: "tech",
        content: "Inisiasi digitalisasi layanan BUMDesa melalui pembuatan platform website profil dan sistem booking online untuk mempermudah akses wisatawan secara transparan.",
        features: ["Company profile", "Online booking"]
    },
    {
        id: "sistem-rfid-umbul-ponggok",
        year: "2024",
        name: "Sistem RFID Umbul Ponggok",
        desa: "Ponggok",
        kabupaten: "Klaten",
        provinsi: "Jawa Tengah",
        category: "tech",
        content: "Implementasi teknologi RFID untuk modernisasi tiket masuk dan sistem pembayaran cashless, guna meningkatkan efisiensi operasional dan kenyamanan pengunjung di area wisata.",
        features: ["Ticketing automation", "Cashless"]
    }
];