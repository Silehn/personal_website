import { Globe, Palette, Code, Zap, LineChart, Shield } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Website Design",
    description:
      "Custom, conversion-focused designs tailored to your brand and business goals. Every pixel with purpose.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Clean, performant code that brings your design to life with modern technologies and best practices.",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Cohesive visual identity systems that make your business memorable and professional.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description:
      "Lightning-fast loading speeds that improve user experience and search engine rankings.",
  },
  {
    icon: LineChart,
    title: "SEO & Analytics",
    description:
      "Built-in search optimization and tracking to help you understand and grow your audience.",
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description:
      "Ongoing care and updates to keep your website secure, current, and performing at its best.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
            What We Offer
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl tracking-tight text-foreground">
            Services built for business growth
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            From concept to launch and beyond, we provide everything you need for a powerful online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-8 bg-background rounded-lg border border-border hover:border-foreground/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-6 group-hover:bg-foreground transition-colors duration-300">
                <service.icon className="h-6 w-6 text-foreground group-hover:text-background transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
