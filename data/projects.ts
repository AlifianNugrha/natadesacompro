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
        kecamatan: "Kaubun",
        kabupaten: "Kutai Kartanegara",
        provinsi: "Kalimantan Timur",
        kategori: "Rencana Induk Desa",
        category: "masterplan",
        badge: "NEW",
        content: "Perencanaan strategis yang diarahkan untuk menjadikan Desa Ghatak sebagai pusat pertumbuhan ekonomi baru di Kutai Timur melalui penguatan infrastruktur dan manajemen sumber daya desa.",
        gallery: ["/porto/ghatakatas/ghatakatas.jpg", "/porto/ghatakatas/ghatakatas.jpg", "/porto/ghatakatas/ghatakatas.jpg"]
    },
    {
        id: "pendampingan-delanggu-ecopark",
        year: "2025",
        name: "Pendampingan Delanggu Eco Park",
        kecamatan: "Delanggu",
        kabupaten: "Kutai Kartanegara",
        provinsi: "Kalimantan Timur",
        kategori: "Pendampingan Eco Park",
        category: "masterplan",
        badge: "NEW",
        content: "Perencanaan strategis yang diarahkan untuk menjadikan Desa Ghatak sebagai pusat pertumbuhan ekonomi baru di Kutai Timur melalui penguatan infrastruktur dan manajemen sumber daya desa.",
        gallery: ["/porto/pendampingandelanggupark/delanggu1.png", "/porto/pendampingandelanggupark/delanggu2.png", "/porto/pendampingandelanggupark/delanggu2.png"]
    },
    {
        id: "RFID-Umbul-Ponggok",
        year: "2025",
        name: "RFID Umbul Ponggok",
        kecamatan: "Delanggu",
        kabupaten: "Kutai Kartanegara",
        provinsi: "Kalimantan Timur",
        kategori: "RFID-Umbul-Ponggok",
        category: "masterplan",
        badge: "NEW",
        content: "Perencanaan strategis yang diarahkan untuk menjadikan Desa Ghatak sebagai pusat pertumbuhan ekonomi baru di Kutai Timur melalui penguatan infrastruktur dan manajemen sumber daya desa.",
        gallery: ["/porto/rfidumbul/rfid.png", "/porto/rfidumbul/rfid.png", "/porto/rfidumbul/rfid.png"]
    },
    {
        id: "website-bumdes-tirtamandiri",
        year: "2025",
        name: "Website BUMDes Tirtamandiri",
        kecamatan: "Delanggu",
        kabupaten: "Kutai Kartanegara",
        provinsi: "Kalimantan Timur",
        kategori: "Website BUMDes Tirtamandiri",
        category: "masterplan",
        badge: "NEW",
        content: "Perencanaan strategis yang diarahkan untuk menjadikan Desa Ghatak sebagai pusat pertumbuhan ekonomi baru di Kutai Timur melalui penguatan infrastruktur dan manajemen sumber daya desa.",
        gallery: ["/porto/websitetirtamandiri/tirtamandiri.png", "/porto/websitetirtamandiri/tirtamandiri1.png", "/porto/websitetirtamandiri/tirtamandiri2.png"]
    },
    {
        id: "bp-soko-alas",
        year: "2025",
        name: "BP Soko Alas",
        kecamatan: "Delanggu",
        kabupaten: "Kutai Kartanegara",
        provinsi: "Kalimantan Timur",
        kategori: "BP Soko Alas",
        category: "masterplan",
        badge: "NEW",
        content: "Perencanaan strategis yang diarahkan untuk menjadikan Desa Ghatak sebagai pusat pertumbuhan ekonomi baru di Kutai Timur melalui penguatan infrastruktur dan manajemen sumber daya desa.",
        gallery: ["/porto/sokoalas/sokoalas.png", "/porto/sokoalas/sokoalas1.png", "/porto/sokoalas/sokoalas2.png"]
    },
    {
        id: "bumdes-sidowayah",
        year: "2025",
        name: "BUMDes Sidowayah",
        kecamatan: "Delanggu",
        kabupaten: "Kutai Kartanegara",
        provinsi: "Kalimantan Timur",
        kategori: "BUMDes Sidowayah",
        category: "masterplan",
        badge: "NEW",
        content: "Perencanaan strategis yang diarahkan untuk menjadikan Desa Ghatak sebagai pusat pertumbuhan ekonomi baru di Kutai Timur melalui penguatan infrastruktur dan manajemen sumber daya desa.",
        gallery: ["/porto/bumdessidowayah/bumdessidowayah.png", "/porto/bumdessidowayah/bumdessidowayah1.png", "/porto/bumdessidowayah/bumdessidowayah2.png"]
    },


];