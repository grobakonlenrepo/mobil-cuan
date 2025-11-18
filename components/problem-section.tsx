"use client";

import { useState, useEffect } from "react";
import { PROBLEMS } from "@/lib/constants";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MainPoint } from "@/components/main-point";

export function ProblemSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const visibleProblems = Array.from({ length: visibleCount }).map(
    (_, i) => PROBLEMS[(activeIndex + i) % PROBLEMS.length]
  );

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + visibleCount) % PROBLEMS.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prev) => (prev - visibleCount + PROBLEMS.length) % PROBLEMS.length
    );
  };

  return (
    <section id="problem" className="py-16 sm:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="md:text-4xl font-bold mb-4 uppercase text-balance text-sidebar-primary mt-9 tracking-wide text-2xl"
            style={{ letterSpacing: "0.025em" }}
          >
            {"Cari Mobil, Punya Modal, Pengen diputer Uang nya Jadi Cuan ?"}
          </h2>
        </div>

        <MainPoint />

        <p className="text-base sm:text-lg md:text-xl text-pretty leading-relaxed max-w-2xl mx-auto font-serif border-background shadow-none text-muted-foreground font-bold tracking-wide py-6">
          Mau beli harga mobil seharga kulakan? Atau mau coba usaha jualan
          mobil? tapi bingung:
        </p>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {visibleProblems.map((problem, index) => (
              <div
                key={index}
                className="group relative w-full bg-card border border-border rounded-2xl p-5 sm:p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform text-foreground text-center">
                  {problem.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 uppercase tracking-wide text-primary">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed font-serif font-bold tracking-widest leading-[0.5rem] text-base">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation controls */}
          <div className="flex justify-center items-center gap-4 mt-8">
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
              {Array.from({
                length: Math.ceil(PROBLEMS.length / visibleCount),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index * visibleCount)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === Math.floor(activeIndex / visibleCount)
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 w-2 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to problem slide ${index + 1}`}
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
        </div>
      </div>
    </section>
  );
}
