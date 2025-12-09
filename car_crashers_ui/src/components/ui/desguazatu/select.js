import React from 'react';

const Select = ({ label, name, value, onChange, options, required = false, className = '' }) => {
  return (
    <div className={`form-group ${className}`}>
      <label className="form-label" htmlFor={name}>
        {label} {required && <span className="required-asterisk">*</span>}
      </label>
      <select className="form-select" id={name} name={name} value={value} onChange={onChange} required={required}>
        <option value="">Aukera bat hautatu...</option>
            {options.map((option) => (
        <option key={option.value} value={option.value}>{option.label}</option>))}
      </select>
    </div>
  );
};

export default Select;