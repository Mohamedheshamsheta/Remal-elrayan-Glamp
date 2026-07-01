import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight, Camera, Maximize2, Layers } from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface GalleryImage {
  id: string;
  url: string;
  category: "stays" | "nature" | "dining" | "cosmos";
  translations: {
    en: { title: string; desc: string };
    ar: { title: string; desc: string };
    es: { title: string; desc: string };
    fr: { title: string; desc: string };
    de: { title: string; desc: string };
    ja: { title: string; desc: string };
  };
}

const galleryData: GalleryImage[] = [
  {
    id: "stay-1",
    url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&q=80",
    category: "stays",
    translations: {
      en: { title: "Geo-Dome Suite Interior", desc: "Plush Bedouin woven textiles blending with contemporary luxury comforts." },
      ar: { title: "التصميم الداخلي لجناح القبة", desc: "منسوجات بدوية فاخرة ممتزجة مع وسائل الراحة العصرية المعاصرة." },
      es: { title: "Interior de Suite Geo-Dome", desc: "Tejidos beduinos de felpa que se mezclan con comodidades de lujo contemporáneo." },
      fr: { title: "Intérieur de la Suite Géo-Dôme", desc: "Textiles bédouins moelleux s'alliant au confort du luxe contemporain." },
      de: { title: "Geo-Dome Suite Innenraum", desc: "Feine beduinische Textilien verschmelzen mit zeitgenössischem Luxuskomfort." },
      ja: { title: "ジオデシック・ドーム・スイート内観", desc: "贅を尽くしたベドウィン織物と現代的なラグジュアリーアメニティの融合。" }
    }
  },
  {
    id: "nature-1",
    url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80",
    category: "nature",
    translations: {
      en: { title: "Magic Wadi El Rayan Lakes", desc: "The deep sapphire waters contrasting beautifully with the golden desert dunes." },
      ar: { title: "بحيرات وادي الريان الساحرة", desc: "المياه الياقوتية العميقة تتباين بشكل رائع مع الكثبان الرملية الذهبية." },
      es: { title: "Lagos Mágicos de Wadi El Rayan", desc: "Las profundas aguas de zafiro contrastan bellamente con las dunas doradas." },
      fr: { title: "Lacs Magiques de Wadi El Rayan", desc: "Les eaux saphir profondes contrastant magnifiquement avec les dunes d'or." },
      de: { title: "Die magischen Seen von Wadi El Rayan", desc: "Tief saphirblaue Gewässer im wunderschönen Kontrast zu den goldenen Dünen." },
      ja: { title: "神秘のワディ・エル・ラヤン湖", desc: "黄金に輝く砂丘と、深く澄んだサファイアブルーの湖水が織りなす対比美。" }
    }
  },
  {
    id: "cosmos-1",
    url: "https://images.unsplash.com/photo-1533619239203-3a78cfd298bb?auto=format&fit=crop&w=1200&q=80",
    category: "cosmos",
    translations: {
      en: { title: "Domes Under the Galaxy", desc: "A mesmerizing long exposure capturing the Milky Way arching over our stargazing domes." },
      ar: { title: "القباب تحت مجرة درب التبانة", desc: "تعريض ضوئي طويل مذهل يصور مجرة درب التبانة وهي تقوس فوق قباب رصد النجوم." },
      es: { title: "Domos bajo la Galaxia", desc: "Una fascinante exposición prolongada que captura la Vía Láctea sobre nuestros domos." },
      fr: { title: "Dômes sous la Voie Lactée", desc: "Une longue exposition fascinante capturant la Voie Lactée au-dessus de nos dômes." },
      de: { title: "Geodome unter der Milchstraße", desc: "Eine faszinierende Langzeitbelichtung der Milchstraße über unseren Kuppeln." },
      ja: { title: "天の川を仰ぐドーム", desc: "天体観測ドームの真上に広がる、息をのむほど美しい銀河のアーチ。" }
    }
  },
  {
    id: "dining-1",
    url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
    category: "dining",
    translations: {
      en: { title: "Lummayya Fireside Dinners", desc: "Gather around the artisan campfire for authentic bedouin meals under the starlit sky." },
      ar: { title: "عشاء كامبفاير لومايا", desc: "تجمع حول موقد النار البدوي الأصيل لتناول وجبات بدوية شهية تحت النجوم." },
      es: { title: "Cenas junto al fuego en Lummayya", desc: "Reúnase alrededor de la hoguera para disfrutar de comidas beduinas auténticas bajo las estrellas." },
      fr: { title: "Dîners au coin du feu à Lummayya", desc: "Rassemblez-vous autour du feu de camp pour de délicieux repas bédouins sous les étoiles." },
      de: { title: "Lagerfeuer-Dinner im Lummayya", desc: "Kommen Sie am offenen Feuer zusammen für traditionelle Beduinen-Mahlzeiten." },
      ja: { title: "ルフマヤ・ファイヤーサイド・ディナー", desc: "星空の下、パチパチと燃える炎を囲みながら味わう伝統的なベドウィン料理。" }
    }
  },
  {
    id: "stay-2",
    url: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=1200&q=80",
    category: "stays",
    translations: {
      en: { title: "Safari Suite Exterior Deck", desc: "Spacious private teakwood deck equipped with premium relaxation lounges." },
      ar: { title: "تراس جناح السفاري الخارجي", desc: "تراس واسع خاص مصنوع من خشب التيك ومجهز بصالونات استرخاء ممتازة." },
      es: { title: "Terraza Exterior de Suite Safari", desc: "Amplia terraza privada de madera de teca equipada con salones de relajación premium." },
      fr: { title: "Terrasse Extérieure de la Suite Safari", desc: "Grande terrasse privée en bois de teck équipée de salons de détente haut de gamme." },
      de: { title: "Safari Suite Außenterrasse", desc: "Großzügiges privates Teakholz-Deck, perfekt ausgestattet mit Premium-Liegen." },
      ja: { title: "サファリ・スイート・屋外ウッドデッキ", desc: "極上のリラクゼーションを約束する、最高級チーク材を使用したプライベートテラス。" }
    }
  },
  {
    id: "nature-2",
    url: "https://images.unsplash.com/photo-1531266752426-aad472b7bbf4?auto=format&fit=crop&w=1200&q=80",
    category: "nature",
    translations: {
      en: { title: "Sahara Golden Dunes", desc: "Endless ripples of premium wind-sculpted sand in the Faiyum oasis protectorate." },
      ar: { title: "الكثبان الرملية الذهبية بالصحراء", desc: "تموجات لا نهاية لها من الرمال الذهبية التي نحتتها الرياح في محمية فيوم." },
      es: { title: "Dunas Doradas del Sahara", desc: "Ondulaciones infinitas de arena esculpida por el viento en el oasis de Fayoum." },
      fr: { title: "Dunes Dorées du Sahara", desc: "Ondulations infinies de sable sculpté par le vent dans la réserve de l'oasis de Fayoum." },
      de: { title: "Goldene Dünen der Sahara", desc: "Endlose, vom Wind geformte Sandwellen im Naturschutzgebiet der Oase Fayoum." },
      ja: { title: "サハラに刻まれる黄金の砂紋", desc: "ファイユーム保護区に広がる、風が描き出す終わりなき砂の芸術。" }
    }
  },
  {
    id: "cosmos-2",
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80",
    category: "cosmos",
    translations: {
      en: { title: "Celestial Astronomy Observatory", desc: "Embark on guided star discovery tours with our computer-guided professional telescopes." },
      ar: { title: "مرصد علم الفلك السماوي", desc: "انطلق في جولات إرشادية لاكتشاف النجوم باستخدام تلسكوباتنا المهنية الموجهة بالكمبيوتر." },
      es: { title: "Observatorio de Astronomía Celeste", desc: "Embárquese en recorridos guiados por las estrellas con nuestros telescopios de precisión." },
      fr: { title: "Observatoire Astronomique Céleste", desc: "Partez pour des visites guidées d'observation des étoiles avec nos télescopes de pointe." },
      de: { title: "Himmlisches Astronomie-Observatorium", desc: "Erleben Sie geführte Sternenbeobachtungen mit unseren computergesteuerten Profiteleskopen." },
      ja: { title: "天体観測・スターゲイジング体験", desc: "コンピューター制御のプロ用望遠鏡で、神秘的な夜空の星座を巡るガイドツアー。" }
    }
  },
  {
    id: "dining-2",
    url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1200&q=80",
    category: "dining",
    translations: {
      en: { title: "Lummayya Outdoor Dining Lounge", desc: "Experience gourmet local flavors overlooking the panoramic desert vistas." },
      ar: { title: "صالة الطعام الخارجية بمطعم لومايا", desc: "تذوق نكهات محلية ممتازة أثناء الاستمتاع بالإطلالات البانورامية على الصحراء." },
      es: { title: "Salón de Comedor Exterior Lummayya", desc: "Disfrute de sabores gourmet locales frente a vistas desérticas panorámicas." },
      fr: { title: "Salon de Repas Extérieur Lummayya", desc: "Savourez des saveurs gastronomiques locales avec vue sur les panoramas désertiques." },
      de: { title: "Lummayya Outdoor-Lounge", desc: "Genießen Sie exquisite lokale Aromen mit Blick auf das spektakuläre Wüstenpanorama." },
      ja: { title: "ルフマヤ・屋外ダイニングサロン", desc: "広大な砂漠のパノラマビューを目の前に、地元の厳選素材を活かした極上グルメを。" }
    }
  }
];

export default function Gallery() {
  const { language } = useLanguage();
  const [filter, setFilter] = useState<"all" | "stays" | "nature" | "dining" | "cosmos">("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex]);

  const filteredImages = filter === "all" 
    ? galleryData 
    : galleryData.filter(img => img.category === filter);

  const handlePrev = () => {
    setLightboxIndex(prev => {
      if (prev === null) return null;
      return prev === 0 ? filteredImages.length - 1 : prev - 1;
    });
  };

  const handleNext = () => {
    setLightboxIndex(prev => {
      if (prev === null) return null;
      return prev === filteredImages.length - 1 ? 0 : prev + 1;
    });
  };

  const getTranslationText = (key: "all" | "stays" | "nature" | "dining" | "cosmos") => {
    const texts: Record<string, Record<string, string>> = {
      all: { en: "All Gallery", ar: "كل الصور", es: "Toda la Galería", fr: "Toute la Galerie", de: "Gesamte Galerie", ja: "すべての写真" },
      stays: { en: "Stays & Suites", ar: "أجنحة وإقامات", es: "Alojamiento", fr: "Suites & Hébergements", de: "Unterkünfte & Suiten", ja: "客室とスイート" },
      nature: { en: "Desert & Lakes", ar: "الصحراء والبحيرات", es: "Desierto y Lagos", fr: "Désert & Lacs", de: "Wüste & Seen", ja: "砂漠と湖" },
      dining: { en: "Lummayya Dining", ar: "مطعم لومايا", es: "Gastronomía", fr: "Cuisine & Feu de Camp", de: "Lummayya Kulinarik", ja: "ルフマヤ料理" },
      cosmos: { en: "Stargazing", ar: "رصد النجوم", es: "Observación Estelar", fr: "Astronomie", de: "Sternenhimmel", ja: "天体観測と星空" }
    };
    return texts[key]?.[language] || texts[key]?.["en"];
  };

  const getGeneralText = (key: "title" | "subtitle" | "close" | "prev" | "next") => {
    const texts: Record<string, Record<string, string>> = {
      title: { en: "CRAFTED RETREAT GALLERY", ar: "معرض الصور الفاخرة", es: "GALERÍA DE NUESTRO REFUGIO", fr: "GALERIE DE NOTRE REFUGE", de: "GALERIE UNSERES RETREATS", ja: "リトリート・ギャラリー" },
      subtitle: { en: "Visual moments from Egypt’s premier luxury wilderness glamp.", ar: "لقطات بصرية حية من أفضل مخيم صحراوي فاخر في مصر.", es: "Momentos visuales de nuestro exclusivo glamp de desierto.", fr: "Moments visuels de notre glamping d'exception.", de: "Visuelle Eindrücke unseres luxuriösen Wüsten-Glampings.", ja: "エジプト最高峰のラグジュアリー・グランピングを視覚的に体験する。" },
      close: { en: "Close", ar: "إغلاق", es: "Cerrar", fr: "Fermer", de: "Schließen", ja: "閉じる" },
      prev: { en: "Previous", ar: "السابق", es: "Anterior", fr: "Précédent", de: "Zurück", ja: "前へ" },
      next: { en: "Next", ar: "التالي", es: "Siguiente", fr: "Suivant", de: "Weiter", ja: "次へ" }
    };
    return texts[key]?.[language] || texts[key]?.["en"];
  };

  return (
    <div id="gallery-section" className="space-y-12">
      {/* Gallery Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-desert-blue/10 border border-desert-blue/30 text-desert-blue font-mono text-[9px] uppercase tracking-widest font-bold rounded-full">
          <Camera className="w-3.5 h-3.5" />
          <span>{language === "ar" ? "ألبوم الصور الحصري" : "REMAL PORTFOLIO"}</span>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-tighter text-desert-dark">
          {getGeneralText("title")}
        </h2>
        <div className="w-16 h-[2px] bg-desert-blue mx-auto mt-2" />
        <p className="font-sans text-xs md:text-sm text-neutral-600">
          {getGeneralText("subtitle")}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center items-center">
        {(["all", "stays", "nature", "dining", "cosmos"] as const).map((cat) => {
          const isActive = filter === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 font-mono text-[10px] tracking-widest uppercase font-bold transition-all duration-200 cursor-pointer border-2 ${
                isActive
                  ? "bg-black text-white border-black shadow-[3px_3px_0px_rgba(0,0,0,1)] translate-x-[-1px] translate-y-[-1px]"
                  : "bg-[#F4EFE3] text-[#333] border-black/10 hover:border-black hover:bg-white"
              }`}
            >
              {getTranslationText(cat)}
            </button>
          );
        })}
      </div>

      {/* Grid Display */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filteredImages.map((img, index) => {
            const translation = img.translations[language as keyof typeof img.translations] || img.translations.en;
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.4 }}
                key={img.id}
                onClick={() => setLightboxIndex(index)}
                className="bg-[#F4EFE3] border-2 border-black p-2.5 shadow-brutalist cursor-pointer group relative overflow-hidden flex flex-col h-[320px]"
              >
                {/* Image wrapper */}
                <div className="h-[210px] w-full overflow-hidden relative border border-black/10 bg-neutral-200">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 z-10 flex items-center justify-center">
                    <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100" />
                  </div>
                  <img
                    src={img.url}
                    alt={translation.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-2.5 left-2.5 z-20 bg-black text-white text-[8px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 border border-white/20">
                    {img.category}
                  </div>
                </div>

                {/* Captions */}
                <div className="p-2.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-sm font-bold text-desert-dark line-clamp-1 group-hover:text-desert-blue transition-colors">
                      {translation.title}
                    </h3>
                    <p className="font-sans text-[10.5px] text-neutral-500 mt-1 line-clamp-2 leading-relaxed">
                      {translation.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (() => {
          const img = filteredImages[lightboxIndex];
          const translation = img.translations[language as keyof typeof img.translations] || img.translations.en;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/95 z-50 flex flex-col justify-between p-6 select-none"
              onClick={() => setLightboxIndex(null)}
            >
              {/* Lightbox Header */}
              <div className="flex justify-between items-center text-white" onClick={e => e.stopPropagation()}>
                <div className="font-mono text-xs tracking-widest text-neutral-400">
                  {lightboxIndex + 1} / {filteredImages.length}
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  className="p-2 bg-neutral-900 border border-white/10 hover:border-white text-white rounded-none cursor-pointer transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Lightbox main viewport */}
              <div className="flex-1 flex items-center justify-between gap-4 py-4" onClick={e => e.stopPropagation()}>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="p-3 bg-neutral-900 border border-white/10 hover:border-white hover:bg-neutral-800 text-white rounded-none cursor-pointer transition-colors"
                  aria-label={getGeneralText("prev")}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="max-w-4xl max-h-[60vh] md:max-h-[70vh] overflow-hidden flex items-center justify-center relative">
                  <motion.img
                    key={img.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    src={img.url}
                    alt={translation.title}
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-[60vh] md:max-h-[70vh] object-contain border-2 border-white/10 shadow-2xl"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="p-3 bg-neutral-900 border border-white/10 hover:border-white hover:bg-neutral-800 text-white rounded-none cursor-pointer transition-colors"
                  aria-label={getGeneralText("next")}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Lightbox footer details */}
              <div 
                className="max-w-2xl mx-auto text-center text-white pb-6 space-y-2.5" 
                onClick={e => e.stopPropagation()}
              >
                <div className="inline-block bg-desert-blue text-black font-mono text-[8px] font-bold tracking-widest uppercase px-2.5 py-0.5">
                  {img.category}
                </div>
                <h3 className="font-serif text-xl md:text-2xl font-bold uppercase tracking-wide">
                  {translation.title}
                </h3>
                <p className="font-sans text-xs md:text-sm text-neutral-400 max-w-lg mx-auto leading-relaxed">
                  {translation.desc}
                </p>
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
}
