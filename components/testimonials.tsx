import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Working with Pixelcraft transformed our online presence. Our new website not only looks stunning but has increased our leads by 150% in just three months.",
    author: "Sarah Mitchell",
    role: "CEO, Bloom Wellness",
    initials: "SM",
  },
  {
    quote:
      "The team understood our vision immediately and delivered beyond expectations. Professional, communicative, and incredibly talented. Highly recommended.",
    author: "James Chen",
    role: "Partner, Sterling Law",
    initials: "JC",
  },
  {
    quote:
      "Our e-commerce sales doubled after the redesign. The attention to user experience and conversion optimization made all the difference for our business.",
    author: "Maria Santos",
    role: "Founder, Artisan Coffee Co.",
    initials: "MS",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Testimonials
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl tracking-tight text-foreground">
            Trusted by businesses like yours
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="p-8 bg-background rounded-lg border border-border"
            >
              <Quote className="h-8 w-8 text-muted-foreground/30 mb-6" />
              <p className="text-foreground leading-relaxed mb-8">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-sm font-medium text-muted-foreground">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
