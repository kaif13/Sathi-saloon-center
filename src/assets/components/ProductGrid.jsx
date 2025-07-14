import React from "react";
import Products from "../../products";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";

function ProductGrid() {
  const Products = useSelector((state) => state.product.filteredItems);

  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg-grid-cols- xl:grid-cols-4 gap-16 my-10">
      {Products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductGrid;
