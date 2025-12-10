import React from 'react';

const ArgazkiForm = ({ handleFileChange }) => {
  return (
    <div className="card border-0 mt-4">
      <div className="card-body p-0">
        <h3 className="mb-3">Ibilgailuaren argazkiak</h3>
        
        <div className="mb-3">
            <input type="file" id="fotosVehiculo" className="d-none" multiple accept="image/*" onChange={handleFileChange}/>
            
            <label htmlFor="fotosVehiculo" className="upload-area-label d-flex flex-column align-items-center justify-content-center p-5 rounded">
                <span className="upload-icon">📷</span>
                
                <h5 className="fw-bold text-primary mb-1">Egin klik argazkiak igotzeko</h5>
                <p className="text-muted small mb-0">Igo angelu ezberdinetako argazkiak balorazio hobea lortzeko.</p>
            </label>
        </div>
      </div>
    </div>
  );
};

export default ArgazkiForm;