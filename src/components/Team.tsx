import { Camera } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { team } from "../data/content";

export default function Team() {
  return (
    <section id="equipe" className="relative bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Quem cuida de você"
          title="Nossa Equipe"
          description="Barbeiros especializados, cada um com sua assinatura, unidos pelo mesmo padrão de excelência."
        />

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center gap-5 text-center"
            >
              <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-dashed border-gold/30 bg-ink transition-colors duration-300 group-hover:border-gold/60">
                <Camera className="h-6 w-6 text-gold/50" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold text-cream">
                  {member.name}
                </h3>
                <p className="font-sans text-xs tracking-widest text-gold uppercase">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
