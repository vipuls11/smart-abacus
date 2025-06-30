// components/CustomButton.jsx
import React from 'react';

const CustomButton = ({ label, color, onClick }) => {
  const buttonStyle = {
    backgroundColor: `var(${color})`,
  };

  return (
    <button style={buttonStyle} onClick={onClick} className='custom_button'>
      {label}
    </button>
  );
};

export default CustomButton;
