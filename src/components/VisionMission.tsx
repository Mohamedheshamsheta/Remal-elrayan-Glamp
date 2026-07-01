import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { Compass, Target, Award, Sparkles, Heart } from "lucide-react";

interface VisionMissionTranslation {
  visionTitle: string;
  visionSubtitle: string;
  visionBody: string;
  missionTitle: string;
  missionSubtitle: string;
  missionBody: string;
  pointsTitle: string;
  points: {
    title: string;
    desc: string;
  }[];
}

const translations: Record<string, VisionMissionTranslation> = {
  en: {
    visionTitle: "Our Vision (رؤيتنا)",
    visionSubtitle: "To continuously lead, define, and elevate the luxury desert experience in Egypt.",
    visionBody: "Our vision is to set the ultimate global benchmark for refined, authentic desert hospitality. We see Remal not just as a destination, but as a movement that reimagines how guests connect with the Egyptian wilderness. By harmonizing quiet luxury with raw nature, we aim to remain the pioneers of sustainable, immersive desert glamping, proving that world-class hospitality and cultural heritage can thrive hand in hand.",
    missionTitle: "Our Mission (مهمتنا)",
    missionSubtitle: "To craft transformative journeys that honor the land, empower its people, and inspire the soul.",
    missionBody: "At Remal, our mission is to deliver an unmatched, deeply grounded hospitality experience through flexible, home-grown management systems. We are dedicated to:",
    pointsTitle: "Core Commitments",
    points: [
      {
        title: "Leading with Authenticity",
        desc: "Preserving the raw, mystical beauty of Faiyum while offering an elegant, minimalist sanctuary for our guests."
      },
      {
        title: "Empowering Local Communities",
        desc: "Investing directly in the local market and nurturing the craftsmanship and hospitality of the region's people."
      },
      {
        title: "Pioneering a New Era",
        desc: "Rejecting standard corporate templates to build a flexible, adaptive family model that celebrates Egyptian customs, setting a new standard for hospitality in the region."
      }
    ]
  },
  ar: {
    visionTitle: "رؤيتنا (Our Vision)",
    visionSubtitle: "قيادة وتحديد والارتقاء بتجربة الصحراء الفاخرة في مصر باستمرار.",
    visionBody: "رؤيتنا هي وضع معيار عالمي متميز للضيافة الصحراوية الراقية والأصيلة. نحن لا نرى رمال مجرد وجهة، بل كحركة تعيد رسم كيفية تواصل الضيوف مع البرية المصرية. من خلال التناغم بين الفخامة الهادئة والطبيعة البكر، نهدف إلى أن نظل رواداً للتخييم الفاخر المستدام والغامر، لإثبات أن الضيافة ذات المستوى العالمي والتراث الثقافي يمكن أن يزدهرا يداً بيد.",
    missionTitle: "مهمتنا (Our Mission)",
    missionSubtitle: "صياغة رحلات ملهمة تكرم الأرض، وتمكن أفرادها، وتلهم الروح.",
    missionBody: "مهمتنا في رمال هي تقديم تجربة ضيافة عميقة الجذور ولا تضاهى من خلال أنظمة إدارية مرنة ومحلية التطوير. نحن ملتزمون بـ:",
    pointsTitle: "الالتزامات الأساسية",
    points: [
      {
        title: "الريادة بالأصالة",
        desc: "الحفاظ على الجمال البكر والغامض للفيوم مع تقديم ملاذ أنيق وبسيط لضيوفنا."
      },
      {
        title: "تمكين المجتمعات المحلية",
        desc: "الاستثمار المباشر في السوق المحلي ورعاية الحرفية والضيافة لأبناء المنطقة."
      },
      {
        title: "رواد عهد جديد",
        desc: "رفض القوالب الجاهزة للشركات لبناء نموذج عائلي مرن ومتكيف يحتفل بالعادات المصرية، مما يضع معياراً جديداً للضيافة في المنطقة."
      }
    ]
  },
  es: {
    visionTitle: "Nuestra Visión (رؤيتنا)",
    visionSubtitle: "Liderar, definir y elevar continuamente la experiencia del desierto de lujo en Egipto.",
    visionBody: "Nuestra visión es establecer el estándar de referencia global definitivo para una hospitalidad refinada y auténtica en el desierto. Vemos a Remal no solo como un destino, sino como un movimiento que rediseña cómo los huéspedes se conectan con el desierto egipcio. Al armonizar el lujo silencioso con la naturaleza virgen, aspiramos a seguir siendo los pioneros del glamping sostenible e inmersivo en el desierto, demostrando que la hospitalidad de clase mundial y el patrimonio cultural pueden prosperar de la mano.",
    missionTitle: "Nuestra Misión (مهمتنا)",
    missionSubtitle: "Diseñar viajes transformadores que honren la tierra, empoderen a su gente e inspiren el alma.",
    missionBody: "En Remal, nuestra misión es ofrecer una experiencia de hospitalidad inigualable y profundamente arraigada a través de sistemas de gestión flexibles y de desarrollo propio. Estamos dedicados a:",
    pointsTitle: "Compromisos Clave",
    points: [
      {
        title: "Liderar con Autenticidad",
        desc: "Preservar la belleza cruda y mística de Faiyum mientras ofrecemos un santuario elegante y minimalista para nuestros huéspedes."
      },
      {
        title: "Empoderar a las Comunidades Locales",
        desc: "Invertir directamente en el mercado local y fomentar la artesanía y la hospitalidad de la gente de la región."
      },
      {
        title: "Pioneros de una Nueva Era",
        desc: "Rechazar las plantillas corporativas estándar para construir un modelo familiar flexible y adaptativo que celebre las costumbres egipcias, estableciendo un nuevo estándar para la hospitalidad en la región."
      }
    ]
  },
  fr: {
    visionTitle: "Notre Vision (رؤيتنا)",
    visionSubtitle: "Diriger, définir et élever continuellement l'expérience de luxe dans le désert en Égypte.",
    visionBody: "Notre vision est d'établir la référence mondiale ultime pour une hospitalité raffinée et authentique dans le désert. Nous voyons Remal non pas simplement comme une destination, mais comme un mouvement qui réimagine la façon dont les clients se connectent avec la nature sauvage égyptienne. En harmonisant le luxe discret avec la nature brute, nous visons à rester les pionniers du glamping éco-responsable et immersif, prouvant que l'hospitalité de classe mondiale et le patrimoine culturel peuvent s'épanouir main dans la main.",
    missionTitle: "Notre Mission (مهمتنا)",
    missionSubtitle: "Créer des voyages transformateurs qui honorent la terre, autonomisent ses habitants et inspirent l'âme.",
    missionBody: "Chez Remal, notre mission est d'offrir une expérience d'hospitalité inégalée et profondément ancrée grâce à des systèmes de gestion flexibles et locaux. Nous nous engageons à :",
    pointsTitle: "Nos Engagements",
    points: [
      {
        title: "Mener avec Authenticité",
        desc: "Préserver la beauté brute et mystique de Fayoum tout en offrant un sanctuaire élégant et minimaliste à nos hôtes."
      },
      {
        title: "Autonomiser les Communautés Locales",
        desc: "Investir directement dans le marché local et cultiver le savoir-faire et l'hospitalité des habitants de la région."
      },
      {
        title: "Inaugurer une Nouvelle Ère",
        desc: "Rejeter les modèles d'entreprise standard pour construire un modèle familial flexible et adaptatif qui célèbre les coutumes égyptiennes, établissant une nouvelle norme de service dans la région."
      }
    ]
  },
  de: {
    visionTitle: "Unsere Vision (رؤيتنا)",
    visionSubtitle: "Das luxuriöse Wüstenerlebnis in Ägypten kontinuierlich anzuführen, zu definieren und zu veredeln.",
    visionBody: "Unsere Vision ist es, den ultimativen globalen Maßstab für anspruchsvolle, authentische Wüstenhospitalität zu setzen. Wir sehen Remal nicht nur als Reiseziel, sondern als eine Bewegung, die die Verbindung unserer Gäste mit der ägyptischen Wildnis neu erfindet. Durch den Einklang von leisem Luxus und unberührter Natur wollen wir die Pioniere des nachhaltigen, immersiven Wüstenglampings bleiben und beweisen, dass Weltklasse-Gastfreundschaft und kulturelles Erbe Hand in Hand gedeihen können.",
    missionTitle: "Unsere Mission (مهمتنا)",
    missionSubtitle: "Transformative Reisen zu gestalten, die das Land ehren, seine Menschen stärken und die Seele inspirieren.",
    missionBody: "Bei Remal ist es unsere Mission, durch flexible, hausgemachte Managementsysteme ein unvergleichliches, tief verwurzeltes Gastfreundschaftserlebnis zu bieten. Wir widmen uns folgenden Werten:",
    pointsTitle: "Kernverpflichtungen",
    points: [
      {
        title: "Mit Authentizität führen",
        desc: "Die raue, mystische Schönheit von Fayoum zu bewahren und unseren Gästen gleichzeitig ein elegantes, minimalistisches Refugium zu bieten."
      },
      {
        title: "Lokale Gemeinschaften stärken",
        desc: "Direkt in den lokalen Markt zu investieren und das Handwerk sowie die Gastfreundschaft der Menschen in der Region zu fördern."
      },
      {
        title: "Eine neue Ära einläuten",
        desc: "Standardmäßige Unternehmensvorlagen abzulehnen, um ein flexibles, anpassungsfähiges Familienmodell aufzubauen, das die ägyptischen Bräuche feiert und neue Maßstäbe für die Hotellerie in der Region setzt."
      }
    ]
  },
  ja: {
    visionTitle: "私たちのビジョン (رؤيتنا)",
    visionSubtitle: "エジプトにおけるラグジュアリーな砂漠体験を常にリードし、定義し、高め続けること。",
    visionBody: "私たちのビジョンは、洗練された本物の砂漠のホスピタリティにおける究極の世界的なベンチマークを設定することです。レマルを単なる目的地ではなく、ゲストがエジプトの大自然とつながる方法を再構築するムーブメントとして捉えています。静かなラグジュアリーとありのままの自然を調和させることで、私たちは持続可能で没入型の砂漠グランピングのパイオニアであり続け、世界クラスのホスピタリティと文化的遺産が手を取り合って繁栄できることを証明することを目指しています。",
    missionTitle: "私たちの使命 (مهمتنا)",
    missionSubtitle: "土地を敬い、人々を力づけ、魂を揺さぶる変革の旅を創り出すこと。",
    missionBody: "レマルの使命は、柔軟で独自に開発した管理システムを通じて、他に類を見ない、深く根ざしたホスピタリティ体験を提供することです。私たちは以下に専念しています：",
    pointsTitle: "コア・コミットメント",
    points: [
      {
        title: "本物であることへのこだわり",
        desc: "ファイユームのありのままの神秘的な美しさを保ちながら、ゲストにエレガントでミニマリストな聖域を提供すること。"
      },
      {
        title: "地域社会の活性化",
        desc: "地域市場に直接投資し、その土地の人々の職人技とホスピタリティを育成すること。"
      },
      {
        title: "新しい時代の開拓",
        desc: "標準的な企業のテンプレートを拒否し、エジプトのカスタムを祝福する柔軟で適応性のあるファミリーモデルを構築し、地域のホスピタリティの新しい基準を確立すること。"
      }
    ]
  }
};

export default function VisionMission() {
  const { language } = useLanguage();
  const content = translations[language] || translations["en"];
  const isRtl = language === "ar";

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
      {/* Vision Card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="bg-white border-2 border-black p-6 md:p-8 shadow-brutalist flex flex-col justify-between relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(#C8B9A6_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-20 pointer-events-none" />
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-desert-offwhite border border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-desert-dark">
              <Compass size={18} className="animate-[spin_60s_linear_infinite]" />
            </div>
            <span className="font-mono text-[10px] tracking-widest text-[#777] font-extrabold uppercase">
              {isRtl ? "تطلعات رمال" : "REMAL OUTLOOK"}
            </span>
          </div>

          <h2 className="font-serif text-2xl md:text-3xl uppercase tracking-tight text-desert-dark font-extrabold">
            {content.visionTitle}
          </h2>

          <div className="w-12 h-[2px] bg-black" />

          <p className="font-serif text-sm md:text-base text-desert-dark font-semibold italic leading-relaxed border-l-2 border-black/45 pl-3 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-3">
            "{content.visionSubtitle}"
          </p>

          <p className="font-sans text-xs md:text-sm text-neutral-600 leading-relaxed pt-2">
            {content.visionBody}
          </p>
        </div>
      </motion.div>

      {/* Mission Card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.2 }}
        className="bg-[#F4EFE3] border-2 border-black p-6 md:p-8 shadow-brutalist flex flex-col justify-between relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] opacity-5 pointer-events-none" />
        
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="bg-white border border-black p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-desert-dark">
              <Target size={18} />
            </div>
            <span className="font-mono text-[10px] tracking-widest text-[#777] font-extrabold uppercase">
              {isRtl ? "مهمتنا السامية" : "REMAL PURPOSE"}
            </span>
          </div>

          <h2 className="font-serif text-2xl md:text-3xl uppercase tracking-tight text-desert-dark font-extrabold">
            {content.missionTitle}
          </h2>

          <div className="w-12 h-[2px] bg-black" />

          <p className="font-serif text-sm md:text-base text-desert-dark font-semibold italic leading-relaxed border-l-2 border-black/45 pl-3 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-3">
            "{content.missionSubtitle}"
          </p>

          <p className="font-sans text-xs md:text-sm text-neutral-700 leading-relaxed pt-2">
            {content.missionBody}
          </p>

          {/* Mission Points */}
          <div className="space-y-3 pt-3">
            {content.points.map((pt, index) => (
              <div 
                key={index} 
                className="bg-white/55 border border-black/10 p-3 hover:bg-white/80 transition-all duration-150"
              >
                <div className="flex items-center gap-1.5 mb-1">
                  <div className="w-1 h-1 bg-black rounded-full" />
                  <h4 className="font-serif text-xs md:text-sm font-bold text-desert-dark">
                    {pt.title}
                  </h4>
                </div>
                <p className="font-sans text-[11px] md:text-xs text-neutral-600 leading-normal">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
