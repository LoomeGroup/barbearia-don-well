type LogoProps = {
  className?: string;
  showCrown?: boolean;
};

export default function Logo({ className = "", showCrown = true }: LogoProps) {
  return (
    <svg
      viewBox="0 0 120 130"
      className={className}
      role="img"
      aria-label="Don Well Barber Club"
    >
      <defs>
        <linearGradient id="dw-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8cd8a" />
          <stop offset="50%" stopColor="#c9a15a" />
          <stop offset="100%" stopColor="#8a6a2f" />
        </linearGradient>
      </defs>

      {showCrown && (
        <path
          d="M32 38 L38 22 L48 34 L60 18 L72 34 L82 22 L88 38 Z"
          fill="none"
          stroke="url(#dw-gold)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      )}

      <circle
        cx="60"
        cy="76"
        r="42"
        fill="none"
        stroke="url(#dw-gold)"
        strokeWidth="1.5"
      />

      <text
        x="60"
        y="90"
        textAnchor="middle"
        fontFamily="'Playfair Display', serif"
        fontSize="38"
        fontWeight="700"
        fill="url(#dw-gold)"
      >
        DW
      </text>
    </svg>
  );
}
