import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

const KontaktuaDashboard = () => {
  const [ondoMezua, setOndoMezua] = useState(null);

  const { data, setData, post, processing, errors, reset } = useForm({
    izena: '',
    emaila: '',
    telefonoa: '',
    gaia: '',
    mezua: '',
  });

  const konprobatuFormularioa = (e) => {
    e.preventDefault();
    console.log("Datuak bidaltzen:", data);
    
    setOndoMezua("Mezua ondo bidali da. Laster jarriko gara zurekin harremanetan!");
    reset();
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10">
          <div className="p-4 p-md-5 rounded-3 bg-white border shadow-sm">
            <h3 className="mb-3 text-center fw-bold">Gurekin kontaktatu</h3>
            <p className="text-muted text-center mb-4">
              Utzi zure datuak eta ahalik eta azkarren jarriko gara zurekin harremanetan.
            </p>

            {ondoMezua && (
              <div className="alert alert-success mb-4 border-0 shadow-sm" role="alert">
                <i className="bi bi-check-circle-fill me-2"></i> {ondoMezua}
              </div>
            )}

            <form onSubmit={konprobatuFormularioa}>
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <label className="form-label">Izen Abizenak <span className="text-danger">*</span></label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={data.izena} 
                    onChange={e => setData('izena', e.target.value)} 
                    required 
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label">Emaila <span className="text-danger">*</span></label>
                  <input 
                    type="email" 
                    className="form-control" 
                    value={data.emaila} 
                    onChange={e => setData('emaila', e.target.value)} 
                    required 
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label">Telefonoa <span className="text-danger">*</span></label>
                  <input 
                    type="number" 
                    className="form-control" 
                    value={data.telefonoa} 
                    onChange={e => setData('telefonoa', e.target.value)} 
                    required 
                  />
                </div>

                <div className="col-12 col-md-6">
                  <label className="form-label">Gaia <span className="text-danger">*</span></label>
                  <input 
                    type="text" 
                    className="form-control" 
                    value={data.gaia} 
                    onChange={e => setData('gaia', e.target.value)} 
                    required 
                  />
                </div>

                <div className="col-12">
                  <label className="form-label">Mezua <span className="text-danger">*</span></label>
                  <textarea 
                    className="form-control" 
                    rows="4" 
                    value={data.mezua} 
                    onChange={e => setData('mezua', e.target.value)} 
                    required
                  ></textarea>
                </div>

                <div className="col-12 d-flex justify-content-end mt-4">
                  <button type="submit" className="btn-dashboard-create text-decoration-none" disabled={processing}>
                    <i className="bi bi-send me-2"></i> Bidali
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KontaktuaDashboard;