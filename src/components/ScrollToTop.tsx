import React, { useState, useEffect } from 'react';
import { HiOutlineArrowUp } from 'react-icons/hi';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 p-3 bg-dark-card text-dark-accent rounded-full border border-slate-700 shadow-2xl hover:bg-dark-accent hover:text-dark-bg transition-all duration-300 z-50"
      aria-label="Scroll back to top"
    >
      <HiOutlineArrowUp className="w-6 h-6" aria-hidden="true" />
    </button>
  );
};

export default ScrollToTop;
