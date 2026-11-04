import Eyebrow from "./Eyebrow";

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
      <Eyebrow align={align}>{eyebrow}</Eyebrow>
      <h2 className="font-serif text-3xl font-semibold text-cream sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl font-sans text-base leading-relaxed text-smoke">
          {description}
        </p>
      )}
    </div>
  );
}
