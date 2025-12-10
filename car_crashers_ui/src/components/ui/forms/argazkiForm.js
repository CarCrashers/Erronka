import React from 'react';

// Nota: He cambiado el nombre a Mayúscula (ArgazkiForm) por convención de React
const ArgazkiForm = ({ handleFileChange }) => {
  return (
    <div className="card border-0 mt-4">
      <div className="card-body p-0">
        <h3 className="mb-3">Ibilgailuaren argazkiak</h3>
        
        {/* Área de subida personalizada */}
        <div className="mb-3">
            {/* El input real está oculto (d-none) pero funciona al hacer clic en el label */}
            <input 
                type="file" 
                id="fotosVehiculo" 
                className="d-none" 
                multiple 
                accept="image/*" 
                onChange={handleFileChange}
            />
            
            {/* El label es lo que ve el usuario (el cuadro punteado) */}
            <label 
                htmlFor="fotosVehiculo" 
                className="d-flex flex-column align-items-center justify-content-center p-5 border rounded bg-light"
                style={{ 
                    borderStyle: 'dashed !important', 
                    borderWidth: '2px', 
                    borderColor: '#ccc', 
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#f8f9fa'}
            >
                {/* Icono (usamos un emoji grande o un svg si tienes) */}
                <span style={{ fontSize: '3rem', marginBottom: '1rem' }}>📷</span>
                
                <h5 className="fw-bold text-primary mb-1">Egin klik argazkiak igotzeko</h5>
                <p className="text-muted small mb-0">
                    Igo angelu ezberdinetako argazkiak balorazio hobea lortzeko.
                </p>
            </label>
        </div>
      </div>
    </div>
  );
};

export default ArgazkiForm;