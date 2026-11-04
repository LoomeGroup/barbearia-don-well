type EyebrowProps = {
  children: string;
  align?: "center" | "left";
};

/** Small tracked capitals between copper rules, echoing "— BARBER CLUB —" from the logo. */
export default function Eyebrow({ children, align = "center" }: EyebrowProps) {
  return (
    <span className="flex items-center gap-3">
      <span className="bg-copper h-px w-8" aria-hidden="true" />
      {/* Negative margin cancels the trailing letter-spacing so both rules sit at the same distance. */}
      <span className="-mr-[0.35em] font-serif text-xs font-semibold tracking-[0.35em] text-gold uppercase">
        {children}
      </span>
      {align === "center" && (
        <span className="bg-copper h-px w-8" aria-hidden="true" />
      )}
    </span>
  );
}
