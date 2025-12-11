function FloatingTextarea({
  id,
  children,
  value,
  onChange,
  placeholder,
  readOnly = false,
  disabled = false,
  required = false,
  name,
  rows = 3,
}) {
  return (
    <div className="form-floating">
      <textarea
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        readOnly={readOnly}
        disabled={disabled}
        required={required}
        name={name}
        rows={rows}
        className="form-control border-1 border-secondary"
      />
      <label htmlFor={id}>{children}</label>
    </div>
  );
}

export default FloatingTextarea;
