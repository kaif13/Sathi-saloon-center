import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Features/cart/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div className="shadow-lg rounded-md cursor-pointer">
      {/* Only wrap image and title in Link */}
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.title}
          className="px-11 h-45 object-contain"
        />
        <div className="bg-gray-50 p-4">
          <h2 className="text-lg font-semibold my-4">
            {product.title.substring(0, 25) + "..."}
          </h2>
          <p className="text-sm text-zinc-500 border-b-2 pb-4">
            {product.description.substring(0, 70) + "..."}
          </p>
        </div>
      </Link>

      {/* Add to Cart section outside Link */}
      <div className="flex justify-between p-4 pt-0 items-center">
        <p className="text-xl font-semibold">₹ {product.price}</p>
        <button
          className="w-55%  bg-zinc-200 px-8 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-zinc-300"
          onClick={(e) => {
            e.stopPropagation(); // prevent bubbling to Link if needed
            dispatch(addToCart(product));
          }}
        >
          <ShoppingCart /> Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
