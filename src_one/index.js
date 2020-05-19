import React from 'react';
import '../style/button.scss';

const CustomButton = ({ label }) => {
  return (
    <div>
      <button type="button">{label}</button>
    </div>
  );
}

export default CustomButton;