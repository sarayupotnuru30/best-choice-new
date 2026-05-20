// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ShoppingBag, MessageCircle, Sparkles, Award, ShieldCheck, Truck, Heart, Star, Instagram } from "lucide-react";
// import toys from "@/assets/categories/toys.jpg";
// import birthday from "@/assets/categories/birthday.jpg";
// import jewellery from "@/assets/categories/jewellery.jpg";
// import infant from "@/assets/categories/infant.jpg";
// import fancy from "@/assets/categories/fancy.jpg";
// import plants from "@/assets/categories/plants.jpg";
// import artificial from "@/assets/categories/artificial.jpg";
// import cycles from "@/assets/categories/cycles.jpg";
// import games from "@/assets/categories/games.jpg";
// import studytables from "@/assets/categories/studytables.jpg";
// import marble from "@/assets/categories/marble.jpg";
// import bags from "@/assets/categories/bags.jpg";
// import general from "@/assets/categories/general.jpg";
// import plastic from "@/assets/categories/plastic.jpg";
// import steel from "@/assets/categories/steel.jpg";
// import borosil from "@/assets/categories/borosil.jpg";
// import milton from "@/assets/categories/milton.jpg";
// import chocolates from "@/assets/categories/chocolates.jpg";
// import cosmetics from "@/assets/categories/cosmetics.jpg";
// import handbags from "@/assets/categories/handbags.jpg";
// import cello from "@/assets/categories/cello.jpg";
// import decoration from "@/assets/categories/decoration.jpg";
// import customized from "@/assets/categories/customized.jpg";
// import stationery from "@/assets/categories/stationery.jpg";
// import storeInterior from "@/assets/hero/store-interior.jpg";
// import { products } from "@/data/products";
// import { ProductCard } from "@/components/ProductCard";

// const categoryCards = [
//   { img: toys, label: "Gift & Toys" },
//   { img: infant, label: "Baby Item" },
//   { img: birthday, label: "Birthday Item" },
//   { img: decoration, label: "Decoration Item" },
//   { img: jewellery, label: "One Gram Jewellery" },
//   { img: fancy, label: "Fancy" },
//   { img: handbags, label: "Ladies Hand Bags" },
//   { img: plastic, label: "Plastic" },
//   { img: stationery, label: "Books & Stationery" },
//   { img: cosmetics, label: "Cosmetics" },
//   { img: cycles, label: "Walkers & Cycles" },
//   { img: plants, label: "Natural Plants" },
//   { img: artificial, label: "Artificial Flowers" },
//   { img: customized, label: "Lighting Item" },
//   { img: games, label: "Games & Sports" },
//   { img: marble, label: "Marble Item" },
//   { img: studytables, label: "Study Table" },
//   { img: chocolates, label: "Chocolates" },
//   { img: bags, label: "Bags" },
//   { img: general, label: "General Item" },
//   { img: steel, label: "Steel Items" },
//   { img: milton, label: "Milton" },
//   { img: borosil, label: "Borosil" },
//   { img: cello, label: "Cello" },
// ];

// const features = [
//   { icon: Sparkles, title: "30,000+ Range", desc: "Unmatched variety under one roof" },
//   { icon: Award, title: "Premium Quality", desc: "Hand-picked, trusted products" },
//   { icon: ShieldCheck, title: "6-Month Guarantee", desc: "On all One Gram Jewellery" },
//   { icon: Heart, title: "Customer First", desc: "Touch & trial experience" },
//   { icon: Truck, title: "Online Delivery", desc: "Across Vizag & beyond" },
//   { icon: Star, title: "Best Price Guarantee", desc: "True value for money" },
// ];

// const allReviews = [
//   { name: "Ananya Rao", role: "Vizag Resident", text: "Found the perfect customized photo frame for my parents' anniversary! The collection is huge.", rating: 5 },
//   { name: "Srinivas K.", role: "Gajuwaka Local", text: "Best place for toys in Vizag. Rates are very reasonable compared to malls, and quality is top-notch.", rating: 4 },
//   { name: "Priya Sharma", role: "Regular Shopper", text: "Their 1-gram gold jewellery has a genuine 6-month guarantee. I bought 3 sets; looks exactly like real gold!", rating: 5 },
//   { name: "Rahul Verma", role: "Parent", text: "One-stop shop for birthday decor. Got everything from balloons to theme setups under one roof.", rating: 4 },
//   { name: "K. Deepika", role: "Online Buyer", text: "Ordered a huge teddy bear via WhatsApp. Delivery across Vizag was prompt, and the tracking was seamless.", rating: 5 },
//   { name: "Manish Kumar", role: "Techie", text: "Incredible range of office stationery and premium gift options. Staff is very supportive and patient.", rating: 4 },
//   { name: "Sai Lakshmi", role: "Homemaker", text: "The touch and trial experience makes a huge difference. You know exactly what quality you are paying for.", rating: 5 },
//   { name: "Kiran Tag", role: "Event Coordinator", text: "Amazing customer-first attitude. Whenever I need bulk return gifts, Best Choice is my definitive spot.", rating: 5 },
// ];

// const reviewsRow1 = allReviews.slice(0, 4);
// const reviewsRow2 = allReviews.slice(4, 8);

// export default function Home() {
//   return (
//     <>
//       {/* HERO */}
//       <section className="relative h-screen min-h-[680px] overflow-hidden">
//         <video
//           autoPlay muted loop playsInline
//           className="absolute inset-0 w-full h-full object-cover"
//           poster={storeInterior}
//         >
//           <source src="/hero/shop-video.mp4" type="video/mp4" />
//         </video>
//         <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/30 to-white/60" />
//         <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-rose/10" />

//         {/* Floating decor */}
//         <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 left-10 w-24 h-24 rounded-full bg-primary/20 blur-2xl" />
//         <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 right-16 w-40 h-40 rounded-full bg-rose/20 blur-3xl" />

//         <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
//           <motion.span
//             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
//             className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-semibold text-primary mb-8 shadow-sm"
//           >
//             <Sparkles className="w-4 h-4" /> Save Money · Save Time
//           </motion.span>

//           <motion.p
//             initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
//             className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 max-w-5xl leading-tight drop-shadow-sm"
//           >
//             Toys, Gifts, Fashion, Décor, Stationery & More — All Under One Roof.
//           </motion.p>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }}
//             className="mt-12 flex flex-wrap items-center justify-center gap-6"
//           >
//             <motion.div
//               animate={{ scale: [1, 1.03, 1] }}
//               transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
//             >
//               <Link 
//                 to="/products" 
//                 className="bg-gradient-to-r from-rose-600 via-pink-600 to-primary text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 shadow-[0_0_30px_rgba(225,29,72,0.5)] hover:shadow-[0_0_40px_rgba(225,29,72,0.7)] transform hover:scale-105 transition duration-300 tracking-wide text-lg"
//               >
//                 <ShoppingBag className="w-6 h-6 stroke-[2.5]" /> Shop Now
//               </Link>
//             </motion.div>

//             <a 
//               href="https://wa.me/919063821610" 
//               target="_blank" 
//               rel="noreferrer" 
//               className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] transform hover:scale-105 transition duration-300 tracking-wide text-lg"
//             >
//               <MessageCircle className="w-6 h-6 fill-white text-emerald-600 stroke-[2.5]" /> Contact on WhatsApp
//             </a>
//           </motion.div>
//         </div>
//       </section>

//       {/* MARQUEE */}
//       <section className="bg-gradient-primary py-4 overflow-hidden">
//         <div className="flex gap-12 animate-[marquee_30s_linear_infinite] whitespace-nowrap text-primary-foreground font-medium text-sm tracking-widest uppercase">
//           {Array.from({ length: 2 }).flatMap((_, k) =>
//             ["✦ 30,000+ Products", "✦ Premium Quality", "✦ Online Delivery Vizag", "✦ Touch & Trial Experience", "✦ Best Price Guarantee", "✦ Open 9 AM – 9 PM Daily"].map((t, i) => (
//               <span key={`${k}-${i}`}>{t}</span>
//             ))
//           )}
//         </div>
//       </section>

//       {/* CATEGORIES */}
//       <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-14">
//           <p className="text-xs uppercase tracking-widest text-primary font-semibold">Explore</p>
//           <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">Our Departments</h2>
//           <p className="text-muted-foreground mt-3 max-w-xl mx-auto">From daily home essentials to luxury gifts — discover everything you need across our 24 comprehensive collections.</p>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//           {categoryCards.map((c, i) => (
//             <Link
//               key={`${c.label}-${i}`}
//               to={`/products?category=${encodeURIComponent(c.label)}`}
//               className="block group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card hover-lift"
//             >
//               <motion.div
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
//                 className="w-full h-full relative"
//               >
//                 <img src={c.img} alt={c.label} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
//                 <h3 className="absolute bottom-5 left-5 right-5 font-display text-xl md:text-2xl font-bold text-white leading-tight">{c.label}</h3>
//               </motion.div>
//             </Link>
//           ))}
//         </div>
//       </section>

//       {/* TRENDING */}
//       <section className="py-24 bg-gradient-blush">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
//             <div>
//               <p className="text-xs uppercase tracking-widest text-primary font-semibold">Hot Picks</p>
//               <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">Trending Products</h2>
//             </div>
//             <Link to="/products" className="text-primary font-medium hover:underline">View all →</Link>
//           </div>
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
//             {products.slice(0, 4).map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
//           </div>
//         </div>
//       </section>

//       {/* WHY CHOOSE US */}
//       <section className="py-24 relative overflow-hidden bg-neutral-50/50">
//         <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
//         <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose/5 rounded-full blur-3xl pointer-events-none" />

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
//           <div className="text-center max-w-3xl mx-auto mb-20">
//             <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
//               <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs uppercase tracking-widest font-bold inline-block mb-4">
//                 Why Best Choice
//               </span>
//               <h2 className="font-display text-4xl sm:text-5xl font-black tracking-tight text-neutral-950 leading-tight">
//                 Bigger Variety. Better Prices. <br className="hidden sm:block" />
//                 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-600 to-rose-600">
//                   Every Single Day
//                 </span>
//               </h2>
//             </motion.div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((f, i) => (
//               <motion.div
//                 key={f.title}
//                 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//                 transition={{ duration: 0.6, delay: i * 0.05 }}
//                 whileHover={{ y: -6, transition: { duration: 0.2 } }}
//                 className="group relative p-8 rounded-3xl bg-white border border-neutral-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col items-start overflow-hidden"
//               >
//                 <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
//                 <div className="w-14 h-14 rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-6 shadow-sm group-hover:bg-gradient-primary group-hover:border-transparent transition-all duration-300">
//                   <f.icon className="w-6 h-6 text-neutral-800 group-hover:text-primary-foreground transition-colors duration-300" />
//                 </div>
//                 <h3 className="font-display text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary transition-colors duration-200">
//                   {f.title}
//                 </h3>
//                 <p className="text-neutral-500 text-sm leading-relaxed group-hover:text-neutral-600 transition-colors duration-200">
//                   {f.desc}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* SATISFACTION BANNER - REDESIGNED WITH 2-COLUMN MOBILE GRID */}
//       <section className="py-20 bg-gradient-blush overflow-hidden relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
//           <div className="lg:col-span-2 text-left">
//             <p className="uppercase tracking-widest text-xs font-bold text-primary">Customer Satisfaction</p>
//             <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black mt-2 text-neutral-900 leading-tight">
//               Loved by 10,000+ Happy Shoppers
//             </h2>
//             <p className="mt-4 text-muted-foreground max-w-xl text-sm md:text-base">
//               From birthdays to weddings, daily essentials to luxury gifting — families across Vizag trust Best Choice for moments that matter.
//             </p>
//           </div>
//           <div className="lg:text-right">
//             <a 
//               href="https://wa.me/919063821610" 
//               target="_blank" 
//               rel="noreferrer" 
//               className="inline-flex items-center justify-center gap-3 bg-gradient-primary text-primary-foreground w-full sm:w-auto px-8 py-4 rounded-full font-bold shadow-glow hover:scale-105 transition"
//             >
//               <MessageCircle className="w-5 h-5 fill-current" /> Chat with us
//             </a>
//           </div>
//         </div>

//         {/* Two-Column Micro Grid for Mobile View */}
//         <div className="grid grid-cols-2 gap-3 md:hidden max-w-7xl mx-auto px-3">
//           {allReviews.map((review, idx) => (
//             <motion.div 
//               key={`mobile-rev-${idx}`}
//               initial={{ opacity: 0, y: 15 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.2) }}
//               className="bg-white border border-neutral-100 p-3.5 rounded-2xl shadow-xs flex flex-col justify-between"
//             >
//               <div>
//                 <div className="flex gap-0.5 mb-1.5">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <Star key={i} className={`w-3 h-3 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-neutral-200"}`} />
//                   ))}
//                 </div>
//                 <p className="text-neutral-700 text-[11px] font-medium leading-relaxed mb-2 line-clamp-4">
//                   "{review.text}"
//                 </p>
//               </div>
//               <div className="mt-1 border-t border-neutral-50 pt-1.5">
//                 <h4 className="font-bold text-neutral-900 text-[10px] truncate">{review.name}</h4>
//                 <p className="text-[9px] text-neutral-400 font-medium truncate mt-0.5">{review.role}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* Infinite Continuous Marquees for Desktop & Tablet View */}
//         <div className="hidden md:flex flex-col gap-6 w-full mask-gradient">
//           <div className="flex gap-6 animate-[marquee_40s_linear_infinite] whitespace-nowrap hover:[animation-play-state:paused]">
//             {[...reviewsRow1, ...reviewsRow1].map((review, idx) => (
//               <div key={`r1-${idx}`} className="inline-block bg-white border border-neutral-100 p-6 rounded-2xl shadow-sm w-[350px] shrink-0 whitespace-normal">
//                 <div className="flex gap-1 mb-3">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <Star key={i} className={`w-4 h-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-neutral-200"}`} />
//                   ))}
//                 </div>
//                 <p className="text-neutral-700 text-sm font-medium leading-relaxed mb-4">"{review.text}"</p>
//                 <div>
//                   <h4 className="font-bold text-neutral-900 text-sm">{review.name}</h4>
//                   <p className="text-xs text-neutral-400 font-medium">{review.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="flex gap-6 animate-[marquee_40s_linear_infinite_reverse] whitespace-nowrap hover:[animation-play-state:paused]">
//             {[...reviewsRow2, ...reviewsRow2].map((review, idx) => (
//               <div key={`r2-${idx}`} className="inline-block bg-white border border-neutral-100 p-6 rounded-2xl shadow-sm w-[350px] shrink-0 whitespace-normal">
//                 <div className="flex gap-1 mb-3">
//                   {Array.from({ length: 5 }).map((_, i) => (
//                     <Star key={i} className={`w-4 h-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-neutral-200"}`} />
//                   ))}
//                 </div>
//                 <p className="text-neutral-700 text-sm font-medium leading-relaxed mb-4">"{review.text}"</p>
//                 <div>
//                   <h4 className="font-bold text-neutral-900 text-sm">{review.name}</h4>
//                   <p className="text-xs text-neutral-400 font-medium">{review.role}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* INSTAGRAM */}
//       <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-10">
//           <p className="text-xs uppercase tracking-widest text-primary font-semibold">@best_choice_gajuwaka</p>
//           <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">Follow Us on Instagram</h2>
//         </div>
//         <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
//           {[toys, birthday, jewellery, infant, customized, stationery].map((img, i) => (
//             <a key={i} href="https://instagram.com/best_choice_gajuwaka" target="_blank" rel="noreferrer" className="group relative aspect-square rounded-2xl overflow-hidden">
//               <img src={img} alt="insta" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
//               <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 flex items-center justify-center transition">
//                 <Instagram className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition" />
//               </div>
//             </a>
//           ))}
//         </div>
//       </section>

//       {/* DELIVERY BANNER */}
//       <section className="px-4 pb-10">
//         <div className="max-w-6xl mx-auto glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-card">
//           <div className="flex items-center gap-5">
//             <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
//               <Truck className="w-8 h-8 text-primary-foreground" />
//             </div>
//             <div>
//               <h3 className="font-display text-2xl font-bold">Online Delivery Available</h3>
//               <p className="text-muted-foreground">Order via WhatsApp — we deliver across Vizag.</p>
//             </div>
//           </div>
//           <a href="https://wa.me/919063821610" target="_blank" rel="noreferrer" className="bg-gradient-primary text-primary-foreground px-7 py-3 rounded-full font-medium hover:shadow-glow transition">
//             Order Now
//           </a>
//         </div>
//       </section>
//     </>
//   );
// }





import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag, MessageCircle, Sparkles, Award, ShieldCheck, Truck, Heart, Star, Instagram } from "lucide-react";
import toys from "@/assets/categories/toys.jpg";
import birthday from "@/assets/categories/birthday.jpg";
import jewellery from "@/assets/categories/jewellery.jpg";
import infant from "@/assets/categories/infant.jpg";
import fancy from "@/assets/categories/fancy.jpg";
import plants from "@/assets/categories/plants.jpg";
import artificial from "@/assets/categories/artificial.jpg";
import cycles from "@/assets/categories/cycles.jpg";
import games from "@/assets/categories/games.jpg";
import studytables from "@/assets/categories/studytables.jpg";
import marble from "@/assets/categories/marble.jpg";
import bags from "@/assets/categories/bags.jpg";
import general from "@/assets/categories/general.jpg";
import plastic from "@/assets/categories/plastic.jpg";
import steel from "@/assets/categories/steel.jpg";
import borosil from "@/assets/categories/borosil.jpg";
import milton from "@/assets/categories/milton.jpg";
import chocolates from "@/assets/categories/chocolates.jpg";
import cosmetics from "@/assets/categories/cosmetics.jpg";
import handbags from "@/assets/categories/handbags.jpg";
import cello from "@/assets/categories/cello.jpg";
import decoration from "@/assets/categories/decoration.jpg";
import customized from "@/assets/categories/customized.jpg";
import stationery from "@/assets/categories/stationery.jpg";
import storeInterior from "@/assets/hero/store-interior.jpg";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

const categoryCards = [
  { img: toys, label: "Gift & Toys" },
  { img: infant, label: "Baby Item" },
  { img: birthday, label: "Birthday Item" },
  { img: decoration, label: "Decoration Item" },
  { img: jewellery, label: "One Gram Jewellery" },
  { img: fancy, label: "Fancy" },
  { img: handbags, label: "Ladies Hand Bags" },
  { img: plastic, label: "Plastic" },
  { img: stationery, label: "Books & Stationery" },
  { img: cosmetics, label: "Cosmetics" },
  { img: cycles, label: "Walkers & Cycles" },
  { img: plants, label: "Natural Plants" },
  { img: artificial, label: "Artificial Flowers" },
  { img: customized, label: "Lighting Item" },
  { img: games, label: "Games & Sports" },
  { img: marble, label: "Marble Item" },
  { img: studytables, label: "Study Table" },
  { img: chocolates, label: "Chocolates" },
  { img: bags, label: "Bags" },
  { img: general, label: "General Item" },
  { img: steel, label: "Steel Items" },
  { img: milton, label: "Milton" },
  { img: borosil, label: "Borosil" },
  { img: cello, label: "Cello" },
];

const features = [
  { icon: Sparkles, title: "30,000+ Range", desc: "Unmatched variety under one roof" },
  { icon: Award, title: "Premium Quality", desc: "Hand-picked, trusted products" },
  { icon: ShieldCheck, title: "6-Month Guarantee", desc: "On all One Gram Jewellery" },
  { icon: Heart, title: "Customer First", desc: "Touch & trial experience" },
  { icon: Truck, title: "Online Delivery", desc: "Across Vizag & beyond" },
  { icon: Star, title: "Best Price Guarantee", desc: "True value for money" },
];

const allReviews = [
  { name: "Ananya Rao", role: "Vizag Resident", text: "Found the perfect customized photo frame for my parents' anniversary! The collection is huge.", rating: 5 },
  { name: "Srinivas K.", role: "Gajuwaka Local", text: "Best place for toys in Vizag. Rates are very reasonable compared to malls, and quality is top-notch.", rating: 4 },
  { name: "Priya Sharma", role: "Regular Shopper", text: "Their 1-gram gold jewellery has a genuine 6-month guarantee. I bought 3 sets; looks exactly like real gold!", rating: 5 },
  { name: "Rahul Verma", role: "Parent", text: "One-stop shop for birthday decor. Got everything from balloons to theme setups under one roof.", rating: 4 },
  { name: "K. Deepika", role: "Online Buyer", text: "Ordered a huge teddy bear via WhatsApp. Delivery across Vizag was prompt, and the tracking was seamless.", rating: 5 },
  { name: "Manish Kumar", role: "Techie", text: "Incredible range of office stationery and premium gift options. Staff is very supportive and patient.", rating: 4 },
  { name: "Sai Lakshmi", role: "Homemaker", text: "The touch and trial experience makes a huge difference. You know exactly what quality you are paying for.", rating: 5 },
  { name: "Kiran Tag", role: "Event Coordinator", text: "Amazing customer-first attitude. Whenever I need bulk return gifts, Best Choice is my definitive spot.", rating: 5 },
];

const reviewsRow1 = allReviews.slice(0, 4);
const reviewsRow2 = allReviews.slice(4, 8);

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[680px] overflow-hidden">
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={storeInterior}
        >
          <source src="/hero/shop-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-white/30 to-white/60" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-rose/10" />

        {/* Floating decor */}
        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 6, repeat: Infinity }} className="absolute top-32 left-10 w-24 h-24 rounded-full bg-primary/20 blur-2xl" />
        <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 7, repeat: Infinity }} className="absolute bottom-32 right-16 w-40 h-40 rounded-full bg-rose/20 blur-3xl" />

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-semibold text-primary mb-8 shadow-sm"
          >
            <Sparkles className="w-4 h-4" /> Save Money · Save Time
          </motion.span>

          <motion.p
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }}
            className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 max-w-5xl leading-tight drop-shadow-sm"
          >
            Toys, Gifts, Fashion, Décor, Stationery & More — All Under One Roof.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6"
          >
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            >
              <Link 
                to="/products" 
                className="bg-gradient-to-r from-rose-600 via-pink-600 to-primary text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 shadow-[0_0_30px_rgba(225,29,72,0.5)] hover:shadow-[0_0_40px_rgba(225,29,72,0.7)] transform hover:scale-105 transition duration-300 tracking-wide text-lg"
              >
                <ShoppingBag className="w-6 h-6 stroke-[2.5]" /> Shop Now
              </Link>
            </motion.div>

            <a 
              href="https://wa.me/919063821610" 
              target="_blank" 
              rel="noreferrer" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 py-5 rounded-full font-bold flex items-center gap-3 shadow-[0_0_25px_rgba(16,185,129,0.4)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] transform hover:scale-105 transition duration-300 tracking-wide text-lg"
            >
              <MessageCircle className="w-6 h-6 fill-white text-emerald-600 stroke-[2.5]" /> Contact on WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="bg-gradient-primary py-4 overflow-hidden">
        <div className="flex gap-12 animate-[marquee_30s_linear_infinite] whitespace-nowrap text-primary-foreground font-medium text-sm tracking-widest uppercase">
          {Array.from({ length: 2 }).flatMap((_, k) =>
            ["✦ 30,000+ Products", "✦ Premium Quality", "✦ Online Delivery Vizag", "✦ Touch & Trial Experience", "✦ Best Price Guarantee", "✦ Open 9 AM – 9 PM Daily"].map((t, i) => (
              <span key={`${k}-${i}`}>{t}</span>
            ))
          )}
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold">Explore</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">Our Departments</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">From daily home essentials to luxury gifts — discover everything you need across our 24 comprehensive collections.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryCards.map((c, i) => (
            <Link
              key={`${c.label}-${i}`}
              to={`/products?category=${encodeURIComponent(c.label)}`}
              className="block group relative aspect-[4/5] rounded-3xl overflow-hidden shadow-card hover-lift"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
                className="w-full h-full relative"
              >
                <img src={c.img} alt={c.label} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <h3 className="absolute bottom-5 left-5 right-5 font-display text-xl md:text-2xl font-bold text-white leading-tight">{c.label}</h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </section>

      {/* TRENDING */}
      <section className="py-24 bg-gradient-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-primary font-semibold">Hot Picks</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">Trending Products</h2>
            </div>
            <Link to="/products" className="text-primary font-medium hover:underline">View all →</Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {products.slice(0, 4).map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US - UPDATED WITH 2-COLUMN MOBILE GRID */}
      <section className="py-24 relative overflow-hidden bg-neutral-50/50">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs uppercase tracking-widest font-bold inline-block mb-4">
                Why Best Choice
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 leading-tight">
                Bigger Variety. Better Prices. <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-pink-600 to-rose-600">
                  Every Single Day
                </span>
              </h2>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative p-4 md:p-8 rounded-2xl md:rounded-3xl bg-white border border-neutral-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col items-start overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-500 to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-neutral-50 border border-neutral-100 flex items-center justify-center mb-4 md:mb-6 shadow-sm group-hover:bg-gradient-primary group-hover:border-transparent transition-all duration-300 shrink-0">
                  <f.icon className="w-5 h-5 md:w-6 md:h-6 text-neutral-800 group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-sm md:text-xl font-bold text-neutral-900 mb-1.5 md:mb-2 group-hover:text-primary transition-colors duration-200 line-clamp-1">
                  {f.title}
                </h3>
                <p className="text-neutral-500 text-[11px] md:text-sm leading-relaxed group-hover:text-neutral-600 transition-colors duration-200">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SATISFACTION BANNER - REDESIGNED WITH 2-COLUMN MOBILE GRID */}
      <section className="py-20 bg-gradient-blush overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14 grid grid-cols-1 lg:grid-cols-3 items-center gap-8">
          <div className="lg:col-span-2 text-left">
            <p className="uppercase tracking-widest text-xs font-bold text-primary">Customer Satisfaction</p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black mt-2 text-neutral-900 leading-tight">
              Loved by 10,000+ Happy Shoppers
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl text-sm md:text-base">
              From birthdays to weddings, daily essentials to luxury gifting — families across Vizag trust Best Choice for moments that matter.
            </p>
          </div>
          <div className="lg:text-right">
            <a 
              href="https://wa.me/919063821610" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center justify-center gap-3 bg-gradient-primary text-primary-foreground w-full sm:w-auto px-8 py-4 rounded-full font-bold shadow-glow hover:scale-105 transition"
            >
              <MessageCircle className="w-5 h-5 fill-current" /> Chat with us
            </a>
          </div>
        </div>

        {/* Two-Column Micro Grid for Mobile View */}
        <div className="grid grid-cols-2 gap-3 md:hidden max-w-7xl mx-auto px-3">
          {allReviews.map((review, idx) => (
            <motion.div 
              key={`mobile-rev-${idx}`}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.2) }}
              className="bg-white border border-neutral-100 p-3.5 rounded-2xl shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-0.5 mb-1.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-3 h-3 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-neutral-200"}`} />
                  ))}
                </div>
                <p className="text-neutral-700 text-[11px] font-medium leading-relaxed mb-2 line-clamp-4">
                  "{review.text}"
                </p>
              </div>
              <div className="mt-1 border-t border-neutral-50 pt-1.5">
                <h4 className="font-bold text-neutral-900 text-[10px] truncate">{review.name}</h4>
                <p className="text-[9px] text-neutral-400 font-medium truncate mt-0.5">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Infinite Continuous Marquees for Desktop & Tablet View */}
        <div className="hidden md:flex flex-col gap-6 w-full mask-gradient">
          <div className="flex gap-6 animate-[marquee_40s_linear_infinite] whitespace-nowrap hover:[animation-play-state:paused]">
            {[...reviewsRow1, ...reviewsRow1].map((review, idx) => (
              <div key={`r1-${idx}`} className="inline-block bg-white border border-neutral-100 p-6 rounded-2xl shadow-sm w-[350px] shrink-0 whitespace-normal">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-neutral-200"}`} />
                  ))}
                </div>
                <p className="text-neutral-700 text-sm font-medium leading-relaxed mb-4">"{review.text}"</p>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-neutral-400 font-medium">{review.role}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-6 animate-[marquee_40s_linear_infinite_reverse] whitespace-nowrap hover:[animation-play-state:paused]">
            {[...reviewsRow2, ...reviewsRow2].map((review, idx) => (
              <div key={`r2-${idx}`} className="inline-block bg-white border border-neutral-100 p-6 rounded-2xl shadow-sm w-[350px] shrink-0 whitespace-normal">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-neutral-200"}`} />
                  ))}
                </div>
                <p className="text-neutral-700 text-sm font-medium leading-relaxed mb-4">"{review.text}"</p>
                <div>
                  <h4 className="font-bold text-neutral-900 text-sm">{review.name}</h4>
                  <p className="text-xs text-neutral-400 font-medium">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold">@best_choice_gajuwaka</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-2">Follow Us on Instagram</h2>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {[toys, birthday, jewellery, infant, customized, stationery].map((img, i) => (
            <a key={i} href="https://instagram.com/best_choice_gajuwaka" target="_blank" rel="noreferrer" className="group relative aspect-square rounded-2xl overflow-hidden">
              <img src={img} alt="insta" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 flex items-center justify-center transition">
                <Instagram className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition" />
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* DELIVERY BANNER */}
      <section className="px-4 pb-10">
        <div className="max-w-6xl mx-auto glass rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-card">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
              <Truck className="w-8 h-8 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold">Online Delivery Available</h3>
              <p className="text-muted-foreground">Order via WhatsApp — we deliver across Vizag.</p>
            </div>
          </div>
          <a href="https://wa.me/919063821610" target="_blank" rel="noreferrer" className="bg-gradient-primary text-primary-foreground px-7 py-3 rounded-full font-medium hover:shadow-glow transition">
            Order Now
          </a>
        </div>
      </section>
    </>
  );
}