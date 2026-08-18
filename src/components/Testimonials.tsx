import { Quote, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading eyebrow="Confiança" title="O que dizem sobre nós" />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col gap-5 border border-gold/15 bg-charcoal p-8 transition-colors duration-300 hover:border-gold/40"
            >
              <Quote className="h-7 w-7 text-gold/60" strokeWidth={1.5} />
              <p className="flex-1 font-serif text-lg leading-relaxed text-cream/90 italic">
                “{testimonial.quote}”
              </p>
              <div className="flex items-center justify-between border-t border-gold/10 pt-4">
                <span className="font-sans text-sm font-medium tracking-wide text-cream">
                  {testimonial.name}
                </span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-3.5 w-3.5 fill-gold text-gold"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
