"use client";

import { SITE_CONFIG } from "@/lib/constants";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface MemberPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: {
    name: string;
    gallery: string[];
    detailedSpecs: {
      spesifikasi: Record<string, string>;
      dokumen: Record<string, string>;
      catatan: string;
    };
  };
}

export function MemberPreviewModal({
  isOpen,
  onClose,
  product,
}: MemberPreviewModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + product.gallery.length) % product.gallery.length
    );
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-4 sm:p-6 flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-bold tracking-wide uppercase">
            {product.name}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-6">
          <div className="space-y-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
              <img
                src={product.gallery[currentImageIndex] || "/placeholder.svg"}
                alt={`${product.name} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              {product.gallery.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>
            {/* Thumbnail indicators */}
            <div className="flex gap-2 overflow-x-auto">
              {product.gallery.map((image, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`h-12 w-12 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${
                    idx === currentImageIndex
                      ? "border-primary"
                      : "border-border"
                  }`}
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-wide">
              Spesifikasi Mobil
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {Object.entries(product.detailedSpecs.spesifikasi).map(
                ([key, value]) => (
                  <div key={key} className="border-l-2 border-primary/50 pl-3">
                    <div className="text-base uppercase tracking-wider text-muted-foreground mb-1">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </div>
                    <div className="text-lg tracking-wide font-serif font-medium text-foreground">
                      {value}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold uppercase tracking-wide">
              Dokumen
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {Object.entries(product.detailedSpecs.dokumen).map(
                ([key, value]) => (
                  <div key={key} className="border-l-2 border-primary/50 pl-3">
                    <div className="text-base uppercase tracking-wider text-muted-foreground mb-1">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </div>
                    <div className="text-lg tracking-wide font-serif font-medium text-foreground">
                      {value}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>

          {product.detailedSpecs.catatan && (
            <div className="bg-muted/50 border border-border rounded-lg p-4">
              <h3 className="text-lg font-bold uppercase tracking-wide">
                Catatan
              </h3>
              <p className="text-lg tracking-wide font-serif font-medium text-foreground">
                {product.detailedSpecs.catatan}
              </p>
            </div>
          )}

          <Link href={`https://wa.me/${SITE_CONFIG.whatsapp}`}>
            <Button className="w-full bg-primary text-md cursor-pointer text-primary-foreground hover:bg-primary/90 py-6  font-semibold tracking-wide uppercase">
              Join Member untuk Lihat Harga
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
