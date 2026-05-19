import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import type { Product } from "@/data/products";
import { useCart } from "@/lib/cart";

export function ProductCard({ product, index = 0 }: { product: Product; index?: number }) {
  const { add } = useCart();
  const discount = Math.round(((product.mrp - product.price) / product.mrp) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group bg-card rounded-3xl overflow-hidden shadow-card hover-lift border border-border"
    >
      <div className="relative aspect-square overflow-hidden bg-blush">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={768}
          height={768}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <span className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-soft">
          {discount}% OFF
        </span>
      </div>
      <div className="p-5 space-y-2">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold">{product.category}</p>
        <h3 className="font-display text-lg font-semibold text-foreground line-clamp-1">{product.name}</h3>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-foreground">₹{product.price}</span>
          <span className="text-sm text-muted-foreground line-through">₹{product.mrp}</span>
        </div>
        <button
          onClick={() => { add({ id: product.id, name: product.name, category: product.category, price: product.price, mrp: product.mrp, image: product.image }); toast.success(`${product.name} added to cart`); }}
          className="w-full mt-3 bg-gradient-primary text-primary-foreground py-3 rounded-full font-medium flex items-center justify-center gap-2 hover:shadow-glow transition-all duration-300 group-hover:scale-[1.02]"
        >
          <ShoppingBag className="w-4 h-4" /> Add to Cart
        </button>
      </div>
    </motion.div>
  );
}
