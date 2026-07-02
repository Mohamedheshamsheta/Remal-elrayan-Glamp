import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Compass, 
  Sparkles, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar, 
  Utensils, 
  Tent, 
  FileText, 
  CheckCircle2, 
  HelpCircle, 
  Clock, 
  AlertTriangle,
  UserCheck,
  Luggage,
  ExternalLink,
  ChevronRight,
  Flame,
  MessageSquare
} from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface GuideStep {
  number: string;
  title: string;
  description: string;
  highlight?: string;
}

interface ServiceGuide {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  arabicTitle: string;
  leadTime: string;
  leadTimeAr: string;
  bookingMethod: string;
  bookingMethodAr: string;
  overview: string;
  overviewAr: string;
  steps: GuideStep[];
  stepsAr: GuideStep[];
  rules: string[];
  rulesAr: string[];
}

export default function BookingGuide() {
  const { language } = useLanguage();
  const [activeService, setActiveService] = useState<string>("stay");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const guides: ServiceGuide[] = [
    {
      id: "stay",
      icon: Tent,
      title: "Overnight Accommodation Stay",
      arabicTitle: "حجز الإقامة المبيتة (القباب والأجنحة)",
      leadTime: "Immediate to 3 months in advance",
      leadTimeAr: "فوري حتى 3 أشهر مقدماً",
      bookingMethod: "Online via Kwentra PMS Engine",
      bookingMethodAr: "عبر الإنترنت من خلال نظام كوينترا لإدارة الفنادق",
      overview: "Experience luxurious desert glamping in our exclusive Geodesic Domes or Safari Suite Tents. Highly sought-after with limited daily occupancy to maintain strict tranquil quiet luxury.",
      overviewAr: "عش تجربة التخييم الفاخر الاستثنائية في قبابنا الجيوديسية الحصرية أو أجنحة السفاري الراقية. الطلب مرتفع للغاية مع وجود حد أقصى للإشغال اليومي للحفاظ على الهدوء والرفاهية الصامتة.",
      steps: [
        {
          number: "01",
          title: "Select Dates & Guests",
          description: "Use our home page date selector, or proceed directly to the Kwentra booking engine. Specify your nationality as Egyptian rates differ legally from International rates.",
          highlight: "Egyptians must enter EGP mode; International guests use USD mode."
        },
        {
          number: "02",
          title: "Select Accommodation Type",
          description: "Choose between our premium Geodesic Dome (features stargazing panorama window and private deck) or the Safari Suite Tent (spacious, family-friendly heritage lodge design).",
        },
        {
          number: "03",
          title: "Complete Reservation & Payment",
          description: "Secure your reservation with a valid payment method. You will receive an immediate confirmation email and booking voucher from Kwentra PMS.",
          highlight: "Keep this voucher on your device for protectorate gate pass entry."
        },
        {
          number: "04",
          title: "Pre-Arrival Documentation Check",
          description: "As we operate inside a protected national park zone, legal IDs or valid passports for all guests are mandatory at check-in. Couples must provide official marriage documents.",
          highlight: "Required by local national park regulations."
        }
      ],
      stepsAr: [
        {
          number: "01",
          title: "تحديد التواريخ وعدد الضيوف",
          description: "استخدم محرك بحث الحجز في الصفحة الرئيسية، أو انتقل مباشرة إلى نظام حجز كوينترا. يرجى تحديد الجنسية بدقة نظراً لاختلاف الأسعار القانونية للمصريين عن الأجانب.",
          highlight: "النزلاء المصريين يرجى استخدام عملة الجنيه المصري؛ النزلاء الأجانب يرجى تفعيل الدولار الأمريكي."
        },
        {
          number: "02",
          title: "اختيار نوع الإقامة الفاخرة",
          description: "اختر بين القبة الجيوديسية الفاخرة (تتميز بنافذة بانورامية لمراقبة النجوم وشرفة خاصة) أو خيمة جناح السفاري الراقية (مساحة واسعة وتصميم بدوي عريق ملائم للعائلات).",
        },
        {
          number: "03",
          title: "تأكيد الحجز وإتمام الدفع",
          description: "قم بتأكيد حجزك عبر وسيلة دفع معتمدة. ستتلقى على الفور بريداً إلكترونياً للتأكيد وقسيمة حجز إلكترونية من نظام كوينترا.",
          highlight: "يرجى الاحتفاظ بقسيمة الحجز على هاتفك لإبرازها عند بوابة محمية وادي الريان."
        },
        {
          number: "04",
          title: "الأوراق والمستندات المطلوبة عند الوصول",
          description: "بما أننا نعمل داخل منطقة محمية طبيعية خاضعة للوائح الدولة، فإن تقديم بطاقات الرقم القومي أو جوازات السفر السارية لجميع الضيوف إلزامي عند تسجيل الوصول. يجب على المتزوجين تقديم وثيقة زواج رسمية.",
          highlight: "مطلوب بموجب لوائح المحمية الطبيعية والقوانين المحلية."
        }
      ],
      rules: [
        "Check-in time starts at 2:00 PM; Check-out is strictly at 12:00 PM.",
        "A refundable damage deposit of 1,000 EGP / $25 USD may be required upon arrival.",
        "Rates are exclusive of standard municipal taxes and service charges.",
        "Strictly no-pets and no-alcohol policy inside or outside rooms."
      ],
      rulesAr: [
        "يبدأ وقت تسجيل الوصول من الساعة 2:00 ظهراً؛ ووقت المغادرة في تمام الساعة 12:00 ظهراً.",
        "قد يتم طلب تأمين ضد التلفيات بقيمة 1,000 جنيه مصري / 25 دولار أمريكي مسترد بالكامل عند المغادرة.",
        "الأسعار لا تشمل الضرائب المحلية والبلدية ورسوم الخدمة.",
        "يُمنع منعاً باتاً اصطحاب الحيوانات الأليفة أو المشروبات الكحولية داخل الغرف أو في المحيط الخارجي."
      ]
    },
    {
      id: "dining",
      icon: Utensils,
      title: "Lummayya Fine Dining & Day Pass",
      arabicTitle: "مطعم لومية وتذاكر اليوم الكامل (داي يوز)",
      leadTime: "3 to 24 hours in advance (Pre-orders required for Mandi)",
      leadTimeAr: "من 3 إلى 24 ساعة مقدماً (الطلب المسبق إلزامي للمندي)",
      bookingMethod: "On-site table booking or pre-arrival food booking form",
      bookingMethodAr: "حجز الطاولات بالموقع أو نموذج حجز الطعام الإلكتروني المسبق",
      overview: "Lummayya offers a sensory trip across Bedouin wood-fired cooking and modern delicacies. We support both overnight guests and day-use visitors seeking exceptional gastronomy in the dunes.",
      overviewAr: "يقدم مطعم لومية رحلة حسية مذهلة عبر المأكولات البدوية المطهوة ببطء على الحطب والأطباق العالمية الفاخرة. نخدم النزلاء المقيمين والزوار الخارجيين بتذاكر اليوم الكامل.",
      steps: [
        {
          number: "01",
          title: "Choose Booking Style",
          description: "Decide if you are visiting only for a meal (A La Carte), or booking our complete 'Lummayya Day Pass' (includes Breakfast, full Lunch, and sandboarding from 9:00 AM to 9:00 PM).",
          highlight: "Day Pass requires pre-authorization due to limited daily visitor capacity."
        },
        {
          number: "02",
          title: "Pre-Order Special Meats (Mandi)",
          description: "Our signature Mandi items are slow-cooked in traditional wood-fire underground pits. Duck/Chicken takes 3 hours; Goat and Short Ribs require 5 hours of firewood slow cooking.",
          highlight: "Mandi pre-orders must be submitted at least 24 hours prior to arrival."
        },
        {
          number: "03",
          title: "Confirm Seat & Table Allocation",
          description: "Fill the digital Lummayya Dining form with your estimated arrival time. Our host allocates premium tables looking directly at the sunset ridge dunes.",
        },
        {
          number: "04",
          title: "Arrival and Settlement",
          description: "Present your food booking voucher at the camp reception. Overnight guests can charge dining bills directly to their room folio; day visitors pay upon arrival.",
          highlight: "All prices are exclusive of service charge and government taxes."
        }
      ],
      stepsAr: [
        {
          number: "01",
          title: "تحديد فئة الزيارة",
          description: "اختر ما إذا كنت قادماً لتناول وجبة فردية (طلب حر)، أو حجز باقة 'اليوم الكامل في لومية' (تشمل الإفطار البدو، وجبة غداء فاخرة من اختيارك، وممارسة التزلج على الرمال من 9:00 صباحاً حتى 9:00 مساءً).",
          highlight: "تذكرة اليوم الكامل تتطلب موافقة مسبقة بسبب محدودية الطاقة الاستيعابية اليومية."
        },
        {
          number: "02",
          title: "الطلب المسبق للحوم المطهوة ببطء (المندي)",
          description: "تُطهى وجبات المندي المميزة لدينا في حفر الحطب التقليدية تحت الأرض ببطء شديد. يستغرق الدجاج والبط 3 ساعات؛ بينما يحتاج الماعز والضلوع القصيرة إلى 5 ساعات كاملة من الطهي البطيء على جمر الخشب.",
          highlight: "يجب تقديم طلبات المندي مسبقاً بـ 24 ساعة على الأقل قبل موعد وصولك المقدر."
        },
        {
          number: "03",
          title: "تأكيد حجز الطاولة والجلسة",
          description: "قم بملء نموذج حجز مطعم لومية وتحديد وقت الوصول المتوقع. سيقوم المضيف بتخصيص طاولة راقية مطلة مباشرة على كثبان غروب الشمس الساحرة.",
        },
        {
          number: "04",
          title: "الوصول وتسوية الفاتورة",
          description: "أبرز قسيمة حجز الطعام عند مكتب استقبال الكامب. يمكن للنزلاء المقيمين تحويل فواتير الطعام إلى حساب غرفهم؛ بينما يدفع زوار اليوم الواحد عند الاستقبال فور الوصول.",
          highlight: "جميع أسعار المنيو خاضعة للضرائب ورسوم الخدمة."
        }
      ],
      rules: [
        "Outside food, drinks, and snacks are strictly prohibited within restaurant areas.",
        "Mandi orders cancelled with less than 6 hours notice will be charged at 100% value.",
        "Vegetarian & vegan adaptations are available; please alert your host in advance.",
        "Kitchen service hours run from 8:00 AM to 11:30 PM."
      ],
      rulesAr: [
        "يُمنع منعاً باتاً إدخال الأطعمة أو المشروبات أو المسليات الخارجية إلى منطقة المطعم.",
        "يتم احتساب قيمة طلبات المندي بالكامل في حال إلغائها قبل أقل من 6 ساعات من موعد التحضير.",
        "تتوفر بدائل وخيارات نباتية؛ يرجى إبلاغ مسؤول الخدمة مسبقاً بمتطلباتكم الغذائية.",
        "تعمل المطابخ وخدمة الطاولات يومياً من الساعة 8:00 صباحاً وحتى 11:30 مساءً."
      ]
    },
    {
      id: "experience",
      icon: Compass,
      title: "Desert Safaris & Local Experiences",
      arabicTitle: "رحلات السفاري بالدفع الرباعي والأنشطة المحلية",
      leadTime: "24 to 48 hours notice highly recommended",
      leadTimeAr: "يُفضل الحجز والتنسيق قبل 24 إلى 48 ساعة",
      bookingMethod: "Add during room booking check-out or book via Reception Desk",
      bookingMethodAr: "الإضافة أثناء حجز الغرفة أو الحجز مباشرة من مكتب الاستقبال",
      overview: "Explore the magic of Fayoum’s geological protectorate. From custom 4x4 Jeep safaris across fossil valleys to sunset sandboarding on untouched shifting sand dunes.",
      overviewAr: "استكشف سحر محمية الفيوم الجيولوجية الرائعة. من رحلات سفاري مخصصة بسيارات الجيب 4x4 عبر وادي الحيتان والمتحف المفتوح، إلى التزلج على الرمال الناعمة عند غروب الشمس.",
      steps: [
        {
          number: "01",
          title: "Browse Experience Catalogue",
          description: "Examine our available excursions: 4x4 Jeep protectorate safari, Magic Lake dune-bashing, Valley of the Whales (Wadi Al-Hitan) UNESCO hike, stargazing evening campfire, or guided camel trails.",
          highlight: "Certain excursions require specialized desert permits handled by our team."
        },
        {
          number: "02",
          title: "Confirm Group Size & Timing",
          description: "Select your preferred slot: early sunrise trails (perfect for crisp clean air and dynamic shadows) or golden hour sunset setup (best for photography and mild desert weather).",
        },
        {
          number: "03",
          title: "Safety & Gear Briefing",
          description: "Our professional Bedouin guides provide a brief safety walk-through. Sandboards, safety leashes, and bottled mineral water are fully provided for all reserved safari tours.",
          highlight: "Wear closed shoes and high-UV protective sunglasses."
        },
        {
          number: "04",
          title: "Launch & Departure",
          description: "Jeeps depart directly from Remal El Rayan main courtyard. Stargazing campfires are hosted set deep inside our designated quiet dune amphitheater behind the camp ridges.",
        }
      ],
      stepsAr: [
        {
          number: "01",
          title: "استعراض كتيب المغامرات والرحلات",
          description: "اطلع على المغامرات المتاحة لدينا: سفاري الجيب 4x4 في المحمية، القيادة فوق كثبان البحيرة السحرية، جولات مشي وادي الحيتان (المصنف لدى اليونسكو)، تأمل النجوم حول النار ليلاً، أو ركوب الجمال.",
          highlight: "تتطلب بعض الرحلات تصاريح عبور صحراوية خاصة تتولى إدارتنا استخراجها نيابة عنكم."
        },
        {
          number: "02",
          title: "تحديد عدد أفراد المجموعة والموعد",
          description: "اختر الموعد المفضل لديك: جولات الشروق المبكرة (مثالية للهواء النقي وتصوير الصحراء الهادئة) أو فترة غروب الشمس الساحرة (الأفضل للطقس المعتدل والرمال الدافئة).",
        },
        {
          number: "03",
          title: "تعليمات السلامة وتجهيز المعدات",
          description: "يقدم مرشدونا البدو المحترفون شرحاً سريعاً لإرشادات الأمان. نوفر ألواح التزلج الاحترافية والماء البارد والمظلات في جميع جولات السفاري المحجوزة.",
          highlight: "يُنصح بارتداء أحذية مغلقة ونظارات شمسية قوية لحماية العين من انعكاس الرمال."
        },
        {
          number: "04",
          title: "انطلاق الرحلة",
          description: "تنطلق سيارات الدفع الرباعي مباشرة من الفناء الرئيسي لكامب رمال الريان. وتُقام جلسات الشواء وتأمل النجوم الهادئة في مسرحنا الرملي الخاص خلف الكثبان مباشرة.",
        }
      ],
      rules: [
        "All safaris are led by certified local Bedouin guides; self-driving in national park zones is strictly prohibited.",
        "Cancellations of jeep tours require at least 12 hours notice to coordinate off-road vehicle scheduling.",
        "Children under 6 must be accompanied by legal guardians during all moving vehicle trips.",
        "Subject to weather and desert wind conditions for guest safety."
      ],
      rulesAr: [
        "جميع رحلات السفاري بقيادة مرشدين بدو محليين معتمدين؛ تمنع القيادة الذاتية الفردية داخل المحمية بموجب القانون.",
        "يتطلب إلغاء رحلات الجيب إخطاراً مسبقاً بـ 12 ساعة على الأقل لإعادة جدولة السيارات المجهزة.",
        "يجب مرافقة الأطفال دون سن 6 سنوات من قبل أولياء أمورهم طوال فترة ركوب سيارات الدفع الرباعي.",
        "الرحلات خاضعة لحالة الطقس وسرعة الرياح الصحراوية لضمان السلامة الكاملة للضيوف."
      ]
    },
    {
      id: "corporate",
      icon: MessageSquare,
      title: "Private Events & Bespoke Retreats",
      arabicTitle: "الفعاليات الخاصة ورحلات الشركات والمجموعات",
      leadTime: "7 to 30 days notice",
      leadTimeAr: "من 7 إلى 30 يوماً مقدماً",
      bookingMethod: "VIP Concierge Direct Request Form or WhatsApp",
      bookingMethodAr: "التواصل المباشر مع خدمة كبار الشخصيات أو واتساب",
      overview: "Host your company's strategic planning session, dynamic team-building retreat, commercial photo shoot, wellness workshop, or private celebration in a completely private luxury desert layout.",
      overviewAr: "استضف جلسات التخطيط الاستراتيجي لشركتك، أو رحلات تعزيز كفاءة الفرق، أو جلسات التصوير الاحترافية والتجارية، أو ورش العمل الخاصة بالصحة والاستشفاء في بيئة صحراوية مخصصة بالكامل وكاملة الخصوصية.",
      steps: [
        {
          number: "01",
          title: "Submit Brief & Scope",
          description: "Share details with our VIP coordinator: dates, estimated guest count, room block requirements, catering layout (fully catered, Bedouin feasts, or custom menu), and required technical equipment.",
          highlight: "We can arrange full privatization of the entire glamp."
        },
        {
          number: "02",
          title: "Tailored Proposal & Pitching",
          description: "Our planning office designs a comprehensive bespoke schedule including room distribution, activity cycles, custom group safaris, team banquets at Lummayya, and site logistics.",
        },
        {
          number: "03",
          title: "Permits & Legal Clearing",
          description: "Remal handles all administrative approvals for corporate banners, drone photography, filming permits, and group entrance clearings with national park authorities.",
          highlight: "Mandatory for commercial drone and video cameras."
        },
        {
          number: "04",
          title: "Settle Contract & Setup",
          description: "A formal luxury event contract is signed with a 50% retainer deposit. Our dedicated on-site event manager is assigned to coordinate your schedule from arrival to checkout.",
        }
      ],
      stepsAr: [
        {
          number: "01",
          title: "تقديم تفاصيل الفعالية",
          description: "شارك تفاصيل برنامجك مع منسق كبار الشخصيات لدينا: التواريخ، عدد النزلاء المتوقع، عدد الغرف المطلوبة، نمط الطعام (بوفيه كامل، ولائم بدوية، أو منيو مخصص)، والمعدات الفنية المطلوبة.",
          highlight: "نوفر إمكانية الحجز الكامل والخصخصة التامة لجميع مرافق الكامب لفعاليتكم."
        },
        {
          number: "02",
          title: "استلام المقترح المخصص والمخطط المالي",
          description: "يقوم مكتب التخطيط لدينا بتصميم جدول أعمال متكامل يشمل توزيع الغرف، مسار الأنشطة، جولات السفاري الجماعية المخصصة، ولائم الغداء والعشاء في لومية، وكافة التفاصيل اللوجستية.",
        },
        {
          number: "03",
          title: "استخراج التصاريح القانونية والموافقات",
          description: "يتولى فريق رمال الريان الحصول على جميع الموافقات الحكومية الخاصة باللوحات الإعلانية، تصوير الطائرات بدون طيار (الدرون)، وتصاريح التصوير السينمائي والتجاري داخل المحمية.",
          highlight: "إلزامي لاستخدام كاميرات الفيديو الاحترافية وطائرات التصوير."
        },
        {
          number: "04",
          title: "توقيع العقد والتنسيق الموقعي",
          description: "يتم توقيع عقد الفعالية الرسمي مع سداد دفعة مقدمة تبلغ 50%. ويتم تعيين مدير فعاليات مخصص من فريقنا ليكون متاحاً لتلبية متطلباتكم خطوة بخطوة منذ لحظة وصولكم.",
        }
      ],
      rules: [
        "A formal event contract is mandatory for any booking over 3 geodesic dome units.",
        "Commercial drone filming requires at least 15 working days prior notice for security clearances.",
        "External professional speaker setups are authorized ONLY under full-glamp privatization contracts.",
        "Standard event cancellation and refund structures apply as detailed in the master agreement."
      ],
      rulesAr: [
        "توقيع عقد فعاليات رسمي إلزامي لأي حجز يتجاوز 3 وحدات إقامة من القباب الجيوديسية.",
        "تصوير الدرون التجاري يتطلب 15 يوم عمل على الأقل للحصول على الموافقات الأمنية وتراخيص الطيران.",
        "يُصرح بمعدات الصوت ومكبرات الصوت الاحترافية الخارجية فقط في حال حجز كامل الكامب بالكامل.",
        "تطبق شروط إلغاء الفعاليات المخصصة واسترداد الدفعات كما هو مفصل في الاتفاقية الموقعة."
      ]
    }
  ];

  const currentGuide = guides.find(g => g.id === activeService) || guides[0];

  const faqs = [
    {
      q: "How far in advance should I reserve stays?",
      qAr: "كم من الوقت قبل الرحلة يجب أن أحجز الإقامة؟",
      a: "Because we have a very limited number of geodesic domes to preserve quiet privacy, weekends (Thursdays & Fridays) usually book out 4 to 6 weeks in advance. We suggest reserving mid-week stays at least 2 weeks ahead, and weekend slots 1 month in advance.",
      aAr: "نظراً لمحدودية عدد القباب الجيوديسية لدينا للحفاظ على الهدوء والخصوصية، فإن عطلات نهاية الأسبوع (الخميس والجمعة) تُحجز عادةً قبل 4 إلى 6 أسابيع. نوصي بحجز إقامات منتصف الأسبوع قبل أسبوعين على الأقل، وعطلات نهاية الأسبوع قبل شهر."
    },
    {
      q: "Can I enter the protectorate without an active booking voucher?",
      qAr: "هل يمكنني دخول المحمية بدون قسيمة حجز نشطة؟",
      a: "Yes, you can enter the Wadi El Rayan nature protectorate by paying the standard state park entrance fee at the main national gate. However, to access the Remal El Rayan private glamping grounds, an active accommodation voucher, restaurant table confirmation, or day-use reservation is strictly mandatory at our checkpoint.",
      aAr: "نعم، يمكنك دخول محمية وادي الريان الطبيعية عن طريق دفع رسوم دخول المحمية الحكومية المقررة عند البوابة الرئيسية. ومع ذلك، للوصول إلى منطقة التخييم الخاصة برمال الريان، يجب تقديم قسيمة حجز إقامة نشطة، أو تأكيد طاولة المطعم، أو تذكرة داي يوز عند نقطة التفتيش الخاصة بنا."
    },
    {
      q: "What documentation is required at reception for Egyptian citizens?",
      qAr: "ما هي الأوراق المطلوبة عند الاستقبال للمواطنين المصريين؟",
      a: "According to local tourism licensing laws and national park regulations, all Egyptian citizens must present valid national ID cards upon arrival. Couples sharing a geodesic dome or safari suite unit must present an official marriage certificate or legal marriage documentation.",
      aAr: "وفقاً لقوانين الترخيص السياحي ولوائح الأمن بالمحمية، يجب على جميع المواطنين المصريين تقديم بطاقات الرقم القومي السارية عند الوصول. ويجب على الأزواج الذين يتشاركون قبة جيوديسية أو جناح سفاري تقديم قسيمة الزواج الرسمية أو وثيقة زواج معتمدة."
    },
    {
      q: "Are we allowed to bring our own food or barbecue kits?",
      qAr: "هل يسمح لنا بإحضار الأطعمة الخاصة بنا أو أدوات الشواء؟",
      a: "To maintain our immaculate safety records, absolute waste-free ecological standards, and fire protection, private BBQ kits, outdoor gas-burners, or cooking stoves are strictly forbidden. Outside restaurant meals are not permitted, but lightweight snacks and infant nutrition are fully allowed.",
      aAr: "للحفاظ على معايير السلامة التامة، وحماية البيئة الخالية من النفايات، والوقاية من الحرائق، يُمنع منعاً باتاً استخدام أدوات الشواء الخاصة، أو مواقد الغاز الخارجية، أو أدوات الطهي الفردية. ولا يُسمح بإحضار وجبات مطاعم خارجية، بينما يُسمح بالوجبات الخفيفة الخفيفة وأغذية الأطفال."
    },
    {
      q: "What is the policy for cancellation or rescheduling?",
      qAr: "ما هي سياسة إلغاء الحجز أو تأجيل الموعد؟",
      a: "Cancellations made more than 7 days prior to check-in incur a 25% fee. Between 2 to 7 days, a 50% fee applies. Within 48 hours, reservations are non-refundable (100% fee). Rescheduling or postponement is permitted once free of charge if requested in writing at least 5 days prior to arrival.",
      aAr: "الإلغاء قبل أكثر من 7 أيام من موعد الدخول يترتب عليه رسوم إلغاء 25%. بين 2 إلى 7 أيام، تطبق رسوم 50%. في غضون 48 ساعة، تكون الحجوزات غير قابلة للاسترداد (رسوم 100%). يُسمح بتأجيل أو إعادة جدولة الحجز مجاناً لمرة واحدة بشرط تقديم طلب كتابي قبل موعد الوصول بـ 5 أيام على الأقل."
    }
  ];

  const packingItems = [
    { name: "Loose Cotton Clothing", nameAr: "ملابس قطنية مريحة فضفاضة", icon: Sparkles, desc: "Best for desert exploration during sunny daytime hours.", descAr: "مثالية للمشي والتجول في الصحراء خلال ساعات النهار المشمسة." },
    { name: "Warm Outer Jacket / Windbreaker", nameAr: "معطف أو سترة دافئة وثقيلة", icon: Flame, desc: "The desert temperature drops significantly after sunset. Warm layers are crucial.", descAr: "تنخفض درجات حرارة الصحراء بشكل حاد بعد غروب الشمس. الطبقات الدافئة ضرورية للغاية." },
    { name: "Comfortable Trail Shoes", nameAr: "أحذية مشي أو ركض مغلقة", icon: Compass, desc: "For climbing dune ridges and sandboarding safely without sand-burns.", descAr: "لتسلق تلال الكثبان الرملية وممارسة التزلج على الرمال بأمان." },
    { name: "Broad-Spectrum SPF Sunscreen", nameAr: "واقي من الشمس بمعامل حماية قوي", icon: UserCheck, desc: "Protect your skin from high-altitude solar reflection across white dunes.", descAr: "لحماية بشرتك من الانعكاس القوي لأشعة الشمس فوق الرمال البيضاء الناعمة." },
    { name: "Sunglasses & Scarf", nameAr: "نظارات شمسية وشال بدوي", icon: Luggage, desc: "Protects eyes and face against shifting sands and desert winds.", descAr: "لحماية العينين والوجه من ذرات الرمل المتحركة والرياح الصحراوية المفاجئة." }
  ];

  return (
    <div className="bg-desert-offwhite border-2 border-black p-6 md:p-10 shadow-brutalist relative overflow-hidden" id="booking-guide-portal">
      {/* Absolute Decorative Grid Backing */}
      <div className="absolute inset-0 bg-[radial-gradient(#C8B9A6_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      {/* Title Header Block */}
      <div className="relative z-10 border-b-2 border-black pb-8 mb-10 flex flex-col lg:flex-row lg:items-end justify-between items-start gap-4">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-[#777] uppercase block mb-2">
            {language === "ar" ? "المساعدة والإرشاد الفندقي • دليل الحجوزات" : "CLIENT ASSISTANCE & BOOKING GUIDE • PROCEDURES"}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-tighter">
            {language === "ar" ? "دليل حجز الخدمات" : "Our Booking Guide"}
          </h2>
          <p className="font-sans text-xs text-neutral-500 mt-2 max-w-xl leading-relaxed">
            {language === "ar" 
              ? "مرحباً بكم في الدليل الشامل لخدمات رمال الريان. هنا تجدون الإجراءات والخطوات والمستندات المطلوبة لكل خدمة من خدماتنا الفندقية والترفيهية الفاخرة."
              : "Welcome to the official procedural handbook for Remal El Rayan. Learn exactly how to secure, customize, and prepare for every premium desert accommodation, culinary session, safari trail, and day-use pass we provide."}
          </p>
        </div>

        {/* Dynamic Service Status Badge */}
        <div className="bg-white border border-black px-3 py-1.5 shadow-[2px_2px_0px_rgba(0,0,0,1)] text-[10px] font-mono font-bold uppercase tracking-wider text-desert-blue flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-desert-green animate-ping" />
          <span>{language === "ar" ? "نظام الحجوزات نشط" : "LIVE BOOKING ENGINE ACTIVE"}</span>
        </div>
      </div>

      {/* Main Interactive Work Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
        
        {/* Left Side Sidebar: Service Selector Buttons */}
        <div className="lg:col-span-4 space-y-3">
          <span className="font-mono text-[9px] tracking-widest text-desert-blue uppercase block font-bold mb-1">
            {language === "ar" ? "اختر فئة الخدمة" : "SELECT SERVICE CATEGORY"}
          </span>
          
          <div className="flex flex-col gap-2">
            {guides.map((g) => {
              const IconComp = g.icon;
              const isSelected = activeService === g.id;
              return (
                <button
                  key={g.id}
                  onClick={() => setActiveService(g.id)}
                  className={`w-full text-left p-4 border-2 transition-all cursor-pointer flex items-center justify-between group ${
                    isSelected 
                      ? "bg-black text-white border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] translate-x-[-2px] translate-y-[-2px]" 
                      : "bg-[#F4EFE3] text-desert-dark border-black/10 hover:border-black hover:bg-white"
                  }`}
                >
                  <div className="flex items-center space-x-3 gap-2">
                    <div className={`p-2 border ${isSelected ? "border-white/20 bg-white/10 text-desert-blue" : "border-black/10 bg-[#FAF9F6] text-black"}`}>
                      <IconComp size={16} />
                    </div>
                    <div>
                      <span className="font-serif text-sm font-bold uppercase tracking-tight block">
                        {language === "ar" ? g.arabicTitle : g.title}
                      </span>
                      <span className="font-mono text-[9px] text-[#777] uppercase block mt-0.5">
                        {language === "ar" ? `المهلة: ${g.leadTimeAr}` : `Notice: ${g.leadTime}`}
                      </span>
                    </div>
                  </div>
                  <ChevronRight 
                    size={14} 
                    className={`transition-transform duration-300 ${
                      isSelected ? "text-desert-blue rotate-90 translate-x-1" : "text-black/20 group-hover:text-black group-hover:translate-x-1"
                    }`} 
                  />
                </button>
              );
            })}
          </div>

          {/* Quick Action Button Hub depending on Active service */}
          <div className="bg-[#FAF9F6] border-2 border-black p-5 mt-6 space-y-4 shadow-brutalist">
            <span className="font-mono text-[9px] tracking-widest text-black font-extrabold uppercase block border-b border-black/5 pb-2">
              {language === "ar" ? "روابط وإجراءات الحجز السريع" : "QUICK ACTION HUB"}
            </span>
            
            {activeService === "stay" && (
              <div className="space-y-3">
                <p className="font-sans text-[11px] text-neutral-600 leading-normal">
                  {language === "ar" 
                    ? "هل أنت مستعد لبدء إقامتك المبيتة؟ انقر للذهاب مباشرة لمحرك حجز كوينترا لتفقد التوافر والغرف."
                    : "Ready to reserve your geodesic dome? Launch the official Kwentra PMS booking system to lock in your desired dates."}
                </p>
                <button
                  onClick={() => {
                    // Trigger Kwentra default lookup
                    const kwentraUrl = "https://manage.kwentra.com/reservation/online/#/filter?selling_type=rooms&selling_types=Rooms&rooms_info=%5B%7B%22id%22%3A0%2C%22adults%22%3A2%2C%22children%22%3A0%7D%5D&currency=EGP&date_format=DD-MM-YYYY&selected_hotel=653&lang=en-us&company=151&instances=653";
                    window.open(kwentraUrl, "_blank", "noopener,noreferrer");
                  }}
                  className="w-full text-center py-2.5 px-4 bg-desert-blue text-white font-mono text-[10px] font-bold tracking-wider uppercase border-2 border-black hover:bg-black hover:text-white hover:shadow-none shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <ExternalLink size={12} />
                  <span>{language === "ar" ? "فتح محرك حجز كوينترا ↗" : "LAUNCH KWENTRA PMS ↗"}</span>
                </button>
              </div>
            )}

            {activeService === "dining" && (
              <div className="space-y-3">
                <p className="font-sans text-[11px] text-neutral-600 leading-normal">
                  {language === "ar" 
                    ? "اللحوم البدوية والمندي تتطلب طهياً بطيئاً يستغرق من 3 إلى 5 ساعات. يرجى تسجيل طلبات الطعام لتجهيزها مسبقاً."
                    : "Mandi wood-fire items require 3 to 5 hours of firewood slow cooking. Submit your table food options in advance using our system."}
                </p>
                <button
                  onClick={() => {
                    document.getElementById("lummayya-booking-system")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full text-center py-2.5 px-4 bg-black text-white font-mono text-[10px] font-bold tracking-wider uppercase border-2 border-black hover:bg-desert-blue hover:shadow-none shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Utensils size={12} className="text-desert-blue" />
                  <span>{language === "ar" ? "نموذج طلب الطعام المسبق ↓" : "PRE-ORDER FOOD FORM ↓"}</span>
                </button>
              </div>
            )}

            {activeService === "experience" && (
              <div className="space-y-3">
                <p className="font-sans text-[11px] text-neutral-600 leading-normal">
                  {language === "ar" 
                    ? "يُنسق مرشدونا البدو رحلات السفاري وتأجير سيارات الجيب 4x4. تفضل بالتواصل لتخصيص جولة استكشافية لك."
                    : "Our local Bedouin coordinators arrange 4x4 vehicles and permit clearings. Coordinate your desert route and timings with our hosts."}
                </p>
                <button
                  onClick={() => {
                    document.getElementById("interactive-protectorate-map")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full text-center py-2.5 px-4 bg-desert-green text-white font-mono text-[10px] font-bold tracking-wider uppercase border-2 border-black hover:bg-black hover:shadow-none shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <Compass size={12} className="animate-spin-slow" />
                  <span>{language === "ar" ? "تتبع مسارات السفاري الخريطة ↓" : "VIEW TRAILS ON MAP ↓"}</span>
                </button>
              </div>
            )}

            {activeService === "corporate" && (
              <div className="space-y-3">
                <p className="font-sans text-[11px] text-neutral-600 leading-normal">
                  {language === "ar" 
                    ? "للحجوزات الجماعية وتصوير الأفلام والدرون والشركات، تواصل مباشرة مع المنسق العام لكبار الشخصيات عبر واتساب."
                    : "For custom corporate events, retreats, and commercial filming permits, chat directly with our master coordinator via WhatsApp or Phone."}
                </p>
                <a
                  href="https://wa.me/201070188857"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 px-4 bg-emerald-700 text-white font-mono text-[10px] font-bold tracking-wider uppercase border-2 border-black hover:bg-emerald-800 hover:shadow-none shadow-[2px_2px_0px_rgba(0,0,0,1)] transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <MessageSquare size={12} />
                  <span>{language === "ar" ? "مراسلة كبار الشخصيات واتساب ↗" : "CONTACT VIP CONCIERGE ↗"}</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Right Side Content Block: Step-by-Step and Policy Info */}
        <div className="lg:col-span-8 bg-white border-2 border-black p-6 md:p-8 shadow-brutalist relative">
          
          {/* Section Summary Head */}
          <div className="border-b border-black/10 pb-6 mb-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-3">
              <span className="font-mono text-[9px] tracking-widest bg-desert-blue-light text-desert-blue px-2.5 py-1 uppercase font-bold border border-desert-blue/20">
                {language === "ar" ? `دليل الخطوات التفاعلية` : `Active Service Playbook`}
              </span>
              <div className="flex items-center space-x-2 text-[10px] font-mono text-neutral-500 gap-1.5">
                <Clock size={11} className="text-desert-blue" />
                <span className="uppercase">{language === "ar" ? "قنوات الحجز المعتمدة" : "Booking Mode"}:</span>
                <span className="font-bold text-black border-b border-black/10 pb-0.5">
                  {language === "ar" ? currentGuide.bookingMethodAr : currentGuide.bookingMethod}
                </span>
              </div>
            </div>

            <h3 className="font-serif text-2xl uppercase tracking-tight text-desert-dark">
              {language === "ar" ? currentGuide.arabicTitle : currentGuide.title}
            </h3>
            
            <p className="font-sans text-xs text-neutral-600 leading-relaxed mt-3 italic">
              "{language === "ar" ? currentGuide.overviewAr : currentGuide.overview}"
            </p>
          </div>

          {/* Steps Display */}
          <div className="space-y-6">
            <span className="font-mono text-[9px] tracking-widest text-[#777] uppercase block font-bold mb-2">
              {language === "ar" ? "الإجراءات المنهجية خطوة بخطوة" : "PROCEDURAL STEPS & PROTOCOL"}
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {((language === "ar" ? currentGuide.stepsAr : currentGuide.steps) || []).map((step, idx) => (
                <div 
                  key={idx} 
                  className="border border-black/10 p-4 bg-desert-offwhite/35 hover:bg-[#FAF9F6] transition-colors relative flex gap-3 h-full items-start"
                >
                  <span className="font-mono text-xs font-black text-desert-blue shrink-0 bg-white border border-black px-1.5 py-0.5 shadow-[1px_1px_0px_rgba(0,0,0,1)]">
                    {step.number}
                  </span>
                  <div className="space-y-1">
                    <h4 className="font-serif text-xs font-bold uppercase tracking-tight text-black">
                      {step.title}
                    </h4>
                    <p className="font-sans text-[11px] text-neutral-500 leading-normal">
                      {step.description}
                    </p>
                    {step.highlight && (
                      <div className="bg-amber-50 border-l-2 border-amber-500 p-1.5 text-[9px] text-amber-900 font-mono mt-2 leading-tight">
                        <strong className="uppercase">NOTE:</strong> {step.highlight}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Service Rules & Limits */}
          <div className="mt-8 pt-6 border-t border-black/10 space-y-4">
            <span className="font-mono text-[9px] tracking-widest text-[#777] uppercase block font-bold">
              {language === "ar" ? "لوائح الخدمة والسياسة التنظيمية" : "REGULATORY COMPLIANCE & LIMITATIONS"}
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {((language === "ar" ? currentGuide.rulesAr : currentGuide.rules) || []).map((rule, idx) => (
                <div key={idx} className="flex gap-2 items-start text-[11px] font-sans text-neutral-600">
                  <CheckCircle2 size={12} className="text-desert-green shrink-0 mt-0.5" />
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Pre-Arrival Checklist & Packing Guide */}
      <div className="mt-12 border-2 border-black bg-[#FAF9F6] p-6 md:p-8 shadow-brutalist relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(#C8B9A6_1px,transparent_1px)] [background-size:16px_16px] opacity-15 pointer-events-none" />
        
        <div className="relative z-10 max-w-2xl mb-8">
          <div className="flex items-center gap-2 mb-2">
            <Luggage className="w-4 h-4 text-desert-blue shrink-0" />
            <span className="font-mono text-[9px] tracking-widest text-desert-blue uppercase font-bold">
              {language === "ar" ? "قائمة تجهيز حقائب السفر والصحراء" : "PRE-ARRIVAL PACKING CHECKLIST"}
            </span>
          </div>
          <h3 className="font-serif text-xl md:text-2xl uppercase tracking-tight text-desert-dark">
            {language === "ar" ? "ماذا يجب أن تحزم لرحلتك الصحراوية؟" : "What to Pack for the Wilderness"}
          </h3>
          <p className="font-sans text-xs text-neutral-600 leading-relaxed mt-2">
            {language === "ar" 
              ? "البيئة الصحراوية فريدة ومتغيرة؛ حيث يسود نهاراً الدفء المعتدل وتتحول الليالي إلى برودة شديدة وهادئة. نوصي بتجهيز الحقائب بالبنود التالية لضمان تجربة مريحة وسلسة تماماً."
              : "The Wadi El Rayan coordinates feature high daytime solar intensity and brisk, cool night winds. Review our essential packing recommendations before you set out from Cairo or abroad."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative z-10">
          {packingItems.map((item, idx) => {
            const IconC = item.icon;
            return (
              <div key={idx} className="bg-white border border-black p-4 space-y-2 hover:shadow-[3px_3px_0px_rgba(0,0,0,1)] transition-all flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="w-7 h-7 rounded-full bg-desert-blue-light/40 border border-desert-blue/15 flex items-center justify-center text-desert-blue">
                    <IconC size={14} />
                  </div>
                  <h4 className="font-serif text-xs font-bold uppercase tracking-tight text-black leading-tight">
                    {language === "ar" ? item.nameAr : item.name}
                  </h4>
                  <p className="font-sans text-[10px] text-neutral-500 leading-snug">
                    {language === "ar" ? item.descAr : item.desc}
                  </p>
                </div>
                <div className="font-mono text-[8px] text-[#888] pt-2 border-t border-black/5 flex items-center justify-between">
                  <span>ITEM</span>
                  <span>{(idx + 1).toString().padStart(2, '0')}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive FAQ Accordion Block */}
      <div className="mt-12 space-y-6">
        <div className="max-w-xl">
          <span className="font-mono text-[9px] tracking-widest text-[#777] uppercase block font-bold mb-2">
            {language === "ar" ? "الأسئلة الشائعة والأمور التوضيحية" : "FREQUENTLY ASKED QUESTIONS"}
          </span>
          <h3 className="font-serif text-2xl uppercase tracking-tight text-desert-dark">
            {language === "ar" ? "أسئلة شائعة حول الحجوزات" : "Booking Frequently Asked Questions"}
          </h3>
        </div>

        <div className="border border-black divide-y divide-black bg-white shadow-brutalist">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between font-serif text-sm font-bold text-black hover:bg-[#FAF9F6] transition-colors cursor-pointer gap-4"
                >
                  <div className="flex items-start gap-3">
                    <span className="font-mono text-xs text-desert-blue font-black bg-desert-blue-light/30 px-1.5 py-0.5 rounded border border-desert-blue/10 shrink-0">Q</span>
                    <span>{language === "ar" ? faq.qAr : faq.q}</span>
                  </div>
                  <ChevronRight size={14} className={`transform transition-transform duration-300 shrink-0 ${isOpen ? "rotate-90 text-desert-blue" : "text-black/30"}`} />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden bg-[#FAF9F6] border-t border-black/10"
                    >
                      <div className="px-5 py-4 text-xs font-sans text-neutral-600 leading-relaxed border-l-4 border-desert-blue flex gap-3">
                        <span className="font-mono text-xs text-desert-green font-black shrink-0">A</span>
                        <p>{language === "ar" ? faq.aAr : faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
