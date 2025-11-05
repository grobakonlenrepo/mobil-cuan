"use client";
import { Button } from "@/components/ui/button";
import { SOLD_OUT_PRODUCTS, PRODUCTS_VERIFICATIONS } from "@/lib/constants";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { AvailableSection } from "./available-section";
import { PriceComparisonSection } from "./price-comparison-section";
import { useState, useEffect } from "react";

export function ProductSection() {
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

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + visibleCount) % SOLD_OUT_PRODUCTS.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - visibleCount + SOLD_OUT_PRODUCTS.length) %
        SOLD_OUT_PRODUCTS.length
    );
  };

  const visibleProducts = Array.from({ length: visibleCount }).map(
    (_, i) => SOLD_OUT_PRODUCTS[(currentSlide + i) % SOLD_OUT_PRODUCTS.length]
  );

  const handleProductClick = (productId: string) => {
    window.location.href = `/products/${productId}`;
  };

  return (
    <>
      <section id="products" className="py-16 sm:py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2
              className="title-gradient text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-sans uppercase mb-3 sm:mb-4 text-balance tracking-wide"
              style={{ letterSpacing: "0.025em" }}
            >
              {"SOLD OUT"}
            </h2>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {visibleProducts.map((product, index) => (
                  <div
                    key={index}
                    className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
                  >
                    <div
                      // onClick={() => handleProductClick(product.id)}
                      className="relative aspect-[4/3] overflow-hidden bg-muted cursor-pointer"
                    >
                      <img
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-primary text-primary-foreground px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider">
                        {product.category}
                      </div>
                    </div>
                    <div className="p-5 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold mb-2 tracking-wide">
                        {product.name}
                      </h3>

                      <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-5 sm:mb-6">
                        {Object.entries(product.specs).map(([key, value]) => (
                          <div
                            key={key}
                            className="border-l-2 border-primary/50 pl-2 sm:pl-3"
                          >
                            <div className="uppercase tracking-wider text-muted-foreground mb-1 text-base">
                              {key.replace(/([A-Z])/g, " $1").trim()}
                            </div>
                            <div className="text-sm font-semibold font-serif text-foreground sm:text-xl">
                              {value}
                            </div>
                          </div>
                        ))}
                      </div>
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
                <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
              </Button>

              {/* Dots indicator */}
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({
                  length: Math.ceil(SOLD_OUT_PRODUCTS.length / visibleCount),
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

          {PRODUCTS_VERIFICATIONS && PRODUCTS_VERIFICATIONS.length > 0 && (
            <div className="max-w-7xl mx-auto mt-12 sm:mt-16">
              <h3 className="text-2xl uppercase font-bold text-center text-primary mb-8 md:text-4xl tracking-wide">
                Semua Mobil Kami Terverifikasi
              </h3>
              <ul
                role="list"
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {PRODUCTS_VERIFICATIONS.map((item, idx) => (
                  <li
                    key={idx}
                    className="p-4 bg-card border border-border rounded-xl flex gap-3 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg hover:border-primary/40 focus-within:-translate-y-1 focus-within:shadow-lg items-center"
                  >
                    <CheckCircle2
                      aria-hidden="true"
                      className="h-5 w-5 text-primary mt-0.5 shrink-0"
                    />
                    <span className="font-serif text-foreground tracking-wide text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      <AvailableSection />

      <PriceComparisonSection />
    </>
  );
}
