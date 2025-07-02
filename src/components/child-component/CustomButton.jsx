// components/CustomButton.jsx
import React from 'react';

const CustomButton = ({ label, color, onClick }) => {
  const buttonStyle = {
    backgroundColor: `var(${color})`,
  };

  return (
    <button style={buttonStyle} onClick={onClick} className='custom_button my-2'>
      {label}
    </button>
  );
};

export default CustomButton;
