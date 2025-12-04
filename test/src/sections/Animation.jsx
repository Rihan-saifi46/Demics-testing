import React, { useRef, useEffect, useState } from "react";

export default function InfiniteScrollBanner() {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);
  const [trackWidth, setTrackWidth] = useState(0);

  const brands = [
    "LUTION",
    "Ingesoft Play",
    "L.A. COLORS®",
    "L.A. Girl",
    "LORD & BERRY",
    "MILANI",
    "Gartner"
  ];

  // Measure width of one full set
  useEffect(() => {
    if (trackRef.current) {
      setTrackWidth(trackRef.current.scrollWidth);
    }
  }, []);

  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-purple-700 py-4 overflow-hidden">
      <div
        className="relative overflow-hidden w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex whitespace-nowrap gap-12 ${isPaused ? "paused" : ""}`}
          style={{
            animation: `scrollAnim 25s linear infinite`,
            width: trackWidth ? trackWidth * 2 : "max-content"
          }}
        >
          {/* First Copy */}
          <div ref={trackRef} className="flex gap-12">
            {brands.map((brand, i) => (
              <span
                key={i}
                className="text-white text-2xl font-bold px-6 whitespace-nowrap"
              >
                {brand}
              </span>
            ))}
          </div>

          {/* Second Copy */}
          <div className="flex gap-12">
            {brands.map((brand, i) => (
              <span
                key={"copy-" + i}
                className="text-white text-2xl font-bold px-6 whitespace-nowrap"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollAnim {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-51.5%);
          }
        }

        .paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
}
