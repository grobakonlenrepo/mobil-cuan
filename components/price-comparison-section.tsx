"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ComparisonItem {
  id: string;
  name: string;
  auctionImage: string;
  marketplaceImage: string;
  specs: {
    year: string;
    type: string;
    transmission: string;
    mileage: string;
  };
  auctionPrice: string;
  marketplacePrice: string;
  savings: string;
}

const COMPARISON_DATA: ComparisonItem[] = [
  {
    id: "avanza-comparison",
    name: "Toyota Avanza G 1.3",
    auctionImage: "/harga-bakul.jpg",
    marketplaceImage: "/harga-pasar.svg",
    specs: {
      year: "2019",
      type: "MPV Keluarga",
      transmission: "Manual",
      mileage: "35,000 - 40,000 KM",
    },
    auctionPrice: "Rp131 Juta",
    marketplacePrice: "Rp154 Juta",
    savings: "Hemat Rp14 Juta",
  },
];

export function PriceComparisonSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % COMPARISON_DATA.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - 1 + COMPARISON_DATA.length) % COMPARISON_DATA.length
    );
  };

  const item = COMPARISON_DATA[activeIndex];

  return (
    <section
      id="price-comparison"
      className="py-16 sm:py-20 lg:py-32 bg-background"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2
            className="title-gradient text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-sans uppercase mb-3 sm:mb-4 text-balance tracking-wide"
            style={{ letterSpacing: "0.025em" }}
          >
            Market Prediction
          </h2>
          <p className="text-muted-foreground font-serif tracking-wide text-lg italic sm:text-xl">
            harga kulakan vs harga pasaran
          </p>
        </div>

        {/* Comparison Card */}
        <div className="max-w-7xl mx-auto mb-12">
          <div className="bg-card border border-border rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
              {/* Left Side - Auction Price */}
              <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between bg-muted/20">
                <div className="w-full">
                  <div className="uppercase mb-2 sm:mb-4 font-semibold tracking-wide text-primary text-lg">
                    Harga Kulakan
                  </div>
                  <h3 className="sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-8 text-foreground text-xl tracking-wide">
                    {item.name}
                  </h3>

                  <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 mb-4 sm:mb-8 rounded-xl overflow-hidden bg-muted flex items-center justify-center">
                    <img
                      src={item.auctionImage || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>

                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-8">
                    <div className="flex justify-between items-center pb-2 sm:pb-3 border-b border-border">
                      <span className="text-muted-foreground text-xl">
                        Tahun
                      </span>
                      <span className="font-semibold text-sm text-foreground tracking-wide sm:text-lg">
                        {item.specs.year}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2 sm:pb-3 border-b border-border">
                      <span className="text-muted-foreground text-base sm:text-xl">
                        Tipe
                      </span>
                      <span className="font-semibold text-sm text-foreground tracking-wide sm:text-lg">
                        {item.specs.type}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2 sm:pb-3 border-b border-border">
                      <span className="text-muted-foreground text-base sm:text-xl">
                        Transmisi
                      </span>
                      <span className="font-semibold text-sm text-foreground tracking-wide sm:text-lg">
                        {item.specs.transmission}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-xl">
                        Odometer
                      </span>
                      <span className="font-semibold text-foreground tracking-wide text-lg">
                        {item.specs.mileage}
                      </span>
                    </div>
                  </div>

                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-3 sm:p-4">
                    <div className="uppercase tracking-widest mb-1 font-semibold text-foreground text-base">
                      Harga Kulakan
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary tracking-normal">
                      {item.auctionPrice}
                    </div>
                  </div>
                </div>
              </div>

              {/* VS Icon - Show on all screen sizes with responsive sizing */}
              <div className="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="bg-background border-4 border-primary rounded-full w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center shadow-lg">
                  <span className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                    VS
                  </span>
                </div>
              </div>

              {/* Right Side - Marketplace Price */}
              <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-between border-t md:border-t-0 md:border-l border-border">
                <div className="w-full">
                  <div className="uppercase mb-2 sm:mb-4 font-semibold text-primary tracking-wide text-lg">
                    Harga Marketplace
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-8 text-foreground tracking-wide">
                    {item.name}
                  </h3>

                  <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-72 mb-4 sm:mb-8 rounded-xl overflow-hidden bg-muted flex items-center justify-center">
                    <img
                      src={item.marketplaceImage || "/placeholder.svg"}
                      alt={item.name}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>

                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-8">
                    <div className="flex justify-between items-center pb-2 sm:pb-3 border-b border-border">
                      <span className="text-muted-foreground text-xl">
                        Tahun
                      </span>
                      <span className="font-semibold text-foreground tracking-wide text-lg">
                        {item.specs.year}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2 sm:pb-3 border-b border-border">
                      <span className="text-muted-foreground text-base sm:text-xl">
                        Tipe
                      </span>
                      <span className="font-semibold text-foreground tracking-wide text-lg">
                        {item.specs.type}
                      </span>
                    </div>
                    <div className="flex justify-between items-center pb-2 sm:pb-3 border-b border-border">
                      <span className="text-muted-foreground text-base sm:text-xl">
                        Transmisi
                      </span>
                      <span className="font-semibold text-sm text-foreground tracking-wide sm:text-lg">
                        {item.specs.transmission}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-muted-foreground text-base sm:text-xl">
                        Odometer
                      </span>
                      <span className="font-semibold text-sm text-foreground tracking-wide sm:text-lg">
                        {item.specs.mileage}
                      </span>
                    </div>
                  </div>

                  <div className="border rounded-xl p-3 sm:p-4 bg-[rgba(255,123,0,0.20108695652173914)] border-primary">
                    <div className="uppercase tracking-widest mb-1 font-semibold text-foreground text-base">
                      Harga Marketplace
                    </div>
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-normal text-chart-5">
                      {item.marketplacePrice}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center items-center gap-4 mb-12">
          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon-xl"
            className="bg-transparent text-slate-50 rounded-md size-12 cursor-pointer"
            aria-label="Previous problem"
          >
            <ChevronLeft className="w-9 text-foreground h-9" />
          </Button>

          <div className="flex justify-center gap-2">
            {COMPARISON_DATA.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to comparison ${index + 1}`}
              />
            ))}
          </div>

          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon-xl"
            className="bg-transparent text-slate-50 rounded-md size-12 cursor-pointer"
            aria-label="Next problem"
          >
            <ChevronRight className="text-foreground h-9 w-9" />
          </Button>
        </div>

        {/* Info Text */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="font-serif text-foreground tracking-wide text-base sm:text-xl">
            Dengan membership MobilCuan, kamu bisa beli mobil dengan harga
            lelang (kulakan) seperti bakul besar. Tidak ada markup berlebihan,
            semua transparan, dan mobil sudah terverifikasi.
          </p>
        </div>
      </div>
    </section>
  );
}
