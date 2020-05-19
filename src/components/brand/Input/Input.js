import React from 'react';
import '../../../../style/input-text.scss';

const Input = ({ label }) => {
  return (
    <div className="input-label">
      <label className="" for={label}>{label}</label>
      <input type="text" name={label} placeholder={`Enter ${label}`} />
    </div>
  );
}

export { Input };