import React from 'react';

const Textarea = ({ label, name, placeholder, value, onChange, rows = 4, className = '' }) => {
  return (
    <div className={`form-group ${className}`}>
      <label className="form-label" htmlFor={name}>{label}</label>
      <textarea className="form-textarea" id={name} name={name} placeholder={placeholder} value={value} onChange={onChange} rows={rows}/>
    </div>
  );
};

export default Textarea;