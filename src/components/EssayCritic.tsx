import React, { useState } from "react";
import { EssayReviewResult } from "../types";
import { Edit3, CheckSquare, Sparkles, Loader2, Award, Eye, FileText, AlertCircle, RefreshCw, PenTool } from "lucide-react";

export default function EssayCritic() {
  const [essayPrompt, setEssayPrompt] = useState<string>(
    "Common App Prompt 1: Some students have a background, identity, interest, or talent so meaningful they believe their application would be incomplete without it."
  );
  const [essayText, setEssayText] = useState<string>(
    "Ever since I was ten, I built crazy computer projects. I played on my laptop all day and coded python scripts, but my grades suffered. It was hard. Some kids in school laughed because I was nerdy, but I stayed concentrated. I did robotics because it made me feel free from school boredom. I organized a local tournament where simple people could code. This process taught me leadership. I plan to study Computer Science to create global software systems with excellent design parameters..."
  );

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errString, setErrString] = useState<string | null>(null);
  const [result, setResult] = useState<EssayReviewResult | null>(null);

  // Active highlighted annotation index tracker
  const [activeAnnIndex, setActiveAnnIndex] = useState<number | null>(null);

  const handleReviewEssay = async () => {
    if (!essayText.trim()) {
      setErrString("Please enter some essay text to review.");
      return;
    }
    setIsLoading(true);
    setErrString(null);
    try {
      const resp = await fetch("/api/essay-review", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ essayPrompt, essayText }),
      });

      if (!resp.ok) {
        const errData = await resp.json();
        throw new Error(errData.error || "Failed to process essay evaluation.");
      }

      const report: EssayReviewResult = await resp.json();
      setResult(report);
      if (report.lineByLineAnnotated.length > 0) {
        setActiveAnnIndex(0);
      }
    } catch (err: any) {
      setErrString(err.message || "An unexpected error occurred during analysis.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setErrString(null);
    setActiveAnnIndex(null);
  };

  return (
    <div id="essay-critic-section" className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden max-w-5xl mx-auto">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-indigo-800 via-indigo-700 to-indigo-950 p-6 md:p-8 text-white">
        <div className="flex items-center gap-3">
          <div className="p-2.5 bg-white/10 rounded-xl">
            <Edit3 className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-200">Admissions Workshop</span>
            <h2 className="text-2xl font-black tracking-tight mt-0.5">Ivy Personal Statement Essay Analyst</h2>
          </div>
        </div>
        <p className="text-xs text-indigo-100/90 leading-relaxed font-light mt-2 max-w-3xl">
          Paste your essay draft and selected prompt below. Our AI admissions reader evaluates narrative authenticity, emotional vulnerability, style cohesion, and outputs side-by-side annotations to maximize impact.
        </p>
      </div>

      <div className="grid lg:grid-cols-2">
        {/* Left Hand Panel: Workspace Draft Input */}
        <div className="p-6 md:p-8 border-r border-gray-100 space-y-5">
          <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 flex items-center gap-2">
            <PenTool className="w-4.5 h-4.5 text-indigo-600" /> Essay Editor Workspace
          </h3>

          <div>
            <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-500 mb-1.5">Application Prompt Focus</label>
            <input
              type="text"
              value={essayPrompt}
              onChange={(e) => setEssayPrompt(e.target.value)}
              placeholder="e.g. Common App Prompt 1 or specific supplementary prompt..."
              className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-xs bg-gray-50/50"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-[10px] font-bold uppercase tracking-wider text-gray-500">Draft Content Workspace</label>
              <span className="text-[10px] text-gray-400 font-mono">
                {essayText.split(/\s+/).filter(Boolean).length} Words standard
              </span>
            </div>
            <textarea
              value={essayText}
              onChange={(e) => setEssayText(e.target.value)}
              rows={14}
              placeholder="Write or paste your essay here..."
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 font-sans text-xs bg-gray-50/40 leading-relaxed text-gray-800"
            />
          </div>

          {errString && (
            <div className="bg-rose-50 text-rose-700 text-xs p-3.5 rounded-xl border border-rose-100 flex items-start gap-2">
              <AlertCircle className="w-4 h-4 flex-shrink-0 text-rose-500 mt-0.5" />
              <span>{errString}</span>
            </div>
          )}

          <div className="flex justify-between items-center pt-2">
            <span className="text-[11px] text-gray-400 font-light">Recommended length: 350 - 650 words.</span>
            {!result ? (
              <button
                onClick={handleReviewEssay}
                disabled={isLoading}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Reviewing Writing...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" /> Analyze Essay Pitch
                  </>
                )}
              </button>
            ) : (
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-600 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" /> Start Over
              </button>
            )}
          </div>
        </div>

        {/* Right Hand Panel: Static Guides or Live Assessment Results */}
        <div className="bg-gray-50/50 p-6 md:p-8 flex flex-col justify-between">
          {!result ? (
            // STATIC ADVISORY PANEL (Before submit)
            <div className="space-y-6 my-auto">
              <div className="text-center space-y-2">
                <FileText className="w-12 h-12 text-indigo-400 mx-auto opacity-70" />
                <h4 className="text-base font-bold text-gray-900 tracking-tight">Writing Blueprint Guidance</h4>
                <p className="text-xs text-gray-500 max-w-sm mx-auto">
                  Submit your draft to analyze structural weaknesses. High impact essays score exceptionally well on:
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-white p-3.5 rounded-xl border border-gray-100 flex items-start gap-3 shadow-xs">
                  <div className="p-1 px-2.5 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-bold font-mono">V</div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-900 leading-none mb-1">Authentic Vulnerability</h5>
                    <p className="text-[11px] text-gray-500 leading-normal">Avoid perfect listing or sounding like a bragging record. Focus on genuine, specific self-reflection and growth narratives.</p>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-gray-100 flex items-start gap-3 shadow-xs">
                  <div className="p-1 px-2.2 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-bold font-mono">S</div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-900 leading-none mb-1">Strong "Show, Don't Tell" Hooks</h5>
                    <p className="text-[11px] text-gray-400 leading-normal">Drop the admissions officer directly into the active scene. Paint clear, visceral sensory images instead of vague textbook titles.</p>
                  </div>
                </div>

                <div className="bg-white p-3.5 rounded-xl border border-gray-100 flex items-start gap-3 shadow-xs">
                  <div className="p-1 px-2.2 bg-indigo-50 text-indigo-700 rounded-lg text-xs font-bold font-mono">C</div>
                  <div>
                    <h5 className="text-xs font-bold text-gray-900 leading-none mb-0.5">Stylistic Cohesion & Clarity</h5>
                    <p className="text-[11px] text-gray-400 leading-normal">Ensure smooth transitional leaps between experience and your future plans. Eliminate overly formal flowery vocabulary.</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            // HIGH-FIDELITY ACTIVE EVALUATION PANEL
            <div className="space-y-6">
              {/* Score Gauges */}
              <div>
                <span className="text-[10px] font-bold uppercase text-indigo-600 tracking-widest block mb-3">Narrative Criteria Rating</span>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-3.5 rounded-xl border border-gray-200/60 shadow-xs">
                    <span className="text-[10px] text-gray-400 block font-medium">OVERALL CORE</span>
                    <span className="text-2xl font-black text-indigo-600">{result.overallScore}</span>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full mt-1.5 overflow-hidden">
                      <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${result.overallScore}%` }} />
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-gray-200/60 shadow-xs">
                    <span className="text-[10px] text-gray-400 block font-medium">TONE & IMPACT</span>
                    <span className="text-2xl font-black text-indigo-600">{result.toneImpactScore}</span>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full mt-1.5 overflow-hidden">
                      <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${result.toneImpactScore}%` }} />
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-gray-200/60 shadow-xs">
                    <span className="text-[10px] text-gray-400 block font-medium">AUTHENTICITY VOICE</span>
                    <span className="text-2xl font-black text-indigo-600">{result.authenticityScore}</span>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full mt-1.5 overflow-hidden">
                      <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${result.authenticityScore}%` }} />
                    </div>
                  </div>

                  <div className="bg-white p-3.5 rounded-xl border border-gray-200/60 shadow-xs">
                    <span className="text-[10px] text-gray-400 block font-medium">GRAMMAR & FLOW</span>
                    <span className="text-2xl font-black text-indigo-600">{result.clarityScore}</span>
                    <div className="w-full bg-gray-100 h-1.5 rounded-full mt-1.5 overflow-hidden">
                      <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${result.clarityScore}%` }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* High Level Counselor Summary */}
              <div className="bg-white p-4 rounded-xl border border-gray-100">
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                  <Award className="w-4 h-4 text-indigo-500" /> Executive Digest
                </h4>
                <p className="text-xs text-gray-700 leading-relaxed mt-2">{result.summary}</p>
              </div>

              {/* Line-by-Line Highlight Annotated workspace */}
              {result.lineByLineAnnotated.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-1">
                      <Eye className="w-4 h-4 text-blue-500" /> Segment Critique Highlights
                    </h4>
                    <span className="text-[10px] text-indigo-600 font-bold">
                      {activeAnnIndex! + 1} of {result.lineByLineAnnotated.length} found
                    </span>
                  </div>

                  {/* Highlight Display Selector */}
                  <div className="bg-white rounded-xl border border-indigo-100 p-4 shadow-sm relative overflow-hidden">
                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-yellow-400" />
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {result.lineByLineAnnotated.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveAnnIndex(i)}
                          className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold transition-all border cursor-pointer ${
                            i === activeAnnIndex
                              ? "bg-yellow-100 text-yellow-850 border-yellow-350"
                              : "bg-gray-50 text-gray-505 border-gray-200 hover:bg-gray-100"
                          }`}
                        >
                          Issue {i + 1}
                        </button>
                      ))}
                    </div>

                    {activeAnnIndex !== null && (
                      <div className="space-y-3 animate-in fade-in duration-200 text-xs">
                        <div>
                          <span className="text-[10px] uppercase font-bold text-orange-600 tracking-wider bg-orange-50 px-2.5 py-0.5 rounded-md inline-block">
                            Type: {result.lineByLineAnnotated[activeAnnIndex].findingType}
                          </span>
                          <p className="text-[11px] text-gray-400 font-light mt-1 uppercase tracking-wider font-mono">Original segment phrase:</p>
                          <blockquote className="italic border-l-2 border-gray-200 pl-3 py-1 bg-gray-50/50 mt-1 text-gray-700 font-serif">
                            "{result.lineByLineAnnotated[activeAnnIndex].originalFragment}"
                          </blockquote>
                        </div>

                        <div>
                          <p className="text-[11px] text-indigo-600 font-bold uppercase tracking-wider font-mono">Admissions Advisor Suggested Rewrite:</p>
                          <p className="bg-indigo-50/50 border border-indigo-100 rounded-lg p-3 font-semibold text-indigo-950 mt-1 tracking-tight leading-relaxed">
                            {result.lineByLineAnnotated[activeAnnIndex].suggestedAlternative}
                          </p>
                        </div>

                        <div className="bg-slate-50 border border-gray-100 rounded-lg p-3 text-[11px] leading-relaxed text-gray-600">
                          <strong>Admissions Logic:</strong> {result.lineByLineAnnotated[activeAnnIndex].rationale}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Revision Checklist Plan */}
              {result.recommendedRevisionPlan.length > 0 && (
                <div className="bg-slate-50 p-4 rounded-xl border border-gray-200 text-xs">
                  <h4 className="text-[11px] font-bold text-gray-900 uppercase tracking-widest mb-3 flex items-center gap-1">
                    <CheckSquare className="w-4.5 h-4.5 text-emerald-600" /> Critical Next Steps for Draft #2
                  </h4>
                  <ul className="space-y-2.5">
                    {result.recommendedRevisionPlan.map((plan, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <input
                          type="checkbox"
                          id={`plan-chk-${i}`}
                          className="w-4 h-4 rounded text-indigo-600 border-gray-300 focus:ring-indigo-500 mt-0.5"
                        />
                        <label htmlFor={`plan-chk-${i}`} className="text-gray-700 cursor-pointer select-none leading-relaxed text-xs">
                          {plan}
                        </label>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
