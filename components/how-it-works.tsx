const steps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We start with a conversation to understand your business, goals, and vision. No commitment, just clarity.",
  },
  {
    number: "02",
    title: "Strategy & Proposal",
    description:
      "We create a tailored plan with timeline, deliverables, and transparent pricing. You know exactly what to expect.",
  },
  {
    number: "03",
    title: "Design & Development",
    description:
      "Our team brings your website to life with regular check-ins and revisions until it's perfect.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We handle the launch, train your team, and provide ongoing support to ensure continued success.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Our Process
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl tracking-tight text-foreground">
            How we bring your vision to life
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            A clear, collaborative process designed to deliver exceptional results without the stress.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-4" />
              )}
              <div className="text-6xl font-serif text-muted/50 mb-4">{step.number}</div>
              <h3 className="font-serif text-xl text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
