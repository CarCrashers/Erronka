import React from 'react';

const argazkiForm = ({ handleFileChange }) => {
  return (
    <div className="card border-0 mt-3">
      <div className="card-body p-0">
        <h3 className="mb-3">Ibilgailuaren argazkiak</h3>
        
        <div className="mb-3">
          <label htmlFor="fotosVehiculo" className="form-label fw-bold">Igo argazkiak</label>
          <input className="form-control" type="file" id="fotosVehiculo" multiple accept="image/*" onChange={handleFileChange}/>
          <div className="form-text text-muted">
            Argazki bat edo gehiago hautatu ditzakezu (Ctrl tekla sakatuta).
          </div>
        </div>
      </div>
    </div>
  );
};

export default argazkiForm;