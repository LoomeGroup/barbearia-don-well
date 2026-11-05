export type Unit = {
  id: string;
  name: string;
  address: string;
  /** Text Google Maps resolves to the right spot (used for the embed and the directions link). */
  mapsQuery: string;
  badge?: string;
};

export const UNITS: Unit[] = [
  {
    id: "solar-de-brasilia",
    name: "Solar de Brasília",
    address:
      "SH Jardim Botânico, Condomínio Solar de Brasília, Q 3 — Área Comercial da Quadra 3, Térreo, Jardim Botânico, Brasília - DF, 71680-349",
    mapsQuery: "Solar de Brasília Quadra 3 Comercial, Jardim Botânico, Brasília - DF",
  },
  {
    id: "prive-morada-sul",
    name: "Privê Morada Sul",
    address:
      "Condomínio Privê Morada Sul, Etapa C — Comercial 05, Qd. 06, Conj. 08, Lote 05 E, Setor Habitacional Jardim Botânico, Brasília - DF, 71680-348",
    mapsQuery: "Privê Morada Sul Etapa C Comercial, Jardim Botânico, Brasília - DF",
  },
];

export const SITE = {
  name: "Don Well",
  fullName: "Don Well Barber Club",
  whatsappNumber: "556196442781",
  whatsappDisplay: "(61) 9644-2781",
  instagramHandle: "@wellinsonbarbearia",
  instagramUrl: "https://instagram.com/wellinsonbarbearia",
  hours: [
    { day: "Segunda a Sexta", time: "09h às 20h" },
    { day: "Sábado", time: "09h às 19h" },
    { day: "Domingo", time: "Fechado" },
  ],
} as const;

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}

export function mapsDirectionsUrl(unit: Unit) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(unit.mapsQuery)}`;
}

export function mapsEmbedUrl(unit: Unit) {
  return `https://www.google.com/maps?q=${encodeURIComponent(unit.mapsQuery)}&output=embed`;
}
