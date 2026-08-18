export const SITE = {
  name: "Don Well",
  fullName: "Don Well Barber Club",
  whatsappNumber: "5511999999999",
  whatsappDisplay: "(11) 99999-9999",
  instagramHandle: "@donwellbarberclub",
  instagramUrl: "https://instagram.com/donwellbarberclub",
  address: "Rua Exemplo, 123 — Jardim Paulista, São Paulo - SP",
  mapsUrl: "https://maps.google.com/?q=Don+Well+Barber+Club",
  hours: [
    { day: "Terça a Sexta", time: "09h às 20h" },
    { day: "Sábado", time: "09h às 18h" },
    { day: "Domingo e Segunda", time: "Fechado" },
  ],
} as const;

export function whatsappLink(message: string) {
  const text = encodeURIComponent(message);
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}
