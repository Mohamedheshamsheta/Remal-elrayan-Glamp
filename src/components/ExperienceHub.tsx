import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Compass, MapPin, Users, Heart, Phone, Sparkles, 
  Map, ShieldAlert, ArrowRight, Star
} from "lucide-react";

interface Activity {
  name: string;
  arabicName: string;
  price: string;
  duration: string;
  image: string;
  description: string;
}

export default function ExperienceHub() {
  const [activeCategory, setActiveCategory] = useState<"activities" | "transport" | "teambuilding" | "weddings">("activities");

  const whatsappNumber = "201070188857";
  const baseWhatsappUrl = "https://wa.me/201070188857";

  const getWhatsappLink = (serviceName: string) => {
    const text = encodeURIComponent(
      `Hello Remal El Rayan! 🌵✨ I'm interested in booking your luxury "${serviceName}" service via the Reception Concierge. Please provide availability and custom itinerary planning.`
    );
    return `${baseWhatsappUrl}?text=${text}`;
  };

  const activitiesList: Activity[] = [
    {
      name: "Jeep Safari (Short Route)",
      arabicName: "سفاري الجيب (رحلة قصيرة)",
      price: "3,000 EGP",
      duration: "1.5 - 2 Hours",
      image: "https://images.unsplash.com/photo-1547234935-80c7145ec969?auto=format&fit=crop&w=600&q=80",
      description: "Traverse high-voltage golden crest dunes and premium sand valleys around Wadi El Rayan's ancient landmarks."
    },
    {
      name: "Jeep Safari (Long Route)",
      arabicName: "سفاري الجيب (رحلة طويلة)",
      price: "3,500 EGP",
      duration: "3 - 4 Hours",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
      description: "Deep desert exploration traversing Magic Lake, fossil valleys, and cinematic high dune sunset summits."
    },
    {
      name: "Salt Cave Experience",
      arabicName: "جلسة الكهف الملحى",
      price: "400 EGP",
      duration: "45 Mins",
      image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=600&q=80",
      description: "Relaxing wellness dry inhalation within crystalline Siwan rock salt caves, ideal for natural respiratory detox."
    },
    {
      name: "Pottery Workshop",
      arabicName: "ورشة صناعة الفخار",
      price: "300 EGP",
      duration: "1 Hour",
      image: "https://images.unsplash.com/photo-1565192647048-f997ded87958?auto=format&fit=crop&w=600&q=80",
      description: "Handicraft molding sessions taught directly by native master artisans from Tunis pottery village."
    },
    {
      name: "Horseback Riding",
      arabicName: "ركوب الخيل",
      price: "300 EGP",
      duration: "1 Hour",
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
      description: "Scenic desert lakeside horse treks. An editorial sunset pacing along Fayoum's soft waters."
    }
  ];

  return (
    <div className="bg-[#FAF9F6] border-2 border-black p-6 md:p-12 shadow-brutalist max-w-7xl mx-auto my-8 text-black" id="concierge-hub">
      {/* Editorial Luxury Header */}
      <div className="border-b-2 border-black pb-8 mb-10 flex flex-col lg:flex-row lg:items-end justify-between items-start gap-4">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-[#777] uppercase block mb-2">
            EXPERIENCE & EVENTS CONCIERGE HUB • الخدمات من خلال الريسبشن
          </span>
          <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-tighter">
            Reception-Managed Services
          </h2>
          <p className="font-sans text-xs text-neutral-600 max-w-xl mt-3 leading-relaxed">
            In keeping with our commitment to absolute custom itinerary design, the following services are exclusively booked on-site or via direct receptionist dispatch to coordinate bespoke setup details.
          </p>
        </div>

        {/* Global Concierge Status Badge */}
        <div className="bg-black text-[#FAF9F6] px-4 py-2 font-mono text-[9px] uppercase tracking-widest border border-black flex items-center space-x-2">
          <span className="w-1.5 h-1.5 bg-[#C8B9A6] rounded-full animate-ping" />
          <span>DIRECT CONCIERGE ACTIVE</span>
        </div>
      </div>

      {/* Modern High-End Hub Navigation Tabs */}
      <div className="flex flex-wrap border-b border-black mb-8 gap-1 md:gap-2">
        <button
          onClick={() => setActiveCategory("activities")}
          className={`px-4 py-3 font-mono text-xs uppercase tracking-wider font-bold transition-all relative border-t-2 border-x border-black -mb-[1px] cursor-pointer ${
            activeCategory === "activities" 
              ? "bg-white border-b-2 border-b-white text-black" 
              : "bg-neutral-100 border-b border-b-black text-neutral-500 hover:text-black"
          }`}
        >
          🌵 A. Activities (الأنشطة)
        </button>
        <button
          onClick={() => setActiveCategory("transport")}
          className={`px-4 py-3 font-mono text-xs uppercase tracking-wider font-bold transition-all relative border-t-2 border-x border-black -mb-[1px] cursor-pointer ${
            activeCategory === "transport" 
              ? "bg-white border-b-2 border-b-white text-black" 
              : "bg-neutral-100 border-b border-b-black text-neutral-500 hover:text-black"
          }`}
        >
          🚘 B. Transportation (المواصلات)
        </button>
        <button
          onClick={() => setActiveCategory("teambuilding")}
          className={`px-4 py-3 font-mono text-xs uppercase tracking-wider font-bold transition-all relative border-t-2 border-x border-black -mb-[1px] cursor-pointer ${
            activeCategory === "teambuilding" 
              ? "bg-white border-b-2 border-b-white text-black" 
              : "bg-neutral-100 border-b border-b-black text-neutral-500 hover:text-black"
          }`}
        >
          👔 C. Corporate Team Building
        </button>
        <button
          onClick={() => setActiveCategory("weddings")}
          className={`px-4 py-3 font-mono text-xs uppercase tracking-wider font-bold transition-all relative border-t-2 border-x border-black -mb-[1px] cursor-pointer ${
            activeCategory === "weddings" 
              ? "bg-white border-b-2 border-b-white text-black" 
              : "bg-neutral-100 border-b border-b-black text-neutral-500 hover:text-black"
          }`}
        >
          💍 D. Weddings & Private Events
        </button>
      </div>

      {/* Main Adaptive Sections */}
      <div className="min-h-[400px]">
        <AnimatePresence mode="wait">
          {activeCategory === "activities" && (
            <motion.div
              key="activities"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Intro Notice with Rule */}
              <div className="bg-white border border-black p-4 flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-[#C8B9A6] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-mono text-[9px] uppercase tracking-wider font-bold text-[#C8B9A6] block">IMPORTANT BOOKING NOTICE</span>
                  <p className="font-sans text-xs text-neutral-700 leading-relaxed">
                    Activities are handled physically at the desert campsite reception or with pre-arrival notification. Prices are official. No pre-payment forms required!
                  </p>
                </div>
              </div>

              {/* Premium matrix/carousel wrapper */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {activitiesList.map((act, index) => (
                  <div 
                    key={index} 
                    className="bg-white border-2 border-black shadow-sm group hover:shadow-brutalist transition-all duration-300 flex flex-col justify-between"
                  >
                    <div className="relative aspect-video overflow-hidden border-b border-black bg-neutral-100">
                      <img 
                        src={act.image} 
                        alt={act.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-black text-[#C8B9A6] font-mono text-[8px] tracking-widest px-2 py-0.5 uppercase">
                        Booked on-site / Via Reception
                      </div>
                    </div>
                    
                    <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                      <div>
                        <div className="flex justify-between items-baseline mb-1">
                          <h4 className="font-serif text-lg font-bold tracking-tight text-black">{act.name}</h4>
                        </div>
                        <span className="font-mono text-[10px] text-neutral-500 uppercase block mb-3 font-semibold">
                          {act.arabicName} • {act.duration}
                        </span>
                        <p className="font-sans text-xs text-neutral-600 leading-relaxed">
                          {act.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                        <div>
                          <span className="font-mono text-[8px] uppercase tracking-widest text-neutral-400 block">OFFICIAL TARIFF</span>
                          <span className="font-mono text-sm font-bold block">{act.price}</span>
                        </div>

                        <a
                          href={getWhatsappLink(act.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black hover:bg-[#C8B9A6] text-white hover:text-black font-mono text-[9px] uppercase tracking-widest px-3 py-2 border border-black transition-colors flex items-center gap-1 cursor-pointer"
                        >
                          <Phone className="w-3 h-3" />
                          <span>Book via Reception Concierge</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeCategory === "transport" && (
            <motion.div
              key="transport"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
            >
              <div className="lg:col-span-7 space-y-6">
                <span className="font-mono text-[10px] tracking-wider text-[#C8B9A6] uppercase font-bold block">
                  PRIVATE FLEET TRANSFERS • المواصلات
                </span>
                <h3 className="font-serif text-2xl uppercase tracking-wider text-black">
                  Exclusive Cairo-to-Camp Dispatch
                </h3>
                <p className="font-sans text-neutral-600 text-xs leading-relaxed">
                  Avoid rough off-road route navigation. Remal El Rayan provides safe, direct private transfers straight to our oasis. Rest in comfort while highly experienced, licensed desert captains handle navigation in temperature-regulated private vehicles.
                </p>

                {/* Minimal pricing matrix cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white border-2 border-black p-5 flex flex-col justify-between shadow-sm">
                    <div>
                      <span className="font-mono text-[8px] uppercase tracking-wider text-neutral-500 block mb-1">Standard Transfer</span>
                      <h4 className="font-serif text-lg font-bold">Standard Private Car (One Way)</h4>
                      <p className="font-sans text-[11px] text-neutral-500 mt-2 leading-relaxed">
                        Accommodates up to 3 guests with private luggage accommodation directly from any Cairo location.
                      </p>
                    </div>
                    <div className="border-t border-black/5 pt-4 mt-4 flex justify-between items-baseline">
                      <span className="font-mono text-sm font-bold">2,700 EGP</span>
                      <span className="font-mono text-[8px] text-neutral-400">Cairo-to-Camp</span>
                    </div>
                  </div>

                  <div className="bg-white border-2 border-black p-5 flex flex-col justify-between shadow-sm">
                    <div>
                      <span className="font-mono text-[8px] uppercase tracking-wider text-neutral-500 block mb-1">Premium Fleet Group Option</span>
                      <h4 className="font-serif text-lg font-bold">Luxury Toyota Hiace & Large Buses</h4>
                      <p className="font-sans text-[11px] text-neutral-500 mt-2 leading-relaxed">
                        Custom logistics and full fleet coordination for medium to large private group gatherings.
                      </p>
                    </div>
                    <div className="border-t border-black/5 pt-4 mt-4 flex justify-between items-baseline">
                      <span className="font-mono text-[10px] uppercase font-bold text-[#C8B9A6]">Custom Quote</span>
                      <span className="font-mono text-[8px] text-neutral-400"> القاهرة والفيوم </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={getWhatsappLink("Private Cairo-to-Camp Fleet Transport")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black hover:bg-[#C8B9A6] text-white hover:text-black font-mono text-xs uppercase tracking-widest px-6 py-4 border-2 border-black cursor-pointer shadow-brutalist transition-transform duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Book via Reception Concierge</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 relative min-h-[300px] border-4 border-black p-2 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1533619239203-3a78cfd298bb?auto=format&fit=crop&w=800&q=80" 
                  alt="Glamping desert transport vehicle context"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          )}

          {activeCategory === "teambuilding" && (
            <motion.div
              key="teambuilding"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              <div className="lg:col-span-5 border-4 border-black p-2 bg-white aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800&q=80" 
                  alt="High-end corporate team building workspace outdoors"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="lg:col-span-7 space-y-6">
                <span className="font-mono text-[10px] tracking-wider text-[#C8B9A6] uppercase font-bold block">
                  BESPOKE CORPORATE RETREATS • حجز التيم بيلدنج للشركات
                </span>
                <h3 className="font-serif text-2xl md:text-3xl uppercase tracking-tight text-black">
                  Quiet-Luxury Corporate Alignment Outings
                </h3>
                <p className="font-sans text-neutral-600 text-xs leading-relaxed">
                  Cultivate team synergy in complete serenity. Our dedicated planners design private corporate packages featuring exclusive dome hires, interactive lakeside workshops, local Bedouin dining, and fully hosted team exercises under Fayoum's stellar desert canvas.
                </p>

                <div className="space-y-3.5 border-l-2 border-[#C8B9A6] pl-4">
                  <div className="text-xs font-sans">
                    <span className="font-mono text-[10px] font-bold block text-black">EXCLUSIVE RETREAT CAPABILITIES:</span>
                    <span className="text-neutral-600">Full or half-camp corporate buyouts, premium outdoor theater screens, dedicated power stations, custom lakeside culinary setups.</span>
                  </div>
                </div>

                <div className="pt-4">
                  <a
                    href={getWhatsappLink("Bespoke Corporate Team Building Setup")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black hover:bg-[#C8B9A6] text-white hover:text-black font-mono text-xs uppercase tracking-widest px-6 py-4 border-2 border-black cursor-pointer shadow-brutalist transition-transform duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Book via Reception Concierge</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {activeCategory === "weddings" && (
            <motion.div
              key="weddings"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
            >
              <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                <div>
                  <span className="font-mono text-[10px] tracking-wider text-[#C8B9A6] uppercase font-bold block">
                    CINEMATIC DESERT VENUE HIRE • الافراح والمناسبات
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl uppercase tracking-tighter text-black">
                    Desert Weddings & Private Celebrations
                  </h3>
                  <p className="font-sans text-neutral-600 text-xs leading-relaxed mt-4">
                    Exchange vows against a backdrop of glowing golden dunes meeting soft deep-blue lake waters of Wadi Elrayan. We specialize in producing raw, elegant, cinematic, romantic desert weddings and curated private receptions. Every event is built from scratch around your exact dream aesthetic.
                  </p>
                </div>

                <div className="bg-white border border-black/10 p-5 font-sans space-y-2">
                  <h4 className="font-serif text-sm font-bold text-black uppercase">Tailored Luxury Production includes:</h4>
                  <p className="text-[11px] text-neutral-600 leading-relaxed">
                    Dedicated luxury event managers, high-fashion lighting arrays, custom sand platforms, local Bedouin fire ceremonies, and world-class guest catering solutions.
                  </p>
                </div>

                <div>
                  <a
                    href={getWhatsappLink("Cinematic Desert Wedding & Events Inquiry")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-black hover:bg-[#C8B9A6] text-white hover:text-black font-mono text-xs uppercase tracking-widest px-6 py-4 border-2 border-black cursor-pointer shadow-brutalist transition-transform duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Book via Reception Concierge</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5 relative min-h-[350px] border-4 border-black p-2 bg-white">
                <img 
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80" 
                  alt="High fashion wedding dinner table under glowing desert lights"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
