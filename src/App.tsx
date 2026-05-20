import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { UtensilsCrossed, CheckCircle2, Search, GlassWater, ChefHat, PartyPopper, Plus, Star, ChevronLeft, ChevronRight, Quote, Heart, Package, Building, ShieldCheck, Award, ThumbsUp } from "lucide-react";

// Social Icons SVGs
const TiktokIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const WhatsappIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.487-1.761-1.66-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
  </svg>
);

const CrossDeco = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"/>
  </svg>
);

const SquiggleDeco = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 12" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 6 Q 6 2 10 6 T 18 6 T 26 6 T 34 6" />
  </svg>
);

// Nav links representing core functionality
const NAV_LINKS = [
  { name: "Services", href: "#services" },
  { name: "Menu", href: "#menu" },
  { name: "Testimonials", href: "#testimonials" },
];

const CARDS = [
  {
    img: "/jollof-rice.jpg",
    rotate: -16,
    x: -260,
    y: 55,
    z: 10,
    scale: 0.9,
  },
  {
    img: "/small-chops.jpg",
    rotate: -8,
    x: -130,
    y: 20,
    z: 20,
    scale: 0.95,
  },
  {
    img: "/pounded-yam-egusi.jpg",
    rotate: 0,
    x: 0,
    y: 0,
    z: 30,
    scale: 1.05,
  },
  {
    img: "/grilled-salmon.jpg",
    rotate: 8,
    x: 130,
    y: 20,
    z: 20,
    scale: 0.95,
  },
  {
    img: "/feast-tray.jpg",
    rotate: 16,
    x: 260,
    y: 55,
    z: 10,
    scale: 0.9,
  },
];

const CATEGORIES = ["All Menu", "Naija Food", "Continental", "Small Chops", "Drinks", "Food Trays"];

const MENU_ITEMS = [
  { id: 1, category: "Naija Food", title: "Party Jollof Rice", desc: "Smoky, rich party Jollof served with grilled chicken, plantain, and coleslaw. Premium enjoyment.", img: "/jollof-rice.jpg" },
  { id: 2, category: "Small Chops", title: "Premium Chops Box", desc: "Spring rolls, samosas, puff-puff, peppered meats, and our signature dipping sauce. No dulling.", img: "/small-chops.jpg" },
  { id: 3, category: "Continental", title: "Creamy Chicken Pasta", desc: "Penne pasta tossed in a rich garlic cream sauce with tender grilled chicken breast.", img: "/chicken-pasta.jpg" },
  { id: 4, category: "Naija Food", title: "Assorted Pepper Soup", desc: "Spicy, aromatic, and comforting traditional pepper soup loaded with assorted meats. E dey hit well.", img: "/pepper-soup.jpg" },
  { id: 5, category: "Food Trays", title: "Owanbe Feast Tray", desc: "A deluxe tray of local and continental bites for your special guests. Full belly guaranteed.", img: "/feast-tray.jpg" },
  { id: 6, category: "Drinks", title: "Chilled Zobo Drink", desc: "Refreshing traditional hibiscus tea beautifully infused with pineapple, ginger, and cloves. Cold set.", img: "/zobo-drink.jpg" },
  { id: 7, category: "Continental", title: "Grilled Salmon Veggies", desc: "Perfectly pan-seared salmon fillet served alongside seasonal grilled vegetables. For the fit fam.", img: "/grilled-salmon.jpg" },
  { id: 8, category: "Naija Food", title: "Pounded Yam & Egusi", desc: "Authentic Egusi soup rich in melon seeds and spinach, served with smooth pounded yam. As e dey hot.", img: "/pounded-yam-egusi.jpg" },
];

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.056 0 12 0 12s0 3.944.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.944 24 12 24 12s0-3.944-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="url(#instagram-grad)">
    <defs>
      <linearGradient id="instagram-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fdf497" />
        <stop offset="5%" stopColor="#fdf497" />
        <stop offset="45%" stopColor="#fd5949" />
        <stop offset="60%" stopColor="#d6249f" />
        <stop offset="90%" stopColor="#285AEB" />
      </linearGradient>
    </defs>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.344 3.608 1.319.975.975 1.257 2.242 1.319 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.069 4.85c-.062 1.366-.344 2.633-1.319 3.608-.975.975-2.242 1.257-3.608 1.319-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.069c-1.366-.062-2.633-.344-3.608-1.319-.975-.975-1.257-2.242-1.319-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.069-4.85c.062-1.366.344-2.633 1.319-3.608.975-.975 2.242-1.257 3.608-1.319 1.266-.058 1.646-.069 4.85-.069M12 0C8.741 0 8.333.014 7.053.072 2.695.272.272 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.36-.2 6.78-2.622 6.98-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.2-4.358-2.62-6.78-6.98-6.98-1.28-.058-1.689-.072-4.948-.072zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
  </svg>
);

const TESTIMONIALS = [
  {
    id: 1,
    name: "Chidinma & Emeka",
    handle: "@chidi_events",
    borderClass: "border-blue-500/30",
    shadowClass: "shadow-[0_0_25px_rgba(59,130,246,0.06)]",
    img: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=150&q=80",
    text: "Omo, the food was absolutely phenomenal! Our guests are still talking about that Party Jollof. The presentation and taste were both spectacular. E make brain die!",
    icon: <FacebookIcon className="w-5 h-5 text-blue-500" />,
    span: "md:col-span-1 lg:col-span-4"
  },
  {
    id: 2,
    name: "Adebayo Bolanle",
    handle: "@bola_adebayo",
    borderClass: "border-pink-500/40",
    shadowClass: "shadow-[0_0_25px_rgba(236,72,153,0.06)]",
    img: "https://images.unsplash.com/photo-1531123897727-8f129e1bfcc5?w=150&q=80",
    text: "Ola Kitchen handled our corporate food supply flawlessly. Awon eyan mi gbadun awon small chops gan ni. Everything was delivered right on time. Pure enjoyment.",
    icon: <TiktokIcon className="w-5 h-5 text-black bg-white rounded-full p-[2px]" />,
    span: "md:col-span-1 lg:col-span-4"
  },
  {
    id: 3,
    name: "Onyeka Ubanwa",
    handle: "@onyeka_events",
    borderClass: "border-red-500/30",
    shadowClass: "shadow-[0_0_25px_rgba(239,68,68,0.06)]",
    img: "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?w=150&q=80",
    text: "Having the event cooking service for my 40th was the best decision. Nri a di uto rinne! The mix of continental and local food pleased everyone. Highly recommended.",
    icon: <YoutubeIcon className="w-5 h-5 text-red-500" />,
    span: "md:col-span-1 lg:col-span-4"
  },
  {
    id: 4,
    name: "Fatima Abubakar",
    handle: "@fatty_abu",
    borderClass: "border-sky-500/30",
    shadowClass: "shadow-[0_0_25px_rgba(14,165,233,0.06)]",
    img: "https://images.unsplash.com/photo-1563132337-f159f484226c?w=150&q=80",
    text: "Abinci yayi dadi sosai! We love Ola Kitchen! Our event planners use them for all their projects, so our clients already know the standard they bring.",
    icon: <TwitterIcon className="w-5 h-5 text-sky-500" />,
    span: "md:col-span-1 lg:col-span-4"
  },
  {
    id: 5,
    name: "Tunde Bakare",
    handle: "@tunde_b",
    borderClass: "border-amber-500/40",
    shadowClass: "shadow-[0_0_25px_rgba(245,158,11,0.06)]",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    text: "If you want make your party scatter with better food, na Ola Kitchen. Using them for our projects makes everything so easy. No stress at all.",
    icon: <InstagramIcon className="w-5 h-5" />,
    span: "md:col-span-1 lg:col-span-4"
  },
  {
    id: 6,
    name: "Kemi Adesida",
    handle: "@kemi_bakes",
    borderClass: "border-purple-500/40",
    shadowClass: "shadow-[0_0_25px_rgba(168,85,247,0.06)]",
    img: "https://images.unsplash.com/photo-1543269664-7eef42226a21?w=150&q=80",
    text: "Their catering for my daughter's naming ceremony was top notch. The Ofada rice and sauce was a massive hit. The setup was also very beautiful and neat.",
    icon: <InstagramIcon className="w-5 h-5 text-purple-500" />,
    span: "md:col-span-1 lg:col-span-4"
  }
];

const ActionButton = ({ href, icon: Icon, label, primary }: { href: string; icon: any; label: string; primary?: boolean }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noreferrer" 
    className={`group flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 active:scale-95 ${
      primary 
      ? "bg-[#25D366] text-white hover:bg-[#22c55e] shadow-sm hover:shadow-[0_4px_12px_rgba(37,211,102,0.3)] hover:-translate-y-0.5" 
      : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:text-black hover:border-slate-300 shadow-sm"
    }`}
  >
    <Icon className={`w-4 h-4 sm:w-4 sm:h-4 transition-transform duration-300 ${primary ? "group-hover:scale-110" : ""}`} />
    <span className="hidden min-[400px]:inline">{label}</span>
  </a>
);

const CAROUSEL_ITEMS = [
  { id: 1, title: 'Small Chops', img: "/small-chops.jpg" },
  { id: 2, title: 'Party Jollof', img: "/jollof-rice.jpg" },
  { id: 3, title: 'Homemade Meals', img: "/chicken-pasta.jpg" },
  { id: 4, title: 'Zobo & Drinks', img: "/zobo-drink.jpg" },
  { id: 5, title: 'Food Trays', img: "/feast-tray.jpg" },
  { id: 6, title: 'Event Cooking', img: "/pepper-soup.jpg" },
  { id: 7, title: 'Corporate Supply', img: "/grilled-salmon.jpg" },
];

const PlateCarouselItem = ({ item, index }: { item: any; index: number }) => (
  <div className={`flex flex-col items-center gap-4 sm:gap-6 shrink-0 transition-transform duration-500 hover:-translate-y-2 ${index % 2 === 0 ? '-translate-y-4' : 'translate-y-4'}`}>
    <div className="w-32 h-32 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full border-[6px] sm:border-[10px] md:border-[12px] border-white shadow-[0_20px_40px_rgba(0,0,0,0.15)] overflow-hidden bg-white relative group">
      <div className="absolute inset-0 rounded-full shadow-[inset_0_-8px_16px_rgba(0,0,0,0.1)] pointer-events-none z-10" />
      <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-3 transition-transform duration-700 ease-out" />
    </div>
    <div className="text-center">
      <h3 className="font-display font-bold text-[10px] sm:text-sm md:text-base text-slate-800 mb-2 sm:mb-3 uppercase tracking-widest">{item.title}</h3>
      <a href={`https://wa.link/ghf22r?text=Hi! I would like to order: ${item.title}`} target="_blank" rel="noreferrer" className="inline-block bg-[#FAD120] hover:bg-yellow-400 text-slate-900 text-[9px] sm:text-xs font-bold px-4 sm:px-6 py-2 sm:py-2.5 rounded-full transition-all hover:scale-105 active:scale-95 uppercase tracking-wide shadow-md">
        Order Now
      </a>
    </div>
  </div>
);

export default function App() {
  const [activeFilter, setActiveFilter] = useState("All Menu");

  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const phrases = ["Every Plate.", "Every Bite.", "Every Occasion."];

  useEffect(() => {
    const currentPhrase = phrases[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % phrases.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText((prev) => 
          isDeleting 
            ? prev.slice(0, -1) 
            : currentPhrase.slice(0, prev.length + 1)
        );
      }, isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  const filteredItems = activeFilter === "All Menu" 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#FDFDFD] text-slate-900 font-sans overflow-x-hidden">
      {/* Navbar - Animates in smoothly and sticks to top */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 30 }}
        className="fixed top-0 left-0 right-0 z-[100] bg-white/85 backdrop-blur-md border-b border-slate-200/50 shadow-sm"
      >
        <div className="flex items-center justify-between px-4 sm:px-8 py-3 max-w-[1400px] mx-auto w-full">
          <div className="flex items-center gap-2 text-3xl sm:text-4xl lg:text-5xl font-display font-medium">
            <span className="font-handwriting text-transparent bg-clip-text bg-gradient-to-r from-[#FF416C] via-[#FF4B2B] to-[#ec9f05] [text-shadow:0px_2px_10px_rgba(255,75,43,0.3)] cursor-default hover:scale-105 transition-transform duration-300 origin-left">Ola Kitchen</span>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-base font-medium text-slate-700">
          {NAV_LINKS.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-[#F37052] transition-colors duration-200">
              {link.name}
            </a>
          ))}
          <a href="https://wa.link/ghf22r" target="_blank" rel="noreferrer" className="text-slate-900 font-semibold hover:text-[#25D366] transition-colors duration-200">Book Us</a>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ActionButton href="https://www.tiktok.com/@reanachloe28?_r=1&_t=ZS-96TASXToJuB" icon={TiktokIcon} label="Follow Us" />
          <ActionButton href="https://wa.link/ghf22r" icon={WhatsappIcon} label="Order Now" primary />
        </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <main className="w-full px-4 sm:px-8 pt-32 sm:pt-40 pb-16 flex flex-col items-center text-center">
        
        {/* Headline Container */}
        <div className="relative z-40 w-full max-w-4xl mx-auto">
          {/* Top Left Floating Bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: -10 }}
            transition={{ delay: 0.7, type: "spring", stiffness: 400, damping: 15 }}
            className="absolute -left-4 sm:-left-12 -bottom-6 sm:bottom-0 z-50 bg-[#FAD120] text-slate-900 text-xs sm:text-sm font-bold px-4 py-2 rounded-2xl rounded-bl-sm origin-bottom-left shadow-lg transform -rotate-12 whitespace-nowrap"
          >
            ★ Fresh • Beta • Affordable
          </motion.div>

          {/* Top Right Floating Bubble */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: 20 }}
            animate={{ opacity: 1, scale: 1, rotate: 12 }}
            transition={{ delay: 0.8, type: "spring", stiffness: 400, damping: 15 }}
            className="absolute -right-2 sm:-right-4 -top-8 sm:-top-8 z-50 bg-[#F37052] text-white text-[10px] sm:text-xs font-semibold px-3 py-1.5 rounded-2xl rounded-br-sm origin-bottom-right shadow-lg transform rotate-12 whitespace-nowrap"
          >
            Better Food, Better Mood
          </motion.div>

          <motion.h1 
            initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.1, type: "spring", stiffness: 300, damping: 25 }}
            className="text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[8rem] xl:text-[9rem] leading-[1] font-semibold font-display tracking-tighter text-slate-900 drop-shadow-sm"
          >
            Serving Sweetness in<br /><span className="font-handwriting text-[#F37052] font-normal tracking-normal line-clamp-none whitespace-nowrap">{displayText}<span className="animate-pulse">|</span></span>
          </motion.h1>
        </div>

        {/* 3D Responsive Image Fan Wrapper */}
        <div 
          className="relative w-full mt-4 sm:mt-16 md:mt-24 mb-4 sm:mb-10 overflow-visible flex justify-center perspective-[1500px] h-[140px] xs:h-[160px] sm:h-[220px] md:h-[300px]"
        >
          {/* Universal scale wrap for responsiveness (replaces separate mobile/desktop designs) */}
          <div className="absolute bottom-0 flex justify-center items-end origin-bottom scale-[0.45] xs:scale-[0.55] sm:scale-75 md:scale-90 lg:scale-100">
            {CARDS.map((card, i) => (
              <motion.div
                key={i}
                // Strong 3D Initial state
                initial={{ 
                  opacity: 0, 
                  y: 200, 
                  x: 0, 
                  rotateZ: 0, 
                  rotateY: 80, // High rotation for full deck-deal feel
                  rotateX: -30, 
                  scale: 0.4 
                }}
                animate={{ 
                  opacity: 1, 
                  y: card.y, 
                  x: card.x, 
                  rotateZ: card.rotate,
                  rotateY: 0,
                  rotateX: 0,
                  scale: card.scale || 1
                }}
                // Snappy 3D hover interaction
                whileHover={{
                  y: card.y - 30,
                  scale: (card.scale || 1) * 1.08,
                  rotateZ: card.rotate * 0.3, // Softens the rotation to "pop up"
                  rotateY: 0,
                  rotateX: 5,
                  zIndex: 40,
                  transition: { type: "spring", stiffness: 400, damping: 20, mass: 0.8 }
                }}
                whileTap={{
                  y: card.y - 30,
                  scale: (card.scale || 1) * 1.08,
                  rotateZ: card.rotate * 0.3, 
                  rotateY: 0,
                  rotateX: 5,
                  zIndex: 40,
                  transition: { type: "spring", stiffness: 400, damping: 20, mass: 0.8 }
                }}
                transition={{ 
                  delay: 0.2 + i * 0.08, 
                  type: "spring", 
                  damping: 20,      // Lower damping = sharper bounce
                  stiffness: 300,   // Higher stiffness = faster speed
                  mass: 0.8         // Lower mass = snappier stop
                }}
                className="absolute bottom-0 border-[6px] border-white rounded-[2rem] bg-white cursor-pointer will-change-transform drop-shadow-[0_20px_25px_rgba(0,0,0,0.15)] hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
                style={{ 
                  zIndex: card.z, 
                  width: "240px", 
                  height: "280px",
                  transformOrigin: "bottom center"
                }}
              >
                <img 
                  src={card.img} 
                  className="w-full h-full object-cover rounded-[1.5rem] pointer-events-none" 
                  alt="Delicious catering food"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subtext below fan */}
        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, type: "spring", stiffness: 300, damping: 24 }}
          className="mt-6 sm:mt-12 text-slate-500 font-medium max-w-xl text-sm md:text-[1.05rem] leading-relaxed mx-auto px-4"
        >
          Made With Love, Served With Passion. As your trusted Nigerian online food vendor, we provide both exquisite continental dishes and authentic local food for all your events. Taste wey you no go forget.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, type: "spring", stiffness: 300, damping: 24 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a href="https://wa.link/ghf22r" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold transition-transform duration-200 hover:scale-105 active:scale-95 text-sm sm:text-base shadow-lg shadow-green-600/20 w-full sm:w-auto justify-center">
            <WhatsappIcon className="w-5 h-5" />
            Chat on WhatsApp
          </a>
          <a href="#menu" className="text-slate-600 font-semibold hover:text-[#F37052] transition-colors text-sm sm:text-base px-2">
            Explore Menu
          </a>
        </motion.div>

      </main>

      {/* Services Section (Styled Plates Carousel) */}
      <section id="services" className="w-full relative bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1600&q=80')] bg-cover bg-center pt-24 sm:pt-32 pb-48 flex flex-col items-center border-y-8 border-[#FAD120] overflow-hidden">
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/90 overlay-blend-mode"></div>

        <div className="text-center mb-16 sm:mb-24 z-10 relative">
          <h2 className="text-[#FAD120] font-handwriting text-5xl sm:text-6xl md:text-7xl font-bold -rotate-2 drop-shadow-md">Our Services?</h2>
        </div>

        <div className="w-full z-10 relative flex overflow-hidden group pb-16">
          {[0, 1].map((iteration) => (
            <div 
              key={iteration}
              className="flex shrink-0 min-w-full items-center justify-around gap-8 sm:gap-16 px-4 sm:px-8 animate-marquee group-hover:[animation-play-state:paused]"
              aria-hidden={iteration === 1}
            >
              {[
                { title1: "VOSS", title2: "KITCHEN", logo: "ChefHat", color: "text-slate-800", offset: -2 },
                { title1: "BRISKET", title2: "BAR B Q", logo: "Flame", color: "text-red-700", offset: 2 },
                { title1: "ABUELOS", title2: "NIGERIA", logo: "Star", color: "text-orange-600", offset: -4 },
                { title1: "TASTE OF", title2: "NAIJA", logo: "UtensilsCrossed", color: "text-green-700", offset: 1 },
                { title1: "MERIDIAN", title2: "CATERING", logo: "Coffee", color: "text-red-800", offset: -1 },
              ].map((plate, i) => (
                <div 
                  key={i} 
                  className="shrink-0 flex flex-col items-center gap-6 transition-transform duration-500 hover:-translate-y-4"
                  style={{ transform: `translateY(${plate.offset * 8}px)` }}
                >
                  {/* Enhanced 3D CSS Plate */}
                  <div className="w-36 h-36 xs:w-44 xs:h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 rounded-full bg-[#f8f8fa] shadow-[0_30px_50px_rgba(0,0,0,0.6),_inset_0_4px_10px_rgba(255,255,255,1),_inset_0_-15px_30px_rgba(0,0,0,0.15)] relative flex items-center justify-center p-3 sm:p-5 border-b-[6px] border-[#e2e2e8]">
                    <div className="absolute inset-0 rounded-full border-[1.5px] border-white/60 pointer-events-none m-1"></div>
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#ffffff] via-[#f7f7fa] to-[#e8e8ed] shadow-[inset_0_8px_16px_rgba(0,0,0,0.08),_0_2px_4px_rgba(255,255,255,1)] flex flex-col items-center justify-center border border-black/5 p-4 text-center group transition-colors hover:from-white hover:to-[#f0f0f5] relative overflow-hidden">
                      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.03)_100%)] pointer-events-none"></div>
                      <div className={`mb-1 sm:mb-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] transition-transform duration-500 group-hover:scale-110 relative z-10 ${plate.color}`}>
                         {plate.logo === "ChefHat" && <ChefHat className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 mx-auto" />}
                         {plate.logo === "Flame" && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 mx-auto"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>}
                         {plate.logo === "Star" && <Star className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 mx-auto fill-current" />}
                         {plate.logo === "UtensilsCrossed" && <UtensilsCrossed className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 mx-auto" />}
                         {plate.logo === "Coffee" && <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 mx-auto"><path d="M17 8h1a4 4 0 1 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/></svg>}
                      </div>
                      <div className={`font-display font-black text-[10px] xs:text-sm sm:text-base tracking-[0.1em] uppercase leading-tight relative z-10 ${plate.color}`}>{plate.title1}</div>
                      <div className="font-display font-bold text-[8px] xs:text-[10px] sm:text-xs tracking-widest uppercase text-slate-500 mt-0.5 xs:mt-1 relative z-10">{plate.title2}</div>
                    </div>
                  </div>
                  
                  {/* Label & Button */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="text-center font-bold font-display uppercase tracking-[0.1em] text-white text-xs sm:text-sm">
                      {plate.title1} {plate.title2}
                    </div>
                    <motion.a 
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="https://wa.link/ghf22r" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="bg-[#FAD120] rounded-sm text-black font-black text-[10px] sm:text-[11px] px-5 sm:px-6 py-2.5 pb-2 uppercase tracking-widest hover:bg-white transition-colors duration-300 shadow-[0_4px_10px_rgba(250,209,32,0.3)] hover:shadow-white/20 whitespace-nowrap"
                    >
                      Book Now
                    </motion.a>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Torn Paper Edge SVG */}
        <div className="absolute bottom-[-2px] left-0 w-full text-white pointer-events-none drop-shadow-[0_-5px_15px_rgba(0,0,0,0.3)]">
          <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="w-full h-[60px] sm:h-[100px]">
            <path fill="currentColor" d="M0,0 C150,100 300,20 450,100 C600,20 750,100 900,20 C1050,100 1200,20 1440,100 L1440,100 L0,100 Z" style={{filter: 'url(#roughpaper)'}}></path>
            <defs>
              <filter id="roughpaper">
                <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="3" result="noise" />
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="5" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </defs>
          </svg>
        </div>
      </section>

      {/* Auto Carousel Section */}
      <section className="w-full overflow-hidden bg-white py-16 sm:py-24 relative border-t border-slate-100">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-medium uppercase tracking-[0.2em] text-[#F37052]">Our Menu</h2>
        </div>

        <div className="flex w-full group overflow-hidden">
          <div className="flex shrink-0 min-w-full items-center justify-around gap-8 sm:gap-16 px-4 animate-marquee group-hover:[animation-play-state:paused]">
            {CAROUSEL_ITEMS.map((item, i) => (
              <PlateCarouselItem key={`first-${item.id}`} item={item} index={i} />
            ))}
          </div>
          <div className="flex shrink-0 min-w-full items-center justify-around gap-8 sm:gap-16 px-4 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
            {CAROUSEL_ITEMS.map((item, i) => (
              <PlateCarouselItem key={`second-${item.id}`} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Menu / Gallery Section */}
      <section id="menu" className="w-full px-4 sm:px-8 py-24 sm:py-32 bg-white relative z-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Header */}
          <div className="flex flex-col items-center text-center space-y-4 mb-16">
            <div className="text-sm font-bold tracking-widest text-[#F37052] uppercase">Our Offerings</div>
            <h2 className="text-4xl md:text-5xl font-display font-semibold tracking-tighter text-slate-900">
              Continental & <span className="text-[#FAD120] font-handwriting text-[1.4em] tracking-normal inline-block mt-2 font-bold">Naija Food</span>
            </h2>
            <p className="text-slate-500 max-w-2xl mt-4 sm:text-lg">
              Explore our curated selection of delicious meals, from smoky party Jollof rice to rich creamy pastas and premium small chops. Everything na correct.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`relative px-4 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-colors border ${
                  activeFilter === cat 
                  ? "text-white border-transparent" 
                  : "text-slate-600 bg-white border-slate-200 hover:bg-slate-50 hover:text-slate-900 drop-shadow-sm"
                }`}
              >
                {activeFilter === cat && (
                  <motion.div
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-[#F37052] rounded-full"
                    style={{ zIndex: -1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 cursor-pointer">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.3, type: "spring", bounce: 0.3 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.98, y: 0 }}
                  className="group bg-white rounded-3xl border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] overflow-hidden transition-all duration-300 flex flex-col will-change-transform"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="text-[11px] font-bold tracking-widest text-[#FAD120] uppercase mb-2">{item.category}</div>
                    <h3 className="text-[1.15rem] font-bold text-slate-900 mb-2 leading-tight">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed line-clamp-2 mb-6 flex-1">{item.desc}</p>
                    
                    <a href={`https://wa.link/ghf22r?text=Hi! I would like to order: ${item.title}`} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-[1.25rem] bg-slate-50 text-slate-900 font-semibold text-sm hover:bg-[#25D366] hover:text-white transition-all duration-300 border border-slate-100 hover:border-transparent group/btn focus:outline-none">
                      <span>Order on WhatsApp</span>
                      <Plus className="w-4 h-4 transition-transform group-hover/btn:rotate-90" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Brand Certifications & Trust */}
      <section className="w-full bg-[#fafafa] py-16 sm:py-24 border-t border-slate-100 flex flex-col items-center">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col items-center gap-10">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-display font-medium text-slate-800 uppercase tracking-[0.15em] mb-2">Our Standard</h3>
            <p className="text-slate-500 text-sm">Certified for exceptional food safety & quality.</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 md:gap-24 opacity-80 hover:opacity-100 transition-all duration-500">
             {/* Certificate 1 */}
             <div className="flex flex-col items-center gap-4 group cursor-default">
               <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center border border-[#FAD120]/30 group-hover:scale-110 transition-transform duration-300">
                 <ShieldCheck className="w-10 h-10 text-[#FAD120] drop-shadow-sm" />
               </div>
               <span className="font-bold text-xs tracking-widest uppercase text-slate-700 text-center max-w-[120px]">NAFDAC <br/> Approved</span>
             </div>
             {/* Certificate 2 */}
             <div className="flex flex-col items-center gap-4 group cursor-default">
               <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center border border-[#FAD120]/30 group-hover:scale-110 transition-transform duration-300">
                 <Award className="w-10 h-10 text-[#FAD120] drop-shadow-sm" />
               </div>
               <span className="font-bold text-xs tracking-widest uppercase text-slate-700 text-center max-w-[120px]">Premium Caterer 2024</span>
             </div>
             {/* Certificate 3 */}
             <div className="flex flex-col items-center gap-4 group cursor-default">
               <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center border border-[#FAD120]/30 group-hover:scale-110 transition-transform duration-300">
                 <ThumbsUp className="w-10 h-10 text-[#FAD120] drop-shadow-sm" />
               </div>
               <span className="font-bold text-xs tracking-widest uppercase text-slate-700 text-center max-w-[120px]">100% Quality Assurance</span>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (Bento Grid) */}
      <section id="testimonials" className="w-full px-4 sm:px-8 py-24 sm:py-32 bg-[#050505] text-white">
        <div className="max-w-[1200px] mx-auto flex flex-col items-center">
          
          {/* Section Header */}
          <div className="border border-white/10 rounded-full px-4 py-1.5 text-xs font-semibold tracking-widest uppercase mb-8 shadow-sm">
            Review's
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-center leading-tight mb-16 tracking-tight">
            Hear what our happy <br />
            clients <span className="inline-block border-[3px] border-[#FAD120] text-[#FAD120] px-4 py-1 rounded-2xl md:rounded-3xl rotate-2 relative ml-2 top-1 shadow-[0_0_15px_rgba(250,209,32,0.15)] bg-yellow-500/5">say.</span>
          </h2>

          {/* Grid Layout */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 w-full"
          >
            {TESTIMONIALS.map((review) => (
              <motion.div 
                key={review.id} 
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 25 }}
                whileHover={{ y: -5, scale: 1.02, rotateX: 2, rotateY: -2 }}
                whileTap={{ scale: 0.98, rotateX: 0, rotateY: 0 }}
                className={`bg-[#0a0a0a] rounded-3xl p-6 md:p-8 flex flex-col border ${review.borderClass} ${review.shadowClass} ${review.span} transition-shadow duration-300 hover:shadow-2xl`}
              >
                {/* User Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <img 
                      src={review.img} 
                      alt={review.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-white/5"
                    />
                    <div>
                      <div className="font-bold text-white text-[15px]">{review.name}</div>
                      <div className="text-sm font-medium" style={{ color: review.borderClass.includes('blue') ? '#3b82f6' : review.borderClass.includes('pink') ? '#ec4899' : review.borderClass.includes('red') ? '#ef4444' : review.borderClass.includes('sky') ? '#0ea5e9' : '#f59e0b' }}>
                        {review.handle}
                      </div>
                    </div>
                  </div>
                  <div className="shrink-0">{review.icon}</div>
                </div>

                {/* Review Text */}
                <p className="text-[#a1a1aa] leading-relaxed text-sm md:text-[15px]">
                  {review.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Banner at Bottom */}
          <div className="mt-16 sm:mt-24 w-full max-w-4xl mx-auto flex flex-col items-center">
            <div className="border border-white/5 bg-[#0a0a0a] rounded-[2rem] w-full py-6 sm:py-8 mb-8 shadow-[0_0_40px_rgba(255,255,255,0.02)] overflow-hidden flex group">
               <div className="flex shrink-0 min-w-full items-center justify-around gap-12 sm:gap-16 px-6 animate-marquee group-hover:[animation-play-state:paused]">
                 <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity shrink-0">
                   <div className="w-5 h-5 rounded-sm bg-purple-500 rotate-45"></div>
                   <span className="font-bold tracking-tight">Weddings</span>
                 </div>
                 <div className="w-px h-6 bg-white/10 shrink-0"></div>
                 <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity shrink-0">
                   <div className="w-2 h-6 md:h-8 rounded-full bg-emerald-500"></div>
                   <div className="w-2 h-4 md:h-6 rounded-full bg-emerald-400"></div>
                   <span className="font-bold tracking-tight">Events</span>
                 </div>
                 <div className="w-px h-6 bg-white/10 shrink-0"></div>
                 <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity shrink-0">
                   <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-[10px]">C</div>
                   <span className="font-bold tracking-tight">Corporate</span>
                 </div>
                 <div className="w-px h-6 bg-white/10 shrink-0"></div>
                 <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity shrink-0">
                   <div className="w-5 h-5 rounded-full border-2 border-purple-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                   </div>
                   <span className="font-bold tracking-tight">Parties</span>
                 </div>
                 <div className="w-px h-6 bg-white/10 shrink-0"></div>
               </div>
               
               <div className="flex shrink-0 min-w-full items-center justify-around gap-12 sm:gap-16 px-6 animate-marquee group-hover:[animation-play-state:paused]" aria-hidden="true">
                 <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity shrink-0">
                   <div className="w-5 h-5 rounded-sm bg-purple-500 rotate-45"></div>
                   <span className="font-bold tracking-tight">Weddings</span>
                 </div>
                 <div className="w-px h-6 bg-white/10 shrink-0"></div>
                 <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity shrink-0">
                   <div className="w-2 h-6 md:h-8 rounded-full bg-emerald-500"></div>
                   <div className="w-2 h-4 md:h-6 rounded-full bg-emerald-400"></div>
                   <span className="font-bold tracking-tight">Events</span>
                 </div>
                 <div className="w-px h-6 bg-white/10 shrink-0"></div>
                 <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity shrink-0">
                   <div className="w-5 h-5 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-[10px]">C</div>
                   <span className="font-bold tracking-tight">Corporate</span>
                 </div>
                 <div className="w-px h-6 bg-white/10 shrink-0"></div>
                 <div className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity shrink-0">
                   <div className="w-5 h-5 rounded-full border-2 border-purple-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                   </div>
                   <span className="font-bold tracking-tight">Parties</span>
                 </div>
                 <div className="w-px h-6 bg-white/10 shrink-0"></div>
               </div>
            </div>
            <div className="text-[#a1a1aa] font-medium text-sm">
              Over <span className="text-white font-bold text-[#FAD120]">1,000+</span> events successfully catered
            </div>
          </div>

        </div>
      </section>

      {/* Dark Modern Minimal Footer */}
      <div className="bg-[#050505]">
        <footer className="w-full bg-[#0a0510] text-[#f8f9fa] relative overflow-hidden rounded-t-[2.5rem] pt-16 sm:pt-24 pb-8 border-t border-white/5">
          
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#FAD120] blur-[150px] opacity-[0.08] pointer-events-none rounded-full"></div>
          <div className="absolute top-0 right-0 w-[40%] h-[50%] bg-[#F37052] blur-[180px] opacity-[0.06] pointer-events-none rounded-full"></div>

          <div className="max-w-[1200px] mx-auto px-6 sm:px-10 relative z-10 flex flex-col h-full">
             
             {/* Top Section */}
             <div className="flex flex-col md:flex-row items-start justify-between gap-12 sm:gap-16 mb-16 sm:mb-24">
               {/* Left Text */}
               <div className="max-w-xl">
                 <div className="text-[#9ca3af] font-medium text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
                   <span className="text-[#FAD120]">✦</span> Contact Us
                 </div>
                 <h3 className="text-3xl sm:text-4xl font-display font-medium leading-tight mb-16 tracking-tight">
                   Interested in making your event <span className="text-[#9ca3af]">talk of the town, trying our food menu or simply learning more?</span>
                 </h3>

                 <div className="flex flex-col">
                   <span className="text-xs text-[#9ca3af] mb-1">Ready to order?</span>
                   <a href="https://wa.link/ghf22r" target="_blank" rel="noreferrer" className="text-lg font-medium hover:text-[#25D366] transition-colors flex items-center gap-2 group">
                     Message us on WhatsApp
                     <span className="group-hover:translate-x-1 transition-transform">↗</span>
                   </a>
                 </div>
               </div>

               {/* Right Nav Links */}
               <div className="grid grid-cols-2 md:grid-cols-4 md:flex-nowrap gap-y-4 gap-x-8 sm:gap-10 pt-6 lg:pt-10 w-full md:w-auto">
                 <a href="#services" className="text-sm font-medium hover:text-white text-[#d1d5db] transition-colors">Services</a>
                 <a href="#menu" className="text-sm font-medium hover:text-white text-[#d1d5db] transition-colors">Our Menu</a>
                 <a href="#testimonials" className="text-sm font-medium hover:text-white text-[#d1d5db] transition-colors">Reviews</a>
                 <a href="https://wa.link/ghf22r" target="_blank" rel="noreferrer" className="text-sm font-medium hover:text-white text-[#d1d5db] transition-colors">Book Us</a>
               </div>
             </div>

             {/* Huge Brand Text Container */}
             <div className="w-full flex justify-center items-center mt-auto mb-12 sm:mb-20 overflow-hidden">
               <motion.h2 
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, ease: "easeOut" }}
                 viewport={{ once: true, margin: "-100px" }}
                 className="text-[14vw] sm:text-[12vw] leading-none font-bold font-handwriting text-white tracking-tight flex items-center select-none text-center justify-center pointer-events-none drop-shadow-xl"
               >
                 <span className="block mt-4 sm:mt-10 mr-4 sm:mr-8 opacity-90 transform -rotate-3">Ola Kitchen</span>
               </motion.h2>
             </div>

             {/* Bottom Bar */}
             <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 mt-auto border-t border-white/10 text-xs text-[#9ca3af]">
               <div>© 2024 Ola Kitchen. All rights reserved.</div>
               <div className="flex items-center gap-6">
                 <a href="https://www.tiktok.com/@reanachloe28?_r=1&_t=ZS-96TASXToJuB" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">TikTok</a>
                 <a href="https://wa.link/ghf22r" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WhatsApp</a>
                 <a href="#" className="hover:text-white transition-colors">Instagram</a>
               </div>
             </div>

          </div>
        </footer>
      </div>
    </div>
  );
}
