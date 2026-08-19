import SectionHeading from "./SectionHeading";
import { services } from "../data/content";

export default function Services() {
  return (
    <section id="servicos" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="O que oferecemos"
          title="Serviços"
          description="Cada serviço é conduzido com precisão técnica e atenção aos detalhes, no ritmo de quem entende que grooming é um ritual, não uma tarefa."
        />

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative flex flex-col gap-5 border border-gold/15 bg-charcoal p-8 transition-all duration-300 hover:border-gold/50 hover:shadow-[0_0_30px_rgba(201,161,90,0.12)]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 transition-colors duration-300 group-hover:border-gold">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-xl font-semibold text-cream">
                  {service.title}
                </h3>
                <p className="flex-1 font-sans text-sm leading-relaxed text-smoke">
                  {service.description}
                </p>
                <div className="flex items-center justify-between border-t border-gold/10 pt-4">
                  <span className="font-sans text-xs tracking-widest text-smoke uppercase">
                    A partir de
                  </span>
                  <span className="font-serif text-lg font-semibold text-gold">
                    {service.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
