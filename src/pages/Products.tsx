// import { useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import { products } from "@/data/products";
// import { ProductCard } from "@/components/ProductCard";

// // Exact matching array of categories from your Home page
// const storeCategories = [
//   "Gift & Toys",
//   "Baby Item",
//   "Birthday Item",
//   "Decoration Item",
//   "One Gram Jewellery",
//   "Fancy",
//   "Ladies Hand Bags",
//   "Plastic",
//   "Books & Stationery",
//   "Cosmetics",
//   "Walkers & Cycles",
//   "Natural Plants",
//   "Artificial Flowers",
//   "Lighting Item",
//   "Games & Sports",
//   "Marble Item",
//   "Study Table",
//   "Chocolates",
//   "Bags",
//   "General Item",
//   "Steel Items",
//   "Milton",
//   "Borosil",
//   "Cello",
// ];

// export default function ProductsPage() {
//   const [searchParams, setSearchParams] = useSearchParams();
  
//   // Read category parameter from URL route, defaults back to "All"
//   const activeCategory = searchParams.get("category") || "All";

//   // Sync state changes back to URL parameters safely
//   const handleCategoryChange = (category: string) => {
//     if (category === "All") {
//       searchParams.delete("category");
//     } else {
//       searchParams.set("category", category);
//     }
//     setSearchParams(searchParams);
//   };

//   // Filter strategy base logic comparing strings cleanly case-insensitive
//   const filteredProducts = activeCategory === "All" 
//     ? products 
//     : products.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

//   // Automatically scroll users to top of catalog section on component navigation load
//   useEffect(() => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }, [activeCategory]);

//   return (
//     <>
//       {/* HERO BANNER SECTION */}
//       <section className="pt-32 pb-12 bg-gradient-blush">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.p 
//             initial={{ opacity: 0 }} 
//             animate={{ opacity: 1 }} 
//             className="text-xs uppercase tracking-widest text-primary font-semibold"
//           >
//             Shop the collection
//           </motion.p>
          
//           <motion.h1 
//             initial={{ opacity: 0, y: 20 }} 
//             animate={{ opacity: 1, y: 0 }} 
//             transition={{ delay: 0.1 }} 
//             className="font-display text-4xl md:text-6xl font-bold mt-3 text-neutral-900"
//           >
//             {activeCategory === "All" ? (
//               <>Find Something <span className="text-gradient">Special</span></>
//             ) : (
//               <>Premium <span className="text-gradient">{activeCategory}</span></>
//             )}
//           </motion.h1>
          
//           <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
//             Explore premium quality items handpicked across our departments at the best guaranteed prices in Vizag.
//           </p>
//         </div>
//       </section>

//       {/* FILTER BUTTONS & PRODUCTS GRID */}
//       <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Dynamic Category Row - Now containing all 24 departments */}
//         <div className="flex flex-wrap justify-center gap-3 mb-10">
//           <button
//             onClick={() => handleCategoryChange("All")}
//             className={`px-6 py-2.5 rounded-full text-sm font-medium transition whitespace-nowrap ${
//               activeCategory === "All"
//                 ? "bg-gradient-primary text-primary-foreground shadow-soft"
//                 : "bg-card border border-border text-foreground hover:border-primary"
//             }`}
//           >
//             All Products
//           </button>

//           {storeCategories.map((c) => (
//             <button
//               key={c}
//               onClick={() => handleCategoryChange(c)}
//               className={`px-6 py-2.5 rounded-full text-sm font-medium transition whitespace-nowrap ${
//                 activeCategory.toLowerCase() === c.toLowerCase()
//                   ? "bg-gradient-primary text-primary-foreground shadow-soft"
//                   : "bg-card border border-border text-foreground hover:border-primary"
//               }`}
//             >
//               {c}
//             </button>
//           ))}
//         </div>

//         {/* Catalog Fallback Grid validation */}
//         {filteredProducts.length === 0 ? (
//           <div className="text-center py-20">
//             <p className="text-xl text-muted-foreground font-medium">No products listed under "{activeCategory}" right now.</p>
//             <p className="text-sm text-neutral-400 mt-1">We are updating our stock shelves daily!</p>
//             <button 
//               onClick={() => handleCategoryChange("All")}
//               className="mt-6 inline-flex items-center justify-center bg-gradient-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:scale-105 transition"
//             >
//               View All Available Stock
//             </button>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredProducts.map((p, i) => (
//               <ProductCard key={p.id} product={p} index={i} />
//             ))}
//           </div>
//         )}
//       </section>
//     </>
//   );
// }








import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";

// Exact matching array of categories from your Home page
const storeCategories = [
  "Gift & Toys",
  "Baby Item",
  "Birthday Item",
  "Decoration Item",
  "One Gram Jewellery",
  "Fancy",
  "Ladies Hand Bags",
  "Plastic",
  "Books & Stationery",
  "Cosmetics",
  "Walkers & Cycles",
  "Natural Plants",
  "Artificial Flowers",
  "Lighting Item",
  "Games & Sports",
  "Marble Item",
  "Study Table",
  "Chocolates",
  "Bags",
  "General Item",
  "Steel Items",
  "Milton",
  "Borosil",
  "Cello",
];

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  // Read category parameter from URL route, defaults back to "All"
  const activeCategory = searchParams.get("category") || "All";

  // Sync state changes back to URL parameters safely
  const handleCategoryChange = (category: string) => {
    if (category === "All") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  // Filter strategy base logic comparing strings cleanly case-insensitive
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

  // Automatically scroll users to top of catalog section on component navigation load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeCategory]);

  return (
    <>
      {/* HERO BANNER SECTION */}
      <section className="pt-32 pb-12 bg-gradient-blush">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-xs uppercase tracking-widest text-primary font-semibold"
          >
            Shop the collection
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.1 }} 
            className="font-display text-4xl md:text-6xl font-bold mt-3 text-neutral-900"
          >
            {activeCategory === "All" ? (
              <>Find Something <span className="text-gradient">Special</span></>
            ) : (
              <>Premium <span className="text-gradient">{activeCategory}</span></>
            )}
          </motion.h1>
          
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Explore premium quality items handpicked across our departments at the best guaranteed prices in Vizag.
          </p>
        </div>
      </section>

      {/* FILTER BUTTONS & PRODUCTS GRID */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dynamic Category Row - Now containing all 24 departments */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-10">
          <button
            onClick={() => handleCategoryChange("All")}
            className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition whitespace-nowrap ${
              activeCategory === "All"
                ? "bg-gradient-primary text-primary-foreground shadow-soft"
                : "bg-card border border-border text-foreground hover:border-primary"
            }`}
          >
            All Products
          </button>

          {storeCategories.map((c) => (
            <button
              key={c}
              onClick={() => handleCategoryChange(c)}
              className={`px-4 py-2 md:px-6 md:py-2.5 rounded-full text-xs md:text-sm font-medium transition whitespace-nowrap ${
                activeCategory.toLowerCase() === c.toLowerCase()
                  ? "bg-gradient-primary text-primary-foreground shadow-soft"
                  : "bg-card border border-border text-foreground hover:border-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Catalog Fallback Grid validation */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground font-medium">No products listed under "{activeCategory}" right now.</p>
            <p className="text-sm text-neutral-400 mt-1">We are updating our stock shelves daily!</p>
            <button 
              onClick={() => handleCategoryChange("All")}
              className="mt-6 inline-flex items-center justify-center bg-gradient-primary text-primary-foreground px-6 py-2.5 rounded-full text-sm font-medium shadow-md hover:scale-105 transition"
            >
              View All Available Stock
            </button>
          </div>
        ) : (
          /* Modified grid rules below: grid-cols-2 on small mobile devices and up */
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
            {filteredProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}