import { ABOUT, MEMBERSHIP } from "@/lib/constants";

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2
              className="md:text-4xl font-bold uppercase mb-4 text-balance text-primary text-2xl tracking-wide"
              style={{ letterSpacing: "0.025em" }}
            >
              {ABOUT.title}
            </h2>
            <p className="text-pretty leading-relaxed font-serif text-foreground tracking-wide text-base md:text-xl">
              {ABOUT.description}
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-border rounded-2xl p-8 lg:p-12 bg-background">
            {ABOUT.story.map((paragraph, index) => (
              <p
                key={index}
                className="mb-4 leading-relaxed uppercase text-foreground tracking-wide text-left font-serif font-normal text-base md:text-xl"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-16 text-center mt-10">
            {ABOUT.stats.map((stat, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-2xl text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-serif tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="font-semibold uppercase text-2xl tracking-wide text-primary">
              {MEMBERSHIP.cta.headline}
            </p>
          </div>

          <div className="mb-8">
            <h3 className="md:text-3xl text-center text-foreground font-serif tracking-wide font-medium text-xl my-1">
              {MEMBERSHIP.title}
            </h3>
            <p className="text-center md:text-xl text-muted-foreground font-serif mb-8 tracking-wide text-base">
              {MEMBERSHIP.subtitle}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {MEMBERSHIP.plans.map((pkg, i) => (
                <div
                  key={i}
                  className="group p-6 bg-card border border-border rounded-2xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl hover:border-primary/40 focus-within:-translate-y-1 focus-within:shadow-xl py-6"
                >
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="font-bold uppercase text-primary text-lg tracking-wide">
                      {pkg.name}
                    </h4>
                    <span className="font-serif text-2xl text-foreground italic font-semibold tracking-wide">
                      {pkg.price}
                    </span>
                  </div>

                  <div className="mb-3">
                    <div className="text-foreground mb-1 font-serif tracking-wider font-bold text-xl">
                      Benefit:
                    </div>
                    <ul className="space-y-2 text-sm font-serif">
                      {pkg.benefits.map((b, idx) => (
                        <li
                          key={idx}
                          className="text-foreground/90 tracking-wide text-base md:text-xl"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {pkg.bonus && pkg.bonus.length > 0 && (
                    <div className="mb-3">
                      <div className="text-foreground mb-1 font-serif tracking-wider text-xl font-bold">
                        {pkg.bonusTitle}
                      </div>
                      <ul className="space-y-2 text-sm font-serif">
                        {pkg.bonus.map((b, idx) => (
                          <li
                            key={idx}
                            className="text-foreground/90 text-base md:text-xl tracking-wide"
                          >
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <p className="font-serif md:text-xl italic text-primary font-normal tracking-wide text-sm">
                    {pkg.audience}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {ABOUT.note && (
            <p className="text-pretty leading-relaxed font-serif text-foreground tracking-wide text-left italic text-base md:text-xl">
              {ABOUT.note}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
