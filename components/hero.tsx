import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-6">
            Web Design Studio
          </p>
          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl tracking-tight text-foreground text-balance leading-tight">
            Exceptional design meets
            <span className="block">business results</span>
          </h1>
          <p className="mt-8 text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We craft stunning, high-performance websites that help businesses stand out, 
            convert visitors, and grow. Your online presence, elevated.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-base px-8 py-6">
              Start Your Project
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-base px-8 py-6 bg-transparent">
              View Our Work
            </Button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 border-t border-border pt-12">
          {[
            { number: "150+", label: "Projects Delivered" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "12+", label: "Years Experience" },
            { number: "40+", label: "Industries Served" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-4xl lg:text-5xl text-foreground">{stat.number}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
