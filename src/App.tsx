/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { 
  ShieldCheck, 
  Zap, 
  Target, 
  Cpu, 
  Navigation, 
  ArrowRight, 
  Menu, 
  X,
  ChevronDown,
  Instagram,
  Linkedin,
  Twitter,
  Globe,
  Database,
  Search,
  HardHat,
  Monitor,
  CheckCircle2,
  Quote,
  ExternalLink,
  Calendar
} from "lucide-react";
import { useState, useEffect } from "react";

// Generated Assets
const HERO_IMAGE = "/images/hero_drone_cinematic_1779180981734.png";
const TACTICAL_DRONE = "/images/tactical_drone_black_gold_1779181476882.png";
const CARGO_DRONE = "/images/heavy_cargo_drone_cinematic_1779181500883.png";
const DETAIL_IMAGE = "/images/drone_propeller_detail_1779180998040.png";
const FLIGHT_IMAGE = "/images/drone_flight_mountain_1779181873314.png";
const BLUEPRINT_IMAGE = "/images/drone_technical_blueprint_1779181891602.png";
const FACTORY_IMAGE = "/images/drone_factory_lab_1779181908041.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "#products" },
    { name: "Design", href: "#design" },
    { name: "Technology", href: "#technology" },
    { name: "Company", href: "#company" }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
        isScrolled ? "bg-black-rich/90 backdrop-blur-md py-4 border-b border-white/[0.03]" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 border-2 border-gold rounded-full flex items-center justify-center p-1 group cursor-pointer hover:rotate-180 transition-transform duration-1000">
            <div className="w-full h-full bg-gold rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-black rounded-full" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xl md:text-2xl font-display font-bold uppercase tracking-[0.3em] leading-none mb-1">
              AERO SPACE
            </span>
            <span className="text-[8px] md:text-[10px] font-mono font-medium uppercase tracking-[0.6em] text-gold/80 leading-none">
              BY RATNANJALI
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-12 text-[10px] font-bold uppercase tracking-[0.3em]">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-gold transition-colors duration-300">
              {link.name}
            </a>
          ))}
          <button className="px-8 py-3 bg-white text-black hover:bg-gold transition-all duration-500 rounded-sm">
            Contact
          </button>
        </div>

        <button className="lg:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-full left-0 w-full bg-black-rich p-12 border-b border-white/5 lg:hidden"
          >
            <div className="flex flex-col gap-8 text-center text-xl font-display uppercase tracking-widest">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)}>{link.name}</a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeader = ({ subtitle, title, centered = false }: { subtitle: string; title: string, centered?: boolean }) => (
  <div className={`mb-24 ${centered ? 'text-center' : ''}`}>
    <span className="text-[10px] font-mono uppercase tracking-[0.6em] text-gold/60 block mb-6 px-1">
      // {subtitle}
    </span>
    <h2 className="text-5xl md:text-7xl font-display font-light uppercase tracking-tight leading-[1.1]">
      {title}
    </h2>
  </div>
);

const Hero = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
    {/* Dynamic Background Elements */}
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.1),transparent_70%)]" />
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
    </div>

    <div className="absolute inset-0 z-0 animate-slow-zoom">
      <img src={HERO_IMAGE} alt="Hero" className="w-full h-full object-cover brightness-[0.25] scale-[1.05]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black-rich via-black-rich/20 to-black-rich" />
    </div>
    
    <div className="relative z-10 text-center px-6 max-w-7xl">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          initial={{ letterSpacing: "1em", opacity: 0, y: 20 }}
          animate={{ letterSpacing: "0.8em", opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[10px] md:text-xs uppercase text-gold/60 mb-12 block font-mono"
        >
          // INITIALIZING FLIGHT PROTOCOLS v4.0
        </motion.div>

        <h1 className="text-6xl md:text-[11rem] font-display font-bold uppercase tracking-tighter leading-[0.75] mb-16 perspective-1000">
          <motion.span
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="block"
          >
            AERIAL
          </motion.span>
          <motion.span
            initial={{ rotateX: 90, opacity: 0 }}
            animate={{ rotateX: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="gold-text-gradient italic font-extralight block"
          >
            MASTERY
          </motion.span>
        </h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24"
        >
          <div className="relative">
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-px h-12 bg-gold/50" />
            <p className="text-white/40 text-xs md:text-sm max-w-xs text-left leading-relaxed uppercase tracking-[0.2em] font-light">
              Designing the future of autonomous <br />aerospace systems with unparalleled precision.
            </p>
          </div>
          
          <button className="group relative px-16 py-7 bg-white text-black font-bold uppercase tracking-[0.4em] text-[10px] rounded-sm transition-all duration-500 overflow-hidden">
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">Explore Systems</span>
            <div className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </button>
        </motion.div>
      </motion.div>
    </div>

    <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
      <span className="text-[9px] font-mono uppercase tracking-[0.3em]">Scroll</span>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-5 h-5 text-gold" />
      </motion.div>
    </div>

    {/* Side Indicators */}
    <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-12 text-[10px] font-mono text-white/20 uppercase tracking-[0.4em] [writing-mode:vertical-lr]">
      <span>Coordinates: 47.3769° N, 8.5417° E</span>
      <span>System Status: Optimal</span>
    </div>
  </section>
);

const FlightShowcase = () => (
  <section className="py-32 px-8">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
      <div className="lg:col-span-12 mb-12">
        <SectionHeader subtitle="Performance" title="Mastering Every Environment" />
      </div>
      <div className="lg:col-span-8 rounded-sm overflow-hidden aspect-video border border-white/5">
        <img src={FLIGHT_IMAGE} alt="Drone in Flight" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
      </div>
      <div className="lg:col-span-4 space-y-12">
        <p className="text-2xl font-light leading-relaxed text-white/60">
          Our systems are tested in the most extreme conditions on Earth, from arctic altitudes to equatorial humidity.
        </p>
        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
          <div>
            <span className="text-4xl font-display font-bold text-gold block mb-2">90</span>
            <span className="text-[10px] uppercase tracking-widest text-white/30">Min Endurance</span>
          </div>
          <div>
            <span className="text-4xl font-display font-bold text-gold block mb-2">30KM</span>
            <span className="text-[10px] uppercase tracking-widest text-white/30">Stable Range</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Products = () => {
  const robots = [
    { name: "Titan X-1", series: "Stealth Recon", image: TACTICAL_DRONE, val: "01" },
    { name: "Nexus Heavy", series: "Industrial Cargo", image: CARGO_DRONE, val: "02" }
  ];

  return (
    <section id="products" className="py-32 px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <SectionHeader subtitle="The Arsenal" title="Mission Ready Hardware" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5">
          {robots.map((p, idx) => (
            <div key={idx} className="bg-black-rich p-12 hover:bg-white/[0.02] transition-all group cursor-pointer">
              <span className="text-[10px] font-mono text-gold mb-12 block">{p.val} // {p.series}</span>
              <div className="aspect-square mb-12 overflow-hidden bg-white/5">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700" />
              </div>
              <div className="flex justify-between items-end">
                <h3 className="text-4xl font-display font-bold uppercase">{p.name}</h3>
                <ArrowRight className="w-8 h-8 group-hover:translate-x-4 transition-transform text-gold" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DesignSection = () => (
  <section id="design" className="py-32 px-8 bg-black-rich relative overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <SectionHeader subtitle="Artistry" title="The Architecture of Flight" />
        <p className="text-lg text-white/50 leading-relaxed mb-12">
          We treat aerodynamics as a structural science and an aesthetic discipline. Every curve is optimized for reduced drag and silent operation.
        </p>
        <div className="space-y-6">
          {["Computational Fluid Dynamics", "Generative Lattice Structures", "Bio-mimetic Rotors"].map(t => (
            <div key={t} className="flex items-center gap-4 text-xs uppercase tracking-[0.2em] font-bold text-white/40 border-b border-white/5 pb-4">
              <div className="w-2 h-2 bg-gold" />
              {t}
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-gold/10 blur-[120px] rounded-full" />
        <img src={BLUEPRINT_IMAGE} alt="Blueprint" className="relative z-10 w-full rounded-sm border border-white/10" />
      </div>
    </div>
  </section>
);

const Technology = () => (
  <section id="technology" className="py-32 px-8">
    <div className="max-w-7xl mx-auto">
      <SectionHeader subtitle="Innovation" title="The Core Intellect" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[
          { title: "Neural Edge", desc: "Autonomous pathfinding in dense urban terrain without GPS fallback." },
          { title: "Solid State", desc: "Custom energy density modules providing 40% more flight time per kg." },
          { title: "Ghost Link", desc: "Military-grade 512-bit encryption for seamless mission data sovereignty." }
        ].map((t, i) => (
          <div key={i} className="p-12 border border-white/5 hover:border-gold/30 transition-all rounded-sm">
            <h4 className="text-xl font-display font-bold uppercase mb-6">{t.title}</h4>
            <p className="text-white/40 text-sm leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-24 rounded-sm overflow-hidden h-[500px] border border-white/5">
        <img src={FACTORY_IMAGE} alt="Factory" className="w-full h-full object-cover brightness-50" />
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-32 px-8 border-t border-white/5 bg-black-rich">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-24">
      <div className="max-w-sm">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-8 border border-gold rounded-full flex items-center justify-center p-[2px]">
            <div className="w-full h-full bg-gold rounded-full" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-display font-bold tracking-[0.2em] leading-none mb-1">AERO SPACE</span>
            <span className="text-[8px] font-mono text-gold/60 tracking-[0.4em] leading-none uppercase">BY RATNANJALI</span>
          </div>
        </div>
        <p className="text-white/30 text-xs uppercase tracking-widest leading-loose">
          Global leaders in autonomous drone technology and bespoke aerospace manufacturing. Zurich, Switzerland.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-16 text-[10px] font-bold uppercase tracking-[0.3em]">
        <div className="flex flex-col gap-6">
          <span className="text-gold">Sectors</span>
          <a href="#" className="text-white/40 hover:text-white">Defense</a>
          <a href="#" className="text-white/40 hover:text-white">Industrial</a>
          <a href="#" className="text-white/40 hover:text-white">Survey</a>
        </div>
        <div className="flex flex-col gap-6">
          <span className="text-gold">Company</span>
          <a href="#" className="text-white/40 hover:text-white">Ethics</a>
          <a href="#" className="text-white/40 hover:text-white">Intel</a>
          <a href="#" className="text-white/40 hover:text-white">Careers</a>
        </div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/5 flex justify-between text-[10px] uppercase font-mono tracking-widest text-white/10">
      <span>© 2026 Aero Space by Ratnanjali</span>
      <span>Zurich • London • Singapore</span>
    </div>
  </footer>
);

const WhyChooseUs = () => (
  <section id="company" className="py-32 px-8 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <SectionHeader subtitle="The Ratnanjali Edge" title="Why Operators Trust Us" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {[
          { 
            title: "Swiss Engineering", 
            desc: "Designed and prototyped in Zurich, our hardware adheres to the highest standards of aerospace precision and manufacturing rigor." 
          },
          { 
            title: "Digital Sovereignty", 
            desc: "We prioritize your data. AeroGold systems operate on closed-loop architectures, ensuring mission-critical intelligence remains yours." 
          },
          { 
            title: "Artisanal Precision", 
            desc: "Every airframe is hand-finished. We don't just assemble; we craft high-performance tools that are as durable as they are beautiful." 
          }
        ].map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group"
          >
            <div className="text-gold font-mono text-sm mb-6 flex items-center gap-3">
              <span className="w-10 h-px bg-gold/30" />
              0{i + 1}
            </div>
            <h3 className="text-2xl font-display font-bold uppercase mb-6 group-hover:text-gold transition-colors">{item.title}</h3>
            <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-32 px-8">
    <div className="max-w-7xl mx-auto rounded-sm overflow-hidden relative group">
      <div className="absolute inset-0 gold-gradient opacity-90 transition-all duration-700 group-hover:opacity-100" />
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative z-10 p-16 md:p-32 flex flex-col md:flex-row items-center justify-between gap-12 text-black">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-none mb-8">
            Ready for <br />the next horizon?
          </h2>
          <p className="text-black/60 font-medium text-lg leading-relaxed uppercase tracking-wider">
            Partner with us to redefine your aerial operational capacity. Our team is ready to brief you on custom configurations from Aero Space.
          </p>
        </div>
        
        <button className="px-16 py-8 bg-black text-white font-bold uppercase tracking-[0.3em] text-xs hover:scale-105 active:scale-95 transition-all shadow-2xl">
          Initialize Briefing
        </button>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="bg-black-rich min-h-screen text-white/90">
      <Navbar />
      <main>
        <Hero />
        <FlightShowcase />
        <Products />
        <DesignSection />
        <Technology />
        <WhyChooseUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}



