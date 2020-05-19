import React from 'react';
import '../../../../style/button.scss';

const Button = ({ label }) => {
  return (
    <div>
      <button type="button">{label}</button>
    </div>
  );
}

export {Button};