import React, { useState } from "react";
import { X, Play, Volume2 } from "lucide-react";

interface SuccessVideo {
  id: string;
  title: string;
  studentName: string;
  collegeAccepted: string;
  outcome: string;
  youtubeId: string;
  thumbnail: string;
}

const CUSTOM_VIDEOS: SuccessVideo[] = [
  {
    id: "video-1",
    title: "IELTS vs TOEFL Speaking — Which Test Is Better for Your Admission?",
    studentName: "Devon L.",
    collegeAccepted: "Stanford & T20 Universities",
    outcome: "Comparing standardized English structures",
    youtubeId: "T5yj0s_F7LI",
    thumbnail: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: "video-2",
    title: "How to Score 8.5+ in IELTS — Complete Strategy & Prep Timeline",
    studentName: "Zainab R.",
    collegeAccepted: "MIT & Harvard Class of 28",
    outcome: "Full Ride & prep guide checklist",
    youtubeId: "g_BC7KeWb7Y",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "video-3",
    title: "UK May Intake 2026 Visa Rules — Essential Advisory & Guide",
    studentName: "Arman K.",
    collegeAccepted: "Columbia University Accept",
    outcome: "Admitted Regular Action pathway",
    youtubeId: "-GadX-6Kq8g",
    thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "video-4",
    title: "Cyprus Study Visa 2026 Requirement, Documents & Interviews Guide",
    studentName: "Sarah M.",
    collegeAccepted: "University of Cambridge (Economics)",
    outcome: "Trinity College structural placement",
    youtubeId: "etj2vFZFgT0",
    thumbnail: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "video-5",
    title: "Duolingo, PTE & IELTS — Complete Score Conversions Spreadsheet Analysis",
    studentName: "Rehan A.",
    collegeAccepted: "Yale University Placement",
    outcome: "Financial Aid support criteria check",
    youtubeId: "ii9pnoUFv-4",
    thumbnail: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=600"
  }
];

export default function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<SuccessVideo | null>(null);

  const mainVideo = CUSTOM_VIDEOS[0];
  const gridVideos = CUSTOM_VIDEOS.slice(1, 5);

  return (
    <div id="videos" className="px-4 py-20 bg-white border-b border-gray-100 relative overflow-hidden">
      {/* Background stripe decorations like the other sections to match the layout mock */}
      <div className="absolute left-0 top-1/2 w-44 h-96 opacity-10 pointer-events-none select-none">
        <svg viewBox="0 0 100 200" fill="none" className="w-full h-full">
          <line x1="-50" y1="20" x2="150" y2="220" stroke="#000" strokeWidth="2" />
          <line x1="-30" y1="20" x2="170" y2="220" stroke="#000" strokeWidth="2" />
          <line x1="-10" y1="20" x2="190" y2="220" stroke="#000" strokeWidth="2" />
          <line x1="10" y1="20" x2="210" y2="220" stroke="#000" strokeWidth="2" />
          <line x1="30" y1="20" x2="230" y2="220" stroke="#000" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        {/* Playback Tiled Video Grid */}
        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Large Left Video (Column Span 7) */}
          <div className="lg:col-span-7 flex flex-col">
            <button
              onClick={() => setActiveVideo(mainVideo)}
              className="group relative w-full flex-1 aspect-video lg:aspect-auto min-h-[340px] rounded-2xl overflow-hidden bg-slate-900 border border-gray-150 shadow-xs text-left cursor-pointer focus:outline-none flex flex-col justify-between"
            >
              {/* Background Image with Dark Tint */}
              <div className="absolute inset-0">
                <img
                  src={mainVideo.thumbnail}
                  alt={mainVideo.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/45 transition-colors" />
              </div>

              {/* YouTube style title overlay on top */}
              <div className="p-4 relative z-10 w-full bg-gradient-to-b from-black/70 to-transparent flex justify-between items-start">
                <p className="text-white font-semibold text-xs leading-snug drop-shadow-sm pr-6 line-clamp-1">{mainVideo.title}</p>
              </div>

              {/* Big Red Centered Youtube Play Button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-14 h-10 bg-red-650 hover:bg-red-700 text-white rounded-lg flex items-center justify-center shadow-lg transition-transform group-hover:scale-110 duration-200">
                  <Play className="w-6 h-6 fill-white ml-0.5" />
                </div>
              </div>

              {/* YouTube style bar on bottom */}
              <div className="p-3 relative z-10 w-full bg-gradient-to-t from-black/75 via-black/40 to-transparent flex justify-between items-center text-[10px] text-gray-300">
                <span className="font-mono bg-blue-600 text-white px-2 py-0.5 rounded text-[9px] uppercase font-bold tracking-wider">
                  ELITE REVIEWS
                </span>
                <span className="font-medium">Watch on <strong className="text-white">YouTube</strong></span>
              </div>
            </button>
          </div>

          {/* Right Smaller 2x2 Video Grid (Column Span 5) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {gridVideos.map((video) => (
              <button
                key={video.id}
                onClick={() => setActiveVideo(video)}
                className="group relative rounded-xl overflow-hidden bg-slate-900 border border-gray-150 shadow-xs text-left cursor-pointer focus:outline-none flex flex-col justify-between aspect-video min-h-[140px]"
              >
                {/* Background Image with Dark Tint */}
                <div className="absolute inset-0">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/45 transition-colors" />
                </div>

                {/* YouTube style title overlay on top */}
                <div className="p-2.5 relative z-10 w-full bg-gradient-to-b from-black/75 to-transparent">
                  <p className="text-white font-semibold text-[10px] leading-tight line-clamp-2 drop-shadow-sm">{video.title}</p>
                </div>

                {/* Smaller Red Centered Youtube Play Button */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-10 h-7 bg-red-650 hover:bg-red-700 text-white rounded-md flex items-center justify-center shadow-md transition-transform group-hover:scale-110 duration-200">
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  </div>
                </div>

                {/* YouTube style bar on bottom */}
                <div className="p-2 relative z-10 w-full bg-gradient-to-t from-black/80 structures to-transparent flex justify-between items-center text-[9px] text-gray-300">
                  <span className="font-mono bg-indigo-650 text-white px-1.5 py-0.5 rounded text-[8px] uppercase font-bold tracking-wider">
                    GUIDE
                  </span>
                  <span className="font-medium text-white/90">Watch on <strong className="text-white">YouTube</strong></span>
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>

      {/* Embedded YouTube Iframe Player Modal on Click (Fully Functional) */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-black rounded-2xl max-w-4xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200 border border-gray-800">
            <div className="flex items-center justify-between p-4 bg-gray-900 text-white border-b border-gray-800">
              <div className="flex items-center gap-2">
                <Volume2 className="w-5 h-5 text-blue-400" />
                <h3 className="text-xs font-semibold tracking-tight uppercase">Successfully Playing Case Study Video</h3>
              </div>
              <button
                onClick={() => setActiveVideo(null)}
                className="p-1 px-3 bg-gray-800 hover:bg-gray-700 text-white rounded-md text-xs font-bold transition-colors cursor-pointer flex items-center gap-1"
              >
                <X className="w-4 h-4" /> Close Player
              </button>
            </div>

            {/* Responsive Iframe Embed Block */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="absolute inset-0 w-full h-full"
                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                title={activeVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="p-5 bg-gray-950 text-white flex items-center justify-between text-xs font-light">
              <div>
                <p className="font-bold text-sm text-gray-150">{activeVideo.title}</p>
                <p className="text-gray-400 text-[11px] mt-0.5">Admissions outcomes: {activeVideo.collegeAccepted} ({activeVideo.outcome})</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
