"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SOLD_OUT_PRODUCTS, AVAILABLE_PRODUCTS, PRODUCTS } from "@/lib/constants"
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react"

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product =
    SOLD_OUT_PRODUCTS.find((p) => p.id === params.id) ||
    AVAILABLE_PRODUCTS.find((p) => p.id === params.id) ||
    PRODUCTS.find((p) => p.id === params.id)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Produk tidak ditemukan</h1>
          <Link href="/#products">
            <Button>Kembali ke Produk</Button>
          </Link>
        </div>
      </div>
    )
  }

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % product.gallery.length)
  }

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + product.gallery.length) % product.gallery.length)
  }

  const handleBackClick = () => {
    window.history.back()
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border">
        <div className="container mx-auto px-4 lg:px-8 py-4">
          <button
            onClick={handleBackClick}
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke Produk
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Main Image and Gallery */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted rounded-2xl mb-4">
                <img
                  src={product.gallery[selectedImageIndex] || "/placeholder.svg"}
                  alt={`${product.name} - View ${selectedImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Navigation Buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-5 gap-2">
                {product.gallery.map((image, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImageIndex(idx)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImageIndex === idx ? "border-primary" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info Sidebar */}
          <div>
            <div className="bg-card border border-border rounded-2xl p-6 sticky top-4">
              <h1 className="text-2xl lg:text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-sm text-muted-foreground mb-4">{product.category}</p>

              <div className="mb-6 pb-6 border-b border-border">
                <p className="text-sm text-muted-foreground mb-2">Harga Kulakan</p>
                <p className="text-3xl font-bold text-primary mb-2">{product.specs.hargabakul}</p>
                <p className="text-sm line-through text-muted-foreground">Harga Pasar: {product.specs.hargapasar}</p>
              </div>

              <div className="mb-6">
                <Button className="w-full mb-3">Join Member</Button>
                <Button variant="outline" className="w-full bg-transparent">
                  Hubungi Kami
                </Button>
              </div>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Transmisi:</span>
                  <span className="font-semibold">{product.specs.tranmisi}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Range:</span>
                  <span className="font-semibold">{product.specs.range}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Spesifikasi Kendaraan */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-6 pb-4 border-b border-border">SPESIFIKASI KENDARAAN</h2>
            <div className="space-y-4">
              {Object.entries(product.detailedSpecs.spesifikasi).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between items-start pb-3 border-b border-dashed border-border/50"
                >
                  <span className="text-sm font-semibold text-muted-foreground uppercase">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                  <span className="text-sm font-semibold text-foreground text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dokumen Kendaraan */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h2 className="text-xl font-bold mb-6 pb-4 border-b border-border">DOKUMEN KENDARAAN</h2>
            <div className="space-y-4">
              {Object.entries(product.detailedSpecs.dokumen).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between items-start pb-3 border-b border-dashed border-border/50"
                >
                  <span className="text-sm font-semibold text-muted-foreground uppercase">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </span>
                  <span className="text-sm font-semibold text-foreground text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Catatan Tambahan */}
        <div className="bg-card border border-border rounded-2xl p-6 mb-12">
          <h2 className="text-xl font-bold mb-4 pb-4 border-b border-border">CATATAN TAMBAHAN</h2>
          <p className="text-sm leading-relaxed text-foreground">{product.detailedSpecs.catatan}</p>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Tertarik dengan Mobil Ini?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Bergabunglah dengan MobilCuan dan dapatkan akses ke harga kulakan untuk mobil ini dan ratusan mobil lainnya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Join Member Sekarang</Button>
            <Button size="lg" variant="outline">
              Hubungi Tim Kami
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
