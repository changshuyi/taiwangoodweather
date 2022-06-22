import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages';
import About from './pages/about';
import Week from './pages/week';

import { Routes, Route } from 'react-router-dom';
import Dropdown from './components/Dropdown';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const hideWeek = () => {
      if (window.innerWidth > 720 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', hideWeek);

    return () => {
      window.removeEventListener('resize', hideWeek);
    };
  });

  return (
    <div
      style={{
        background:
          'linear-gradient(to right, #232526, #414345)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */,
      }}
    >
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Routes>
        <Route path="/taiwangoodweather" exact element={<Home />}></Route>
        <Route path="/week" element={<Week />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
