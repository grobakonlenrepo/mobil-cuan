"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AVAILABLE_PRODUCTS } from "@/lib/constants";
import { ArrowRight, Lock, ChevronLeft, ChevronRight } from "lucide-react";
import { MemberPreviewModal } from "./member-preview-modal";

export function AvailableSection() {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof AVAILABLE_PRODUCTS)[0] | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleJoinMember = (product: (typeof AVAILABLE_PRODUCTS)[0]) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const nextSlide = () => {
    setCurrentSlide(
      (prev) => (prev + visibleCount) % AVAILABLE_PRODUCTS.length
    );
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - visibleCount + AVAILABLE_PRODUCTS.length) %
        AVAILABLE_PRODUCTS.length
    );
  };

  const visibleProducts = Array.from({ length: visibleCount }).map(
    (_, i) => AVAILABLE_PRODUCTS[(currentSlide + i) % AVAILABLE_PRODUCTS.length]
  );

  return (
    <>
      <section id="available" className="py-16 sm:py-20 lg:py-32 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2
              className="title-gradient text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-sans uppercase tracking-[0.06em] mb-3 sm:mb-4 text-balance"
              style={{ letterSpacing: "0.025em" }}
            >
              AVAILABLE
            </h2>
            <p className="text-muted-foreground uppercase tracking-wide text-xl">
              Cek Harga Kulakan Khusus Member
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {visibleProducts.map((product, index) => (
                  <div
                    key={index}
                    className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                  >
                    <div className="relative aspect-4/3 overflow-hidden bg-muted">
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-primary text-primary-foreground uppercase px-2 sm:px-3 py-1 rounded-full sm:text-sm font-semibold tracking-wide text-sm">
                        {product.category}
                      </div>
                    </div>

                    <div className="p-5 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 tracking-wide">
                        {product.name}
                      </h3>
                      <p className="mb-5 sm:mb-6 leading-relaxed font-serif text-sidebar-foreground text-base tracking-wide">
                        {product.description}
                      </p>

                      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
                        <div className="border-l-2 border-primary/50 pl-2 sm:pl-3">
                          <div className="uppercase tracking-wider text-muted-foreground mb-1 text-base">
                            Harga Bakul
                          </div>
                          <div className="flex items-center gap-2">
                            <Lock className="h-3 w-3 text-primary" />
                            <span className="text-sm font-semibold font-serif text-foreground tracking-wide sm:text-base">
                              Khusus Member
                            </span>
                          </div>
                        </div>
                        <div className="border-l-2 border-primary/50 pl-2 sm:pl-3">
                          <div className="uppercase tracking-wider text-muted-foreground mb-1 text-base">
                            Harga Pasar
                          </div>
                          <div className="flex items-center gap-2">
                            <Lock className="h-3 w-3 text-primary" />
                            <span className="text-sm sm:text-base font-semibold font-serif text-foreground">
                              Khusus Member
                            </span>
                          </div>
                        </div>
                      </div>

                      <Button
                        onClick={() => handleJoinMember(product)}
                        className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90 text-base cursor-pointer"
                      >
                        Lihat Selengkapnya
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                variant="outline"
                size="icon-xl"
                onClick={prevSlide}
                className="absolute -left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-20
             rounded-md bg-background/20 hover:bg-background
             shadow-lg transition-transform active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </Button>

              <Button
                variant="outline"
                size="icon-xl"
                onClick={nextSlide}
                className="absolute -right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-20
             rounded-md bg-background/20 hover:bg-background 
             shadow-lg transition-transform active:scale-95 cursor-pointer"
              >
                <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-primary"  />
              </Button>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({
                  length: Math.ceil(AVAILABLE_PRODUCTS.length / visibleCount),
                }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index * visibleCount)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === Math.floor(currentSlide / visibleCount)
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedProduct && (
        <MemberPreviewModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedProduct(null);
          }}
          product={selectedProduct}
        />
      )}
    </>
  );
}
