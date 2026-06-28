import React, { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ShieldAlert, FileText, Scale, Ban, CalendarDays, Users, Info } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  arabicTitle: string;
  icon: any;
  content: ReactNode;
}

export default function PolicyPage() {
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
          <p className="font-semibold text-black mb-2">
            To preserve the quiet luxury tranquil atmosphere and high-density natural safety of our high-voltage premium desert site, the following bans are strictly active:
          </p>
          <ul className="list-none space-y-2.5">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
              <div>
                <strong className="text-black uppercase text-[10px] font-mono">Strict Alcohol Ban:</strong> No alcoholic beverages of any kind are permitted inside or outside rooms within glamping boundaries.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
              <div>
                <strong className="text-black uppercase text-[10px] font-mono">Strict No-Pets Policy:</strong> For the safety and hygiene of all desert guests, pets are strictly not allowed on the premises.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
              <div>
                <strong className="text-black uppercase text-[10px] font-mono">Outside Food & Beverage Limit:</strong> Guests are not permitted to bring outside foods, meals, or beverage cartons into the site.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
              <div>
                <strong className="text-black uppercase text-[10px] font-mono">Cooking & Open Fires Ban:</strong> No private cooking, personal BBQ kits, or portable sand-burners are permitted under any circumstances inside or outside geodesic dome areas.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
              <div>
                <strong className="text-black uppercase text-[10px] font-mono">No Portable Speakers:</strong> External music devices or speakers are strictly prohibited inside the camp to maintain premium tranquil silence.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
              <div>
                <strong className="text-black uppercase text-[10px] font-mono">Self-Camping Restriction:</strong> No self-setup tents, sleeping bags, or private camping setups are authorized anywhere inside the glamp boundaries.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 bg-[#c43232] rounded-full mt-1.5 shrink-0" />
              <div>
                <strong className="text-[#c43232] uppercase text-[10px] font-mono">Direct Orders from Children Ban:</strong> For licensing and liability reasons, service orders, requests, and purchases must always be executed by legal adults. Direct room service orders from children will be declined at reception.
              </div>
            </li>
          </ul>
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
          <p className="font-semibold text-black mb-2">
            Our booking slots are highly exclusive. Cancellation fees are strictly enforced according to the schedule below:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-2">
            <div className="border border-black p-4 bg-white">
              <span className="font-mono text-[9px] tracking-widest text-[#777] block uppercase mb-1">7 Days Prior</span>
              <span className="font-mono text-sm font-bold block text-black">25% Cancellation Fee</span>
              <p className="text-[11px] text-neutral-500 mt-1">Applies for requests made more than 7 full days before arrival date.</p>
            </div>
            <div className="border border-black p-4 bg-white">
              <span className="font-mono text-[9px] tracking-widest text-[#777] block uppercase mb-1">2 Days Prior</span>
              <span className="font-mono text-sm font-bold block text-black">50% Cancellation Fee</span>
              <p className="text-[11px] text-neutral-500 mt-1">Applies for requests processed up to 2 days before arrival date.</p>
            </div>
            <div className="border border-black p-4 bg-[#FAF9F6]">
              <span className="font-mono text-[9px] tracking-widest text-[#c43232] block uppercase mb-1">Under 2 Days</span>
              <span className="font-mono text-sm font-bold block text-[#c43232]">Non-Refundable (100% Fee)</span>
              <p className="text-[11px] text-neutral-500 mt-1">Strictly zero refunds will be issued for cancellations under 48 hours.</p>
            </div>
          </div>
          <div className="border-l-2 border-black pl-3 py-1 bg-neutral-50">
            <span className="font-mono text-[10px] uppercase font-bold text-black block mb-0.5">Postponement Policy (تأجيل الحجز):</span>
            <p className="text-[11px]">
              Postponing or rescheduling a reservation is not permitted unless requested in writing <span className="font-bold">at least 5 days prior</span> to your original arrival date.
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
          <p className="font-semibold text-black mb-2">
            Legal guidelines mandated by local tourism regulations are non-negotiable:
          </p>
          <ul className="list-none space-y-2.5">
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 bg-[#c43232] rounded-full mt-1.5 shrink-0" />
              <div>
                <strong className="text-[#c43232] uppercase text-[10px] font-mono">Marriage Verification:</strong> For legally verified security checks, Egyptian couples must present an official marriage contract at the reception during standard check-in. Separate dome guidelines apply otherwise.
              </div>
            </li>
            <li className="flex items-start gap-2.5">
              <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
              <div>
                <strong className="text-black uppercase text-[10px] font-mono">National Park Environment Fees:</strong> Please note: Wadi El Rayan Protected Area entry fees ($10) and Wadi El Hitan entrance fees ($15) are NOT included in hospitality quotes and are fully the guest&apos;s responsibility. These are commanded by the national protectorate authorities and must be paid in cash at the protectorate gateway.
              </div>
            </li>
          </ul>
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
            <h4 className="font-mono text-[10px] uppercase font-bold text-black mb-2.5 tracking-widest pb-1 border-b border-black/10">
              🚩 Venue Setup & Corporate Guidelines
            </h4>
            <ul className="list-none space-y-2.5">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
                <div>
                  <strong className="text-black uppercase text-[10px] font-mono">Venue Condition:</strong> Your team is responsible for leaving the venue in the same condition in which it was provided. Any adjustments made to the setup should be returned to the original arrangement.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
                <div>
                  <strong className="text-black uppercase text-[10px] font-mono">Event Activities & Games:</strong> Your company will be fully accountable for all aspects of the games and team-building activities conducted during the event.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
                <div>
                  <strong className="text-black uppercase text-[10px] font-mono">Hospitality Services Exclusive:</strong> Our Glamp team will be exclusively responsible for all hospitality services. Please refrain from any involvement in this area to avoid overlap.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
                <div>
                  <strong className="text-black uppercase text-[10px] font-mono">Agenda Changes:</strong> Any modifications to the agenda must be approved and communicated through the General Manager.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
                <div>
                  <strong className="text-black uppercase text-[10px] font-mono">Special Requirements:</strong> All special requirements for your services are your responsibility. Our team is responsible for your event areas and their arrangements.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-[#c43232] rounded-full mt-1.5 shrink-0" />
                <div>
                  <strong className="text-[#c43232] uppercase text-[10px] font-mono">Room Access Restriction:</strong> Access to the rooms&apos; area is strictly not allowed.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-[#c43232] rounded-full mt-1.5 shrink-0" />
                <div>
                  <strong className="text-[#c43232] uppercase text-[10px] font-mono">Loudspeakers Ban:</strong> The use of loudspeakers is prohibited unless approved by the venue management.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
                <div>
                  <strong className="text-black uppercase text-[10px] font-mono">Working Schedules:</strong> You must inform us of all working schedules and preparations.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-[#c43232] rounded-full mt-1.5 shrink-0" />
                <div>
                  <strong className="text-[#c43232] uppercase text-[10px] font-mono">Layout Preservation:</strong> It is prohibited to use the venue setup for any activities; please maintain the venue&apos;s layout as it is.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-[#c43232] rounded-full mt-1.5 shrink-0" />
                <div>
                  <strong className="text-[#c43232] uppercase text-[10px] font-mono">Flags & Banners Prohibition:</strong> It is prohibited to raise or hang any flags inside the venue without prior approval from the venue management.
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase font-bold text-black mb-2.5 tracking-widest pb-1 border-b border-black/10">
              👥 Rules for Groups at the Glamp
            </h4>
            <ol className="list-decimal pl-4 space-y-2.5 text-[11px] text-neutral-700">
              <li>Hanging any flags is not allowed.</li>
              <li>The use of loudspeakers is prohibited.</li>
              <li>Adherence to the schedule is mandatory.</li>
              <li>Avoid interfering with the day&apos;s operations.</li>
              <li>Team-building activities must be pre-announced and approved by us. In such cases, additional costs may apply, or the activity may be declined if it affects the venue&apos;s rules.</li>
              <li>Access to the room area is not permitted.</li>
              <li>Groups must stick to their reserved tables.</li>
              <li>Any changes to the day&apos;s agenda must be approved by us.</li>
              <li>Lunch or dinner is limited to one hour if the booking is a slot.</li>
              <li>Cameras are not allowed without prior permission from the management, and photography is strictly prohibited without approval.</li>
              <li>If there is a room booking with a day-use package, the rooms may be used by a maximum of 3 persons only.</li>
            </ol>
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
            <h4 className="font-mono text-[10px] uppercase font-bold text-[#c43232] mb-2.5 tracking-widest pb-1 border-b border-[#c43232]/20">
              ⚠️ Strict Marriage Contract & Couple Regulations
            </h4>
            <ul className="list-none space-y-2.5">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-[#c43232] rounded-full mt-1.5 shrink-0" />
                <div>
                  <strong className="text-black uppercase text-[10px] font-mono block mb-0.5">Couples Only Verification:</strong>
                  We do not allow mixed groups in one room. Only married couples with an official marriage certificate are permitted. Even if one of the parties is of Arab or Gulf nationality, entry cannot be permitted without presenting an official marriage certificate.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-[#c43232] rounded-full mt-1.5 shrink-0" />
                <div>
                  <strong className="text-[#c43232] uppercase text-[10px] font-mono block mb-0.5">Unmarried Individuals Booking Cancellation:</strong>
                  If the booking is made by unmarried individuals for a single room, the reservation will be cancelled and the guest will bear all associated costs.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-[#c43232] rounded-full mt-1.5 shrink-0" />
                <div>
                  <strong className="text-[#c43232] uppercase text-[10px] font-mono block mb-0.5">Single Room Bookings Rule:</strong>
                  In the case of booking two single rooms for unmarried individuals, they will not be allowed to stay together in one room under any circumstance. If attempted, the booking will be cancelled and the guest will bear the full cost.
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase font-bold text-black mb-2.5 tracking-widest pb-1 border-b border-black/10">
              🛎️ Special VIP Dining & Pre-ordering
            </h4>
            <ul className="list-none space-y-2.5">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
                <div>
                  <strong className="text-black uppercase text-[10px] font-mono block mb-0.5">VIP Table Selection:</strong>
                  We usually receive many reservations at the restaurant and tend to be busy, but since you are our special and valued guest, your table and meals will be reserved and served wherever you prefer—whether indoor, outdoor, or in your private room.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
                <div>
                  <strong className="text-black uppercase text-[10px] font-mono block mb-0.5">Menu Pre-booking Requirements:</strong>
                  Some exquisite slow-cooked menu items require prior booking, such as Mandi, short ribs, pigeon, and oxtail (requires 3 to 6 hours notice).
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase font-bold text-black mb-2.5 tracking-widest pb-1 border-b border-black/10">
              🏔️ Local Area Fees, Amenities & Activities
            </h4>
            <ul className="list-none space-y-2.5">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
                <div>
                  <strong className="text-black uppercase text-[10px] font-mono block mb-0.5">Wadi El Rayan Park Entrance Fees:</strong>
                  Please note that Wadi El Rayan Protected Area gateway entrance fees are not included in our pricing and are strictly the guest&apos;s responsibility.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
                <div>
                  <strong className="text-black uppercase text-[10px] font-mono block mb-0.5">Adventure Activities & Desert Experiences:</strong>
                  We offer various exciting experiences including jeep safaris, pottery-making classes, horseback riding, and our therapeutic salt cave experience (requires pre-booking). <span className="font-semibold text-black">Payment for activities is Cash Only.</span>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 bg-black rounded-full mt-1.5 shrink-0" />
                <div>
                  <strong className="text-black uppercase text-[10px] font-mono block mb-0.5">Room Climate Control:</strong>
                  All accommodation rooms are fully equipped with premium hot and cold air conditioning.
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/20 p-3.5">
            <span className="font-mono text-[10px] uppercase font-bold text-black block mb-1">
              📱 Reception Dedicated Communication
            </span>
            <p className="text-[11px] text-neutral-800">
              If you need anything else before or during your stay, feel free to contact us via WhatsApp on the reception&apos;s dedicated number (WhatsApp only).
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="bg-[#FAF9F6] border-2 border-black p-6 md:p-12 shadow-brutalist max-w-7xl mx-auto my-8 text-black">
      {/* Editorial Luxury Header */}
      <div className="border-b-2 border-black pb-8 mb-10 flex flex-col lg:flex-row lg:items-end justify-between items-start gap-4">
        <div>
          <span className="font-mono text-[10px] tracking-widest text-[#777] uppercase block mb-2">
            REGULATORY COMPLIANCE • قواعد واشتراطات الكامب والسياسات
          </span>
          <h2 className="font-serif text-3xl md:text-5xl uppercase tracking-tighter">
            Glamps Rules & Policies
          </h2>
          <p className="font-sans text-xs text-neutral-600 max-w-xl mt-3 leading-relaxed">
            Please review our binding resort rules, cancellation rules, and campground codes carefully before checking in or reserving your desert experience.
          </p>
        </div>

        <div className="bg-white border border-black/15 bg-[#FAF9F6] px-4 py-2 flex items-center space-x-2 font-mono text-[9px] uppercase tracking-widest">
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
                className="w-full text-left px-6 py-5 flex justify-between items-center bg-white hover:bg-[#FAF9F6] transition-colors cursor-pointer"
              >
                <div className="flex items-center space-x-3.5">
                  <IconComponent className="w-5 h-5 text-black shrink-0" />
                  <div>
                    <h3 className="font-serif text-md font-bold tracking-tight uppercase text-black">
                      {sec.title}
                    </h3>
                    <span className="font-serif text-[11px] text-neutral-400 block font-normal" dir="rtl">
                      {sec.arabicTitle}
                    </span>
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
                    className="overflow-hidden bg-[#FAF9F6]/30"
                  >
                    <div className="p-6 border-t border-black/10 bg-[#FAF9F6]/10">
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
