import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$2,500",
    description: "Perfect for small businesses ready to establish their online presence.",
    features: [
      "5-page responsive website",
      "Custom design",
      "Basic SEO setup",
      "Contact form integration",
      "2 rounds of revisions",
      "2 weeks delivery",
    ],
    popular: false,
  },
  {
    name: "Professional",
    price: "$5,500",
    description: "For growing businesses that need more functionality and polish.",
    features: [
      "10-page responsive website",
      "Premium custom design",
      "Advanced SEO optimization",
      "CMS integration",
      "Blog setup",
      "Unlimited revisions",
      "3 weeks delivery",
      "30 days support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Full-scale solutions for businesses with complex requirements.",
    features: [
      "Unlimited pages",
      "E-commerce functionality",
      "Custom integrations",
      "Performance optimization",
      "Dedicated project manager",
      "Priority support",
      "Custom timeline",
      "Ongoing maintenance",
    ],
    popular: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-24 lg:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Pricing
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl tracking-tight text-foreground">
            Transparent pricing, exceptional value
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Choose the package that fits your needs. All plans include our commitment to quality and your success.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-lg border ${
                plan.popular
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3
                  className={`font-serif text-xl mb-2 ${
                    plan.popular ? "text-background" : "text-foreground"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-4 ${
                    plan.popular ? "text-background/70" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>
                <p
                  className={`font-serif text-4xl ${
                    plan.popular ? "text-background" : "text-foreground"
                  }`}
                >
                  {plan.price}
                </p>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`h-5 w-5 shrink-0 mt-0.5 ${
                        plan.popular ? "text-background" : "text-foreground"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-background/80" : "text-muted-foreground"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  plan.popular
                    ? "bg-background text-foreground hover:bg-background/90"
                    : ""
                }`}
                variant={plan.popular ? "secondary" : "outline"}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
