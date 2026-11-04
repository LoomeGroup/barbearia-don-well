import { MessageCircle } from "lucide-react";
import InstagramIcon from "./icons/InstagramIcon";
import { SITE, whatsappLink } from "../lib/site";
import seal from "../assets/brand/don-well-seal.svg";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="relative bg-ink pt-16 pb-8">
      <div className="divider-gold mx-auto max-w-7xl" />

      <div className="mx-auto max-w-7xl px-6 pt-16 lg:px-8">
        <div className="flex flex-col items-center gap-8 text-center">
          <a
            href="#topo"
            className="block transition-opacity duration-300 hover:opacity-85"
          >
            <img
              src={seal}
              alt="Don Well Barber Club"
              width={507}
              height={507}
              loading="lazy"
              className="h-32 w-32 sm:h-36 sm:w-36"
            />
          </a>

          <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-sans text-sm text-smoke transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href={whatsappLink("Olá! Gostaria de agendar um horário na Don Well Barber Club.")}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink"
            >
              <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
            </a>
            <a
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 text-gold transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink"
            >
              <InstagramIcon className="h-4 w-4" strokeWidth={1.75} />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center gap-2 border-t border-gold/10 pt-8 text-center">
          <p className="font-sans text-xs text-smoke">
            © {new Date().getFullYear()} Don Well Barber Club. Todos os direitos reservados.
          </p>
          <p className="font-sans text-xs text-smoke/70">{SITE.address}</p>
        </div>
      </div>
    </footer>
  );
}
