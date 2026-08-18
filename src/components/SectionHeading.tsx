type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`flex flex-col gap-4 ${isCenter ? "items-center text-center" : "items-start text-left"}`}>
      <span className="font-sans text-xs font-medium tracking-[0.35em] text-gold uppercase">
        {eyebrow}
      </span>
      <div className="flex items-center gap-4">
        {isCenter && <span className="h-px w-8 bg-gold/50" />}
        <h2 className="font-serif text-3xl font-semibold text-cream sm:text-4xl md:text-5xl">
          {title}
        </h2>
        {isCenter && <span className="h-px w-8 bg-gold/50" />}
      </div>
      {description && (
        <p className="max-w-2xl font-sans text-base leading-relaxed text-smoke">
          {description}
        </p>
      )}
    </div>
  );
}
