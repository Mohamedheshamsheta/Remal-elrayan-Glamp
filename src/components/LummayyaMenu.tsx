import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Utensils, Award, Clock, Users, Coffee, Flame, Heart } from "lucide-react";
import { PalmTree } from "./DesertTree";

interface MenuItem {
  name: string;
  price: number;
  details?: string;
  notes?: string;
}

interface MenuSection {
  category: string;
  infoNote?: string;
  items: MenuItem[];
}

interface LummayyaMenuProps {
  nationality: "egyptian" | "non-egyptian";
  currency: "EGP" | "USD";
}

export default function LummayyaMenu({ nationality, currency }: LummayyaMenuProps) {
  const [activeTab, setActiveTab] = useState("Breakfast & Specialties");
  const EXCHANGE_RATE = 50.0;

  const formatPrice = (usdPrice: number) => {
    if (currency === "USD" || nationality === "non-egyptian") {
      return `$${usdPrice} USD`;
    }
    return `${(usdPrice * EXCHANGE_RATE).toLocaleString()} EGP`;
  };

  const menuData: Record<string, MenuSection[]> = {
    "Breakfast & Specialties": [
      {
        category: "Bedouin Breakfast",
        items: [
          {
            name: "Bedouin Breakfast",
            price: 10,
            details: "Foul Eskandrani or Tehena with lemon and oil, White cheese with tomato, Two eggs of your choice, Tameya, Feteer, Honey, Molasses and tehena, Fayoumi bread."
          }
        ]
      },
      {
        category: "House Specialties",
        infoNote: "Mandi cooking time for Chicken & Duck is 3 hours. Mandi cooking time for Short Ribs & Goat is 5 hours.",
        items: [
          {
            name: "Half Mandi Bedouin Chicken",
            price: 20,
            details: "Served with Egyptian rice with sheriah, mulukhiyah, baladi salad, baba ghanoug, tumeya and dakous.",
            notes: "Cooking time: 3 hours required"
          },
          {
            name: "Half Mandi Bedouin Duck",
            price: 25,
            details: "Served with Basmati rice with our oriental Bedouin touch, musakaa, roasted vegetables, baladi salad, harisa and tehena.",
            notes: "Cooking time: 3 hours required"
          },
          {
            name: "Quarter Mandi Bedouin Goat",
            price: 100,
            details: "Served with Egyptian rice, mulukhiyah, musakaa, roasted vegetables, baladi salad, baba ghanoug, tumeya, harisa, dakous and pesto.",
            notes: "Cooking time: 5 hours required"
          },
          {
            name: "Half Mandi Bedouin Goat",
            price: 165,
            details: "Served with Egyptian rice, mulukhiyah, musakaa, roasted vegetables, baladi salad, baba ghanoug, tumeya, harisa, dakous and pesto.",
            notes: "Cooking time: 5 hours required"
          },
          {
            name: "Short Ribs",
            price: 40,
            details: "Slow cooked in the Mandi oven over firewood for a rich smoky flavor. Served with Basmati rice, roasted vegetables, pesto dipping sauce and harisa.",
            notes: "Price per Kilogram • Cooking time: 5 hours required"
          }
        ]
      }
    ],
    "Delicacies & Pasta": [
      {
        category: "House Delicacies",
        items: [
          {
            name: "Beef Tenderloin with Mushroom Sauce",
            price: 30,
            details: "Served with mashed potatoes and roasted vegetables or sautéed green beans."
          },
          {
            name: "Beef Medallions",
            price: 25,
            details: "Served with mashed potatoes and sautéed green beans."
          },
          {
            name: "Braised Oxtail Akawi",
            price: 25,
            details: "Slow cooked with caramelized onions and served with rice."
          },
          {
            name: "Stuffed Pigeon",
            price: 25,
            details: "Two stuffed pigeons served with rice and French fries."
          },
          {
            name: "Quail",
            price: 20,
            details: "Two quails cooked with julienne onions and a touch of lemon. Served with French fries or Basmati rice."
          },
          {
            name: "Shrimps",
            price: 25,
            details: "Grilled, Fried or Butterfly. Served with green rice and tartar or butterfly sauce."
          }
        ]
      },
      {
        category: "Pasta",
        items: [
          {
            name: "Spaghetti Bolognese",
            price: 20,
            details: "Served with Parmesan cheese."
          },
          {
            name: "Mebakbaka",
            price: 20,
            details: "Tiny pasta rings cooked in light red sauce with diced beef tenderloin."
          },
          {
            name: "Penne Alfredo Chicken",
            price: 15,
            details: "Served with Parmesan cheese."
          },
          {
            name: "Purple Spaghetti",
            price: 15,
            details: "Served with Hawaiian sweet chicken sauce."
          },
          {
            name: "Linguine with Red Sauce",
            price: 10,
            details: "Served with fresh basil and Parmesan cheese."
          },
          {
            name: "Linguine with White Sauce",
            price: 10,
            details: "Served with Parmesan cheese."
          }
        ]
      }
    ],
    "Quick bites & Sides": [
      {
        category: "Quick n Delic",
        items: [
          {
            name: "Smash Burger Single",
            price: 15,
            details: "Prepared with cheese, caramelized onions, pickles, tomatoes and mayo. Served with French fries."
          },
          {
            name: "Smash Burger Double",
            price: 20,
            details: "Prepared with cheese, caramelized onions, pickles, tomatoes and mayo. Served with French fries."
          },
          {
            name: "Boerewors",
            price: 15,
            details: "Served with colored peppers and julienne onions."
          },
          {
            name: "Fried Chicken Tenders",
            price: 15,
            details: "Served with French fries and sweet chili sauce."
          },
          {
            name: "Breaded Chicken Rolls",
            price: 15,
            details: "Stuffed with mozzarella cheese. Served with French fries and tumeya."
          },
          {
            name: "Chicken Butter Lemon",
            price: 15,
            details: "Two chicken breast fillets served with Bedouin style Basmati rice."
          },
          {
            name: "Shish Tawook",
            price: 15,
            details: "Served with French fries and tumeya."
          }
        ]
      },
      {
        category: "Side Dishes",
        items: [
          { name: "Tajine Okra with Meat and Rice", price: 7 },
          { name: "Roz Maamar", price: 5 },
          { name: "Mombar", price: 5 },
          { name: "Rice with Mulukhiyah", price: 3 },
          { name: "Basmati Rice with Bedouin Touch", price: 3 },
          { name: "Mosaka with Fayoumi Bread", price: 3 },
          { name: "Roasted Vegetables", price: 2 },
          { name: "Sambousak", price: 2 },
          { name: "French Fries", price: 2 },
          { name: "Mashed Potatoes", price: 2 }
        ]
      },
      {
        category: "Salads & Dips",
        items: [
          { name: "Baba Ghanoug", price: 1 },
          { name: "Baladi Salad", price: 1 },
          { name: "Tumeya", price: 1 },
          { name: "Tehena", price: 1 },
          { name: "Harisa", price: 1 },
          { name: "Dakous", price: 1 },
          { name: "Parmesan Cheese", price: 1 }
        ]
      }
    ],
    "Dessert": [
      {
        category: "Dessert",
        items: [
          {
            name: "Batata Brûlée",
            price: 10,
            details: "Sweet potato brûlée with crunchy honeycomb."
          },
          {
            name: "Om Ali",
            price: 10,
            details: "Puff pastry baked in hot full cream milk with nuts, served fresh from the oven."
          },
          {
            name: "Apples & Dates Fokharah Cake",
            price: 10,
            details: "New"
          },
          {
            name: "Fruit Platter",
            price: 10
          },
          {
            name: "Waffles",
            price: 10
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-[#F4EFE3] border-2 border-black p-6 md:p-10 shadow-brutalist max-w-7xl mx-auto my-12 text-black">
      {/* Editorial Header */}
      <div className="border-b-2 border-black pb-8 mb-8 space-y-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="font-mono text-[10px] tracking-widest text-desert-blue uppercase block font-bold">
              CULINARY SANCTUARY
            </span>
            <h3 className="font-serif text-3xl md:text-5xl uppercase tracking-tighter text-desert-dark flex items-center gap-2">
              <PalmTree className="text-desert-green shrink-0 animate-float-slow" size={32} color="#2E5A44" />
              <span>Welcome to Lummayya</span>
            </h3>
            <p className="font-sans text-sm text-[#444] max-w-2xl leading-relaxed">
              Lummayya means <strong className="text-black">“the water”</strong> in the local Bedouin dialect, and just like water, our place is here to refresh you. We designed it to bring out the beauty of the desert, blending tradition with comfort and a touch of elegance.
            </p>
          </div>
          
          <div className="bg-desert-blue text-[#F4EFE3] p-5 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-md">
            <h4 className="font-serif text-sm uppercase tracking-tight font-bold mb-1.5">At Lummayya, Your Wellbeing Comes First</h4>
            <p className="font-sans text-xs leading-relaxed opacity-95">
              We carefully select only the finest ingredients from trusted local suppliers across Egypt. All our meats are 100% premium, fresh, and thoroughly checked for quality.
            </p>
          </div>
        </div>

        {/* Brand narrative, philosophy and specs grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 border-t border-black/10">
          <div className="md:col-span-8 space-y-4 text-xs text-neutral-800 leading-relaxed font-sans">
            <p>
              We maintain the highest hygiene standards at every step, so you can enjoy your meal with complete peace of mind, knowing that quality, cleanliness, and your health are always our top priority.
            </p>
            <p>
              You can join us any time of the day for a laid-back lunch or a cozy dinner or even book a whole day of use and enjoy the surroundings with our activities. Our menu is a mix of Bedouin classics, reimagined with style, along with international favorites you’ll love.
            </p>
            <p>
              The restaurant itself is something special, designed like the desert dunes. Inside, we have <strong>85 elegant seats</strong>, with wooden and bamboo details. Outside, you can choose between lounges, dining tables, or a traditional Bedouin setup with cushions and rugs, or simply relax by the campfire with Bedouin tea or marshmallows. Outdoors, we can welcome up to <strong>100 guests</strong>.
            </p>
            <p>
              To keep you comfy all year round, we’ve got fans and ventilators for the summer, and heaters for the cooler nights.
            </p>
            
            <div className="bg-white border-2 border-black p-4 flex items-start space-x-3.5 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-xl mt-0.5">☕</span>
              <div>
                <strong className="font-serif text-xs uppercase block text-desert-dark">The Dry Bar</strong>
                <p className="text-[11px] text-neutral-600 mt-1 leading-relaxed">
                  And don’t forget our dry bar, serving everything from coffee, tea, sodas, and fresh juices, right here in the heart of the desert.
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 bg-[#faf9f6] border-2 border-black p-5 space-y-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] self-start">
            <span className="font-mono text-[9px] uppercase tracking-widest text-[#777] font-bold block">Premises & Dimensions</span>
            <div className="space-y-4 font-mono text-xs">
              <div className="border-b border-black/5 pb-3">
                <span className="text-[#666] block text-[9px] uppercase font-bold mb-0.5">Indoors</span>
                <strong className="text-black text-sm">160 m²</strong>
                <span className="text-[10px] text-neutral-500 block mt-0.5">85 Elegant wooden & bamboo seats</span>
              </div>
              <div className="border-b border-black/5 pb-3">
                <span className="text-[#666] block text-[9px] uppercase font-bold mb-0.5">Outdoors</span>
                <strong className="text-black text-sm">400 m²</strong>
                <span className="text-[10px] text-neutral-500 block mt-0.5">200 m² desert view + 200 m² lake view (up to 100 guests)</span>
              </div>
              <div>
                <span className="text-[#666] block text-[9px] uppercase font-bold mb-0.5">Full Premises</span>
                <strong className="text-black text-sm">2,000 m²</strong>
                <span className="text-[10px] text-neutral-500 block mt-0.5">Traditional Bedouin setups, campfires & view terraces</span>
              </div>
            </div>
            <div className="text-[9px] text-[#777] leading-normal pt-2 border-t border-black/5 font-mono">
              * Menu prices are subject to a 12% Restaurant Service Charge. Day-use packages are exempt.
            </div>
          </div>
        </div>
      </div>

      {/* Tabs navigation menu */}
      <div className="flex flex-wrap gap-2 border-b border-black/15 pb-4 mb-8">
        {Object.keys(menuData).map((tab) => {
          const isActive = tab === activeTab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 font-mono text-xs uppercase tracking-wide border-2 transition-all cursor-pointer ${
                isActive
                  ? "bg-black text-[#F4EFE3] border-black shadow-brutalist"
                  : "border-black/10 hover:border-black/30 text-black/70 bg-[#F4EFE3]"
              }`}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Interactive Menu Items Display */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {menuData[activeTab].map((section, sIdx) => (
          <div key={sIdx} className="space-y-6">
            <div className="border-b-2 border-black pb-2">
              <h4 className="font-serif text-lg font-bold tracking-tight uppercase flex items-center space-x-2">
                <span className="w-2 h-2 bg-desert-blue rounded-full" />
                <span>{section.category}</span>
              </h4>
            </div>

            {section.infoNote && (
              <div className="bg-amber-50/80 border-l-4 border-amber-500 p-3 text-[11px] text-amber-900 font-sans leading-relaxed">
                <strong className="uppercase tracking-wider text-[9px] block mb-1 text-amber-800">Note:</strong>
                {section.infoNote}
              </div>
            )}

            <div className="space-y-4">
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className="group border-b border-black/5 pb-4 last:border-b-0 hover:bg-desert-blue-light/20 p-2 transition-colors">
                  <div className="flex justify-between items-baseline gap-4">
                    <span className="font-serif text-md font-medium text-black group-hover:text-desert-blue transition-colors">
                      {item.name}
                    </span>
                    <span className="font-mono text-xs font-semibold whitespace-nowrap bg-black/5 px-2 py-0.5">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                  {item.details && (
                    <p className="font-sans text-[11px] text-desert-charcoal/70 mt-1.5 leading-relaxed">
                      {item.details}
                    </p>
                  )}
                  {item.notes && (
                    <div className="flex items-center space-x-1 mt-1.5 font-mono text-[9px] text-[#888] uppercase">
                      <Clock className="w-3.5 h-3.5 text-desert-blue" />
                      <span>{item.notes}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-desert-blue-light border border-desert-blue/40 p-4 mt-8 flex flex-col space-y-2 text-xs">
        <div className="flex items-start space-x-2">
          <Flame className="w-4 h-4 text-desert-blue mt-0.5 flex-shrink-0" />
          <p className="font-sans text-[11px] text-[#444] leading-relaxed">
            <strong className="text-black uppercase">PRE-ORDER MANDATES:</strong> To guarantee absolute peak quality of slow-fire items (including Mandi Poultry and Lamb ribs), clients are requested to send preferred choices <strong className="text-black">at least 1 day prior</strong> to arrival.
          </p>
        </div>
        <div className="border-t border-desert-blue/20 pt-2 text-[11px] font-sans text-neutral-500 italic">
          Note: All prices are exclusive of taxes and service charges.
        </div>
      </div>
    </div>
  );
}
