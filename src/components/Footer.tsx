// import { Link } from "react-router-dom";
// import { Instagram, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
// import logo from "@/assets/logo/best-choice-logo.jpeg";

// const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

// export function Footer() {
//   return (
//     <footer className="bg-gradient-blush mt-20 pt-16 pb-8 border-t border-border">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
//         <div>
//           <Link to="/" onClick={scrollTop} className="flex items-center gap-3 mb-4">
//             <img src={logo} alt="Best Choice" className="h-12 w-12 rounded-full ring-2 ring-primary/30" />
//             <div>
//               <div className="font-display text-lg font-bold text-gradient">BEST CHOICE</div>
//               <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Save Money · Save Time</div>
//             </div>
//           </Link>
//           <p className="text-sm text-muted-foreground">Your one-stop premium destination for gifts, toys, fashion, décor & lifestyle in Gajuwaka, Vizag.</p>
//         </div>

//         <div>
//           <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
//           <ul className="space-y-2 text-sm">
//             {[
//               { to: "/", label: "Home" },
//               { to: "/about", label: "About Us" },
//               { to: "/products", label: "Products" },
//               { to: "/cart", label: "Cart" },
//               { to: "/contact", label: "Contact" },
//             ].map((l) => (
//               <li key={l.to}>
//                 <Link to={l.to} onClick={scrollTop} className="text-muted-foreground hover:text-primary transition">
//                   {l.label}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-semibold text-foreground mb-4">Categories</h4>
//           <ul className="space-y-2 text-sm text-muted-foreground">
//             {["Toys & Gifts", "Birthday Décor", "One Gram Jewellery", "Infant Items", "Photo Frames", "Stationery"].map((c) => (
//               <li key={c}><Link to="/products" onClick={scrollTop} className="hover:text-primary transition">{c}</Link></li>
//             ))}
//           </ul>
//         </div>

//         <div>
//           <h4 className="font-semibold text-foreground mb-4">Contact</h4>
//           <ul className="space-y-3 text-sm text-muted-foreground">
//             <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" /> 26/27/14, Chinna Gantiyada, Kanthi Road, Gajuwaka, Vizag</li>
//             <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> 8143078003 · 9063821610</li>
//             <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> 9 AM – 9 PM · All days</li>
//             <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-primary" /> WhatsApp: 9063821610</li>
//             <li className="flex items-center gap-2"><Instagram className="w-4 h-4 text-primary" />
//               <a href="https://instagram.com/best_choice_gajuwaka" target="_blank" rel="noreferrer" className="hover:text-primary">@best_choice_gajuwaka</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
//         <p>© {new Date().getFullYear()} Best Choice. All rights reserved.</p>
//         <p>GSTIN: 37ABAFB4739N1Z3 · Online delivery available</p>
//       </div>
//     </footer>
//   );
// }




import { Link } from "react-router-dom";
import { Instagram, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import logo from "@/assets/logo/best-choice-logo.jpeg";

const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

export function Footer() {
  return (
    <footer className="bg-gradient-blush mt-20 pt-16 pb-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <Link to="/" onClick={scrollTop} className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Best Choice" className="h-12 w-12 rounded-full ring-2 ring-primary/30" />
            <div>
              <div className="font-display text-lg font-bold text-gradient">BEST CHOICE</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Save Money · Save Time</div>
            </div>
          </Link>
          <p className="text-sm text-muted-foreground">Your one-stop premium destination for gifts, toys, fashion, décor & lifestyle in Gajuwaka, Vizag.</p>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/products", label: "Products" },
              { to: "/cart", label: "Cart" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} onClick={scrollTop} className="text-muted-foreground hover:text-primary transition">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-foreground mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" /> 26/27/14, Chinna Gantiyada, Kanthi Road, Gajuwaka, Vizag</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> 8143078003 · 9063821610</li>
            <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> 9 AM – 9 PM · All days</li>
            <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-primary" /> WhatsApp: 9063821610</li>
            <li className="flex items-center gap-2"><Instagram className="w-4 h-4 text-primary" />
              <a href="https://instagram.com/best_choice_gajuwaka" target="_blank" rel="noreferrer" className="hover:text-primary">@best_choice_gajuwaka</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-2 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Best Choice. All rights reserved.</p>
        <p>GSTIN: 37ABAFB4739N1Z3 · Online delivery available</p>
      </div>
    </footer>
  );
}