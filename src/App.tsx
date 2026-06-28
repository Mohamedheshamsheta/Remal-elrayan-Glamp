import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Compass, Sparkles, MapPin, Phone, Mail, Instagram, ArrowDown, ChevronRight, Wind, Star, Linkedin, ChevronDown, Globe } from "lucide-react";
import { BookingDetails } from "./types";
import { useLanguage, Language } from "./LanguageContext";

// Import custom components
import Preloader from "./components/Preloader";
import BookingWidget from "./components/BookingWidget";
import Accommodations from "./components/Accommodations";
import DesertExperiences from "./components/DesertExperiences";
import LummayyaMenu from "./components/LummayyaMenu";
import LummayyaBooking from "./components/LummayyaBooking";
import PolicyPage from "./components/PolicyPage";
import ExperienceHub from "./components/ExperienceHub";

export default function App() {
  const { t, language, setLanguage } = useLanguage();
  const [showPreloader, setShowPreloader] = useState(true);
  const [userHasVisited, setUserHasVisited] = useState(false);
  const [activeTab, setActiveTab] = useState<"home" | "accommodations" | "restaurant" | "experiences" | "policies">("home");
  const [nationality, setNationality] = useState<"egyptian" | "non-egyptian">("egyptian");
  const [currency, setCurrency] = useState<"EGP" | "USD">("EGP");
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);

  // Close dropdown on click outside
  useEffect(() => {
    if (!isLangDropdownOpen) return;
    const handleOutsideClick = () => {
      setIsLangDropdownOpen(false);
    };
    window.addEventListener("click", handleOutsideClick);
    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isLangDropdownOpen]);

  // Synchronize currency with nationality toggler
  useEffect(() => {
    if (nationality === "egyptian") {
      setCurrency("EGP");
    } else {
      setCurrency("USD");
    }
  }, [nationality]);

  const handlePreloaderComplete = () => {
    setShowPreloader(false);
    setUserHasVisited(true);
  };

  const handleReplayPreloader = () => {
    setShowPreloader(true);
  };

  const handleBookingSearch = (details: BookingDetails) => {
    setActiveTab("accommodations");
  };

  return (
    <div className="min-h-screen bg-desert-offwhite text-desert-dark relative antialiased selection:bg-desert-blue selection:text-desert-dark md:border-[12px] border-black">
      {/* Dynamic Vertical Side Tag Label representing Nature Protectorate Egypt from the spec */}
      <div className="hidden xl:flex fixed bottom-32 left-0 -rotate-90 origin-bottom-left items-center gap-4 z-30 pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.5em] text-black/35 font-bold ml-12">Nature Protectorate Egypt</span>
        <div className="w-24 h-px bg-black/15"></div>
      </div>

      {/* 1. Global Preloader Controller */}
      <AnimatePresence>
        {showPreloader && (
          <Preloader onComplete={handlePreloaderComplete} forceShow={showPreloader} />
        )}
      </AnimatePresence>

      {/* 2. Sleek Editorial Navigation Bar Header */}
      <header className="sticky top-0 z-40 bg-[#F4EFE3]/95 backdrop-blur-md border-b-2 border-black py-5 px-6 md:px-12 flex flex-col xl:flex-row justify-between items-center gap-6 transition-all duration-300">
        <div className="flex justify-between items-center w-full xl:w-auto">
          <div className="flex flex-col">
            <button 
              type="button"
              onClick={() => setActiveTab("home")}
              className="text-left font-serif text-xl tracking-wider uppercase font-extrabold text-desert-dark hover:text-desert-blue transition-colors cursor-pointer"
            >
              REMAL EL RAYAN
            </button>
            <span className="font-mono text-[9px] tracking-[0.25em] text-[#777] uppercase mt-0.5">
              Wadi El Rayan • Egypt
            </span>
          </div>

          {/* Integrated Selector Panel: Nationality & 6 Languages */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Nationality Toggle */}
            <div className="flex items-center bg-[#F4EFE3] border border-black p-0.5 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] text-[8px] sm:text-[9px]">
              <button
                type="button"
                onClick={() => setNationality("egyptian")}
                className={`px-2 py-0.5 font-mono uppercase tracking-wider cursor-pointer font-bold transition-all ${
                  nationality === "egyptian" ? "bg-black text-white" : "text-black hover:bg-neutral-200"
                }`}
              >
                🇪🇬 {language === "ar" ? "مصرى" : "EGY"}
              </button>
              <button
                type="button"
                onClick={() => setNationality("non-egyptian")}
                className={`px-2 py-0.5 font-mono uppercase tracking-wider cursor-pointer font-bold transition-all ${
                  nationality === "non-egyptian" ? "bg-black text-white" : "text-black hover:bg-neutral-200"
                }`}
              >
                🌐 {language === "ar" ? "أجنبى" : "INT"}
              </button>
            </div>

            {/* Elegant Language Selector Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLangDropdownOpen((prev) => !prev);
                }}
                className="flex items-center gap-1.5 bg-[#F4EFE3] border border-black px-2 py-0.5 text-[8px] sm:text-[9px] font-mono font-bold uppercase tracking-wider cursor-pointer shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] hover:bg-neutral-200 transition-all select-none h-[22px] sm:h-[24px]"
                aria-haspopup="listbox"
                aria-expanded={isLangDropdownOpen}
              >
                {(() => {
                  const currentLang = [
                    { code: "en", label: "English", short: "EN", flag: "🇬🇧" },
                    { code: "ar", label: "العربية", short: "AR", flag: "🇪🇬" },
                    { code: "es", label: "Español", short: "ES", flag: "🇪🇸" },
                    { code: "fr", label: "Français", short: "FR", flag: "🇫🇷" },
                    { code: "de", label: "Deutsch", short: "DE", flag: "🇩🇪" },
                    { code: "ja", label: "日本語", short: "JA", flag: "🇯🇵" }
                  ].find((l) => l.code === language) || { code: "en", label: "English", short: "EN", flag: "🇬🇧" };
                  return (
                    <>
                      <span className="text-[10px] sm:text-[11px]">{currentLang.flag}</span>
                      <span>{currentLang.short}</span>
                    </>
                  );
                })()}
                <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isLangDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {isLangDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.1 }}
                    className="absolute right-0 mt-1.5 w-36 bg-[#F4EFE3] border border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-50 overflow-hidden divide-y divide-black/10"
                    role="listbox"
                  >
                    {[
                      { code: "en", label: "English", short: "EN", flag: "🇬🇧" },
                      { code: "ar", label: "العربية", short: "AR", flag: "🇪🇬" },
                      { code: "es", label: "Español", short: "ES", flag: "🇪🇸" },
                      { code: "fr", label: "Français", short: "FR", flag: "🇫🇷" },
                      { code: "de", label: "Deutsch", short: "DE", flag: "🇩🇪" },
                      { code: "ja", label: "日本語", short: "JA", flag: "🇯🇵" }
                    ].map((langObj) => {
                      const isSelected = language === langObj.code;
                      return (
                        <button
                          key={langObj.code}
                          type="button"
                          onClick={() => {
                            setLanguage(langObj.code as Language);
                            setIsLangDropdownOpen(false);
                          }}
                          className={`w-full flex items-center justify-between px-2.5 py-1.5 text-left font-mono text-[8px] sm:text-[9px] tracking-wider cursor-pointer font-bold transition-colors ${
                            isSelected 
                              ? "bg-black text-white" 
                              : "text-black hover:bg-neutral-200/60"
                          }`}
                          role="option"
                          aria-selected={isSelected}
                        >
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] sm:text-[11px]">{langObj.flag}</span>
                            <span>{langObj.label}</span>
                          </div>
                          {isSelected && (
                            <span className="w-1.5 h-1.5 bg-white rounded-full" />
                          )}
                        </button>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Enhanced Responsive Navigation Tabs */}
        <nav className="flex flex-wrap gap-2 justify-center items-center">
          {[
            { id: "home", label: t("home"), num: "01" },
            { id: "accommodations", label: t("accommodations"), num: "02" },
            { id: "restaurant", label: t("restaurant"), num: "03" },
            { id: "experiences", label: t("experiences"), num: "04" },
            { id: "policies", label: t("policies"), num: "05" }
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button 
                type="button"
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)} 
                className={`relative px-3.5 py-1.5 font-mono text-[9.5px] tracking-widest uppercase font-bold transition-all duration-200 cursor-pointer border-2 ${
                  isSelected 
                    ? "bg-black text-white border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] translate-x-[-1px] translate-y-[-1px]" 
                    : "bg-[#F4EFE3] text-[#333] border-black/10 hover:border-black hover:bg-white"
                }`}
              >
                <span className="text-[8.5px] text-desert-blue mr-1.5 font-bold">{tab.num}.</span>
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Replay preloader */}
        <div className="hidden sm:flex items-center">
          <button
            type="button"
            onClick={handleReplayPreloader}
            className="font-mono text-[9px] tracking-widest bg-black text-[#F4EFE3] hover:bg-[#c8b9a6] hover:text-black px-3 py-1.5 rounded-none uppercase border-2 border-black cursor-pointer shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all flex items-center space-x-1 font-bold"
          >
            <Sparkles className="w-3 h-3 text-[#c8b9a6]" />
            <span>{t("replay")}</span>
          </button>
        </div>
      </header>

      {activeTab === "home" && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 space-y-16">
          {/* 1. Cinematic Branded Header */}
          <div className="border-b-2 border-black pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="font-mono text-[10px] tracking-widest text-desert-blue uppercase block mb-1.5 font-bold">
                {t("established2021")}
              </span>
              <h1 className="font-serif text-4xl md:text-6xl uppercase tracking-tighter text-desert-dark">
                {language === "ar" ? "رمال الريان مخيم فاخر" : "REMAL EL RAYAN GLAMP"}
              </h1>
              <p className="font-sans text-xs text-desert-charcoal/70 max-w-2xl mt-3 leading-relaxed">
                {t("glampDescription")}
              </p>
            </div>
            
            <div className="border border-black p-4 bg-[#F4EFE3] font-mono text-[10px] flex flex-col space-y-1.5 max-w-xs shrink-0 shadow-brutalist">
              <div className="flex justify-between border-b border-black/5 pb-1">
                <span className="text-[#777]">{t("coordinates")}</span>
                <span className="font-semibold text-black">29.2818° N, 30.4344° E</span>
              </div>
              <div className="flex justify-between border-b border-black/5 pb-1">
                <span className="text-[#777]">{t("classification")}</span>
                <span className="font-semibold text-black">{t("classificationValue")}</span>
              </div>
              <div className="flex justify-between text-[9px] text-[#888] font-semibold">
                <span>{t("fayoumEgypt")}</span>
              </div>
            </div>
          </div>

          {/* 2. Brand Identity & Redefining Luxury Eco-Tourism */}
          <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <span className="font-mono text-[10px] tracking-widest text-[#777] uppercase block font-bold">
                {t("conceptPhilosophy")}
              </span>
              <h2 className="font-serif text-3xl uppercase tracking-tight text-desert-dark">
                Remal el Rayan: <br /><span className="text-desert-blue">{t("redefiningLuxuryTitle")}</span>
              </h2>
              <p className="font-sans text-xs text-desert-charcoal/95 leading-relaxed">
                {t("sandMeaning")}
              </p>
              <p className="font-sans text-xs text-desert-charcoal/80 leading-relaxed">
                {t("adventureComfort")}
              </p>
              
              <div className="border-l-2 border-desert-blue pl-4 py-1 italic font-serif text-sm text-neutral-700">
                {t("balanceQuote")}
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#F4EFE3] border-2 border-black p-6 md:p-8 shadow-brutalist space-y-8">
              <div className="border-b border-black/10 pb-4">
                <span className="font-mono text-[9px] tracking-widest text-desert-blue uppercase block font-bold mb-1">
                  {t("boardVision")}
                </span>
                <h3 className="font-serif text-xl font-bold uppercase text-black">{t("strategicRepositioning")}</h3>
                <p className="font-sans text-xs text-neutral-600 mt-2 leading-relaxed">
                  {t("strategicDesc")}
                </p>
              </div>

              <div>
                <span className="font-mono text-[9px] tracking-widest text-desert-blue uppercase block font-bold mb-1">
                  {t("heritageImpact")}
                </span>
                <h3 className="font-serif text-xl font-bold uppercase text-black">{t("sustainableHeritage")}</h3>
                <p className="font-sans text-xs text-neutral-600 mt-2 leading-relaxed">
                  {t("heritageDesc")}
                </p>
              </div>
            </div>
          </section>

          {/* 3. Location Description Section */}
          <section className="bg-[#F4EFE3] border-2 border-black p-6 md:p-8 shadow-brutalist grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-desert-blue" />
                <span className="font-mono text-[9px] tracking-widest text-[#777] uppercase font-bold">
                  {t("locationPortfolio")}
                </span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl uppercase tracking-tight text-desert-dark">
                {t("sacredOasisTitle")}
              </h3>
              <p className="font-sans text-xs text-neutral-600 leading-relaxed">
                {t("sacredOasisDesc1")}
              </p>
              <p className="font-sans text-xs text-neutral-600 leading-relaxed">
                {t("sacredOasisDesc2")}
              </p>
              
              <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
                <div className="border-l-2 border-desert-blue pl-3">
                  <span className="text-[#888] text-[9px] block uppercase">{t("distanceCairo")}</span>
                  <span className="font-bold text-black mt-0.5 block">{t("distanceCairoVal")}</span>
                </div>
                <div className="border-l-2 border-desert-blue pl-3">
                  <span className="text-[#888] text-[9px] block uppercase">{t("sandType")}</span>
                  <span className="font-bold text-black mt-0.5 block">{t("sandTypeVal")}</span>
                </div>
                <div className="border-l-2 border-desert-blue pl-3">
                  <span className="text-[#888] text-[9px] block uppercase">{t("nearestWaterbody")}</span>
                  <span className="font-bold text-black mt-0.5 block">{t("nearestWaterbodyVal")}</span>
                </div>
                <div className="border-l-2 border-desert-blue pl-3">
                  <span className="text-[#888] text-[9px] block uppercase">{t("placeHistory")}</span>
                  <span className="font-bold text-desert-blue mt-0.5 block">{t("placeHistoryVal")}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative border-2 border-black p-2 bg-[#F4EFE3] h-64 overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(#C8B9A6_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
              <div className="h-full flex flex-col justify-between p-6 relative z-10 font-mono">
                <div>
                  <span className="text-[9px] text-[#777] uppercase block tracking-wider">{t("geoGridMap")}</span>
                  <span className="text-sm font-serif font-bold text-black mt-2 block tracking-tight">WADI EL RAYAN PROTECTORATE</span>
                  <div className="w-12 h-0.5 bg-desert-blue mt-2" />
                </div>
                
                <div className="space-y-1.5 text-xs text-neutral-700 bg-white/85 border border-black/10 p-3.5 shadow-sm rounded-none">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-1.5 h-1.5 bg-[#c43232] rounded-full animate-ping" />
                    <span className="font-bold text-black">{t("campLocationMarker")}</span>
                  </div>
                  <p className="text-[10px] text-[#555] leading-relaxed">
                    {t("campMarkerDesc")}
                  </p>
                </div>
                
                <div className="text-[9px] text-right font-semibold text-[#888]">
                  MAP REF: EGY-FYM-RE03
                </div>
              </div>
            </div>
          </section>

          {/* 4. Organization Team Section */}
          <section className="space-y-8">
            <div className="text-center max-w-xl mx-auto">
              <span className="font-mono text-[9px] tracking-widest text-[#777] uppercase font-bold mb-2 block">
                {t("adminHospitality")}
              </span>
              <h2 className="font-serif text-3xl uppercase tracking-wider text-desert-dark">
                {t("orgTeamTitle")}
              </h2>
              <div className="w-16 h-[2px] bg-desert-blue mx-auto mt-3" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Chairman block */}
              <div className="bg-[#F4EFE3] border-2 border-black p-5 flex flex-col justify-between shadow-brutalist group hover:-translate-y-1 transition-transform">
                <div>
                  <div className="inline-block bg-desert-blue/15 text-black border border-desert-blue/30 px-2.5 py-0.5 font-mono text-[8px] tracking-widest uppercase font-bold mb-3 rounded-full">
                    {t("chairman")}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-black group-hover:text-desert-blue transition-colors">Mostafa Farouk</h4>
                  <span className="font-mono text-[9px] text-[#aaa] uppercase tracking-wider block mt-1">{t("chairman")}</span>
                  <p className="font-sans text-xs text-neutral-500 mt-3 leading-relaxed">
                    Directs absolute high-level corporate governance and coordinates Egypt expansion blueprints.
                  </p>
                </div>
                <div className="border-t border-black/5 pt-3 mt-5 flex justify-between items-center text-[9px] font-mono text-[#888]">
                  <span>REMAL GROUP</span>
                  <span>EST. 2021</span>
                </div>
              </div>

              {/* CEO block */}
              <div className="bg-[#F4EFE3] border-2 border-black p-5 flex flex-col justify-between shadow-brutalist group hover:-translate-y-1 transition-transform">
                <div>
                  <div className="inline-block bg-desert-blue/15 text-black border border-desert-blue/30 px-2.5 py-0.5 font-mono text-[8px] tracking-widest uppercase font-bold mb-3 rounded-full">
                    {t("ceo")}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-black group-hover:text-desert-blue transition-colors">Mohamed Farouk</h4>
                  <span className="font-mono text-[9px] text-[#aaa] uppercase tracking-wider block mt-1">{t("ceo")}</span>
                  <p className="font-sans text-xs text-neutral-500 mt-3 leading-relaxed">
                    Directs all operations, overall corporate hospitality strategy, and development of our oasis retreats.
                  </p>
                </div>
                <div className="border-t border-black/5 pt-3 mt-5 flex justify-between items-center text-[9px] font-mono text-[#888]">
                  <span>EXECUTIVE GROUP</span>
                  <span>OFFICE OF CEO</span>
                </div>
              </div>

              {/* GM block */}
              <div className="bg-[#F4EFE3] border-2 border-black p-5 flex flex-col justify-between shadow-brutalist group hover:-translate-y-1 transition-transform">
                <div>
                  <div className="inline-block bg-desert-blue/15 text-black border border-desert-blue/30 px-2.5 py-0.5 font-mono text-[8px] tracking-widest uppercase font-bold mb-3 rounded-full">
                    {t("generalManager")}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-black group-hover:text-desert-blue transition-colors">Mohamed Sheta</h4>
                  <span className="font-mono text-[9px] text-[#aaa] uppercase tracking-wider block mt-1">{t("generalManager")}</span>
                  <p className="font-sans text-xs text-neutral-500 mt-3 leading-relaxed">
                    Not only oversees operations, but designs customized management systems or architectures to lead this new eco-glamping concept in Egypt and direct business development.
                  </p>
                </div>
                <div className="border-t border-black/5 pt-3 mt-5 flex justify-between items-center text-[9px] font-mono text-[#888]">
                  <span>SYSTEMS & DEV</span>
                  <span>CAMP OPERATIONS</span>
                </div>
              </div>

              {/* Restaurant Manager block */}
              <div className="bg-[#F4EFE3] border-2 border-black p-5 flex flex-col justify-between shadow-brutalist group hover:-translate-y-1 transition-transform">
                <div>
                  <div className="inline-block bg-desert-blue/15 text-black border border-desert-blue/30 px-2.5 py-0.5 font-mono text-[8px] tracking-widest uppercase font-bold mb-3 rounded-full">
                    {t("restaurantManager")}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-black group-hover:text-desert-blue transition-colors">Yasser Outhman</h4>
                  <span className="font-mono text-[9px] text-[#aaa] uppercase tracking-wider block mt-1">{t("restaurantManager")}</span>
                  <p className="font-sans text-xs text-neutral-500 mt-3 leading-relaxed">
                    Manages Lummayya restaurant, client dining services, and special slow-fire Mandi dinner events.
                  </p>
                </div>
                <div className="border-t border-black/5 pt-3 mt-5 flex justify-between items-center text-[9px] font-mono text-[#888]">
                  <span>CULINARY TEAM</span>
                  <span>LUMMAYYA LEADER</span>
                </div>
              </div>

              {/* Executive Chef block */}
              <div className="bg-[#F4EFE3] border-2 border-black p-5 flex flex-col justify-between shadow-brutalist group hover:-translate-y-1 transition-transform">
                <div>
                  <div className="inline-block bg-desert-blue/15 text-black border border-desert-blue/30 px-2.5 py-0.5 font-mono text-[8px] tracking-widest uppercase font-bold mb-3 rounded-full">
                    {t("executiveChef")}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-black group-hover:text-desert-blue transition-colors">Chef Ahmed Farouk</h4>
                  <span className="font-mono text-[9px] text-[#aaa] uppercase tracking-wider block mt-1">{t("executiveChef")}</span>
                  <p className="font-sans text-xs text-neutral-500 mt-3 leading-relaxed">
                    Heads the kitchen at Lummayya, designing bedouin-style recipes and five-hour Mandi firewood dishes.
                  </p>
                </div>
                <div className="border-t border-black/5 pt-3 mt-5 flex justify-between items-center text-[9px] font-mono text-[#888]">
                  <span>KITCHEN DIVISION</span>
                  <span>CREATIVE CHEF</span>
                </div>
              </div>

              {/* Reservations Manager block */}
              <div className="bg-[#F4EFE3] border-2 border-black p-5 flex flex-col justify-between shadow-brutalist group hover:-translate-y-1 transition-transform">
                <div>
                  <div className="inline-block bg-desert-blue/15 text-black border border-desert-blue/30 px-2.5 py-0.5 font-mono text-[8px] tracking-widest uppercase font-bold mb-3 rounded-full">
                    {t("reservationsManager")}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-black group-hover:text-desert-blue transition-colors">Habiba Mehrez</h4>
                  <span className="font-mono text-[9px] text-[#aaa] uppercase tracking-wider block mt-1">{t("reservationsManager")}</span>
                  <p className="font-sans text-xs text-neutral-500 mt-3 leading-relaxed">
                    Directs all client reservations, starlit dome allocation schedules, premium room configurations, and elite guest pre-placements.
                  </p>
                </div>
                <div className="border-t border-black/5 pt-3 mt-5 flex justify-between items-center text-[9px] font-mono text-desert-blue font-bold">
                  <span>RESERVATIONS</span>
                  <span>ACTIVE BOOKINGS</span>
                </div>
              </div>

              {/* Reception Manager block */}
              <div className="bg-[#F4EFE3] border-2 border-black p-5 flex flex-col justify-between shadow-brutalist group hover:-translate-y-1 transition-transform">
                <div>
                  <div className="inline-block bg-[#F4EFE3] text-black border border-black/20 px-2.5 py-0.5 font-mono text-[8px] tracking-widest uppercase font-bold mb-3 rounded-full">
                    {t("receptionManager")}
                  </div>
                  <h4 className="font-serif text-lg font-bold text-black group-hover:text-desert-blue transition-colors">Mohamed Sobhi</h4>
                  <span className="font-mono text-[9px] text-[#aaa] uppercase tracking-wider block mt-1">{t("receptionManager")}</span>
                  <p className="font-sans text-xs text-neutral-500 mt-3 leading-relaxed">
                    Supervises front-of-house check-ins, guest relations coordinates, custom itineraries, and specialized client support directly 24/7.
                  </p>
                </div>
                <div className="border-t border-black/5 pt-3 mt-5 flex justify-between items-center text-[9px] font-mono text-desert-blue font-bold">
                  <span>RECEPTION DIRECT</span>
                  <span>ONLINE ACTIVE</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
      }

      {activeTab === "accommodations" && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <Accommodations 
            nationality={nationality}
            setNationality={setNationality}
            currency={currency}
            setCurrency={setCurrency}
            onRedirectToRestaurant={() => setActiveTab("restaurant")}
          />
        </div>
      )}

      {activeTab === "restaurant" && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 space-y-16">
          <LummayyaMenu nationality={nationality} currency={currency} />
          <LummayyaBooking 
            nationality={nationality}
            setNationality={setNationality}
            currency={currency}
            setCurrency={setCurrency}
          />
        </div>
      )}

      {activeTab === "experiences" && (
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
          <ExperienceHub />
        </div>
      )}

      {activeTab === "policies" && (
        <div>
          <PolicyPage />
        </div>
      )}

      {/* 9. Sleek Quiet-Luxury Footer */}
      <footer className="bg-desert-dark text-[#faf9f6] pt-20 pb-10 border-t border-white/5 relative z-10 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            
            {/* Fine Branding Column */}
            <div className="md:col-span-2 space-y-4">
              <h3 className="font-serif text-2xl uppercase tracking-widest text-white">REMAL EL RAYAN</h3>
              <p className="font-sans text-xs text-[#aaa] max-w-sm leading-relaxed">
                Egypt’s premier ultra-luxury wilderness dune glamp situated within the coordinates of the legendary Wadi El Rayan nature protectorate. Merging raw desert authenticity with silent boutique hospitality.
              </p>
              <div className="flex items-center space-x-1 font-mono text-[10px] text-[#888]">
                <MapPin className="w-3.5 h-3.5 text-desert-blue" />
                <span>Wadi El Rayan Nature Protectorate, Fayoum Oasis, Egypt</span>
              </div>
            </div>

            {/* Quick navigators Column */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs tracking-widest text-white uppercase font-bold">RESERVATIONS</h4>
              <ul className="space-y-2 text-xs font-mono text-[#aaa]">
                <li className="hover:text-white transition-colors"><a href="#stays">Geodesic Dome Stay</a></li>
                <li className="hover:text-white transition-colors"><a href="#stays">Safari Suite Tent Stay</a></li>
                <li className="hover:text-white transition-colors"><a href="#experiences">Lummayya Dining</a></li>
                <li className="hover:text-white transition-colors"><a href="#stays">Bespoke Inquiries</a></li>
              </ul>
            </div>

            {/* High-End Contacts of VIP concierge */}
            <div className="space-y-4">
              <h4 className="font-mono text-xs tracking-widest text-white uppercase font-bold">{t("vipHostingSatellite")}</h4>
              <div className="space-y-3 font-mono text-xs text-[#aaa]">
                <div className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-desert-blue" />
                  <a href="tel:+201070188857" className="hover:text-white transition-colors">+201070188857</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-desert-blue" />
                  <a href="mailto:msheta@remalelrayan.com" className="hover:text-white transition-colors">msheta@remalelrayan.com</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Instagram className="w-3.5 h-3.5 text-desert-blue" />
                  <a href="https://www.instagram.com/remalelrayan/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">@remalelrayan</a>
                </div>
                <div className="flex items-center space-x-2">
                  <Linkedin className="w-3.5 h-3.5 text-desert-blue" />
                  <a href="https://www.linkedin.com/company/remal-elrayan-glamp" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Remal Elrayan Glamp</a>
                </div>
              </div>
            </div>

          </div>

          {/* Subheader and credits */}
          <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
            <p className="font-mono text-[9px] tracking-widest text-[#555] uppercase">
              © 2026 REMAL EL RAYAN GLAMPING INC. ALL RIGHTS RESERVED. EGYPT STATE TOURISM PORTAL.
            </p>
            <p className="font-mono text-[9px] tracking-widest text-[#555] uppercase">
              DEVELOPED TO SPECIFICATION FOR GOOGLE AI STUDIO IN EGYPT.
            </p>
          </div>

        </div>
      </footer>
    </div>
  );
}
