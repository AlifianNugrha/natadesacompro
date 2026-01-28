import { allProjects } from "@/data/projects";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { MapPin, Building2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function ProjectDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const project = allProjects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <>
            <Header />
            <main className="min-h-screen py-20 bg-background">
                <div className="container max-w-6xl mx-auto px-6">
                    {/* Navigasi Kembali */}
                    <Link href="/portfolio" className="inline-flex items-center text-sm mb-12 text-muted-foreground hover:text-primary transition-colors">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Portfolio
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* SISI KIRI: Konten & Galeri */}
                        <div className="lg:col-span-8 space-y-12">
                            <div className="space-y-6">
                                <Badge variant="secondary" className="rounded-full px-4">{project.year}</Badge>
                                <h1 className="text-5xl font-bold tracking-tight">{project.name}</h1>
                                <p className="text-xl text-muted-foreground leading-relaxed">
                                    {project.content}
                                </p>
                            </div>

                            {/* Stack Gambar Dinamis */}
                            <div className="space-y-10">
                                {/* Gambar Utama (Cover) */}
                                {project.image && (
                                    <div className="group overflow-hidden rounded-3xl border shadow-sm">
                                        <img
                                            src={project.image}
                                            alt={project.name}
                                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                )}

                                {/* Looping Gambar dari Gallery */}
                                {project.gallery && project.gallery.length > 0 && (
                                    <div className="space-y-10">
                                        {project.gallery.map((img, index) => (
                                            <div key={index} className="group overflow-hidden rounded-3xl border shadow-sm">
                                                <img
                                                    src={img}
                                                    alt={`${project.name} detail ${index + 1}`}
                                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* SISI KANAN: Sidebar Info */}
                        <div className="lg:col-span-4">
                            <div className="sticky top-32 space-y-8">
                                <div className="p-8 border rounded-[2rem] bg-muted/20 backdrop-blur-sm space-y-6">
                                    <h3 className="text-lg font-semibold tracking-tight">Detail Proyek</h3>

                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="p-2.5 rounded-2xl bg-primary/10">
                                                <MapPin className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold mb-1">Lokasi</p>
                                                <p className="text-sm font-medium leading-tight">
                                                    {project.provinsi}<br />
                                                    <span className="text-muted-foreground font-normal">Kab. {project.kabupaten}</span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4">
                                            <div className="p-2.5 rounded-2xl bg-primary/10">
                                                <Building2 className="h-5 w-5 text-primary" />
                                            </div>
                                            <div>
                                                <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold mb-1">Kategori</p>
                                                <p className="text-sm font-medium leading-tight">{project.kategori || project.jenis || project.category}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}