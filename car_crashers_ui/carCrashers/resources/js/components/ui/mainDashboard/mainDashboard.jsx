import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import './mainDashboard.css';

function MainDashboard() {
  const { props } = usePage();
  const { auth, kotxeakCount, piezakCount } = props;  
  const user = auth?.user;
  const isAdmin = user?.mota === 'admin';

  const [clientStats, setClientStats] = useState({
    activeRequests: 0, myCarsCount: 0
  });

  useEffect(() => {
    if (!isAdmin) {

      // Simulación solo para cliente (esto también podrías traerlo de DB en el futuro)
      setClientStats({ activeRequests: 1, myCarsCount: 2 });
    }
  }, [isAdmin]);

  let content;

  if (isAdmin) {
    // --- CONTENIDO ADMIN ---
    content = (
      <div className="p-5">
        <div className="dashboard-header mb-5">
          <h1 className="mb-1">Admin Panela: {user?.name} 🛠️</h1>
          <p className="text-muted">Inbentarioaren egoera orokorra</p>
        </div>

        <div className="row mb-5">
          <div className="col-md-6 col-lg-4 mb-3">
            <div className="card stat-card stat-card-primary">
              <div className="card-body">
                <p className="text-muted mb-1">Kotxeak Guztira</p>
                <h3>{kotxeakCount || 0}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-3">
            <div className="card stat-card stat-card-success">
              <div className="card-body">
                <p className="text-muted mb-1">Piezak Stockean</p>
                <h3>{piezakCount || 0}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    // --- CONTENIDO CLIENTE ---
    content = (
      <div className="p-5">
        <div className="dashboard-header mb-5">
          <h1 className="mb-1">Kaixo, {user.name}! </h1>
          <p className="text-muted">Ongi etorri zure espazio pertsonalera.</p>
        </div>

        <div className="row mb-4">
          <div className="col-lg-8 mb-4">
              <div className="card h-100 border-0 shadow-sm">
                  <div className="card-header bg-white border-bottom-0 pt-4 px-4">
                      <h5 className="fw-bold">Zure Eskaeren Egoera</h5>
                  </div>
                  <div className="card-body px-4">
                      {clientStats.activeRequests > 0 ? (
                          <div className="alert alert-info d-flex align-items-center">
                              <i className="bi bi-info-circle-fill me-3 fs-4"></i>
                              <div>
                                  <strong>Tasazioa Prozesuan:</strong> Zure ibilgailua berrikusten ari gara.
                                  <div className="progress mt-2" style={{height: '6px', width: '200px'}}>
                                      <div className="progress-bar bg-info" style={{width: '60%'}}></div>
                                  </div>
                              </div>
                          </div>
                      ) : (
                          <p className="text-muted">Ez daukazu eskaera aktiborik momentu honetan.</p>
                      )}
                      
                      <div className="mt-4">
                          <button className="btn btn-primary me-2">
                              <i className="bi bi-plus-lg me-2"></i>Eskaera berria
                          </button>
                      </div>
                  </div>
              </div>
          </div>

          <div className="col-lg-4 mb-4">
              <div className="card bg-dark text-white h-100">
                  <div className="card-body d-flex flex-column justify-content-center text-center">
                      <i className="bi bi-car-front fs-1 mb-3 text-secondary"></i>
                      <h2 className="display-4 fw-bold">{clientStats.myCarsCount}</h2>
                      <p className="text-white-50">Erregistratutako Ibilgailuak</p>
                  </div>
              </div>
          </div>
        </div>

        {/* KPI Cards (Calculados con datos reales) */}
        <div className="row mb-5">
          <div className="col-md-6 col-lg-4 mb-3">
            <div className="card stat-card stat-card-primary">
              <div className="card-body">
                <p className="text-muted mb-1">Kotxeak Guztira</p>
                <h3>{kotxeakCount || 0}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-3">
            <div className="card stat-card stat-card-success">
              <div className="card-body">
                <p className="text-muted mb-1">Piezak Stockean</p>
                <h3>{piezakCount || 0}</h3>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
  }

  return (
    <div className="p-5">
        {content}
    </div>
  );
}

export default MainDashboard;