import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  mrp: number;
  image: string;
  qty: number;
}

interface CartContextType {
  items: CartItem[];
  add: (item: Omit<CartItem, "qty">) => void;
  remove: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
  total: number;
  count: number;
}

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem("bc_cart");
      if (stored) setItems(JSON.parse(stored));
    } catch {}
  }, []);

  useEffect(() => {
    try { localStorage.setItem("bc_cart", JSON.stringify(items)); } catch {}
  }, [items]);

  const add: CartContextType["add"] = (item) => {
    setItems((cur) => {
      const exists = cur.find((i) => i.id === item.id);
      if (exists) return cur.map((i) => i.id === item.id ? { ...i, qty: i.qty + 1 } : i);
      return [...cur, { ...item, qty: 1 }];
    });
  };
  const remove = (id: string) => setItems((cur) => cur.filter((i) => i.id !== id));
  const updateQty = (id: string, qty: number) =>
    setItems((cur) => cur.map((i) => i.id === id ? { ...i, qty: Math.max(1, qty) } : i));
  const clear = () => setItems([]);

  const total = items.reduce((s, i) => s + i.price * i.qty, 0);
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <CartContext.Provider value={{ items, add, remove, updateQty, clear, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
