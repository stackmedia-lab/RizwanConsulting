import React, { useState } from "react";
import { BLOG_ARTICLES } from "../data";
import { BlogArticle } from "../types";
import { User, Clock, ChevronRight, X, ArrowLeft, BookOpen, Share2 } from "lucide-react";

export default function BlogSection() {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  // Custom static dates or metadata matching screenshot perfectly
  const blogMeta = [
    { category: "News", date: "3 weeks ago", author: "Admin" },
    { category: "Quality Life", date: "1 month ago", author: "Admin" },
    { category: "Universities", date: "1 month ago", author: "Admin" },
  ];

  return (
    <div id="blog" className="px-4 py-24 bg-gray-50/30 border-t border-gray-100 relative overflow-hidden">
      {/* Decorative Elegant Background Stripe Lines from the screenshot */}
      <div className="absolute left-0 bottom-10 w-44 h-96 opacity-10 pointer-events-none select-none">
        <svg viewBox="0 0 100 200" fill="none" className="w-full h-full">
          <line x1="-50" y1="20" x2="150" y2="220" stroke="#000" strokeWidth="2" />
          <line x1="-30" y1="20" x2="170" y2="220" stroke="#000" strokeWidth="2" />
          <line x1="-10" y1="20" x2="190" y2="220" stroke="#000" strokeWidth="2" />
          <line x1="10" y1="20" x2="210" y2="220" stroke="#000" strokeWidth="2" />
          <line x1="30" y1="20" x2="230" y2="220" stroke="#000" strokeWidth="2" />
        </svg>
      </div>

      <div className="absolute right-0 top-10 w-44 h-96 opacity-10 pointer-events-none select-none">
        <svg viewBox="0 0 100 200" fill="none" className="w-full h-full">
          <line x1="50" y1="-20" x2="250" y2="180" stroke="#000" strokeWidth="2" />
          <line x1="70" y1="-20" x2="270" y2="180" stroke="#000" strokeWidth="2" />
          <line x1="90" y1="-20" x2="290" y2="180" stroke="#000" strokeWidth="2" />
          <line x1="110" y1="-20" x2="310" y2="180" stroke="#000" strokeWidth="2" />
          <line x1="130" y1="-20" x2="330" y2="180" stroke="#000" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl w-full mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
          <h2 className="text-4xl md:text-[44px] font-black tracking-tight text-[#1b55e2] leading-none select-none">
            Read our Articles
          </h2>
          <p className="mt-4 text-[13px] md:text-sm text-gray-500 max-w-2xl mx-auto font-light leading-relaxed">
            Reading blogs about studying abroad opens a window into real-life experiences, offering invaluable insights and personal stories that guide and inspire future travelers on their own academic journeys.
          </p>
        </div>

        {/* Blog Cards Grid matching image layout perfectly */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {BLOG_ARTICLES.slice(0, 3).map((article, idx) => {
            const meta = blogMeta[idx] || blogMeta[0];
            return (
              <button
                key={article.id}
                onClick={() => setSelectedArticle(article)}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-xs hover:shadow-md hover:border-blue-300 transition-all duration-300 flex flex-col h-full text-left cursor-pointer focus:outline-none"
              >
                {/* Visual Image Cover */}
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                </div>

                {/* Card details body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    {/* Category Label */}
                    <span className="text-[11px] font-semibold text-blue-500 block uppercase tracking-wider">
                      {meta.category}
                    </span>
                    {/* Title */}
                    <h3 className="font-bold text-gray-950 text-sm leading-snug tracking-tight group-hover:text-blue-600 transition-colors line-clamp-3">
                      {article.title}
                    </h3>
                  </div>

                  {/* Author Line */}
                  <div className="pt-4 mt-6 border-t border-gray-50 flex items-center gap-2.5">
                    {/* Compact grey generic avatar placeholder */}
                    <div className="w-6.5 h-6.5 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-400">
                      <User className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-semibold text-gray-800 leading-none">{meta.author}</p>
                      <p className="text-[9px] text-gray-400 font-medium mt-0.5">{meta.date}</p>
                    </div>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* See More Articles Capsule Button */}
        <div className="text-center">
          <button
            onClick={() => {
              // Smooth scroll to top/bottom or alert
              const target = document.getElementById("blog");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-1.5 px-6 py-2.5 text-xs font-bold text-blue-600 bg-white hover:bg-gray-50 border border-blue-500/30 rounded-full transition-all duration-200 shadow-xs cursor-pointer"
          >
            See more articles
          </button>
        </div>
      </div>

      {/* Deep Reading Overlay Modal Popup */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in slide-in-from-bottom-8 duration-300 border border-gray-100">
            {/* Modal Image Header */}
            <div className="h-64 relative overflow-hidden animate-none">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="bg-blue-600 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                  {selectedArticle.category}
                </span>
                <h3 className="text-xl md:text-2xl font-black tracking-tight leading-snug">
                  {selectedArticle.title}
                </h3>
              </div>
            </div>

            {/* Modal Meta Bar */}
            <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex items-center justify-between text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 font-medium text-gray-700">
                  <User className="w-4 h-4 text-gray-400" /> {selectedArticle.author}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-gray-400" /> {selectedArticle.readTime}
                </span>
              </div>
              <span className="font-mono">{selectedArticle.date}</span>
            </div>

            {/* Markdown Text Render Area */}
            <div className="p-6 md:p-8 space-y-4">
              <div className="prose prose-sm max-w-none text-gray-700 leading-relaxed font-sans text-xs whitespace-pre-line space-y-4">
                {selectedArticle.content.split("\n\n").map((para, i) => {
                  let text = para.trim();
                  if (text.startsWith("### ")) {
                    return (
                      <h4 key={i} className="text-sm font-extrabold text-gray-900 pt-3 border-b border-gray-100 pb-1.5">
                        {text.replace("### ", "")}
                      </h4>
                    );
                  }
                  if (text.startsWith("## ")) {
                    return (
                      <h3 key={i} className="text-base font-black text-gray-900 pt-4">
                        {text.replace("## ", "")}
                      </h3>
                    );
                  }
                  if (text.startsWith("* ")) {
                    return (
                      <ul key={i} className="list-disc pl-5 text-gray-700 space-y-1 my-2">
                        {text.split("\n").map((li, liIdx) => (
                          <li key={liIdx} className="text-xs">
                            {li.replace("* ", "").trim()}
                          </li>
                        ))}
                      </ul>
                    );
                  }

                  // Simple bold mapping (**word**)
                  const formattedElements: React.ReactNode[] = [];
                  const parts = text.split(/\*\*([^*]+)\*\*/g);
                  parts.forEach((part, pIdx) => {
                    if (pIdx % 2 === 1) {
                      formattedElements.push(<strong key={pIdx} className="text-gray-950 font-bold">{part}</strong>);
                    } else {
                      formattedElements.push(part);
                    }
                  });

                  return <p key={i} className="text-xs text-gray-600 leading-relaxed">{formattedElements}</p>;
                })}
              </div>
            </div>

            {/* Modal Footer Controls */}
            <div className="bg-gray-50 border-t border-gray-100 p-4 px-6 flex items-center justify-between">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 bg-white hover:bg-gray-100 border border-gray-200 text-gray-700 rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Return to Catalog
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => alert("Link copied to clipboard!")}
                  className="p-2 bg-white hover:bg-gray-100 border border-gray-200 text-gray-500 rounded-lg transition-colors cursor-pointer"
                  title="Share Article Link"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
