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
}

const translations: Record<Language, TranslationSet> = {
  en: {
    home: "Home",
    accommodations: "Accommodations",
    restaurant: "Lummayya Lake Dining",
    experiences: "Activities & Transport",
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
  },
  ar: {
    home: "الرئيسية",
    accommodations: "أماكن الإقامة",
    restaurant: "مطعم بحيرة لوميا",
    experiences: "الأنشطة والانتقالات",
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
  },
  es: {
    home: "Inicio",
    accommodations: "Alojamientos",
    restaurant: "Restaurante del Lago Lummayya",
    experiences: "Actividades y Transporte",
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
  },
  fr: {
    home: "Accueil",
    accommodations: "Hébergements",
    restaurant: "Restaurant du Lac Lummayya",
    experiences: "Activités & Transport",
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
  },
  de: {
    home: "Startseite",
    accommodations: "Unterkünfte",
    restaurant: "Lummayya See-Restaurant",
    experiences: "Aktivitäten & Transport",
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
  },
  ja: {
    home: "ホーム",
    accommodations: "ご宿泊",
    restaurant: "ルマイヤ・レイク・ダイニング",
    experiences: "アクティビティ＆送迎",
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
