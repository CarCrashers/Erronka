import React from 'react';
import { usePage } from '@inertiajs/react';
import './mainDashboard.css';

function MainDashboard() {
  const { props } = usePage();
  const { auth, kotxeakCount, piezakCount } = props;  
  const user = auth?.user;
  const isAdmin = user?.mota === 'admin';

  if (isAdmin) {
    return (
      <div className="p-5">
        <div className="dashboard-header mb-5">
          <h1 className="mb-1">Admin Panela: {user?.name} 🛠️</h1>
          <p className="text-muted">Inbentarioaren egoera orokorra</p>
        </div>

        <div className="row mb-5">
          <div className="col-md-6 col-lg-4 mb-3">
            <div className="card stat-card stat-card-primary h-100">
              <div className="card-body">
                <p className="text-muted mb-1">Kotxeak Guztira</p>
                <h3 className="display-6 fw-bold">{kotxeakCount || 0}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-3">
            <div className="card stat-card stat-card-success h-100">
              <div className="card-body">
                <p className="text-muted mb-1">Piezak Stockean</p>
                <h3 className="display-6 fw-bold">{piezakCount || 0}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5">
      <div className="dashboard-header mb-5">
        <h1 className="mb-1">Kaixo, {user?.name}!</h1>
        <p className="text-muted">Ongi etorri zure espazio pertsonalera.</p>
      </div>

      <div className="row mb-4">
        <div className="col-lg-8 mb-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-header bg-white border-bottom-0 pt-4 px-4">
              <h5 className="fw-bold">Zure Eskaeren Egoera</h5>
            </div>
            <div className="card-body px-4">
              {kotxeakCount > 0 ? (
                <div className="alert alert-info d-flex align-items-center border-0 shadow-sm">
                  <i className="bi bi-info-circle-fill me-3 fs-4"></i>
                  <div>
                    <strong>Tasazioa Prozesuan:</strong> Zure {kotxeakCount} ibilgailu berrikusten ari gara.
                    <div className="progress mt-2" style={{ height: '6px', width: '200px' }}>
                      <div className="progress-bar bg-info" style={{ width: '60%' }}></div>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-muted">Ez daukazu eskaera aktiborik momentu honetan.</p>
              )}

              <div className="mt-4">
                <button className="btn-dashboard-create text-decoration-none">
                  <i className="bi bi-plus-circle me-2"></i>Eskaera berria
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4 mb-4">
          <div className="card bg-dark text-white h-100 shadow-sm border-0">
            <div className="card-body d-flex flex-column justify-content-center text-center p-4">
              <i className="bi bi-car-front fs-1 mb-3 text-secondary"></i>
              <h2 className="display-4 fw-bold">{kotxeakCount || 0}</h2>
              <p className="text-white-50">Erregistratutako Ibilgailuak</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 col-lg-4 mb-3">
          <div className="card stat-card stat-card-primary border-0 shadow-sm">
            <div className="card-body">
              <p className="text-muted mb-1">Nire Kotxeak</p>
              <h3 className="fw-bold">{kotxeakCount || 0}</h3>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-3">
          <div className="card stat-card stat-card-success border-0 shadow-sm">
            <div className="card-body">
              <p className="text-muted mb-1">Nire Piezak</p>
              <h3 className="fw-bold">{piezakCount || 0}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainDashboard;