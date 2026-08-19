type LogoProps = {
  className?: string;
  showCrown?: boolean;
};

export default function Logo({ className = "", showCrown = true }: LogoProps) {
  return (
    <svg
      viewBox="0 0 120 140"
      className={className}
      role="img"
      aria-label="Don Well Barber Club"
    >
      <defs>
        <linearGradient id="dw-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f0dca3" />
          <stop offset="45%" stopColor="#c9a15a" />
          <stop offset="100%" stopColor="#8a6a2f" />
        </linearGradient>
      </defs>

      {showCrown && (
        <g stroke="url(#dw-gold)" strokeLinejoin="round" strokeLinecap="round">
          {/* Crown silhouette */}
          <path
            d="M26 42 L34 26 L47 36 L60 10 L73 36 L86 26 L94 42"
            fill="none"
            strokeWidth="2.25"
          />
          {/* Base band */}
          <path d="M26 42 L94 42" fill="none" strokeWidth="2.25" />
          {/* Cross finial */}
          <path d="M60 10 L60 2 M55 4 L65 4" strokeWidth="2" />

          {/* Peak orbs */}
          <circle cx="34" cy="26" r="2.2" fill="url(#dw-gold)" stroke="none" />
          <circle cx="86" cy="26" r="2.2" fill="url(#dw-gold)" stroke="none" />
          <circle cx="60" cy="10" r="2.8" fill="url(#dw-gold)" stroke="none" />

          {/* Band jewels */}
          <circle cx="42" cy="42" r="1.6" fill="url(#dw-gold)" stroke="none" />
          <circle cx="60" cy="42" r="1.6" fill="url(#dw-gold)" stroke="none" />
          <circle cx="78" cy="42" r="1.6" fill="url(#dw-gold)" stroke="none" />
        </g>
      )}

      {/* Medallion bezel */}
      <circle
        cx="60"
        cy="84"
        r="44"
        fill="none"
        stroke="url(#dw-gold)"
        strokeWidth="0.75"
        opacity="0.55"
      />
      <circle
        cx="60"
        cy="84"
        r="40"
        fill="none"
        stroke="url(#dw-gold)"
        strokeWidth="1.5"
      />

      <text
        x="60"
        y="98"
        textAnchor="middle"
        fontFamily="'Playfair Display', serif"
        fontSize="36"
        fontWeight="700"
        letterSpacing="-1"
        fill="url(#dw-gold)"
      >
        DW
      </text>

      {/* Flourish rule */}
      <g stroke="url(#dw-gold)" strokeWidth="1" strokeLinecap="round">
        <path d="M40 111 L52 111" />
        <path d="M68 111 L80 111" />
      </g>
      <circle cx="60" cy="111" r="1.6" fill="url(#dw-gold)" />
    </svg>
  );
}
