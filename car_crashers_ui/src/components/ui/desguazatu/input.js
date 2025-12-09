import React from "react";

function Input() {

    const Input = ({ label, name, type = 'text', placeholder, value, onChange, required = false, className = '' }) => {
    return (
        <div className={`form-group ${className}`}>
            <label className="form-label" htmlFor={name}>
                {label} {required && <span className="required-asterisk">*</span>}
            </label>
            <input className="form-input" type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={onChange} required={required}/>
        </div>
        );
    };
}

export default Input;