import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import Logo from "./Logo";
import { whatsappLink } from "../lib/site";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Galeria" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-gold/15 bg-ink/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#topo" className="flex items-center gap-3">
          <Logo className="h-10 w-10" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg font-semibold tracking-wide text-cream">
              DON WELL
            </span>
            <span className="font-sans text-[0.6rem] tracking-[0.3em] text-gold">
              BARBER CLUB
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-sans text-sm tracking-wide text-smoke transition-colors duration-200 hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={whatsappLink("Olá! Gostaria de agendar um horário na Don Well Barber Club.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 border border-gold px-5 py-2.5 font-sans text-sm font-medium tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-ink lg:inline-flex"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
          Agendar
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="text-cream lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-gold/15 bg-ink/98 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-1 px-6 py-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-sans text-base tracking-wide text-smoke transition-colors duration-200 hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-3">
              <a
                href={whatsappLink("Olá! Gostaria de agendar um horário na Don Well Barber Club.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex w-full items-center justify-center gap-2 border border-gold px-5 py-3 font-sans text-sm font-medium tracking-wide text-gold transition-all duration-300 hover:bg-gold hover:text-ink"
              >
                <MessageCircle className="h-4 w-4" strokeWidth={1.75} />
                Agendar via WhatsApp
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
