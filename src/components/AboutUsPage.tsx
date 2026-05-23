import React from "react";
import { Sparkles, GraduationCap, Users, Award, Briefcase, Trophy, ArrowRight, Star } from "lucide-react";

interface AboutUsPageProps {
  onBackToHome: () => void;
  onNavigateToChat: () => void;
  onNavigateToApply: () => void;
}

export default function AboutUsPage({ onBackToHome, onNavigateToChat, onNavigateToApply }: AboutUsPageProps) {
  const teamMembers = [
    {
      name: "John Smith",
      role: "Co-founder",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
      description: "Former university dean with 15+ years of strategic consulting and education steering experience."
    },
    {
      name: "David Martinez",
      role: "Senior director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600",
      description: "Trained in Ivy scholastic models. Directs strategic institutional partnerships and international operations."
    },
    {
      name: "Mark Rodriguez",
      role: "Marketing expert",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600",
      description: "Applet profile strategist helping ambitious students construct high-impact narrative hooks."
    },
    {
      name: "Alex Wilson",
      role: "Project manager",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
      description: "Admissions timeline architecture expert with an outstanding record of early-decision coordination."
    },
    {
      name: "Ryan Johnson",
      role: "Sales manager",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600",
      description: "Liaises with candidates on program alignment, corporate scholarships, and regional aid strategies."
    },
    {
      name: "Michael Lewis",
      role: "Industry expert",
      image: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&q=80&w=600",
      description: "Decodes technology & STEM admission schemes and guides profile spikes for top tier tech institutions."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION WITH IMAGE & TRANSPARENT TINTED OVERLAY */}
      <div className="relative min-h-[350px] sm:min-h-[420px] md:min-h-[480px] w-full flex items-center justify-center bg-slate-950 overflow-hidden pt-16 sm:pt-20">
        
        {/* Absolute Background Image representing a collaborative team */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1522271820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600" 
            alt="Collaborative advisory team" 
            className="w-full h-full object-cover opacity-35 scale-105 filter brightness-75"
            style={{ objectPosition: "center 30%" }}
          />
          {/* Deep dark gradient overlays to match branding and screenshot styling */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/80 to-slate-950" />
        </div>

        {/* Hero Content Containment */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 mb-4 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            <span className="text-[10px] sm:text-xs font-bold text-blue-300 uppercase tracking-widest font-mono">Who We Are</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-4 drop-shadow-md">
            About Us
          </h1>
          
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-medium leading-relaxed mb-6">
            Empowering global candidates with industry-leading consulting, preparatory expertise, and strategic vision.
          </p>

          {/* Breadcrumb row */}
          <div className="text-white/60 flex gap-2 font-semibold text-xs sm:text-sm items-center justify-center">
            <div>
              <button 
                onClick={onBackToHome} 
                className="drop-shadow-[0_.5px_.5px_rgba(0,0,0,1)] hover:text-blue-400 transition-colors pointer-events-auto cursor-pointer"
              >
                Home
              </button>
            </div>
            <div>
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
            </div>
            <div className="drop-shadow-[0_.5px_.5px_rgba(0,0,0,1)] text-blue-400">
              About Us
            </div>
          </div>
        </div>

      </div>

      {/* 2. OUR JOURNEY SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Texts */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-12 bg-blue-600 rounded-full" />
                <span className="text-xs font-black uppercase tracking-widest text-blue-600 font-mono">Our journey</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 uppercase tracking-tight leading-none">
                It started with a simple but powerful idea
              </h2>

              <p className="text-slate-600 text-base leading-relaxed font-normal">
                Over the years, we have grown from a small team of consultants to a leading consulting firm, proudly serving clients across various industries and geographies. Our commitment to elite standards and customized roadmaps has allowed us to deliver success rates matching high global parameters.
              </p>

              {/* Elegant Handwriting Representative Signature */}
              <div className="pt-4">
                <span className="cursive-signature block font-serif italic text-3xl text-slate-800 select-none">
                  Alejandra
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black font-mono mt-1 block">
                  CHIEF EXECUTIVE STRATEGIST
                </span>
              </div>

            </div>

            {/* Right Picture Frame */}
            <div className="lg:col-span-5">
              <div className="relative group">
                {/* Decorative border frame background */}
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-100 to-indigo-100 opacity-80 blur-lg group-hover:opacity-100 transition duration-300" />
                
                {/* Rectangular Image */}
                <div className="relative overflow-hidden rounded-2xl shadow-xl aspect-[4/5] bg-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
                    alt="Strategic partners meeting dialog" 
                    className="w-full h-full object-cover group-hover:scale-103 transition duration-500"
                    style={{ objectPosition: "center 20%" }}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR VALUES & APPROACH SECTION */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Picture (glass conference table) */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-3 rounded-3xl bg-blue-500/5 blur-xl group-hover:opacity-100 transition duration-300" />
                
                <div className="relative overflow-hidden rounded-[2.5rem] shadow-lg bg-slate-100 border border-white/60">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                    alt="Collaborative consulting group session" 
                    className="w-full h-auto aspect-[4/3] sm:aspect-video lg:aspect-[4/3] object-cover group-hover:scale-102 transition duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-10 order-1 lg:order-2">
              
              {/* Values Block */}
              <div className="space-y-3.5">
                <div className="inline-flex items-center gap-2 text-blue-600">
                  <Award className="w-5 h-5 text-blue-500" />
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
                    Our values
                  </h3>
                </div>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                  At the heart of Consulting are our core values – integrity, excellence, collaboration, and innovation. These values guide everything we do, from the way we interact with clients and colleagues to the solutions we deliver.
                </p>
              </div>

              {/* Approach Block */}
              <div className="space-y-3.5 border-t border-slate-200/80 pt-8">
                <div className="inline-flex items-center gap-2 text-[#a3d232]">
                  <Briefcase className="w-5 h-5 text-[#a3d232]" />
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight">
                    Our approach
                  </h3>
                </div>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                  We believe in taking the time to understand our clients' needs, challenges, and objectives, and developing solutions that deliver tangible results. We work hand-in-hand with our clients every step of the way to ensure success.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. KEY METRICS STATS BANNER */}
      <section className="relative py-16 bg-slate-950 overflow-hidden">
        {/* Background Image structure mapped to matching screenshot overlays */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
            alt="Admissions prep office glass workspace" 
            className="w-full h-full object-cover opacity-15 filter brightness-50"
          />
          <div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
            
            {/* Stat item 1 */}
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-widest font-mono">
                20
              </div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Years of Activity
              </div>
            </div>

            {/* Stat item 2 */}
            <div className="space-y-1 border-l border-white/10">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-widest font-mono">
                10k
              </div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Happy Customers
              </div>
            </div>

            {/* Stat item 3 */}
            <div className="space-y-1 border-l border-white/10">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-widest font-mono">
                5
              </div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Awards Won
              </div>
            </div>

            {/* Stat item 4 */}
            <div className="space-y-1 border-l border-white/10">
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-widest font-mono">
                87
              </div>
              <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                Employees
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. MEET OUR TEAM SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-4 max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-3 justify-center">
              <div className="h-[2px] w-6 bg-blue-600 rounded-full" />
              <span className="text-xs font-black uppercase tracking-widest text-blue-600 font-mono">Our team</span>
              <div className="h-[2px] w-6 bg-blue-600 rounded-full" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 uppercase tracking-tight">
              Meet our team of experts
            </h2>
            
            <p className="text-slate-500 text-sm max-w-lg mx-auto">
              Our greatest asset is our team of dedicated consultants, who bring a wealth of expertise and passion to every project.
            </p>
          </div>

          {/* Grid structure mapping the team matrix of 6 experts with corresponding profile aesthetics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-350"
              >
                {/* Photo space */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-50 relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-104 transition duration-500"
                    style={{ objectPosition: "center 20%" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                </div>

                {/* Info Text */}
                <div className="p-5 space-y-1.5 text-left">
                  <h4 className="text-lg font-black text-slate-950 uppercase tracking-tight">
                    {member.name}
                  </h4>
                  <div className="text-xs font-bold text-blue-600 uppercase tracking-wider font-mono">
                    {member.role}
                  </div>
                  <p className="text-slate-500 text-xs sm:text-sm mt-2 pt-2 border-t border-slate-50">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. ENVELOPE REDIRECT / CALL TO ACTION */}
      <section className="py-16 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute -left-10 -bottom-10 opacity-10 text-white pointer-events-none">
          <GraduationCap className="w-64 h-64" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              Ready to transform your scholastic trajectory?
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm max-w-xl">
              Arrange a private evaluation with our top advisors or analyze Ivy League admissions standards today.
            </p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={onNavigateToApply}
              className="px-6 py-3 font-bold text-blue-600 bg-white hover:bg-slate-100 rounded-full text-xs uppercase tracking-wider shadow-md transition hover:scale-103 active:scale-95 cursor-pointer"
            >
              Get started
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
