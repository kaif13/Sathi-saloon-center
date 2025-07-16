import React from "react";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="bg-slate-900 shadow-md">
      <div className="container mx-auto px-5">
        <div className="min-h-16 px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-10 gap-6">
            <h2 className="text-2xl sm:text-3xl pl-8 md:text-4xl font-bold text-white">
              Subscribe Our Newsletter
            </h2>
            <form className="w-full md:w-1/2 relative">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="py-4 px-4 rounded shadow-md w-full"
              />
              <button className="bg-gray-200 py-3 px-4 rounded-full absolute right-3 top-1">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-slate-800 text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 md:gap-16">
            {/* Company Info */}
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold tracking-wide text-white pb-4">
                SATHI SALOON CENTER
              </h1>
              <p className="text-sm sm:text-base">
                A modern men's grooming shop featuring beard oils, shampoos,
                face washes, and more. Clean design with product images,
                details, and organized categories for easy browsing.
              </p>
              <div className="flex items-center gap-4 sm:gap-6 mt-5">
                <Facebook
                  size={36}
                  className="bg-white text-black rounded-md p-2 cursor-pointer"
                />
                <Instagram
                  size={36}
                  className="bg-white text-black rounded-md p-2 cursor-pointer"
                />
                <Youtube
                  size={36}
                  className="bg-white text-black rounded-md p-2 cursor-pointer"
                />
                <Twitter
                  size={36}
                  className="bg-white text-black rounded-md p-2 cursor-pointer"
                />
              </div>
            </div>

            {/* Pages */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold my-4">Pages</h2>
              <ul className="space-y-1 text-sm sm:text-base">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/">FAQs</Link>
                </li>
                <li>
                  <Link to="/">Contact</Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold my-4">
                Categories
              </h2>
              <ul className="space-y-1 text-sm sm:text-base">
                <li>
                  <Link to="/">Beard Care</Link>
                </li>
                <li>
                  <Link to="/">Hair Styling</Link>
                </li>
                <li>
                  <Link to="/">Shaving</Link>
                </li>
                <li>
                  <Link to="/">Fragrance</Link>
                </li>
                <li>
                  <Link to="/">Trimmer</Link>
                </li>
                <li>
                  <Link to="/">Hair Care</Link>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold my-4">
                Address
              </h2>
              <ul className="space-y-1 text-sm sm:text-base">
                <li>
                  <Link to="/">Station Road</Link>
                </li>
                <li>
                  <Link to="/">Ballia – 277001</Link>
                </li>
                <li>
                  <Link to="/">Uttar Pradesh, India</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
