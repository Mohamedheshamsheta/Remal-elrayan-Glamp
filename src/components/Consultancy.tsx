import { motion } from "motion/react";
import { useLanguage } from "../LanguageContext";
import { ShieldCheck, Layers, Users, Leaf, ArrowUpRight, HelpCircle, Mail, Sparkles } from "lucide-react";

interface ConsultancyTranslation {
  title: string;
  subtitle: string;
  desc1: string;
  desc2: string;
  listTitle: string;
  points: {
    title: string;
    desc: string;
  }[];
  button: string;
}

const translations: Record<string, ConsultancyTranslation> = {
  en: {
    title: "DESERT HOSPITALITY CONSULTANCY",
    subtitle: "Empowering Pioneers",
    desc1: "Having pioneered the luxury desert hospitality model in Egypt, we understand that building a sustainable, refined destination requires far more than just a beautiful location. It demands a deep understanding of the land, regulatory landscapes, flexible operations, and community integration.",
    desc2: "If you are looking to enter this rapidly growing sector and want to build your destination the right way, our founders and executive team offer tailored consulting services to guide your journey from conception to launch.",
    listTitle: "How We Help You Build the Right Way:",
    points: [
      {
        title: "Strategic & Conceptual Development",
        desc: "Crafting unique, high-end identities that respect the environment while capturing the 'Quiet Luxury' aesthetic."
      },
      {
        title: "Operational Excellence & Systems",
        desc: "Setting up agile, home-grown management systems that reduce reliance on external outsourcing and maximize efficiency."
      },
      {
        title: "Sustainable & Local Integration",
        desc: "Designing models that empower local artisans, support neighboring communities, and preserve cultural heritage."
      },
      {
        title: "Regulatory & Environmental Navigation",
        desc: "Sharing our hands-on experience in developing premium hospitality locations within sensitive and protected ecological zones."
      }
    ],
    button: "Book a Strategy Consultation"
  },
  ar: {
    title: "استشارات الضيافة الصحراوية",
    subtitle: "تمكين الرواد",
    desc1: "بصفتنا رواداً لنموذج الضيافة الصحراوية الفاخرة في مصر، فإننا ندرك أن بناء وجهة مستدامة وراقية يتطلب ما هو أكثر بكثير من مجرد موقع جميل. إنه يتطلب فهماً عميقاً للأرض، والأطر التنظيمية، والعمليات المرنة، والاندماج المجتمعي.",
    desc2: "إذا كنت تتطلع إلى دخول هذا القطاع سريع النمو وتريد بناء وجهتك بالطريقة الصحيحة، فإن مؤسسينا وفريقنا التنفيذي يقدمون خدمات استشارية مخصصة لتوجيه رحلتك من الفكرة حتى الإطلاق.",
    listTitle: "كيف نساعدك على البناء بالطريقة الصحيحة:",
    points: [
      {
        title: "التطوير الاستراتيجي والمفاهيمي",
        desc: "صياغة هويات فريدة وراقية تحترم البيئة مع تجسيد جمالية 'الفخامة الهادئة'."
      },
      {
        title: "التميز التشغيلي والأنظمة",
        desc: "إعداد أنظمة إدارة مرنة ومطورة محلياً تقلل الاعتماد على المصادر الخارجية وتزيد الكفاءة لأقصى حد."
      },
      {
        title: "التكامل المستدام والمحلي",
        desc: "تصميم نماذج تمكن الحرفيين المحليين، وتدعم المجتمعات المجاورة، وتحافظ على التراث الثقافي."
      },
      {
        title: "الملاحة البيئية والتنظيمية",
        desc: "مشاركة خبرتنا العملية في تطوير مواقع ضيافة فاخرة داخل مناطق بيئية حساسة ومحمية."
      }
    ],
    button: "احجز استشارة استراتيجية"
  },
  es: {
    title: "CONSULTORÍA DE HOSPITALIDAD EN EL DESIERTO",
    subtitle: "Empoderando a Pioneros",
    desc1: "Habiendo sido pioneros en el modelo de hospitalidad de lujo en el desierto en Egipto, entendemos que construir un destino sostenible y refinado requiere mucho más que una ubicación hermosa. Demanda una comprensión profunda de la tierra, los marcos regulatorios, las operaciones flexibles y la integración comunitaria.",
    desc2: "Si busca ingresar a este sector de rápido crecimiento y desea construir su destino de la manera correcta, nuestros fundadores y equipo ejecutivo ofrecen servicios de consultoría personalizados para guiar su viaje desde la concepción hasta el lanzamiento.",
    listTitle: "Cómo le ayudamos a construir de la manera correcta:",
    points: [
      {
        title: "Desarrollo Estratégico y Conceptual",
        desc: "Creación de identidades únicas de alta gama que respeten el medio ambiente mientras capturan la estética del 'Lujo Silencioso'."
      },
      {
        title: "Excelencia Operativa y Sistemas",
        desc: "Establecimiento de sistemas de gestión ágiles y de desarrollo propio que reduzcan la dependencia de la subcontratación externa y maximicen la eficiencia."
      },
      {
        title: "Integración Sostenible y Local",
        desc: "Diseño de modelos que empoderen a los artesanos locales, apoyen a las comunidades vecinas y preserven el patrimonio cultural."
      },
      {
        title: "Navegación Regulatoria y Ambiental",
        desc: "Compartir nuestra experiencia práctica en el desarrollo de ubicaciones de hospitalidad premium dentro de zonas ecológicas sensibles y protegidas."
      }
    ],
    button: "Reservar una Consulta de Estrategia"
  },
  fr: {
    title: "CONSEIL EN HOTELLERIE DE DESERT",
    subtitle: "Autonomiser les Pionniers",
    desc1: "Ayant été les pionniers du modèle d'hospitalité de luxe dans le désert en Égypte, nous comprenons que la construction d'une destination durable et raffinée exige bien plus qu'un bel emplacement. Cela nécessite une compréhension profonde du territoire, des contextes réglementaires, des opérations flexibles et de l'intégration communautaire.",
    desc2: "Si vous cherchez à vous lancer dans ce secteur en pleine croissance et souhaitez construire votre destination de la bonne manière, nos fondateurs et notre équipe de direction vous proposent des services de conseil sur mesure pour guider votre parcours, de la conception au lancement.",
    listTitle: "Comment nous vous aidons à construire de la bonne manière :",
    points: [
      {
        title: "Développement Stratégique & Conceptuel",
        desc: "Façonner des identités haut de gamme uniques qui respectent l'environnement tout en capturant l'esthétique du 'Luxe Discret'."
      },
      {
        title: "Excellence Opérationnelle & Systèmes",
        desc: "Mettre en place des systèmes de gestion agiles et internes qui réduisent la dépendance vis-à-vis de la sous-traitance externe et maximisent l'efficacité."
      },
      {
        title: "Intégration Durable & Locale",
        desc: "Concevoir des modèles qui valorisent les artisans locaux, soutiennent les communautés voisines et préservent le patrimoine culturel."
      },
      {
        title: "Navigation Réglementaire & Environnementale",
        desc: "Partager notre expérience concrète du développement de sites d'accueil haut de gamme au sein de zones écologiques sensibles et protégées."
      }
    ],
    button: "Réserver un Conseil Stratégique"
  },
  de: {
    title: "BERATUNG FÜR WÜSTEN-HOTELLERIE",
    subtitle: "Wegbereiter Stärken",
    desc1: "Als Pioniere der luxuriösen Wüstenhotellerie in Ägypten wissen wir, dass der Aufbau eines nachhaltigen, anspruchsvollen Reiseziels weit mehr erfordert als nur eine schöne Lage. Es verlangt ein tiefes Verständnis für das Land, regulatorische Rahmenbedingungen, flexible Abläufe und die Integration der lokalen Gemeinschaft.",
    desc2: "Wenn Sie in diesen schnell wachsenden Sektor einsteigen und Ihr Projekt von Anfang an richtig aufbauen möchten, bieten unsere Gründer und das Führungsteam maßgeschneiderte Beratungsleistungen an, um Sie vom Konzept bis zum Start zu begleiten.",
    listTitle: "Wie wir Ihnen helfen, richtig aufzubauen:",
    points: [
      {
        title: "Strategische & Konzeptuelle Entwicklung",
        desc: "Entwurf einzigartiger, erstklassiger Markenidentitäten, die die Umwelt respektieren und die Ästhetik des 'leisen Luxus' einfangen."
      },
      {
        title: "Betriebliche Exzellenz & Systeme",
        desc: "Aufbau agiler, im Haus entwickelter Managementsysteme, die die Abhängigkeit von externem Outsourcing verringern und die Effizienz maximieren."
      },
      {
        title: "Nachhaltige & Lokale Integration",
        desc: "Konzeption von Modellen, die lokale Kunsthandwerker stärken, benachbarte Gemeinden unterstützen und das kulturelle Erbe bewahren."
      },
      {
        title: "Regulatorische & Ökologische Navigation",
        desc: "Weitergabe unserer praktischen Erfahrung bei der Entwicklung von Premium-Hotellocations in sensiblen und geschützten ökologischen Zonen."
      }
    ],
    button: "Strategiegespräch Buchen"
  },
  ja: {
    title: "砂漠ホスピタリティ・コンサルティング",
    subtitle: "開拓者たちを支援する",
    desc1: "エジプトにおけるラグジュアリー砂漠グランピングの先駆者として、私たちは持続可能で洗練された目的地を構築するには、単に美しい場所を確保するだけでは不十分であることを理解しています。土地への深い理解、規制への適応、柔軟なオペレーション、そして地域社会との共生が求められます。",
    desc2: "この急速に成長するセクターに参入し、正しい方法で目的地を築き上げたいとお考えであれば、当グループの創業者および経営陣が、コンセプトの立案からローンチに至るまで、テーラーメイドのコンサルティングサービスを提供いたします。",
    listTitle: "私たちが正しく構築を支援する方法：",
    points: [
      {
        title: "戦略的・コンセプト開発",
        desc: "環境を尊重しつつ、「クワイエット・ラグジュアリー」の美学を捉えた、独自のハイエンドなブランドアイデンティティを構築します。"
      },
      {
        title: "優れたオペレーションと内製化システム",
        desc: "外部委託への依存を減らし、効率を最大化する、機動的で自社開発の管理システムを立ち上げます。"
      },
      {
        title: "持続可能な地域社会との共生",
        desc: "地域の職人たちに権限を与え、近隣のコミュニティを支援し、文化的遺産を守るモデルを設計します。"
      },
      {
        title: "規制および環境保全への適応",
        desc: "デリケートで保護された環境保護区内でプレミアムなリゾート施設を開発してきた、私たちの実践的な知見を共有します。"
      }
    ],
    button: "戦略コンサルティングを予約する"
  }
};

export default function Consultancy() {
  const { language } = useLanguage();
  const content = translations[language] || translations["en"];
  const isRtl = language === "ar";

  const icons = [
    <Layers size={18} className="text-desert-blue" />,
    <ShieldCheck size={18} className="text-desert-blue" />,
    <Users size={18} className="text-desert-blue" />,
    <Leaf size={18} className="text-desert-blue" />
  ];

  const email = "msheta@remalelrayan.com";
  const emailSubject = encodeURIComponent("Inquiry: Desert Hospitality Consultancy");
  const emailBody = encodeURIComponent("Hello Remal Team,\n\nI am interested in your Desert Hospitality Consultancy services. I would like to schedule a strategy consultation to discuss building a desert destination.\n\nBest regards,");
  const mailtoLink = `mailto:${email}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <section id="consultancy-section" className="bg-white border-2 border-black p-6 md:p-10 shadow-brutalist relative overflow-hidden space-y-8">
      {/* Absolute top grid subtle background pattern */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(#C8B9A6_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

      {/* Main text headers */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-desert-blue/10 border border-desert-blue/30 text-desert-blue font-mono text-[9px] uppercase tracking-widest font-bold rounded-full">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{isRtl ? "خدمات استشارية حصرية" : "FOUNDERS KNOWLEDGE"}</span>
        </div>
        <h2 className="font-serif text-3xl md:text-4xl uppercase tracking-tight text-desert-dark font-extrabold">
          {content.title}
        </h2>
        <span className="font-mono text-xs text-desert-blue tracking-widest uppercase font-bold block mt-1">
          — {content.subtitle}
        </span>
        <div className="w-16 h-[2px] bg-desert-blue mt-2" />
      </div>

      {/* Core intro block */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start pt-2">
        <div className="space-y-4 font-sans text-xs md:text-sm text-neutral-700 leading-relaxed">
          <p className="font-serif text-sm md:text-base text-desert-dark font-semibold italic border-l-2 border-desert-blue pl-4 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-4">
            {content.desc1}
          </p>
          <p className="text-neutral-600">
            {content.desc2}
          </p>
        </div>

        {/* Highlight Quote/Stat card */}
        <div className="bg-[#FAF9F6] border border-black p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between h-full">
          <div>
            <div className="font-mono text-[8px] text-[#888] uppercase tracking-widest font-bold">REMAL IMPACT RECORD</div>
            <h4 className="font-serif text-base font-bold text-black mt-2 uppercase">100% Homegrown System</h4>
            <p className="font-sans text-[11px] text-neutral-500 mt-1 leading-relaxed">
              We manage Remal entirely through our in-house, custom software structures, community employment grids, and direct regional supply sourcing. Let us teach you how.
            </p>
          </div>
          <div className="border-t border-black/10 pt-3 mt-4 flex justify-between items-center font-mono text-[9px] text-desert-blue font-bold">
            <span>REGULATORY COMPLIANT</span>
            <span>ECO-PROTECTORATE PROVEN</span>
          </div>
        </div>
      </div>

      {/* Grid points list */}
      <div className="pt-6 border-t border-black/10">
        <h3 className="font-mono text-[10px] uppercase tracking-widest text-[#777] font-extrabold mb-6">
          {content.listTitle}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {content.points.map((pt, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -2 }}
              className="border border-black p-4.5 bg-[#FAF9F6] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="mb-3.5 bg-white border border-black p-2.5 w-10 h-10 flex items-center justify-center shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]">
                  {icons[idx] || <Layers size={18} className="text-desert-blue" />}
                </div>
                <h4 className="font-serif text-sm font-extrabold uppercase tracking-tight text-desert-dark mb-2 leading-snug">
                  {pt.title}
                </h4>
                <p className="font-sans text-[11px] md:text-xs text-neutral-600 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Instant Action Strategy Call redirection button */}
      <div className="pt-8 border-t border-black/10 flex flex-col sm:flex-row justify-between items-center gap-4 bg-desert-blue/5 p-5 border border-desert-blue/20">
        <div className="text-center sm:text-left rtl:text-right">
          <h4 className="font-serif text-base font-extrabold text-desert-dark uppercase">
            {isRtl ? "مستعد لبدء مشروعك القادم؟" : "Ready to design your desert oasis?"}
          </h4>
          <p className="font-sans text-xs text-neutral-500 mt-1">
            {isRtl ? "تواصل مباشرة مع مؤسسينا للحصول على إرشادات استراتيجية مخصصة." : "Connect directly with our founders for tailored strategic guidance."}
          </p>
        </div>

        <a
          href={mailtoLink}
          className="inline-flex items-center gap-2 px-6 py-3.5 font-mono text-xs tracking-widest uppercase font-extrabold text-white bg-black border-2 border-black shadow-[4px_4px_0px_rgba(0,0,0,0.3)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all cursor-pointer select-none"
        >
          <Mail size={14} />
          <span>{content.button}</span>
          <ArrowUpRight size={14} />
        </a>
      </div>
    </section>
  );
}
