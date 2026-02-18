import React, { useEffect, useState } from 'react';
import { router, usePage } from '@inertiajs/react';
import Layout from '../components/layout/layout.jsx';
import SaskiProduktua from '../components/ui/cards/saskiProduktu/saskiProduktu.jsx';
import Goikoa from '../components/ui/goikoa/goikoa.jsx';

function Saskia({ saskia, items, total }) 
{

   const { flash } = usePage().props;
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState('success');

  const ezabatuItem = (itemId) => {
    if (confirm('Ezabatu produktua saskitik?')) {
      router.delete(`/saskia/item/${itemId}`);
    }
  };

  useEffect(() => {
    if (flash?.success || flash?.error) {
      setAlertType(flash?.success ? 'success' : 'danger');
      setShowAlert(true);
      const timer = setTimeout(() => setShowAlert(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [flash?.success, flash?.error]);

  const erosi = () => {
    if (confirm('Ziur al zaude produktuak erosi nahi dituzula?')) {
      router.post('/saskia/erosi');
    }
  };

 
  return (
    <Layout>
      {showAlert && (
        <div 
          className={`alert alert-${alertType} alert-dismissible fade show position-fixed`}
          style={{ top: '20px', right: '20px', zIndex: 9999, maxWidth: '500px' }}
          role="alert"
        >
          <i className={`bi ${alertType === 'success' ? 'bi-check-circle-fill' : 'bi-x-circle-fill'} me-2`}></i>
          {flash?.success || flash?.error}
          <button 
            type="button" 
            className="btn-close ms-2" 
            onClick={() => setShowAlert(false)} 
          />
        </div>
      )}
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
                  <p className="mb-0">{item.produktua?.prezioa || 0} €</p>
                </div>
              ))}
              
              <hr />
              <div className="d-flex justify-content-between align-items-center">
                <h4 className="mb-0">Guztira</h4>
                <p className="mb-0 text-danger font-weight-bold">{total || 0} €</p>
              </div>
              
              <button 
                className="bg-orange w-100 rounded-5 border-0 py-2 mt-3 text-white"
                disabled={!items || items.length === 0}
                onClick={erosi}
              >
                <i className="bi bi-bag-check me-2"></i>
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
