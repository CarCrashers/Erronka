

function floatingInput({
    id,
    children,
    type,
    value,
    onChange,
    placeholder,
    readOnly = false,
    disabled = false,
    required = false,
    name,
    
}){
    return( 
        <div className="form-floating">
            <input 
                id={id} 
                type={type} 
                value={value} 
                placeholder={placeholder} 
                onChange={onChange} 
                readOnly={readOnly} 
                disabled={disabled}
                required={required}
                name = {name} 
                className="form-control border-1 border-secondary"/>
            <label htmlFor={id}>{children}</label>
        </div>
    )
}

export default floatingInput;
