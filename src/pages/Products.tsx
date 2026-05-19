
import { useState } from "react";
import { motion } from "framer-motion";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";



export default function ProductsPage() {
  const [active, setActive] = useState<string>("All");
  const filtered = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs uppercase tracking-widest text-primary font-semibold">Shop the collection</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display text-5xl md:text-6xl font-bold mt-3">
            Bags for <span className="text-gradient">Every Moment</span>
          </motion.h1>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Handpicked handbags, school bags & lunch bags — premium quality at the best prices.</p>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["All", ...categories].map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition ${active === c ? "bg-gradient-primary text-primary-foreground shadow-soft" : "bg-card border border-border text-foreground hover:border-primary"}`}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
        </div>
      </section>
    </>
  );
}
