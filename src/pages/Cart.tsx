// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Minus, Plus, Trash2, MessageCircle, ShoppingBag } from "lucide-react";
// import { useCart } from "@/lib/cart";



// export default function CartPage() {
//   const { items, remove, updateQty, total, count, clear } = useCart();

//   const buildMessage = () => {
//     const lines = items.map((i, idx) => {
//       // Constructs a clean item description block accompanied by its image URL for WhatsApp link previewing
//       return [
//         `${idx + 1}. ${i.name} (${i.category})`,
//         `   Qty: ${i.qty} × ₹${i.price} = ₹${i.qty * i.price}`,
//         `   Product Image: ${i.image}`,
//         ``
//       ].join("\n");
//     });

//     const msg = [
//       `Hi Best Choice, I'd like to place an order:`,
//       ``,
//       ...lines,
//       `Total Items: ${count}`,
//       `Total Amount: ₹${total}`,
//       ``,
//       `Please confirm availability. Thank you!`,
//     ].join("\n");

//     return encodeURIComponent(msg);
//   };

//   return (
//     <section className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
//       <div className="text-center mb-12">
//         <p className="text-xs uppercase tracking-widest text-primary font-semibold">Your Selection</p>
//         <h1 className="font-display text-5xl md:text-6xl font-bold mt-2">Shopping Cart</h1>
//       </div>

//       {items.length === 0 ? (
//         <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-24 bg-gradient-blush rounded-3xl">
//           <ShoppingBag className="w-16 h-16 text-primary mx-auto mb-4" />
//           <h2 className="font-display text-2xl font-bold">Your cart is empty</h2>
//           <p className="text-muted-foreground mt-2">Discover our beautiful collections.</p>
//           <Link to="/products" className="inline-flex mt-6 bg-gradient-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:shadow-glow transition">
//             Shop Now
//           </Link>
//         </motion.div>
//       ) : (
//         <div className="grid lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-4">
//             {items.map((item) => (
//               <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex gap-4 p-4 bg-card rounded-2xl border border-border shadow-card">
//                 <img src={item.image} alt={item.name} loading="lazy" className="w-24 h-24 rounded-xl object-cover" />
//                 <div className="flex-1 min-w-0">
//                   <p className="text-xs uppercase tracking-widest text-primary font-semibold">{item.category}</p>
//                   <h3 className="font-display text-lg font-semibold truncate">{item.name}</h3>
//                   <p className="font-bold text-lg text-foreground mt-1">₹{item.price}</p>
//                 </div>
//                 <div className="flex flex-col justify-between items-end">
//                   <button onClick={() => remove(item.id)} className="text-muted-foreground hover:text-destructive transition" aria-label="Remove">
//                     <Trash2 className="w-5 h-5" />
//                   </button>
//                   <div className="flex items-center gap-2 bg-blush rounded-full p-1">
//                     <button onClick={() => updateQty(item.id, item.qty - 1)} className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"><Minus className="w-3 h-3" /></button>
//                     <span className="w-8 text-center font-semibold">{item.qty}</span>
//                     <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"><Plus className="w-3 h-3" /></button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//             <button onClick={clear} className="text-sm text-muted-foreground hover:text-destructive transition">Clear cart</button>
//           </div>

//           <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="bg-gradient-blush rounded-3xl p-7 h-fit sticky top-28 shadow-card border border-border">
//             <h2 className="font-display text-2xl font-bold mb-6">Order Summary</h2>
//             <div className="space-y-3 text-sm">
//               <div className="flex justify-between"><span className="text-muted-foreground">Total Items</span><span className="font-semibold">{count}</span></div>
//               <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="font-semibold">₹{total}</span></div>
//               <div className="border-t border-border pt-3 flex justify-between text-lg">
//                 <span className="font-display font-bold">Total</span>
//                 <span className="font-display font-bold text-gradient">₹{total}</span>
//               </div>
//             </div>
//             <a
//               href={`https://wa.me/919063821610?text=${buildMessage()}`}
//               target="_blank" rel="noreferrer"
//               className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition hover:shadow-glow"
//             >
//               <MessageCircle className="w-5 h-5" /> Order on WhatsApp
//             </a>
//             <p className="text-xs text-muted-foreground text-center mt-3">You'll be redirected to WhatsApp with your order details.</p>
//           </motion.div>
//         </div>
//       )}
//     </section>
//   );
// }




import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, Trash2, MessageCircle, ShoppingBag, User, Phone, MapPin, ArrowLeft, CheckCircle2, Crosshair } from "lucide-react";
import { useCart } from "@/lib/cart";

export default function CartPage() {
  const { items, remove, updateQty, total, count, clear } = useCart();
  
  // Controls checkout wizard flow state: "cart" or "checkout"
  const [step, setStep] = useState<"cart" | "checkout">("cart");

  // Customer Form Data State
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
  });

  // Location Coordinates State
  const [coords, setCoords] = useState<{ lat: number; lng: number } | null>(null);
  const [loadingLocation, setLoadingLocation] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Uses Native Web Browser Geolocation API to instantly pull location profiles without external maps libraries
  const requestLiveLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your current web browser.");
      return;
    }

    setLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoords({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
        setLoadingLocation(false);
      },
      (error) => {
        console.error("Error fetching location data:", error);
        alert("Unable to fetch your exact coordinates. Please check your system/browser location permissions.");
        setLoadingLocation(false);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
  };

  // Constructs a structural layout string parsing items and dynamic location metrics
  const buildWhatsAppLink = () => {
    const itemsLines = items.map((i, idx) => {
      return [
        `${idx + 1}. ${i.name} (${i.category})`,
        `   Qty: ${i.qty} × ₹${i.price} = ₹${i.qty * i.price}`,
        `   Product Image: ${i.image}`,
        ``
      ].join("\n");
    });

    // If the coordinates exist, generate a dynamic Google Maps link pin framework
    const locationString = coords 
      ? `https://www.google.com/maps/search/?api=1&query=${coords.lat},${coords.lng}`
      : "Not provided (Using written address standard)";

    const msg = [
      `🚨 *NEW ORDER PLACED* 🚨`,
      `========================`,
      `👤 *CUSTOMER DETAILS*`,
      `Name: ${formData.fullName}`,
      `Phone: ${formData.phone}`,
      `Address: ${formData.address}`,
      `📍 GPS Pin Location: ${locationString}`,
      `========================`,
      `🛒 *ORDER SUMMARY*`,
      ...itemsLines,
      `Total Items: ${count}`,
      `*Total Amount: ₹${total}*`,
      `========================`,
      `Please confirm availability. Thank you!`,
    ].join("\n");

    return `https://wa.me/919063821610?text=${encodeURIComponent(msg)}`;
  };

  const handleConfirmOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.address) {
      alert("Please fill out all fields before processing your request.");
      return;
    }
    window.open(buildWhatsAppLink(), "_blank", "noreferrer");
  };

  return (
    <section className="pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="text-center mb-12">
        <p className="text-xs uppercase tracking-widest text-primary font-semibold">
          {step === "cart" ? "Your Selection" : "Secure Checkout"}
        </p>
        <h1 className="font-display text-4xl md:text-5xl font-bold mt-2">
          {step === "cart" ? "Shopping Cart" : "Delivery Details"}
        </h1>
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
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* LEFT SIDE BLOCK: Swaps between item validation list and clean input form wrapper */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {step === "cart" ? (
                <motion.div key="cart-list" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="space-y-4">
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
                          <button onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))} className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"><Minus className="w-3 h-3" /></button>
                          <span className="w-8 text-center font-semibold">{item.qty}</span>
                          <button onClick={() => updateQty(item.id, item.qty + 1)} className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition"><Plus className="w-3 h-3" /></button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  <button onClick={clear} className="text-sm text-muted-foreground hover:text-destructive transition mt-2 block">Clear cart</button>
                </motion.div>
              ) : (
                <motion.div key="checkout-form" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} className="bg-card rounded-3xl p-6 border border-border shadow-card space-y-6">
                  <button onClick={() => setStep("cart")} className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition mb-2">
                    <ArrowLeft className="w-4 h-4" /> Modify Cart Items
                  </button>

                  <form onSubmit={handleConfirmOrder} className="space-y-5">
                    <div>
                      <label className="block text-sm font-semibold mb-2 flex items-center gap-2"><User className="w-4 h-4 text-primary" /> Full Name</label>
                      <input type="text" name="fullName" required value={formData.fullName} onChange={handleInputChange} placeholder="John Doe" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> Phone Number</label>
                      <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange} placeholder="9876543210" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition" />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold mb-2 flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> Complete Delivery Address</label>
                      <textarea name="address" required value={formData.address} onChange={handleInputChange} rows={3} placeholder="Apartment, Street name, Landmark, City" className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 transition resize-none" />
                    </div>

                    {/* Native GPS Integration Interface */}
                    <div className="p-4 bg-blush/30 rounded-2xl border border-border/50">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                            Add Maps Link to WhatsApp
                          </h4>
                          <p className="text-xs text-muted-foreground mt-0.5">
                            Attaches your exact digital coordinates to prevent courier layout delays.
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={requestLiveLocation}
                          disabled={loadingLocation}
                          className="px-4 py-2.5 bg-background hover:bg-primary hover:text-primary-foreground border border-border text-xs font-semibold rounded-xl flex items-center justify-center gap-2 transition disabled:opacity-50 whitespace-nowrap shadow-sm"
                        >
                          <Crosshair className={`w-4 h-4 ${loadingLocation ? "animate-spin" : ""}`} />
                          {loadingLocation ? "Locating..." : coords ? "Location Pinned ✓" : "Get Live Location"}
                        </button>
                      </div>
                      {coords && (
                        <div className="mt-3 text-[11px] text-emerald-600 font-medium bg-emerald-50 border border-emerald-200/50 rounded-lg p-2 text-center">
                          Coordinates Attached Successfully! (Lat: {coords.lat.toFixed(5)}, Lng: {coords.lng.toFixed(5)})
                        </div>
                      )}
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE BLOCK: Sticky Interactive Summarization Widget */}
          <motion.div layout className="bg-gradient-blush rounded-3xl p-7 h-fit sticky top-28 shadow-card border border-border">
            <h2 className="font-display text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Total Items</span><span className="font-semibold">{count}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="font-semibold">₹{total}</span></div>
              <div className="border-t border-border pt-3 flex justify-between text-lg">
                <span className="font-display font-bold">Total</span>
                <span className="font-display font-bold text-gradient">₹{total}</span>
              </div>
            </div>

            {step === "cart" ? (
              <button
                onClick={() => setStep("checkout")}
                className="mt-6 w-full bg-gradient-primary text-primary-foreground py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition hover:shadow-glow"
              >
                Proceed to Details
              </button>
            ) : (
              <div className="space-y-3 mt-6">
                <button
                  onClick={handleConfirmOrder}
                  disabled={!formData.fullName || !formData.phone || !formData.address}
                  className="w-full bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed text-white py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition hover:shadow-glow shadow-sm"
                >
                  <MessageCircle className="w-5 h-5" /> Confirm & Open WhatsApp
                </button>
                <button
                  type="button"
                  onClick={() => setStep("cart")}
                  className="w-full bg-transparent hover:bg-muted/10 text-foreground py-3 rounded-full text-sm font-medium transition"
                >
                  Cancel
                </button>
              </div>
            )}
            <p className="text-xs text-muted-foreground text-center mt-3">
              {step === "cart" ? "Review items before inputting destination metadata." : "Clicking confirm opens WhatsApp and formats your text automatically."}
            </p>
          </motion.div>

        </div>
      )}
    </section>
  );
}