import React, { useState } from "react";
import { StudentProfile, AdmissionsAssessmentResult } from "../types";
import { BrainCircuit, Loader2, Award, ClipboardCheck, ArrowRight, Sparkles, Lightbulb, AlertTriangle, RefreshCw } from "lucide-react";

interface AssessmentWizardProps {
  onClose?: () => void;
}

export default function AssessmentWizard({ onClose }: AssessmentWizardProps) {
  const [step, setStep] = useState<number>(1);
  const [profile, setProfile] = useState<StudentProfile>({
    gpa: "3.9",
    schoolCurriculum: "IB Diploma Scheme",
    satAct: "1520",
    majorInterests: "Computer Science and AI with Minor in Economics",
    activities: "1. Head of Robotics Team - organized regional hackathon.\n2. Varsity Debate captain - regional finalist.\n3. Volunteer Math Tutor - 100+ hours.",
    targets: "Harvard, Stanford, Columbia, MIT",
    details: "I came from a supportive local high school. I want to build a real-world tech project for social impact but need counselor directions."
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorString, setErrorString] = useState<string | null>(null);
  const [result, setResult] = useState<AdmissionsAssessmentResult | null>(null);

  const handleInputChange = (field: keyof StudentProfile, value: string) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const executeAssessment = async () => {
    setIsLoading(true);
    setErrorString(null);
    try {
      const response = await fetch("/api/assess", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(profile)
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || "Failed to analyze admissions profile.");
      }

      const reportData: AdmissionsAssessmentResult = await response.json();
      setResult(reportData);
      setStep(5); // Move to results step
    } catch (err: any) {
      setErrorString(err.message || "Something went wrong. Please check your network connection.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setResult(null);
    setStep(1);
    setErrorString(null);
  };

  return (
    <div id="assess-section" className="bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 p-6 md:p-8 text-white relative">
        <div className="absolute top-0 right-0 overflow-hidden opacity-10">
          <BrainCircuit className="w-64 h-64 -mr-16 -mt-16" />
        </div>
        <div className="relative">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-100 bg-white/10 px-3 py-1 rounded-full">
            AI Admissions Engine
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mt-2">
            Free Elite Admissions Assessment
          </h2>
          <p className="text-blue-100 text-sm mt-1 max-w-2xl font-light">
            Our model replicates T20 Ivy League admissions algorithms to evaluate your academic curve, extracurricular spikes, and roadmap requirements.
          </p>
        </div>
      </div>

      {/* Steps Indicator */}
      {step <= 4 && (
        <div className="bg-gray-50 border-b border-gray-100 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((s) => (
              <div
                key={s}
                className={`w-8 h-2 rounded-full transition-all duration-300 ${
                  s === step ? "w-12 bg-blue-600" : s < step ? "bg-blue-300" : "bg-gray-200"
                }`}
              />
            ))}
          </div>
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
            Step {step} of 4
          </span>
        </div>
      )}

      {/* Main Content Area */}
      <div className="p-6 md:p-8">
        {errorString && (
          <div className="bg-rose-50 border border-rose-100 text-rose-700 text-sm p-4 rounded-xl flex items-start gap-3 mb-6">
            <AlertTriangle className="w-5 h-5 flex-shrink-0 text-rose-500 mt-0.5" />
            <div>
              <p className="font-bold">Assessment Failed</p>
              <p className="text-xs text-rose-600 mt-0.5">{errorString}</p>
            </div>
          </div>
        )}

        {/* STEP 1: Academics & School Program */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">Academic Foundations</h3>
              <p className="text-xs text-gray-500 mt-0.5">Grades and academic rigor are the first filters in premium global admissions.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">GPA (Unweighted or Equivalent)</label>
                <input
                  type="text"
                  value={profile.gpa}
                  onChange={(e) => handleInputChange("gpa", e.target.value)}
                  placeholder="e.g. 3.95 / 4.0 or 7.0/7.0 or A* Grade"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:bg-white text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">School Curriculum System</label>
                <select
                  value={profile.schoolCurriculum}
                  onChange={(e) => handleInputChange("schoolCurriculum", e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:bg-white text-sm"
                >
                  <option value="IB Diploma Scheme">IB Diploma Scheme</option>
                  <option value="A-Levels / Cambridge international">A-Levels / Cambridge Board</option>
                  <option value="US High School AP-Centric">US High School AP-Centric</option>
                  <option value="National Matriculation / FSc">National Matriculation / Intermediate</option>
                  <option value="Other Regional State Curriculum">Other State Curriculum</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Standardized Testing Scores</label>
              <input
                type="text"
                value={profile.satAct}
                onChange={(e) => handleInputChange("satAct", e.target.value)}
                placeholder="e.g. SAT 1540, ACT 35, or 'Test Optional planned'"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:bg-white text-sm"
              />
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={() => setStep(2)}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold shadow-md flex items-center gap-1.5 transition-all cursor-pointer"
              >
                Next Section <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Interests & Majors */}
        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">Intended Majors & Spikes</h3>
              <p className="text-xs text-gray-500 mt-0.5">Admissions directors love a clear intellectual "spike"—your thematic focus.</p>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Primary Intended Majors</label>
              <input
                type="text"
                value={profile.majorInterests}
                onChange={(e) => handleInputChange("majorInterests", e.target.value)}
                placeholder="e.g. Mechanical Engineering and Artificial Intelligence"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:bg-white text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Dream / Target Universities</label>
              <input
                type="text"
                value={profile.targets}
                onChange={(e) => handleInputChange("targets", e.target.value)}
                placeholder="e.g. Harvard, Stanford, University of Oxford, Cambridge"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:bg-white text-sm"
              />
            </div>

            <div className="flex justify-between pt-4">
              <button
                onClick={() => setStep(1)}
                className="px-5 py-3 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={() => setStep(3)}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold shadow-md flex items-center gap-1.5 transition-all cursor-pointer"
              >
                Next Section <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Extracurriculars */}
        {step === 3 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">Extracurricular Impact</h3>
              <p className="text-xs text-gray-500 mt-0.5">Show leadership footprint. List clubs, honors, service, sports, or creative projects.</p>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">List 2 to 4 key activities </label>
              <textarea
                value={profile.activities}
                onChange={(e) => handleInputChange("activities", e.target.value)}
                rows={5}
                placeholder="Provide short bullet descriptions with any leadership titles and tangible outcomes."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:bg-white text-sm font-mono leading-relaxed"
              />
              <span className="text-[10px] text-gray-400 mt-1 block">Specify quantifiable impacts (e.g. "raised $3,000", "led 15 team members", "hackathon winner").</span>
            </div>

            <div className="flex justify-between pt-4">
              <button
                onClick={() => setStep(2)}
                className="px-5 py-3 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors cursor-pointer"
              >
                Back
              </button>
              <button
                onClick={() => setStep(4)}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-semibold shadow-md flex items-center gap-1.5 transition-all cursor-pointer"
              >
                Next Section <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 4: Personal Details & Additional Context */}
        {step === 4 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">Personal Narrative Context</h3>
              <p className="text-xs text-gray-500 mt-0.5">Tell us about obstacles, financial aid needs, or distinct projects you want direction on.</p>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">Additional context (Counseling Focus)</label>
              <textarea
                value={profile.details}
                onChange={(e) => handleInputChange("details", e.target.value)}
                rows={4}
                placeholder="Tell us if you need full-ride financial aid, if you have regional special circumstances, or what major questions you want our Ivy counselors to answer."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50 focus:bg-white text-sm leading-relaxed"
              />
            </div>

            <div className="flex justify-between pt-4 border-t border-gray-100">
              <button
                onClick={() => setStep(3)}
                className="px-5 py-3 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors cursor-pointer"
              >
                Back
              </button>
              <button
                disabled={isLoading}
                onClick={executeAssessment}
                className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm font-bold shadow-md flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Evaluating Profile...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" /> Generate AI Report
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: Complex Results Report Panel */}
        {step === 5 && result && (
          <div className="space-y-8 animate-in fade-in duration-300">
            {/* Main Score Banner */}
            <div className="bg-gradient-to-tr from-gray-900 via-blue-900 to-indigo-950 p-6 md:p-8 rounded-2xl text-white relative flex flex-col md:flex-row items-center gap-6 justify-between border border-blue-800/40">
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Profile Assessment Complete
                </span>
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">Your Admissions Strength Index</h3>
                <p className="text-gray-300 text-xs max-w-md font-light">
                  This represents your competitiveness matched against recent Ivy League admissions distributions and profile milestones.
                </p>
              </div>

              {/* Custom SVG Radial Gauge */}
              <div className="relative flex-shrink-0 flex items-center justify-center">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="52"
                    strokeWidth="8"
                    stroke="#1e293b"
                    fill="transparent"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="52"
                    strokeWidth="10"
                    stroke="url(#gradientScore)"
                    fill="transparent"
                    strokeDasharray={326.7}
                    strokeDashoffset={326.7 - (326.7 * result.admissionsStrength) / 100}
                    className="transition-all duration-1000 ease-out"
                  />
                  <defs>
                    <linearGradient id="gradientScore" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#3b82f6" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute text-center">
                  <span className="text-3xl font-extrabold tracking-tight block text-white">{result.admissionsStrength}%</span>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold">MATCH VALUE</span>
                </div>
              </div>
            </div>

            {/* Subject Criteria Breakdown */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-50 p-4 rounded-xl border border-gray-100">
                <span className="text-xs text-blue-600 font-bold block">Academic Curve</span>
                <p className="text-xs text-gray-700 leading-relaxed mt-1.5">{result.academicStrength}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-gray-100">
                <span className="text-xs text-blue-600 font-bold block">Activity Footprint</span>
                <p className="text-xs text-gray-700 leading-relaxed mt-1.5">{result.extracurricularStrength}</p>
              </div>
              <div className="bg-slate-50 p-4 rounded-xl border border-gray-100">
                <span className="text-xs text-blue-600 font-bold block">Major Fit & Spike</span>
                <p className="text-xs text-gray-700 leading-relaxed mt-1.5">{result.majorFit}</p>
              </div>
            </div>

            {/* Strengths & Gaps */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-emerald-50/50 border border-emerald-100/80 rounded-xl p-5">
                <h4 className="text-sm font-bold text-emerald-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <Award className="w-5 h-5 text-emerald-600" /> Key Profile Strengths
                </h4>
                <ul className="space-y-2">
                  {result.strengths.map((str, i) => (
                    <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-1.5 flex-shrink-0" />
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-amber-50/40 border border-amber-100/80 rounded-xl p-5">
                <h4 className="text-sm font-bold text-amber-800 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                  <AlertTriangle className="w-5 h-5 text-amber-600" /> Identified Vulnerabilities
                </h4>
                <ul className="space-y-2">
                  {result.gaps.map((gap, i) => (
                    <li key={i} className="text-xs text-gray-700 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 flex-shrink-0" />
                      <span>{gap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Testing Strategy */}
            <div className="p-5 bg-blue-50/40 border border-blue-100/70 rounded-xl">
              <h4 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <ClipboardCheck className="w-5 h-5 text-blue-600" /> Custom Examinations Strategy
              </h4>
              <p className="text-xs text-gray-700 leading-relaxed">{result.testingStrategy}</p>
            </div>

            {/* Profile Summer/Winter Roadmap Blueprint */}
            <div className="border border-indigo-100 bg-gradient-to-b from-indigo-50/20 to-white rounded-xl p-5 md:p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-1.5 bg-indigo-100 text-indigo-700 rounded-lg">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-indigo-950 uppercase tracking-widest">Admissions Roadmap Projects</h4>
                  <p className="text-[11px] text-gray-500">Actionable initiatives you should initiate immediately to boost candidacy selectiveness.</p>
                </div>
              </div>

              <div className="space-y-3">
                {result.profileBlueprint.map((project, i) => (
                  <div key={i} className="bg-white p-3.5 rounded-lg border border-indigo-100/50 shadow-xs text-xs text-gray-800 flex items-start gap-3">
                    <span className="p-1 bg-indigo-50 text-indigo-700 rounded-md font-bold text-[10px] w-6 h-6 flex items-center justify-center">
                      0{i + 1}
                    </span>
                    <span className="leading-normal">{project}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feasibility List Analysis */}
            <div className="p-5 bg-slate-50 border border-gray-200 rounded-xl">
              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-2">Target Feasibility Analysis</h4>
              <p className="text-xs text-gray-700 leading-relaxed italic">"{result.targetAnalysis}"</p>
            </div>

            {/* Assessment Footer Buttons */}
            <div className="flex items-center justify-between border-t border-gray-100 pt-6">
              <span className="text-xs text-gray-500 font-light">Save this report by printing or bookmarking this applet.</span>
              <button
                onClick={handleReset}
                className="px-5 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-4 h-4" /> Start New Profile Evaluation
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
