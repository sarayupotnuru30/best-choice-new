import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Minus, Plus, Trash2, MessageCircle, ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart";



export default function CartPage() {
  const { items, remove, updateQty, total, count, clear } = useCart();

  const buildMessage = () => {
    const lines = items.map((i, idx) => {
      // Constructs a clean item description block accompanied by its image URL for WhatsApp link previewing
      return [
        `${idx + 1}. ${i.name} (${i.category})`,
        `   Qty: ${i.qty} × ₹${i.price} = ₹${i.qty * i.price}`,
        `   Product Image: ${i.image}`,
        ``
      ].join("\n");
    });

    const msg = [
      `Hi Best Choice, I'd like to place an order:`,
      ``,
      ...lines,
      `Total Items: ${count}`,
      `Total Amount: ₹${total}`,
      ``,
      `Please confirm availability. Thank you!`,
    ].join("\n");

    return encodeURIComponent(msg);
  };

  return (
    <section className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold">Your Selection</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold mt-2">Shopping Cart</h1>
      </div>

      {items.length === 0 ? (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-24 bg-gradient-blush rounded-3xl">
          <ShoppingBag className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="font-display text-2xl font-bold">Your cart is empty</h2>
          <p className="text-muted-foreground mt-2">Discover our beautiful collections.</p>
          <Link to="/products" className="inline-flex mt-6 bg-gradient-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:shadow-glow transition">
            Shop Now
          </Link>
        </motion.div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex gap-4 p-4 bg-card rounded-2xl border border-border shadow-card">
                <img src={item.image} alt={item.name} loading="lazy" className="w-24 h-24 rounded-xl object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs uppercase tracking-widest text-primary font-semibold">{item.category}</p>
                  <h3 className="font-display text-lg font-semibold truncate">{item.name}</h3>
                  <p className="font-bold text-lg text-foreground mt-1">₹{item.price}</p>
                </div>
                <div className="flex flex-col justify-between items-end">
                  <button onClick={() => remove(item.id)} className="text-muted-foreground hover:text-destructive transition" aria-label="Remove">
                    <Trash2 className="w-5 h-5" />
                  </button>
                  <div className="flex items-center gap-2 bg-blush rounded-full p-1">
                    <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"><Minus className="w-3 h-3" /></button>
                    <span className="w-8 text-center font-semibold">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"><Plus className="w-3 h-3" /></button>
                  </div>
                </div>
              </motion.div>
            ))}
            <button onClick={clear} className="text-sm text-muted-foreground hover:text-destructive transition">Clear cart</button>
          </div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-gradient-blush rounded-3xl p-7 h-fit sticky top-28 shadow-card border border-border">
            <h2 className="font-display text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Total Items</span><span className="font-semibold">{count}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="font-semibold">₹{total}</span></div>
              <div className="border-t border-border pt-3 flex justify-between text-lg">
                <span className="font-display font-bold">Total</span>
                <span className="font-display font-bold text-gradient">₹{total}</span>
              </div>
            </div>
            <a
              href={`https://wa.me/919063821610?text=${buildMessage()}`}
              target="_blank" rel="noreferrer"
              className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition hover:shadow-glow"
            >
              <MessageCircle className="w-5 h-5" /> Order on WhatsApp
            </a>
            <p className="text-xs text-muted-foreground text-center mt-3">You'll be redirected to WhatsApp with your order details.</p>
          </motion.div>
        </div>
      )}
    </section>
  );
}