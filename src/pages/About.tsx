import { motion } from "framer-motion";
import aboutHero from "@/assets/about/about-hero.jpg";
import founder1 from "@/assets/founders/founder-1.jpg";
import founder2 from "@/assets/founders/founder-2.jpg";

// Category images mapped directly alongside the copy text
import toys from "@/assets/categories/toys.jpg";
import birthday from "@/assets/categories/birthday.jpg";
import jewellery from "@/assets/categories/jewellery.jpg";
import infant from "@/assets/categories/infant.jpg";
import customized from "@/assets/categories/customized.jpg";
import stationery from "@/assets/categories/stationery.jpg";

import { Sparkles, Award, ShieldCheck, Heart, Star, Gem, Eye, Zap, Wallet } from "lucide-react";

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
  { name: "Raja Sekhar", role: "Co-Founder & Curator", img: founder1 },
  { name: "Swetha Bindu", role: "Co-Founder & Operations", img: founder2 },
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

      {/* Categories Redesigned into High-End Side-by-Side Split Image & Copy Blocks */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-background">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold">What We Offer</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2 tracking-tight">
            Our Curated <span className="text-gradient">Departments</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base leading-relaxed">
            We have structurally organized our vast 24-category physical catalog into distinct, premium store wings. Walk through our departments below.
          </p>
        </div>

        <div className="space-y-24">
          
          {/* Block 1: Kids & Celebrations (Image Left, Text Right) */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[16/11] overflow-hidden rounded-[2rem] border border-border/60 shadow-card"
            >
              <img src={toys} alt="Toys & Kids Zone" loading="lazy" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-md">01</span>
                <h3 className="font-display text-2xl font-bold tracking-tight text-neutral-900">Celebrations & Kids Choice</h3>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                Step into a world of pure excitement where milestones are brought to life. Our massive selection includes immersive <strong>Gift & Toys</strong>, targeted <strong>Baby Item</strong> configurations, dynamic <strong>Birthday Item</strong> layouts, and celebratory <strong>Decoration Item</strong> options. From custom theme configurations to interactive party needs, we supply everything required to build unforgettable family memories.
              </p>
            </motion.div>
          </div>

          {/* Block 2: Fashion & Cosmetics (Text Left, Image Right) */}
          <div className="grid lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 lg:order-1"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-md">02</span>
                <h3 className="font-display text-2xl font-bold tracking-tight text-neutral-900">Fashion, Grace & Cosmetics</h3>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                Elevate your everyday personal style and luxury presentation with our meticulously sourced premium accessories. We feature an exclusive line of long-lasting <strong>One Gram Jewellery</strong> items, trending <strong>Fancy</strong> goods, elegant <strong>Ladies Hand Bags</strong>, and premium daily <strong>Cosmetics</strong>. Perfect for wedding functions, seasonal festivals, or finding that unique signature accent piece.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[16/11] overflow-hidden rounded-[2rem] border border-border/60 shadow-card lg:order-2"
            >
              <img src={jewellery} alt="Jewellery and Cosmetics Section" loading="lazy" className="w-full h-full object-cover" />
            </motion.div>
          </div>

          {/* Block 3: Home Living & Lighting (Image Left, Text Right) */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[16/11] overflow-hidden rounded-[2rem] border border-border/60 shadow-card"
            >
              <img src={customized} alt="Home Living and Flora" loading="lazy" className="w-full h-full object-cover" />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-md">03</span>
                <h3 className="font-display text-2xl font-bold tracking-tight text-neutral-900">Home Living, Flora & Lighting</h3>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                Transform ordinary spaces into cozy, beautiful environments. This catalog sector spans highly functional <strong>Lighting Item</strong> designs, premium architectural <strong>Marble Item</strong> units, refreshing <strong>Natural Plants</strong>, and hyper-realistic <strong>Artificial Flowers</strong>. To complement your home, we provide robust <strong>Plastic</strong> essentials, specialized <strong>Steel Items</strong>, and heavy-duty study utility solutions like our ergonomic <strong>Study Table</strong> lines.
              </p>
            </motion.div>
          </div>

          {/* Block 4: Utilities & Everyday Brands (Text Left, Image Right) */}
          <div className="grid lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-4 lg:order-1"
            >
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold bg-primary/10 text-primary px-2.5 py-1 rounded-md">04</span>
                <h3 className="font-display text-2xl font-bold tracking-tight text-neutral-900">Lifestyle Utilities & Everyday Essentials</h3>
              </div>
              <p className="text-muted-foreground text-base leading-relaxed">
                Engineered directly for maximum day-to-day productivity and family transport. Our practical inventory ranges from durable <strong>Walkers & Cycles</strong> for growing infants, to premium institutional <strong>Books & Stationery</strong> packs. For regular travel or storage needs, explore our premium branded utility collections from <strong>Milton</strong>, <strong>Borosil</strong>, and <strong>Cello</strong> alongside multi-purpose <strong>Bags</strong>, premium imported <strong>Chocolates</strong>, and a vast collection of everyday <strong>General Item</strong> options.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[16/11] overflow-hidden rounded-[2rem] border border-border/60 shadow-card lg:order-2"
            >
              <img src={stationery} alt="Stationery and Household Brands" loading="lazy" className="w-full h-full object-cover" />
            </motion.div>
          </div>

        </div>
      </section>

      {/* Why Choose Us */}
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

            {/* Right Column: High-Density Asymmetric Sub-Grid */}
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

      {/* Founders */}
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