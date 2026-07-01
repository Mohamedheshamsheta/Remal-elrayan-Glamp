import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ShieldAlert, FileText, Scale, Ban, CalendarDays, Users, Info } from "lucide-react";
import { useLanguage } from "../LanguageContext";

interface AccordionItem {
  id: string;
  title: string;
  arabicTitle: string;
  icon: any;
  content: ReactNode;
}

export default function PolicyPage() {
  const { language } = useLanguage();
  const [openSection, setOpenSection] = useState<string | null>("rules");

  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };

  const sections: AccordionItem[] = [
    {
      id: "rules",
      title: "1. Glamps Rules & Guidelines",
      arabicTitle: "قواعد واشتراطات كامب رمال الريان",
      icon: Ban,
      content: (
        <div className="space-y-4 font-sans text-xs text-neutral-700 leading-relaxed">
          <p className="font-serif text-[13px] text-neutral-800 italic mb-4">
            To preserve the quiet luxury, tranquil atmosphere, and safety of our desert site, the following regulations are strictly enforced:
          </p>
          <div className="space-y-1">
            {[
              { label: "Strict Alcohol Ban", text: "No alcoholic beverages of any kind are permitted inside or outside rooms within glamping boundaries.", critical: true },
              { label: "Strict No-Pets Policy", text: "For the safety and hygiene of all desert guests, pets are strictly not allowed on the premises.", critical: true },
              { label: "Outside Food & Beverage Limit", text: "Guests are not permitted to bring outside foods, meals, or beverage cartons into the site.", critical: false },
              { label: "Cooking & Open Fires Ban", text: "No private cooking, personal BBQ kits, or portable sand-burners are permitted under any circumstances inside or outside geodesic dome areas.", critical: true },
              { label: "No Portable Speakers", text: "External music devices or speakers are strictly prohibited inside the camp to maintain premium tranquil silence.", critical: true },
              { label: "Self-Camping Restriction", text: "No self-setup tents, sleeping bags, or private camping setups are authorized anywhere inside the glamp boundaries.", critical: false },
              { label: "Direct Orders from Children Ban", text: "For licensing and liability reasons, service orders, requests, and purchases must always be executed by legal adults. Direct room service orders from children will be declined at reception.", critical: true },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 py-3.5 border-b border-black/5 hover:bg-black/[0.01] transition-colors last:border-0 items-start">
                <span className="font-mono text-xs font-bold text-[#888] shrink-0 w-6">{(idx + 1).toString().padStart(2, '0')}</span>
                <div className="flex-1">
                  <span className={`inline-block font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 font-bold mb-1 ${item.critical ? 'bg-red-50 text-red-700 border border-red-500/10' : 'bg-neutral-100 text-neutral-700 border border-neutral-500/10'}`}>
                    {item.label}
                  </span>
                  <p className="font-sans text-[11px] text-neutral-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "cancellation",
      title: "2. Cancellation & Postponement Policy",
      arabicTitle: "سياسة الإلغاء والاسترجاع والتأجيل",
      icon: CalendarDays,
      content: (
        <div className="space-y-4 font-sans text-xs text-neutral-700 leading-relaxed">
          <p className="font-serif text-[13px] text-neutral-800 italic mb-2">
            Our booking slots are highly exclusive. Cancellation fees are strictly enforced according to the timeline below:
          </p>
          <div className="space-y-1">
            {[
              { period: "More than 7 Days Prior", fee: "25% Cancellation Fee", text: "Applies for requests made more than 7 full days before the scheduled arrival date.", status: "standard" },
              { period: "Between 2 to 7 Days Prior", fee: "50% Cancellation Fee", text: "Applies for requests processed between 2 and 7 days before the scheduled arrival date.", status: "warning" },
              { period: "Less than 48 Hours Prior", fee: "100% Cancellation Fee (Non-Refundable)", text: "Strictly zero refunds will be issued for cancellations or no-shows within 48 hours.", status: "critical" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6 py-4 border-b border-black/5 last:border-0">
                <div className="w-48 shrink-0">
                  <span className="font-mono text-[8px] uppercase tracking-wider text-[#777] block">TIMELINE</span>
                  <span className="font-sans text-xs font-bold text-black">{item.period}</span>
                </div>
                <div className="flex-1">
                  <span className={`inline-block font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 font-bold mb-1 ${item.status === 'critical' ? 'bg-red-50 text-red-700 border border-red-500/10' : item.status === 'warning' ? 'bg-amber-50 text-amber-800 border border-amber-500/10' : 'bg-neutral-100 text-neutral-700 border border-neutral-500/10'}`}>
                    {item.fee}
                  </span>
                  <p className="font-sans text-[11px] text-neutral-500 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-l-2 border-black pl-3.5 py-1 bg-neutral-50/50 mt-4">
            <span className="font-mono text-[10px] uppercase font-bold text-black block mb-0.5">
              Postponement Policy {language === "ar" && "(تأجيل الحجز)"}:
            </span>
            <p className="font-sans text-[11px] text-neutral-600 leading-relaxed">
              Postponing or rescheduling a reservation is not permitted unless requested in writing <span className="font-bold text-black">at least 5 days prior</span> to your original scheduled arrival date.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "legal",
      title: "3. Legal Terms & Local Area Rules",
      arabicTitle: "الشروط القانونية ورسوم المحمية الطبيعية",
      icon: Scale,
      content: (
        <div className="space-y-4 font-sans text-xs text-neutral-700 leading-relaxed">
          <p className="font-serif text-[13px] text-neutral-800 italic mb-2">
            Legal guidelines mandated by local tourism regulations are non-negotiable:
          </p>
          <div className="space-y-1">
            {[
              {
                title: "Marriage Verification",
                text: "For legally verified security checks, Egyptian couples must present an official marriage contract at the reception during standard check-in. Separate dome guidelines apply otherwise.",
                type: "LEGAL REQUIREMENT"
              },
              {
                title: "National Park Environment Fees",
                text: "Please note: Wadi El Rayan Protected Area entry fees ($10) and Wadi El Hitan entrance fees ($15) are NOT included in hospitality quotes and are fully the guest's responsibility. These are commanded by the national protectorate authorities and must be paid in cash at the protectorate gateway.",
                type: "GATEWAY FEE"
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 py-4 border-b border-black/5 hover:bg-black/[0.01] transition-colors last:border-0 items-start">
                <span className="font-mono text-xs font-bold text-[#888] shrink-0 w-6">{(idx + 1).toString().padStart(2, '0')}</span>
                <div className="flex-1">
                  <span className="inline-block bg-neutral-100 text-neutral-700 border border-neutral-500/10 font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 font-bold mb-1">
                    {item.type}
                  </span>
                  <h4 className="font-serif text-xs font-bold text-black mb-1">{item.title}</h4>
                  <p className="font-sans text-[11px] text-neutral-600 leading-relaxed">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "events",
      title: "4. Group & Event Operational Rules",
      arabicTitle: "قواعد واشتراطات المجموعات والفعاليات والشركات بالكامب",
      icon: Users,
      content: (
        <div className="space-y-6 font-sans text-xs text-neutral-700 leading-relaxed">
          <div>
            <h4 className="font-mono text-[9px] uppercase font-bold text-black mb-4 tracking-widest pb-1 border-b border-black/10">
              🚩 Venue Setup & Corporate Guidelines
            </h4>
            <div className="space-y-1">
              {[
                { tag: "Venue Condition", text: "Your team is responsible for leaving the venue in the same condition in which it was provided. Any adjustments made to the setup should be returned to the original arrangement.", type: "standard" },
                { tag: "Event Activities & Games", text: "Your company will be fully accountable for all aspects of the games and team-building activities conducted during the event.", type: "standard" },
                { tag: "Hospitality Services Exclusive", text: "Our Glamp team will be exclusively responsible for all hospitality services. Please refrain from any involvement in this area to avoid overlap.", type: "standard" },
                { tag: "Agenda Changes", text: "Any modifications to the agenda must be approved and communicated through the General Manager.", type: "standard" },
                { tag: "Special Requirements", text: "All special requirements for your services are your responsibility. Our team is responsible for your event areas and their arrangements.", type: "standard" },
                { tag: "Room Access Restriction", text: "Access to the rooms' area is strictly not allowed.", type: "critical" },
                { tag: "Loudspeakers Ban", text: "The use of loudspeakers is prohibited unless approved by the venue management.", type: "critical" },
                { tag: "Working Schedules", text: "You must inform us of all working schedules and preparations.", type: "standard" },
                { tag: "Layout Preservation", text: "It is prohibited to use the venue setup for any activities; please maintain the venue's layout as it is.", type: "critical" },
                { tag: "Flags & Banners Prohibition", text: "It is prohibited to raise or hang any flags inside the venue without prior approval from the venue management.", type: "critical" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 py-3.5 border-b border-black/5 hover:bg-black/[0.01] transition-colors last:border-0 items-start">
                  <span className="font-mono text-[10px] font-bold text-neutral-400 shrink-0 mt-0.5">{(idx + 1).toString().padStart(2, '0')}</span>
                  <div className="flex-1">
                    <strong className={`inline-block font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 font-bold mb-1 ${item.type === 'critical' ? 'bg-red-50 text-red-700 border border-red-500/10' : 'bg-neutral-100 text-neutral-700 border border-neutral-500/10'}`}>
                      {item.tag}
                    </strong>
                    <p className="font-sans text-[11px] text-neutral-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4">
            <h4 className="font-mono text-[9px] uppercase font-bold text-black mb-4 tracking-widest pb-1 border-b border-black/10">
              👥 Rules for Groups at the Glamp
            </h4>
            <div className="space-y-1">
              {[
                "Hanging any flags is not allowed.",
                "The use of loudspeakers is prohibited.",
                "Adherence to the schedule is mandatory.",
                "Avoid interfering with the day's operations.",
                "Team-building activities must be pre-announced and approved by us. In such cases, additional costs may apply, or the activity may be declined if it affects the venue's rules.",
                "Access to the room area is not permitted.",
                "Groups must stick to their reserved tables.",
                "Any changes to the day's agenda must be approved by us.",
                "Lunch or dinner is limited to one hour if the booking is a slot.",
                "Cameras are not allowed without prior permission from the management, and photography is strictly prohibited without approval.",
                "If there is a room booking with a day-use package, the rooms may be used by a maximum of 3 persons only."
              ].map((rule, idx) => (
                <div key={idx} className="flex gap-4 py-3 border-b border-black/5 hover:bg-black/[0.01] transition-colors last:border-0 items-start">
                  <span className="font-mono text-xs font-bold text-black shrink-0 w-6">{(idx + 1).toString().padStart(2, '0')}</span>
                  <p className="font-sans text-[11px] text-neutral-600 leading-relaxed mt-0.5">{rule}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    },
    {
      id: "accommodationNotes",
      title: "5. Notes for Accommodation Booking",
      arabicTitle: "تنبيهات وملاحظات هامة لحجز غرف الإقامة والزيارات",
      icon: Info,
      content: (
        <div className="space-y-6 font-sans text-xs text-neutral-700 leading-relaxed">
          <div>
            <h4 className="font-mono text-[9px] uppercase font-bold text-[#c43232] mb-4 tracking-widest pb-1 border-b border-[#c43232]/20">
              ⚠️ Strict Marriage Contract & Couple Regulations
            </h4>
            <div className="space-y-1">
              {[
                { label: "Couples Only Verification", text: "We do not allow mixed groups in one room. Only married couples with an official marriage certificate are permitted. Even if one of the parties is of Arab or Gulf nationality, entry cannot be permitted without presenting an official marriage certificate.", type: "strict" },
                { label: "Unmarried Individuals Booking Cancellation", text: "If the booking is made by unmarried individuals for a single room, the reservation will be cancelled and the guest will bear all associated costs.", type: "strict" },
                { label: "Single Room Bookings Rule", text: "In the case of booking two single rooms for unmarried individuals, they will not be allowed to stay together in one room under any circumstance. If attempted, the booking will be cancelled and the guest will bear the full cost.", type: "strict" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 py-3.5 border-b border-black/5 hover:bg-black/[0.01] transition-colors last:border-0 items-start">
                  <span className="font-mono text-xs font-bold text-[#c43232] shrink-0 mt-0.5">{(idx + 1).toString().padStart(2, '0')}</span>
                  <div className="flex-1">
                    <span className="inline-block bg-red-50 text-red-700 border border-red-500/10 font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 font-bold mb-1">
                      {item.label}
                    </span>
                    <p className="font-sans text-[11px] text-neutral-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[9px] uppercase font-bold text-black mb-4 tracking-widest pb-1 border-b border-black/10">
              🛎️ Special VIP Dining & Pre-ordering
            </h4>
            <div className="space-y-1">
              {[
                { label: "VIP Table Selection", text: "We usually receive many reservations at the restaurant and tend to be busy, but since you are our special and valued guest, your table and meals will be reserved and served wherever you prefer—whether indoor, outdoor, or in your private room." },
                { label: "Menu Pre-booking Requirements", text: "Some exquisite slow-cooked menu items require prior booking, such as Mandi, short ribs, pigeon, and oxtail (requires 3 to 6 hours notice)." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 py-3.5 border-b border-black/5 hover:bg-black/[0.01] transition-colors last:border-0 items-start">
                  <span className="font-mono text-xs font-bold text-neutral-400 shrink-0 mt-0.5">{(idx + 1).toString().padStart(2, '0')}</span>
                  <div className="flex-1">
                    <span className="inline-block bg-neutral-100 text-neutral-700 border border-neutral-500/10 font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 font-bold mb-1">
                      {item.label}
                    </span>
                    <p className="font-sans text-[11px] text-neutral-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[9px] uppercase font-bold text-black mb-4 tracking-widest pb-1 border-b border-black/10">
              🏔️ Local Area Fees, Amenities & Activities
            </h4>
            <div className="space-y-1">
              {[
                { label: "Wadi El Rayan Park Entrance Fees", text: "Please note that Wadi El Rayan Protected Area gateway entrance fees are not included in our pricing and are strictly the guest's responsibility." },
                { label: "Adventure Activities & Experiences", text: "We offer various exciting experiences including jeep safaris, pottery-making classes, horseback riding, and our therapeutic salt cave experience (requires pre-booking). Payment for activities is Cash Only." },
                { label: "Room Climate Control", text: "All accommodation rooms are fully equipped with premium hot and cold air conditioning." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 py-3.5 border-b border-black/5 hover:bg-black/[0.01] transition-colors last:border-0 items-start">
                  <span className="font-mono text-xs font-bold text-neutral-400 shrink-0 mt-0.5">{(idx + 1).toString().padStart(2, '0')}</span>
                  <div className="flex-1">
                    <span className="inline-block bg-neutral-100 text-neutral-700 border border-neutral-500/10 font-mono text-[9px] uppercase tracking-wider px-1.5 py-0.5 font-bold mb-1">
                      {item.label}
                    </span>
                    <p className="font-sans text-[11px] text-neutral-600 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-amber-500/5 border border-amber-500/10 p-4">
            <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-amber-900 block mb-1">
              📱 Reception Dedicated Communication
            </span>
            <p className="font-sans text-[11px] text-neutral-700 leading-relaxed">
              If you need anything else before or during your stay, feel free to contact us via WhatsApp on the reception&apos;s dedicated number (WhatsApp only).
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-[#F4EFE3] border-2 border-black p-6 md:p-12 shadow-brutalist max-w-7xl mx-auto my-8 text-black">
      {/* Editorial Luxury Header */}
      <div className="border-b-2 border-black pb-8 mb-10 flex flex-col lg:flex-row lg:items-end justify-between items-start gap-4">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-[#777] uppercase block mb-2">
            REGULATORY COMPLIANCE {language === "ar" && "• قواعد واشتراطات الكامب والسياسات"}
          </span>
          <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-tighter">
            Glamps Rules & Policies
          </h2>
          <p className="font-sans text-xs text-neutral-600 max-w-xl mt-3 leading-relaxed">
            Please review our binding resort rules, cancellation rules, and campground codes carefully before checking in or reserving your desert experience.
          </p>
        </div>

        <div className="bg-white border border-black/15 bg-[#F4EFE3] px-4 py-2 flex items-center space-x-2 font-mono text-[9px] uppercase tracking-widest">
          <FileText className="w-3.5 h-3.5 text-black" />
          <span>OFFICIAL REGULATORY CODE</span>
        </div>
      </div>

      {/* Accordion Layout */}
      <div className="border-2 border-black divide-y-2 divide-black bg-white overflow-hidden shadow-sm">
        {sections.map((sec) => {
          const IconComponent = sec.icon;
          const isItemOpen = openSection === sec.id;
          return (
            <div key={sec.id} className="relative">
              {/* Trigger Button */}
              <button
                onClick={() => toggleSection(sec.id)}
                className="w-full text-left px-6 py-5 flex justify-between items-center bg-white hover:bg-[#F4EFE3] transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3.5">
                  <IconComponent className="w-5 h-5 text-black shrink-0" />
                  <div>
                    <h3 className="font-serif text-md font-bold tracking-tight uppercase text-black">
                      {sec.title}
                    </h3>
                    {language === "ar" && (
                      <span className="font-serif text-[11px] text-neutral-400 block font-normal" dir="rtl">
                        {sec.arabicTitle}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <motion.div
                    animate={{ rotate: isItemOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-black" />
                  </motion.div>
                </div>
              </button>

              {/* Collapsible Content */}
              <AnimatePresence initial={false}>
                {isItemOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden bg-[#F4EFE3]/30"
                  >
                    <div className="p-6 border-t border-black/10 bg-[#F4EFE3]/10">
                      {sec.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Notice box */}
      <div className="bg-white border border-black p-4 mt-8 flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 text-black flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-mono text-[9px] uppercase tracking-wider font-bold block mb-0.5">TERMS ACKNOWLEDGEMENT</span>
          <p className="font-sans text-xs text-neutral-600 leading-relaxed">
            By paying for rooms via Kwentra or submitting a restaurant pre-order receipt, guests formally agree to co-operate with all of the local governorate constraints, national park rules, and campsite regulations listed above.
          </p>
        </div>
      </div>
    </div>
  );
}
