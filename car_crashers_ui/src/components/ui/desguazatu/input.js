const Input = ({ label, name, type = 'text', placeholder, value, onChange, required = false }) => {
    
    return (
        <div className="mb-3">
            <label htmlFor={name} className="form-label fw-bold">
                {label} {required && <span className="text-danger">*</span>}
            </label>
            <input  className="form-control"  type={type}  id={name}  name={name}  placeholder={placeholder}  value={value || ''} onChange={onChange} required={required}/>
        </div>
    );
};

export default Input;