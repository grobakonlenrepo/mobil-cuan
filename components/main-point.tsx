import { MAIN_POINT } from "@/lib/constants";
import Image from "next/image";

export function MainPoint() {
  return (
    <section id="mainpoint" className="py-2 sm:py-4 lg:py-6 bg-background">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {MAIN_POINT.slice(0, 4).map((mainpoint, index) => {
            return (
              <div
                key={index}
                className="relative grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-2xl border border-border bg-card"
              >
                {/* Left: text */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl sm:text-2xl tracking-wide uppercase text-primary font-medium">
                      {mainpoint.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-serif tracking-wide">
                    {mainpoint.description}
                  </p>
                </div>

                {/* Right: image with diagonal slash */}
                <div className="relative min-h-[220px] md:min-h-full">
                  {/* angled divider */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--accent)]/10" />
                  <div
                    className="absolute inset-0 md:left-2
                               [clip-path:polygon(12%_0,100%_0,100%_100%,0%_100%)] md:[clip-path:polygon(16%_0,100%_0,100%_100%,0%_100%)] overflow-hidden"
                  >
                    <Image
                      src={mainpoint.img}
                      alt={`${mainpoint.title} illustration`}
                      fill
                      className="object-cover object-center"
                    />
                    {/* diagonal highlight line */}
                    <div
                      className="absolute left-[10%] top-0 bottom-0 w-px md:left-[14%]
                                    bg-gradient-to-b from-transparent via-white/40 to-transparent pointer-events-none"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
