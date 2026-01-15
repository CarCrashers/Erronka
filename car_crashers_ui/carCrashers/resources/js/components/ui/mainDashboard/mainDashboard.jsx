import React, { useState, useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import './mainDashboard.css';

function MainDashboard() {
  const { props } = usePage();
  const user = props.auth?.user;
  const [stats, setStats] = useState({
    pendingApprovals: 0,
    totalCars: 0,
    totalParts: 0,
    totalSales: 0,
    recentRequests: [],
    lowStockParts: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de datos - cambiar por API real
    setTimeout(() => {
      setStats({
        pendingApprovals: 5,
        totalCars: 24,
        totalParts: 156,
        totalSales: 3420.50,
        recentRequests: [
          { id: 1, type: 'Venta', status: 'Pendiente', date: '2026-01-15' },
          { id: 2, type: 'Desguaze', status: 'Aprobado', date: '2026-01-14' },
          { id: 3, type: 'Venta', status: 'Pendiente', date: '2026-01-13' }
        ],
        lowStockParts: [
          { id: 1, name: 'Motor 2.0 TDI', stock: 2 },
          { id: 2, name: 'Turbo Garrett', stock: 1 },
          { id: 3, name: 'Alternador', stock: 3 }
        ]
      });
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="main-dashboard loading">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <main className="main-dashboard flex-fill p-5 overflow-auto">
      {/* Saludo y Fecha */}
      <div className="dashboard-header mb-5">
        <div>
          <h1 className="mb-1">Kaixo, {user.name}! 👋</h1>
          <p className="text-muted">
            {new Date().toLocaleDateString('eu-ES', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="row mb-5">
        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card stat-card stat-card-primary">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <p className="card-text text-muted mb-1">Aprobaciones Pendientes</p>
                  <h3 className="card-title">{stats.pendingApprovals}</h3>
                </div>
                <i className="bi bi-hourglass-split stat-icon"></i>
              </div>
              <small className="text-primary">+2 esta semana</small>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card stat-card stat-card-success">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <p className="card-text text-muted mb-1">Vehículos en Stock</p>
                  <h3 className="card-title">{stats.totalCars}</h3>
                </div>
                <i className="bi bi-car-front-fill stat-icon"></i>
              </div>
              <small className="text-success">+3 nuevos</small>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card stat-card stat-card-warning">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <p className="card-text text-muted mb-1">Piezas en Stock</p>
                  <h3 className="card-title">{stats.totalParts}</h3>
                </div>
                <i className="bi bi-tools stat-icon"></i>
              </div>
              <small className="text-warning">5 bajo stock</small>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-lg-3 mb-3">
          <div className="card stat-card stat-card-info">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <p className="card-text text-muted mb-1">Ventas Totales</p>
                  <h3 className="card-title">€{stats.totalSales.toFixed(2)}</h3>
                </div>
                <i className="bi bi-graph-up stat-icon"></i>
              </div>
              <small className="text-info">Mes actual</small>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <div className="row mb-5">
        <div className="col-lg-8">
          <div className="card">
            <div className="card-header bg-light border-bottom">
              <h5 className="mb-0">Solicitudes Recientes</h5>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th className="text-muted">ID</th>
                      <th className="text-muted">Tipo</th>
                      <th className="text-muted">Estado</th>
                      <th className="text-muted">Fecha</th>
                      <th className="text-muted">Acción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stats.recentRequests.map((request) => (
                      <tr key={request.id}>
                        <td>#{request.id.toString().padStart(3, '0')}</td>
                        <td>
                          <span className="badge bg-secondary">
                            {request.type}
                          </span>
                        </td>
                        <td>
                          <span className={`badge ${
                            request.status === 'Pendiente' 
                              ? 'bg-warning' 
                              : 'bg-success'
                          }`}>
                            {request.status}
                          </span>
                        </td>
                        <td>{request.date}</td>
                        <td>
                          <button className="btn btn-sm btn-outline-primary">
                            Ver
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card">
            <div className="card-header bg-light border-bottom">
              <h5 className="mb-0">Piezas Bajo Stock</h5>
            </div>
            <div className="card-body">
              <div className="list-group list-group-flush">
                {stats.lowStockParts.map((part) => (
                  <div key={part.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                      <h6 className="mb-0">{part.name}</h6>
                      <small className="text-danger">Stock: {part.stock}</small>
                    </div>
                    <button className="btn btn-sm btn-outline-warning">
                      Reponer
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header bg-light border-bottom">
              <h5 className="mb-0">Acciones Rápidas</h5>
            </div>
            <div className="card-body">
              <div className="d-flex flex-wrap gap-2">
                <button className="btn btn-primary">
                  <i className="bi bi-plus-circle"></i> Nueva Peritación
                </button>
                <button className="btn btn-success">
                  <i className="bi bi-car-front-fill"></i> Añadir Vehículo
                </button>
                <button className="btn btn-warning">
                  <i className="bi bi-tools"></i> Gestionar Piezas
                </button>
                <button className="btn btn-info">
                  <i className="bi bi-download"></i> Descargar Reporte
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainDashboard;
