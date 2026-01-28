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
    {
        id: "RW-01-Desa-Ponggok",
        year: "2025",
        name: "RW 01 Desa Ponggok Fish and Farm",
        kecamatan: "Kaubun",
        kabupaten: "Kutai Timur",
        provinsi: "Kalimantan Timur",
        kategori: "Rencana Induk Desa",
        category: "masterplan",
        badge: "NEW",
        content: "Perencanaan strategis yang diarahkan untuk menjadikan Desa Bumi Etam sebagai pusat pertumbuhan ekonomi baru di Kutai Timur melalui penguatan infrastruktur dan manajemen sumber daya desa."
    },



];