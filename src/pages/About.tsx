
import { motion } from "framer-motion";
import aboutHero from "@/assets/about/about-hero.jpg";
import founder1 from "@/assets/founders/founder-1.jpg";
import founder2 from "@/assets/founders/founder-2.jpg";
import toys from "@/assets/categories/toys.jpg";
import birthday from "@/assets/categories/birthday.jpg";
import jewellery from "@/assets/categories/jewellery.jpg";
import infant from "@/assets/categories/infant.jpg";
import customized from "@/assets/categories/customized.jpg";
import stationery from "@/assets/categories/stationery.jpg";
import { Sparkles, Award, ShieldCheck, Heart, Star, Gem, Eye, Zap, Wallet } from "lucide-react";



const categoryGroups = [
  {
    title: "Lifestyle & Décor",
    img: customized,
    items: ["Lighting Lamps", "Solar Hangings", "Customized Mugs & Pillows", "Acrylic Photo Frames", "Touch Lamps", "Natural Plants & Flower Décor"],
  },
  {
    title: "Toys & Kids",
    img: toys,
    items: ["Soft Toys", "Musical Toys", "Mind Games", "Remote Cars", "Indoor & Outdoor Games", "Electrical Toys"],
  },
  {
    title: "Birthday & Party",
    img: birthday,
    items: ["Balloons & Décor", "Return Gifts", "Combo Gift Packs", "Lighting Balloons", "Color Smokes", "Chocolates"],
  },
  {
    title: "Jewellery & Fashion",
    img: jewellery,
    items: ["One Gram Gold Jewellery", "Bangles", "Earrings", "Neck Sets", "Hair Accessories", "Fancy Items"],
  },
  {
    title: "Infant Essentials",
    img: infant,
    items: ["Baby Tubs & Cradles", "Walkers & Cycles", "Baby Clothing", "Beds & Carriers", "Cosmetics", "Statues & Idols"],
  },
  {
    title: "Plastic & Stationery",
    img: stationery,
    items: ["Water Bottles & Boxes", "Buckets & Tubs", "Mops & Floor Wipers", "Stationery", "Keychains", "Seasonal Items"],
  },
];

// Separated the hero feature from the rest to craft a dynamic layout hierarchy
const heroFeature = { 
  icon: Sparkles, 
  title: "30,000+ Wide Range", 
  description: "An extraordinary, massive collection of handpicked items tailored for every single occasion." 
};

const coreFeatures = [
  { icon: Award, title: "Premium Quality", description: "Sourced with care to ensure long-lasting value." },
  { icon: Wallet, title: "Best Price Guarantee", description: "Unmatched competitive pricing on all trends." },
  { icon: Star, title: "Latest Trending Items", description: "Constantly updated catalog matching global shifts." },
  { icon: ShieldCheck, title: "6-Month Jewellery Guarantee", description: "Shop with absolute peace of mind and confidence." },
  { icon: Heart, title: "Excellent Service", description: "A warm, deeply customer-first retail experience." },
  { icon: Gem, title: "Value for Money", description: "Premium tier products without the premium tier markup." },
  { icon: Eye, title: "Touch & Trial Experience", description: "Interact, explore, and feel before making a choice." },
  { icon: Zap, title: "Immediate Gratification", description: "No shipping delays—take your happiness home instantly." },
];

const founders = [
  { name: "Founder Name 1", role: "Co-Founder & Curator", img: founder1 },
  { name: "Founder Name 2", role: "Co-Founder & Operations", img: founder2 },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-4">Our Story</p>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-tight">
              Crafting Joy, <span className="text-gradient">One Gift</span> at a Time
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Best Choice was started in <strong>November 2022</strong> at Gajuwaka, Kanthi Road, Chinna Gantiyada — a 2000 sq.ft shopping space offering an extraordinary range of toys, gifts, novelties, fancy jewellery, birthday décor, stationery, cosmetics and more.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We also specialise in bulk return gifts, customized products, home décor and plastic household essentials — making every celebration effortless.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative">
            <img src={aboutHero} alt="Best Choice store" loading="lazy" className="rounded-[2rem] shadow-glow w-full" />
            <div className="absolute -bottom-6 -left-6 glass rounded-2xl p-5 shadow-card">
              <p className="text-3xl font-display font-bold text-gradient">2000 sq.ft</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">Shopping Space</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold">What We Offer</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">Our Curated Collections</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryGroups.map((g, i) => (
            <motion.div key={g.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="bg-card rounded-3xl overflow-hidden shadow-card hover-lift border border-border">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={g.img} alt={g.title} loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-3">{g.title}</h3>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {g.items.map((it) => <li key={it} className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> {it}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us — Redesigned modern, asymmetrical feature grid */}
      <section className="py-24 bg-gradient-blush relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center md:text-left mb-16 max-w-2xl">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Why Choose Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              Our Core Promises
            </h2>
            <p className="text-muted-foreground mt-4 text-base md:text-lg">
              We balance an extensive selection with structural guarantees, bringing clarity and confidence to your shopping experience.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* Left Column: Hero Highlight Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1 p-8 rounded-[2rem] bg-gradient-to-br from-primary/10 via-card to-card border border-primary/20 shadow-glow flex flex-col justify-between min-h-[380px] group sticky top-28"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-md mb-8 group-hover:scale-110 transition-transform duration-300">
                  <heroFeature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-3xl font-bold tracking-tight text-foreground mb-4">
                  {heroFeature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {heroFeature.description}
                </p>
              </div>
              <div className="pt-6 border-t border-border/60 mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <span>The ultimate destination</span>
              </div>
            </motion.div>

            {/* Right Column: High-Density 2x4 Asymmetric Sub-Grid */}
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {coreFeatures.map((f, i) => (
                <motion.div 
                  key={f.title} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ delay: i * 0.05 }} 
                  className="p-6 rounded-2xl bg-card border border-border/80 shadow-card hover:border-primary/30 hover:shadow-soft transition-all duration-300 flex gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-muted group-hover:bg-primary/10 flex items-center justify-center shrink-0 transition-colors duration-300">
                    <f.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-base mb-1 group-hover:text-primary transition-colors duration-300">
                      {f.title}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {f.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Founders — Redesigned Asymmetric Grid Layout */}
      <section className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          
          {/* Left Sticky Header & Intro Panel */}
          <div className="lg:col-span-1 lg:sticky lg:top-28">
            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-3">Meet the Team</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight leading-tight">
              The Hearts Behind <span className="text-gradient">Best Choice</span>
            </h2>
            <p className="text-muted-foreground mt-5 text-base md:text-lg leading-relaxed">
              We started with a simple vision: to bring convenience, variety, and uncompromising quality to Gajuwaka under one vibrant roof.
            </p>
            <div className="mt-8 pt-6 border-t border-border hidden lg:block">
              <p className="text-xs text-muted-foreground font-medium">Established November 2022</p>
            </div>
          </div>

          {/* Right Cards Deck */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
            {founders.map((f, i) => (
              <motion.div 
                key={f.name} 
                initial={{ opacity: 0, y: 40 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.6, delay: i * 0.1 }} 
                className="group relative"
              >
                {/* Image Wrapper */}
                <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-blush shadow-card border border-border group-hover:shadow-glow transition-all duration-500 relative">
                  <img 
                    src={f.img} 
                    alt={f.name} 
                    loading="lazy" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                  />
                  {/* Soft Vignette Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Profile Details */}
                <div className="mt-5 px-2">
                  <h3 className="font-display text-2xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors duration-300">
                    {f.name}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium tracking-wide mt-1">
                    {f.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}