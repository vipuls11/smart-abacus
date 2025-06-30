// components/CustomButton.jsx
import React from 'react';

const CustomButton = ({ label, color, onClick }) => {
  const buttonStyle = {
    backgroundColor: `var(${color})`,
    padding: '8px 18px',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
  };

  return (
    <button style={buttonStyle} onClick={onClick}>
      {label}
    </button>
  );
};

export default CustomButton;
