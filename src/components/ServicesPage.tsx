import React from "react";
import { Sparkles, GraduationCap, ArrowRight, TrendingUp, Compass, Landmark, Cpu, Leaf, BarChart2 } from "lucide-react";

interface ServicesPageProps {
  onBackToHome: () => void;
  onNavigateToChat: () => void;
  onNavigateToApply: () => void;
}

export default function ServicesPage({ onBackToHome, onNavigateToChat, onNavigateToApply }: ServicesPageProps) {
  const services = [
    {
      title: "Market research",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=800",
      description: "Our research services provide valuable insights into market trends, customer behavior, and competitive landscapes."
    },
    {
      title: "Strategic planning",
      image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=800",
      description: "By combining industry foresight with robust analytical models, we align organizational direction with long-term valuation objectives."
    },
    {
      title: "Financial advisory",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      description: "From planning and budgeting to risk management, our financial advisory services help businesses optimize performance."
    },
    {
      title: "Digital transition",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
      description: "Integrate agile digital systems, software models, and analytics architectures to fuel continuous operations improvement."
    },
    {
      title: "Sustainability",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      description: "Calibrate structural and governance architectures to deliver high-compliance ecological and community standards."
    },
    {
      title: "Management",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
      description: "Orchestrate resource pipelines, high-efficiency coordination modules, and standard operating blueprints for team success."
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 overflow-x-hidden">
      
      {/* 1. HERO BANNER WITH TRANSPARENT WHITEBOARD CONSULTING OVERLAY */}
      <div className="relative min-h-[350px] sm:min-h-[420px] md:min-h-[480px] w-full flex items-center justify-center bg-slate-950 overflow-hidden pt-16 sm:pt-20">
        
        {/* Whiteboard glass consultation bg */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1600" 
            alt="Collaborative meeting board strategic dialogue" 
            className="w-full h-full object-cover opacity-25 scale-102 filter brightness-[0.6] contrast-[1.1]"
            style={{ objectPosition: "center 28%" }}
          />
          {/* Rich overlay matches standard branding */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 mb-4 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            <span className="text-[10px] sm:text-xs font-bold text-blue-300 uppercase tracking-widest font-mono">Expert Consulting</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-4 drop-shadow-md">
            Services
          </h1>
          
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-medium leading-relaxed mb-6">
            Connecting industry-leading knowledge with progressive methodologies to drive measurable excellence.
          </p>

          {/* Breadcrumb row */}
          <div className="text-white/60 flex gap-2 font-semibold text-xs sm:text-sm items-center justify-center">
            <div>
              <button 
                onClick={onBackToHome} 
                className="drop-shadow-[0_.5px_.5px_rgba(0,0,0,1)] hover:text-blue-400 transition-colors cursor-pointer"
              >
                Home
              </button>
            </div>
            <div>
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
            </div>
            <div className="drop-shadow-[0_.5px_.5px_rgba(0,0,0,1)] text-blue-400">
              Services
            </div>
          </div>
        </div>

      </div>

      {/* 2. SUBHEADER SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left Col */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-12 bg-blue-600 rounded-full" />
                <span className="text-xs font-black uppercase tracking-widest text-blue-600 font-mono">Our services</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 uppercase tracking-tight leading-none">
                We offer a wide range of services
              </h2>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-6 lg:pt-8">
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                By combining our industry knowledge with cutting-edge tools and methodologies, we develop strategies that drive measurable results.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. IMAGED SERVICES GRID (Bento-inspired, overlay titles matching layout perfectly) */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            
            {services.map((service, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-[2rem] aspect-[4/2.8] sm:aspect-[4/2.5] md:aspect-[4/2.8] bg-slate-950 group shadow-md border border-slate-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300"
              >
                {/* Background Image */}
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-103 transition duration-500"
                />
                
                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/25 transition duration-300" />
                
                {/* Information Alignment (absolute positioning matching exactly the bottom placement in layout screenshot) */}
                <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-left select-none">
                  
                  {/* Floating Row: Title and Circle Arrow Icon */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight">
                      {service.title}
                    </h3>
                    
                    {/* Circle icon wrap */}
                    <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition cursor-pointer select-none">
                      <ArrowRight className="w-4.5 h-4.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                  
                  {/* Under Title description info */}
                  <p className="text-slate-300 text-xs sm:text-sm font-medium leading-relaxed max-w-md">
                    {service.description}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 4. SOLID BLUE BUSINESS CALL TO ACTION BANNER */}
      <section className="py-16 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute -left-10 -bottom-10 opacity-10 text-white pointer-events-none">
          <GraduationCap className="w-64 h-64" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">
              Ready to transform your business?
            </h3>
            <p className="text-blue-150 text-xs sm:text-sm max-w-xl">
              Partner with seasoned consulting authorities to accelerate digital, strategy, and operational models today.
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
