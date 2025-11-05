import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function ModelsSection() {
  const models = [
    {
      name: "Velocity GT",
      tagline: "Pure performance",
      description: "The ultimate driving machine. Engineered for those who demand excellence in every detail.",
      image: "/sleek-black-sports-car-front-view.jpg",
      price: "From $89,900",
    },
    {
      name: "Velocity S",
      tagline: "Everyday luxury",
      description: "Sophisticated design meets practical innovation. The perfect balance for modern life.",
      image: "/elegant-silver-sedan-side-view.jpg",
      price: "From $64,900",
    },
    {
      name: "Velocity X",
      tagline: "Electric future",
      description: "Zero emissions, infinite possibilities. Experience the next generation of automotive excellence.",
      image: "/futuristic-white-electric-suv.jpg",
      price: "From $74,900",
    },
  ]

  return (
    <section id="models" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2
            className="font-sans text-4xl lg:text-6xl font-bold tracking-tight mb-6 text-balance"
            style={{ letterSpacing: "0.025em" }}
          >
            Discover your perfect drive
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Each model is meticulously crafted to deliver an unparalleled driving experience, combining performance,
            comfort, and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={model.image || "/placeholder.svg"}
                  alt={model.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{model.tagline}</div>
                <h3 className="text-2xl font-bold mb-3">{model.name}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{model.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">{model.price}</span>
                  <Button variant="ghost" size="sm" className="gap-2 group/btn">
                    Learn More
                    <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
