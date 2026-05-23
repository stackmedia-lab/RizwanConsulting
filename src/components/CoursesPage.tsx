import React, { useState } from "react";
import { Star, ArrowLeft, ArrowRight, Check, Sparkles, GraduationCap } from "lucide-react";

interface Course {
  id: string;
  title: string;
  category: string;
  rating: number;
  image: string;
  description: string;
  slug: string;
  details: {
    duration: string;
    weeks: number;
    hoursPerWeek: string;
    level: string;
  };
}

const COURSES_DATA: Course[] = [
  {
    id: "ielts-acad",
    title: "IELTS Academic Course",
    category: "English Proficiency",
    rating: 5,
    image: "https://edify.pk/_next/image?url=https%3A%2F%2Fadmin.edify.pk%2Fuploads%2Fjdwp1emi8hhfilmltclr_36163eefdf.webp&w=640&q=75",
    description: "Prepare for university studies with our comprehensive IELTS Academic Course. Learn essential English skills for reading, writing, listening, and speaking. Achieve your desired IELTS score and unlock international opportunities.",
    slug: "ielts-academic-course",
    details: {
      duration: "8 Weeks",
      weeks: 8,
      hoursPerWeek: "8 hours",
      level: "Intermediate to Advanced"
    }
  },
  {
    id: "pte-acad",
    title: "PTE Academic",
    category: "English Proficiency",
    rating: 5,
    image: "https://edify.pk/_next/image?url=https%3A%2F%2Fadmin.edify.pk%2Fuploads%2Ftoytsfj47uoc9vupgv3z_0a2261aced.webp&w=640&q=75",
    description: "Excel in PTE Academic with comprehensive training. Enhance language skills, ace exams, and achieve your academic goals. Enroll now!",
    slug: "pte-academic",
    details: {
      duration: "6 Weeks",
      weeks: 6,
      hoursPerWeek: "10 hours",
      level: "All Levels"
    }
  },
  {
    id: "ielts-life",
    title: "IELTS Life Skills (A1/B1)",
    category: "English Proficiency",
    rating: 5,
    image: "https://edify.pk/_next/image?url=https%3A%2F%2Fadmin.edify.pk%2Fuploads%2Fjvug4umssqgc1shco4fz_2206548737.webp&w=640&q=75",
    description: "Attain practical language competence with IELTS Life Skills A1/B1. Develop essential skills for communication in daily life. Enroll for success today!",
    slug: "ielts-life-skills-a1-b1",
    details: {
      duration: "4 Weeks",
      weeks: 4,
      hoursPerWeek: "6 hours",
      level: "Beginner to Intermediate"
    }
  },
  {
    id: "ielts-gt",
    title: "IELTS General Training (GT) Course",
    category: "English Proficiency",
    rating: 5,
    image: "https://edify.pk/_next/image?url=https%3A%2F%2Fadmin.edify.pk%2Fuploads%2Fssywvftugseioydkc1wg_3dcebe5b2b.webp&w=640&q=75",
    description: "Prepare for IELTS General with expert guidance. Improve your English, excel in the exam to open doors for global opportunities. Enroll for success!",
    slug: "ielts-general-training-gt-course",
    details: {
      duration: "6 Weeks",
      weeks: 6,
      hoursPerWeek: "8 hours",
      level: "Intermediate"
    }
  },
  {
    id: "lang-cert",
    title: "LanguageCert International ESOL",
    category: "English Proficiency",
    rating: 5,
    image: "https://edify.pk/_next/image?url=https%3A%2F%2Fadmin.edify.pk%2Fuploads%2Fcxetve9fx2xsr9q2nxxk_57ee4da1bf.webp&w=640&q=75",
    description: "Enhance your speaking skills with LangCert Speaking Course. Master fluency, communication, and boost your confidence.",
    slug: "languagecert-international-esol-speaking-course",
    details: {
      duration: "5 Weeks",
      weeks: 5,
      hoursPerWeek: "6 hours",
      level: "All Levels"
    }
  },
  {
    id: "oxford-ellt",
    title: "Oxford ELLT - Speaking Course",
    category: "English Proficiency",
    rating: 5,
    image: "https://edify.pk/_next/image?url=https%3A%2F%2Fadmin.edify.pk%2Fuploads%2Fub1jd7fot3xb8mcwqryn_1abfe39f32.webp&w=640&q=75",
    description: "Secure good bands in ESS Oxford Speaking Test with this Course. Enhance communication skills and fluency. Enroll for effective language learning!",
    slug: "oxford-ell-t-speaking-course",
    details: {
      duration: "4 Weeks",
      weeks: 4,
      hoursPerWeek: "8 hours",
      level: "All Levels"
    }
  }
];

interface CoursesPageProps {
  onBackToHome: () => void;
  onNavigateToChat: () => void;
}

export default function CoursesPage({ onBackToHome, onNavigateToChat }: CoursesPageProps) {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [enrollForm, setEnrollForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    sessionPreference: "Morning Weekend",
    academicGoal: "",
  });
  const [enrollSuccess, setEnrollSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEnrollClick = (course: Course) => {
    setSelectedCourse(course);
    setEnrollSuccess(false);
    setEnrollForm({
      fullName: "",
      email: "",
      phone: "",
      sessionPreference: "Morning Weekend",
      academicGoal: "",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEnrollForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!enrollForm.fullName || !enrollForm.email || !enrollForm.phone) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API registration call
    setTimeout(() => {
      setIsSubmitting(false);
      setEnrollSuccess(true);
    }, 1200);
  };

  return (
    <div 
      className="relative min-h-screen pb-24 text-slate-800 bg-cover bg-center bg-no-repeat bg-fixed"
      style={{ 
        backgroundImage: `url('https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1920')` 
      }}
    >
      {/* Soft translucent off-white glass overlay to preserve outstanding contrast and aesthetic appeal */}
      <div className="absolute inset-0 bg-slate-50/94 backdrop-blur-[2px] pointer-events-none" />
      
      <div className="relative z-10 w-full">
        {/* Dynamic Hero Banner matching User requirements with responsive fallback and elegant overlay layout */}
        <div className="relative mb-10 w-full overflow-hidden select-none bg-slate-950 pt-16 sm:pt-20">
          
          {/* Desktop Banner Image Mockup - UK Universities aesthetic fallback since local path next.js folders do not exist */}
          <img
            alt="United Kingdom universities global admissions campaign"
            loading="lazy"
            width="1000"
            height="500"
            decoding="async"
            className="w-full h-[280px] sm:h-[340px] md:h-[400px] object-cover hidden md:block opacity-65 scale-105 filter brightness-95"
            src="https://images.unsplash.com/photo-1513635269975-59663e0ca1ad?q=80&w=1500" 
            style={{ objectPosition: "center 32%" }}
          />
          
          {/* Mobile Banner Image Mockup */}
          <img
            alt="Study Abroad counseling mobile banner"
            loading="lazy"
            width="600"
            height="600"
            decoding="async"
            className="w-full h-[240px] object-cover md:hidden opacity-60 filter brightness-90"
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600"
          />

          {/* Floating gradient content with accurate absolute placement as structured in framer next payload */}
          <div className="absolute inset-0 px-4 flex items-center pt-24 md:pt-28 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent">
            <div className="max-w-7xl mx-auto w-full text-center">
              
              {/* Elegant tiny floating indicator badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-600/30 border border-blue-400/20 mb-4 animate-fade-in">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[10px] sm:text-xs font-bold text-blue-300 uppercase tracking-widest">Rizwan Elite Academics</span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-black text-white uppercase tracking-tight mb-2">
                Our Prep Courses
              </h1>

              {/* Breadcrumb row */}
              <div className="text-white/80 flex gap-2 font-semibold text-xs sm:text-sm items-center justify-center">
                <div>
                  <button 
                    onClick={onBackToHome} 
                    className="drop-shadow-[0_.5px_.5px_rgba(0,0,0,1)] hover:text-blue-400 transition-colors pointer-events-auto cursor-pointer"
                  >
                    Home
                  </button>
                </div>
                <div>
                  <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                </div>
                <div className="drop-shadow-[0_.5px_.5px_rgba(0,0,0,1)] text-blue-300">
                  Our Courses
                </div>
              </div>

            </div>
          </div>
        </div>

      {/* Courses Main Showcase Area */}
      <div className="px-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
              Test Prep & English Proficiency Training
            </h2>
            <p className="text-slate-500 text-sm max-w-2xl mx-auto mt-2.5">
              Achieve elite score profiles matching admission requirements of the world's most prestigious collegiate institutions with certified mentors.
            </p>
          </div>

          {/* Grid Layout conforming to User specifications */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {COURSES_DATA.map((course) => (
              <div 
                key={course.id} 
                className="bg-white p-5 rounded-3xl border border-slate-100/90 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo area */}
                  <div className="mb-4 overflow-hidden rounded-2xl bg-slate-50 relative aspect-[3/1.9] w-full">
                    <img
                      alt={course.title}
                      loading="lazy"
                      width="350"
                      height="200"
                      decoding="async"
                      className="rounded-2xl w-full h-full object-cover group-hover:scale-105 transition-transform duration-550"
                      src={course.image}
                      onError={(e) => {
                        // Fallback in case of corporate firewall issues or image source failure
                        (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=640";
                      }}
                    />
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider">
                      {course.details.duration}
                    </div>
                  </div>

                  {/* Taxonomy categorizer and Rating stars */}
                  <div className="flex justify-between items-center mb-2.5">
                    <span className="block text-blue-600 font-bold uppercase tracking-wider text-[11px]">
                      {course.category}
                    </span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: course.rating }).map((_, i) => (
                        <Star 
                          key={i} 
                          className="w-3.5 h-3.5 text-amber-400 fill-amber-400" 
                        />
                      ))}
                    </div>
                  </div>

                  {/* Title & info description */}
                  <h3 className="text-lg font-black text-slate-900 leading-snug hover:text-blue-600 transition-colors cursor-pointer mb-2">
                    {course.title}
                  </h3>
                  
                  <p className="text-slate-500 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-6">
                    {course.description}
                  </p>
                </div>

                {/* Footer action */}
                <div className="border-t border-slate-100 pt-4 flex items-center justify-between">
                  <span className="text-slate-400 text-[11px] font-semibold uppercase font-mono">
                    Level: {course.details.level}
                  </span>
                  <button
                    onClick={() => handleEnrollClick(course)}
                    className="inline-block px-5 py-2 text-xs font-extrabold border transition-all duration-300 border-blue-200 rounded-full bg-blue-50/50 hover:bg-blue-600 text-blue-600 hover:text-white cursor-pointer select-none active:scale-95"
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Quick FAQ summary strip helping users conversion */}
          <div className="mt-16 p-8 bg-blue-950 text-white rounded-3xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="absolute -right-10 -bottom-10 opacity-10 text-white pointer-events-none">
              <GraduationCap className="w-56 h-56" />
            </div>
            <div className="relative z-10 text-center md:text-left">
              <h3 className="text-lg sm:text-xl font-bold mb-1">Unsure which preparation course fits your visa/academic tier?</h3>
              <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                Get a customized SAT/IELTS profile analysis inside our automated system, or start a live briefing with our Ivy council experts.
              </p>
            </div>
            <div className="flex gap-3 relative z-10">
              <button 
                onClick={onNavigateToChat}
                className="px-6 py-2.5 text-xs font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-full transition-all cursor-pointer whitespace-nowrap active:scale-95"
              >
                Brief Advisor Live
              </button>
            </div>
          </div>
          
        </div>
      </div>

      {/* MODAL WINDOW FOR ENROLLMENT - FULLY FUNCTIONAL CUSTOM COMPONENT TO CAPTURE STUDENT INFO */}
      {selectedCourse && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl border border-slate-100 overflow-hidden text-left relative my-auto animate-in zoom-in-95 duration-200">
            
            {/* Header image banner block of modal */}
            <div className="bg-blue-600 px-6 py-8 text-white relative">
              <button 
                onClick={() => setSelectedCourse(null)}
                className="absolute top-4 right-4 p-1.5 bg-blue-700/50 hover:bg-blue-700 hover:text-white rounded-full transition-colors cursor-pointer text-blue-100"
              >
                &times;
              </button>
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-200 bg-blue-700/50 px-2.5 py-1 rounded-full inline-block mb-2">
                Course Registration Portal
              </span>
              <h3 className="text-xl sm:text-2xl font-black mt-1 leading-tight">
                {selectedCourse.title}
              </h3>
              <p className="text-xs text-blue-100 mt-1">
                Conducted by Rizwan Consulting Academic Faculty
              </p>
            </div>

            {/* Inner Content Section */}
            <div className="p-6">
              {enrollSuccess ? (
                <div className="py-8 text-center flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 shadow-sm animate-bounce">
                    <Check className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-black text-slate-900 mb-1">Enrollment Successful!</h4>
                  <p className="text-slate-500 text-xs sm:text-sm max-w-sm mb-6 leading-relaxed">
                    Thank you, <span className="font-bold text-slate-800">{enrollForm.fullName}</span>! Our admissions coordinator will contact you shortly at <span className="font-semibold">{enrollForm.email}</span> with course schedules, fee details and batch timelines.
                  </p>
                  <button
                    onClick={() => setSelectedCourse(null)}
                    className="w-full py-2.5 bg-slate-900 text-white rounded-full text-xs font-bold hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Close Portal
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5" htmlFor="fullName">
                      Student Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      placeholder="e.g. Rizwan Ahmed"
                      value={enrollForm.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5" htmlFor="email">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        value={enrollForm.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5" htmlFor="phone">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="+92 300 1234567"
                        value={enrollForm.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5" htmlFor="sessionPreference">
                      Preferred Batch Schedule
                    </label>
                    <select
                      id="sessionPreference"
                      name="sessionPreference"
                      value={enrollForm.sessionPreference}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 border border-slate-200 bg-white rounded-xl text-xs focus:outline-none focus:border-blue-500 transition-colors"
                    >
                      <option value="Morning Weekend">Morning Weekend Batch (10:00 AM - 12:00 PM)</option>
                      <option value="Evening Weekdays">Evening Weekdays Batch (06:00 PM - 08:00 PM)</option>
                      <option value="In-person Standard">In-person Intensive Academy Batch</option>
                      <option value="Flexible Online Only">Self-paced Online Learning Package</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-500 mb-1.5" htmlFor="academicGoal">
                      Target Score or Special Requirements (Optional)
                    </label>
                    <textarea
                      id="academicGoal"
                      name="academicGoal"
                      rows={2}
                      placeholder="e.g. Targeting IELTS 7.5 bands minimum for UK student visa applications..."
                      value={enrollForm.academicGoal}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedCourse(null)}
                      className="w-1/3 py-2.5 border border-slate-200 text-slate-500 rounded-full text-xs font-bold hover:bg-slate-50 transition-colors text-center cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-2/3 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold shadow-md transition-all active:scale-95 text-center flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Processing..." : "Confirm Enrollment"}
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

      </div>
    </div>
  );
}
