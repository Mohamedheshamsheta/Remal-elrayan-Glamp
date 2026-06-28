import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { 
  Compass, Eye, ShieldCheck, ExternalLink, Calendar, Users, 
  DollarSign, AlertCircle, Globe, Info, Check, HelpCircle 
} from "lucide-react";

interface PricingPlan {
  double: number;
  triple: number;
  quadruple?: number;
  quintuple?: number;
}

interface ElaboratedAccommodation {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  imageUrl: string;
  interiorImageUrl: string;
  amenities: string[];
  maxOccupancy: number;
  features: string[];
  rates: {
    USD: {
      weekend: PricingPlan;
      weekday: PricingPlan;
    };
    EGP: {
      weekend: PricingPlan;
      weekday: PricingPlan;
    };
  };
  translations?: Record<string, {
    title: string;
    subTitle: string;
    description: string;
    amenities: string[];
    features: string[];
  }>;
}

interface AccommodationsProps {
  nationality: "egyptian" | "non-egyptian";
  setNationality: (nationality: "egyptian" | "non-egyptian") => void;
  currency: "EGP" | "USD";
  setCurrency: (currency: "EGP" | "USD") => void;
  onRedirectToRestaurant?: () => void;
}

export default function Accommodations({
  nationality,
  setNationality,
  currency,
  setCurrency,
  onRedirectToRestaurant,
}: AccommodationsProps) {
  const { t, language } = useLanguage();
  const accommodationsData: ElaboratedAccommodation[] = [
    {
      id: "geo-dome-deluxe",
      title: "Geo-Dome Deluxe Tent",
      subTitle: "360° COSMIC PORTAL VIEW • BB BASIS",
      description: "Nestled beautifully against premium dunes. Crafted with timber-frame architecture, featuring panoramic portals that draw the scenic Fayoum desert sky directly inside.",
      imageUrl: "https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=1200&q=80",
      interiorImageUrl: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
      maxOccupancy: 3,
      amenities: [
        "Private Star Gazing Portal",
        "Curated Bedouin Linen Set",
        "Premium Forest Coffee Station",
        "Artisanal Outdoor Campfire Spot"
      ],
      features: [
        "55 sqm Premium Chamber",
        "Bed & Breakfast Basis",
        "Fayoum Desert Crest Lookout"
      ],
      rates: {
        USD: {
          weekend: { double: 300, triple: 350 },
          weekday: { double: 280, triple: 320 }
        },
        EGP: {
          weekend: { double: 6000, triple: 7000 },
          weekday: { double: 5500, triple: 6500 }
        }
      },
      translations: {
        ar: {
          title: "قبة جيوديسية ديلوكس",
          subTitle: "إطلالة بانورامية كاملة ٣٦٠ درجة • شامل الإفطار",
          description: "مستقرة بجمال وأناقة مقابل الكثبان الرملية الذهبية الفاخرة. تم تصميمها بهيكل خشبي مميز مع نوافذ بانورامية واسعة تُدخل سحر سماء صحراء الفيوم مباشرةً إليك.",
          amenities: [
            "شرفة خاصة لمشاهدة النجوم والشهب",
            "أغطية ومفروشات بدوية منسقة بعناية",
            "ركن قهوة فاخر ومميز",
            "مكان مخصص لإشعال النار في الهواء الطلق"
          ],
          features: [
            "مساحة داخلية فاخرة تبلغ ٥٥ متر مربع",
            "نظام المبيت شامل الإفطار البدوي",
            "إطلالة خلابة على قمة الكثبان الرملية"
          ]
        },
        es: {
          title: "Domo Geodésico Deluxe",
          subTitle: "VISTA AL PORTAL CÓSMICO DE 360° • RÉGIMEN AD",
          description: "Ubicado hermosamente frente a dunas premium. Diseñado con arquitectura de madera, con portales panorámicos que atraen el paisaje del desierto de Fayoum directamente al interior.",
          amenities: [
            "Portal privado para observar estrellas",
            "Juego de sábanas beduinas seleccionadas",
            "Estación de café premium",
            "Fogata artesanal al aire libre"
          ],
          features: [
            "Cámara premium de 55 m²",
            "Régimen de alojamiento y desayuno",
            "Mirador en la cresta del desierto de Fayoum"
          ]
        },
        fr: {
          title: "Dôme Géodésique Deluxe",
          subTitle: "VUE PORTAIL COSMIQUE 360° • FORMULE PETIT-DÉJEUNER",
          description: "Niché magnifiquement contre les dunes de sable premium. Conçu avec une architecture en bois, doté de portails panoramiques qui invitent le ciel du désert de Fayoum directement à l'intérieur.",
          amenities: [
            "Portail d'observation des étoiles privé",
            "Ensemble de draps bédouins sélectionnés",
            "Station de café de forêt premium",
            "Espace de feu de camp artisanal en plein air"
          ],
          features: [
            "Chambre Premium de 55 m²",
            "Formule lit et petit-déjeuner",
            "Belvédère sur la crête du désert de Fayoum"
          ]
        },
        de: {
          title: "Geo-Dome Deluxe Zelt",
          subTitle: "360° KOSMISCHES PORTAL • INKL. FRÜHSTÜCK",
          description: "Wunderschön an exklusiven Dünen gelegen. Mit Holzrahmen-Architektur und Panorama-Fenstern, die den Wüstenhimmel direkt in Ihr Zimmer bringen.",
          amenities: [
            "Privates Teleskop zur Himmelsbeobachtung",
            "Feine Bettwäsche im Beduinen-Stil",
            "Premium-Kaffeestation",
            "Gemütliche Lagerfeuerstelle im Freien"
          ],
          features: [
            "55 m² luxuriöser Wohnraum",
            "Übernachtung mit Frühstück",
            "Aussicht auf die Dünenkämme von Fayoum"
          ]
        },
        ja: {
          title: "ジオデシック・ドーム・デラックス",
          subTitle: "360度満天の星空ビュー • 朝食付",
          description: "美しい砂丘に優雅にたたずむドーム。温かみのある木製フレームと広々としたパノラマ窓が、ファイユームの神秘的な夜空を室内にそのまま引き込みます。",
          amenities: [
            "星空観測用プライベート天窓",
            "厳選された伝統ベドウィンリネン",
            "プレミアムコーヒー＆カフェマシン",
            "屋外の専用プライベート焚き火スペース"
          ],
          features: [
            "広さ 55㎡ の洗練された空間",
            "ベドウィンの伝統朝食付",
            "ファイユームの美しい砂丘を一望"
          ]
        }
      }
    },
    {
      id: "geo-dome-suite",
      title: "Geo-Dome Suite Tent",
      subTitle: "MAJESTIC DUNE RETREAT • BB BASIS",
      description: "Extra spacious geodesic layout offering scenic lounge comfort. Seamlessly combines Bedouin heritage touches with modern luxury components and an unparalleled panorama.",
      imageUrl: "https://images.unsplash.com/photo-1533619239203-3a78cfd298bb?auto=format&fit=crop&w=1200&q=80",
      interiorImageUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
      maxOccupancy: 4,
      amenities: [
        "Panoramic Sand-View Lounge",
        "Bespoke Astronomy Telescope",
        "Premium Bath Dressing Robes",
        "Heated Sanctuary Area"
      ],
      features: [
        "75 sqm Curated Space",
        "Bed & Breakfast Basis",
        "Superior Lake & Dune Framing"
      ],
      rates: {
        USD: {
          weekend: { double: 400, triple: 450, quadruple: 500 },
          weekday: { double: 380, triple: 420, quadruple: 450 }
        },
        EGP: {
          weekend: { double: 8500, triple: 9500, quadruple: 10500 },
          weekday: { double: 7500, triple: 8500, quadruple: 9500 }
        }
      },
      translations: {
        ar: {
          title: "جناح القبة الجيوديسية",
          subTitle: "ملاذ الكثبان الرملية المهيب • شامل الإفطار",
          description: "تخطيط جيوديسي واسع للغاية يوفر راحة معيشية استثنائية. يمزج بسلاسة بين لمسات التراث البدوي الأصيل ومكونات الفخامة المعاصرة مع إطلالة خلابة لا مثيل لها.",
          amenities: [
            "صالة جلوس بانورامية مطلة على الرمال والبحيرة",
            "تلسكوب فلكي خاص مخصص لرصد النجوم",
            "أرواب وحمام فاخر ومتكامل",
            "منطقة ملاذ دافئة ومريحة"
          ],
          features: [
            "مساحة مصممة بعناية تبلغ ٧٥ متر مربع",
            "نظام المبيت شامل الإفطار البدوي",
            "إطلالة متميزة تؤطر البحيرة والكثبان الرملية"
          ]
        },
        es: {
          title: "Suite Geo-Dome",
          subTitle: "REFUGIO MAJESTUOSO EN LA DUNA • RÉGIMEN AD",
          description: "Diseño geodésico extra espacioso que ofrece una cómoda sala de estar con vistas. Combina a la perfección toques de herencia beduina con elementos de lujo contemporáneos.",
          amenities: [
            "Salón panorámico con vistas a la arena",
            "Telescopio de astronomía personalizado",
            "Albornoces de baño premium",
            "Área de santuario climatizada"
          ],
          features: [
            "Espacio seleccionado de 75 m²",
            "Régimen de alojamiento y desayuno",
            "Encuadre superior de lago y dunas"
          ]
        },
        fr: {
          title: "Suite Géo-Dôme",
          subTitle: "RETRAITE MAJESTUEUSE SUR LA DUNE • FORMULE PETIT-DÉJEUNER",
          description: "Aménagement géodésique extra spacieux offrant le confort d'un salon panoramique. Combine harmonieusement héritage bédouin et éléments de luxe contemporains.",
          amenities: [
            "Salon panoramique avec vue sur les dunes",
            "Télescope astronomique personnalisé",
            "Peignoirs de bain haut de gamme",
            "Espace sanctuaire chauffé"
          ],
          features: [
            "Espace de vie de 75 m²",
            "Formule lit et petit-déjeuner",
            "Vue panoramique sur le lac et les dunes"
          ]
        },
        de: {
          title: "Geo-Dome Suite Zelt",
          subTitle: "MAJESTÄTISCHES DÜNEN-RETREAT • INKL. FRÜHSTÜCK",
          description: "Besonders geräumiges Geodom mit exklusivem Wohnbereich. Verbindet Beduinen-Tradition harmonisch mit zeitgenössischem Luxus und einem unvergleichlichen Ausblick.",
          amenities: [
            "Panorama-Wohnbereich mit Dünenblick",
            "Eigenes astronomisches Teleskop",
            "Exklusive Bademäntel & Pflegeprodukte",
            "Beheizter Wellness-Bereich"
          ],
          features: [
            "75 m² maßgeschneidertes Design",
            "Übernachtung mit Frühstück",
            "Einzigartiger See- und Dünenblick"
          ]
        },
        ja: {
          title: "ジオデシック・ドーム・スイート",
          subTitle: "壮大な砂丘の隠れ家 • 朝食付",
          description: "贅沢な広さを誇るジオデシック・スイート。伝統的なベドウィンカルチャーの美学と、最先端のコンテンポラリーラグジュアリーがシームレスに調和した、パノラマビューの特等席です。",
          amenities: [
            "砂丘とマジックレイクを見渡す展望サロン",
            "本格的な天体観測用カスタムテレスコープ",
            "上質なプレミアムバスローブ＆アメニティ",
            "床暖房完備の居心地の良いサンクチュアリ"
          ],
          features: [
            "広さ 75㎡ の厳選された極上空間",
            "ベドウィンの伝統朝食付",
            "湖と砂丘が織りなす素晴らしい風景"
          ]
        }
      }
    },
    {
      id: "safari-suite",
      title: "Safari Suite Tent",
      subTitle: "EPIC WILD SAFARI TERRACE • BB BASIS",
      description: "Our signature elite glamping mansion. Crafted from organic double-layered canvas platforms, featuring ultra-luxurious lounges and a starlit outdoor terrace.",
      imageUrl: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80",
      interiorImageUrl: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      maxOccupancy: 4,
      amenities: [
        "Private Outdoor Teak Terrace",
        "Personal Host Concierge",
        "Traditional Bedouin Lounge",
        "Luxe Walk-In Rainfall Shower"
      ],
      features: [
        "110 sqm Spaced Territory",
        "Bed & Breakfast Basis",
        "Starlight Private Dining Deck"
      ],
      rates: {
        USD: {
          weekend: { double: 450, triple: 500, quadruple: 550 },
          weekday: { double: 420, triple: 450, quadruple: 500 }
        },
        EGP: {
          weekend: { double: 9000, triple: 10000, quadruple: 11000 },
          weekday: { double: 8000, triple: 9000, quadruple: 10000 }
        }
      },
      translations: {
        ar: {
          title: "جناح السفاري الفاخر",
          subTitle: "تراس سفاري بري ملحمي • شامل الإفطار",
          description: "قصر التخييم الفاخر المميز والفريد لدينا. مصنوع من منصات قماشية عضوية مزدوجة الطبقات ومقاومة للعوامل الجوية، ويضم صالات جلوس فائقة الفخامة وتراساً في الهواء الطلق تحت النجوم.",
          amenities: [
            "تراس خشبي خاص في الهواء الطلق",
            "مضيف كونسيرج خاص لخدمتك طوال الإقامة",
            "صالة جلوس بدوية تقليدية فاخرة",
            "دش مطري داخلي وخارجي فائق الفخامة"
          ],
          features: [
            "مساحة واسعة تبلغ ١١٠ متر مربع",
            "نظام المبيت شامل الإفطار البدوي",
            "سطح طعام خاص ومميز تحت ضوء النجوم"
          ]
        },
        es: {
          title: "Suite Safari",
          subTitle: "TERRAZA ÉPICA DE SAFARI SALVAJE • RÉGIMEN AD",
          description: "Nuestra mansión de glamping de élite. Fabricada con plataformas de lona orgánica de doble capa, con salones de ultra lujo y una terraza exterior bajo las estrellas.",
          amenities: [
            "Terraza de teca privada al aire libre",
            "Anfitrión de conserjería personal",
            "Salón beduino tradicional de lujo",
            "Ducha de lluvia de lujo con vestidor"
          ],
          features: [
            "Territorio de 110 m² de amplitud",
            "Régimen de alojamiento y desayuno",
            "Terraza para cenar bajo las estrellas"
          ]
        },
        fr: {
          title: "Suite Safari",
          subTitle: "TERRASSE ÉPIQUE SAFARI SAUVAGE • FORMULE PETIT-DÉJEUNER",
          description: "Notre résidence de glamping d'élite emblématique. Conçue à partir de toiles doubles couches organiques, elle comprend des salons ultra-luxueux et une terrasse extérieure étoilée.",
          amenities: [
            "Terrasse privée en teck en plein air",
            "Hôte de conciergerie personnalisé",
            "Salon bédouin traditionnel de luxe",
            "Douche à effet pluie haut de gamme"
          ],
          features: [
            "Espace d'exception de 110 m²",
            "Formule lit et petit-déjeuner",
            "Terrasse pour doper sous les étoiles"
          ]
        },
        de: {
          title: "Safari Suite Zelt",
          subTitle: "SAFARI-TERRASSE UNTER STERNEN • INKL. FRÜHSTÜCK",
          description: "Unsere exklusivste Glamping-Residenz. Gefertigt aus robusten, doppellagigen Canvas-Zeltstoffen mit edlem Teakholz-Interieur, ultra-luxuriösen Lounges und einer weiten Terrasse.",
          amenities: [
            "Eigene Teakholz-Terrasse im Freien",
            "Persönlicher Concierge-Service",
            "Traditionelle, edle Beduinen-Lounge",
            "Luxuriöse Wellness-Regendusche"
          ],
          features: [
            "110 m² großzügige Traumresidenz",
            "Übernachtung mit Frühstück",
            "Private Speiseterrasse unter Sternen"
          ]
        },
        ja: {
          title: "サファリ・スイート・テント",
          subTitle: "野生의 숨결을 느끼는 테라스 • 朝食付",
          description: "当グランピングを代表する、最高峰の贅沢を詰め込んだ大邸宅テント。何重にも施された極上キャンバスに守られた、広々としたリビングサロンと星空を仰ぐ木製テラスが極上の休息を約束します。",
          amenities: [
            "プライベート展望屋外ウッドテラス",
            "専任のパーソナルコンシェルジュ",
            "贅を尽くした伝統のベドウィンラウンジ",
            "星空の下の屋外ウォークインレインシャワー"
          ],
          features: [
            "広さ 110㎡ の圧倒的に贅沢なヴィラ空間",
            "ベドウィンの伝統朝食付",
            "満天の星空を眺めるプライベート屋外ダイニング"
          ]
        }
      }
    }
  ];

  // States
  const [viewModes, setViewModes] = useState<Record<string, "wild" | "plush">>({
    "geo-dome-deluxe": "wild",
    "geo-dome-suite": "wild",
    "safari-suite": "wild"
  });

  const [rateModes, setRateModes] = useState<Record<string, "weekday" | "weekend">>({
    "geo-dome-deluxe": "weekend",
    "geo-dome-suite": "weekend",
    "safari-suite": "weekend"
  });

  const [capacitySelections, setCapacitySelections] = useState<Record<string, "double" | "triple" | "quadruple" | "quintuple">>({
    "geo-dome-deluxe": "double",
    "geo-dome-suite": "double",
    "safari-suite": "double"
  });

  const [embedLiveKwentra, setEmbedLiveKwentra] = useState(false);
  const EXCHANGE_RATE = 50.0;

  // Real-time simulated inventory database
  const [inventory] = useState<Record<string, Record<string, { status: "available" | "booked"; roomsLeft: number }>>>({
    "geo-dome-deluxe": {
      "18-06-2026": { status: "available", roomsLeft: 2 },
      "19-06-2026": { status: "booked", roomsLeft: 0 },
      "20-06-2026": { status: "booked", roomsLeft: 0 },
      "21-06-2026": { status: "available", roomsLeft: 4 },
      "22-06-2026": { status: "available", roomsLeft: 5 },
      "23-06-2026": { status: "available", roomsLeft: 3 },
      "24-06-2026": { status: "available", roomsLeft: 1 },
    },
    "geo-dome-suite": {
      "18-06-2026": { status: "available", roomsLeft: 1 },
      "19-06-2026": { status: "available", roomsLeft: 2 },
      "20-06-2026": { status: "booked", roomsLeft: 0 },
      "21-06-2026": { status: "booked", roomsLeft: 0 },
      "22-06-2026": { status: "available", roomsLeft: 3 },
      "23-06-2026": { status: "available", roomsLeft: 2 },
      "24-06-2026": { status: "available", roomsLeft: 4 },
    },
    "safari-suite": {
      "18-06-2026": { status: "booked", roomsLeft: 0 },
      "19-06-2026": { status: "booked", roomsLeft: 0 },
      "20-06-2026": { status: "available", roomsLeft: 1 },
      "21-06-2026": { status: "available", roomsLeft: 1 },
      "22-06-2026": { status: "available", roomsLeft: 2 },
      "23-06-2026": { status: "booked", roomsLeft: 0 },
      "24-06-2026": { status: "available", roomsLeft: 2 },
    },
  });

  const calendarDates = [
    "18-06-2026",
    "19-06-2026",
    "20-06-2026",
    "21-06-2026",
    "22-06-2026",
    "23-06-2026",
    "24-06-2026"
  ];

  const [selectedCalendarDate, setSelectedCalendarDate] = useState("18-06-2026");

  const toggleViewMode = (id: string, mode: "wild" | "plush") => {
    setViewModes(prev => ({ ...prev, [id]: mode }));
  };

  const toggleRateMode = (id: string, mode: "weekday" | "weekend") => {
    setRateModes(prev => ({ ...prev, [id]: mode }));
  };

  const chooseCapacity = (id: string, cap: "double" | "triple" | "quadruple" | "quintuple") => {
    setCapacitySelections(prev => ({ ...prev, [id]: cap }));
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-desert-offwhite max-w-7xl mx-auto text-black">
      {/* Editorial Header Section */}
      <div className="border-b-2 border-black pb-12 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-2xl">
          <span className="font-mono text-[10px] tracking-widest text-[#777] uppercase mb-3 font-semibold block">
            {t("suitesPricingSeason")}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-desert-dark tracking-tight leading-none uppercase">
            {t("curatedDwellingsTitle")}
          </h2>
          <p className="font-sans text-xs text-[#555] max-w-xl mt-3 leading-relaxed">
            {t("curatedDwellingsDesc")}
          </p>
        </div>

        {/* Global Instant Reservation Switchboard */}
        <div className="flex flex-col items-start md:items-end gap-3">
          <a
            href="https://manage.kwentra.com/reservation/online/#/filter?arrival=18-06-2026&departure=19-06-2026&selling_type=rooms&selling_types=Rooms&rooms_info=%5B%7B%22id%22%3A0%2C%22adults%22%3A1%2C%22children%22%3A0%7D%5D&promo=&voucher=&profile_id=&currency=EGP&date_format=DD-MM-YYYY&room_type=&selected_hotel=653&lang=en-us&company=151&max_num_rooms=10&child_age_dropdown_list=true&children_dropdown_list=true&terminologies=%7B%7D&hotel_selection=%7B%22dropdown%22%3Afalse%2C%22allow_empty%22%3Afalse%2C%22destinations%22%3Afalse%7D&instances=653&specific_rooms_selling=false"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 bg-black text-white hover:bg-desert-blue hover:text-black px-6 py-4 font-mono text-xs uppercase tracking-widest border-2 border-black shadow-brutalist transition-all duration-300"
          >
            <span>{t("launchBookingEngine")}</span>
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* 2-Way Filter & Nationality Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white border-2 border-black p-6 mb-8 shadow-brutalist">
        <div>
          <span className="font-mono text-[9px] uppercase text-[#666] block mb-2 font-bold tracking-wider">
            {t("selectNationalityRequired")}
          </span>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setNationality("egyptian")}
              className={`py-2 px-3 border-2 font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                nationality === "egyptian"
                  ? "bg-black text-white border-black font-semibold"
                  : "bg-white text-black border-black/15 hover:border-black/45"
              }`}
            >
              {t("egyptianIdOption")}
            </button>
            <button
              type="button"
              onClick={() => {
                setNationality("non-egyptian");
              }}
              className={`py-2 px-3 border-2 font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                nationality === "non-egyptian"
                  ? "bg-black text-white border-black font-semibold"
                  : "bg-white text-black border-black/15 hover:border-black/45"
              }`}
            >
              {t("nonEgyptianOption")}
            </button>
          </div>
        </div>

        <div>
          <span className="font-mono text-[9px] uppercase text-[#666] block mb-2 font-bold tracking-wider">
            {t("currencyPreferenceTitle")}
          </span>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setCurrency("EGP")}
              className={`py-2 px-4 border-2 font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                currency === 'EGP'
                  ? "bg-black text-white border-black font-semibold"
                  : "bg-white text-black border-black/15 hover:border-[#111]"
              }`}
            >
              {t("egpOption")}
            </button>
            <button
              type="button"
              onClick={() => setCurrency("USD")}
              className={`py-2 px-4 border-2 font-mono text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                currency === 'USD'
                  ? "bg-black text-white border-black font-semibold"
                  : "bg-white text-black border-black/15 hover:border-[#111]"
              }`}
            >
              {t("usdOption")}
            </button>
          </div>
        </div>
      </div>



      {/* Grid showing interactive quiet luxury accommodations */}
      <h3 className="font-serif text-2xl uppercase tracking-tight mb-6 text-black border-b-2 border-black pb-3">
        {t("roomCategoriesLiveRates")}
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {accommodationsData.map((room, index) => {
          const currentView = viewModes[room.id] || "wild";
          const currentPricingMode = rateModes[room.id] || "weekend";
          
          // Retrieve rates based on active currency selection
          const currencyRates = currency === "USD" ? room.rates.USD : room.rates.EGP;
          const availableRates = currencyRates[currentPricingMode];
          
          const rawCap = capacitySelections[room.id] || "double";
          const currentCap = availableRates[rawCap as keyof PricingPlan] ? rawCap : "double";

          const priceToShow = availableRates[currentCap as keyof PricingPlan] || availableRates.double;

          // Resolve translations dynamically based on current language
          const localized = room.translations?.[language] || {
            title: room.title,
            subTitle: room.subTitle,
            description: room.description,
            amenities: room.amenities,
            features: room.features,
          };
          const title = localized.title;
          const subTitle = localized.subTitle;
          const description = localized.description;
          const amenities = localized.amenities;
          const features = localized.features;

          return (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="flex flex-col h-full bg-white border-2 border-black p-6 transition-all duration-300 shadow-brutalist hover:-translate-y-1"
            >
              {/* Media Split comparison container */}
              <div className="relative overflow-hidden aspect-video mb-6 border-2 border-black bg-neutral-100">
                <AnimatePresence mode="wait">
                  {currentView === "wild" ? (
                    <motion.img
                      key="wild"
                      src={room.imageUrl}
                      alt={`${title} ${t("exteriorLabel")}`}
                      referrerPolicy="no-referrer"
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.95, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <motion.img
                      key="plush"
                      src={room.interiorImageUrl}
                      alt={`${title} ${t("interiorLabel")}`}
                      referrerPolicy="no-referrer"
                      initial={{ scale: 1.1, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.95, opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover"
                    />
                  )}
                </AnimatePresence>

                {/* View Modes overlay selectors */}
                <div className="absolute bottom-3 left-3 flex bg-[#faf9f6] border border-black p-1 space-x-1 z-10">
                  <button
                    onClick={() => toggleViewMode(room.id, "wild")}
                    className={`px-2 py-1 font-mono text-[8px] uppercase tracking-wider transition-all cursor-pointer ${
                      currentView === "wild"
                        ? "bg-black text-white"
                        : "text-black hover:bg-desert-blue-light"
                    }`}
                  >
                    {t("exteriorLabel")}
                  </button>
                  <button
                    onClick={() => toggleViewMode(room.id, "plush")}
                    className={`px-2 py-1 font-mono text-[8px] uppercase tracking-wider transition-all cursor-pointer ${
                      currentView === "plush"
                        ? "bg-black text-white"
                        : "text-black hover:bg-desert-blue-light"
                    }`}
                  >
                    {t("interiorLabel")}
                  </button>
                </div>

                {/* Occupancy Indicator limit */}
                <div className="absolute top-3 right-3 bg-black text-white px-2 py-0.5 font-mono text-[8px] tracking-widest uppercase z-10">
                  {t("maxGuests").toUpperCase()}: {room.maxOccupancy}
                </div>
              </div>

              {/* Title & Description details */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[9px] tracking-widest text-[#777] uppercase">
                      {subTitle}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold tracking-tight text-desert-dark uppercase mb-3">
                    {title}
                  </h3>

                  <p className="font-sans text-[11px] text-desert-charcoal/80 leading-relaxed mb-6">
                    {description}
                  </p>

                  {/* WEEKEND vs WEEKDAYS SELECTOR BOX */}
                  <div className="bg-desert-offwhite border border-black p-3.5 mb-6">
                    <span className="font-mono text-[9px] uppercase text-[#777] block mb-2 font-bold tracking-wider">
                      {t("selectRateBasis")}
                    </span>
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <button
                        onClick={() => toggleRateMode(room.id, "weekday")}
                        className={`py-1.5 px-2 border text-[9px] font-mono uppercase tracking-wider transition-all ${
                          currentPricingMode === "weekday"
                            ? "bg-black text-white border-black"
                            : "bg-white text-black border-black/15 hover:border-black/30"
                        }`}
                      >
                        {t("weekdaysLabel")}
                      </button>
                      <button
                        onClick={() => toggleRateMode(room.id, "weekend")}
                        className={`py-1.5 px-2 border text-[9px] font-mono uppercase tracking-wider transition-all ${
                          currentPricingMode === "weekend"
                            ? "bg-black text-white border-black"
                            : "bg-white text-black border-black/15 hover:border-black/30"
                        }`}
                      >
                        {t("weekendLabel")}
                      </button>
                    </div>

                    {/* Guest occupancy configuration selections */}
                    <span className="font-mono text-[9px] uppercase text-[#777] block mb-2 font-bold tracking-wider">
                      {t("selectOccupancy")}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {Object.keys(availableRates).map((capKey) => {
                        const isSelected = currentCap === capKey;
                        return (
                          <button
                            key={capKey}
                            onClick={() => chooseCapacity(room.id, capKey as any)}
                            className={`px-2.5 py-1 text-[9px] font-mono border capitalize ${
                              isSelected
                                ? "bg-desert-blue text-black border-black font-semibold"
                                : "bg-white text-black border-black/15 hover:border-black/30"
                            }`}
                          >
                            {capKey}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Calculated Price Display Callout */}
                  <div className="border border-black bg-black text-white p-3.5 mb-4 flex items-center justify-between">
                    <div>
                      <span className="font-mono text-[8px] tracking-widest text-[#888] uppercase block">
                        {t("calculatedRate")}
                      </span>
                      <span className="font-mono text-[10px] text-desert-blue">
                        {currentPricingMode.toUpperCase()} — {currentCap.toUpperCase()}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-serif text-lg font-bold block text-desert-blue">
                        {currency === "USD" 
                          ? `$${priceToShow.toLocaleString()} USD` 
                          : `${priceToShow.toLocaleString()} EGP`
                        }
                      </span>
                      <span className="font-sans text-[8px] text-[#aaa]">
                        {currency === "USD" 
                          ? `${t("approxLabel")} ${Math.round(priceToShow * EXCHANGE_RATE).toLocaleString()} EGP` 
                          : `${t("approxLabel")} $${Math.round(priceToShow / EXCHANGE_RATE).toLocaleString()} USD`
                        } • {t("exclTaxes")}
                      </span>
                    </div>
                  </div>

                  {/* Instant Booking Link */}
                  <a
                    href="https://manage.kwentra.com/reservation/online/#/filter?arrival=18-06-2026&departure=19-06-2026&selling_type=rooms&selling_types=Rooms&rooms_info=%5B%7B%22id%22%3A0%2C%22adults%22%3A1%2C%22children%22%3A0%7D%5D&promo=&voucher=&profile_id=&currency=EGP&date_format=DD-MM-YYYY&room_type=&selected_hotel=653&lang=en-us&company=151&max_num_rooms=10&child_age_dropdown_list=true&children_dropdown_list=true&terminologies=%7B%7D&hotel_selection=%7B%22dropdown%22%3Afalse%2C%22allow_empty%22%3Afalse%2C%22destinations%22%3Afalse%7D&instances=653&specific_rooms_selling=false"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-black hover:bg-desert-blue hover:text-black text-[#faf9f6] text-center font-mono py-2.5 px-4 font-bold text-[10px] tracking-wider uppercase border border-black mb-6 flex items-center justify-center space-x-2 transition-all cursor-pointer shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:translate-x-[1px] active:translate-y-[1px]"
                  >
                    <span>{t("reserveThisDome")}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  {/* Amenities checklist */}
                  <div className="border-t border-black/10 pt-4 mb-6">
                    <h4 className="font-mono text-[9px] tracking-widest text-desert-dark uppercase mb-3.5 flex items-center space-x-1.5 font-bold">
                      <Compass className="w-3.5 h-3.5 text-desert-blue" />
                      <span>{t("includedComfort")}</span>
                    </h4>
                    <ul className="grid grid-cols-1 gap-1.5 text-[10px] text-desert-charcoal/90 font-sans">
                      {amenities.map((amenity, i) => (
                        <li key={i} className="flex items-center space-x-1.5">
                          <span className="w-1 h-1 bg-desert-blue rounded-full" />
                          <span>{amenity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Features layout markers */}
                <div className="mt-auto pt-4 border-t border-black/10 flex flex-wrap gap-1.5">
                  {features.map((feature, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center space-x-1 font-mono text-[8px] tracking-wider text-black bg-[#C8B9A6]/15 border border-[#C8B9A6]/20 px-2 py-0.5"
                    >
                      <ShieldCheck className="w-2.5 h-2.5 text-[#C8B9A6] mr-0.5" />
                      <span>{feature}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>


    </section>
  );
}
