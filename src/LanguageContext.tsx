import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "en" | "ar" | "es" | "fr" | "de" | "ja";

export interface TranslationSet {
  // Navigation
  home: string;
  accommodations: string;
  restaurant: string;
  experiences: string;
  policies: string;

  // Header & General
  wadiElRayan: string;
  egypt: string;
  replay: string;
  nationalityLabel: string;
  egyptian: string;
  nonEgyptian: string;
  coordinates: string;
  classification: string;
  classificationValue: string;
  fayoumEgypt: string;

  // Preloader
  preloaderEst: string;
  preloaderSilent: string;
  preloaderStage0: string;
  preloaderStage1: string;
  preloaderStage2: string;
  preloaderStage3: string;
  exploreRetreat: string;

  // Home Section
  established2021: string;
  glampDescription: string;
  conceptPhilosophy: string;
  redefiningLuxuryTitle: string;
  sandMeaning: string;
  adventureComfort: string;
  balanceQuote: string;
  boardVision: string;
  strategicRepositioning: string;
  strategicDesc: string;
  heritageImpact: string;
  sustainableHeritage: string;
  heritageDesc: string;

  // Location Portfolio
  locationPortfolio: string;
  sacredOasisTitle: string;
  sacredOasisDesc1: string;
  sacredOasisDesc2: string;
  distanceCairo: string;
  distanceCairoVal: string;
  sandType: string;
  sandTypeVal: string;
  nearestWaterbody: string;
  nearestWaterbodyVal: string;
  placeHistory: string;
  placeHistoryVal: string;
  geoGridMap: string;
  campLocationMarker: string;
  campMarkerDesc: string;

  // Organization Team
  adminHospitality: string;
  orgTeamTitle: string;
  chairman: string;
  ceo: string;
  generalManager: string;
  restaurantManager: string;
  executiveChef: string;
  reservationsManager: string;
  receptionManager: string;
  accountantManager: string;

  // Footer & VIP
  vipHostingSatellite: string;
  exclusiveConciergeInquiries: string;

  // Accommodations Section
  accomTitle: string;
  accomSub: string;
  accomDesc: string;
  roomBookingNotes: string;
  egyptianPriceNotice: string;
  nonEgyptianPriceNotice: string;
  maxGuests: string;
  perNight: string;
  viewInterior: string;
  viewExterior: string;
  reserveThisDome: string;
  amenitiesLabel: string;
  featuresLabel: string;

  // Restaurant Section
  lakeDiningTitle: string;
  lakeDiningSub: string;
  lakeDiningDesc: string;
  breakfastMenu: string;
  lunchMenu: string;
  dinnerMenu: string;
  exclVat: string;
  bookingFormTitle: string;
  pricingGuideTitle: string;
  roomCategoriesLiveRates: string;
  selectRateBasis: string;
  weekdaysLabel: string;
  weekendLabel: string;
  selectOccupancy: string;
  calculatedRate: string;
  approxLabel: string;
  exclTaxes: string;
  includedComfort: string;
  exteriorLabel: string;
  interiorLabel: string;
  selectNationalityRequired: string;
  egyptianIdOption: string;
  nonEgyptianOption: string;
  currencyPreferenceTitle: string;
  egpOption: string;
  usdOption: string;

  // Experience Hub Section
  receptionServices: string;
  receptionServicesDesc: string;
  directConciergeActive: string;
  activitiesTab: string;
  transportationTab: string;
  teambuildingTab: string;
  weddingsTab: string;
  importantBookingNotice: string;
  importantBookingNoticeDesc: string;
  bookedOnSite: string;
  officialTariff: string;
  bookViaConcierge: string;
  privateFleetTransfers: string;
  exclusiveCairoToCamp: string;
  transportDesc: string;
  standardTransfer: string;
  standardCarTitle: string;
  standardCarDesc: string;
  premiumOption: string;
  premiumCarTitle: string;
  premiumCarDesc: string;
  customQuote: string;
  cairoFayoum: string;
  bespokeRetreats: string;
  corporateOutingsTitle: string;
  corporateOutingsDesc: string;
  exclusiveRetreatCapabilities: string;
  exclusiveRetreatCapabilitiesDesc: string;
  cinematicVenue: string;
  weddingsTitle: string;
  weddingsDesc: string;
  tailoredProduction: string;
  tailoredProductionDesc: string;

  // Why Faiyum Section
  whyFayoumTitle: string;
  whyFayoumOpening: string;
  whyFayoumCradleTitle: string;
  whyFayoumCradleDesc: string;
  whyFayoumCommitmentTitle: string;
  whyFayoumCommitmentDesc: string;

  // Management Philosophy Section
  mgmtTitle: string;
  mgmtIntro: string;
  mgmtWhyHeader: string;
  mgmtPioneeringTitle: string;
  mgmtPioneeringDesc: string;
  mgmtEmpoweringTitle: string;
  mgmtEmpoweringDesc: string;
  mgmtFamilyTitle: string;
  mgmtFamilyDesc: string;
  mgmtFooter: string;
}

const translations: Record<Language, TranslationSet> = {
  en: {
    home: "Home",
    accommodations: "Accommodations",
    restaurant: "Lummayya Restaurant",
    experiences: "Gatherings & Experiences",
    policies: "Glamps Rules",
    wadiElRayan: "Wadi El Rayan",
    egypt: "Egypt",
    replay: "Replay",
    nationalityLabel: "Nationality",
    egyptian: "Egyptian",
    nonEgyptian: "Non-Egyptian",
    coordinates: "COORDINATES",
    classification: "CLASSIFICATION",
    classificationValue: "Ultra-Luxe Eco Refuge",
    fayoumEgypt: "WADI EL RAYAN • FAYOUM • EGYPT",
    preloaderEst: "EGYPT • EST. 2021",
    preloaderSilent: "SILENT BOUTIQUE LUXURY",
    preloaderStage0: "Surveying Wadi El Rayan dunes...",
    preloaderStage1: "Tracing geodesic architecture...",
    preloaderStage2: "Curating desert water elements...",
    preloaderStage3: "Perfecting quiet luxury hospitality...",
    exploreRetreat: "EXPLORE THE RETREAT",
    established2021: "ESTABLISHED IN 2021 • THE WILDERNESS COONSOON",
    glampDescription: "A prestigious low-impact luxury glamping retreat, gracefully resting upon the silent golden dunes of the protected Wadi El Rayan territory. Blending raw organic desert authenticity with elite boutique hospitality.",
    conceptPhilosophy: "CONCEPT & PHILOSOPHY",
    redefiningLuxuryTitle: "Redefining Luxury Eco-Tourism",
    sandMeaning: "In Arabic, \"Remal\" means sand. It is the foundation of balance—for without the sand, there would be no forests. Remal el Rayan Glamp was created out of deep love and profound respect for the desert environment, its heritage, and its people.",
    adventureComfort: "We believe that true adventure should never compromise on ultimate comfort. As pioneers of the first luxury glamping experience of its kind in Egypt, we invite our guests to experience the vastness of the desert in style. Through innovative architectural tent structures and glamorous Geodomes, featuring private jacuzzis and starlit showers, we have taken sleeping under the sky to the next level of refined luxury.",
    balanceQuote: "\"Without the sand, there would be no forests.\" — The Foundation of Balance.",
    boardVision: "BOARD & EXECUTIVE VISION",
    strategicRepositioning: "Strategic Repositioning",
    strategicDesc: "Driven by a forward-thinking Board of Directors and a highly strategic management team, our mission extends far beyond boutique hospitality. We are actively leading a strategic shift to revitalize experiential eco-tourism and luxury glamping in Egypt. By leveraging our team's deep hospitality domain expertise, the management is committed to establishing Wadi El Rayan—a supreme UNESCO world heritage vicinity—as a premier global destination for affluent, culturally curious travelers.",
    heritageImpact: "OUR TEAM & COMMUNITY IMPACT",
    sustainableHeritage: "Sustainable Heritage",
    heritageDesc: "Behind every blissful desert moment is our dedicated, world-class team. Operating with an \"Asset-Light\", highly efficient approach, our team seamlessly bridges premium hospitality with local heritage. We closely collaborate with the local community of Fayoum, supporting traditional handcrafted pottery and local artisans. At Remal el Rayan, our leadership and team ensure that your luxury journey directly supports sustainable social impact and environmental preservation.",
    locationPortfolio: "THE LOCATION PORTFOLIO",
    sacredOasisTitle: "A Sacred Oasis inside Wadi El Rayan",
    sacredOasisDesc1: "Wadi El Rayan is a globally recognized, protected natural reserve situated in the Fayoum Governorate, southwest of Cairo. Characterized by its unique desert topography where golden rolling sand ridges dynamically descend into magnificent deep blue saltwater lakes.",
    sacredOasisDesc2: "Remal El Rayan is located deep inside this peaceful protectorate, fully private and protected from nearby light emissions or traffic. Here, light pollution is non-existent, leaving guests with crystal-clear celestial mapping and starlit views straight from the premium dome decks.",
    distanceCairo: "DISTANCE FROM CAIRO",
    distanceCairoVal: "140 KM (2.5 Hrs)",
    sandType: "SAND TYPE",
    sandTypeVal: "Golden Silica Dune",
    nearestWaterbody: "NEAREST WATERBODY",
    nearestWaterbodyVal: "Magic Lake Fayoum",
    placeHistory: "PLACE HISTORY",
    placeHistoryVal: "Starts 2021",
    geoGridMap: "GEOGRAPHIC GRID MAP",
    campLocationMarker: "Camp Location Marker",
    campMarkerDesc: "Set behind the towering protective dune ridges, strictly safeguarding peace and silent relaxation.",
    adminHospitality: "ADMINISTRATION & HOSPITALITY LEADERSHIP",
    orgTeamTitle: "Our Organization Team",
    chairman: "Chairman",
    ceo: "CEO & Co-Founder",
    generalManager: "General Manager",
    restaurantManager: "Restaurant Manager",
    executiveChef: "Executive Chef",
    reservationsManager: "Reservations Manager",
    receptionManager: "Reception Manager",
    accountantManager: "Accountant Manager",
    vipHostingSatellite: "VIP HOSTING SATELLITE",
    exclusiveConciergeInquiries: "EXCLUSIVE CONCIERGE & BOOKING INQUIRIES",
    accomTitle: "REMAL LUXURIOUS GEODOMES",
    accomSub: "ULTRA-LUXURY ARCHITECTURAL SANCTUARIES",
    accomDesc: "Crafted to blend raw desert authenticity with high-end, eye-safe architectural comfort. Each premium dome features double-layered canvas insulation, a private panoramic viewing deck, therapeutic hot tub jacuzzi, and high-fidelity starlit showers.",
    roomBookingNotes: "Room Booking Regulations & Rates Notice",
    egyptianPriceNotice: "Egyptian National ID / Residence permit verification is required at reception. Weekend rates apply Thursday & Friday nights.",
    nonEgyptianPriceNotice: "Non-Egyptian rates are payable in USD or major foreign equivalent. Security deposit is required at check-in.",
    maxGuests: "Max Guests",
    perNight: "per night",
    viewInterior: "View Interior Space",
    viewExterior: "View Outer Dune Deck",
    reserveThisDome: "Reserve this Dome",
    amenitiesLabel: "Boutique Amenities",
    featuresLabel: "Strategic Features",
    lakeDiningTitle: "LUMMAYYA LAKE DINING",
    lakeDiningSub: "DESERT GASTRONOMY BY THE MAGIC LAKE",
    lakeDiningDesc: "Our lakeside kitchen serves authentic, slow-cooked, organic Bedouin and Fayoumi recipes. Every dish is seasoned with fresh native desert herbs and crafted by our local culinary team.",
    breakfastMenu: "Bedouin Breakfast",
    lunchMenu: "Traditional Slow-Cooked Mains",
    dinnerMenu: "Lakeside Grill & Pastries",
    exclVat: "* Menu prices are subject to a 12% Restaurant Service Charge. Day-use packages are exempt.",
    bookingFormTitle: "LUMMAYYA LAKE DINING & DAY-USE REGISTRATION",
    pricingGuideTitle: "INTERACTIVE BILL & QUOTE ESTIMATOR",
    roomCategoriesLiveRates: "ROOM CATEGORIES & LIVE RATES",
    selectRateBasis: "SELECT RATE BASIS",
    weekdaysLabel: "Weekdays (Sun-Wed)",
    weekendLabel: "Weekend (Thu-Sat)",
    selectOccupancy: "SELECT OCCUPANCY",
    calculatedRate: "CALCULATED RATE (BB Basis)",
    approxLabel: "Approx.",
    exclTaxes: "Per night • Excl. Taxes",
    includedComfort: "INCLUDED COMFORT",
    exteriorLabel: "Exterior",
    interiorLabel: "Interior",
    selectNationalityRequired: "SELECT NATIONALITY (REQUIRED)",
    egyptianIdOption: "Egyptian / Resident",
    nonEgyptianOption: "International Guest",
    currencyPreferenceTitle: "CURRENCY PREFERENCE",
    egpOption: "EGP",
    usdOption: "USD ($)",

    // Experience Hub Section
    receptionServices: "RECEPTION & EXPERIENCE HUB",
    receptionServicesDesc: "Pre-book your luxury desert experiences, private fleet transfers, or bespoke corporate team building and cinematic weddings directly via our concierge team.",
    directConciergeActive: "DIRECT CONCIERGE ACTIVE",
    activitiesTab: "Activities",
    transportationTab: "Transportation",
    teambuildingTab: "Team Building",
    weddingsTab: "Weddings & Events",
    importantBookingNotice: "IMPORTANT BOOKING NOTICE",
    importantBookingNoticeDesc: "All activities are subject to weather conditions and must be coordinated with the reception desk at least 24 hours in advance to guarantee placement.",
    bookedOnSite: "BOOKED ON SITE",
    officialTariff: "OFFICIAL TARIFF",
    bookViaConcierge: "Book Via Concierge",
    privateFleetTransfers: "PRIVATE FLEET TRANSFERS",
    exclusiveCairoToCamp: "Exclusive Cairo-to-Camp Private Transfers",
    transportDesc: "Travel from Cairo directly to our luxury camp in Wadi El Rayan in ultimate comfort. We provide premium air-conditioned vehicles with professional drivers who know the desert routes.",
    standardTransfer: "STANDARD TRANSFER",
    standardCarTitle: "Chauffeur SUV (Up to 4 Guests)",
    standardCarDesc: "A private high-comfort SUV transfer starting from Cairo International Airport or any designated Cairo address directly to the campsite.",
    premiumOption: "PREMIUM OPTION",
    premiumCarTitle: "Luxury 4x4 Off-Road (Up to 3 Guests)",
    premiumCarDesc: "For travelers seeking a complete off-road desert adventure experience straight from Cairo. Customized itinerary stops available.",
    customQuote: "CUSTOM QUOTE",
    cairoFayoum: "Cairo to Fayoum",
    bespokeRetreats: "BESPOKE RETREATS",
    corporateOutingsTitle: "Corporate Outings & Strategic Summits",
    corporateOutingsDesc: "Redefine teamwork amongst the dunes. We curate fully customized, luxury team building retreats with outdoor workspaces, slow-fire Bedouin dinners, and desert survival workshops.",
    exclusiveRetreatCapabilities: "EXCLUSIVE RETREAT CAPABILITIES",
    exclusiveRetreatCapabilitiesDesc: "Accommodations up to 40 guests, presentation dome setups, high-speed satellite connectivity, and fully catered team activities.",
    cinematicVenue: "CINEMATIC VENUE",
    weddingsTitle: "Cinematic Desert Weddings",
    weddingsDesc: "Host an unforgettable, ultra-luxurious wedding celebration against the backdrop of Fayoum's rolling dunes and the shimmering Magic Lake. A truly magical setting for your special day.",
    tailoredProduction: "TAILORED PRODUCTION",
    tailoredProductionDesc: "Full-service wedding planning including customized Bedouin-inspired decor, ambient starlit lighting, five-star catering by Lummayya, and native musical performances.",

    // Why Faiyum Section
    whyFayoumTitle: "Why Did We Start in Faiyum?",
    whyFayoumOpening: "At Remal elrayan glamp, our journey began with a vision to make a significant and positive impact. When we looked for a location to start, Faiyum, Egypt, stood out for its unique blend of history, culture, and, most importantly, potential.",
    whyFayoumCradleTitle: "Faiyum: A Cradle of Potential",
    whyFayoumCradleDesc: "Faiyum is one of the oldest cities in the world, with a rich agricultural heritage and a vibrant community. However, like many regions, it faces challenges that present opportunities for growth and sustainable development. We chose Faiyum because we recognized that our innovative solutions and dedication could truly make a difference here.",
    whyFayoumCommitmentTitle: "Our Commitment",
    whyFayoumCommitmentDesc: "Our initial focus in Faiyum is to implement sustainable practices that empower the local community, improve the quality of life, and contribute to the region's overall prosperity. We believe that by starting here, we can set a powerful example for how responsible and thoughtful development can thrive.",

    // Management Philosophy Section
    mgmtTitle: "Our Management Philosophy: Built From Within",
    mgmtIntro: "At Remal, we intentionally reject the traditional route of outsourcing our management to external corporations. Because we are not just running a property—we are pioneering an entirely new ecosystem and defining a new frontier for hospitality in Egypt.\n\nTo lead this movement, our direction—steered by Mostafa Farouk, Mohamed Farouk, and Mohamed Sheta—is rooted in building agile, adaptive systems designed to empower our people and elevate the local market.",
    mgmtWhyHeader: "Why We Manage Our Own Path:",
    mgmtPioneeringTitle: "Pioneering a New Era",
    mgmtPioneeringDesc: "We are establishing a unique model of refined hospitality that cannot be replicated by rigid, cookie-cutter international management firms. By keeping our leadership internal, we maintain the agility to innovate constantly.",
    mgmtEmpoweringTitle: "Empowering the Local Community",
    mgmtEmpoweringDesc: "We believe true sustainability starts with people. Our operational systems are built to nurture, train, and champion local talent, directly driving the economic and professional growth of the community we call home.",
    mgmtFamilyTitle: "The Power of Family & Heritage",
    mgmtFamilyDesc: "We don’t just manage staff; we build a family. Our management style is deeply infused with the authentic traditions, warmth, and values of our land, ensuring that every guest experience feels profoundly grounded and genuinely welcoming.",
    mgmtFooter: "At Remal, we believe that to elevate the future of Egyptian hospitality, the foundation must be built by those who truly understand its soul.",
  },
  ar: {
    home: "الرئيسية",
    accommodations: "أماكن الإقامة",
    restaurant: "مطعم لوميا",
    experiences: "التجمعات والتجارب",
    policies: "قوانين المخيم",
    wadiElRayan: "وادي الريان",
    egypt: "مصر",
    replay: "إعادة التشغيل",
    nationalityLabel: "الجنسية",
    egyptian: "مصرى",
    nonEgyptian: "غير مصرى",
    coordinates: "الإحداثيات الجغرافية",
    classification: "التصنيف الإيكولوجي",
    classificationValue: "ملجأ بيئي فائق الفخامة",
    fayoumEgypt: "وادي الريان • الفيوم • مصر",
    preloaderEst: "مصر • تأسس عام ٢٠٢١",
    preloaderSilent: "فخامة هادئة وراقية",
    preloaderStage0: "مسح كثبان وادي الريان الرملية...",
    preloaderStage1: "رسم الهندسة الجيوديسية للمخيم...",
    preloaderStage2: "تحضير عناصر المياه الصحراوية...",
    preloaderStage3: "إتقان ضيافة الفخامة الهادئة...",
    exploreRetreat: "استكشف الملاذ الصحراوي",
    established2021: "تأسس في عام ٢٠٢١ • واحة البرية الفاخرة",
    glampDescription: "ملاذ تخييم فاخر ومرموق ذو تأثير بيئي منخفض، يستقر بهدوء فوق الكثبان الرملية الذهبية الصامتة لمنطقة وادي الريان المحمية. يمزج بين أصالة الصحراء الطبيعية والضيافة الراقية للنخبة.",
    conceptPhilosophy: "المفهوم والفلسفة والأهداف",
    redefiningLuxuryTitle: "إعادة تعريف السياحة البيئية الفاخرة",
    sandMeaning: "في اللغة العربية، تعني كلمة \"رمال\" الرمال الذهبية. وهي أساس التوازن البيئي - فلولا وجود الرمال لما كانت هناك غابات. تم إنشاء مخيم رمال الريان من منطلق الحب العميق والاحترام الشديد للبيئة الصحراوية وتراثها وأهلها.",
    adventureComfort: "نحن نؤمن بأن المغامرة الحقيقية لا ينبغي أن تساوم أبداً على الراحة المطلقة. كرواد لأول تجربة تخييم فاخرة (Glamping) من نوعها في مصر، ندعو ضيوفنا لتجربة اتساع الصحراء بأناقة ورقي. من خلال هياكل الخيام المعمارية المبتكرة والقباب الجيوديسية الفاخرة التي تتميز بجاكوزي خاص واستحمام تحت ضوء النجوم.",
    balanceQuote: "\"لولا وجود الرمال لما كانت هناك غابات.\" — أساس التوازن البيئي في الصحراء.",
    boardVision: "رؤية مجلس الإدارة والإدارة التنفيذية",
    strategicRepositioning: "إعادة التموضع الاستراتيجي",
    strategicDesc: "مدفوعين بمجلس إدارة تطلعي وفريق إدارة استراتيجي للغاية، فإن مهمتنا تمتد إلى ما هو أبعد من الضيافة الفاخرة. نحن نقود بنشاط تحولاً استراتيجياً لتنشيط السياحة البيئية التجريبية والتخييم الفاخر في مصر. من خلال الاستفادة من الخبرة العميقة لفريقنا في قطاع الضيافة والريادة البيئية.",
    heritageImpact: "تأثير فريقنا على المجتمع المحلي",
    sustainableHeritage: "تراث مستدام وأصيل",
    heritageDesc: "خلف كل لحظة صحراوية سعيدة يقف فريقنا المخصص ذو المستوى العالمي. من خلال العمل بنهج فعال للغاية ومتكامل، يربط فريقنا بسلاسة بين الضيافة المتميزة والتراث البيئي المحلي. نحن نتعاون وثيقًا مع مجتمع الفيوم المحلي، وندعم الخزف اليدوي التقليدي والحرفيين المحليين الموهوبين.",
    locationPortfolio: "الموقع الجغرافي والمحمية",
    sacredOasisTitle: "واحة مقدسة داخل محمية وادي الريان",
    sacredOasisDesc1: "وادي الريان هو محمية طبيعية محمية ومعترف بها عالمياً تقع في محافظة الفيوم جنوب غرب القاهرة. وتتميز بتضاريسها الصحراوية الفريدة حيث تنحدر الكثبان الرملية الذهبية المتموجة ديناميكياً نحو البحيرات المالحة الزرقاء العميقة الخلابة.",
    sacredOasisDesc2: "يقع مخيم رمال الريان في عمق هذه المحمية الهادئة، وهو خاص بالكامل ومحمي من انبعاثات الإضاءة أو حركة المرور المجاورة. التلوث الضوئي هنا منعدم تماماً، مما يوفر للضيوف خرائط سماوية واضحة وضوح الشمس ومناظر خلابة تحت النجوم.",
    distanceCairo: "المسافة من القاهرة",
    distanceCairoVal: "١٤٠ كم (ساعتان ونصف)",
    sandType: "نوع الرمال",
    sandTypeVal: "كثبان السيليكا الذهبية الناعمة",
    nearestWaterbody: "أقرب مسطح مائي",
    nearestWaterbodyVal: "بحيرة السحر بالفيوم",
    placeHistory: "تاريخ المكان والنشاط",
    placeHistoryVal: "يبدأ من عام ٢٠٢١",
    geoGridMap: "الشبكة الجغرافية للموقع",
    campLocationMarker: "مؤشر موقع المخيم الرئيسي",
    campMarkerDesc: "يقع خلف تلال الكثبان الرملية الواقية الشاهقة، مما يضمن الهدوء التام والخصوصية الصامتة والاسترخاء التام.",
    adminHospitality: "الإدارة التنفيذية والقيادة الفندقية",
    orgTeamTitle: "فريق الإدارة والضيافة لدينا",
    chairman: "رئيس مجلس الإدارة",
    ceo: "الرئيس التنفيذي والشريك المؤسس",
    generalManager: "المدير العام للمخيم",
    restaurantManager: "مدير المطعم والأغذية",
    executiveChef: "كبير الطهاة التنفيذيين",
    reservationsManager: "مدير الحجوزات المركزي",
    receptionManager: "مدير الاستقبال والترحيب بالنزلاء",
    accountantManager: "المدير المالي والحسابات",
    vipHostingSatellite: "وحدة استضافة كبار الشخصيات",
    exclusiveConciergeInquiries: "حجوزات واستفسارات كبار الشخصيات المباشرة",
    accomTitle: "القباب الجيوديسية الفاخرة برمال",
    accomSub: "ملاذات معمارية فائقة الفخامة في قلب الصحراء",
    accomDesc: "مصممة لتمزج بين أصالة الصحراء والراحة المعمارية المتطورة الآمنة للعين. تتميز كل قبة متميزة بعزل قماشي مزدوج الطبقات، وشرفة مراقبة بانورامية خاصة، وجاكوزي علاجي ساخن، ودش خارجي مميز تحت النجوم.",
    roomBookingNotes: "لوائح وتعليمات حجز الغرف وأسعار الإقامة",
    egyptianPriceNotice: "يجب تقديم بطاقة الرقم القومي المصري أو تصريح الإقامة الساري عند الوصول. تطبق أسعار عطلة نهاية الأسبوع أيام الخميس والجمعة.",
    nonEgyptianPriceNotice: "تُدفع أسعار غير المصريين بالدولار الأمريكي أو ما يعادله من العملات الأجنبية الرئيسية. يتطلب إيداع تأمين مسترد عند تسجيل الوصول.",
    maxGuests: "أقصى عدد للضيوف",
    perNight: "في الليلة",
    viewInterior: "عرض المساحة الداخلية",
    viewExterior: "عرض الشرفة الخارجية والكثبان",
    reserveThisDome: "احجز هذه القبة الفاخرة",
    amenitiesLabel: "المرافق والخدمات البوتيكية",
    featuresLabel: "الميزات والمواصفات الاستراتيجية",
    lakeDiningTitle: "مطعم بحيرة لوميا الفاخر",
    lakeDiningSub: "فنون الطهي الصحراوي بجانب بحيرة السحر",
    lakeDiningDesc: "يقدم مطبخنا المطل على البحيرة وصفات بدوية وفيومية أصيلة مطبوخة ببطء وعضوية بالكامل. يتم تتبيل كل طبق بالأعشاب الصحراوية الطبيعية الطازجة وإعداده بواسطة فريق الطهي المحلي الموهوب.",
    breakfastMenu: "الفطور البدوي الأصيل",
    lunchMenu: "الأطباق الرئيسية التقليدية المطبوخة ببطء",
    dinnerMenu: "مشويات البحيرة والحلويات الشرقية",
    exclVat: "* أسعار المنيو تخضع لخدمة مطعم بقيمة ١٢٪. باقات اليوم الواحد (Day-use) معفاة تماماً من الخدمة.",
    bookingFormTitle: "تسجيل حجز مطعم لوميا وباقات اليوم الواحد",
    pricingGuideTitle: "حاسبة الأسعار التفاعلية وتقدير الفاتورة",
    roomCategoriesLiveRates: "فئات الغرف والأسعار المباشرة",
    selectRateBasis: "اختر نوع السعر",
    weekdaysLabel: "أيام الأسبوع (الأحد-الأربعاء)",
    weekendLabel: "عطلة نهاية الأسبوع (الخميس-السبت)",
    selectOccupancy: "اختر عدد الأفراد",
    calculatedRate: "السعر المحسوب (شامل الإفطار)",
    approxLabel: "تقريباً",
    exclTaxes: "في الليلة • غير شامل الضرائب",
    includedComfort: "مزايا الراحة المشمولة",
    exteriorLabel: "الخارج",
    interiorLabel: "الداخل",
    selectNationalityRequired: "اختر الجنسية (مطلوب)",
    egyptianIdOption: "مواطن مصري / مقيم",
    nonEgyptianOption: "نزيل دولي (أجنبي)",
    currencyPreferenceTitle: "العملة المفضلة",
    egpOption: "جنيه مصري",
    usdOption: "دولار أمريكي ($)",

    // Experience Hub Section
    receptionServices: "مركز خدمات الاستقبال والأنشطة",
    receptionServicesDesc: "احجز مسبقاً تجاربك الصحراوية الفاخرة، أو انتقالات أسطولنا الخاص، أو تنظيم الفعاليات المؤسسية وحفلات الزفاف السينمائية مباشرة من خلال فريق الكونسيرج.",
    directConciergeActive: "الكونسيرج المباشر نشط الآن",
    activitiesTab: "الأنشطة الصحراوية",
    transportationTab: "وسائل النقل",
    teambuildingTab: "بناء فرق العمل",
    weddingsTab: "حفلات الزفاف والفعاليات",
    importantBookingNotice: "ملاحظة هامة للحجز",
    importantBookingNoticeDesc: "جميع الأنشطة تخضع لظروف الطقس ويجب تنسيقها مع مكتب الاستقبال قبل ٢٤ ساعة على الأقل لضمان الحجز.",
    bookedOnSite: "يُحجز في الموقع",
    officialTariff: "التعريفة الرسمية",
    bookViaConcierge: "احجز عبر الكونسيرج",
    privateFleetTransfers: "انتقالات الأسطول الخاص",
    exclusiveCairoToCamp: "انتقالات خاصة وحصرية من القاهرة إلى المخيم",
    transportDesc: "سافر من القاهرة مباشرة إلى مخيمنا الفاخر في وادي الريان بمنتهى الراحة. نوفر سيارات دفع رباعي فاخرة ومكيفة مع سائقين محترفين على دراية كاملة بالطرق الصحراوية.",
    standardTransfer: "انتقال قياسي",
    standardCarTitle: "سيارة عائلية SUV مع سائق (حتى ٤ ضيوف)",
    standardCarDesc: "انتقال خاص ومريح للغاية بسيارة SUV من مطار القاهرة الدولي أو أي عنوان محدد في القاهرة مباشرة إلى المخيم.",
    premiumOption: "خيار بريميوم فاخر",
    premiumCarTitle: "سيارة دفع رباعي فاخرة 4x4 (حتى ٣ ضيوف)",
    premiumCarDesc: "للمسافرين الذين يبحثون عن مغامرة صحراوية كاملة وتجربة الطرق الوعرة مباشرة من القاهرة، مع إمكانية التوقف في محطات سياحية مخصصة.",
    customQuote: "تسعير مخصص",
    cairoFayoum: "القاهرة إلى الفيوم",
    bespokeRetreats: "خلوات مخصصة للمؤسسات",
    corporateOutingsTitle: "رحلات الشركات والقمم الاستراتيجية",
    corporateOutingsDesc: "أعد تعريف العمل الجماعي بين الكثبان الرملية. نحن ننظم خلوات مخصصة بالكامل لبناء فرق العمل مع مساحات عمل خارجية، وعشاء بدوي فاخر، وورش عمل للتأقلم مع الحياة الصحراوية.",
    exclusiveRetreatCapabilities: "قدرات استيعاب الخلوات الحصرية",
    exclusiveRetreatCapabilitiesDesc: "أماكن إقامة تتسع لما يصل إلى ٤٠ ضيفاً، وتجهيزات قبة العروض التقديمية، واتصال إنترنت سريع عبر الأقمار الصناعية، وأنشطة ترفيهية متكاملة.",
    cinematicVenue: "موقع زفاف سينمائي",
    weddingsTitle: "حفلات الزفاف الصحراوية الأسطورية",
    weddingsDesc: "استضف حفل زفاف لا يُنسى وفائق الفخامة على خلفية الكثبان الرملية المتموجة بالفيوم ومياه بحيرة ماجيك الساحرة. موقع ساحر بحق ليومك المميز.",
    tailoredProduction: "إنتاج وتجهيز متكامل مخصص",
    tailoredProductionDesc: "خدمة تخطيط حفل الزفاف بالكامل بما في ذلك الديكورات المستوحاة من التراث البدوي، والإضاءة الليلية الرومانسية تحت النجوم، وبوفيه فاخر من مطعم لوميا، وعروض موسيقية حية.",

    // Why Faiyum Section
    whyFayoumTitle: "لماذا بدأنا رحلتنا من الفيوم؟",
    whyFayoumOpening: "في رمال الريان، بدأت رحلتنا برؤية تهدف إلى إحداث تأثير إيجابي كبير ومستدام. وعندما بحثنا عن موقع مثالي للانطلاق، برزت واحة الفيوم في مصر بمزيجها الفريد من التاريخ والثقافة والأهم من ذلك كله، إمكاناتها الواعدة الكبيرة.",
    whyFayoumCradleTitle: "الفيوم: مهد الإمكانات والفرص الواعدة",
    whyFayoumCradleDesc: "تعد الفيوم واحدة من أقدم المدن المأهولة في العالم، وتتميز بتراث زراعي غني ومجتمع حيوي مفعم بالحياة. ومع ذلك، وكالعديد من المناطق الأخرى، فإنها تواجه تحديات تفتح في ذات الوقت آفاقاً واسعة للنمو والتنمية المستدامة. لقد اخترنا الفيوم لأننا أدركنا أن حلولنا المبتكرة وتفانينا في العمل يمكن أن يحدثا فرقًا حقيقيًا وملموسًا هنا.",
    whyFayoumCommitmentTitle: "التزامنا ورسالتنا",
    whyFayoumCommitmentDesc: "ينصب تركيزنا الأولي في الفيوم على تطبيق ممارسات التنمية المستدامة التي تمكّن المجتمع المحلي، وترفع من جودة الحياة، وتساهم بشكل فعال في الازدهار الشامل للمنطقة. نحن نؤمن بأن البدء من هنا سيمهد الطريق لتقديم نموذج يحتذى به في كيفية ازدهار التنمية المسؤولة والواعية.",

    // Management Philosophy Section
    mgmtTitle: "فلسفتنا الإدارية: نابعة من الداخل",
    mgmtIntro: "في رمال، نرفض بوعي وبتعمد المسار التقليدي المتمثل في إسناد إدارتنا لشركات خارجية. لأننا لا ندير مجرد منتجع—بل نبتكر نظاماً بيئياً جديداً بالكامل ونعيد تعريف آفاق الضيافة الفاخرة في مصر.\n\nولقيادة هذه الحركة، فإن توجهنا الإداري—تحت قيادة مصطفى فاروق، ومحمد فاروق، ومحمد شتا—يضرب بجذوره في بناء أنظمة مرنة ومتكيفة مصممة لتمكين كوادرنا والارتقاء بالسوق المحلي.",
    mgmtWhyHeader: "لماذا ندير مسارنا بأنفسنا:",
    mgmtPioneeringTitle: "ريادة حقبة جديدة",
    mgmtPioneeringDesc: "نحن نؤسس نموذجاً فريداً للضيافة الراقية لا يمكن تكراره من قبل شركات الإدارة الدولية الجامدة ذات النماذج النمطية المكررة. فمن خلال إبقاء قيادتنا داخلية، نحافظ على المرونة اللازمة للابتكار المستمر.",
    mgmtEmpoweringTitle: "تمكين المجتمع المحلي",
    mgmtEmpoweringDesc: "نحن نؤمن بأن الاستدامة الحقيقية تبدأ بالإنسان. وقد صُممت أنظمتنا التشغيلية لرعاية المواهب المحلية وتدريبها ودعمها، مما يدفع بشكل مباشر النمو الاقتصادي والمهني للمجتمع الذي نعتبره بيتنا.",
    mgmtFamilyTitle: "قوة العائلة والتراث",
    mgmtFamilyDesc: "نحن لا ندير مجرد موظفين، بل نبني عائلة واحدة. إن أسلوبنا الإداري مشبع بعمق بالتقاليد الأصيلة ودفء وقيم أرضنا، مما يضمن أن يشعر كل ضيف بتجربة ضيافة حقيقية ودافئة ونابعة من وجدان الأرض.",
    mgmtFooter: "في رمال، نؤمن بأن الارتقاء بمستقبل الضيافة المصرية يبدأ من وضع أساس متين يبنيه أولئك الذين يفهمون روحها الحقيقية.",
  },
  es: {
    home: "Inicio",
    accommodations: "Alojamientos",
    restaurant: "Restaurante Lummayya",
    experiences: "Encuentros y Experiencias",
    policies: "Reglas del Glamp",
    wadiElRayan: "Wadi El Rayan",
    egypt: "Egipto",
    replay: "Reiniciar",
    nationalityLabel: "Nacionalidad",
    egyptian: "Egipcio",
    nonEgyptian: "No Egipcio",
    coordinates: "COORDENADAS",
    classification: "CLASIFICACIÓN",
    classificationValue: "Eco-Refugio de Ultra Lujo",
    fayoumEgypt: "WADI EL RAYAN • FAYOUM • EGIPTO",
    preloaderEst: "EGIPTO • EST. 2021",
    preloaderSilent: "LUJO BOUTIQUE SILENCIOSO",
    preloaderStage0: "Explorando dunas de Wadi El Rayan...",
    preloaderStage1: "Trazando arquitectura geodésica...",
    preloaderStage2: "Curando elementos de agua del desierto...",
    preloaderStage3: "Perfeccionando la hospitalidad de lujo silencioso...",
    exploreRetreat: "EXPLORAR EL REFUGIO",
    established2021: "ESTABLECIDO EN 2021 • EL MONZÓN DE LA NATURALEZA",
    glampDescription: "Un prestigioso refugio de glamping de lujo de bajo impacto, descansando elegantemente sobre las dunas doradas del territorio protegido de Wadi El Rayan. Fusionando la autenticidad del desierto orgánico con la hospitalidad boutique de élite.",
    conceptPhilosophy: "CONCEPTO Y FILOSOFÍA",
    redefiningLuxuryTitle: "Redefiniendo el Eco-Turismo de Lujo",
    sandMeaning: "En árabe, \"Remal\" significa arena. Es la base del equilibrio, porque sin la arena, no habría bosques. Remal el Rayan Glamp fue creado por un profundo amor y respeto por el desierto, su patrimonio y su gente.",
    adventureComfort: "Creemos que la verdadera aventura nunca debe comprometer la máxima comodidad. Como pioneros del primer glamping de lujo en Egipto, invitamos a nuestros huéspedes a experimentar la inmensidad del desierto con estilo. A través de domos geodésicos con jacuzzi privado y duchas iluminadas por las estrellas.",
    balanceQuote: "\"Sin la arena, no habría bosques.\" — El Fundamento del Equilibrio.",
    boardVision: "VISIÓN DIRECTIVA Y EJECUTIVA",
    strategicRepositioning: "Reposicionamiento Estratégico",
    strategicDesc: "Impulsados por una Junta Directiva visionaria y un equipo de gestión altamente estratégico, nuestra misión va más allá de la hospitalidad boutique. Estamos liderando activamente un cambio estratégico para revitalizar el turismo ecológico experiencial y el glamping de lujo en Egipto, posicionando a Wadi El Rayan a nivel global.",
    heritageImpact: "NUESTRO EQUIPO E IMPACTO COMUNITARIO",
    sustainableHeritage: "Patrimonio Sostenible",
    heritageDesc: "Detrás de cada momento inolvidable está nuestro equipo de clase mundial. Operando con un enfoque eficiente, unimos la hospitalidad premium con el patrimonio local. Colaboramos estrechamente con la comunidad local de Fayoum, apoyando la cerámica tradicional artesanal.",
    locationPortfolio: "EL PORTAFOLIO DE UBICACIÓN",
    sacredOasisTitle: "Un Oasis Sagrado dentro de Wadi El Rayan",
    sacredOasisDesc1: "Wadi El Rayan es una reserva natural protegida reconocida mundialmente, situada en la gobernación de Fayoum. Caracterizada por su topografía desértica única donde las dunas de arena dorada descienden hacia magníficos lagos de agua salada azul profundo.",
    sacredOasisDesc2: "Remal El Rayan se encuentra en el corazón de esta tranquila reserva, totalmente privada y protegida de la contaminación lumínica o del tráfico, ofreciendo vistas celestiales cristalinas directamente desde las cubiertas premium.",
    distanceCairo: "DISTANCIA DESDE EL CAIRO",
    distanceCairoVal: "140 KM (2.5 Horas)",
    sandType: "TIPO DE ARENA",
    sandTypeVal: "Duna de Sílice Dorada",
    nearestWaterbody: "CUERPO DE AGUA CERCANO",
    nearestWaterbodyVal: "Lago Mágico de Fayoum",
    placeHistory: "HISTORIA DEL LUGAR",
    placeHistoryVal: "Inicia en 2021",
    geoGridMap: "MAPA DE RED GEOGRÁFICA",
    campLocationMarker: "Marcador de Ubicación del Campamento",
    campMarkerDesc: "Situado detrás de las imponentes dunas protectoras, salvaguardando estrictamente la paz y el relax silencioso.",
    adminHospitality: "ADMINISTRACIÓN Y LIDERAZGO DE HOSPITALIDAD",
    orgTeamTitle: "Nuestro Equipo de Organización",
    chairman: "Presidente",
    ceo: "CEO y Co-Fundador",
    generalManager: "Gerente General",
    restaurantManager: "Gerente de Restaurante",
    executiveChef: "Chef Ejecutivo",
    reservationsManager: "Gerente de Reservas",
    receptionManager: "Gerente de Recepción",
    accountantManager: "Gerente de Contabilidad",
    vipHostingSatellite: "SATÉLITE DE HOSPEDAJE VIP",
    exclusiveConciergeInquiries: "CONSULTAS EXCLUSIVAS DE CONSERJERÍA Y RESERVAS",
    accomTitle: "DOMOS GEODÉSICOS DE LUJO REMAL",
    accomSub: "SANTUARIOS ARQUITECTÓNICOS DE ULTRA LUJO",
    accomDesc: "Diseñados para combinar la autenticidad del desierto con el máximo confort arquitectónico. Cada domo premium cuenta con aislamiento de doble capa, terraza de observación panorámica privada, jacuzzi terapéutico y ducha bajo las estrellas.",
    roomBookingNotes: "Aviso de Tarifas y Normativa de Reserva de Habitaciones",
    egyptianPriceNotice: "Se requiere verificación de identificación nacional o permiso de residencia egipcio al registrarse. Las tarifas de fin de semana se aplican los jueves y viernes.",
    nonEgyptianPriceNotice: "Las tarifas para no egipcios se pagan en USD o su equivalente en divisas principales. Se requiere un depósito de seguridad al registrarse.",
    maxGuests: "Máx. Huéspedes",
    perNight: "por noche",
    viewInterior: "Ver Espacio Interior",
    viewExterior: "Ver Terraza Exterior",
    reserveThisDome: "Reservar este Domo",
    amenitiesLabel: "Servicios de Boutique",
    featuresLabel: "Características Estratégicas",
    lakeDiningTitle: "RESTAURANTE DE LAGO LUMMAYYA",
    lakeDiningSub: "GASTRONOMÍA DEL DESIERTO JUNTO AL LAGO MÁGICO",
    lakeDiningDesc: "Nuestra cocina junto al lago sirve recetas auténticas, de cocción lenta y orgánicas beduinas y fayoumíes. Cada plato está sazonado con hierbas nativas del desierto y elaborado por nuestro equipo culinario local.",
    breakfastMenu: "Desayuno Beduino",
    lunchMenu: "Platos Principales de Cocción Lenta",
    dinnerMenu: "Parrillada junto al Lago y Repostería",
    exclVat: "* Los precios del menú están sujetos a un cargo de servicio del restaurante del 12%. Los paquetes de día están exentos.",
    bookingFormTitle: "REGISTRO DE RESTAURANTE Y PAQUETES DE DÍA LUMMAYYA",
    pricingGuideTitle: "ESTIMADOR INTERACTIVO DE CUOTA Y FACTURA",
    roomCategoriesLiveRates: "CATEGORÍAS DE HABITACIÓN Y TARIFAS EN VIVO",
    selectRateBasis: "SELECCIONAR BASE DE TARIFA",
    weekdaysLabel: "Días laborables (Dom-Mié)",
    weekendLabel: "Fin de semana (Jue-Sáb)",
    selectOccupancy: "SELECCIONAR OCUPACIÓN",
    calculatedRate: "TARIFA CALCULADA (Régimen AD)",
    approxLabel: "Aprox.",
    exclTaxes: "Por noche • Excl. Impuestos",
    includedComfort: "CONFORT INCLUIDO",
    exteriorLabel: "Exterior",
    interiorLabel: "Interior",
    selectNationalityRequired: "SELECCIONAR NACIONALIDAD (REQUERIDO)",
    egyptianIdOption: "Egipcio / Residente",
    nonEgyptianOption: "Huésped Internacional",
    currencyPreferenceTitle: "PREFERENCIA DE MONEDA",
    egpOption: "EGP",
    usdOption: "USD ($)",

    // Experience Hub Section
    receptionServices: "RECEPCIÓN Y CENTRO DE EXPERIENCIAS",
    receptionServicesDesc: "Reserve con anticipación sus experiencias de lujo en el desierto, traslados privados en flota o bodas cinematográficas y eventos corporativos directamente con nuestro equipo de conserjería.",
    directConciergeActive: "CONSERJERÍA DIRECTA ACTIVA",
    activitiesTab: "Actividades",
    transportationTab: "Transporte",
    teambuildingTab: "Trabajo en Equipo",
    weddingsTab: "Bodas y Eventos",
    importantBookingNotice: "AVISO IMPORTANTE DE RESERVA",
    importantBookingNoticeDesc: "Todas las actividades están sujetas a las condiciones climáticas y deben coordinarse con recepción con al menos 24 horas de anticipación para garantizar su disponibilidad.",
    bookedOnSite: "RESERVADO EN EL SITIO",
    officialTariff: "TARIFA OFICIAL",
    bookViaConcierge: "Reservar por Conserjería",
    privateFleetTransfers: "TRASLADOS PRIVADOS DE FLOTA",
    exclusiveCairoToCamp: "Traslados Privados Exclusivos de El Cairo al Campamento",
    transportDesc: "Viaje desde El Cairo directamente a nuestro campamento de lujo en Wadi El Rayan con la máxima comodidad. Ofrecemos vehículos premium con aire acondicionado y conductores profesionales que conocen las rutas del desierto.",
    standardTransfer: "TRASLADO ESTÁNDAR",
    standardCarTitle: "SUV con Chófer (Hasta 4 Personas)",
    standardCarDesc: "Un traslado privado en SUV de alto confort desde el Aeropuerto Internacional de El Cairo o cualquier dirección en El Cairo directamente al campamento.",
    premiumOption: "OPCIÓN PREMIUM",
    premiumCarTitle: "Vehículo 4x4 de Lujo (Hasta 3 Personas)",
    premiumCarDesc: "Para viajeros que buscan una experiencia completa de aventura desértica todoterreno directamente desde El Cairo. Paradas turísticas personalizadas disponibles.",
    customQuote: "COTIZACIÓN PERSONALIZADA",
    cairoFayoum: "El Cairo a Fayoum",
    bespokeRetreats: "RETIROS PERSONALIZADOS",
    corporateOutingsTitle: "Salidas Corporativas y Cumbres Estratégicas",
    corporateOutingsDesc: "Redefina el trabajo en equipo en las dunas. Organizamos retiros de lujo totalmente personalizados con espacios de trabajo al aire libre, cenas beduinas y talleres de supervivencia en el desierto.",
    exclusiveRetreatCapabilities: "CAPACIDADES EXCLUSIVAS PARA RETIROS",
    exclusiveRetreatCapabilitiesDesc: "Alojamiento para hasta 40 personas, domos de presentación, conexión satelital de alta velocidad y actividades de equipo con servicio completo de catering.",
    cinematicVenue: "LUGAR CINEMATOGRÁFICO",
    weddingsTitle: "Bodas Cinematográficas en el Desierto",
    weddingsDesc: "Celebre una boda inolvidable y ultra lujosa con el telón de fondo de las dunas de Fayoum y el brillante Lago Mágico. Un escenario verdaderamente mágico para su día especial.",
    tailoredProduction: "PRODUCCIÓN A MEDIDA",
    tailoredProductionDesc: "Servicio completo de planificación de bodas que incluye decoración personalizada de inspiración beduina, iluminación ambiental bajo las estrellas, catering de cinco estrellas de Lummayya y actuaciones musicales en vivo.",

    // Why Faiyum Section
    whyFayoumTitle: "¿Por qué empezamos en Fayoum?",
    whyFayoumOpening: "En Remal elrayan glamp, nuestro viaje comenzó con la visión de lograr un impacto significativo y positivo. Cuando buscamos un lugar para comenzar, Fayoum, Egipto, se destacó por su combinación única de historia, cultura y, lo más importante, potencial.",
    whyFayoumCradleTitle: "Fayoum: Una Cuna de Potencial",
    whyFayoumCradleDesc: "Fayoum es una de las ciudades más antiguas del mundo, con una rica herencia agrícola y una comunidad vibrante. Sin embargo, como muchas regiones, enfrenta desafíos que presentan oportunidades de crecimiento y desarrollo sostenible. Elegimos Fayoum porque reconocimos que nuestras soluciones innovadoras y dedicación realmente podían marcar la diferencia aquí.",
    whyFayoumCommitmentTitle: "Nuestro Compromiso",
    whyFayoumCommitmentDesc: "Nuestro enfoque inicial en Fayoum es implementar prácticas sostenibles que empoderen a la comunidad local, mejoren la calidad de vida y contribuyan a la prosperidad general de la región. Creemos que al comenzar aquí, podemos establecer un poderoso ejemplo de cómo el desarrollo responsable y reflexivo puede prosperar.",

    // Management Philosophy Section
    mgmtTitle: "Nuestra Filosofía de Gestión: Construida desde Adentro",
    mgmtIntro: "En Remal, rechazamos intencionalmente la ruta tradicional de subcontratar nuestra administración a corporaciones externas. Porque no solo operamos una propiedad, estamos liderando un ecosistema completamente nuevo y definiendo una nueva frontera para la hospitalidad en Egipto.\n\nPara liderar este movimiento, nuestra dirección —guiada por Mostafa Farouk, Mohamed Farouk y Mohamed Sheta— se arraiga en la construcción de sistemas ágiles y adaptables diseñados para empoderar a nuestra gente y elevar el mercado local.",
    mgmtWhyHeader: "¿Por qué gestionamos nuestro propio camino?:",
    mgmtPioneeringTitle: "Pioneros de una Nueva Era",
    mgmtPioneeringDesc: "Estamos estableciendo un modelo único de hospitalidad refinada que no puede ser replicado por firmas de gestión internacional rígidas y estandarizadas. Al mantener nuestro liderazgo de manera interna, conservamos la agilidad para innovar constantemente.",
    mgmtEmpoweringTitle: "Empoderando a la Comunidad Local",
    mgmtEmpoweringDesc: "Creemos que la verdadera sostenibilidad comienza con la gente. Nuestros sistemas operativos están diseñados para nutrir, capacitar y defender el talento local, impulsando directamente el crecimiento económico y profesional de la comunidad a la que llamamos hogar.",
    mgmtFamilyTitle: "El Poder de la Familia y la Herencia",
    mgmtFamilyDesc: "No solo gestionamos personal; construimos una familia. Nuestro estilo de gestión está profundamente impregnado de las auténticas tradiciones, calidez y valores de nuestra tierra, asegurando que la experiencia de cada huésped se sienta profundamente conectada y genuinamente acogedora.",
    mgmtFooter: "En Remal, creemos que para elevar el futuro de la hospitalidad egipcia, los cimientos deben ser construivos por quienes realmente entienden su alma.",
  },
  fr: {
    home: "Accueil",
    accommodations: "Hébergements",
    restaurant: "Restaurant Lummayya",
    experiences: "Rassemblements & Expériences",
    policies: "Règles du Glamp",
    wadiElRayan: "Wadi El Rayan",
    egypt: "Égypte",
    replay: "Rejouer",
    nationalityLabel: "Nationalité",
    egyptian: "Égyptien",
    nonEgyptian: "Non-Égyptien",
    coordinates: "COORDONNÉES",
    classification: "CLASSIFICATION",
    classificationValue: "Éco-Refuge d'Ultra-Luxe",
    fayoumEgypt: "WADI EL RAYAN • FAYOUM • ÉGYPTE",
    preloaderEst: "ÉGYPTE • EST. 2021",
    preloaderSilent: "LUXE BOUTIQUE SILENCIEUX",
    preloaderStage0: "Arpentage des dunes de Wadi El Rayan...",
    preloaderStage1: "Tracé de l'architecture géodésique...",
    preloaderStage2: "Sélection des éléments aquatiques du désert...",
    preloaderStage3: "Perfectionnement de l'hospitalité de luxe silencieuse...",
    exploreRetreat: "EXPLORER LE REFUGE",
    established2021: "ÉTABLI EN 2021 • LA MOUSSON DE LA NATURE",
    glampDescription: "Un prestigieux refuge de glamping de luxe à faible impact environnemental, reposant élégamment sur les dunes dorées du territoire protégé de Wadi El Rayan. Fusionnant l'authenticité organique du désert avec une hospitalité boutique d'élite.",
    conceptPhilosophy: "CONCEPT & PHILOSOPHIE",
    redefiningLuxuryTitle: "Redéfinir l'Écotourisme de Luxe",
    sandMeaning: "En arabe, \"Remal\" signifie sable. C'est le fondement de l'équilibre — car sans le sable, il n'y aurait pas de forêts. Le Glamp Remal el Rayan a été créé par amour et profond respect pour l'environnement désertique, son patrimoine et ses habitants.",
    adventureComfort: "Nous pensons que l'aventure véritable ne doit jamais compromettre le confort absolu. En tant que pionniers du premier glamping de luxe en Égypte, nous invitons nos clients à vivre l'immensité du désert avec style grâce à des dômes géodésiques équipés de jacuzzis privés.",
    balanceQuote: "\"Sans le sable, il n'y aurait pas de forêts.\" — Le Fondement de l'Équilibre.",
    boardVision: "VISION DIRECTORIALE & EXÉCUTIVE",
    strategicRepositioning: "Repositionnement Stratégique",
    strategicDesc: "Portés par un conseil d'administration visionnaire et une équipe de gestion stratégique, notre mission dépasse la simple hospitalité. Nous menons une transition pour revitaliser l'écotourisme d'expérience et le glamping de luxe en Égypte, établissant Wadi El Rayan comme une destination mondiale incontournable.",
    heritageImpact: "NOTRE ÉQUIPE & IMPACT COMMUNAUTAIRE",
    sustainableHeritage: "Patrimoine Durable",
    heritageDesc: "Derrière chaque moment d'évasion se trouve notre équipe de classe mondiale. Alliant efficacité et respect du patrimoine local, nous collaborons avec la communauté de Fayoum en soutenant la poterie artisanale traditionnelle.",
    locationPortfolio: "LE PORTFOLIO DE L'EMPLACEMENT",
    sacredOasisTitle: "Une Oasis Sacrée au Cœur de Wadi El Rayan",
    sacredOasisDesc1: "Wadi El Rayan est une réserve naturelle protégée de renommée mondiale, située dans le gouvernorat de Fayoum. Elle se caractérise par une topographie unique où les dunes dorées plongent dans de magnifiques lacs d'eau salée bleu profond.",
    sacredOasisDesc2: "Remal El Rayan est situé au cœur de cette réserve paisible, entièrement privée et préservée de toute pollution lumineuse, offrant une vue céleste pure depuis les terrasses de nos dômes.",
    distanceCairo: "DISTANCE DE CAIRE",
    distanceCairoVal: "140 KM (2.5 Heures)",
    sandType: "TYPE DE SABLE",
    sandTypeVal: "Dune de Silice Dorée",
    nearestWaterbody: "PLAN D'EAU LE PLUS PROCHE",
    nearestWaterbodyVal: "Lac Magique de Fayoum",
    placeHistory: "HISTORIQUE",
    placeHistoryVal: "Depuis 2021",
    geoGridMap: "CARTE GÉOGRAPHIQUE",
    campLocationMarker: "Repère d'Emplacement du Camp",
    campMarkerDesc: "Situé derrière de majestueuses crêtes de dunes protectrices, garantissant une paix absolue et un repos silencieux.",
    adminHospitality: "ADMINISTRATION & DIRECTION DE L'HOSPITALITÉ",
    orgTeamTitle: "Notre Équipe d'Organisation",
    chairman: "Président",
    ceo: "Directeur Général & Co-Fondateur",
    generalManager: "Directeur d'Établissement",
    restaurantManager: "Directeur du Restaurant",
    executiveChef: "Chef Exécutif",
    reservationsManager: "Responsable des Réservations",
    receptionManager: "Responsable de la Réception",
    accountantManager: "Responsable Comptable",
    vipHostingSatellite: "SATELLITE D'ACCUEIL VIP",
    exclusiveConciergeInquiries: "REQUÊTES DIRECTES DE CONCIERGERIE ET RÉSERVATIONS",
    accomTitle: "DÔMES GÉODÉSIQUES DE LUXE REMAL",
    accomSub: "SANCTUAIRES ARCHITECTURAUX D'ULTRA-LUXE",
    accomDesc: "Conçus pour allier l'authenticité brute du désert au confort architectural haut de gamme. Chaque dôme dispose d'une isolation double couche, d'une terrasse panoramique privée, d'un jacuzzi thérapeutique et d'une douche étoilée.",
    roomBookingNotes: "Réglementation des Chambres et Grille Tarifaire",
    egyptianPriceNotice: "La carte d'identité égyptienne ou le permis de séjour est requis à la réception. Les tarifs du week-end s'appliquent les nuits de jeudi et vendredi.",
    nonEgyptianPriceNotice: "Les tarifs non-égyptiens sont payables en USD ou l'équivalent en devises majeures. Un dépôt de garantie est requis à l'arrivée.",
    maxGuests: "Capacité Max",
    perNight: "par nuit",
    viewInterior: "Voir l'Intérieur",
    viewExterior: "Voir la Terrasse Extérieure",
    reserveThisDome: "Réserver ce Dôme",
    amenitiesLabel: "Équipements Boutique",
    featuresLabel: "Caractéristiques Stratégiques",
    lakeDiningTitle: "RESTAURANT DU LAC LUMMAYYA",
    lakeDiningSub: "GASTRONOMIE DU DÉSERT AU BORD DU LAC MAGIQUE",
    lakeDiningDesc: "Notre cuisine au bord du lac propose d'authentiques recettes bédouines et fayoumies, mijotées lentement et biologiques. Chaque plat est assaisonné d'herbes indigènes et préparé par notre équipe culinaire locale.",
    breakfastMenu: "Petit-Déjeuner Bédouin",
    lunchMenu: "Plats Traditionnels Mijotés",
    dinnerMenu: "Grillades au bord du Lac & Pâtisseries",
    exclVat: "* Les prix du menu sont soumis à des frais de service de restaurant de 12%. Les forfaits journée en sont exemptés.",
    bookingFormTitle: "INSCRIPTION RESTAURANT & FORFAITS JOURNÉE LUMMAYYA",
    pricingGuideTitle: "ESTIMATEUR INTERACTIF DE FACTURE ET TARIF",
    roomCategoriesLiveRates: "CATÉGORIES DE CHAMBRE & TARIFS EN DIRECT",
    selectRateBasis: "SÉLECTIONNER LA BASE DU TARIF",
    weekdaysLabel: "Semaine (Dim-Mer)",
    weekendLabel: "Week-end (Jeu-Sam)",
    selectOccupancy: "SÉLECTIONNER L'OCCUPATION",
    calculatedRate: "TARIF CALCULÉ (Formule Petit-Déjeuner)",
    approxLabel: "Env.",
    exclTaxes: "Par nuit • Hors Taxes",
    includedComfort: "CONFORT INCLUS",
    exteriorLabel: "Extérieur",
    interiorLabel: "Intérieur",
    selectNationalityRequired: "SÉLECTIONNER LA NATIONALITÉ (REQUIS)",
    egyptianIdOption: "Égyptien / Résident",
    nonEgyptianOption: "Client International",
    currencyPreferenceTitle: "PREFÉRENCE DE DEVISE",
    egpOption: "EGP",
    usdOption: "USD ($)",

    // Experience Hub Section
    receptionServices: "RÉCEPTION & CENTRE D'EXPÉRIENCES",
    receptionServicesDesc: "Pré-réservez vos expériences de luxe dans le désert, vos transferts privés ou vos mariages cinématographiques et séminaires d'entreprise directement auprès de notre équipe de conciergerie.",
    directConciergeActive: "CONCIERGERIE DIRECTE ACTIVE",
    activitiesTab: "Activités",
    transportationTab: "Transport",
    teambuildingTab: "Cohésion d'Équipe",
    weddingsTab: "Mariages & Événements",
    importantBookingNotice: "AVIS IMPORTANT DE RÉSERVATION",
    importantBookingNoticeDesc: "Toutes les activités sont soumises aux conditions météorologiques et doivent être coordonnées avec la réception au moins 24 heures à l'avance pour garantir leur disponibilité.",
    bookedOnSite: "RÉSERVÉ SUR PLACE",
    officialTariff: "TARIF OFFICIEL",
    bookViaConcierge: "Réserver via Concierge",
    privateFleetTransfers: "TRANSFERTS PRIVÉS",
    exclusiveCairoToCamp: "Transferts Privés Exclusifs de Le Caire au Camp",
    transportDesc: "Voyagez depuis Le Caire directement vers notre camp de luxe à Wadi El Rayan dans un confort ultime. Nous proposons des véhicules haut de gamme climatisés avec des chauffeurs professionnels.",
    standardTransfer: "TRANSFERT STANDARD",
    standardCarTitle: "SUV avec Chauffeur (Jusqu'à 4 Personnes)",
    standardCarDesc: "Un transfert privé en SUV grand confort depuis l'aéroport international du Caire ou toute adresse au Caire directement vers le camp.",
    premiumOption: "OPTION PREMIUM",
    premiumCarTitle: "4x4 de Luxe Tout-Terrain (Jusqu'à 3 Personnes)",
    premiumCarDesc: "Pour les voyageurs en quête d'une véritable aventure tout-terrain dans le désert directement depuis Le Caire. Arrêts personnalisés disponibles.",
    customQuote: "DEVIS SUR MESURE",
    cairoFayoum: "Le Caire à Fayoum",
    bespokeRetreats: "SÉMINAIRES SUR MESURE",
    corporateOutingsTitle: "Séminaires d'Entreprise & Sommets Stratégiques",
    corporateOutingsDesc: "Redéfinissez le travail d'équipe au milieu des dunes. Nous organisons des séminaires de cohésion entièrement personnalisés avec des espaces de travail en plein air, des dîners bédouins et des ateliers de survie dans le désert.",
    exclusiveRetreatCapabilities: "CAPACITÉS EXCLUSIVES POUR SÉMINAIRES",
    exclusiveRetreatCapabilitiesDesc: "Hébergement pour jusqu'à 40 personnes, dômes de présentation, connexion satellite haut débit et activités d'équipe avec service traiteur complet.",
    cinematicVenue: "CADRE CINÉMATOGRAPHIQUE",
    weddingsTitle: "Mariages Cinématographiques dans le Désert",
    weddingsDesc: "Organisez une célébration de mariage inoubliable et ultra-luxueuse sur fond de dunes ondoyantes de Fayoum et de l'étincelant Lac Magique. Un cadre magique pour votre journée spéciale.",
    tailoredProduction: "PRODUCTION SUR MESURE",
    tailoredProductionDesc: "Service complet de planification de mariage, y compris décoration d'inspiration bédouine, éclairage d'ambiance sous les étoiles, service traiteur cinq étoiles par Lummayya et spectacles musicaux locaux.",

    // Why Faiyum Section
    whyFayoumTitle: "Pourquoi avons-nous commencé à Fayoum?",
    whyFayoumOpening: "Chez Remal elrayan glamp, notre voyage a commencé avec la vision d'avoir un impact significatif et positif. Lorsque nous avons cherché un lieu de départ, Fayoum, en Égypte, s'est démarqué par son mélange unique d'histoire, de culture et, surtout, de potentiel.",
    whyFayoumCradleTitle: "Fayoum : Un Berceau de Potentiel",
    whyFayoumCradleDesc: "Fayoum est l'une des plus anciennes villes du monde, dotée d'un riche patrimoine agricole et d'une communauté dynamique. Cependant, comme de nombreuses régions, elle fait face à des défis qui présentent des opportunités de croissance et de développement durable. Nous avons choisi Fayoum parce que nous avons reconnu que nos solutions innovantes et notre dévouement pouvaient vraiment y faire la différence.",
    whyFayoumCommitmentTitle: "Notre Engagement",
    whyFayoumCommitmentDesc: "Notre objectif initial à Fayoum est de mettre en œuvre des pratiques durables qui autonomisent la communauté locale, améliorent la qualité de vie et contribuent à la prospérité globale de la région. Nous pensons qu'en commençant ici, nous pouvons donner un exemple fort de la manière dont un développement responsable et réfléchi peut prospérer.",

    // Management Philosophy Section
    mgmtTitle: "Notre Philosophie de Gestion : Bâtie de l'Intérieur",
    mgmtIntro: "Chez Remal, nous rejetons intentionnellement la voie traditionnelle de l'externalisation de notre gestion à des sociétés extérieures. Parce que nous ne gérons pas seulement un établissement — nous ouvrons la voie à un tout nouvel écosystème et définissons une nouvelle frontière pour l'hôtellerie en Égypte.\n\nPour mener ce mouvement, notre direction — guidée par Mostafa Farouk, Mohamed Farouk et Mohamed Sheta — s'enracine dans la construction de systèmes agiles et adaptatifs conçus pour responsabiliser nos collaborateurs et valoriser le marché local.",
    mgmtWhyHeader: "Pourquoi nous traçons notre propre chemin :",
    mgmtPioneeringTitle: "Pionniers d'une nouvelle ère",
    mgmtPioneeringDesc: "Nous établissons un modèle unique d'hôtellerie raffinée qui ne peut être reproduit par des cabinets de gestion internationaux rigides et standardisés. En gardant notre leadership en interne, nous conservons l'agilité nécessaire pour innover constamment.",
    mgmtEmpoweringTitle: "Valoriser la communauté locale",
    mgmtEmpoweringDesc: "Un développement durable commence par l'humain. Nos systèmes opérationnels sont conçus pour encourager, former et valoriser les talents locaux, favorisant ainsi directement la croissance économique et professionnelle de la communauté qui nous accueille.",
    mgmtFamilyTitle: "La force de la famille et du patrimoine",
    mgmtFamilyDesc: "Nous ne gérons pas simplement du personnel ; nous construisons une famille. Notre style de gestion est profondément imprégné des traditions authentiques, de la chaleur et des valeurs de notre terre, garantissant que chaque expérience client soit sincère, chaleureuse et profondément ancrée dans notre culture.",
    mgmtFooter: "Chez Remal, nous croyons que pour élever l'avenir de l'hôtellerie égyptienne, les fondations doivent être posées par ceux qui en comprennent véritablement l'âme.",
  },
  de: {
    home: "Startseite",
    accommodations: "Unterkünfte",
    restaurant: "Lummayya Restaurant",
    experiences: "Treffen & Erlebnisse",
    policies: "Glamp-Regeln",
    wadiElRayan: "Wadi El Rayan",
    egypt: "Ägypten",
    replay: "Wiederholen",
    nationalityLabel: "Nationalität",
    egyptian: "Ägypter",
    nonEgyptian: "Nicht-Ägypter",
    coordinates: "KOORDINATEN",
    classification: "KLASSIFIZIERUNG",
    classificationValue: "Ultra-Luxus-Öko-Zuflucht",
    fayoumEgypt: "WADI EL RAYAN • FAYOUM • ÄGYPTEN",
    preloaderEst: "ÄGYPTEN • GEGR. 2021",
    preloaderSilent: "STILLER BOUTIQUE-LUXUS",
    preloaderStage0: "Wadi El Rayan Dünen vermessen...",
    preloaderStage1: "Geodätische Architektur entwerfen...",
    preloaderStage2: "Wüstenelemente kuratieren...",
    preloaderStage3: "Stille Luxus-Gastfreundschaft perfektionieren...",
    exploreRetreat: "DAS RETREAT ERKUNDEN",
    established2021: "GEGRÜNDET IM JAHR 2021 • DIE WILDNIS-OASE",
    glampDescription: "Ein prestigeträchtiges, umweltschonendes Luxus-Glamping-Retreat, das sich elegant an die goldenen Dünen des Schutzgebiets Wadi El Rayan schmiegt. Es verbindet authentische Wüstenerlebnisse mit erstklassiger Boutique-Gastfreundschaft.",
    conceptPhilosophy: "KONZEPT & PHILOSOPHIE",
    redefiningLuxuryTitle: "Luxus-Ökotourismus neu definiert",
    sandMeaning: "Auf Arabisch bedeutet \"Remal\" Sand. Er ist das Fundament des Gleichgewichts – denn ohne Sand gäbe es keine Wälder. Remal el Rayan Glamp wurde aus tiefer Liebe und großem Respekt für die Wüstenlandschaft, ihr Erbe und ihre Menschen geschaffen.",
    adventureComfort: "Wir glauben, dass echtes Abenteuer niemals auf ultimativen Komfort verzichten sollte. Als Pioniere des ersten Luxus-Glampings dieser Art in Ägypten laden wir unsere Gäste ein, die Weite der Wüste mit Stil zu erleben – in unseren innovativen Geodomen mit privatem Whirlpool.",
    balanceQuote: "\"Ohne Sand gäbe es keine Wälder.\" — Das Fundament des Gleichgewichts.",
    boardVision: "VORSTANDS- & EXECUTIVE-VISION",
    strategicRepositioning: "Strategische Neupositionierung",
    strategicDesc: "Getragen von einem zukunftsorientierten Vorstand und einem hochgradig strategischen Management-Team, reicht unsere Mission weit über Boutique-Hospitality hinaus. Wir treiben aktiv eine strategische Neuausrichtung voran, um den Ökotourismus und das Luxus-Glamping in Ägypten zu revitalisieren.",
    heritageImpact: "UNSER TEAM & SOZIALER EINFLUSS",
    sustainableHeritage: "Nachhaltiges Erbe",
    heritageDesc: "Hinter jedem glücklichen Wüstenmoment steht unser engagiertes, erstklassiges Team. Wir arbeiten eng mit der lokalen Gemeinschaft in Fayoum zusammen, unterstützen das traditionelle Töpferhandwerk und fördern nachhaltige soziale und ökologische Projekte.",
    locationPortfolio: "DAS LAGE-PORTFOLIO",
    sacredOasisTitle: "Eine heilige Oase in Wadi El Rayan",
    sacredOasisDesc1: "Wadi El Rayan ist ein weltweit anerkanntes Naturschutzgebiet im Fayoum-Gouvernement. Es zeichnet sich durch seine einzigartige Wüstentopographie aus, bei der goldene Sanddünen dynamisch in tiefblaue Salzwasserseen übergehen.",
    sacredOasisDesc2: "Remal El Rayan liegt tief im Inneren dieses friedlichen Schutzgebiets, völlig privat und geschützt vor Lichtverschmutzung oder Verkehr, sodass unsere Gäste einen kristallklaren Blick auf den Sternenhimmel genießen können.",
    distanceCairo: "ENTFERNUNG VON KAIRO",
    distanceCairoVal: "140 KM (2,5 Std.)",
    sandType: "SANDTYP",
    sandTypeVal: "Goldene Siliziumdünen",
    nearestWaterbody: "NÄCHSTES GEWÄSSER",
    nearestWaterbodyVal: "Magic Lake Fayoum",
    placeHistory: "GESCHICHTE DES ORTS",
    placeHistoryVal: "Seit 2021 aktiv",
    geoGridMap: "GEOGRAFISCHE KARTE",
    campLocationMarker: "Camp-Standortmarkierung",
    campMarkerDesc: "Hinter den schützenden Dünenkämmen gelegen, um absolute Ruhe und stille Entspannung zu garantieren.",
    adminHospitality: "ADMINISTRATION & HOSPITALITY-FÜHRUNG",
    orgTeamTitle: "Unser Organisations-Team",
    chairman: "Vorsitzender",
    ceo: "CEO & Mitbegründer",
    generalManager: "General Manager",
    restaurantManager: "Restaurant-Manager",
    executiveChef: "Küchenchef",
    reservationsManager: "Reservierungsleiter",
    receptionManager: "Empfangsleiter",
    accountantManager: "Leiter Buchhaltung",
    vipHostingSatellite: "VIP-GÄSTEBETREUUNG",
    exclusiveConciergeInquiries: "EXKLUSIVE CONCIERGE- & BUCHUNGSANFRAGEN",
    accomTitle: "REMAL LUXURIÖSE GEODOME",
    accomSub: "ULTRA-LUXURIÖSE ARCHITEKTONISCHE ZUFLUCHTSORTE",
    accomDesc: "Entworfen, um raue Wüsten-Authentizität mit modernem architektonischen Komfort zu verbinden. Jedes Premium-Geodom verfügt über eine zweilagige Isolierung, eine eigene Aussichtsterrasse, einen Whirlpool und eine Außendusche unter dem Sternenhimmel.",
    roomBookingNotes: "Zimmerbuchungsrichtlinien & Tarifhinweis",
    egyptianPriceNotice: "Ein ägyptischer Personalausweis oder eine Aufenthaltserlaubnis muss am Empfang vorgelegt werden. Wochenendtarife gelten für Donnerstag- und Freitagnächte.",
    nonEgyptianPriceNotice: "Tarife für Nicht-Ägypter sind in USD oder einer gängigen Fremdwährung zu zahlen. Bei Check-in ist eine Kaution zu hinterlegen.",
    maxGuests: "Max. Gäste",
    perNight: "pro Nacht",
    viewInterior: "Innenraum ansehen",
    viewExterior: "Außenterrasse ansehen",
    reserveThisDome: "Geodom reservieren",
    amenitiesLabel: "Boutique-Ausstattung",
    featuresLabel: "Besondere Merkmale",
    lakeDiningTitle: "LUMMAYYA SEE-RESTAURANT",
    lakeDiningSub: "WÜSTENGASTRONOMIE AM MAGIC LAKE",
    lakeDiningDesc: "Unsere Küche am See serviert authentische, langsam gekochte, biologische Rezepte aus Fayoum und der Beduinentradition. Jedes Gericht wird mit frischen lokalen Wüstenkräutern verfeinert.",
    breakfastMenu: "Beduinisches Frühstück",
    lunchMenu: "Traditionelle, langsam gekochte Hauptgerichte",
    dinnerMenu: "Grillgerichte & Gebäck am See",
    exclVat: "* Alle Menüpreise verstehen sich zuzüglich 12% Restaurant-Servicegebühr. Tagespakete sind befreit.",
    bookingFormTitle: "LUMMAYYA SEE-RESTAURANT & TAGESPAKET-REGISTRIERUNG",
    pricingGuideTitle: "INTERAKTIVE PREISKALKULATION & ANGEBOTS-SCHÄTZUNG",
    roomCategoriesLiveRates: "ZIMMERTOPPEN & LIVE-PREISE",
    selectRateBasis: "TARIFBASIS WÄHLEN",
    weekdaysLabel: "Wochentage (So-Mi)",
    weekendLabel: "Wochenende (Do-Sa)",
    selectOccupancy: "BELEGUNG WÄHLEN",
    calculatedRate: "BERECHNETER TARIF (inkl. Frühstück)",
    approxLabel: "Ca.",
    exclTaxes: "Pro Nacht • Exkl. Steuern",
    includedComfort: "INKLUSIVE LEISTUNGEN",
    exteriorLabel: "Außen",
    interiorLabel: "Innen",
    selectNationalityRequired: "STAATSANGEHÖRIGKEIT AUSWÄHLEN (ERFORDERLICH)",
    egyptianIdOption: "Ägypter / Einwohner",
    nonEgyptianOption: "Internationaler Gast",
    currencyPreferenceTitle: "WÄHRUNGS-EINSTELLUNG",
    egpOption: "EGP",
    usdOption: "USD ($)",

    // Experience Hub Section
    receptionServices: "REZEPTION & ERLEBNISZENTRUM",
    receptionServicesDesc: "Buchen Sie Ihre luxuriösen Wüstenerlebnisse, privaten Transfers oder exklusiven Firmenveranstaltungen und Hochzeiten direkt über unser Concierge-Team.",
    directConciergeActive: "DIREKTER CONCIERGE AKTIV",
    activitiesTab: "Aktivitäten",
    transportationTab: "Transport",
    teambuildingTab: "Teambuilding",
    weddingsTab: "Hochzeiten & Events",
    importantBookingNotice: "WICHTIGER BUCHUNGSHINWEIS",
    importantBookingNoticeDesc: "Alle Aktivitäten hängen von den Wetterbedingungen ab und müssen mindestens 24 Stunden im Voraus mit dem Empfang abgestimmt werden.",
    bookedOnSite: "VOR ORT GEBUCHT",
    officialTariff: "OFFIZIELLER TARIF",
    bookViaConcierge: "Über Concierge buchen",
    privateFleetTransfers: "PRIVATE TRANSFERS",
    exclusiveCairoToCamp: "Exklusive Privattransfers von Kairo zum Camp",
    transportDesc: "Reisen Sie mit maximalem Komfort von Kairo direkt zu unserem Luxuscamp in Wadi El Rayan. Wir bieten klimatisierte Premium-Fahrzeuge mit professionellen Fahrern.",
    standardTransfer: "STANDARDTRANSFER",
    standardCarTitle: "Chauffeur SUV (Bis zu 4 Personen)",
    standardCarDesc: "Ein privater, komfortabler SUV-Transfer vom internationalen Flughafen Kairo oder jeder Adresse in Kairo direkt zum Camp.",
    premiumOption: "PREMIUM-OPTION",
    premiumCarTitle: "Luxus-Geländewagen 4x4 (Bis zu 3 Personen)",
    premiumCarDesc: "Für Reisende, die ein echtes Offroad-Wüstenabenteuer direkt ab Kairo suchen. Individuelle Zwischenstopps sind möglich.",
    customQuote: "INDIVIDUELLES ANGEBOT",
    cairoFayoum: "Kairo nach Fayoum",
    bespokeRetreats: "INDIVIDUELLE RETREATS",
    corporateOutingsTitle: "Firmenausflüge & Strategie-Meetings",
    corporateOutingsDesc: "Erleben Sie Teamarbeit in den Dünen neu. Wir organisieren maßgeschneiderte Luxus-Teambuilding-Retreats mit Open-Air-Arbeitsbereichen, beduinischen Abendessen und Wüsten-Survival-Workshops.",
    exclusiveRetreatCapabilities: "EXKLUSIVE RETREAT-KAPAZITÄTEN",
    exclusiveRetreatCapabilitiesDesc: "Unterkunft für bis zu 40 Personen, Präsentationsdome, Highspeed-Satellitenverbindung und Teambuilding-Aktivitäten mit vollem Catering.",
    cinematicVenue: "EINZIGARTIGE LOCATION",
    weddingsTitle: "Filmreife Wüstenhochzeiten",
    weddingsDesc: "Feiern Sie eine unvergessliche Hochzeitsfeier vor der Kulisse der Dünen von Fayoum und des schimmernden Magic Lake. Eine magische Kulisse für Ihren besonderen Tag.",
    tailoredProduction: "MASSGESCHNEIDERTE PRODUKTION",
    tailoredProductionDesc: "Kompletter Hochzeitsservice inklusive Dekoration im beduinischen Stil, romantischer Beleuchtung unter dem Sternenhimmel, Fünf-Sterne-Catering durch Lummayya und Live-Musik.",

    // Why Faiyum Section
    whyFayoumTitle: "Warum haben wir in Fayoum begonnen?",
    whyFayoumOpening: "Bei Remal elrayan glamp begann unsere Reise mit der Vision, eine bedeutende und positive Wirkung zu erzielen. Bei der Suche nach einem geeigneten Standort stach Fayoum in Ägypten durch seine einzigartige Mischung aus Geschichte, Kultur und vor allem Potenzial hervor.",
    whyFayoumCradleTitle: "Fayoum: Eine Wiege des Potenzials",
    whyFayoumCradleDesc: "Fayoum ist eine der ältesten Städte der Welt mit einem reichen landwirtschaftlichen Erbe und einer lebendigen Gemeinschaft. Doch wie viele Regionen steht sie vor Herausforderungen, die Chancen für Wachstum und nachhaltige Entwicklung bieten. Wir haben uns für Fayoum entschieden, weil wir erkannt haben, dass unsere innovative Lösungen und unser Engagement hier wirklich etwas bewirken können.",
    whyFayoumCommitmentTitle: "Unser Engagement",
    whyFayoumCommitmentDesc: "Unser anfänglicher Fokus in Fayoum liegt auf der Implementierung nachhaltiger Praktiken, die die lokale Gemeinschaft stärken, die Lebensqualität verbessern und zum allgemeinen Wohlstand der Region beitragen. Wir glauben, dass wir durch unseren Start hier ein starkes Beispiel dafür geben können, wie verantwortungsvolle und durchdachte Entwicklung gedeihen kann.",

    // Management Philosophy Section
    mgmtTitle: "Unsere Managementphilosophie: Von innen heraus aufgebaut",
    mgmtIntro: "Bei Remal lehnen wir den traditionellen Weg, unser Management an externe Konzerne auszulagern, bewusst ab. Denn wir betreiben nicht nur ein Hotel – wir leisten Pionierarbeit für ein völlig neues Ökosystem und definieren eine neue Ära der Gastfreundschaft in Ägypten.\n\nUm diese Bewegung anzuführen, basiert unsere Führung – gelenkt von Mostafa Farouk, Mohamed Farouk und Mohamed Sheta – auf dem Aufbau agiler, anpassungsfähiger Systeme, die darauf ausgelegt sind, unsere Mitarbeiter zu stärken und den lokalen Markt aufzuwerten.",
    mgmtWhyHeader: "Warum wir unseren eigenen Weg gehen:",
    mgmtPioneeringTitle: "Pionierarbeit für eine neue Ära",
    mgmtPioneeringDesc: "Wir etablieren ein einzigartiges Modell anspruchsvoller Gastfreundschaft, das von starren, schablonenhaften internationalen Managementgesellschaften nicht kopiert werden kann. Indem wir unsere Führung intern halten, bewahren wir uns die Flexibilität für ständige Innovationen.",
    mgmtEmpoweringTitle: "Stärkung der lokalen Gemeinschaft",
    mgmtEmpoweringDesc: "Wir glauben, dass echte Nachhaltigkeit bei den Menschen beginnt. Unsere Betriebssysteme sind so aufgebaut, dass sie lokale Talente fördern, ausbilden und unterstützen, was direkt zum wirtschaftlichen und beruflichen Wachstum der Gemeinschaft beiträgt, die wir unser Zuhause nennen.",
    mgmtFamilyTitle: "Die Kraft von Familie und Herkunft",
    mgmtFamilyDesc: "Wir leiten nicht nur Personal; wir bauen eine Familie auf. Unser Führungsstil ist tief geprägt von den authentischen Traditionen, der Herzlichkeit und den Werten unseres Landes. So stellen wir sicher, dass sich jeder Gast zutiefst willkommen und heimisch fühlt.",
    mgmtFooter: "Wir bei Remal glauben, dass das Fundament für die Zukunft der ägyptischen Gastfreundschaft von denjenigen gebaut werden muss, die ihre Seele wirklich verstehen.",
  },
  ja: {
    home: "ホーム",
    accommodations: "ご宿泊",
    restaurant: "ルマイヤ・レストラン",
    experiences: "集い＆体験",
    policies: "規約とポリシー",
    wadiElRayan: "ワディ・エル・ラヤン",
    egypt: "エジプト",
    replay: "再再生",
    nationalityLabel: "国籍",
    egyptian: "エジプト国籍の方",
    nonEgyptian: "海外のお客様",
    coordinates: "位置座標",
    classification: "格付け区分",
    classificationValue: "ウルトラ・ラックス・エコ・リトリート",
    fayoumEgypt: "ワディ・エル・ラヤン • ファイユーム • エジプト",
    preloaderEst: "エジプト • 2021年創立",
    preloaderSilent: "静寂なるブティック・ラグジュアリー",
    preloaderStage0: "ワディ・エル・ラヤンの砂丘を調査中...",
    preloaderStage1: "ジオデシック建築を設計中...",
    preloaderStage2: "砂漠のウォーターエレメントを厳選中...",
    preloaderStage3: "最高峰の静寂ラグジュアリーのおもてなしを調律中...",
    exploreRetreat: "リトリートを探索する",
    established2021: "2021年創立 • 自然保護区の静寂なオアシス",
    glampDescription: "保護されたワディ・エル・ラヤンの黄金の砂丘に優雅にたたずむ、環境に配慮した最高峰のラグジュアリー・グランピング。ありのままの砂漠の美しさと、一流のブティックホスピタリティが融合した極上の空間です。",
    conceptPhilosophy: "コンセプト＆フィロソフィー",
    redefiningLuxuryTitle: "ラグジュアリー・エコツーリズムの再定義",
    sandMeaning: "アラビア語で「レマル」は砂を意味します。砂こそが調和の基盤であり、砂がなければ森は存在しません。レマル・エル・ラヤン・グランプは、砂漠の自然環境、その遺産、そして人々への深い愛と敬意から生まれました。",
    adventureComfort: "本物の冒険は、極上の快適さと共存すべきであると信じています。エジプト初のラグジュアリー・グランピングの先駆者として、プライベートジャグジーや星空の下のシャワーを備えた革新的なジオデシックドームで、洗練された砂漠の夜をお届けします。",
    balanceQuote: "「砂がなければ、森は存在しない。」 — 調和の基盤。",
    boardVision: "役員・経営陣のビジョン",
    strategicRepositioning: "戦略的リポジショニング",
    strategicDesc: "先見の明のある取締役会と、ホスピタリティに長けた戦略的マネジメントチームに導かれ、私たちの使命はブティック宿泊の枠を超えています。ユネスコ世界遺産であるワディ・エル・ラヤンを、知的好奇心に満ちた世界中の旅行者のための特別な目的地へと高めています。",
    heritageImpact: "地域コミュニティへの貢献",
    sustainableHeritage: "持続可能なヘリテージ",
    heritageDesc: "素晴らしい砂漠の一瞬一瞬を支えるのは、私たちの世界クラスの専任チームです。地域の遺産とプレミアムホスピタリティをシームレスに繋ぎ、ファイユームの伝統的な陶芸や職人を支援することで、持続可能な社会・環境保全を実現しています。",
    locationPortfolio: "ロケーション・ポートフォリオ",
    sacredOasisTitle: "ワディ・エル・ラヤンに隠された聖なるオアシス",
    sacredOasisDesc1: "ワディ・エル・ラヤンは、カイロの南西、ファイユーム県に位置する世界的に認められた自然保護区です。黄金の砂丘が美しく深いブルーの塩湖へとダイナミックに沈み込む、独自の砂漠地形が特徴です。",
    sacredOasisDesc2: "レマル・エル・ラヤンはこの穏やかな保護区の深部に位置し、光害や騒音から完全に隔離されています。遮るもののない、満天の澄み切った星空のパノラマをご堪能いただけます。",
    distanceCairo: "カイロからの距離",
    distanceCairoVal: "140 KM (車で約2.5時間)",
    sandType: "砂の種類",
    sandTypeVal: "黄金のシリカ砂丘",
    nearestWaterbody: "最寄りの水辺",
    nearestWaterbodyVal: "ファイユーム・マジックレイク",
    placeHistory: "創業歴史",
    placeHistoryVal: "2021年より稼働",
    geoGridMap: "地理グリッドマップ",
    campLocationMarker: "キャンプ位置マーカー",
    campMarkerDesc: "そびえ立つ砂丘の背後に配置され、最高の静寂とリラクゼーションをお約束します。",
    adminHospitality: "経営陣＆ホスピタリティ・リーダーシップ",
    orgTeamTitle: "私たちの組織チーム",
    chairman: "取締役会長",
    ceo: "最高経営責任者 (CEO) 兼 共同創業者",
    generalManager: "総支配人",
    restaurantManager: "レストラン責任者",
    executiveChef: "総料理長",
    reservationsManager: "予約管理責任者",
    receptionManager: "フロント支配人",
    accountantManager: "経理マネージャー",
    vipHostingSatellite: "VIPゲストホスティング",
    exclusiveConciergeInquiries: "VIPコンシェルジュ＆ダイレクトご予約窓口",
    accomTitle: "レマルのラグジュアリー・ジオデシックドーム",
    accomSub: "極上の建築美が織りなす砂漠の隠れ家",
    accomDesc: "砂漠のありのままの魅力と、最先端の建築技術による快適性を融合。各ドームには二重の断熱キャンバス、プライベート展望デッキ、ジャグジー、星空の下の屋外シャワーが完備されています。",
    roomBookingNotes: "ご宿泊規約および料金についてのご案内",
    egyptianPriceNotice: "チェックイン時にエジプト国籍身分証または居住許可証の提示が必要です。木曜・金曜の夜は週末料金が適用されます。",
    nonEgyptianPriceNotice: "海外のお客様の料金は、米ドル（USD）または主要外国通貨にてお支払いいただきます。チェックイン時に入室デポジットが必要です。",
    maxGuests: "最大定員",
    perNight: "1泊あたり",
    viewInterior: "室内空間を見る",
    viewExterior: "屋外展望デッキを見る",
    reserveThisDome: "このドームを予約する",
    amenitiesLabel: "アメニティ",
    featuresLabel: "ドームの仕様・特徴",
    lakeDiningTitle: "ルマイヤ・レイク・ダイニング",
    lakeDiningSub: "マジックレイクのほとりで味わう砂漠のガストロノミー",
    lakeDiningDesc: "湖畔のキッチンでは、地元のオーガニック食材を使用した本格的なベドウィン料理やファイユーム料理をご提供しています。砂漠特有の自生ハーブを効かせ、地元のシェフチームが手作りしています。",
    breakfastMenu: "ベドウィンの伝統朝食セット",
    lunchMenu: "じっくり煮込んだ伝統のメイン料理",
    dinnerMenu: "湖畔のグリル＆自家製パイ・デザート",
    exclVat: "* メニュー価格には12%のレストランサービス料が加算されます。デイユースパッケージは免税対象です。",
    bookingFormTitle: "ルマイヤ・レイク・ダイニング＆デイユース登録",
    pricingGuideTitle: "見積シミュレーション＆総料金計算ツール",
    roomCategoriesLiveRates: "客室カテゴリーとライブ料金",
    selectRateBasis: "料金体系の選択",
    weekdaysLabel: "平日 (日〜水)",
    weekendLabel: "週末 (木〜土)",
    selectOccupancy: "人数の選択",
    calculatedRate: "計算された料金 (朝食付)",
    approxLabel: "約",
    exclTaxes: "1泊あたり • 税別",
    includedComfort: "含まれる快適アメニティ",
    exteriorLabel: "外観",
    interiorLabel: "内観",
    selectNationalityRequired: "国籍の選択（必須）",
    egyptianIdOption: "エジプト市民 / 居住者",
    nonEgyptianOption: "海外のお客様",
    currencyPreferenceTitle: "通貨の選択",
    egpOption: "EGP",
    usdOption: "USD ($)",

    // Experience Hub Section
    receptionServices: "フロント＆アクティビティ・コンシェルジュ",
    receptionServicesDesc: "贅沢な砂漠アクティビティ、プライベート送迎、または特別な企業向け研修や大自然の中でのウェディングなど、専任コンシェルジュにて事前予約を承ります。",
    directConciergeActive: "ダイレクト・コンシェルジュ稼働中",
    activitiesTab: "アクティビティ",
    transportationTab: "送迎サービス",
    teambuildingTab: "チームビルディング",
    weddingsTab: "ウェディング＆イベント",
    importantBookingNotice: "ご予約に関する重要なお知らせ",
    importantBookingNoticeDesc: "すべてのアクティビティは天候状況に左右され、ご予約を確定するために少なくとも24時間前までにフロントデスクとの調整が必要です。",
    bookedOnSite: "現地予約可",
    officialTariff: "公式料金表",
    bookViaConcierge: "コンシェルジュ経由で予約",
    privateFleetTransfers: "プライベート送迎サービス",
    exclusiveCairoToCamp: "カイロからキャンプへの専用送迎",
    transportDesc: "カイロからワディ・エル・ラヤンの高級キャンプまで、最高に快適なプライベート送迎をご用意。砂漠のルートを熟知したプロのドライバーがエアコン完備のプレミアム車両でご案内いたします。",
    standardTransfer: "スタンダード送迎",
    standardCarTitle: "専属運転手付きSUV（最大4名様）",
    standardCarDesc: "カイロ国際空港またはカイロ市内のご指定場所から、キャンプ場まで直接お送りする、非常に快適なプライベートSUV送迎です。",
    premiumOption: "プレミアムオプション",
    premiumCarTitle: "ラグジュアリー 4x4 オフロード（最大3名様）",
    premiumCarDesc: "カイロから本格的なオフロード砂漠のアドベンチャーを体験されたいお客様に。途中でカスタムの観光スポットへのお立ち寄りも可能です。",
    customQuote: "カスタム見積もり",
    cairoFayoum: "カイロからファイユーム",
    bespokeRetreats: "ビスポーク・リトリート",
    corporateOutingsTitle: "企業研修＆エグゼクティブ・サミット",
    corporateOutingsDesc: "砂丘の中でチームワークを再定義。屋外ワークスペース、ベドウィン風スローファイアディナー、砂漠サバイバルワークショップなど、完全にカスタマイズされた贅沢なチームビルディングをご提案します。",
    exclusiveRetreatCapabilities: "研修パッケージの主な仕様",
    exclusiveRetreatCapabilitiesDesc: "最大40名様までの宿泊設備、プレゼンテーション用ドーム設置、高速衛星通信、完全ケータリング付きチームアクティビティ。",
    cinematicVenue: "シネマティック・ベニュー",
    weddingsTitle: "砂漠のシネマティック・ウェディング",
    weddingsDesc: "ファイユームの美しい砂丘と、輝くマジックレイクをバックに、一生の思い出となるウルトララグジュアリーな結婚式を。特別な日にふさわしい、実に神秘的な舞台です。",
    tailoredProduction: "オーダーメイド・プロデュース",
    tailoredProductionDesc: "ベドウィン文化にインスパイアされた装飾、満天の星空の下のライティング、ルマイヤによる5つ星ケータリング、地元の生演奏など、フルサービスのウェディングプランニングをご提供します。",

    // Why Faiyum Section
    whyFayoumTitle: "なぜファイユームから始めたのか？",
    whyFayoumOpening: "レマル・エル・ラヤン・グランプの旅は、社会に大きな、tender可能性が融合したエジプトの「ファイユーム」が目に留まりました。",
    whyFayoumCradleTitle: "ファイユーム：無限の可能性を秘めた地",
    whyFayoumCradleDesc: "ファイユームは世界で最も古い都市の一つであり、豊かな農業遺産と活気に満ちたコミュニティを持っています。しかし、他の多くの地域と同様に、成長と持続可能な開発の機会をもたらす課題にも直面しています。私たちは、独自の革新的なアプローチと熱意が、この地で真に変革をもたらすことができると確信し、ファイユームを選びました。",
    whyFayoumCommitmentTitle: "私たちのコミットメント",
    whyFayoumCommitmentDesc: "ファイユームにおける私たちの最初の取り組みは、地域社会を活性化し、生活の質を向上させ、地域全体の繁栄に貢献する持続可能なアプローチを導入することです。この場所から始めることで、責任ある熟慮された開発がどのように繁栄できるかを示す、力強い先例となることを信じています。",

    // Management Philosophy Section
    mgmtTitle: "私たちの経営哲学：内から築く、独自の道",
    mgmtIntro: "レマルでは、外部のグローバル企業に運営を委託するという従来の一般的な手法を意図的に排除しています。なぜなら、私たちは単に一つの宿泊施設を運営しているのではなく、エジプトの観光・ホスピタリティ業界における全く新しいエコシステムを開拓し、新たなフロンティアを定義しているからです。\n\nこのムーブメントを牽引するため、モスタファ・ファルーク、モハメド・ファルーク、モハメド・シェタの指揮のもと、私たちの進む方向性は、人々を育成し、地元市場を活性化させるための俊敏で適応力のあるシステム構築に深く根ざしています。",
    mgmtWhyHeader: "私たちが自ら運営にこだわる理由：",
    mgmtPioneeringTitle: "新たな時代の先駆者として",
    mgmtPioneeringDesc: "私たちは、画一的で柔軟性を欠く国際的なマネジメント会社には決して模倣できない、洗練されたホスピタリティの独自モデルを確立しています。リーダーシップを社内に留めることで、常に革新を続ける俊敏性を維持しています。",
    mgmtEmpoweringTitle: "地域コミュニティへのエンパワーメント",
    mgmtEmpoweringDesc: "真のサステナビリティは「人」から始まると信じています。私たちの運営システムは、地域の才能を育み、トレーニングし、リーダーとして支えるために構築されており、私たちが故郷と呼ぶコミュニティの経済的・専門的成長を直接後押ししています。",
    mgmtFamilyTitle: "ファミリーと伝統が持つ力",
    mgmtFamilyDesc: "私たちは単にスタッフを管理するのではなく、一つの「家族」を築いています。私たちのマネジメントスタイルには、この土地に息づく本物の伝統、温かさ、価値観が深く染み込んでおり、すべてのお客様の体験が深く心に残り、心からの歓迎を感じていただけるよう努めています。",
    mgmtFooter: "エジプトのホスピタリティの未来を高めるためには、その魂を真に理解する者たちによって基礎が築かれなければならないと、レマルは信じています。",
  }
};

interface LanguageContextProps {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: keyof TranslationSet) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("remal_preferred_language");
    return (saved as Language) || "en";
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("remal_preferred_language", lang);
  };

  const t = (key: keyof TranslationSet): string => {
    return translations[language][key] || translations["en"][key] || "";
  };

  useEffect(() => {
    // Set document direction for Arabic language
    if (language === "ar") {
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    } else {
      document.documentElement.dir = "ltr";
      document.documentElement.lang = language;
    }
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
