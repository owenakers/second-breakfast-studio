type GrowthRingProps = {
  className?: string;
};

/**
 * Decorative wood-grain growth-ring motif: concentric circles pushed through
 * an SVG turbulence filter so the rings read as hand-cut cross-section grain
 * rather than perfect CAD circles.
 */
export default function GrowthRing({ className }: GrowthRingProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <filter id="growth-ring-grain">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.012"
          numOctaves={2}
          seed={7}
          result="noise"
        />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale={10} />
      </filter>
      <g
        filter="url(#growth-ring-grain)"
        fill="none"
        stroke="currentColor"
      >
        <circle cx="200" cy="200" r="30" strokeWidth="2" opacity="0.9" />
        <circle cx="200" cy="200" r="62" strokeWidth="1.5" opacity="0.75" />
        <circle cx="200" cy="200" r="98" strokeWidth="2" opacity="0.6" />
        <circle cx="200" cy="200" r="138" strokeWidth="1.5" opacity="0.5" />
        <circle cx="200" cy="200" r="172" strokeWidth="2" opacity="0.4" />
        <circle cx="200" cy="200" r="196" strokeWidth="1" opacity="0.3" />
      </g>
    </svg>
  );
}
