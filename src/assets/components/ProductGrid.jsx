import React, { useState } from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

function ProductGrid() {
  const products = useSelector((state) => state.product.filteredItems);
  const [visibleCount, setVisibleCount] = useState(8);

  const handleToggle = () => {
    if (visibleCount >= products.length) {
      setVisibleCount(8); // Reset to 8
    } else {
      setVisibleCount((prev) => prev + 8); // Show 8 more
    }
  };

  return (
    <div className="my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.slice(0, visibleCount).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length > 8 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={handleToggle}
            className="bg-black/85 text-white px-6 py-2 rounded hover:bg-black transition duration-300"
          >
            {visibleCount >= products.length ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductGrid;
