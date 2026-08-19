import { Clock, MapPin, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import InstagramIcon from "./icons/InstagramIcon";
import { SITE, whatsappLink } from "../lib/site";

export default function Location() {
  return (
    <section id="contato" className="relative bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Venha nos visitar"
          title="Localização & Horários"
        />

        <div className="mx-auto mt-16 max-w-2xl">
          <div className="flex flex-col gap-10">
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
              <div>
                <h3 className="font-serif text-lg font-semibold text-cream">
                  Endereço
                </h3>
                <p className="mt-1 font-sans text-sm leading-relaxed text-smoke">
                  {SITE.address}
                </p>
                <a
                  href={SITE.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block font-sans text-sm text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold-light"
                >
                  Ver no mapa
                </a>
              </div>
            </div>

            <div className="flex gap-4">
              <Clock className="mt-1 h-5 w-5 shrink-0 text-gold" strokeWidth={1.5} />
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-cream">
                  Horário de Funcionamento
                </h3>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {SITE.hours.map((h) => (
                    <li
                      key={h.day}
                      className="flex justify-between gap-4 border-b border-gold/10 py-1.5 font-sans text-sm text-smoke"
                    >
                      <span>{h.day}</span>
                      <span className="text-cream/80">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink("Olá! Gostaria de agendar um horário na Don Well Barber Club.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold px-6 py-3.5 font-sans text-sm font-semibold tracking-wide text-ink transition-all duration-300 hover:bg-gold-light"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2} />
                WhatsApp
              </a>
              <a
                href={SITE.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border border-gold/60 px-6 py-3.5 font-sans text-sm font-semibold tracking-wide text-cream transition-all duration-300 hover:border-gold hover:bg-gold/10"
              >
                <InstagramIcon className="h-4 w-4" strokeWidth={1.75} />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
