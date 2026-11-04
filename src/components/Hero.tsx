import { ChevronDown, MessageCircle } from "lucide-react";
import { whatsappLink } from "../lib/site";
import heroInterior from "../assets/hero-interior.jpg";
import lockup from "../assets/brand/don-well-lockup.svg";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink"
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src={heroInterior}
          alt="Interior da Don Well Barber Club"
          className="h-full w-full object-cover"
        />
        <div className="bg-grain absolute inset-0" />
        <div className="absolute inset-0 bg-linear-to-t from-ink via-ink/85 to-ink/60" />
        <div className="absolute inset-0 bg-radial-spot" />
      </div>

      {/* Ambient gold glow */}
      <div
        className="animate-glow pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="animate-fade-up relative z-10 mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 pt-24 text-center">
        <h1 className="mb-2">
          <img
            src={lockup}
            alt="Don Well Barber Club"
            width={665}
            height={314}
            className="h-auto w-64 sm:w-80 md:w-[26rem]"
          />
        </h1>

        <p className="max-w-xl font-serif text-xl leading-relaxed text-cream/90 italic sm:text-2xl">
          Onde disciplina, estilo e atitude se encontram na cadeira do
          barbeiro.
        </p>

        <p className="max-w-lg font-sans text-sm leading-relaxed text-smoke sm:text-base">
          Uma experiência premium de grooming masculino, com técnica
          apurada e ambiente pensado para o homem que exige o melhor.
        </p>

        <div className="mt-2 flex flex-col gap-4 sm:flex-row">
          <a
            href={whatsappLink("Olá! Gostaria de agendar um horário na Don Well Barber Club.")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-copper inline-flex items-center justify-center gap-2 px-8 py-4 font-sans text-sm font-semibold tracking-wide text-ink shadow-[0_0_30px_rgba(214,165,116,0.25)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(214,165,116,0.4)] hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2} />
            Agendar pelo WhatsApp
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center justify-center gap-2 border border-gold/60 px-8 py-4 font-sans text-sm font-semibold tracking-wide text-cream transition-all duration-300 hover:border-gold hover:bg-gold/10"
          >
            Conhecer Serviços
          </a>
        </div>
      </div>

      <a
        href="#servicos"
        aria-label="Rolar para a próxima seção"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gold/60 transition-colors hover:text-gold"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" strokeWidth={1.5} />
      </a>
    </section>
  );
}
