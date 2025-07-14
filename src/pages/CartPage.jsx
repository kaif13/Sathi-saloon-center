import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Plus, Minus, Trash2 } from "lucide-react";
import { updateQuantity } from "../Features/cart/cartSlice";
import { removeFromCart } from "../Features/cart/cartSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // �� Add this line
import { clearCart } from "../Features/cart/cartSlice";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate(); // 👈 Add this line

  const handleBackToShop = () => {
    dispatch(clearCart()); // ✅ Clear the cart
    setShowPopup(false); // ✅ Close the popup
    navigate("/"); // ✅ Navigate to home
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h2>Your Cart is Emty</h2>
          <p className="Text-gray-600 mb-4">
            {" "}
            Add some Products to Your Cart to see items here
          </p>
          <Link
            to="/"
            className="inline-block bg-zinc-200 px-6 py-2 rounded-lg hover:bg-zinc-300"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-20 py-8">
      <h2 className="text-2xl font-bold mb-8">Shopping Cart</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cart Items Section */}
        <div className="lg:col-span-2 shadow-md p-4 rounded-md">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row items-center gap-4 py-4 border-b"
            >
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-28 h-24 object-cover rounded"
                />
              </Link>
              <div className="flex-1 w-full">
                <Link
                  to={`/product/${item.id}`}
                  className="font-semibold hover:text-blue-600 block mb-1"
                >
                  {item.title}
                </Link>
                <p className="text-gray-600 mb-1">Price: ₹ {item.price}</p>

                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <button
                    className="p-1 rounded-full hover:bg-gray-100"
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: Math.max(0, item.quantity - 1),
                        })
                      )
                    }
                  >
                    <Minus size={16} />
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="p-1 rounded-full hover:bg-gray-100"
                    onClick={() =>
                      dispatch(
                        updateQuantity({
                          id: item.id,
                          quantity: item.quantity + 1,
                        })
                      )
                    }
                  >
                    <Plus size={16} />
                  </button>
                  <div
                    className="ml-4 text-red-500 hover:text-red-700 cursor-pointer"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    <Trash2 size={20} />
                  </div>
                </div>

                <div className="text-right mt-2">
                  <p className="font-bold">
                    ₹ {(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white shadow-md p-6 rounded-md">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Sub Total</span>
                <span>₹ {total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="border-t pt-2 font-bold">
                <div className="flex justify-between">
                  <span>Total</span>
                  <span>₹ {total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <button
                onClick={() => setShowPopup(true)}
                className="w-full bg-zinc-200 px-6 py-3 rounded-lg hover:bg-zinc-300"
              >
                Proceed To Checkout
              </button>

              {showPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
                  <div className="bg-white rounded-2xl p-8 w-full max-w-2xl text-center shadow-lg">
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                      🚧 Demo Checkout
                    </h2>
                    <p className="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed">
                      This is a demo portfolio project built to showcase
                      frontend development skills. No real purchases can be
                      made. The cart will now be cleared and you’ll be returned
                      to the shop.
                    </p>
                    <button
                      onClick={handleBackToShop}
                      className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition"
                    >
                      Back to Shop
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
