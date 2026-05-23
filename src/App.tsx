import React, { useState, useEffect } from "react";
import UniversityTrack from "./components/UniversityTrack";
import AssessmentWizard from "./components/AssessmentWizard";
import EssayCritic from "./components/EssayCritic";
import AdvisorChat from "./components/AdvisorChat";
import BlogSection from "./components/BlogSection";
import VideoSection from "./components/VideoSection";
import CoursesPage from "./components/CoursesPage";
import AboutUsPage from "./components/AboutUsPage";
import ServicesPage from "./components/ServicesPage";
import BlogsPage from "./components/BlogsPage";
import ApplyOnlinePage from "./components/ApplyOnlinePage";
import {
  GraduationCap,
  Sparkles,
  ArrowRight,
  BrainCircuit,
  MessageSquare,
  CheckCircle,
  X,
  Compass,
  FileText,
  Home,
  Menu,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  ArrowUp
} from "lucide-react";

type ActiveTab = "home" | "about" | "services" | "courses" | "blog" | "assess" | "essay" | "chat";

const TESTIMONIALS_DATA = [
  {
    name: "Ryan Johnson",
    role: "Tech Solutions",
    text: "Their collaborative approach, attention to detail, and commitment to delivering results set them apart from other consulting firms. I would't hesitate to recommend.",
    rating: 5,
    image: "https://framerusercontent.com/images/vHMSEWw5B42ZyOnn7b3crhvXwSY.jpg?width=512",
  },
  {
    name: "Alex Peterson",
    role: "Thompson Industries",
    text: "The impact of Consulting's work on our organization has been transformative. Their dedication to our success have helped us achieve remarkable growth.",
    rating: 5,
    image: "https://framerusercontent.com/images/vZW3QExeafY8ogiiWnlsg3Z00.jpg?width=512",
  },
  {
    name: "David Martinez",
    role: "Johnson Enterprises",
    text: "Their team's depth of knowledge, strategic thinking, and commitment to excellence have been instrumental in helping us navigate complex challenges.",
    rating: 4,
    image: "https://framerusercontent.com/images/6YEx3JiYIJRZsLw9TyBaZ8jK1kM.jpg?width=512",
  },
  {
    name: "John Smith",
    role: "JS Solutions",
    text: "The team at Consulting exceeded our expectations in every way. We are grateful for their partnership and the positive impact they've had on our business.",
    rating: 5,
    image: "https://framerusercontent.com/images/9Eojl9xKz48ZbfN2wukMx7GvI.jpg?width=512",
  }
];

const BLOG_POSTS_DATA = [
  {
    title: "The power of strategic planning: a roadmap to success",
    date: "Apr 8, 2022",
    dateTime: "2022-04-08T00:00:00.000Z",
    image: "https://framerusercontent.com/images/qklsR65YylztpJZUzOpPagyXoI.jpg",
    imageSrcSet: "https://framerusercontent.com/images/qklsR65YylztpJZUzOpPagyXoI.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/qklsR65YylztpJZUzOpPagyXoI.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/qklsR65YylztpJZUzOpPagyXoI.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/qklsR65YylztpJZUzOpPagyXoI.jpg 4000w",
    href: "./blog/the-power-of-strategic-planning-a-roadmap-to-success"
  },
  {
    title: "The importance of good leadership in a growing business",
    date: "Mar 15, 2022",
    dateTime: "2022-03-15T00:00:00.000Z",
    image: "https://framerusercontent.com/images/vyet712c80Y4J9fhSnep20f2mlU.jpg",
    imageSrcSet: "https://framerusercontent.com/images/vyet712c80Y4J9fhSnep20f2mlU.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/vyet712c80Y4J9fhSnep20f2mlU.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/vyet712c80Y4J9fhSnep20f2mlU.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/vyet712c80Y4J9fhSnep20f2mlU.jpg?scale-down-to=4096 4096w,https://framerusercontent.com/images/vyet712c80Y4J9fhSnep20f2mlU.jpg 5184w",
    href: "./blog/the-importance-of-good-leadership-in-a-growing-business"
  },
  {
    title: "Unlocking growth: strategies for scaling your business",
    date: "Feb 28, 2022",
    dateTime: "2022-02-28T00:00:00.000Z",
    image: "https://framerusercontent.com/images/XOgTNGhNhIIdGFoazkqqnG9QmE.jpg",
    imageSrcSet: "https://framerusercontent.com/images/XOgTNGhNhIIdGFoazkqqnG9QmE.jpg?scale-down-to=512 512w,https://framerusercontent.com/images/XOgTNGhNhIIdGFoazkqqnG9QmE.jpg?scale-down-to=1024 1024w,https://framerusercontent.com/images/XOgTNGhNhIIdGFoazkqqnG9QmE.jpg?scale-down-to=2048 2048w,https://framerusercontent.com/images/XOgTNGhNhIIdGFoazkqqnG9QmE.jpg 3600w",
    href: "./blog/unlocking-growth-strategies-for-scaling-your-business"
  },
  {
    title: "How to design a sustainable business model in 2026",
    date: "Jan 12, 2026",
    dateTime: "2026-01-12T00:00:00.000Z",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    imageSrcSet: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800 800w",
    href: "./blog/how-to-design-a-sustainable-business-model"
  },
  {
    title: "Understanding market gaps: a data-driven approach",
    date: "Dec 05, 2025",
    dateTime: "2025-12-05T00:00:00.000Z",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    imageSrcSet: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800 800w",
    href: "./blog/understanding-market-gaps"
  }
];

export default function App() {
  const [currentTab, setCurrentTab] = useState<ActiveTab>("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<{
    title: string;
    description: string;
    details: string;
    bullets: string[];
  } | null>(null);

  // Monitor scrolling to transition the sticky header from transparent/dark overlay to solid slate glass and update scrollY for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [blogIndex, setBlogIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, BLOG_POSTS_DATA.length - visibleCards);
  const safeBlogIndex = Math.min(blogIndex, maxIndex);

  const slidePrev = () => {
    setBlogIndex(prev => Math.max(0, prev - 1));
  };

  const slideNext = () => {
    setBlogIndex(prev => Math.min(maxIndex, prev + 1));
  };

  const handleTabChange = (tab: ActiveTab) => {
    setCurrentTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const servicesList = [
    {
      title: "Market research",
      colorClass: "text-[#3475ef]",
      bgColor: "bg-[#3475ef]/10",
      accentBorder: "border-[#3475ef]",
      description: "Conducting extensive research to analyze university viability, profile strength, and competitive landscapes.",
      details: "Our Market Research & Academic Profiling service maps your academic trajectory against historic admissions outcomes at Ivy League & Top 30 universities. Together we uncover deep insights regarding acceptance statistics, major alignments, and portfolio viability.",
      bullets: [
        "Analysis of extracurricular profiles relative to successful admits",
        "Strategic evaluation of target university acceptance rates",
        "Major positioning diagnostics for niche alignment",
        "Extracurricular landscape audits and roadmap adjustments"
      ],
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Strategic planning",
      colorClass: "text-[#a3d232]",
      bgColor: "bg-[#a3d232]/10",
      accentBorder: "border-[#a3d232]",
      description: "Mapping customized preparation paths, admissions roadmaps, and setting structured milestones.",
      details: "Prevent late-stage bottlenecks and optimize test dates with structured planning calendars. We formulate cohesive roadmaps for school choices, AP selection, early action deadlines, and counseling recommendations.",
      bullets: [
        "EA / ED vs. RD school list optimization boards",
        "Personalized SAT/ACT schedules & AP matching",
        "Guidance on building relationship credentials with advisors",
        "Strategic timelines outlining key application milestones"
      ],
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Financial advisory",
      colorClass: "text-[#4ec8de]",
      bgColor: "bg-[#4ec8de]/10",
      accentBorder: "border-[#4ec8de]",
      description: "Aiding with scholarship programs, CSS Profile documentation, and tuition cost optimization.",
      details: "High-level financial modeling for families looking to maximize university investment. We organize CSS Profile and FAFSA compliance documents, match external merit grants, and draft calculated appeal narratives where applicable.",
      bullets: [
        "Detailed FAFSA and CSS Profile process prep support",
        "Identifying specialized merit grants and regional scholarship tracks",
        "Overseas student cost projection and budgeting models",
        "Aid appeal strategies leveraging competitive offers"
      ],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800 flex flex-col font-sans relative">
      
      {/* Premium Floating Capsule Navbar */}
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 transition-all duration-350 rounded-full border border-solid ${
          isScrolled || currentTab !== "home"
            ? "bg-slate-950/90 backdrop-blur-md shadow-lg border-white/15 py-2 px-3 md:px-5"
            : "bg-black/40 backdrop-blur-sm border-white/10 shadow-md py-3 px-3 md:px-5"
        }`}
      >
        <div className="w-full">
          <div className="flex justify-between items-center h-12">
            
            {/* Logo area matching image */}
            <div
              className="flex items-center gap-2.5 cursor-pointer group select-none"
              onClick={() => handleTabChange("home")}
            >
              <div className="p-1.5 bg-gradient-to-tr from-blue-600 to-indigo-600 text-white rounded-full shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center">
                <GraduationCap className="w-4.5 h-4.5" />
              </div>
              <div className="text-left">
                <span className="text-base md:text-lg font-black text-white tracking-tight block leading-none">
                  EDIFY <span className="text-blue-400">ELITE</span>
                </span>
                <span className="text-[7px] block text-gray-400 font-extrabold tracking-wider mt-0.5 uppercase leading-none">
                  A PROJECT OF EDIFY GROUP
                </span>
              </div>
            </div>

            {/* Middle Nav Links matching image exactly as capsule menu */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5">
              <button
                onClick={() => handleTabChange("home")}
                className={`px-3 py-1.5 rounded-full text-xs transition-all duration-200 cursor-pointer font-bold ${
                  currentTab === "home"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                Home
              </button>

              <button
                onClick={() => handleTabChange("about")}
                className={`px-3 py-1.5 rounded-full text-xs transition-all duration-200 cursor-pointer font-bold ${
                  currentTab === "about"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                About Us
              </button>
              
              <button
                onClick={() => handleTabChange("courses")}
                className={`px-3 py-1.5 rounded-full text-xs transition-all duration-200 cursor-pointer font-bold ${
                  currentTab === "courses"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                Courses
              </button>

              <button
                onClick={() => handleTabChange("services")}
                className={`px-3 py-1.5 rounded-full text-xs transition-all duration-200 cursor-pointer font-bold ${
                  currentTab === "services"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                Services
              </button>

              <button
                onClick={() => handleTabChange("blog")}
                className={`px-3 py-1.5 rounded-full text-xs transition-all duration-200 cursor-pointer font-bold ${
                  currentTab === "blog"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                Blog
              </button>

              <a
                href="#team"
                onClick={(e) => {
                  e.preventDefault();
                  handleTabChange("home");
                  setTimeout(() => {
                    document.getElementById("team")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }}
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-gray-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                Our Team
              </a>

              <button
                onClick={() => handleTabChange("chat")}
                className={`px-3 py-1.5 rounded-full text-xs transition-all duration-200 cursor-pointer font-bold ${
                  currentTab === "chat"
                    ? "bg-blue-600 text-white shadow-xs"
                    : "text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                Contact Us
              </button>
            </nav>

            {/* Right Quick Assessment button - Capsule format matching screenshot */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => handleTabChange("assess")}
                className="px-5 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-all shadow-md active:scale-95 hover:shadow-lg cursor-pointer uppercase tracking-wider"
              >
                Apply Online
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="lg:hidden flex items-center pr-1">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1 px-2.5 hover:bg-white/10 text-white rounded-full cursor-pointer transition-colors flex items-center justify-center"
              >
                <Menu className="w-5.5 h-5.5" />
              </button>
            </div>

          </div>
        </div>

        {/* Floating rounded Dropdown menu below the floating capsule */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-[calc(100%+0.75rem)] left-0 right-0 bg-slate-950/95 backdrop-blur-md border border-white/15 p-5 rounded-2xl shadow-2xl flex flex-col gap-1.5 text-xs font-semibold text-left animate-in fade-in slide-in-from-top-2 duration-200">
            <button
              onClick={() => handleTabChange("home")}
              className={`py-3 text-left border-b border-white/5 flex justify-between items-center ${
                currentTab === "home" ? "text-blue-400 font-bold" : "text-white"
              }`}
            >
              <span>Home</span>
              {currentTab === "home" && <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />}
            </button>
            <button
              onClick={() => handleTabChange("about")}
              className={`py-3 text-left border-b border-white/5 flex justify-between items-center ${
                currentTab === "about" ? "text-blue-400 font-bold" : "text-gray-300"
              }`}
            >
              <span>About Us</span>
              {currentTab === "about" && <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />}
            </button>
            <button
              onClick={() => handleTabChange("courses")}
              className={`py-3 text-left border-b border-white/5 flex justify-between items-center ${
                currentTab === "courses" ? "text-blue-400 font-bold" : "text-gray-300"
              }`}
            >
              <span>Courses</span>
              {currentTab === "courses" && <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />}
            </button>
            <button
              onClick={() => {
                handleTabChange("services");
                setMobileMenuOpen(false);
              }}
              className={`py-3 text-left border-b border-white/5 flex justify-between items-center ${
                currentTab === "services" ? "text-blue-400 font-bold" : "text-gray-300"
              }`}
            >
              <span>Services</span>
              {currentTab === "services" && <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />}
            </button>
            <button
              onClick={() => {
                handleTabChange("blog");
                setMobileMenuOpen(false);
              }}
              className={`py-3 text-left border-b border-white/5 flex justify-between items-center ${
                currentTab === "blog" ? "text-blue-400 font-bold" : "text-gray-300"
              }`}
            >
              <span>Blog</span>
              {currentTab === "blog" && <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />}
            </button>
            <button
              onClick={() => {
                handleTabChange("home");
                setMobileMenuOpen(false);
                setTimeout(() => {
                  document.getElementById("team")?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
              className="py-3 text-left text-gray-300 border-b border-white/5 block"
            >
              Our Team
            </button>
            <button
              onClick={() => {
                handleTabChange("chat");
                setMobileMenuOpen(false);
              }}
              className={`py-3 text-left border-b border-white/5 flex justify-between items-center ${
                currentTab === "chat" ? "text-blue-400 font-bold" : "text-gray-300"
              }`}
            >
              <span>Contact Us</span>
              {currentTab === "chat" && <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />}
            </button>
            <button
              onClick={() => handleTabChange("assess")}
              className="w-full text-center py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold uppercase tracking-wider shadow-md transition-all active:scale-95"
            >
              Apply Online
            </button>
          </div>
        )}
      </header>

      {/* Main Container Content */}
      <main className="flex-1">
        {currentTab === "home" ? (
          /* PORTAL VIEW WITH THE GORGEOUS PRESENTATIONAL FLOWS MATCHING THE IMAGE PERFECTLY */
          <div className="space-y-0">
            
            {/* SECTION 1: HERO CONTAINER MATCHING SCREENSHOT */}
            <div className="relative bg-[#020617] overflow-hidden h-screen min-h-[600px] flex items-center pt-24 origin-center">
              {/* Genuine background picture of high school student peers laughing together with parallax scroll */}
              <div 
                className="absolute inset-0 z-0 will-change-transform"
                style={{
                  transform: `translate3d(0, ${scrollY * 0.4}px, 0) scale(${1 + scrollY * 0.0003})`,
                  opacity: Math.max(0.15, 1 - scrollY / 1000)
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1800"
                  alt="Students smiling outside on campus"
                  className="w-full h-full object-cover object-center filter brightness-45 contrast-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>

              {/* Overlaid details layout with active parallax floating text */}
              <div 
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16 md:py-24 relative z-10 text-left will-change-transform"
                style={{
                  transform: `translate3d(0, ${-scrollY * 0.1}px, 0)`,
                  opacity: Math.max(0, 1 - scrollY / 800)
                }}
              >
                <div className="max-w-3xl space-y-6">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none uppercase">
                    Build the Future <br />
                    You Deserve
                  </h1>
                  
                  {/* Underline separator */}
                  <div className="h-1 w-20 bg-blue-500 rounded-full" />

                  <p className="text-gray-100 font-normal text-sm sm:text-base md:text-[17px] max-w-2xl leading-relaxed">
                    Welcome to Rizwan Consulting, where we help you succeed in gaining admission to top
                    notch universities. Our mission is simple yet profound: to help ambitious students
                    like you realize their academic and career aspirations.
                  </p>
                </div>
              </div>

              {/* Animated chevron pointer at core bottom center representing scroll anchor with parallax fade */}
              <div 
                className="absolute bottom-10 left-1/2 z-10 animate-bounce cursor-pointer flex flex-col items-center will-change-transform"
                style={{
                  transform: `translate3d(-50%, ${scrollY * 0.25}px, 0)`,
                  opacity: Math.max(0, 1 - scrollY / 250)
                }}
                onClick={() => {
                  const selectTarget = document.getElementById("services");
                  if (selectTarget) selectTarget.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <ChevronDown className="w-8 h-8 text-white/80" />
              </div>
            </div>

            {/* NEW OUR SERVICES SECTION WITH BENTO GRID AND BOTTOM BLUR HOVER EFFECT */}
            <div id="services" className="services-styled-container w-full border-b border-gray-100">
              {/* VERTICAL FLOATING SOCIAL RAIL ON THE RIGHT MARGIN - Elegant & accessible */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3 bg-slate-900/5 backdrop-blur-md p-2.5 px-3 rounded-l-2xl border border-slate-200/50 shadow-xs">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#1877f2]/10 hover:bg-[#1877f2] text-[#1877f2] hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-xs"
                  title="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-500/10 to-pink-500/10 hover:from-yellow-500 hover:to-pink-500 text-pink-600 hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-xs"
                  title="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#0077b5]/10 hover:bg-[#0077b5] text-[#0077b5] hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-xs"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-[#ff0000]/10 hover:bg-[#ff0000] text-[#ff0000] hover:text-white flex items-center justify-center transition-all hover:scale-110 shadow-xs"
                  title="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>

              <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-24">
                <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6 items-end">
                  <div className="lg:col-span-7 space-y-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-[2px] bg-blue-600 rounded-full" />
                      <span className="text-blue-600 font-extrabold uppercase tracking-widest text-[11px]">Our services</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-[40px] font-black text-slate-900 tracking-tight leading-tight uppercase font-display">
                      We offer a wide <br className="hidden md:inline" /> range of services
                    </h2>
                  </div>
                  <div className="lg:col-span-5 md:pl-4 lg:pl-0">
                    <p className="text-gray-500 font-light text-[14px] md:text-base leading-relaxed">
                      By combining our industry knowledge with cutting-edge tools and methodologies, we develop strategies that drive measurable results.
                    </p>
                  </div>
                </div>

                {/* Grid container with Market Research and Stacked cards */}
                <div className="grid lg:grid-cols-12 gap-6 mt-16">
                  {/* Left Column: Market Research (Tall Card) */}
                  <div 
                    onClick={() => setSelectedService(servicesList[0])}
                    className="lg:col-span-6 h-[500px] rounded-2xl overflow-hidden relative group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                  >
                    <img
                      src={servicesList[0].image}
                      alt={servicesList[0].title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 group-hover:via-black/35 group-hover:from-black/90" />
                    
                    {/* Bottom Blur Hover Effect with gradient mask */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hero-blur-fade pointer-events-none select-none" />

                    <div className="absolute inset-x-0 bottom-0 p-8 text-white z-10 text-left flex flex-col justify-end">
                      <div className="max-w-[85%]">
                        <h3 className="text-2xl font-black tracking-tight text-white mb-1 uppercase font-display leading-none">
                          {servicesList[0].title}
                        </h3>
                        
                        {/* On Hover description shown below the heading - Slower dynamic transition */}
                        <div className="overflow-hidden transition-all duration-[1400ms] ease-in-out max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100">
                          <p className="text-sm text-gray-200 font-light leading-relaxed mt-2.5">
                            {servicesList[0].description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="absolute bottom-8 right-8 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:scale-110">
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>

                  {/* Right Column: Strategic Planning & Financial Advisory */}
                  <div className="lg:col-span-6 flex flex-col gap-6">
                    
                    {/* Card 2: Strategic Planning */}
                    <div 
                      onClick={() => setSelectedService(servicesList[1])}
                      className="h-[238px] rounded-2xl overflow-hidden relative group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                    >
                      <img
                        src={servicesList[1].image}
                        alt={servicesList[1].title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-300 group-hover:via-black/30 group-hover:from-black/90" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hero-blur-fade pointer-events-none select-none" />

                      <div className="absolute inset-x-0 bottom-0 p-8 text-white z-10 text-left flex flex-col justify-end">
                        <div className="max-w-[85%]">
                          <h3 className="text-xl font-black tracking-tight text-white mb-1 uppercase font-display leading-none">
                            {servicesList[1].title}
                          </h3>
                          <div className="overflow-hidden transition-all duration-[1400ms] ease-in-out max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100">
                            <p className="text-sm text-gray-200 font-light leading-relaxed mt-2">
                              {servicesList[1].description}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-8 right-8 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:scale-110">
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>

                    {/* Card 3: Financial Advisory */}
                    <div 
                      onClick={() => setSelectedService(servicesList[2])}
                      className="h-[238px] rounded-2xl overflow-hidden relative group cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
                    >
                      <img
                        src={servicesList[2].image}
                        alt={servicesList[2].title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-opacity duration-300 group-hover:via-black/30 group-hover:from-black/90" />
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hero-blur-fade pointer-events-none select-none" />

                      <div className="absolute inset-x-0 bottom-0 p-8 text-white z-10 text-left flex flex-col justify-end">
                        <div className="max-w-[85%]">
                          <h3 className="text-xl font-black tracking-tight text-white mb-1 uppercase font-display leading-none">
                            {servicesList[2].title}
                          </h3>
                          <div className="overflow-hidden transition-all duration-[1400ms] ease-in-out max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100">
                            <p className="text-sm text-gray-200 font-light leading-relaxed mt-2">
                              {servicesList[2].description}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="absolute bottom-8 right-8 w-11 h-11 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-blue-600 group-hover:border-blue-500 group-hover:scale-110">
                        <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </div>

            {/* SEAMLESSLY INJECTED CUSTOMIZED SERVICES SECTION BELOW OUR SERVICES */}
            <section className="framer-1nqpm7b whitespace-normal text-left" data-framer-name="Customized Services">
              <div className="framer-1m191zh" data-framer-name="Container">
                <div className="framer-1b466xj">
                  <div className="framer-ouhnjq" data-framer-component-type="RichTextContainer" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                    <h2 className="framer-text framer-styles-preset-1xoaeqf text-center" data-styles-preset="DBPG3DvKk" dir="auto" style={{ "--framer-text-color": "var(--token-5c281861-81a3-4ea6-82fc-deee27493003, rgb(255, 255, 255))" } as React.CSSProperties}>
                      Need customized services?
                    </h2>
                  </div>
                  <div className="framer-1y2i0nb-container cursor-pointer" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                    <button
                      onClick={() => handleTabChange("assess")}
                      className="framer-kOj5H framer-Oq4xm framer-xmql7m framer-v-16o6312 framer-16o0nld border hover:opacity-90 outline-none select-none cursor-pointer"
                      style={{
                        "--border-bottom-width": "1px",
                        "--border-color": "rgba(255, 255, 255, 0.5)",
                        "--border-left-width": "1px",
                        "--border-right-width": "1px",
                        "--border-style": "solid",
                        "--border-top-width": "1px",
                        backgroundColor: "rgba(0, 0, 0, 0)",
                        borderRadius: "50px",
                        opacity: 1,
                        willChange: "transform",
                        borderWidth: "1px",
                        borderColor: "rgba(255, 255, 255, 0.5)",
                        borderStyle: "solid"
                      } as React.CSSProperties}
                    >
                      <div className="framer-19tgvc" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none", opacity: 1 } as React.CSSProperties}>
                        <p className="framer-text framer-styles-preset-1ktalxb" data-styles-preset="uhMJpD0s4" dir="auto">
                          Request a personalized service
                        </p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* OUR APPROACH SECTION */}
            <section className="framer-f9now2" data-framer-name="Our Approach">
              <div className="framer-zmo6in" data-framer-name="Container">
                <div className="framer-13797cl">
                  <div className="framer-15ohein" data-framer-name="Image" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                    <div data-framer-background-image-wrapper="true" style={{ position: "absolute", borderRadius: "inherit", inset: 0 }}>
                      <img
                        decoding="auto"
                        loading="lazy"
                        src="https://framerusercontent.com/images/ImUfonalQMOKWjsL2OcxwGINE.jpg?width=1024"
                        alt="Business Meeting"
                        className="block w-full h-full object-cover object-center"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    
                    <div className="framer-n1hhfb" data-framer-name="Sales Graph">
                      <div className="framer-10uhwlz" data-framer-name="Container" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                        <div className="framer-1fsk8i5" data-framer-name="Texts">
                          <div className="framer-6d5ur0" data-framer-name="Title">
                            <svg className="w-4 h-4 text-[#136bc2]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.94" />
                            </svg>
                            <div className="framer-1k4zhbs" data-framer-component-type="RichTextContainer">
                              <h5 className="framer-text framer-styles-preset-1fyxkgk">Sales this month</h5>
                            </div>
                          </div>
                          <div className="framer-h25edn" data-framer-component-type="RichTextContainer">
                            <h5 className="framer-text framer-styles-preset-1fyxkgk">+30%</h5>
                          </div>
                        </div>
                        <div className="framer-x10tlt" data-framer-name="Lines">
                          <div className="framer-9g0jhs" data-framer-name="Line"></div>
                          <div className="framer-1zzivr" data-framer-name="Line"></div>
                          <div className="framer-1uytno5" data-framer-name="Line"></div>
                          <div className="framer-1qwd02t" data-framer-name="Line"></div>
                          <div className="framer-4paetm" data-framer-name="Line"></div>
                          <div className="framer-se8d2s" data-framer-name="Line"></div>
                          <div className="framer-14a35qk" data-framer-name="Line"></div>
                          <div className="framer-eaj89t" data-framer-name="Line"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="framer-50gs9g" data-framer-name="Texts">
                    <div className="framer-1yn7xbu" data-framer-name="Subtitle" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                      <div className="framer-1ley2r4" data-framer-name="Line"></div>
                      <div className="framer-1epuvfz" data-framer-component-type="RichTextContainer">
                        <h4 className="framer-text framer-styles-preset-qdgb2x">Our approach</h4>
                      </div>
                    </div>
                    
                    <div className="framer-359ijk" data-framer-component-type="RichTextContainer" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                      <h2 className="framer-text framer-styles-preset-1xoaeqf" data-styles-preset="DBPG3DvKk" dir="auto">
                        Innovative approach to consulting
                      </h2>
                    </div>
                    
                    <div className="framer-1sfj77e" data-framer-component-type="RichTextContainer" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                      <p className="framer-text framer-styles-preset-r7ux1z" data-styles-preset="bqTo1VedN">
                        By combining our industry knowledge with cutting-edge tools and methodologies, we develop actionable strategies that drive measurable results.
                      </p>
                    </div>
                    
                    <div className="framer-os2dhj" data-framer-name="Spacer"></div>
                    
                    <div className="framer-axrm48" data-framer-name="Key Points">
                      <div className="framer-dw4csr" data-framer-name="Key Point" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                        <div className="framer-1nd61dp" data-framer-name="Icon">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <div className="framer-18npuu1" data-framer-component-type="RichTextContainer">
                          <h4 className="framer-text framer-styles-preset-1maq1s8">
                            We believe in fostering long-term partnerships
                          </h4>
                        </div>
                      </div>
                      
                      <div className="framer-1532d2x" data-framer-name="Key Point" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                        <div className="framer-5q9pi" data-framer-name="Icon">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <div className="framer-zek352" data-framer-component-type="RichTextContainer">
                          <h4 className="framer-text framer-styles-preset-1maq1s8">
                            We develop actionable plans to achieve your goals
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* FULL-WIDTH ADDITIONAL IMAGE BANNER BELOW OUR APPROACH */}
            <section className="relative w-full h-[320px] sm:h-[450px] md:h-[550px] flex items-end pb-12 md:pb-20 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img
                  decoding="auto"
                  loading="lazy"
                  src="https://framerusercontent.com/images/5HKlRNWxRP9pKorHGF6OWxCVdmM.jpg?width=2048"
                  alt="Our Journey"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                {/* Image dark cover overlay and drop shadow gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-black/30 z-10" />
                <div className="absolute inset-0 bg-black/20 z-10" />
              </div>

              <div className="max-w-7xl mx-auto w-full px-6 md:px-12 z-25 relative">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <h2 className="text-white text-3xl md:text-4xl lg:text-[42px] font-bold tracking-tight max-w-2xl leading-[1.15] font-display">
                    Our journey began 20 years ago
                  </h2>
                  <div>
                    <a
                      href="#about"
                      className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-white/50 hover:border-white text-white text-[13px] font-medium tracking-wide bg-transparent transition-all duration-300 hover:bg-white/10 active:scale-95 select-none"
                    >
                      Read our story
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* WHY CHOOSE US SECTION INJECTED IMMEDIATELY BELOW IMAGE */}
            <section className="framer-hdxdos" data-framer-name="Why Choose Us">
              <div className="framer-n6rejd" data-framer-name="Container">
                <div className="framer-1djdxyg" data-framer-name="Texts">
                  <div className="framer-xuvad0" data-framer-name="Subtitle" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                    <div className="framer-58x297" data-framer-name="Line"></div>
                    <div className="framer-74bqfc" data-framer-component-type="RichTextContainer">
                      <h4 className="framer-text framer-styles-preset-qdgb2x" data-styles-preset="T5uFrRyX_">
                        Why choose us
                      </h4>
                    </div>
                  </div>
                  <div className="framer-rjnay6" data-framer-component-type="RichTextContainer" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                    <h2 className="framer-text framer-styles-preset-1xoaeqf" data-styles-preset="DBPG3DvKk">
                      We strive to deliver value to our clients
                    </h2>
                  </div>
                  <div className="framer-n97e0" data-framer-component-type="RichTextContainer" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                    <p className="framer-text framer-styles-preset-r7ux1z" data-styles-preset="bqTo1VedN">
                      We are dedicated to providing the highest level of service, delivering innovative solutions, and exceeding expectations in everything we do.
                    </p>
                  </div>
                </div>
                
                <div className="framer-1cdidas" data-framer-name="Info Cards" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                  <div className="framer-1zctfj-container">
                    <a className="framer-1nh2xd5" href="#about" data-framer-name="Desktop">
                      <div className="framer-2oc8eu" data-framer-name="Icon">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div className="framer-b0wy0m">
                        <div className="framer-128ms7d" data-framer-name="Title" data-framer-component-type="RichTextContainer">
                          <h3 className="framer-text framer-styles-preset-6dxd2n" data-styles-preset="iTfnQPceB">
                            Proven track record
                          </h3>
                        </div>
                        <div className="framer-1ceon7b" data-framer-name="Description" data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-74i79w" data-styles-preset="hUr3emsum">
                            We have helped countless businesses overcome challenges.
                          </p>
                        </div>
                        <div className="framer-1yknqlj" data-framer-name="Link: Title" data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-116co3n" data-styles-preset="IVK9zLGKh">
                            Our track record →
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  
                  <div className="framer-527076-container">
                    <a className="framer-1nh2xd5" href="#about" data-framer-name="Desktop">
                      <div className="framer-2oc8eu" data-framer-name="Icon">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div className="framer-b0wy0m">
                        <div className="framer-128ms7d" data-framer-name="Title" data-framer-component-type="RichTextContainer">
                          <h3 className="framer-text framer-styles-preset-6dxd2n" data-styles-preset="iTfnQPceB">
                            Collaborative approach
                          </h3>
                        </div>
                        <div className="framer-1ceon7b" data-framer-name="Description" data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-74i79w" data-styles-preset="hUr3emsum">
                            We ensure transparency throughout the process.
                          </p>
                        </div>
                        <div className="framer-1yknqlj" data-framer-name="Link: Title" data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-116co3n" data-styles-preset="IVK9zLGKh">
                            Our process →
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  
                  <div className="framer-1ahnupc-container">
                    <a className="framer-1nh2xd5" href="#about" data-framer-name="Desktop">
                      <div className="framer-2oc8eu" data-framer-name="Icon">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 .364l-.707 .707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 113.536 0V21h-2v-4.7" />
                        </svg>
                      </div>
                      <div className="framer-b0wy0m">
                        <div className="framer-128ms7d" data-framer-name="Title" data-framer-component-type="RichTextContainer">
                          <h3 className="framer-text framer-styles-preset-6dxd2n" data-styles-preset="iTfnQPceB">
                            Innovative solutions
                          </h3>
                        </div>
                        <div className="framer-1ceon7b" data-framer-name="Description" data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-74i79w" data-styles-preset="hUr3emsum">
                            We leverage the latest technologies to deliver solutions.
                          </p>
                        </div>
                        <div className="framer-1yknqlj" data-framer-name="Link: Title" data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-116co3n" data-styles-preset="IVK9zLGKh">
                            Our solutions →
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* OUR PROCESS SECTION INJECTED IMMEDIATELY BELOW WHY CHOOSE US */}
            <section id="projects" className="framer-6wyo2c" data-framer-name="Our Process">
              <div className="framer-kumnbm" data-framer-name="Container">
                <div className="framer-y9vyv5">
                  <div className="framer-1s1vwqt" data-framer-name="Texts">
                    <div className="framer-4k1mlj" data-framer-component-type="RichTextContainer" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                      <h2 className="framer-text framer-styles-preset-1xoaeqf" data-styles-preset="DBPG3DvKk">
                        Our process
                      </h2>
                    </div>
                    <div className="framer-1yvtsmi" data-framer-component-type="RichTextContainer" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                      <p className="framer-text framer-styles-preset-r7ux1z" data-styles-preset="bqTo1VedN">
                        We developed an innovative and flexible process that allows us to understand your business better.
                      </p>
                    </div>
                    <div className="framer-18zzc8h-container" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                      <a className="framer-16o0nld" href="#about">
                        Learn more
                      </a>
                    </div>
                  </div>

                  <div className="framer-kr65or" data-framer-name="Info Cards" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                    {/* Card 01 - Discovery */}
                    <div className="framer-wf0mfr-container">
                      <a className="framer-19t5yp9" href="#about" tabIndex={0} data-framer-name="Desktop">
                        <div className="framer-1ms9kxm" data-framer-component-type="RichTextContainer">
                          <h2 className="framer-text framer-styles-preset-1xoaeqf" data-styles-preset="DBPG3DvKk">
                            01.
                          </h2>
                        </div>
                        <div className="framer-1t5mlr6"></div>
                        <div className="framer-1nkuxxd" data-framer-component-type="RichTextContainer">
                          <h3 className="framer-text framer-styles-preset-6dxd2n" data-styles-preset="iTfnQPceB">
                            Discovery
                          </h3>
                        </div>
                        <div className="framer-1l9gnwh" data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-74i79w" data-styles-preset="hUr3emsum">
                            The first step is to gain a deep understanding of your business.
                          </p>
                        </div>
                      </a>
                    </div>

                    {/* Card 03 - Implementation */}
                    <div className="framer-1rr0amh-container">
                      <a className="framer-19t5yp9" href="#about" tabIndex={0} data-framer-name="Desktop">
                        <div className="framer-1ms9kxm" data-framer-component-type="RichTextContainer">
                          <h2 className="framer-text framer-styles-preset-1xoaeqf" data-styles-preset="DBPG3DvKk">
                            03.
                          </h2>
                        </div>
                        <div className="framer-1t5mlr6"></div>
                        <div className="framer-1nkuxxd" data-framer-component-type="RichTextContainer">
                          <h3 className="framer-text framer-styles-preset-6dxd2n" data-styles-preset="iTfnQPceB">
                            Implementation
                          </h3>
                        </div>
                        <div className="framer-1l9gnwh" data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-74i79w" data-styles-preset="hUr3emsum">
                            We will work closely with your team to implement the changes.
                          </p>
                        </div>
                      </a>
                    </div>

                    {/* Card 02 - Development */}
                    <div className="framer-1ebw0lf-container">
                      <a className="framer-19t5yp9" href="#about" tabIndex={0} data-framer-name="Desktop">
                        <div className="framer-1ms9kxm" data-framer-component-type="RichTextContainer">
                          <h2 className="framer-text framer-styles-preset-1xoaeqf" data-styles-preset="DBPG3DvKk">
                            02.
                          </h2>
                        </div>
                        <div className="framer-1t5mlr6"></div>
                        <div className="framer-1nkuxxd" data-framer-component-type="RichTextContainer">
                          <h3 className="framer-text framer-styles-preset-6dxd2n" data-styles-preset="iTfnQPceB">
                            Development
                          </h3>
                        </div>
                        <div className="framer-1l9gnwh" data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-74i79w" data-styles-preset="hUr3emsum">
                            We'll work with you to develop a strategy that fits your objectives.
                          </p>
                        </div>
                      </a>
                    </div>

                    {/* Card 04 - Monitoring */}
                    <div className="framer-aeyfro-container">
                      <a className="framer-19t5yp9" href="#about" tabIndex={0} data-framer-name="Desktop">
                        <div className="framer-1ms9kxm" data-framer-component-type="RichTextContainer">
                          <h2 className="framer-text framer-styles-preset-1xoaeqf" data-styles-preset="DBPG3DvKk">
                            04.
                          </h2>
                        </div>
                        <div className="framer-1t5mlr6"></div>
                        <div className="framer-1nkuxxd" data-framer-component-type="RichTextContainer">
                          <h3 className="framer-text framer-styles-preset-6dxd2n" data-styles-preset="iTfnQPceB">
                            Monitoring
                          </h3>
                        </div>
                        <div className="framer-1l9gnwh" data-framer-component-type="RichTextContainer">
                          <p className="framer-text framer-styles-preset-74i79w" data-styles-preset="hUr3emsum">
                            We'll monitor key performance indicators and gather feedback.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION: Our Commitment */}
            <section id="team" className="framer-rapo9o" data-framer-name="Our Commitment">
              <div className="framer-3ifg1s" data-framer-name="Container">
                <div className="framer-rpq1i">
                  <div className="framer-vjp8va" data-framer-name="Image" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                    <div data-framer-background-image-wrapper="true" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" }}>
                      <img
                        decoding="auto"
                        loading="lazy"
                        width="5066"
                        height="3377"
                        sizes="max((min(100vw - 100px, 1240px) - 100px) / 2, 1px)"
                        srcSet="https://framerusercontent.com/images/umz1vAsNQy3hz5TGm8mgalWPqq4.jpg?scale-down-to=512&amp;width=5066&amp;height=3377 512w,https://framerusercontent.com/images/umz1vAsNQy3hz5TGm8mgalWPqq4.jpg?scale-down-to=1024&amp;width=5066&amp;height=3377 1024w,https://framerusercontent.com/images/umz1vAsNQy3hz5TGm8mgalWPqq4.jpg?scale-down-to=2048&amp;width=5066&amp;height=3377 2048w,https://framerusercontent.com/images/umz1vAsNQy3hz5TGm8mgalWPqq4.jpg?scale-down-to=4096&amp;width=5066&amp;height=3377 4096w,https://framerusercontent.com/images/umz1vAsNQy3hz5TGm8mgalWPqq4.jpg?width=5066&amp;height=3377 5066w"
                        src="https://framerusercontent.com/images/umz1vAsNQy3hz5TGm8mgalWPqq4.jpg?width=5066&amp;height=3377"
                        alt="Business Growth"
                        style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", objectPosition: "center center", objectFit: "cover" }}
                      />
                    </div>
                    <div className="framer-ml5vlj" data-framer-name="Key Numbers">
                      {/* Key Number 1 */}
                      <div className="framer-w7dei3" data-framer-name="Key Number" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                        <div className="framer-awftzj" data-framer-name="Container">
                          {/* Beautiful direct SVG for Growth tracked (TrendingUp line style) */}
                          <svg className="framer-DkID7 framer-z6a1ku" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" role="presentation">
                            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                            <polyline points="16 7 22 7 22 13" />
                          </svg>
                          <div className="framer-wivgfu" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                            <h2 className="framer-text framer-styles-preset-1xoaeqf" data-styles-preset="DBPG3DvKk" style={{ ["--framer-text-alignment" as any]: "center", ["--framer-text-color" as any]: "var(--token-5c281861-81a3-4ea6-82fc-deee27493003, rgb(255, 255, 255))" }}>30%</h2>
                          </div>
                          <div className="framer-neus7f" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                            <h5 className="framer-text framer-styles-preset-1fyxkgk" data-styles-preset="EmHUdfVub" style={{ ["--framer-text-alignment" as any]: "center", ["--framer-text-color" as any]: "var(--token-5c281861-81a3-4ea6-82fc-deee27493003, rgb(255, 255, 255))" }}>Growth measured</h5>
                          </div>
                        </div>
                        <div className="framer-1cp01cy" data-framer-name="Spacer"></div>
                      </div>

                      {/* Key Number 2 */}
                      <div className="framer-ei9x6d" data-framer-name="Key Number" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                        <div className="framer-1sxszss" data-framer-name="Container">
                          {/* Beautiful direct SVG for Savings (Banknote/Coins outline style) */}
                          <svg className="framer-49K88 framer-u7px29" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" role="presentation">
                            <rect x="2" y="6" width="20" height="12" rx="2" />
                            <circle cx="12" cy="12" r="2" />
                            <path d="M6 12h.01M18 12h.01" />
                          </svg>
                          <div className="framer-1h659tz" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                            <h2 className="framer-text framer-styles-preset-1xoaeqf" data-styles-preset="DBPG3DvKk" style={{ ["--framer-text-alignment" as any]: "center" }}>25%</h2>
                          </div>
                          <div className="framer-131putu" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                            <h5 className="framer-text framer-styles-preset-1fyxkgk" data-styles-preset="EmHUdfVub" style={{ ["--framer-text-alignment" as any]: "center" }}>Cost savings</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="framer-omejwg" data-framer-name="Texts">
                    <div className="framer-ui9mcm" data-framer-name="Subtitle" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                      <div className="framer-ac06le" data-framer-name="Line"></div>
                      <div className="framer-190i79a" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                        <h4 className="framer-text framer-styles-preset-qdgb2x" data-styles-preset="T5uFrRyX_">Our Team &amp; Commitment</h4>
                      </div>
                    </div>
                    <div className="framer-17fb7ja" data-framer-component-type="RichTextContainer" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                      <h2 className="framer-text framer-styles-preset-1xoaeqf" data-styles-preset="DBPG3DvKk">We build solutions to drive results</h2>
                    </div>
                    <div className="framer-vymhsl" data-framer-component-type="RichTextContainer" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                      <p className="framer-text framer-styles-preset-r7ux1z" data-styles-preset="bqTo1VedN">With our proven track record, collaborative approach, and commitment to excellence, we are uniquely positioned to help you overcome challenges, seize opportunities.</p>
                    </div>
                    <div className="framer-5d0f9o" data-framer-name="Spacer"></div>
                    <div className="framer-1vc0udm-container" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                      <a className="framer-kOj5H framer-Oq4xm framer-xmql7m framer-v-xmql7m framer-16o0nld" data-highlight="true" href="#contact" tabIndex={0} style={{ borderRadius: "50px", opacity: 1, willChange: "transform" }} data-framer-name="Accent">
                        <div className="framer-19tgvc" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ transform: "none", opacity: 1 }}>
                          <p className="framer-text framer-styles-preset-1ktalxb" data-styles-preset="uhMJpD0s4" dir="auto">Request an audit</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* University Destinations Slider Section */}
            <section id="destinations" className="bg-slate-50 py-16 border-t border-b border-gray-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100/80 mb-4 animate-pulse">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                  <span className="text-[10px] uppercase tracking-widest font-black text-blue-600">Ivy Admissions Tracking</span>
                </div>
                <h2 className="text-3xl font-black text-gray-950 uppercase tracking-tight mb-3">Global Scholastic Destinations</h2>
                <p className="text-slate-500 text-sm max-w-2xl mx-auto mb-8">
                  Empowering candidates to secure placements at some of the world's most elite universities and institutions.
                </p>
              </div>
              <UniversityTrack />
            </section>

            {/* SECTION: Testimonials */}
            <section className="framer-qk3ax4" data-framer-name="Testimonials">
              <div className="framer-knrnfd" data-framer-name="Container">
                <div className="framer-az6rtb" data-framer-name="Texts">
                  <div className="framer-a4n3fy" data-framer-name="Title">
                    <div className="framer-x6c37x" data-framer-name="Subtitle" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                      <div className="framer-1fejb82" data-framer-name="Line"></div>
                      <div className="framer-1x9auvm" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                        <h4 className="framer-text framer-styles-preset-qdgb2x" data-styles-preset="T5uFrRyX_">Testimonials</h4>
                      </div>
                    </div>
                    <div className="framer-oa6ngs" data-framer-component-type="RichTextContainer" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                      <h2 className="framer-text framer-styles-preset-1xoaeqf" data-styles-preset="DBPG3DvKk">Trusted by 10k+ customers</h2>
                    </div>
                  </div>
                  <div className="framer-1bteghn" data-framer-name="Description">
                    <div className="framer-1ho918m" data-framer-component-type="RichTextContainer" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                      <p className="framer-text framer-styles-preset-r7ux1z" data-styles-preset="bqTo1VedN">Whether you're a small startup or a multinational corporation, let us be your trusted advisor on the path to success.</p>
                    </div>
                  </div>
                </div>

                <div className="framer-9kfxy8-container" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                  <div className="framer-Lim1t framer-1imvimm framer-v-1imvimm" data-framer-name="Desktop" style={{ width: "100%", opacity: 1 }}>
                    <div className="framer-27wub8-container" style={{ opacity: 1 }}>
                      <section style={{ display: "flex", width: "100%", height: "100%", maxWidth: "100%", maxHeight: "100%", placeItems: "center", margin: "0px", padding: "10px", listStyleType: "none", opacity: 1, maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 5%, rgb(0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%)", WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 5%, rgb(0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%)", overflow: "hidden" }}>
                        <ul className="testimonials-slider-list" style={{ display: "flex", width: "max-content", height: "100%", maxWidth: "100%", maxHeight: "100%", placeItems: "center", margin: "0px", padding: "0px", listStyleType: "none", gap: "20px", position: "relative", flexDirection: "row", willChange: "transform", transform: "translateX(0px)" }}>
                          {[...TESTIMONIALS_DATA, ...TESTIMONIALS_DATA].map((item, index) => (
                            <li key={index} aria-hidden={index >= 4 ? "true" : "false"} style={{ width: "340px", height: "338px", flexShrink: 0 }}>
                              <div className="framer-p19nha-container" style={{ width: "340px", height: "338px", flexShrink: 0 }}>
                                <div className="framer-HkCxN framer-NMI6l framer-fz8q2 framer-GKT3o framer-1uaw9n1 framer-v-1uaw9n1" data-framer-name="Desktop" style={{ backgroundColor: "rgb(255, 255, 255)", width: "100%", borderRadius: "10px", opacity: 1 }}>
                                  <div className="framer-1f8yruh" data-framer-name="Stars" style={{ opacity: 1 }}>
                                    {[...Array(5)].map((_, starIndex) => (
                                      <svg
                                        key={starIndex}
                                        data-framer-name={starIndex < item.rating ? "Star Full" : "Star Empty"}
                                        className="framer-YnhV6"
                                        role="presentation"
                                        viewBox="0 0 24 24"
                                        fill={starIndex < item.rating ? "currentColor" : "none"}
                                        stroke={starIndex < item.rating ? "none" : "currentColor"}
                                        strokeWidth={starIndex < item.rating ? "0" : "2"}
                                      >
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                      </svg>
                                    ))}
                                  </div>
                                  <div className="framer-1t2gmhe" data-framer-name="Text" data-framer-component-type="RichTextContainer" style={{ ["--framer-link-text-color" as any]: "rgb(0, 153, 255)", ["--framer-link-text-decoration" as any]: "underline", transform: "none", opacity: 1 }}>
                                    <p className="framer-text framer-styles-preset-74i79w" data-styles-preset="hUr3emsum">{item.text}</p>
                                  </div>
                                  <div className="framer-1s2tf9u" data-framer-name="Author" style={{ opacity: 1 }}>
                                    <div className="framer-1g46max" data-border="true" data-framer-name="Photo" style={{ ["--border-bottom-width" as any]: "2px", ["--border-color" as any]: "rgb(51, 153, 254)", ["--border-left-width" as any]: "2px", ["--border-right-width" as any]: "2px", ["--border-style" as any]: "solid", ["--border-top-width" as any]: "2px", borderRadius: "40px", opacity: 1 }}>
                                      <div data-framer-background-image-wrapper="true" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" }}>
                                        <img decoding="auto" width="4000" height="4000" sizes="50px" src={item.image} alt={item.name} style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", objectPosition: "center center", objectFit: "cover" }} />
                                      </div>
                                    </div>
                                    <div className="framer-1jnyl3k" data-framer-name="Name + Role" style={{ opacity: 1 }}>
                                      <div className="framer-1ptm6oc" data-framer-name="Name" data-framer-component-type="RichTextContainer" style={{ ["--framer-link-text-color" as any]: "rgb(0, 153, 255)", ["--framer-link-text-decoration" as any]: "underline", transform: "none", opacity: 1 }}>
                                        <h6 className="framer-text framer-styles-preset-14ctmsb" data-styles-preset="hGRU_uuKd">{item.name}</h6>
                                      </div>
                                      <div className="framer-ayli8i" data-framer-name="Role" data-framer-component-type="RichTextContainer" style={{ ["--framer-link-text-color" as any]: "rgb(0, 153, 255)", ["--framer-link-text-decoration" as any]: "underline", transform: "none", opacity: 1 }}>
                                        <p className="framer-text framer-styles-preset-irva7x" data-styles-preset="bUWy30sNE">{item.role}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* SECTION: Blog Posts */}
            <section id="blog" className="framer-p70asi" data-framer-name="Blog Posts">
              <div className="framer-u9etr6" data-framer-name="Container">
                
                {/* Carousel Header with Side arrow keys */}
                <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 mb-2">
                  <div className="max-w-2xl text-left">
                    <div className="framer-137miv9 mb-3" data-framer-name="Subtitle" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                      <div className="framer-1lf59dr" data-framer-name="Line"></div>
                      <div className="framer-b0tm8w" data-framer-component-type="RichTextContainer" style={{ transform: "none" }}>
                        <h4 className="framer-text framer-styles-preset-qdgb2x" data-styles-preset="T5uFrRyX_">Our blog</h4>
                      </div>
                    </div>
                    <div className="framer-og3qmj" data-framer-component-type="RichTextContainer" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                      <h2 className="framer-text framer-styles-preset-1xoaeqf" data-styles-preset="DBPG3DvKk" style={{ ["--framer-text-alignment" as any]: "left" }}>Explore insights and stay ahead</h2>
                    </div>
                    <div className="framer-p7695a mt-2" data-framer-component-type="RichTextContainer" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
                      <p className="framer-text framer-styles-preset-r7ux1z" data-styles-preset="bqTo1VedN" style={{ ["--framer-text-alignment" as any]: "left" }}>Our blog features insights from our team of consultants, who share their best practices on a wide range of topics.</p>
                    </div>
                  </div>
                  
                  {/* Arrows */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={slidePrev}
                      disabled={safeBlogIndex === 0}
                      className="p-3.5 rounded-full border border-gray-200 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 disabled:opacity-30 disabled:hover:bg-white disabled:hover:border-gray-200 disabled:cursor-not-allowed cursor-pointer shadow-sm flex items-center justify-center h-12 w-12"
                      title="Previous"
                    >
                      <ChevronLeft size={20} />
                    </button>
                    <button
                      onClick={slideNext}
                      disabled={safeBlogIndex >= maxIndex}
                      className="p-3.5 rounded-full border border-gray-200 bg-white text-slate-800 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 disabled:opacity-30 disabled:hover:bg-white disabled:hover:border-gray-200 disabled:cursor-not-allowed cursor-pointer shadow-sm flex items-center justify-center h-12 w-12"
                      title="Next"
                    >
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>

                {/* Sliding Viewport */}
                <div className="w-full overflow-hidden relative">
                  <div
                    className="flex transition-transform duration-500 ease-out py-3"
                    style={{
                      transform: `translateX(-${safeBlogIndex * (100 / visibleCards)}%)`,
                    }}
                  >
                    {BLOG_POSTS_DATA.map((post, idx) => (
                      <div
                        key={idx}
                        className="flex-shrink-0 px-3 transition-opacity duration-300"
                        style={{
                          width: `${100 / visibleCards}%`,
                        }}
                      >
                        <div className="framer-yeomw5-container" style={{ width: "100%" }}>
                          <div className="framer-hzyeh framer-GKT3o framer-lj7Zk framer-HlaNo framer-16va1zy framer-v-16va1zy" data-framer-name="Desktop" style={{ width: "100%", borderRadius: "10px", opacity: 1 }}>
                            <div data-framer-background-image-wrapper="true" style={{ position: "absolute", borderRadius: "inherit", inset: "0px" }}>
                              <img
                                decoding="auto"
                                loading="lazy"
                                srcSet={post.imageSrcSet}
                                src={post.image}
                                alt={post.title}
                                style={{ display: "block", width: "100%", height: "100%", borderRadius: "inherit", objectPosition: "center center", objectFit: "cover" }}
                              />
                            </div>
                            <a className="framer-1vecvbm framer-1ed6xzu" data-framer-name="Image Overlay" href={post.href} style={{ background: "linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)", opacity: 1 }}></a>
                            <a className="framer-xiczbp framer-1ed6xzu" data-framer-name="Texts" href={post.href} style={{ opacity: 1 }}>
                              <div className="framer-qu3hly" data-framer-name="Date + Arrow" style={{ opacity: 1 }}>
                                <div className="framer-uuhz2y" data-framer-name="Date" style={{ backgroundColor: "var(--token-f1050b5f-b583-444f-a4f0-e8d92d58dd18, rgb(51, 153, 254))", borderRadius: "5px", opacity: 1 }}>
                                  <div className="framer-1jixg2z" data-framer-name="Date" data-framer-component-type="RichTextContainer" style={{ ["--extracted-r6o4lv" as any]: "var(--token-5c281861-81a3-4ea6-82fc-deee27493003, rgb(255, 255, 255))", ["--framer-link-text-color" as any]: "rgb(0, 153, 255)", ["--framer-link-text-decoration" as any]: "underline", transform: "none", opacity: 1 }}>
                                    <p className="framer-text framer-styles-preset-irva7x" style={{ ["--framer-text-color" as any]: "var(--token-5c281861-81a3-4ea6-82fc-deee27493003)" }}>
                                      <time dateTime={post.dateTime}>{post.date}</time>
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div className="framer-30vev0" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ ["--extracted-a0htzi" as any]: "var(--token-5c281861-81a3-4ea6-82fc-deee27493003, rgb(255, 255, 255))", ["--framer-link-text-color" as any]: "rgb(0, 153, 255)", ["--framer-link-text-decoration" as any]: "underline", transform: "none", opacity: 1 }}>
                                <h3 className="framer-text framer-styles-preset-6dxd2n" style={{ ["--framer-text-color" as any]: "var(--token-5c281861-81a3-4ea6-82fc-deee27493003)" }}>
                                  {post.title}
                                </h3>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Indicators / Dot controls */}
                <div className="flex justify-center items-center gap-2 mt-4">
                  {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setBlogIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                        safeBlogIndex === idx
                          ? "bg-[#136bc2] w-6"
                          : "bg-gray-200 hover:bg-gray-300"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

              </div>
            </section>
          </div>
        ) : currentTab === "about" ? (
          /* ABOUT US FULL PAGE SHOWCASE */
          <div className="pt-0 animate-in fade-in duration-300">
            <AboutUsPage 
              onBackToHome={() => handleTabChange("home")} 
              onNavigateToChat={() => handleTabChange("chat")} 
              onNavigateToApply={() => handleTabChange("assess")}
            />
          </div>
        ) : currentTab === "services" ? (
          /* SERVICES FULL PAGE SHOWCASE */
          <div className="pt-0 animate-in fade-in duration-300">
            <ServicesPage 
              onBackToHome={() => handleTabChange("home")} 
              onNavigateToChat={() => handleTabChange("chat")} 
              onNavigateToApply={() => handleTabChange("assess")}
            />
          </div>
        ) : currentTab === "courses" ? (
          /* DYNAMIC COURSES COMPONENT LISTING */
          <div className="pt-0 animate-in fade-in duration-300">
            <CoursesPage 
              onBackToHome={() => handleTabChange("home")} 
              onNavigateToChat={() => handleTabChange("chat")} 
            />
          </div>
        ) : currentTab === "blog" ? (
          /* BLOG FULL PAGE SHOWCASE */
          <div className="pt-0 animate-in fade-in duration-300">
            <BlogsPage 
              onBackToHome={() => handleTabChange("home")} 
              onNavigateToChat={() => handleTabChange("chat")} 
              onNavigateToApply={() => handleTabChange("assess")}
            />
          </div>
        ) : currentTab === "assess" ? (
          /* DYNAMIC ASSESSMENT WIZARD MODULE */
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-8">
            <button
              onClick={() => setCurrentTab("home")}
              className="mb-8 text-xs font-bold text-gray-500 hover:text-gray-950 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4 rotate-180" /> Return to Discovery Portal
            </button>
            <AssessmentWizard />
          </div>
        ) : currentTab === "essay" ? (
          /* DYNAMIC ESSAY EVALUATION MODULE */
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-8">
            <button
              onClick={() => setCurrentTab("home")}
              className="mb-8 text-xs font-bold text-gray-500 hover:text-gray-950 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4 rotate-180" /> Return to Discovery Portal
            </button>
            <EssayCritic />
          </div>
        ) : (
          /* DIRECT CONVERSATIONAL MESSAGING BOARD */
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 mt-8 animate-in fade-in duration-300">
            <button
              onClick={() => setCurrentTab("home")}
              className="mb-8 text-xs font-bold text-gray-500 hover:text-gray-950 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowRight className="w-4 h-4 rotate-180" /> Return to Discovery Portal
            </button>
            <p className="text-xs text-gray-400 font-mono mb-2 uppercase tracking-wide">Workspace counselor communications</p>
            <AdvisorChat />
          </div>
        )}
      </main>

      {/* Elegant New Interactive Framer Footer */}
      <footer className="framer-VsTPf framer-MjHs5 framer-NMI6l framer-HlaNo framer-2AEF2 framer-1ekv13a framer-v-1ekv13a" data-framer-name="Desktop" style={{ backgroundColor: "var(--token-f1050b5f-b583-444f-a4f0-e8d92d58dd18, rgb(51, 153, 254))", width: "100%", opacity: 1 }}>
        <div className="framer-wclump" data-framer-name="Container" style={{ opacity: 1 }}>
          <div className="framer-1dy6arj" data-framer-name="Call to Action" style={{ opacity: 1 }}>
            <div className="framer-4ska7u" data-framer-component-type="RichTextContainer" style={{ "--extracted-1of0zx5": "var(--token-5c281861-81a3-4ea6-82fc-deee27493003, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", willChange: "transform", opacity: 1, transform: "perspective(1200px)" } as React.CSSProperties}>
              <h2 className="framer-text framer-styles-preset-1xoaeqf" data-styles-preset="DBPG3DvKk" dir="auto" style={{ "--framer-text-color": "var(--extracted-1of0zx5, var(--token-5c281861-81a3-4ea6-82fc-deee27493003, rgb(255, 255, 255)))" } as React.CSSProperties}>Ready to transform your business?</h2>
            </div>
            <div className="framer-kjf31c-container" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
              <button
                onClick={() => handleTabChange("assess")}
                className="framer-kOj5H framer-Oq4xm framer-xmql7m framer-v-16o6312 framer-16o0nld border border-[#ffffff80] bg-transparent text-[#ffffff] font-semibold text-xs py-3.5 px-7 rounded-[50px] transition duration-300 hover:bg-white/10"
                style={{ borderRadius: "50px", opacity: 1 }}
                data-framer-name="Transparent"
              >
                <div className="framer-19tgvc" data-framer-name="Title" data-framer-component-type="RichTextContainer" style={{ "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none", opacity: 1 } as React.CSSProperties}>
                  <p className="framer-text framer-styles-preset-1ktalxb" data-styles-preset="uhMJpD0s4" dir="auto">Get started</p>
                </div>
              </button>
            </div>
          </div>
          
          <div className="framer-so0tn0" data-framer-name="Border" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", opacity: 1 }}></div>
          
          <div className="framer-1to3fyw" data-framer-name="Footer Info" style={{ willChange: "transform", opacity: 1, transform: "perspective(1200px)" }}>
            <div className="framer-zyymvv" data-framer-name="Texts" style={{ opacity: 1 }}>
              <div
                onClick={() => { handleTabChange("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                className="flex items-center gap-2.5 cursor-pointer group select-none text-left"
              >
                <div className="p-1.5 bg-white text-blue-600 rounded-full shadow-sm group-hover:scale-105 transition-transform flex items-center justify-center">
                  <GraduationCap className="w-4.5 h-4.5" />
                </div>
                <div className="text-left">
                  <span className="text-base md:text-lg font-black text-white tracking-tight block leading-none">
                    EDIFY <span className="text-blue-200">ELITE</span>
                  </span>
                  <span className="text-[7px] block text-blue-100 font-extrabold tracking-wider mt-0.5 uppercase leading-none">
                    A PROJECT OF EDIFY GROUP
                  </span>
                </div>
              </div>
              <div className="framer-10so0sg" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-75c5131e-b69d-4841-833d-6f8ee988ed08, rgb(214, 214, 214))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none", opacity: 1 } as React.CSSProperties}>
                <p className="framer-text framer-styles-preset-74i79w" data-styles-preset="hUr3emsum" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-75c5131e-b69d-4841-833d-6f8ee988ed08, rgb(214, 214, 214)))" } as React.CSSProperties}>Industry-leading consulting firm with innovative solutions</p>
              </div>
              <div className="framer-18bfett" data-framer-name="Social Links" style={{ opacity: 1 }}>
                <a className="framer-7350v8 framer-12ugsl" data-framer-name="Facebook" href="https://www.facebook.com/" target="_blank" rel="noopener" style={{ opacity: 1 }}>
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a className="framer-1d64puu framer-12ugsl" data-framer-name="Twitter" href="https://twitter.com" target="_blank" rel="noopener" style={{ opacity: 1 }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                  </svg>
                </a>
                <a className="framer-ebr7qz framer-12ugsl" data-framer-name="Instagram" href="https://www.instagram.com" target="_blank" rel="noopener" style={{ opacity: 1 }}>
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a className="framer-ybgkxv framer-12ugsl" data-framer-name="YouTube" href="https://www.youtube.com" target="_blank" rel="noopener" style={{ opacity: 1 }}>
                  <Youtube className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
            
            <div className="framer-pcld38" data-framer-name="Menu" style={{ opacity: 1 }}>
              <div className="framer-pxvw68" data-framer-component-type="RichTextContainer" style={{ "--extracted-1eung3n": "var(--token-5c281861-81a3-4ea6-82fc-deee27493003, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none", opacity: 1 } as React.CSSProperties}>
                <h4 className="framer-text framer-styles-preset-1maq1s8" style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-5c281861-81a3-4ea6-82fc-deee27493003, rgb(255, 255, 255)))" } as React.CSSProperties}>Company</h4>
              </div>
              <div className="framer-8tzfg" data-framer-name="Links" style={{ opacity: 1 }}>
                <div className="framer-dntnc0" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-75c5131e-b69d-4841-833d-6f8ee988ed08, rgb(214, 214, 214))", transform: "none", opacity: 1 } as React.CSSProperties}>
                  <p className="framer-text framer-styles-preset-74i79w" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-75c5131e-b69d-4841-833d-6f8ee988ed08, rgb(214, 214, 214)))" } as React.CSSProperties}>
                    <button onClick={() => { handleTabChange("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="framer-text framer-styles-preset-1ed6o9s bg-transparent border-0 p-0 text-left font-normal cursor-pointer text-slate-300 hover:text-white">Home</button>
                  </p>
                </div>
                <div className="framer-hnrclb" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-75c5131e-b69d-4841-833d-6f8ee988ed08, rgb(214, 214, 214))", transform: "none", opacity: 1 } as React.CSSProperties}>
                  <p className="framer-text framer-styles-preset-74i79w" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-75c5131e-b69d-4841-833d-6f8ee988ed08, rgb(214, 214, 214)))" } as React.CSSProperties}>
                    <button onClick={() => { handleTabChange("about"); }} className="framer-text framer-styles-preset-1ed6o9s bg-transparent border-0 p-0 text-left font-normal cursor-pointer text-slate-300 hover:text-white">About Us</button>
                  </p>
                </div>
                <div className="framer-1d34uoh" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-75c5131e-b69d-4841-833d-6f8ee988ed08, rgb(214, 214, 214))", transform: "none", opacity: 1 } as React.CSSProperties}>
                  <p className="framer-text framer-styles-preset-74i79w" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-75c5131e-b69d-4841-833d-6f8ee988ed08, rgb(214, 214, 214)))" } as React.CSSProperties}>
                    <button onClick={() => { handleTabChange("services"); }} className="framer-text framer-styles-preset-1ed6o9s bg-transparent border-0 p-0 text-left font-normal cursor-pointer text-slate-300 hover:text-white">Services</button>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="framer-19gtfv8" data-framer-name="Menu" style={{ opacity: 1 }}>
              <div className="framer-10w8ndh" data-framer-component-type="RichTextContainer" style={{ "--extracted-1eung3n": "var(--token-5c281861-81a3-4ea6-82fc-deee27493003, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none", opacity: 1 } as React.CSSProperties}>
                <h4 className="framer-text framer-styles-preset-1maq1s8" style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-5c281861-81a3-4ea6-82fc-deee27493003, rgb(255, 255, 255)))" } as React.CSSProperties}>Pages</h4>
              </div>
              <div className="framer-1g8a6px" data-framer-name="Links" style={{ opacity: 1 }}>
                <div className="framer-1n6kxe6" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-75c5131e-b69d-4841-833d-6f8ee988ed08, rgb(214, 214, 214))", transform: "none", opacity: 1 } as React.CSSProperties}>
                  <p className="framer-text framer-styles-preset-74i79w" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-75c5131e-b69d-4841-833d-6f8ee988ed08, rgb(214, 214, 214)))" } as React.CSSProperties}>
                    <button onClick={() => { handleTabChange("blog"); }} className="framer-text framer-styles-preset-1ed6o9s bg-transparent border-0 p-0 text-left font-normal cursor-pointer text-slate-300 hover:text-white">Blog</button>
                  </p>
                </div>
                <div className="framer-nhspqv" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-75c5131e-b69d-4841-833d-6f8ee988ed08, rgb(214, 214, 214))", transform: "none", opacity: 1 } as React.CSSProperties}>
                  <p className="framer-text framer-styles-preset-74i79w" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-75c5131e-b69d-4841-833d-6f8ee988ed08, rgb(214, 214, 214)))" } as React.CSSProperties}>
                    <button onClick={() => { handleTabChange("chat"); }} className="framer-text framer-styles-preset-1ed6o9s bg-transparent border-0 p-0 text-left font-normal cursor-pointer text-slate-300 hover:text-white">Contact</button>
                  </p>
                </div>
                <div className="framer-iwr32d" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-75c5131e-b69d-4841-833d-6f8ee988ed08, rgb(214, 214, 214))", transform: "none", opacity: 1 } as React.CSSProperties}>
                  <p className="framer-text framer-styles-preset-74i79w" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-75c5131e-b69d-4841-833d-6f8ee988ed08, rgb(214, 214, 214)))" } as React.CSSProperties}>
                    <button onClick={() => { handleTabChange("assess"); }} className="framer-text framer-styles-preset-1ed6o9s bg-transparent border-0 p-0 text-left font-normal cursor-pointer text-slate-300 hover:text-white">Apply Online</button>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="framer-fk740z" data-framer-name="Menu" style={{ opacity: 1 }}>
              <div className="framer-17u51kw" data-framer-component-type="RichTextContainer" style={{ "--extracted-1eung3n": "var(--token-5c281861-81a3-4ea6-82fc-deee27493003, rgb(255, 255, 255))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", transform: "none", opacity: 1 } as React.CSSProperties}>
                <h4 className="framer-text framer-styles-preset-1maq1s8" style={{ "--framer-text-color": "var(--extracted-1eung3n, var(--token-5c281861-81a3-4ea6-82fc-deee27493003, rgb(255, 255, 255)))" } as React.CSSProperties}>Services</h4>
              </div>
              <div className="framer-12avu3q" data-framer-name="Links" style={{ opacity: 1 }}>
                <div className="framer-1py73rm" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-75c5131e-b69d-4841-833d-6f8ee988ed08, rgb(214, 214, 214))", transform: "none", opacity: 1 } as React.CSSProperties}>
                  <p className="framer-text framer-styles-preset-74i79w" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-75c5131e-b69d-4841-833d-6f8ee988ed08, rgb(214, 214, 214)))" } as React.CSSProperties}>
                    <button onClick={() => { handleTabChange("home"); setTimeout(() => setSelectedService(servicesList[0]), 150); }} className="framer-text framer-styles-preset-1ed6o9s bg-transparent border-0 p-0 text-left font-normal cursor-pointer text-slate-300 hover:text-white">Profile Building</button>
                  </p>
                </div>
                <div className="framer-wgvtw5" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-75c5131e-b69d-4841-833d-6f8ee988ed08, rgb(214, 214, 214))", transform: "none", opacity: 1 } as React.CSSProperties}>
                  <p className="framer-text framer-styles-preset-74i79w" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-75c5131e-b69d-4841-833d-6f8ee988ed08, rgb(214, 214, 214)))" } as React.CSSProperties}>
                    <button onClick={() => { handleTabChange("home"); setTimeout(() => setSelectedService(servicesList[1]), 150); }} className="framer-text framer-styles-preset-1ed6o9s bg-transparent border-0 p-0 text-left font-normal cursor-pointer text-slate-300 hover:text-white">Common App</button>
                  </p>
                </div>
                <div className="framer-1pvzjl5" data-framer-component-type="RichTextContainer" style={{ "--extracted-r6o4lv": "var(--token-75c5131e-b69d-4841-833d-6f8ee988ed08, rgb(214, 214, 214))", transform: "none", opacity: 1 } as React.CSSProperties}>
                  <p className="framer-text framer-styles-preset-74i79w" style={{ "--framer-text-color": "var(--extracted-r6o4lv, var(--token-75c5131e-b69d-4841-833d-6f8ee988ed08, rgb(214, 214, 214)))" } as React.CSSProperties}>
                    <button onClick={() => { handleTabChange("home"); setTimeout(() => setSelectedService(servicesList[2]), 150); }} className="framer-text framer-styles-preset-1ed6o9s bg-transparent border-0 p-0 text-left font-normal cursor-pointer text-slate-300 hover:text-white">IVY Universities</button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>



      {/* Services Detail Modal Popup Window */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl border border-gray-100 animate-in fade-in zoom-in-95 duration-200">
            <div className="relative p-6 bg-gradient-to-r from-blue-700 to-blue-600 text-white flex items-center gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="p-3 bg-white/10 rounded-xl">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="text-[10px] font-bold tracking-wider uppercase bg-white/15 px-2.5 py-0.5 rounded-full">Explore Service</span>
                <h3 className="text-lg font-black tracking-tight mt-0.5">{selectedService.title}</h3>
              </div>
            </div>

            <div className="p-6 space-y-5 text-left text-xs text-gray-600">
              <p className="leading-relaxed text-gray-700 font-normal">
                {selectedService.details}
              </p>

              <div>
                <h4 className="font-bold text-gray-950 uppercase tracking-widest text-[11px] mb-2 flex items-center gap-1.5">
                  <CheckCircle className="w-4 h-4 text-emerald-500" /> Deliverables Covered:
                </h4>
                <ul className="space-y-1.5 grid sm:grid-cols-1">
                  {selectedService.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="bg-gray-50 p-2 border border-gray-150 rounded flex items-start gap-2 text-[11px] text-gray-700 font-medium">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
              <button
                onClick={() => setSelectedService(null)}
                className="px-4 py-2 text-xs font-semibold text-gray-750 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedService(null);
                  handleTabChange("assess");
                }}
                className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition-colors cursor-pointer flex items-center gap-1"
              >
                Launch Counselor Assessment <ArrowRight className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Sticky Chat Bot Button Widget */}
      {currentTab !== "chat" && (
        <button
          onClick={() => handleTabChange("chat")}
          className="fixed bottom-6 right-6 p-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-xl hover:scale-110 active:scale-95 transition-all z-40 flex items-center justify-center cursor-pointer border border-blue-400/30 group"
          title="Consult AI Admissions Counselor"
        >
          <MessageSquare className="w-6 h-6 group-hover:rotate-12 transition-transform" />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 text-xs font-bold whitespace-nowrap pl-0 group-hover:pl-2">
            Advisor Chat
          </span>
        </button>
      )}

      {/* Up Arrow scroll back to top button */}
      {isScrolled && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 p-3 rounded-full bg-slate-900 border border-white/10 text-white shadow-xl hover:scale-110 active:scale-95 transition-all z-40 flex items-center justify-center cursor-pointer"
          title="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
