import ImagePlaceholder from "./ImagePlaceholder";
import { pillars } from "../data/content";

export default function About() {
  return (
    <section id="sobre" className="relative bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <span className="font-sans text-xs font-medium tracking-[0.35em] text-gold uppercase">
              Nossa essência
            </span>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-cream sm:text-4xl md:text-5xl">
              Mais que um corte,
              <br />
              um estilo de vida.
            </h2>
            <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-smoke">
              A Don Well Barber Club nasceu para o homem que entende que
              cuidado pessoal é uma forma de disciplina. Em um ambiente que
              une couro, madeira escura e luz âmbar, cada visita é pensada
              para elevar sua confiança — dentro e fora da cadeira.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="flex flex-col gap-3">
                    <Icon className="h-7 w-7 text-gold" strokeWidth={1.5} />
                    <h3 className="font-serif text-lg font-semibold text-cream">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-sm leading-relaxed text-smoke">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <ImagePlaceholder
              label="Foto: Barbeiro em atendimento"
              aspect="portrait"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
