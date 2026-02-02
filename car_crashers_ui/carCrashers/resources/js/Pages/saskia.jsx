import React from 'react';
import { router } from '@inertiajs/react';
import Layout from '../components/layout/layout.jsx';
import SaskiProduktua from '../components/ui/card/saskiProduktu/saskiProduktu.jsx';
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
      
      <div className='container py-5'>
        <div className="row gy-4">
          {/* Produktu lista */}
          <div className="col-12 col-md-8 d-flex flex-column gap-3">
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

          <div className="col-12 col-md-4">
            <div className="d-flex flex-column justify-content-between p-4 rounded-4 border shadow-lg h-100">
              <h2>Resumen</h2>
              
              {items && items.map(item => (
                <div key={item.id} className="d-flex justify-content-between">
                  <p className="mb-0">{item.produktua?.izena || 'Produktua'}</p>
                  <p className="mb-0">{item.prezioa || 0} €</p>
                </div>
              ))}
              
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Guztira</h4>
                <p className="mb-0 text-danger font-weight-bold">{total || 0} €</p>
              </div>
              
              <button 
                className="bg-orange w-100 rounded-5 border-0 py-2 mt-3 text-white"
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
