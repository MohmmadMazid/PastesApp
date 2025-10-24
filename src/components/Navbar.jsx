import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-md backdrop-blur-md">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between px-5 py-3">
        {/* Brand / Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-indigo-400 tracking-wide hover:text-indigo-300 transition-colors duration-200"
        >
          Keep<span className="text-red-500">ly</span>
        </Link>

        {/* Nav Links */}
        <div className="flex gap-6 mt-3 sm:mt-0">
          <Link
            to="/"
            className={`text-lg font-medium hover:text-indigo-400 transition-colors duration-200 ${
              location.pathname === "/" ? "text-indigo-400" : "text-gray-300"
            }`}
          >
            Home
          </Link>
          <Link
            to="/paste"
            className={`text-lg font-medium hover:text-indigo-400 transition-colors duration-200 ${
              location.pathname === "/paste"
                ? "text-indigo-400"
                : "text-gray-300"
            }`}
          >
            Pastes
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
