import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import './mainDashboard.css';

function MainDashboard() {
  const { props } = usePage();

  const { auth, kotxeak, piezak } = props;
  const user = auth?.user;

  console.log("Datos recibidos:", { kotxeak, piezak, user: auth?.user });
  
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
          <h1 className="mb-1">Kaixo, {user.name}! 👋</h1>
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
                {/* Usamos .length para contar los datos reales */}
                <h3>{kotxeak ? kotxeak.length : 0}</h3>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-3">
            <div className="card stat-card stat-card-success">
              <div className="card-body">
                <p className="text-muted mb-1">Piezak Stockean</p>
                <h3>{piezak ? piezak.length : 0}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
            {/* TABLA DE KOTXEAK */}
            <div className="col-12 col-xl-6 mb-4">
                <div className="card shadow-sm h-100">
                    <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 text-primary"><i className="bi bi-car-front-fill me-2"></i>Kotxeen Zerrenda</h5>
                        <span className="badge bg-light text-dark">{kotxeak?.length || 0} ibilgailu</span>
                    </div>
                    <div className="card-body p-0">
                        <div className="table-responsive" style={{maxHeight: '400px'}}>
                            <table className="table table-hover mb-0">
                                <thead className="table-light sticky-top">
                                    <tr>
                                        <th>Matrikula</th>
                                        <th>Marka</th>
                                        <th>Modeloa</th>
                                        <th>Urtea</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {kotxeak && kotxeak.length > 0 ? (
                                        kotxeak.map((kotxe) => (
                                            <tr key={kotxe.id}>
                                                <td className="fw-bold">{kotxe.matrikula}</td>
                                                <td>{kotxe.marka}</td>
                                                <td>{kotxe.modeloa}</td>
                                                <td><span className="badge bg-secondary">{kotxe.urtea}</span></td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="4" className="text-center py-4 text-muted">Ez dago kotxerik erregistratuta.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* TABLA DE PIEZAK */}
            <div className="col-12 col-xl-6 mb-4">
                <div className="card shadow-sm h-100">
                    <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
                        <h5 className="mb-0 text-success"><i className="bi bi-tools me-2"></i>Piezen Stocka</h5>
                        <span className="badge bg-light text-dark">{piezak?.length || 0} pieza</span>
                    </div>
                    <div className="card-body p-0">
                        <div className="table-responsive" style={{maxHeight: '400px'}}>
                            <table className="table table-hover mb-0">
                                <thead className="table-light sticky-top">
                                    <tr>
                                        <th>ID</th>
                                        <th>Pieza (Zatia)</th>
                                        <th>Jatorria (Matrikula)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {piezak && piezak.length > 0 ? (
                                        piezak.map((pieza) => (
                                            <tr key={pieza.id}>
                                                <td>#{pieza.id}</td>
                                                <td className="fw-bold">{pieza.zatia}</td>
                                                <td><span className="badge bg-light text-dark border">{pieza.matrikula}</span></td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="3" className="text-center py-4 text-muted">Ez dago piezarik stockean.</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </main>
    );
  }

  // VISTA PARA CLIENTES
  return (
    <main className="main-dashboard flex-fill p-5 overflow-auto">
      <div className="dashboard-header mb-5">
        <h1 className="mb-1">Kaixo, {user.name}! 👋</h1>
        <p className="text-muted">Ongi etorri zure espazio pertsonalera.</p>
      </div>

      <div className="row mb-4">
        {/* Tarjeta Principal Cliente */}
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

        {/* Resumen Cliente */}
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
    </main>
  );
}

export default MainDashboard;