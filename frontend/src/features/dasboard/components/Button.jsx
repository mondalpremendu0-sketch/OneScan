import React from 'react';
import '../styles/Button.css';

const Button = ({ children, fullWidth = true, onClick }) => {
  return (
    <button 
      className={`gradient-btn ${fullWidth ? 'full-width' : ''}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;