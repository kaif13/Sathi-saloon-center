import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedCategory } from "../../Features/products/ProductSlice";

function Categories() {
  const categories = [
    "ALL",
    "Beard Care",
    "Face Care",
    "Fragrance",
    "Facial Kit",
    "Trimmers",
    "Hair Care",
  ];

  const dispatch = useDispatch();
  return (
    <div className="flex flex-wrap gap-4">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => dispatch(setSelectedCategory(cat))}
          className="bg-gray-300 text-black rounded-md
             py-1.5 px-3 text-xs
             md:py-2 md:px-4 md:text-sm
             active:scale-105 hover:bg-gray-400
             transition-all ease-in"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Categories;
