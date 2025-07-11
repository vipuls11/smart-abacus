// components/CustomButton.jsx
import React from 'react';

const CustomButton = ({ label, color, onClick, width, border, colortext}) => {
  const buttonStyle = {
    backgroundColor: `var(${color})`,
    width: width || 'auto',
    border: `2px solid var(${border})`,
    color: `var(${colortext})`
  };

  return (
    <button style={buttonStyle} onClick={onClick} className='custom_button my-2'>
      {label}
    </button>
  );
};

export default CustomButton;
