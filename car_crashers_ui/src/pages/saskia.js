import React from 'react';
import '../App.css';
import Layout from '../components/layout/layout.js';
import SaskiProduktua from '../components/ui/card/saskiProduktu/saskiProduktu.js';

function Saskia() {
  return (
    <React.StrictMode>
      <Layout>
        <div className="container-fluid">
          <div className="row justify-content-center bg-secondary text-white">
            <div className="col-12 col-md-8 py-5 text-center text-md-start">
              <h1>Zure saskia</h1>
              <p>Hauek dira gordetako produktuak</p>
            </div>
          </div>
        </div>

        <div className='container pt-3'>
            <div className="row gy-4">
                <div className="col-12 col-md-8 d-flex flex-column gap-3">
                    <SaskiProduktua />
                    <SaskiProduktua />
                    <SaskiProduktua />
                </div>

                <div className="col-12 col-md-4">
                    <div className="d-flex flex-column justify-content-between p-4 rounded-4 border shadow-lg h-100">
                        <h2>Resumen</h2>
                        <div className="mt-3 d-flex flex-column gap-2">
                            <div className="d-flex justify-content-between">
                                <p className="mb-0">Produktu1</p>
                                <p className="mb-0">XX.XX €</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="mb-0">Produktu2</p>
                                <p className="mb-0">XX.XX €</p>
                            </div>
                            <div className="d-flex justify-content-between">
                                <p className="mb-0">Produktu3</p>
                                <p className="mb-0">XX.XX €</p>
                            </div>
                        </div>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                            <h4 className="mb-0">Guztira</h4>
                            <p className="mb-0 text-danger">XX.XX €</p>
                        </div>
                        <button className="bg-orange w-100 rounded-5 border-0 py-2 mt-3 text-white">
                        Erosi
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </Layout>
    </React.StrictMode>
  );
}

export default Saskia;
