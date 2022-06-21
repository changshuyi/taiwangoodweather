import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggle }) => {
  return (
    <nav className="flex justify-between item-center h-16 text-black relative shadow-sm font-mono pt-3 bg-gradient-to-r to-blue-100 from-cyan-80 ">
      <Link to="/" className="pl-8 text-2xl">
        寶島好天氣
      </Link>
      <div className="px4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="pr-8 md:block hidden">
        <Link to="/taiwangoodweather" className="pl-4">
          全台及時天氣
        </Link>
        <Link to="/week" className="pl-4">
          未來一周預報
        </Link>
        <Link to="/about" className="pl-4">
          關於我
        </Link>
        <Link to="/contact" className="pl-4">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
