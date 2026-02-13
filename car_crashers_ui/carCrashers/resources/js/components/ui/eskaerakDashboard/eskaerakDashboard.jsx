import React from 'react';
import { usePage, router } from '@inertiajs/react'; 

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

  // Eliminar eskaera funtzioa
  const eliminarEskaera = (id) => {
    if (confirm('Ziur zaude eskaera hau ezabatu nahi duzula?')) {
      router.delete(`/eskaerak/${id}`);
    }
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
                    <th>Eskaeraren egoera</th>
                    <th>Data</th>
                    <th>Ekintzak</th>
                  </tr>
                </thead>
                <tbody>
                  {eskaerak.map((eskaera) => (
                    <tr key={eskaera.id}>
                      <td>{getEskaeraMota(eskaera.desguazatzeko)}</td>
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
                        <button 
                          onClick={() => eliminarEskaera(eskaera.id)}
                          className="btn btn-sm btn-danger"
                        >
                          Ezabatu
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
