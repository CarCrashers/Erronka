import React from 'react';
import { usePage } from '@inertiajs/react'; 

function EskaerakDashboard() {
  const { props } = usePage();
  const { eskaerak } = props; 

  // Mota zehatza kalkulatzeko funtzioa
  const getEskaeraMota = (desguazatzeko) => {
    return desguazatzeko ? 'Desguazatu' : 'Saldu';
  };

  const getEgoeraTestua = (egoera_kotxe, eskaera_egoera) => {
    if (eskaera_egoera === 'zain') return 'Zain';
    return egoera_kotxe || 'Prozesatzen';
  };

  return (
    <div className="container-fluid">
      <div className="row mb-4">
        <div className="col-12">
          <h2>Zure Eskaerak</h2>
          <p>Zure eskaera aktiboak eta zain daudenak hemen ikus ditzakezu.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          {eskaerak && eskaerak.length > 0 ? (
            <div className="table-responsive">
              <table className="table table-striped table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>Mota</th>
                    <th>Kotxea</th>
                    <th>Egoera</th>
                    <th>Data</th>
                    <th>Ekintzak</th>
                  </tr>
                </thead>
                <tbody>
                  {eskaerak.map((eskaera) => (
                    <tr key={eskaera.id}>
                      <td>
                        <span className={`badge ${
                          eskaera.desguazatzeko 
                            ? 'bg-danger' 
                            : 'bg-primary'
                        }`}>
                          {getEskaeraMota(eskaera.desguazatzeko)}
                        </span>
                      </td>
                      <td>
                        <strong>{eskaera.marka}</strong> {eskaera.modelo}<br/>
                        <small className="text-muted">{eskaera.matrikula}</small>
                      </td>
                      <td>
                        <span className={`badge ${
                          eskaera.eskaera_egoera === 'zain' 
                            ? 'bg-warning' 
                            : 'bg-success'
                        }`}>
                          {getEgoeraTestua(eskaera.egoera_kotxe, eskaera.eskaera_egoera)}
                        </span>
                      </td>
                      <td>
                        {new Date(eskaera.created_at).toLocaleDateString('eu-ES')}
                      </td>
                      <td>
                        <button className="btn btn-sm btn-outline-primary me-2">
                          Ikusi
                        </button>
                        <button className="btn btn-sm btn-outline-secondary">
                          Eguneratu
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="alert alert-info text-center">
              <h4>Ez dago eskaerarik</h4>
              <p>Berri bat sortzeko <a href="/saldu">Saldu</a> edo <a href="/desguazatu">Desguazatu</a> orrietara joan.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default EskaerakDashboard;
