import type { LucideIcon } from "lucide-react";
import {
  Scissors,
  Sparkles,
  Flame,
  Droplets,
  ShieldCheck,
  Crown,
  Target,
  Gem,
} from "lucide-react";
import galleryCadeiras from "../assets/gallery-cadeiras.jpg";
import galleryFachada from "../assets/gallery-fachada.jpg";

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  price: string;
};

export const services: Service[] = [
  {
    icon: Scissors,
    title: "Corte Clássico",
    description:
      "Corte de cabelo personalizado, do clássico ao contemporâneo, com acabamento na navalha.",
    price: "R$ 50",
  },
  {
    icon: Flame,
    title: "Barba",
    description:
      "Modelagem, toalha quente e navalha para um acabamento de precisão.",
    price: "R$ 40",
  },
  {
    icon: Sparkles,
    title: "Combo Corte + Barba",
    description:
      "A experiência completa Don Well: corte e barba em um único ritual.",
    price: "R$ 80",
  },
  {
    icon: Droplets,
    title: "Tratamentos",
    description:
      "Hidratação, skincare masculino e cuidados capilares sob medida.",
    price: "R$ 80",
  },
];

export type Pillar = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const pillars: Pillar[] = [
  {
    icon: ShieldCheck,
    title: "Disciplina",
    description:
      "Rigor técnico e consistência em cada detalhe do serviço, do primeiro ao último corte do dia.",
  },
  {
    icon: Crown,
    title: "Estilo",
    description:
      "Referência em tendências clássicas e contemporâneas para cada tipo de homem.",
  },
  {
    icon: Target,
    title: "Atitude",
    description:
      "Postura e presença que acompanham o cliente para além da cadeira de barbeiro.",
  },
  {
    icon: Gem,
    title: "Confiança",
    description:
      "Um ambiente onde cada cliente sai com a certeza de estar na melhor versão de si mesmo.",
  },
];

export type GalleryImage = {
  label: string;
  ratio: "square" | "portrait" | "landscape";
  src?: string;
};

export const galleryImages: GalleryImage[] = [
  { label: "Fachada da barbearia", ratio: "portrait", src: galleryFachada },
  { label: "Cadeiras de barbeiro em couro", ratio: "portrait", src: galleryCadeiras },
];

export type Testimonial = {
  name: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Carlos M.",
    quote:
      "Ambiente impecável e atendimento de outro nível. Saio de lá sempre me sentindo mais confiante.",
  },
  {
    name: "André P.",
    quote:
      "Melhor barbearia que já frequentei. Atenção aos detalhes do início ao fim do atendimento.",
  },
  {
    name: "Felipe R.",
    quote:
      "Virou ritual semanal. Disciplina e estilo em cada corte — exatamente o que a Don Well promete.",
  },
];
