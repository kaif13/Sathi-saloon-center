import React from "react";
import { useSelector } from "react-redux";
import ProductGrid from "../assets/components/ProductGrid";
import Footer from "../assets/components/Footer";
import Carousel from "../assets/components/Carousel";

function Home() {
  const selectedCategory = useSelector(
    (state) => state.product.selectedCategory
  );
  const searchTerm = useSelector((state) => state.product.searchTerm); // ✅ add this

  const shouldShowCarousel = selectedCategory === "ALL" && searchTerm === ""; // ✅ updated logic

  return (
    <div>
      {/* ✅ Show carousel only if no search and category is "ALL" */}
      {shouldShowCarousel && (
        <div className="bg">
          <Carousel />
        </div>
      )}

      <div className="container mx-auto my-10 px-4">
        <ProductGrid />
      </div>

      <Footer />
    </div>
  );
}

export default Home;
