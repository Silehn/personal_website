import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Artisan Coffee Co.",
    category: "E-Commerce",
    description: "A premium online store for specialty coffee with subscription management.",
    image: "bg-[#2C3E50]",
  },
  {
    title: "Sterling Law Partners",
    category: "Professional Services",
    description: "Corporate website showcasing expertise and building client trust.",
    image: "bg-[#1A1A2E]",
  },
  {
    title: "Bloom Wellness",
    category: "Health & Wellness",
    description: "Booking platform for a holistic wellness center with integrated scheduling.",
    image: "bg-[#3D5A5B]",
  },
  {
    title: "Nova Tech Solutions",
    category: "SaaS",
    description: "Product landing page with interactive demos and lead generation.",
    image: "bg-[#4A4E69]",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
              Our Work
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl tracking-tight text-foreground">
              Projects that drive results
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              A selection of recent work showcasing our approach to design and development.
            </p>
          </div>
          <Button variant="outline" className="mt-8 lg:mt-0 bg-transparent">
            View All Projects
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <div
                className={`aspect-[4/3] ${project.image} flex items-end p-8 transition-transform duration-500 group-hover:scale-105`}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="relative z-10">
                  <p className="text-sm text-white/70 mb-2">{project.category}</p>
                  <h3 className="font-serif text-2xl text-white mb-2">{project.title}</h3>
                  <p className="text-white/80 max-w-md">{project.description}</p>
                </div>
              </div>
              <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-5 w-5 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
