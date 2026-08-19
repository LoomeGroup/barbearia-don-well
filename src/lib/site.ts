export const SITE = {
  name: "Don Well",
  fullName: "Don Well Barber Club",
  whatsappNumber: "556196442781",
  whatsappDisplay: "(61) 9644-2781",
  instagramHandle: "@wellinsonbarbearia",
  instagramUrl: "https://instagram.com/wellinsonbarbearia",
  address:
    "SH Jardim Botânico, Condomínio Solar de Brasília, Q 3 — Área Comercial da Quadra 3, Térreo, Jardim Botânico, Brasília - DF, 71680-349",
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Solar de Brasília Quadra 3 Comercial, Jardim Botânico, Brasília - DF",
  )}`,
  mapsEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(
    "Solar de Brasília Quadra 3 Comercial, Jardim Botânico, Brasília - DF",
  )}&output=embed`,
  hours: [
    { day: "Segunda a Sexta", time: "08h às 20h" },
    { day: "Sábado", time: "08h às 19h" },
    { day: "Domingo", time: "Fechado" },
  ],
} as const;

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}
