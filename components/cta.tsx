import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl lg:text-5xl tracking-tight text-background">
            Ready to transform your online presence?
          </h2>
          <p className="mt-6 text-lg text-background/70 leading-relaxed">
            {"Let's discuss your project and create something exceptional together. Free consultation, no obligation."}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-background text-foreground hover:bg-background/90 text-base px-8 py-6"
            >
              Schedule a Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-background/30 text-background hover:bg-background/10 text-base px-8 py-6 bg-transparent"
            >
              Send a Message
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
