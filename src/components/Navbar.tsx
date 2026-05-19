import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import logo from "@/assets/logo/best-choice-logo.jpeg";
import { useCart } from "@/lib/cart";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-card" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Best Choice" className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/30 group-hover:ring-primary transition" />
          <div className="leading-tight">
            <div className="font-display text-xl font-black text-gradient">BEST CHOICE</div>
            <div className="text-[10px] tracking-widest text-neutral-900 font-bold uppercase">Save Money · Save Time</div>
          </div>
        </Link>

        {/* DARKENED NAV LINKS FOR DESKTOP */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-semibold text-neutral-950 hover:text-primary transition relative tracking-wide"
              activeProps={{ className: "text-primary font-extrabold underline underline-offset-4" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/cart" className="relative p-2 rounded-full hover:bg-blush transition" aria-label="Cart">
            <ShoppingBag className="w-5 h-5 text-primary stroke-[2.5]" />
            {count > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
          <button className="md:hidden p-2 text-neutral-950" onClick={() => setOpen(!open)} aria-label="Menu">
            {open ? <X className="w-6 h-6 stroke-[2.5]" /> : <Menu className="w-6 h-6 stroke-[2.5]" />}
          </button>
        </div>
      </div>

      {/* DARKENED NAV LINKS FOR MOBILE */}
      {open && (
        <div className="md:hidden glass border-t border-border backdrop-blur-lg bg-white/90">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link 
                key={l.to} 
                to={l.to} 
                className="py-2 text-neutral-950 hover:text-primary font-bold tracking-wide transition"
                activeProps={{ className: "text-primary font-black" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}