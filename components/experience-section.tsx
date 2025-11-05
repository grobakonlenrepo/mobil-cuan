export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-[4/3] lg:aspect-square rounded-lg overflow-hidden">
            <img
              src="/luxury-car-interior-with-premium-leather-seats-and.jpg"
              alt="Luxury interior"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
              <span className="text-xs uppercase tracking-wider font-medium">Interior Design</span>
            </div>

            <h2
              className="font-sans text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance"
              style={{ letterSpacing: "0.025em" }}
            >
              jsjsjsjf
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Step inside a world where every surface, every control, and every detail has been thoughtfully designed to
              enhance your driving experience.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Precision Engineering</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Every component is engineered to perfection, ensuring optimal performance and reliability.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Premium Materials</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Hand-selected materials create an atmosphere of refined luxury and comfort.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-xl">🚀</span>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Advanced Technology</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Cutting-edge systems seamlessly integrate to enhance safety and convenience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
