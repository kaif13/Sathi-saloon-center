import React from "react";
import { ShoppingCart, User, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../../Features/products/ProductSlice";
import Categories from "./Categories";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { useEffect } from "react";

import logo from "/src/assets/img/logo.png";

function Navbar() {
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.product.searchTerm);

  //cart
  const cartItems = useSelector((state) => state.cart.items);
  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  //user toggle
  const handleUser = () => {
    setIsOpen(!isOpen);
  };

  // your existing hooks
  const [showSearch, setShowSearch] = useState(false);
  const searchRef = useRef(null);

  // Close search if clicked outside (only on phone)
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target) &&
        window.innerWidth < 640
      ) {
        setShowSearch(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="w-full bg-gray-200 text-black py-2 overflow-hidden whitespace-nowrap flex items-center">
          <p className="animate-marquee text-xs sm:text-sm md:text-base px-4 mx-auto">
            ALL Ustraa product images and details are used for educational
            purposes only.
          </p>
        </div>

        <div className="py-2 px-4 sm:px- md:px-8 shadow-md">
          <div className="container mx-auto flex flex-wrap md:flex-nowrap justify-between items-center">
            {/* Logo Section */}
            <div className="flex items-center mb-2 md:mb-0">
              <Link
                to="/"
                onClick={() => dispatch(setSelectedCategory("ALL"))}
                className="py-2 px-1 rounded"
              >
                <img
                  src={logo}
                  alt="Logo"
                  className="w-32 sm:w-40 md:w-48 pt-2 cursor-pointer"
                />
              </Link>
            </div>

            {/* Icons Section */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* User Icon + Dropdown */}
              <div className="relative">
                <User
                  size={40}
                  className="cursor-pointer bg-gray-100 px-2 py-2 rounded-full"
                  onClick={handleUser}
                />
                {isOpen && (
                  <div className="absolute right-0 top-12 z-10 bg-zinc-50 p-4 w-36 flex flex-col gap-1 shadow-md rounded">
                    <Link to="/" className="hover:underline">
                      Sign
                    </Link>
                    <Link to="/" className="hover:underline">
                      My&nbsp;Account
                    </Link>
                  </div>
                )}
              </div>

              {/* Cart Icon */}
              <div className="relative">
                <Link to="/cart">
                  <ShoppingCart
                    size={40}
                    className="cursor-pointer bg-gray-100 px-2 py-2 rounded-full"
                  />
                  {itemCount > 0 && (
                    <span className="absolute -top-1.5 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </Link>
              </div>

              {/* Mobile Search Toggle */}
              <div className="md:hidden">
                <button
                  type="button"
                  className="p-1"
                  onClick={() => setShowSearch(!showSearch)}
                  aria-label="Toggle Search"
                >
                  <Search
                    size={40}
                    className="cursor-pointer bg-gray-100 px-2 py-2 rounded-full"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="bg-white shadow-md">
        {!location.pathname.startsWith("/product/") &&
          location.pathname !== "/cart" && (
            <nav className="relative container mx-auto md:py-6 py-2 pr-4 pl-4">
              <div className="flex items-center justify-between w-full flex-wrap md:flex-nowrap gap-4">
                {/* Categories - always shown */}
                <Categories />

                {/* Desktop: Search always visible */}
                <div className="hidden sm:block w-full sm:w-auto">
                  <form className="w-full sm:w-auto">
                    <input
                      type="text"
                      placeholder="Search Product"
                      className="bg-zinc-100 rounded-md border border-zinc-200 focus:outline-none py-3 px-4 w-full sm:w-[250px]"
                      value={searchTerm}
                      onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                    />
                  </form>
                </div>

                {/* Phone only: Floating search input */}
                {showSearch && (
                  <div
                    ref={searchRef}
                    className="absolute top-0 left-0 w-full z-30 sm:hidden px-4"
                  >
                    <form className="w-full bg-white shadow-md rounded-md">
                      <input
                        type="text"
                        placeholder="Search Product"
                        className="bg-zinc-100 rounded-md border border-zinc-200 focus:outline-none py-4 px-4 w-full text-base"
                        value={searchTerm}
                        onChange={(e) =>
                          dispatch(setSearchTerm(e.target.value))
                        }
                        autoFocus
                      />
                    </form>
                  </div>
                )}
              </div>
            </nav>
          )}
      </header>
    </>
  );
}

export default Navbar;
