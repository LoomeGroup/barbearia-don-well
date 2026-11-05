import { useState } from "react";
import { Clock, MapPin, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import {
  SITE,
  UNITS,
  mapsDirectionsUrl,
  mapsEmbedUrl,
  whatsappLink,
} from "../lib/site";

export default function Location() {
  const [activeId, setActiveId] = useState(UNITS[0].id);
  const active = UNITS.find((unit) => unit.id === activeId) ?? UNITS[0];

  return (
    <section id="contato" className="relative bg-charcoal py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Venha nos visitar"
          title="Nossas Unidades"
          description="O mesmo padrão Don Well em cada endereço. Escolha a unidade mais perto de você."
        />

        {/* DOM order (units, map, info) keeps the map right under the cards on mobile; on desktop the map spans the right column. */}
        <div className="mt-16 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-x-12">
          <ul className="flex flex-col gap-4">
            {UNITS.map((unit) => {
              const selected = unit.id === active.id;
              return (
                <li
                  key={unit.id}
                  className={`relative flex gap-4 border p-6 transition-colors duration-300 has-focus-visible:border-gold ${
                    selected
                      ? "border-gold/50 bg-gold/5"
                      : "border-gold/15 hover:border-gold/35"
                  }`}
                >
                  {selected && (
                    <span
                      className="bg-copper absolute inset-y-0 left-0 w-0.5"
                      aria-hidden="true"
                    />
                  )}
                  <MapPin
                    className={`mt-1 h-5 w-5 shrink-0 transition-colors duration-300 ${
                      selected ? "text-gold" : "text-gold/50"
                    }`}
                    strokeWidth={1.5}
                  />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <h3 className="font-serif text-lg font-semibold text-cream">
                        {/* The ::after stretches the button over the whole card. */}
                        <button
                          type="button"
                          onClick={() => setActiveId(unit.id)}
                          aria-pressed={selected}
                          aria-label={`Mostrar a unidade ${unit.name} no mapa`}
                          className="cursor-pointer text-left outline-none after:absolute after:inset-0"
                        >
                          {unit.name}
                        </button>
                      </h3>
                      {unit.badge && (
                        <span className="border border-gold/40 px-2 py-0.5 font-sans text-[0.625rem] font-semibold tracking-[0.2em] text-gold uppercase">
                          {unit.badge}
                        </span>
                      )}
                    </div>
                    <p className="mt-1 font-sans text-sm leading-relaxed text-smoke">
                      {unit.address}
                    </p>
                    <a
                      href={mapsDirectionsUrl(unit)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-10 mt-2 inline-block font-sans text-sm text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:text-gold-light"
                    >
                      Como chegar
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="relative min-h-80 overflow-hidden rounded-sm border border-gold/15 lg:row-span-2 lg:min-h-full">
            <iframe
              key={active.id}
              title={`Mapa da unidade ${active.name} da Don Well Barber Club`}
              src={mapsEmbedUrl(active)}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-25 contrast-[1.05] brightness-90"
              style={{ border: 0 }}
            />
          </div>

          <div className="flex flex-col gap-10">
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
                href={whatsappLink(
                  `Olá! Gostaria de agendar um horário na Don Well Barber Club, unidade ${active.name}.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-copper inline-flex items-center justify-center gap-2 px-6 py-3.5 font-sans text-sm font-semibold tracking-wide text-ink transition-all duration-300 hover:brightness-110"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={2} />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
