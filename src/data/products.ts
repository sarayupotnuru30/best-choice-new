import hb1 from "@/assets/products/handbags/handbag-1.jpg";
import hb2 from "@/assets/products/handbags/handbag-2.jpg";
import hb3 from "@/assets/products/handbags/handbag-3.jpg";
import sb1 from "@/assets/products/schoolbags/schoolbag-1.jpg";
import sb2 from "@/assets/products/schoolbags/schoolbag-2.jpg";
import sb3 from "@/assets/products/schoolbags/schoolbag-3.jpg";
import lb1 from "@/assets/products/lunchbags/lunchbag-1.jpg";
import lb2 from "@/assets/products/lunchbags/lunchbag-2.jpg";
import lb3 from "@/assets/products/lunchbags/lunchbag-3.jpg";

export interface Product {
  id: string;
  name: string;
  category: "Handbags" | "School Bags" | "Lunch Bags";
  image: string;
  mrp: number;
  price: number;
}

export const products: Product[] = [
  { id: "hb-1", name: "Blush Rose Handbag", category: "Handbags", image: hb1, mrp: 1799, price: 999 },
  { id: "hb-2", name: "Ivory Gold Tote", category: "Handbags", image: hb2, mrp: 2299, price: 1499 },
  { id: "hb-3", name: "Pink Mini Crossbody", category: "Handbags", image: hb3, mrp: 1599, price: 899 },
  { id: "sb-1", name: "Unicorn Pink Backpack", category: "School Bags", image: sb1, mrp: 1499, price: 849 },
  { id: "sb-2", name: "Cartoon Kids Backpack", category: "School Bags", image: sb2, mrp: 1299, price: 799 },
  { id: "sb-3", name: "Classic Pink School Bag", category: "School Bags", image: sb3, mrp: 1399, price: 899 },
  { id: "lb-1", name: "Blush Insulated Lunch Bag", category: "Lunch Bags", image: lb1, mrp: 799, price: 449 },
  { id: "lb-2", name: "Bunny Hearts Lunch Bag", category: "Lunch Bags", image: lb2, mrp: 899, price: 549 },
  { id: "lb-3", name: "Rose Tote Lunch Bag", category: "Lunch Bags", image: lb3, mrp: 749, price: 499 },
];

export const categories = ["Handbags", "School Bags", "Lunch Bags"] as const;
