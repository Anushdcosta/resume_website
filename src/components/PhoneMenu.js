import React, { useState, useEffect } from 'react';

const Phonemenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Push a new state when the menu is opened
      window.history.pushState(null, null, window.location.href);
    }
  };

  useEffect(() => {
    const handlePopState = () => {
      if (isOpen) {
        setIsOpen(false); // Close the menu when the back button is pressed
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isOpen]);

  return (
    <div id='forphone'>
      <div className="hamburger-menu" onClick={toggleMenu}>
        &#9776;
      </div>
      <div className={`overlay ${isOpen ? 'open' : ''}`}>
        <div className="overlay-content">
          <span className="closebtn" onClick={toggleMenu}>&times;</span>
          <a href="#home" onClick={toggleMenu}>Home</a>
          <a href="#about" onClick={toggleMenu}>About</a>
          <a href="#projects" onClick={toggleMenu}>Projects</a>
          <a href="#contact" onClick={toggleMenu}>Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Phonemenu;
