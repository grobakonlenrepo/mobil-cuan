import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden bg-primary text-primary-foreground">
          <div className="absolute inset-0 opacity-10">
            <img
              src="/abstract-automotive-pattern-texture.jpg"
              alt="Background pattern"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-24 text-center">
            <h2
              className="font-sans text-4xl lg:text-6xl font-bold tracking-tight mb-6 text-balance"
              style={{ letterSpacing: "0.025em" }}
            >
              Experience velocity today
            </h2>
            <p className="text-lg lg:text-xl opacity-90 mb-10 max-w-2xl mx-auto text-pretty leading-relaxed">
              Schedule your personalized test drive and discover why Velocity is redefining automotive excellence.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                variant="secondary"
                className="gap-2 group bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Book Test Drive
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                Find a Dealer
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
