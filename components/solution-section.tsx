import { CarFront, Gauge, Zap } from "lucide-react";
import { SOLUTIONS } from "@/lib/constants";

const icons = [CarFront, Gauge, Zap];

export function SolutionSection() {
  return (
    <section id="solution" className="py-16 sm:py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2
            className="title-gradient text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-balance text-white tracking-wide"
            style={{ letterSpacing: "0.025em" }}
          >
            MobilCuan Hadir untuk Jawab Itu Semua
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground text-pretty leading-relaxed font-serif">
            {
              "Akses eksklusif ke harga kulakan mobil — plus layanan jual mobil profesional jika kamu butuh bantuan."
            }
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {SOLUTIONS.slice(0, 4).map((solution, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={index}
                className="relative grid grid-cols-1 overflow-hidden rounded-xl border border-border bg-card p-4 sm:p-5 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-[var(--primary)] via-[#FF8A20] to-[var(--accent)] text-white leading-7">
                    <Icon className="h-4 w-4 aspect-square" />
                  </span>
                  <h3 className="sm:text-lg uppercase font-bold tracking-wide text-lg">
                    {solution.title}
                  </h3>
                </div>
                <p className="text-muted-foreground leading-relaxed tracking-wider font-serif mb-3 text-sm sm:text-lg">
                  {solution.description}
                </p>
                <div className="uppercase sm:text-xl font-extrabold text-[var(--primary)] tracking-wide text-base">
                  {solution.metric}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
