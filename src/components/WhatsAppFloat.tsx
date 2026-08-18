import { MessageCircle } from "lucide-react";
import { whatsappLink } from "../lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink("Olá! Gostaria de agendar um horário na Don Well Barber Club.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed right-6 bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink shadow-[0_4px_24px_rgba(201,161,90,0.4)] transition-transform duration-300 hover:scale-110 sm:right-8 sm:bottom-8"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} />
    </a>
  );
}
