import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, Users, Home, Sparkles, Check } from "lucide-react";
import { BookingDetails } from "../types";

interface BookingWidgetProps {
  onSearch: (details: BookingDetails) => void;
}

export default function BookingWidget({ onSearch }: BookingWidgetProps) {
  const [checkIn, setCheckIn] = useState("2026-10-18");
  const [checkOut, setCheckOut] = useState("2026-10-21");
  const [guests, setGuests] = useState(2);
  const [chosenType, setChosenType] = useState("Geo-Dome Deluxe Tent");
  const [bookingConfirmed, setBookingConfirmed] = useState<BookingDetails | null>(null);

  const accommodationOptions = [
    "Geo-Dome Deluxe Tent",
    "Geo-Dome Suite Tent",
    "Safari Suite Tent",
  ];

  const handleBookingTrigger = (e: FormEvent) => {
    e.preventDefault();
    const details: BookingDetails = {
      checkIn,
      checkOut,
      guests,
      accommodationType: chosenType,
    };
    onSearch(details);
    setBookingConfirmed(details);
    // Auto clear feedback after 5 seconds
    setTimeout(() => {
      setBookingConfirmed(null);
    }, 6000);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleBookingTrigger}
        className="bg-[#F4EFE3] border-2 border-desert-dark p-6 md:p-8 shadow-brutalist relative overflow-hidden"
      >
        {/* Fine left colored accent representing deep water */}
        <div className="absolute top-0 bottom-0 left-0 w-1.5 bg-desert-blue" />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
          {/* Check-In Date */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 font-mono text-[10px] tracking-widest text-[#777] uppercase">
              <Calendar className="w-3.5 h-3.5 text-desert-blue" />
              <span>CHECK IN</span>
            </label>
            <div className="relative">
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-[#F4EFE3] border border-black focus:border-desert-blue h-11 px-3 py-2 font-mono text-xs tracking-wider outline-none transition-colors"
                required
              />
            </div>
          </div>

          {/* Check-Out Date */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 font-mono text-[10px] tracking-widest text-[#777] uppercase">
              <Calendar className="w-3.5 h-3.5 text-desert-blue" />
              <span>CHECK OUT</span>
            </label>
            <div className="relative">
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-[#F4EFE3] border border-black focus:border-desert-blue h-11 px-3 py-2 font-mono text-xs tracking-wider outline-none transition-colors"
                required
              />
            </div>
          </div>

          {/* Guests Matrix */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 font-mono text-[10px] tracking-widest text-[#777] uppercase">
              <Users className="w-3.5 h-3.5 text-desert-blue" />
              <span>EXPERIENCERS</span>
            </label>
            <div className="flex items-center bg-[#F4EFE3] border border-black h-11 justify-between px-3">
              <button
                type="button"
                onClick={() => setGuests(Math.max(1, guests - 1))}
                className="font-mono text-lg hover:text-desert-blue transition-colors px-2"
              >
                -
              </button>
              <span className="font-mono text-xs tracking-wider">{guests} {guests === 1 ? "GUEST" : "GUESTS"}</span>
              <button
                type="button"
                onClick={() => setGuests(Math.min(6, guests + 1))}
                className="font-mono text-lg hover:text-desert-blue transition-colors px-2"
              >
                +
              </button>
            </div>
          </div>

          {/* Accommodation Type */}
          <div className="space-y-2">
            <label className="flex items-center space-x-2 font-mono text-[10px] tracking-widest text-[#777] uppercase">
              <Home className="w-3.5 h-3.5 text-desert-blue" />
              <span>SUITE CATAGORY</span>
            </label>
            <div className="relative">
              <select
                value={chosenType}
                onChange={(e) => setChosenType(e.target.value)}
                className="w-full bg-[#F4EFE3] border border-black focus:border-desert-blue h-11 px-3 py-2 font-sans text-xs tracking-wide uppercase appearance-none outline-none transition-colors"
              >
                {accommodationOptions.map((opt) => (
                  <option key={opt} value={opt} className="normal-case">
                    {opt}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-3.5 pointer-events-none text-desert-charcoal w-3 h-3 flex items-center justify-center">
                ↓
              </div>
            </div>
          </div>
        </div>

        {/* Submit Bespoke Reservation Button with Magnetic Polish */}
        <div className="mt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-desert-dark/5">
          <p className="font-mono text-[10px] tracking-widest text-desert-charcoal/50 uppercase">
            * IN PRIVATE WADI EL RAYAN WILDERNESS ZONE
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-desert-dark text-desert-offwhite hover:bg-neutral-900 border border-desert-dark px-8 h-11 font-mono text-xs tracking-widest uppercase transition-all duration-300 relative overflow-hidden group cursor-pointer flex items-center justify-center space-x-2"
          >
            <span className="relative z-10">BOOK BESPOKE STAY</span>
            <Sparkles className="w-3.5 h-3.5 text-desert-blue group-hover:rotate-12 transition-transform duration-300 relative z-10" />
            
            {/* Dune Shift Hover Wave Effect */}
            <div className="absolute inset-0 bg-desert-blue w-full h-full scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 -z-0 opacity-10" />
          </motion.button>
        </div>
      </form>

      {/* Confirmation feedback card */}
      <AnimatePresence>
        {bookingConfirmed && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="mt-4 p-4 bg-desert-blue-light border border-desert-blue/40 text-desert-charcoal text-xs relative flex items-start space-x-3"
          >
            <div className="bg-desert-dark text-white p-1 rounded-full">
              <Check className="w-3.5 h-3.5 text-desert-blue" />
            </div>
            <div>
              <p className="font-sans font-medium text-desert-dark uppercase tracking-wide">
                Bespoke Wilderness Inquiry Registered
              </p>
              <p className="font-mono text-[11px] text-desert-charcoal/85 mt-1">
                Stay: <span className="font-semibold text-desert-dark">{bookingConfirmed.checkIn}</span> to <span className="font-semibold text-desert-dark">{bookingConfirmed.checkOut}</span> • {bookingConfirmed.guests} Experiencer(s) • Suite: <span className="font-semibold text-desert-dark">{bookingConfirmed.accommodationType}</span>
              </p>
              <p className="text-[10px] text-desert-charcoal/60 mt-1 font-sans italic">
                Our ultra-luxury private butler concierge will establish direct satellite contact within 4 hours. You can also proceed directly to our reservation system:
              </p>
              <div className="mt-3">
                <a
                  href="https://manage.kwentra.com/reservation/online/#/filter?arrival=18-06-2026&departure=19-06-2026&selling_type=rooms&selling_types=Rooms&rooms_info=%5B%7B%22id%22%3A0%2C%22adults%22%3A1%2C%22children%22%3A0%7D%5D&promo=&voucher=&profile_id=&currency=EGP&date_format=DD-MM-YYYY&room_type=&selected_hotel=653&lang=en-us&company=151&max_num_rooms=10&child_age_dropdown_list=true&children_dropdown_list=true&terminologies=%7B%7D&hotel_selection=%7B%22dropdown%22%3Afalse%2C%22allow_empty%22%3Afalse%2C%22destinations%22%3Afalse%7D&instances=653&specific_rooms_selling=false"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1.5 bg-black text-white hover:bg-desert-blue hover:text-black py-2 px-3 font-mono text-[9px] uppercase tracking-widest transition-all duration-300 border border-black"
                >
                  <span>Go to Kwentra Direct Reservation</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
