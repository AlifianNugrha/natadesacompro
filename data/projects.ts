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
        content: "Rencana Induk Desa Cisitu berfokus pada pengembangan potensi agrowisata dan penguatan infrastruktur digital desa.",
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
        content: "Pengembangan rencana strategis Desa Grenggeng untuk meningkatkan ekonomi kreatif masyarakat lokal.",
        gallery: ["/porto/grenggeng/grenggeng.JPG", "/porto/grenggeng/grenggeng1.JPG", "/porto/grenggeng/grenggeng2.JPG"]

    },
    {
        id: "desa-loa-lepu",
        year: "2025",
        name: "Desa Loa Lepu",
        kecamatan: "Tenggarong Selatan",
        kabupaten: "Kutai Kartanegara",
        provinsi: "Kalimantan Timur",
        kategori: "Rencana Induk Desa",
        category: "masterplan",
        badge: "NEW",
        content: "Masterplan Desa Loa Lepu yang mengintegrasikan kearifan lokal dengan manajemen pariwisata modern."
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
        content: "Penyusunan rencana induk desa yang fokus pada pelestarian area perairan dan pariwisata sungai."
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
        content: "Perencanaan strategis untuk menjadikan Desa Bumi Etam sebagai pusat pertumbuhan ekonomi baru."
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
        content: "Peningkatan kapasitas tim pengelola desa dalam manajemen destinasi pariwisata."
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
        content: "Workshop manajemen profesional untuk penguatan unit usaha BUMDesa Ponggok."
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
        content: "Digitalisasi layanan BUMDesa melalui pembuatan website profil dan booking online.",
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
        content: "Implementasi sistem RFID untuk otomasi tiket dan sistem pembayaran cashless.",
        features: ["Ticketing automation", "Cashless"]
    }
];