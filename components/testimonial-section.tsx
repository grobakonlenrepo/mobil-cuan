"use client";

import { TESTIMONIALS } from "@/lib/constants";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export function TestimonialSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentSlide]);

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="title-gradient text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-sans uppercase mb-3 sm:mb-4 text-balance tracking-wide">
            Kata Mereka Tentang MobilCuan
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed font-serif"></p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {TESTIMONIALS.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-card border border-border rounded-2xl p-8 md:p-12 max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
                      {/* Left: Avatar Image */}
                      <div className="flex-shrink-0">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-40 h-40 md:w-64 md:h-64 rounded-xl object-cover shadow-md"
                        />
                      </div>

                      {/* Right: Testimonial Content */}
                      <div className="flex-1 flex flex-col justify-between text-center md:text-left">
                        {/* Stars */}
                        <div className="flex gap-1 mb-4 justify-center md:justify-start">
                          {Array.from({ length: testimonial.rating }).map(
                            (_, i) => (
                              <Star
                                key={i}
                                className="h-5 w-5 fill-primary text-primary"
                              />
                            )
                          )}
                        </div>

                        {/* Quote */}
                        <p className="text-base md:text-xl mb-6 leading-relaxed tracking-wide italic font-serif text-foreground">
                          "{testimonial.content}"
                        </p>

                        {/* Name and Role */}
                        <div>
                          <div className="md:text-lg font-serif font-semibold text-foreground text-lg tracking-wider">
                            {testimonial.name}
                          </div>
                          <div className="font-serif text-base md:text-lg tracking-wide text-primary">
                            {testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
            {TESTIMONIALS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
