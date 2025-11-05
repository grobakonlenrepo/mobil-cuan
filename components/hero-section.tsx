"use client"

import { Button } from "@/components/ui/button"
import { HERO } from "@/lib/constants"
import { CtaButton } from "@/components/ui/cta-button"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[70vh] sm:min-h-[75vh] md:min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-cars.png"
          alt="Hero cars"
          className="w-full h-full object-cover object-center sm:object-center md:object-center"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 sm:mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-white font-serif tracking-wider sm:text-lg">
              Solusi murah, mudah, dan aman buat punya mobil{" "}
            </span>
          </div>

          <h1 className="title-gradient sm:text-5xl md:text-7xl sm:mb-6 text-balance px-4 text-2xl tracking-tighter mb-1.5">
            {HERO.title}
          </h1>

          <p className="sm:text-lg text-gray-200 sm:mb-12 max-w-2xl mx-auto text-pretty leading-relaxed px-4 font-serif tracking-wider mb-[21px] text-sm md:text-lg">
            {HERO.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
            {/* dark text on bright orange gradient for readability */}
            <CtaButton className="w-full sm:w-auto" textColor="dark">
              {HERO.cta.primary}
            </CtaButton>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 bg-white/10 backdrop-blur-md border-white/30 text-white hover:bg-white/20 w-full sm:w-auto font-serif"
            >
              {HERO.cta.secondary}
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex">
        <div className="flex flex-col items-center gap-2 text-white/70 animate-bounce">
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/70 to-transparent" />
        </div>
      </div>
    </section>
  )
}
