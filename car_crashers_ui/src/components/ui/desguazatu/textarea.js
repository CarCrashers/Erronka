import React from 'react';

const Textarea = ({ label, name, placeholder, value, onChange, rows = 4, className = '' }) => {
  return (
    <div className={`mb-3 ${className}`}>
      <label className="form-label fw-bold" htmlFor={name}>{label}</label>
      <textarea 
        className="form-control" 
        id={name} 
        name={name} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        rows={rows}
      />
    </div>
  );
};

export default Textarea;