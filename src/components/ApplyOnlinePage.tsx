import React, { useState } from "react";
import { CheckCircle2, AlertTriangle, ArrowLeft, Mail, Phone, MapPin, Building, Globe, GraduationCap, Clock, HelpCircle } from "lucide-react";

interface ApplyOnlinePageProps {
  onBackToHome: () => void;
  onNavigateToChat?: () => void;
}

interface FormState {
  firstName: string;
  lastName: string;
  gender: string;
  dob: string;
  email: string;
  mobile: string;
  city: string;
  country: string;
  address: string;
  lastQualification: string;
  fieldOfStudy: string;
  preferredCountries: string[];
  otherQuery: string;
  serviceDesired: string;
  refSource: string;
}

export default function ApplyOnlinePage({ onBackToHome, onNavigateToChat }: ApplyOnlinePageProps) {
  const [form, setForm] = useState<FormState>({
    firstName: "",
    lastName: "",
    gender: "",
    dob: "",
    email: "",
    mobile: "",
    city: "",
    country: "",
    address: "",
    lastQualification: "",
    fieldOfStudy: "",
    preferredCountries: [],
    otherQuery: "",
    serviceDesired: "",
    refSource: ""
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);

  const countriesList = [
    "Pakistan", "United Kingdom", "United States", "Australia", 
    "Canada", "Germany", "United Arab Emirates", "Malaysia", 
    "Saudi Arabia", "Turkey", "Qatar", "Other"
  ];

  const preferredCountriesOptions = [
    "UK", "USA", "Australia", "Europe", "Dubai", "Canada", "Malaysia", "Germany", "Other"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (validationError) setValidationError(null);
  };

  const handleCheckboxChange = (option: string) => {
    setForm(prev => {
      const alreadySelected = prev.preferredCountries.includes(option);
      const updated = alreadySelected
        ? prev.preferredCountries.filter(item => item !== option)
        : [...prev.preferredCountries, option];
      return { ...prev, preferredCountries: updated };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Quick core validations matching high professional client standards
    if (!form.firstName.trim() || !form.lastName.trim()) {
      setValidationError("First Name and Last Name are required.");
      scrollToError();
      return;
    }
    if (!form.email.trim() || !form.email.includes("@")) {
      setValidationError("Please enter a valid Email Address.");
      scrollToError();
      return;
    }
    if (!form.mobile.trim()) {
      setValidationError("Please enter a valid Mobile Number.");
      scrollToError();
      return;
    }

    setIsSubmitted(true);
    setValidationError(null);
  };

  const scrollToError = () => {
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  return (
    <div className="bg-[#f9fbfd] min-h-screen text-slate-800 pb-24 font-sans antialiased">
      
      {/* SECTION 1: ELEGANT HERO PANEL WITH RED-HEADED STUDENT & LANDMARK BACKGROUND */}
      <div className="relative bg-[#f1f6fb] min-h-[340px] w-full overflow-hidden flex items-center border-b border-blue-100/30">
        
        {/* Subtle decorative landmark sketch lines layout overlaying in background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none select-none">
          <svg className="w-full h-full text-blue-600" viewBox="0 0 1000 400" fill="none" stroke="currentColor" strokeWidth="1" xmlns="http://www.w3.org/2000/svg">
            {/* Pyramid / Louvre landmark */}
            <path d="M50 350 L150 200 L250 350 Z" />
            <path d="M150 200 L150 350" />
            
            {/* Sydney Opera House-like sails */}
            <path d="M300 350 Q325 250 350 350" />
            <path d="M330 350 Q365 200 400 350" />
            <path d="M370 350 Q410 180 450 350" />
            
            {/* Liberty torch or tower outline */}
            <path d="M550 350 L550 220 L570 200 L590 220 L590 350" strokeWidth="2" />
            <circle cx="570" cy="180" r="12" />
            <line x1="570" y1="180" x2="570" y2="160" />
            
            {/* Big Ben / London clocktower style */}
            <rect x="680" y="120" width="35" height="230" />
            <polygon points="680,120 715,120 697,70" />
            <circle cx="697" cy="140" r="7" />
            
            {/* Eiffel Tower or spire base lines */}
            <path d="M800 350 L835 150 L860 350" strokeWidth="1.5" />
            <path d="M815 250 L848 250" />
            <path d="M825 200 L842 200" />
            <ellipse cx="835" cy="130" rx="3" ry="10" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col md:flex-row items-center justify-between gap-8 py-12 relative z-10 pt-24 sm:pt-28">
          
          {/* Left Hero Texts */}
          <div className="text-left md:w-3/5 space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none uppercase">
                Apply Now
              </h1>
              {/* Short Blue Underline Style Accent matching image */}
              <div className="h-[4px] w-16 bg-blue-600 rounded-full" />
            </div>
            
            <p className="text-slate-600 text-sm sm:text-base font-semibold max-w-lg leading-relaxed">
              Ready to achieve your college dreams? Apply now and start your journey to success.
            </p>
            
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 hover:bg-blue-50 border border-blue-150 rounded-full text-xs font-bold transition-all shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" /> Go Back
            </button>
          </div>

          {/* Right Hero Red-headed Student Image with border cutout (Exactly matching student image style) */}
          <div className="md:w-2/5 flex justify-center md:justify-end relative h-[220px] md:h-[260px] w-full">
            <div className="relative w-[220px] md:w-[260px] h-full overflow-hidden rounded-[2rem] border-4 border-white shadow-xl bg-slate-100 bg-cover bg-center">
              <img 
                src="https://images.unsplash.com/photo-1525921429624-479b6c294522?auto=format&fit=crop&q=80&w=800" 
                alt="Smiling student with backpack holding books" 
                className="w-full h-full object-cover scale-102"
              />
            </div>
          </div>

        </div>
      </div>

      {/* SECTION 2: THE FOUR DETAILED FORM SECTIONS */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {isSubmitted ? (
          /* THANK YOU SUCCESS STATE PANEL */
          <div className="bg-white rounded-[2rem] border border-blue-100 shadow-xl p-8 sm:p-12 text-center space-y-6 animate-in zoom-in-95 duration-300">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-50 text-green-500 rounded-full mb-2">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
                Application Submitted!
              </h2>
              <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
                Thank you, <span className="font-bold text-slate-800">{form.firstName} {form.lastName}</span>. Our senior international education advisor will review your profile and reach out within 24 hours.
              </p>
            </div>

            {/* Quick structured summary block for client review */}
            <div className="bg-slate-50 rounded-2xl p-6 text-left border border-slate-100 max-w-xl mx-auto space-y-3 font-medium text-xs sm:text-sm text-slate-600">
              <div className="border-b border-dashed border-slate-200 pb-2 mb-2">
                <span className="text-xs uppercase font-extrabold text-blue-600 font-mono tracking-wider">Submitted Credentials</span>
              </div>
              <div className="grid grid-cols-2 gap-y-2">
                <div><span className="text-slate-400 font-semibold">Email:</span> <span className="text-slate-800">{form.email}</span></div>
                <div><span className="text-slate-400 font-semibold">Mobile:</span> <span className="text-slate-800">{form.mobile}</span></div>
                <div><span className="text-slate-400 font-semibold">Country:</span> <span className="text-slate-800">{form.country || "Not specified"}</span></div>
                <div><span className="text-slate-400 font-semibold">Education:</span> <span className="text-slate-800">{form.lastQualification || "Not specified"}</span></div>
                <div><span className="text-slate-400 font-semibold">Field of Study:</span> <span className="text-slate-800">{form.fieldOfStudy || "Not specified"}</span></div>
                <div><span className="text-slate-400 font-semibold">Desired Service:</span> <span className="text-slate-800">{form.serviceDesired || "General Assistance"}</span></div>
              </div>
              {form.preferredCountries.length > 0 && (
                <div className="pt-2 border-t border-slate-100">
                  <span className="text-slate-400 font-semibold">Target Countries:</span>{" "}
                  <span className="text-slate-800 font-bold">{form.preferredCountries.join(", ")}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pt-4">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setForm({
                    firstName: "",
                    lastName: "",
                    gender: "",
                    dob: "",
                    email: "",
                    mobile: "",
                    city: "",
                    country: "",
                    address: "",
                    lastQualification: "",
                    fieldOfStudy: "",
                    preferredCountries: [],
                    otherQuery: "",
                    serviceDesired: "",
                    refSource: ""
                  });
                }}
                className="px-6 py-3 w-full sm:w-auto bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
              >
                Submit New Query
              </button>
              
              <button
                onClick={onBackToHome}
                className="px-6 py-3 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white rounded-full text-xs font-bold uppercase tracking-wider shadow-md transition-colors cursor-pointer"
              >
                Return To Home Page
              </button>
            </div>
          </div>
        ) : (
          /* FORM ENTRY PANEL */
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* General Validation Banner */}
            {validationError && (
              <div className="bg-rose-50 border border-rose-100 text-rose-700 text-xs sm:text-sm p-4 rounded-2xl flex items-start gap-3 animate-pulse">
                <AlertTriangle className="w-5 h-5 flex-shrink-0 text-rose-500 mt-0.5" />
                <div>
                  <p className="font-bold uppercase tracking-wide">Validation Error</p>
                  <p className="text-xs text-rose-600 mt-0.5">{validationError}</p>
                </div>
              </div>
            )}

            {/* BLOCK 1: BASIC INFORMATION PANEL */}
            <div className="bg-white rounded-[2rem] border border-blue-500/30 hover:border-blue-500/50 p-6 sm:p-8 transition-colors shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight uppercase">
                  Basic Information
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* First Name */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-bold text-slate-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={form.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white text-xs sm:text-sm font-medium placeholder-slate-400"
                  />
                </div>

                {/* Last Name */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-bold text-slate-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={form.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white text-xs sm:text-sm font-medium placeholder-slate-400"
                  />
                </div>

                {/* Gender */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-bold text-slate-700">Gender</label>
                  <select
                    name="gender"
                    value={form.gender}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white text-xs sm:text-sm font-medium text-slate-700"
                  >
                    <option value="">Select your Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>

                {/* Date of Birth */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-bold text-slate-700">Date of birth</label>
                  <div className="relative">
                    <input
                      type="date"
                      name="dob"
                      value={form.dob}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white text-xs sm:text-sm font-medium text-slate-700"
                    />
                  </div>
                </div>

              </div>
            </div>

            {/* BLOCK 2: CONTACT INFORMATION PANEL */}
            <div className="bg-white rounded-[2rem] border border-blue-500/30 hover:border-blue-500/50 p-6 sm:p-8 transition-colors shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight uppercase">
                  Contact Information
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Email Address */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-bold text-slate-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white text-xs sm:text-sm font-medium placeholder-slate-400"
                  />
                </div>

                {/* Mobile Number */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-bold text-slate-700">Mobile Number</label>
                  <input
                    type="text"
                    name="mobile"
                    value={form.mobile}
                    onChange={handleInputChange}
                    placeholder="Mobile Number"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white text-xs sm:text-sm font-medium placeholder-slate-400"
                  />
                </div>

                {/* City */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-bold text-slate-700">City</label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleInputChange}
                    placeholder="City"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white text-xs sm:text-sm font-medium placeholder-slate-400"
                  />
                </div>

                {/* Country Selection */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-bold text-slate-700">Country</label>
                  <select
                    name="country"
                    value={form.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white text-xs sm:text-sm font-medium text-slate-700"
                  >
                    <option value="">Select your Country</option>
                    {countriesList.map((country, idx) => (
                      <option key={idx} value={country}>{country}</option>
                    ))}
                  </select>
                </div>

                {/* Full Address */}
                <div className="space-y-1.5 text-left md:col-span-2">
                  <label className="block text-xs font-bold text-slate-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={form.address}
                    onChange={handleInputChange}
                    placeholder="Home Address"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white text-xs sm:text-sm font-medium placeholder-slate-400"
                  />
                </div>

              </div>
            </div>

            {/* BLOCK 3: EDUCATIONAL */}
            <div className="bg-white rounded-[2rem] border border-blue-500/30 hover:border-blue-500/50 p-6 sm:p-8 transition-colors shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight uppercase">
                  Educational
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Last Qualification */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-bold text-slate-700">Last Qualification</label>
                  <select
                    name="lastQualification"
                    value={form.lastQualification}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white text-xs sm:text-sm font-medium text-slate-700"
                  >
                    <option value="">Select your Last Qualification</option>
                    <option value="Matriculation / O Levels">Matriculation / O Levels</option>
                    <option value="Intermediate / A Levels">Intermediate / A Levels</option>
                    <option value="Associate Degree / Diploma">Associate Degree / Diploma</option>
                    <option value="Bachelors (4-Year Graduate)">Bachelors (4-Year Graduate)</option>
                    <option value="Masters / Postgraduate">Masters / Postgraduate</option>
                    <option value="Other Certification">Other Certification</option>
                  </select>
                </div>

                {/* Field of Study */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-bold text-slate-700">Field of Study</label>
                  <input
                    type="text"
                    name="fieldOfStudy"
                    value={form.fieldOfStudy}
                    onChange={handleInputChange}
                    placeholder="Field of Study"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white text-xs sm:text-sm font-medium placeholder-slate-400"
                  />
                </div>

              </div>
            </div>

            {/* BLOCK 4: MORE INFORMATION PANEL */}
            <div className="bg-white rounded-[2rem] border border-blue-500/30 hover:border-blue-500/50 p-6 sm:p-8 transition-colors shadow-sm space-y-6">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 tracking-tight uppercase">
                  More Information
                </h3>
              </div>

              {/* Checkboxes Area with visual styled checklist box exactly matching image grid */}
              <div className="space-y-3 text-left">
                <span className="block text-xs font-bold text-slate-800">
                  Preferred Countries
                </span>
                <span className="block text-[10.5px] font-semibold text-slate-400">
                  Select the countries where you want to study abroad.
                </span>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 pt-2">
                  {preferredCountriesOptions.map((countryCode) => {
                    const isChecked = form.preferredCountries.includes(countryCode);
                    return (
                      <label 
                        key={countryCode} 
                        className="flex items-center gap-2.5 cursor-pointer select-none py-1 group"
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleCheckboxChange(countryCode)}
                          className="w-4.5 h-4.5 rounded text-blue-600 border-slate-300 focus:ring-blue-500/20 transition cursor-pointer"
                        />
                        <span className={`text-xs font-bold transition-colors ${isChecked ? 'text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}>
                          {countryCode}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Any Other Query Textarea */}
              <div className="space-y-1.5 text-left pt-2">
                <label className="block text-xs font-bold text-slate-700">Any Other Query</label>
                <textarea
                  name="otherQuery"
                  value={form.otherQuery}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Any Other Query You would like discuss"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white text-xs sm:text-sm font-medium placeholder-slate-400 resize-y"
                />
              </div>

              {/* Dropdowns */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                
                {/* Which service you want to avail */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-bold text-slate-700">Which service you want to avail?</label>
                  <select
                    name="serviceDesired"
                    value={form.serviceDesired}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white text-xs sm:text-sm font-medium text-slate-700"
                  >
                    <option value="">Select</option>
                    <option value="Admission Counseling & Profile Spike">Admission Counseling & Profile Spike</option>
                    <option value="University Selection & Shortlist">University Selection & Shortlist</option>
                    <option value="Common App / Essay Review">Common App / Essay Review</option>
                    <option value="SAT Prep Services">SAT Prep Services</option>
                    <option value="Visa advisory">Visa advisory & Financials</option>
                    <option value="All of the above integrated">All of the above (Comprehensive package)</option>
                  </select>
                </div>

                {/* How did you hear about us */}
                <div className="space-y-1.5 text-left">
                  <label className="block text-xs font-bold text-slate-700">How did you hear about us?</label>
                  <select
                    name="refSource"
                    value={form.refSource}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 bg-white text-xs sm:text-sm font-medium text-slate-700"
                  >
                    <option value="">Select</option>
                    <option value="Social Media (Facebook / Instagram)">Social Media</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Word of Mouth / Alumni Friend">Friend / Family referral</option>
                    <option value="University Seminar / Fair">University Seminar or Flyer</option>
                    <option value="Newspaper / Outdoor billboard">Newspaper / Outdoors</option>
                    <option value="Other Source">Other</option>
                  </select>
                </div>

              </div>

            </div>

            {/* Left aligned styled Royal blue Solid Submit Button */}
            <div className="text-left pt-2">
              <button
                type="submit"
                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-md hover:shadow-lg transition-all active:scale-97 cursor-pointer"
              >
                Submit
              </button>
            </div>

          </form>
        )}

      </div>

    </div>
  );
}
