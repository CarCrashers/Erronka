import React from 'react';
import { router } from '@inertiajs/react';
import Layout from '../components/layout/layout.jsx';
import SaskiProduktua from '../components/ui/cards/saskiProduktu/saskiProduktu.jsx';
import Goikoa from '../components/ui/goikoa/goikoa.jsx';

function Saskia({ saskia, items, total }) 
{
  const ezabatuItem = (itemId) => {
    if (confirm('Ezabatu produktua saskitik?')) {
      router.delete(`/saskia/item/${itemId}`);
    }
  };
  return (
    <Layout>
      <Goikoa>
        <h1>Zure saskia</h1>
        <p>Hauek dira gordetako produktuak</p>
      </Goikoa>
      
      <div className='container-fluid py-3 py-md-5'>
        <div className="row gy-3 gy-md-4">
          {/* Produktu lista */}
          <div className="col-12 col-lg-8 d-flex flex-column gap-3">
            {items && items.length > 0 ? (
              items.map(item => (
                <SaskiProduktua 
                  key={item.id}
                  item={item}
                  onEzabatu={() => ezabatuItem(item.id)}
                />
              ))
            ) : (
              <p className="text-muted">Saskia hutsik dago</p>
            )}
          </div>

          <div className="col-12 col-lg-4">
            <div className="d-flex flex-column justify-content-between p-3 p-md-4 rounded-4 border shadow-lg h-100">
              <h4 className="h5 h-md-4">Resumen</h4>
              
              {items && items.map(item => (
                <div key={item.id} className="d-flex justify-content-between small mb-2">
                  <p className="mb-0 text-truncate">{item.produktua?.izena || 'Produktua'}</p>
                  <p className="mb-0 ms-2 text-nowrap">{item.produktua?.prezioa || 0} €</p>
                </div>
              ))}
              
              <hr className="my-2" />
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0 h6">Guztira</h5>
                <p className="mb-0 text-danger fw-bold">{total || 0} €</p>
              </div>
              
              <button 
                className="bg-orange w-100 rounded-5 border-0 py-2 text-white btn btn-sm"
                disabled={!items || items.length === 0}>
                Erosi
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Saskia;
