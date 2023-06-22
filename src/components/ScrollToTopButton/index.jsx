import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import { ArrowUpward } from '@material-ui/icons';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 100); // Exibe o botão quando o scroll for superior a 100 pixels
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adiciona uma animação de scroll suave
    });
  };

  // Registra um observador de scroll no componente montado
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <IconButton
          onClick={scrollToTop}
          color="primary"
          aria-label="Scroll to top"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            zIndex: 9999,
            backgroundColor: '#46166B'
          }}
        >
          <ArrowUpward style={{
            color: 'white'
          }} />
        </IconButton>
      )}
    </div>
  );
};
