import { Camera } from "lucide-react";

type ImagePlaceholderProps = {
  label: string;
  className?: string;
  aspect?: "square" | "portrait" | "landscape" | "wide";
};

const aspectClasses: Record<NonNullable<ImagePlaceholderProps["aspect"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-3/4",
  landscape: "aspect-4/3",
  wide: "aspect-16/9",
};

export default function ImagePlaceholder({
  label,
  className = "",
  aspect = "square",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`group relative overflow-hidden rounded-sm border border-dashed border-gold/30 bg-charcoal ${aspectClasses[aspect]} ${className}`}
    >
      <div className="bg-grain absolute inset-0" />
      <div className="absolute inset-0 bg-radial-spot" />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-3 p-4 text-center">
        <Camera
          className="h-6 w-6 text-gold/50 transition-colors duration-300 group-hover:text-gold"
          strokeWidth={1.5}
        />
        <span className="font-sans text-xs tracking-widest text-smoke uppercase">
          {label}
        </span>
      </div>
      <div className="absolute inset-0 border border-gold/0 transition-colors duration-300 group-hover:border-gold/40" />
    </div>
  );
}
