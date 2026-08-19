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
          <stop offset="0%" stopColor="#f5e2ac" />
          <stop offset="45%" stopColor="#c9a15a" />
          <stop offset="100%" stopColor="#8a6a2f" />
        </linearGradient>
        <linearGradient id="dw-gold-light" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fbf1d6" />
          <stop offset="100%" stopColor="#e8cd8a" />
        </linearGradient>
      </defs>

      {/* Medallion bezel */}
      <circle
        cx="60"
        cy="94"
        r="44"
        fill="none"
        stroke="url(#dw-gold)"
        strokeWidth="0.75"
        opacity="0.55"
      />
      <circle
        cx="60"
        cy="94"
        r="40"
        fill="none"
        stroke="url(#dw-gold)"
        strokeWidth="1.5"
      />

      {showCrown && (
        <g>
          {/* Crown silhouette — solid, jeweled, five-pointed, fused into the medallion */}
          <path
            d="M38 62
               L38 50
               L42 34 L46.5 50
               L51 24 L55.5 50
               L60 14 L64.5 50
               L69 24 L73.5 50
               L78 34 L82 50
               L82 62 Z"
            fill="url(#dw-gold)"
            stroke="#6b4f1f"
            strokeWidth="1"
            strokeLinejoin="round"
          />

          {/* Cross finial */}
          <path
            d="M60 14 L60 5 M55.5 8.5 L64.5 8.5"
            stroke="url(#dw-gold)"
            strokeWidth="2.25"
            strokeLinecap="round"
          />

          {/* Peak orbs */}
          <circle cx="42" cy="34" r="2.6" fill="url(#dw-gold-light)" />
          <circle cx="78" cy="34" r="2.6" fill="url(#dw-gold-light)" />
          <circle cx="51" cy="24" r="2.7" fill="url(#dw-gold-light)" />
          <circle cx="69" cy="24" r="2.7" fill="url(#dw-gold-light)" />
          <circle cx="60" cy="14" r="3.4" fill="url(#dw-gold-light)" />

          {/* Band jewels */}
          <rect x="45.5" y="53.5" width="5" height="5" rx="1" fill="#241d16" transform="rotate(45 48 56)" />
          <rect x="57.5" y="53.5" width="5" height="5" rx="1" fill="#241d16" transform="rotate(45 60 56)" />
          <rect x="69.5" y="53.5" width="5" height="5" rx="1" fill="#241d16" transform="rotate(45 72 56)" />
        </g>
      )}

      <text
        x="60"
        y="108"
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
        <path d="M40 121 L52 121" />
        <path d="M68 121 L80 121" />
      </g>
      <circle cx="60" cy="121" r="1.6" fill="url(#dw-gold)" />
    </svg>
  );
}
