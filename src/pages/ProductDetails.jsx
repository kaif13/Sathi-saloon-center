import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../Features/cart/cartSlice";
import { ArrowLeft } from "lucide-react";
import ProductCarousel from "../../src/assets/components/ProductCarousel"; // Adjust path if needed

function ProductDetails() {
  const { id } = useParams(); // Assuming id is a parameter in the URL
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.product.items.find((p) => p.id === parseInt(id))
  ); // Assuming products is
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Return To Home
          </Link>
        </div>
      </div>
    );
  } // Assuming product is a Redux state (or fetched from API)

  return (
    <div className="container mx-auto px-5 py-8">
      <div>
        <Link
          to="/"
          className="flex items-center gap-1 text-black hover:underline mb-8 lg:pl-20"
        >
          <ArrowLeft size={16} className="cursor-pointer" />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4 md:px-8">
          <div className="shadow-md p-4 rounded w-full max-w-md md:max-w-xl mx-auto">
            <ProductCarousel images={product.images || [product.image]} />
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-4">
              {product.title}
            </h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="mb-6">
              <span className="text-2xl sm:text-3xl font-bold">
                ₹ {product.price}
              </span>
            </div>
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Category</h3>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm">
                {product.category}
              </span>
            </div>
            <button
              className="w-full sm:w-auto bg-zinc-200 px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-zinc-300"
              onClick={() => dispatch(addToCart(product))}
            >
              <ShoppingCart /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
