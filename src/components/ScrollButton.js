
import React, { useState } from 'react';
import { ScrollButtonStyle } from './Navbar/NavbarElements';

const ScrollButton = () => {

  const [setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true)
    }
    else if (scrolled <= 300) {
      setVisible(false)
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
      <ScrollButtonStyle onClick={scrollToTop} />
  );
}

export default ScrollButton;