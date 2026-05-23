import React from "react";

interface SealProps {
  name: string;
  initials: string;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  hasShield?: boolean;
}

const SEALS_DATA: SealProps[] = [
  {
    name: "THE OHIO STATE UNIVERSITY",
    initials: "OSU",
    color: "#ba0c2f", // Scarlet
    bgColor: "bg-red-50",
    borderColor: "border-[#ba0c2f]/40",
    textColor: "text-[#ba0c2f]",
    hasShield: true,
  },
  {
    name: "UNIVERSITY OF WISCONSIN",
    initials: "UW",
    color: "#c5050c", // Badger Red
    bgColor: "bg-rose-50",
    borderColor: "border-[#c5050c]/40",
    textColor: "text-[#c5050c]",
  },
  {
    name: "BRIGHAM YOUNG UNIVERSITY",
    initials: "BYU",
    color: "#002e5d", // Navy
    bgColor: "bg-blue-50",
    borderColor: "border-[#002e5d]/40",
    textColor: "text-[#002e5d]",
    hasShield: true,
  },
  {
    name: "BROWN UNIVERSITY",
    initials: "BROWN",
    color: "#4e3629", // Brown
    bgColor: "bg-amber-50",
    borderColor: "border-[#4e3629]/40",
    textColor: "text-[#4e3629]",
    hasShield: true,
  },
  {
    name: "CALIFORNIA INSTITUTE OF TECH",
    initials: "CALTECH",
    color: "#ff6c0c", // Orange
    bgColor: "bg-orange-50",
    borderColor: "border-[#ff6c0c]/40",
    textColor: "text-[#ff6c0c]",
  },
  {
    name: "CASE WESTERN RESERVE",
    initials: "CWRU",
    color: "#0a305e", // Gray-blue
    bgColor: "bg-slate-50",
    borderColor: "border-[#0a1c22]/30",
    textColor: "text-[#0a305e]",
  },
  {
    name: "UNIVERSITY OF CHICAGO",
    initials: "UChic",
    color: "#800000", // Maroon
    bgColor: "bg-red-50",
    borderColor: "border-[#800000]/40",
    textColor: "text-[#800000]",
    hasShield: true,
  },
  {
    name: "UNIVERSITY OF CALIFORNIA",
    initials: "UCLA",
    color: "#2774ae", // UCLA Blue
    bgColor: "bg-sky-50",
    borderColor: "border-[#2774ae]/40",
    textColor: "text-[#2774ae]",
  },
  {
    name: "CORNELL UNIVERSITY",
    initials: "CORNELL",
    color: "#b31b1b", // Carnelian Red
    bgColor: "bg-red-50",
    borderColor: "border-[#b31b1b]/40",
    textColor: "text-[#b31b1b]",
    hasShield: true,
  }
];

// Double list for infinite scroll continuity
const LOOP_SEALS = [...SEALS_DATA, ...SEALS_DATA];

export default function UniversityTrack() {
  return (
    <div className="py-12 bg-white overflow-hidden relative border-b border-gray-100">
      {/* Scroll Marquee CSS Rule */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee 25s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Decorative background stripe markers like in the screenshot design */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Track Container */}
      <div className="w-full relative py-3">
        <div className="animate-marquee gap-8 md:gap-14 flex items-center">
          {LOOP_SEALS.map((seal, idx) => (
            <div
              key={`${seal.initials}-${idx}`}
              className="group flex flex-col items-center justify-center transition-transform hover:scale-105 duration-200"
            >
              {/* Circular Emblem Seal matching screenshot */}
              <div className={`w-[76px] h-[76px] rounded-full flex items-center justify-center border-2 ${seal.borderColor} ${seal.bgColor} relative overflow-hidden p-1.5 shadow-xs`}>
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer Circular Text */}
                  <path id={`textPath-${idx}-${seal.initials}`} d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
                  <text className="font-sans text-[7px] font-extrabold uppercase fill-gray-600 tracking-[0.06em]">
                    <textPath href={`#textPath-${idx}-${seal.initials}`} startOffset="0%">
                      {seal.name} • CL. 2026 •
                    </textPath>
                  </text>
                  
                  {/* Inner Circular Frame and Ring Details */}
                  <circle cx="50" cy="50" r="28" stroke={seal.color} strokeWidth="1.5" strokeDasharray="2 1" />
                  <circle cx="50" cy="50" r="24" fill={seal.color} className="opacity-10" />
                  
                  {/* Core Emblem / Crest */}
                  {seal.hasShield ? (
                    <g transform="translate(34, 34) scale(0.65)">
                      <path d="M25 2 C25 2 45 6 45 16 C45 34 25 46 25 46 C25 46 5 34 5 16 C5 6 25 2 25 2 Z" fill="none" stroke={seal.color} strokeWidth="4" />
                      <line x1="25" y1="6" x2="25" y2="42" stroke={seal.color} strokeWidth="3" />
                      <line x1="12" y1="22" x2="38" y2="22" stroke={seal.color} strokeWidth="3" />
                    </g>
                  ) : (
                    <g transform="translate(36, 36) scale(0.7)">
                      <circle cx="20" cy="20" r="16" fill="none" stroke={seal.color} strokeWidth="3" />
                      <path d="M12 20 L28 20 M20 12 L20 28" stroke={seal.color} strokeWidth="3" />
                    </g>
                  )}
                  
                  {/* Subtext Seal Text Centered */}
                  <circle cx="50" cy="50" r="14" fill="#ffffff" stroke={seal.color} strokeWidth="1" />
                  <text x="50" y="54" textAnchor="middle" fill={seal.color} className="font-sans font-black text-[8px] tracking-tighter">
                    {seal.initials}
                  </text>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
