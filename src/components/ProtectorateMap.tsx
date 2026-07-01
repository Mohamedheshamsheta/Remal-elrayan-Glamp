import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { PalmTree, AcaciaTree } from "./DesertTree";
import { 
  Compass, MapPin, Layers, Navigation, Info, Eye, 
  Map, ZoomIn, ZoomOut, Check, ArrowRight, Star, RefreshCw
} from "lucide-react";

interface POI {
  id: string;
  nameEn: string;
  nameAr: string;
  category: "camp" | "nature" | "heritage";
  lat: number;
  lng: number;
  distanceKm: number;
  descriptionEn: string;
  descriptionAr: string;
  highlightEn: string;
  highlightAr: string;
  // Position on the map (percentage 0-100)
  mapX: number; 
  mapY: number;
}

const POINTS_OF_INTEREST: POI[] = [
  {
    id: "remal",
    nameEn: "Remal El Rayan Glamp",
    nameAr: "مخيم رمال الريان الفاخر",
    category: "camp",
    lat: 29.1837,
    lng: 30.4312,
    distanceKm: 0,
    descriptionEn: "Your luxury eco-haven settled securely behind wind-breaking sand dunes, offering geodesic starlit domes and traditional safari tent suites.",
    descriptionAr: "ملاذك البيئي الفاخر المستقر خلف الكثبان الرملية لحمايتك من الرياح، ويقدم قباباً جيوديسية مضاءة بالنجوم وأجنحة خيام سفاري تقليدية.",
    highlightEn: "Base Camp / Luxury Glamping",
    highlightAr: "المخيم الرئيسي / التخييم الفاخر",
    mapX: 62,
    mapY: 65,
  },
  {
    id: "magic-lake",
    nameEn: "Magic Lake Fayoum",
    nameAr: "البحيرة السحرية بالفيوم",
    category: "nature",
    lat: 29.2155,
    lng: 30.3850,
    distanceKm: 6.8,
    descriptionEn: "A majestic freshwater body nestled between high sand dunes. Named 'Magic' due to its colors shifting throughout the day from crystal-blue to emerald green.",
    descriptionAr: "مسطح مائي عذب ساحر يقع بين الكثبان الرملية المرتفعة. سميت 'السحرية' بسبب تغير ألوان مياهها طوال اليوم من الأزرق الكريستالي إلى الأخضر الزمردي.",
    highlightEn: "Freshwater Oasis & Sandboarding",
    highlightAr: "واحة مياه عذبة والتزلج على الرمال",
    mapX: 42,
    mapY: 48,
  },
  {
    id: "waterfalls",
    nameEn: "Wadi El Rayan Waterfalls",
    nameAr: "شلالات وادي الريان",
    category: "nature",
    lat: 29.2023,
    lng: 30.4190,
    distanceKm: 3.5,
    descriptionEn: "Egypt's only natural waterfalls, forming a beautiful stream linking the Upper Lake and the Lower Lake within the protected nature reserve.",
    descriptionAr: "الشلالات الطبيعية الوحيدة في مصر، حيث تشكل مجرى مائيًا جميلاً يربط بين البحيرة العليا والبحيرة السفلى داخل محمية وادي الريان الطبيعية.",
    highlightEn: "Natural Waterfalls & Bird Watching",
    highlightAr: "شلالات طبيعية ومراقبة الطيور البرية",
    mapX: 55,
    mapY: 53,
  },
  {
    id: "mudawara",
    nameEn: "Jabal Al-Mudawara",
    nameAr: "جبل المدورة",
    category: "heritage",
    lat: 29.1764,
    lng: 30.3644,
    distanceKm: 8.2,
    descriptionEn: "An iconic circular table mountain dating back millions of years. This peak offers breath-taking views of the protectorate's deep desert basin.",
    descriptionAr: "جبل دائري أيقوني يعود لتاريخ جيولوجي عميق يمتد لملايين السنين. يوفر القمة إطلالات تخطف الأنفاس على حوض صحراء المحمية العميق.",
    highlightEn: "Prehistoric Fossil Formation",
    highlightAr: "تكوين جيولوجي وحفريات ما قبل التاريخ",
    mapX: 34,
    mapY: 72,
  },
  {
    id: "hitan",
    nameEn: "Wadi Al-Hitan (Valley of Whales)",
    nameAr: "وادي الحيتان الأثري",
    category: "heritage",
    lat: 29.2730,
    lng: 30.0438,
    distanceKm: 42.0,
    descriptionEn: "A prestigious UNESCO World Heritage Site showcasing hundreds of fossilized skeletons of primitive whales, revealing key evolutionary stages.",
    descriptionAr: "موقع تراث عالمي فريد مسجل لدى اليونسكو يضم مئات الهياكل العظمية المتحجرة للحيتان الأولية البدائية، كاشفاً عن مراحل التطور التاريخي.",
    highlightEn: "UNESCO World Heritage Site",
    highlightAr: "موقع تراث عالمي لليونسكو",
    mapX: 12,
    mapY: 20,
  },
  {
    id: "lower-lake",
    nameEn: "Wadi El Rayan Lower Lake",
    nameAr: "البحيرة السفلى لوادي الريان",
    category: "nature",
    lat: 29.1912,
    lng: 30.4560,
    distanceKm: 4.8,
    descriptionEn: "A vast saline lake sanctuary rich in biodiversity, playing host to rare migratory waterbirds and unique desert marine fauna.",
    descriptionAr: "بحيرة مالحة شاسعة غنية بالتنوع البيولوجي، وموطن للطيور المائية المهاجرة النادرة والحياة البحرية الصحراوية الفريدة.",
    highlightEn: "Protected Ecological Zone",
    highlightAr: "منطقة بيئية محمية بالكامل",
    mapX: 78,
    mapY: 60,
  }
];

export function ProtectorateMap() {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<"all" | "camp" | "nature" | "heritage">("all");
  const [selectedPoi, setSelectedPoi] = useState<POI>(POINTS_OF_INTEREST[0]);
  const [showRoute, setShowRoute] = useState<boolean>(true);
  const [mapMode, setMapMode] = useState<"topographic" | "coordinates">("topographic");
  const [hoveredCoords, setHoveredCoords] = useState<{ lat: number; lng: number } | null>(null);
  
  const mapContainerRef = useRef<HTMLDivElement>(null);

  // Map coordinates bound approximations to simulate mouse tracking
  const MIN_LAT = 29.1200;
  const MAX_LAT = 29.3000;
  const MIN_LNG = 30.0000;
  const MAX_LNG = 30.5000;

  // Track mouse hover over the map to show real-time GPS coordinates
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!mapContainerRef.current) return;
    const rect = mapContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Percentage
    const pctX = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const pctY = Math.max(0, Math.min(100, (y / rect.height) * 100));
    
    // Convert percentage to latitude/longitude
    const simulatedLng = MIN_LNG + (pctX / 100) * (MAX_LNG - MIN_LNG);
    const simulatedLat = MAX_LAT - (pctY / 100) * (MAX_LAT - MIN_LAT); // inverse Y for lat
    
    setHoveredCoords({
      lat: Number(simulatedLat.toFixed(4)),
      lng: Number(simulatedLng.toFixed(4))
    });
  };

  const handleMouseLeave = () => {
    setHoveredCoords(null);
  };

  const filteredPois = POINTS_OF_INTEREST.filter(
    (poi) => selectedCategory === "all" || poi.category === selectedCategory
  );

  return (
    <div className="border-2 border-black bg-white p-4 md:p-6 shadow-brutalist relative overflow-hidden" id="interactive-protectorate-map">
      {/* Absolute Decorative Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#C8B9A6_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

      {/* Top Header Panel */}
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between pb-4 border-b-2 border-black gap-4 mb-6">
        <div className="space-y-1">
          <div className="flex flex-wrap items-center gap-2">
            <Compass className="text-desert-green shrink-0 animate-spin-slow" size={20} />
            <span className="font-mono text-[10px] tracking-widest text-desert-green font-extrabold uppercase bg-desert-green/10 px-2.5 py-0.5 border border-desert-green/20">
              {language === "ar" ? "خريطة تفاعلية أصلية" : "AUTHENTIC ADVENTURE ATLAS"}
            </span>
            <a
              href="https://maps.app.goo.gl/Ujt42ERXYAQbvkec8"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-widest text-desert-blue font-extrabold uppercase bg-desert-blue/10 hover:bg-desert-blue hover:text-white transition-all px-2.5 py-0.5 border border-desert-blue/20 flex items-center gap-1 cursor-pointer"
            >
              <MapPin size={10} className="animate-bounce" />
              <span>{language === "ar" ? "افتح في خرائط جوجل" : "OPEN IN GOOGLE MAPS"}</span>
            </a>
          </div>
          <h3 className="font-serif text-2xl md:text-3xl text-desert-dark uppercase tracking-tight">
            {language === "ar" ? "مستكشف محمية وادي الريان" : "Wadi El Rayan Explorer"}
          </h3>
          <p className="font-sans text-xs text-neutral-500">
            {language === "ar" 
              ? "تصفح معالم الفيوم الطبيعية، خطط لمسار رحلتك بالدفع الرباعي، واستكشف التراث البيئي المحيط بنا."
              : "Toggle points of interest, trace your off-road Jeep route, and inspect coordinates across the protected desert sanctuary."}
          </p>
        </div>

        {/* View Mode Controller */}
        <div className="flex items-center gap-2 self-start md:self-center font-mono text-xs">
          <button
            onClick={() => setMapMode("topographic")}
            className={`px-3 py-1.5 border-2 border-black font-extrabold tracking-tight cursor-pointer transition-all select-none ${
              mapMode === "topographic" 
                ? "bg-black text-white" 
                : "bg-white text-black hover:bg-neutral-100"
            }`}
          >
            {language === "ar" ? "رسم تضاريسي" : "Topography Grid"}
          </button>
          <button
            onClick={() => setMapMode("coordinates")}
            className={`px-3 py-1.5 border-2 border-black font-extrabold tracking-tight cursor-pointer transition-all select-none ${
              mapMode === "coordinates" 
                ? "bg-black text-white" 
                : "bg-white text-black hover:bg-neutral-100"
            }`}
          >
            {language === "ar" ? "خطوط الطول والعرض" : "Coordinate Radar"}
          </button>
        </div>
      </div>

      {/* Main Layout Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        
        {/* Left Column: Toggles & Details Panel */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-6">
          
          {/* Categories Toggle */}
          <div className="space-y-3">
            <h4 className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase font-bold">
              {language === "ar" ? "تصفية حسب الفئة" : "FILTER BY CATEGORY"}
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {[
                { id: "all", labelEn: "All Locations", labelAr: "كل المواقع" },
                { id: "camp", labelEn: "Base Glamp", labelAr: "المخيم الرئيسي" },
                { id: "nature", labelEn: "Natural Wonders", labelAr: "روائع الطبيعة" },
                { id: "heritage", labelEn: "Historical Sites", labelAr: "مواقع تراثية" }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as any)}
                  className={`px-2.5 py-2 border border-black text-left font-mono text-[11px] font-extrabold tracking-tight transition-all flex items-center justify-between cursor-pointer ${
                    selectedCategory === cat.id 
                      ? "bg-desert-green/10 text-desert-green border-desert-green font-black shadow-[2px_2px_0px_rgba(46,90,68,1)]" 
                      : "bg-[#faf9f6] text-neutral-700 hover:bg-neutral-100"
                  }`}
                >
                  <span>{language === "ar" ? cat.labelAr : cat.labelEn}</span>
                  {selectedCategory === cat.id && <Check size={10} className="stroke-[3]" />}
                </button>
              ))}
            </div>
          </div>

          {/* Selected POI Details Card */}
          <div className="border-2 border-black p-4 bg-[#F4F1EA] shadow-[3px_3px_0px_rgba(0,0,0,1)] space-y-4 flex-grow flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className={`font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 border border-black text-white ${
                  selectedPoi.category === "camp" ? "bg-desert-green" :
                  selectedPoi.category === "nature" ? "bg-blue-800" : "bg-amber-800"
                }`}>
                  {selectedPoi.category === "camp" ? (language === "ar" ? "المخيم" : "CAMP BASE") :
                   selectedPoi.category === "nature" ? (language === "ar" ? "معلم طبيعي" : "NATURAL WATER") : 
                   (language === "ar" ? "تراث وأثر" : "HERITAGE")}
                </span>
                
                {selectedPoi.distanceKm > 0 && (
                  <span className="font-mono text-xs font-bold text-desert-green bg-white border border-black px-1.5 py-0.5">
                    {selectedPoi.distanceKm} km {language === "ar" ? "من المخيم" : "from Camp"}
                  </span>
                )}
              </div>

              <h4 className="font-serif text-lg md:text-xl text-black font-semibold leading-tight">
                {language === "ar" ? selectedPoi.nameAr : selectedPoi.nameEn}
              </h4>
              
              <div className="font-mono text-[10px] text-neutral-500 bg-white border border-black/10 p-2 space-y-0.5">
                <div className="flex justify-between">
                  <span>LATITUDE:</span>
                  <span className="font-bold text-black">{selectedPoi.lat}° N</span>
                </div>
                <div className="flex justify-between">
                  <span>LONGITUDE:</span>
                  <span className="font-bold text-black">{selectedPoi.lng}° E</span>
                </div>
              </div>

              <p className="font-sans text-xs text-neutral-600 leading-relaxed pt-1">
                {language === "ar" ? selectedPoi.descriptionAr : selectedPoi.descriptionEn}
              </p>

              <div className="pt-2 border-t border-dashed border-black/10">
                <div className="flex items-center gap-1.5 text-xs text-desert-green font-semibold">
                  <Star size={12} className="fill-current text-desert-green" />
                  <span className="font-mono text-[10px] uppercase tracking-wider">
                    {language === "ar" ? selectedPoi.highlightAr : selectedPoi.highlightEn}
                  </span>
                </div>
              </div>
            </div>

            {/* Simulated Jeep Route Toggle */}
            <div className="pt-4 border-t border-black/10 flex items-center justify-between gap-2 mt-2">
              <div className="space-y-0.5">
                <span className="font-mono text-[9px] text-neutral-500 block uppercase font-bold">
                  {language === "ar" ? "طريق الدفع الرباعي" : "4x4 Jeep Route"}
                </span>
                <span className="font-sans text-[10px] text-neutral-500 leading-none block">
                  {showRoute ? (language === "ar" ? "مفعل ومضاء" : "Active trail route overlay") : (language === "ar" ? "مخفي" : "Disabled")}
                </span>
              </div>
              <button
                onClick={() => setShowRoute(!showRoute)}
                disabled={selectedPoi.id === "remal"}
                className={`px-3 py-1.5 border-2 border-black font-mono text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1.5 cursor-pointer transition-all ${
                  selectedPoi.id === "remal" 
                    ? "opacity-50 cursor-not-allowed bg-neutral-200"
                    : showRoute 
                    ? "bg-desert-green text-white shadow-none"
                    : "bg-white text-black hover:bg-neutral-100 shadow-[2px_2px_0px_rgba(0,0,0,1)] active:shadow-none active:translate-x-0.5 active:translate-y-0.5"
                }`}
              >
                <Navigation size={12} className={showRoute && selectedPoi.id !== "remal" ? "animate-pulse" : ""} />
                <span>{showRoute ? (language === "ar" ? "إخفاء" : "Hide") : (language === "ar" ? "رسم" : "Trace")}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Map Canvas */}
        <div className="lg:col-span-8 flex flex-col justify-between border-2 border-black bg-[#EAE3D2] relative min-h-[400px] h-[450px] lg:h-auto overflow-hidden group/canvas">
          
          {/* Topography Contour Line Background Layer (Simulated via SVG overlay pattern) */}
          <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22><path d=%22M0 20 C30 15, 70 30, 100 15 M0 50 C40 45, 60 60, 100 45 M0 80 C20 75, 80 85, 100 75%22 fill=%22none%22 stroke=%22%23C8B9A6%22 stroke-width=%221%22 stroke-dasharray=%221,4%22/></svg>')] opacity-30" />
          
          {/* Interactive Map Surface */}
          <div 
            ref={mapContainerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="absolute inset-0 cursor-crosshair overflow-hidden"
          >
            {/* Wadi El Rayan Scenic Lakes Layer */}
            {/* Magic Lake Shape */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
              {/* Magic Lake (freshwater azure) */}
              <path
                d="M 35 48 C 38 42, 45 42, 48 46 C 51 50, 48 55, 43 54 C 38 53, 32 54, 35 48 Z"
                fill="#2E5A44"
                fillOpacity="0.1"
                stroke="#2E5A44"
                strokeWidth="2"
                strokeDasharray="4 2"
                className="animate-pulse"
                style={{ animationDuration: '6s' }}
              />
              <text x="36%" y="42%" className="font-mono text-[9px] text-desert-green/80 font-bold tracking-tight">MAGIC LAKE</text>

              {/* Lower Lake (saline turquoise) */}
              <path
                d="M 68 58 C 74 54, 82 56, 85 60 C 88 64, 80 68, 75 66 C 70 64, 64 62, 68 58 Z"
                fill="#3B7197"
                fillOpacity="0.15"
                stroke="#3B7197"
                strokeWidth="2"
              />
              <text x="70%" y="69%" className="font-mono text-[9px] text-[#3B7197]/80 font-bold tracking-tight">LOWER LAKE</text>
              
              {/* Dynamic Path Route Overlay from Remal Camp to Selected POI */}
              {showRoute && selectedPoi && selectedPoi.id !== "remal" && (
                <g>
                  <path
                    d={`M ${POINTS_OF_INTEREST[0].mapX}% ${POINTS_OF_INTEREST[0].mapY}% 
                       Q ${(POINTS_OF_INTEREST[0].mapX + selectedPoi.mapX) / 2 - 5}% ${(POINTS_OF_INTEREST[0].mapY + selectedPoi.mapY) / 2 - 5}% 
                       ${selectedPoi.mapX}% ${selectedPoi.mapY}%`}
                    fill="none"
                    stroke="#2E5A44"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="6 4"
                    className="animate-[dash_1.5s_linear_infinite]"
                    style={{
                      strokeDashoffset: 10,
                    }}
                  />
                  {/* Glowing travel wave */}
                  <circle r="4" fill="#2E5A44" className="animate-ping">
                    <animateMotion 
                      dur="3s" 
                      repeatCount="indefinite" 
                      path={`M ${POINTS_OF_INTEREST[0].mapX} ${POINTS_OF_INTEREST[0].mapY} 
                             Q ${(POINTS_OF_INTEREST[0].mapX + selectedPoi.mapX) / 2 - 5} ${(POINTS_OF_INTEREST[0].mapY + selectedPoi.mapY) / 2 - 5} 
                             ${selectedPoi.mapX} ${selectedPoi.mapY}`}
                    />
                  </circle>
                </g>
              )}
            </svg>

            {/* Oasis Desert Tree Overlays on the Map in Desert Green */}
            <div className="absolute top-[35%] left-[25%] pointer-events-none opacity-40">
              <PalmTree className="text-desert-green" size={32} color="#2E5A44" />
            </div>
            <div className="absolute top-[68%] left-[58%] pointer-events-none opacity-50">
              <PalmTree className="text-desert-green" size={24} color="#2E5A44" />
            </div>
            <div className="absolute top-[58%] left-[45%] pointer-events-none opacity-40">
              <AcaciaTree className="text-desert-green" size={28} color="#2E5A44" />
            </div>
            <div className="absolute top-[22%] left-[62%] pointer-events-none opacity-30">
              <AcaciaTree className="text-desert-green" size={20} color="#2E5A44" />
            </div>

            {/* Active Points of Interest Pins */}
            {filteredPois.map((poi) => {
              const isSelected = selectedPoi.id === poi.id;
              const isCamp = poi.id === "remal";

              return (
                <button
                  key={poi.id}
                  onClick={() => {
                    setSelectedPoi(poi);
                    if (poi.id === "remal") {
                      setShowRoute(false);
                    } else {
                      setShowRoute(true);
                    }
                  }}
                  className="absolute -translate-x-1/2 -translate-y-1/2 focus:outline-none z-20 group/pin"
                  style={{ left: `${poi.mapX}%`, top: `${poi.mapY}%` }}
                >
                  {/* Ripple ring for active selection */}
                  {isSelected && (
                    <span className={`absolute inset-0 -m-3 rounded-full animate-ping opacity-60 ${
                      isCamp ? "bg-desert-green" : "bg-black"
                    }`} style={{ animationDuration: '2s' }} />
                  )}

                  {/* Icon Marker */}
                  <div className={`relative flex items-center justify-center w-7 h-7 rounded-full border border-black shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)] transition-all ${
                    isSelected 
                      ? "bg-black text-white scale-110" 
                      : isCamp 
                      ? "bg-desert-green text-white hover:bg-desert-green/90" 
                      : "bg-[#fffdf9] text-black hover:bg-[#eae3d2] hover:scale-105"
                  }`}>
                    {isCamp ? (
                      <PalmTree size={16} color="#fff" />
                    ) : (
                      <MapPin size={13} className={isSelected ? "text-white" : "text-black"} />
                    )}

                    {/* Quick Hover Tooltip Label */}
                    <div className="absolute bottom-full mb-1.5 left-1/2 -translate-x-1/2 bg-black text-white text-[9px] font-mono py-1 px-2 whitespace-nowrap opacity-0 pointer-events-none group-hover/pin:opacity-100 transition-opacity z-50">
                      {language === "ar" ? poi.nameAr : poi.nameEn}
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Topography Coordinate Overlay Indicators */}
            {mapMode === "coordinates" && (
              <div className="absolute inset-0 pointer-events-none border border-dashed border-black/15 flex flex-col justify-between p-2 font-mono text-[8px] text-neutral-500">
                <div className="flex justify-between">
                  <span>LAT: {MAX_LAT}° N / LNG: {MIN_LNG}° E</span>
                  <span>LAT: {MAX_LAT}° N / LNG: {MAX_LNG}° E</span>
                </div>
                {/* Horizontal Coordinate Line Ticks */}
                <div className="absolute top-1/4 left-0 w-full border-t border-dashed border-black/5 flex justify-end pr-2">29.2550° N</div>
                <div className="absolute top-1/2 left-0 w-full border-t border-dashed border-black/5 flex justify-end pr-2">29.2100° N</div>
                <div className="absolute top-3/4 left-0 w-full border-t border-dashed border-black/5 flex justify-end pr-2">29.1650° N</div>
                {/* Vertical Coordinate Line Ticks */}
                <div className="absolute left-1/4 top-0 h-full border-l border-dashed border-black/5 pl-1 pt-12">30.1250° E</div>
                <div className="absolute left-1/2 top-0 h-full border-l border-dashed border-black/5 pl-1 pt-12">30.2500° E</div>
                <div className="absolute left-3/4 top-0 h-full border-l border-dashed border-black/5 pl-1 pt-12">30.3750° E</div>
                <div className="flex justify-between">
                  <span>LAT: {MIN_LAT}° N / LNG: {MIN_LNG}° E</span>
                  <span>LAT: {MIN_LAT}° N / LNG: {MAX_LNG}° E</span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Live Coordinates Dashboard Bar */}
          <div className="relative z-10 border-t-2 border-black bg-white px-3 py-2 font-mono text-[9px] flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 text-neutral-600">
              <span className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
              <span>RADAR SYSTEM: ONLINE</span>
            </div>

            {/* Live Hover coordinates ticker */}
            <AnimatePresence mode="wait">
              {hoveredCoords ? (
                <motion.div 
                  initial={{ opacity: 0, y: 3 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -3 }}
                  className="text-black font-extrabold flex items-center gap-3"
                >
                  <span className="text-desert-green bg-desert-green/10 border border-desert-green/20 px-1 rounded">
                    LAT: {hoveredCoords.lat}° N
                  </span>
                  <span className="text-desert-green bg-desert-green/10 border border-desert-green/20 px-1 rounded">
                    LNG: {hoveredCoords.lng}° E
                  </span>
                </motion.div>
              ) : (
                <span className="text-neutral-400 italic">
                  {language === "ar" ? "حرك المؤشر فوق الخريطة لقراءة الإحداثيات المباشرة" : "Hover cursor over canvas for live GPS coordinates"}
                </span>
              )}
            </AnimatePresence>

            <div>
              <span className="text-[#999] uppercase font-bold">GRID REF:</span> <span className="font-extrabold text-black">W-EL-R_V2</span>
            </div>
          </div>
        </div>
      </div>

      {/* Styled animation styles directly embedded */}
      <style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -20;
          }
        }
      `}</style>
    </div>
  );
}
