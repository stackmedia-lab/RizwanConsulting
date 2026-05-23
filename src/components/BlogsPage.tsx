import React, { useState } from "react";
import { Sparkles, GraduationCap, X, ArrowLeft, Share2, BookOpen, Clock, User } from "lucide-react";

interface BlogsPageProps {
  onBackToHome: () => void;
  onNavigateToChat: () => void;
  onNavigateToApply: () => void;
}

interface BlogPost {
  id: string;
  title: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
  author: string;
  description: string;
  content: string;
}

export default function BlogsPage({ onBackToHome, onNavigateToChat, onNavigateToApply }: BlogsPageProps) {
  const [selectedArticle, setSelectedArticle] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: "strategic-planning",
      title: "The power of strategic planning: a roadmap to success",
      date: "Apr 8, 2022",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      category: "Strategy",
      readTime: "5 min read",
      author: "Sarah Jenkins",
      description: "Our research services provide valuable insights into market trends, customer behavior, and competitive landscapes.",
      content: `At the heart of every thriving enterprise is a robust, dynamic strategy. Strategic planning is more than just a boardroom exercise; it’s a living blueprint that navigates ambiguity and aligns every gear of your organization toward a shared vision.

      ### Why Strategic Planning Matters
      1. **Declares Clarity of Vision:** Without a roadmap, departments operate in silos, wasting valuable runway on misaligned pursuits.
      2. **Allocates Capital with Precision:** Having an objective operational plan allows executive sponsors to direct funding to high-yielding products.
      3. **Builds Operational Resilience:** High-conviction planning designs emergency risk buffers, ensuring teams stay grounded during macroeconomic corrections.

      ### Designing the Multi-Year Roadmap
      Success begins by establishing realistic, raw performance baselines. Conduct detailed qualitative analyses of your target markets before committing to expansive engineering or hiring programs. Align horizontal communication channels, measure performance indicators, and foster feedback loops to iterate dynamically.`
    },
    {
      id: "good-leadership",
      title: "The importance of good leadership in a growing business",
      date: "Mar 15, 2022",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
      category: "Leadership",
      readTime: "7 min read",
      author: "David Vance",
      description: "Leadership is the key architectural muscle driving project orchestration and talent retention.",
      content: `Scale demands more than just adding lines to a codebase or doubling the size of your sales force. It requires strong executive anchors capable of inspiring trust, fostering horizontal communication, and driving accountability.

      ### Empowering Decentralized Teams
      True leadership doesn't hover; it enables. When scaling, centralized leadership becomes a structural bottleneck. Delegating high-integrity decision blocks to team leads cultivates agency and allows the enterprise to execute independently.

      ### Building High-Retaining Cultures
      Our research shows that teams guided by empathetic, performance-oriented sponsors exhibit 40% higher retention rates. Cultivate an environment of regular, structural feedback, celebrate milestone deployments, and invest heavily in continuous executive coaching.`
    },
    {
      id: "unlocking-growth",
      title: "Unlocking growth: strategies for scaling your business",
      date: "Feb 28, 2022",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      category: "Growth",
      readTime: "6 min read",
      author: "Marcus Aurelius",
      description: "Optimize margins, audit lead funnels, and construct modern customer loyalty loops.",
      content: `Scaling a business is a fine balance between defensive risk orchestration and aggressive conversion outreach. Many startups flounder not because they lack a product-market fit, but because their operational rails fold under demand.

      ### Auditing Your Conversion Funnels
      Before spending capital on advertising, map your existing client touchpoints. Are leads leaking midway through the onboarding workflow? Optimizing your primary sign-up page by even 2% can compound into thousands of dollars in monthly recurring revenue over time.

      ### The Power of Margin Preservation
      Scaling is useless if your expenses rise synchronously with your gross returns. Re-engineer supplier agreements, automate low-leverage transaction layers, and configure modular billing services to protect your bottom line during rapid expansions.`
    },
    {
      id: "navigating-change",
      title: "Navigating change: strategies for successful changes",
      date: "Feb 6, 2022",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
      category: "Operations",
      readTime: "8 min read",
      author: "Elena Rostov",
      description: "Overcome friction and establish lean organizational models during enterprise transition layers.",
      content: `Change is the only constant in modern markets. Yet, structural inertia often holds back long-standing enterprises from pivoting when technologies or consumer behaviors shift.

      ### Combating Internal Inertia
      The primary barrier to successful change is psychological, not technological. Teams naturally resist new software architectures or altered reporting layers out of habit. Overcome this by involving department heads in early sandbox trials and highlighting how the shift directly improves their daily workflows.

      ### Managing Implementation Milestones
      Avoid global, 'on-the-fly' code or process hotfixes. Roll out updates incrementally using specialized beta-user buckets. Track transition telemetry, compile feedback, and hold retrospectives to iron out anomalies.`
    },
    {
      id: "consistent-learning",
      title: "Creating a culture of consistent learning and growth",
      date: "Jan 12, 2022",
      image: "https://images.unsplash.com/photo-1531538606174-0f90ff5dce83?auto=format&fit=crop&q=80&w=800",
      category: "Culture",
      readTime: "5 min read",
      author: "Jameson Kelly",
      description: "Foster modern skill-sharing channels, internal mentorship tracks, and developer sandboxes.",
      content: `A static team is a vulnerable team. Designing a culture that rewards active learning, research, and experimentation ensures your company remains at the absolute cutting edge of your field.

      ### Structuring Weekly Guild Shares
      Implement brief, 30-minute share sessions where developers or marketers showcase progressive tools they have investigated. This democratizes knowledge, breaking down silos and inspiring other departments.

      ### Sponsoring Specialized Certifications
      Top contributors are hungry to elevate their skills. Provide structured budgets for advanced credentials, masterclasses, and regional summits. The return on investment manifests as higher-quality designs and stellar client-facing assurance.`
    },
    {
      id: "role-technology",
      title: "The role of technology in crafting customer experience",
      date: "Jan 12, 2022",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
      category: "Technology",
      readTime: "6 min read",
      author: "Sanjay Mehta",
      description: "Calibrate responsive technology interfaces and user data streams to engineer world-class loops.",
      content: `Technology should disappear, leaving behind a seamless, frictionless customer interface. The most memorable user experiences are those that anticipate user needs without drawing attention to the raw systems powering them.

      ### Speed is the Ultimate Feature
      Studies repeatedly show that page loading speeds exceeding two seconds compound customer bounce rates. Compress static media, utilize edge servers, and implement responsive state managers to keep your interfaces lightning-fast.

      ### Unifying Data Pipelines
      Integrate your contact forms, product analytics, and customer success tickets into a single, cohesive customer record. Empowering your account executives with a complete history of client interactions ensures deep personalization.`
    }
  ];

  return (
    <div className="bg-white min-h-screen text-slate-900 overflow-x-hidden">
      
      {/* 1. HERO BANNER WITH WHITEBOARD TEAM CONSULTING OVERLAY */}
      <div className="relative min-h-[350px] sm:min-h-[420px] md:min-h-[480px] w-full flex items-center justify-center bg-slate-950 overflow-hidden pt-16 sm:pt-20">
        
        {/* Whiteboard glass consultation bg */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1600" 
            alt="Collaborative meeting and consulting context" 
            className="w-full h-full object-cover opacity-25 scale-102 filter brightness-[0.6] contrast-[1.1]"
            style={{ objectPosition: "center 28%" }}
          />
          {/* Rich blue dark overlay matches Services / About Us */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 mb-4 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            <span className="text-[10px] sm:text-xs font-bold text-blue-300 uppercase tracking-widest font-mono">Company News</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight mb-4 drop-shadow-md">
            Blog posts
          </h1>
          
          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto font-medium leading-relaxed mb-6">
            Explore analytical breakthroughs, case studies, and progressive tactics curated by global advisors.
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
              Blog
            </div>
          </div>
        </div>

      </div>

      {/* 2. SUBHEADER SECTION (Matches perfectly with screenshots) */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            
            {/* Left Col */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-[2px] w-12 bg-blue-600 rounded-full" />
                <span className="text-xs font-black uppercase tracking-widest text-blue-600 font-mono">Our blog</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 uppercase tracking-tight leading-none">
                Explore insights and stay ahead
              </h2>
            </div>

            {/* Right Col */}
            <div className="lg:col-span-6 lg:pt-8">
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                Our blog features insights from our team of consultants, who share their best practices on a wide range of topics.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. BLOG POSTS IMAGED GRID (Matches styling from screenshot perfectly with Blue Badges for dates, image covers, bottom title overlay) */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {blogPosts.map((post) => (
              <div 
                key={post.id}
                onClick={() => setSelectedArticle(post)}
                className="relative overflow-hidden rounded-[2rem] aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/3] bg-slate-100 group shadow-md border border-slate-100 hover:shadow-2xl hover:border-blue-200 transition-all duration-300 cursor-pointer"
              >
                {/* Background Image */}
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-103 transition duration-500"
                />
                
                {/* Dark Vignette Overlay from bottom and top to make title and date readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-black/30 transition duration-300" />
                
                {/* Blue Badge in top-left as requested */}
                <div className="absolute top-5 left-5 z-20">
                  <span className="inline-flex items-center justify-center px-3.5 py-1 text-[11px] font-bold text-white bg-blue-600 rounded-[0.4rem] uppercase tracking-wide shadow-sm font-sans">
                    {post.date}
                  </span>
                </div>

                {/* Bottom Information Overlay matching screenshot perfectly */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 flex flex-col justify-end text-left select-none">
                  
                  {/* Category Pill */}
                  <span className="text-[10px] font-black tracking-widest text-blue-400 uppercase font-mono mb-2">
                    {post.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-extrabold text-white tracking-tight leading-snug group-hover:text-blue-300 transition-colors line-clamp-3">
                    {post.title}
                  </h3>
                  
                  {/* Subtle short prompt */}
                  <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider mt-3 flex items-center gap-1 group-hover:text-white/60 transition-colors">
                    Click to read article <span className="text-blue-400">→</span>
                  </span>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 4. SOLID BLUE CHANGE AGENT OR BUSINESS CALL TO ACTION */}
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

      {/* 5. DEEP ARTICLE OVERLAY READING MODAL */}
      {selectedArticle && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-[9999] animate-in fade-in duration-200">
          <div className="bg-white rounded-[2rem] max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in slide-in-from-bottom-6 duration-300 border border-slate-100">
            
            {/* Modal Image Header */}
            <div className="h-64 sm:h-80 relative overflow-hidden">
              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute top-4 right-4 p-2 bg-black/40 hover:bg-black/60 text-white rounded-full transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <span className="bg-blue-600 px-3 py-1 rounded-[0.4rem] text-[10px] font-bold uppercase tracking-wider">
                  {selectedArticle.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight leading-snug">
                  {selectedArticle.title}
                </h3>
              </div>
            </div>

            {/* Modal Metadata Header Bar */}
            <div className="bg-slate-50 border-b border-slate-100 px-6 sm:px-8 py-4 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 font-bold text-slate-700">
                  <User className="w-4 h-4 text-slate-400" /> {selectedArticle.author}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-400" /> {selectedArticle.readTime}
                </span>
              </div>
              <span className="font-mono font-bold text-slate-400">{selectedArticle.date}</span>
            </div>

            {/* Markdown Text Render Area */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="prose prose-sm max-w-none text-slate-600 font-sans text-xs whitespace-pre-line space-y-4">
                {selectedArticle.content.split("\n\n").map((para, i) => {
                  let text = para.trim();
                  if (text.startsWith("### ")) {
                    return (
                      <h4 key={i} className="text-sm sm:text-base font-extrabold text-slate-900 pt-3 border-b border-slate-100 pb-1.5 uppercase tracking-tight">
                        {text.replace("### ", "")}
                      </h4>
                    );
                  }
                  if (text.startsWith("## ")) {
                    return (
                      <h3 key={i} className="text-base sm:text-lg font-black text-slate-900 pt-4 uppercase tracking-tight">
                        {text.replace("## ", "")}
                      </h3>
                    );
                  }
                  if (text.startsWith("1. ") || text.startsWith("2. ") || text.startsWith("3. ")) {
                    return (
                      <div key={i} className="pl-4 border-l-2 border-blue-500 text-slate-700 text-xs italic my-3 bg-slate-50 p-2.5 rounded-lg">
                        {text}
                      </div>
                    );
                  }

                  // Simple bold mapping (**word**)
                  const formattedElements: React.ReactNode[] = [];
                  const parts = text.split(/\*\*([^*]+)\*\*/g);
                  parts.forEach((part, pIdx) => {
                    if (pIdx % 2 === 1) {
                      formattedElements.push(<strong key={pIdx} className="text-slate-900 font-extrabold">{part}</strong>);
                    } else {
                      formattedElements.push(part);
                    }
                  });

                  return <p key={i} className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">{formattedElements}</p>;
                })}
              </div>
            </div>

            {/* Modal Footer Controls */}
            <div className="bg-slate-50 border-t border-slate-100 p-4 px-6 sm:px-8 flex items-center justify-between">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 rounded-full text-xs font-bold flex items-center gap-2 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Return to Catalog
              </button>
              <div className="flex gap-2">
                <button
                  onClick={() => alert("Link copied to clipboard!")}
                  className="p-2 px-3 bg-white hover:bg-slate-100 border border-slate-200 text-slate-500 rounded-full text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5"
                  title="Share Article Link"
                >
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
