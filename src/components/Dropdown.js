import React from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen }) => {
  return (
    <div
      className={
        isOpen
          ? 'grid grid-rows-4 text-center items-center bg-yellow-500'
          : 'hidden'
      }
    >
      <Link to="/week" className="p-4">
        各地未來五天預報
      </Link>
      <Link to="/taiwangoodweather" className="p-4">
        全台及時天氣
      </Link>
      {/* <Link to="/about" className="p-4">
        About
      </Link> */}
      {/* <Link to="/contact" className="p-4">
        Contact
      </Link> */}
    </div>
  );
};

export default Dropdown;
