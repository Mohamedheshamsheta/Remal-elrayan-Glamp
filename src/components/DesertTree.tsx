import React from "react";

interface TreeProps {
  className?: string;
  size?: number | string;
  color?: string;
  style?: React.CSSProperties;
}

/**
 * An elegant, modern SVG drawing of a desert Palm Tree.
 * Styled with our rich desert green color to represent life in the Fayoum oasis.
 */
export function PalmTree({ className = "", size = 24, color = "currentColor", style }: TreeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      style={style}
      aria-hidden="true"
    >
      {/* Curved trunk representing organic wind shapes */}
      <path
        d="M45 110C47 85 41 60 50 35"
        stroke="#5C4033"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M48 110C50 88 45 65 52 40"
        stroke="#6E473B"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Ground Mound / Sand dune base */}
      <path
        d="M30 110C42 108 58 108 70 110"
        stroke="#C8B9A6"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Leaf Canopy - elegant organic palm fronds in Desert Green */}
      {/* Top frond */}
      <path
        d="M50 35C50 20 48 5 50 2"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M50 35C45 28 43 18 42 12" stroke={color} strokeWidth="1.5" />
      <path d="M50 35C55 28 57 18 58 12" stroke={color} strokeWidth="1.5" />

      {/* Right high frond */}
      <path
        d="M50 35C65 28 80 25 90 28"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M50 35C60 33 70 33 78 35" stroke={color} strokeWidth="1.5" />
      <path d="M50 35C58 26 68 20 78 18" stroke={color} strokeWidth="1.5" />

      {/* Left high frond */}
      <path
        d="M50 35C35 28 20 25 10 28"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M50 35C40 33 30 33 22 35" stroke={color} strokeWidth="1.5" />
      <path d="M50 35C42 26 32 20 22 18" stroke={color} strokeWidth="1.5" />

      {/* Right middle frond */}
      <path
        d="M50 35C65 40 78 50 85 62"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M50 35C58 41 64 48 68 56" stroke={color} strokeWidth="1.5" />
      <path d="M50 35C62 36 73 38 82 42" stroke={color} strokeWidth="1.5" />

      {/* Left middle frond */}
      <path
        d="M50 35C35 40 22 50 15 62"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path d="M50 35C42 41 36 48 32 56" stroke={color} strokeWidth="1.5" />
      <path d="M50 35C38 36 27 38 18 42" stroke={color} strokeWidth="1.5" />

      {/* Bottom right frond */}
      <path
        d="M50 35C58 48 62 62 64 76"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M50 35C54 44 57 52 58 60" stroke={color} strokeWidth="1" />

      {/* Bottom left frond */}
      <path
        d="M50 35C42 48 38 62 36 76"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M50 35C46 44 43 52 42 60" stroke={color} strokeWidth="1" />
    </svg>
  );
}

/**
 * A stylized Acacia/Desert Thorn Tree graphic.
 * Common in beautiful Egyptian valleys and protected nature parks.
 */
export function AcaciaTree({ className = "", size = 24, color = "currentColor", style }: TreeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      style={style}
      aria-hidden="true"
    >
      {/* Broad canopy flat-topped acacia style in Desert Green */}
      <path
        d="M15 45C25 32 45 28 50 28C55 28 75 32 85 45C92 48 95 53 85 55C75 57 25 57 15 55C5 53 8 48 15 45Z"
        fill={color}
        fillOpacity="0.15"
      />
      <path
        d="M15 45C25 32 45 28 50 28C55 28 75 32 85 45M85 45C92 48 95 53 85 55M85 45C75 42 25 42 15 45M15 45C5 48 5 53 15 55M15 55C25 57 75 57 85 55"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Intertwined dry trunks */}
      <path
        d="M50 85C49 70 42 60 38 52"
        stroke="#5C4033"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path
        d="M52 85C51 74 58 64 64 54"
        stroke="#5C4033"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M48 85C50 72 50 62 48 50"
        stroke="#5C4033"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Roots base */}
      <path
        d="M35 85C42 84 58 84 65 85"
        stroke="#C8B9A6"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/**
 * Decorative Desert Oasis silhouette panel.
 * Blends sand dunes, stars, and green palm trees into a gorgeous banner.
 */
export function DesertOasisLandscape({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden border-2 border-black bg-white p-6 shadow-brutalist ${className}`}>
      {/* Background Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#C8B9A6_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-15" />
      
      {/* Sun/Moon representing the cosmic connection */}
      <div className="absolute top-8 right-12 w-12 h-12 rounded-full bg-desert-blue/10 border-2 border-dashed border-desert-blue animate-spin-slow pointer-events-none" style={{ animationDuration: '40s' }} />
      
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 text-center md:text-left max-w-lg">
          <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-desert-green font-extrabold bg-desert-green/10 border border-desert-green/20 px-2.5 py-1 inline-flex items-center gap-1.5 rounded-full">
            <span className="w-1.5 h-1.5 bg-desert-green rounded-full animate-pulse" />
            Wadi El Rayan Nature Sanctuary
          </span>
          <h3 className="font-serif text-2xl md:text-3xl uppercase tracking-tight text-desert-dark">
            The Living Oasis
          </h3>
          <p className="font-sans text-xs text-neutral-600 leading-relaxed">
            Nestled inside a legally protected Egyptian sanctuary, our camp preserves dozens of wild green acacia trees and native palm oases. We cultivate local flora with drip irrigation systems to honor the Fayoum protectorate.
          </p>
        </div>

        {/* Dynamic Vector Artwork combining our Green Palm and Acacia */}
        <div className="flex items-end justify-center gap-4 border border-black/10 p-4 bg-[#faf9f6]/85 relative min-w-[200px] shrink-0">
          <PalmTree className="text-desert-green animate-float-slow" size={64} color="#2E5A44" />
          <AcaciaTree className="text-desert-green" size={54} color="#2E5A44" style={{ animationDelay: '2s' }} />
          <PalmTree className="text-desert-green opacity-70 scale-x-[-0.8] scale-y-[0.8] origin-bottom" size={48} color="#2E5A44" />
        </div>
      </div>
    </div>
  );
}
