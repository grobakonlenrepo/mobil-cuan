export function StatsSection() {
  const stats = [
    {
      value: "0-60",
      unit: "in 2.8s",
      label: "Acceleration",
      brand: "Performance",
    },
    {
      value: "520",
      unit: "HP",
      label: "Power Output",
      brand: "Engineering",
    },
    {
      value: "400",
      unit: "miles",
      label: "Range",
      brand: "Efficiency",
    },
    {
      value: "15",
      unit: "min",
      label: "Fast Charge",
      brand: "Technology",
    },
  ]

  return (
    <section className="py-20 lg:py-32 text-primary-foreground bg-[rgba(246,85,168,1)]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-start border-l border-primary-foreground/20 pl-6">
              <div className="text-xs uppercase tracking-wider opacity-60 mb-2">{stat.brand}</div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl lg:text-5xl font-bold">{stat.value}</span>
                <span className="text-xl font-medium opacity-80">{stat.unit}</span>
              </div>
              <div className="text-sm opacity-80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
