import React, { useState, useCallback } from 'react';
import { usePage, router } from '@inertiajs/react';

function KotxeakDashboard() {
  const { props } = usePage();
  const { kotxeak, rola } = props || {};
  
  const [sortBy, setSortBy] = useState('mota');
  const [sortDir, setSortDir] = useState('asc');

  const getEgoeraBadgeClass = (egoera) => {
    switch (egoera) {
      case 'bikaina': return 'bg-success';
      case 'ongi': return 'bg-info';
      case 'nahikoa': return 'bg-warning';
      case 'salgaian': return 'bg-primary';
      case 'desguazatzeko': return 'bg-danger';
      default: return 'bg-dark';
    }
  };

  const getmotaBadgeClass = (mota) => {
    return mota === 'venta' ? 'bg-success' : 'bg-danger';
  };

  const formatEuro = (prezioa) => {
    return new Intl.NumberFormat('eu-ES', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 2,
    }).format(prezioa || 0);
  };

  const getKotxePrezioa = (produktuak) => {
    if (!produktuak || produktuak.length === 0) return '—';
    const kotxeProduktua = produktuak.find(p => !p.pieza_id || p.pieza_id === null);
    if (!kotxeProduktua?.prezioa) return '—';
    return formatEuro(kotxeProduktua.prezioa);
  };

  const getMota = useCallback((kotxea) => {
    return kotxea.mota || (kotxea.produktuak?.some(p => p.pieza_id != null) ? 'desguazado' : 'venta');
  }, []);

  const sortedKotxeak = useCallback(() => {
    return [...(kotxeak || [])].sort((a, b) => {
      let valA = a[sortBy] ?? '';
      let valB = b[sortBy] ?? '';
      
      if (sortBy === 'mota') {
        valA = getMota(a) === 'venta' ? 0 : 1;
        valB = getMota(b) === 'venta' ? 0 : 1;
      }
      
      if (valA < valB) return sortDir === 'asc' ? -1 : 1;
      if (valA > valB) return sortDir === 'asc' ? 1 : -1;
      return 0;
    });
  }, [kotxeak, sortBy, sortDir, getMota]);

  const toggleSort = useCallback((column) => {
    if (sortBy === column) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(column);
      setSortDir('asc');
    }
  }, [sortBy, sortDir]);

  const ezabatuKotxea = (matrikula) => {
    if (confirm('Ziur zaude kotxe hau ezabatu nahi duzula?')) {
      router.delete(`/kotxeak/${matrikula}`);
    }
  };

  const ikusiKotxea = (matrikula) => {
    router.get(`/kotxeak/${matrikula}`);
  };

  return (
    <div className="container-fluid">
      <div className="row mb-4">
        <div className="col-12">
          <h2>Kotxeen Stocka</h2>
          <p>Enpresaren kotxeen stock-a eta egoera. </p>
          <strong>Ordenatua: {sortBy} ({sortDir.toUpperCase()}).</strong>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          {sortedKotxeak().length > 0 ? (
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="table-dark">
                  <tr>
                    <th 
                      onClick={() => toggleSort('Mota')}
                      className="cursor-pointer user-select-none fw-bold"
                      style={{ minWidth: '130px' }}
                    >
                      Mota
                      <i 
                        className={`fas ms-1 ${
                          sortBy === 'Mota' 
                            ? `fa-sort-${sortDir === 'asc' ? 'up' : 'down'}`
                            : 'fa-sort'
                        }`}
                      />
                    </th>
                    <th>Matrikula</th>
                    <th>Marka / Modelo</th>
                    <th>Urtea</th>
                    <th>Km</th>
                    <th>Kotxearen goera</th>
                    <th>Desguazea</th>
                    <th>Prezioa</th>
                    <th>Argazkiak</th>
                    <th>Data</th>
                    <th>Ekintzak</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedKotxeak().map((kotxea) => (
                    <tr key={kotxea.matrikula}>
                      <td>
                        <span className={`badge fs-6 ${getmotaBadgeClass(getMota(kotxea))}`}>
                          {getMota(kotxea) === 'venta' ? 'Salgai' : 'Desguazatua'}
                        </span>
                      </td>
                      <td>
                        <strong className="text-primary">{kotxea.matrikula}</strong>
                      </td>
                      <td>
                        <strong>{kotxea.marka}</strong>
                        <br />
                        <small className="text-muted">{kotxea.modeloa}</small>
                      </td>
                      <td>{kotxea.urtea || '—'}</td>
                      <td>{kotxea.kilometroak?.toLocaleString() || '—'} km</td>
                      <td>
                        <span className={`badge ${getEgoeraBadgeClass(kotxea.egoera)}`}>
                          {kotxea.egoera || 'Ezezaguna'}
                        </span>
                      </td>
                      <td>
                        {kotxea.desguazea?.izena ? (
                          <span className=" text-wrap">
                            {kotxea.desguazea.izena}
                          </span>
                        ) : (
                          <span className="text-muted">—</span>
                        )}
                      </td>
                      <td>
                        <strong className="text-success fs-6">
                          {getKotxePrezioa(kotxea.produktuak)}
                        </strong>
                      </td>
                      <td>
                        {kotxea.argazkiak && kotxea.argazkiak.length > 0 ? (
                          <span className="badge bg-warning">
                            {kotxea.argazkiak.length} arg.
                          </span>
                        ) : (
                          <span className="text-muted">—</span>
                        )}
                      </td>
                      <td>
                        <small className="text-muted">
                          {kotxea.created_at
                            ? new Date(kotxea.created_at).toLocaleDateString('eu-ES')
                            : '—'}
                        </small>
                      </td>
                      <td>
                        <div className="btn-group btn-group-sm" role="group">
                          <button
                            className="btn btn-outline-primary"
                            onClick={() => ikusiKotxea(kotxea.matrikula)}
                            title="Ikusi xehetasunak"
                          >
                            <i className="fas fa-eye" />
                          </button>
                          <button
                            className="btn btn-outline-danger"
                            onClick={() => ezabatuKotxea(kotxea.matrikula)}
                            title="Ezabatu"
                          >
                            <i className="fas fa-trash" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="alert alert-info text-center">
              <h4>Ez dago kotxe salgairik</h4>
              <p>Stockean ez dago kotxerik salgai.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default KotxeakDashboard;
