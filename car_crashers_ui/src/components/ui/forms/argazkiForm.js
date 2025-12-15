import React from 'react';

const ArgazkiForm = ({ handleFileChange, fotos = [] }) => {
  return (
    <div className="card border-0 mt-4">
      <div className="card-body p-0">
        <h3 className="mb-3">Ibilgailuaren argazkiak</h3>
        
        <div className="mb-3">
            <input type="file" id="fotosVehiculo" className="d-none" multiple accept="image/*" onChange={handleFileChange}/>
            
            <label htmlFor="fotosVehiculo" className="upload-area-label d-flex flex-column align-items-center justify-content-center p-5 rounded">
                <i class="bi bi-upload fs-1"></i>

                <h5 className="fw-bold text-secondary mb-1">Egin klik argazkiak igotzeko</h5>
                <p className="text-muted small mb-0">Igo angelu ezberdinetako argazkiak balorazio hobea lortzeko.</p>
            </label>
        </div>

        {fotos.length > 0 && (
            <div className="row g-2 mt-3">
                {fotos.map((file, index) => (
                    <div key={index} className="col-6 col-md-4 col-lg-3">
                        <div className="card shadow-sm">
                            <img src={URL.createObjectURL(file)} className="card-img-top" alt={`Preview ${index}`}/>
                            <div className="card-footer p-1 text-truncate small text-muted">{file.name}</div>
                        </div>
                    </div>
                ))}
            </div>
        )}
      </div>
    </div>
  );
};

export default ArgazkiForm;