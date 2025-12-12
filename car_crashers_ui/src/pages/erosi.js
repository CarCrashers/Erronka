import React from 'react';
import '../App.css';
import Layout from '../components/layout/layout.js';
import Search from '../components/ui/search/search.js';
import ProducToggle from '../components/ui/buttons/producToggle/productToggle.js';
import Card from '../components/ui/card/card.js';
import Pagination from '../components/ui/pagination/pagination.js';

function Erosi() {
  return (
    <React.StrictMode>
      <Layout>
        <div className="container-fluid">
          <div className="row justify-content-center bg-secondary text-white">
            <div className="col-12 col-md-8 py-5 text-center text-md-start">
              <h1>Catálogo de Productos</h1>
              <p>Encuentra el vehículo o pieza que necesitas</p>
            </div>
          </div>
        </div>

        <div className="container my-4">
          <div className="row justify-content-center">
            <div className="col-12">
              <Search />
              <div className="py-2" />
              <ProducToggle />
            </div>
          </div>

          <div class="row justify-content-start">
            <div class="col-12 d-flex justify-content-lg-between justify-content-around flex-wrap">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
          </div>
          <div className='row'>
            <div className="d-flex justify-content-center mt-3">
                <Pagination />
            </div>
          </div>
        </div>
      </Layout>
    </React.StrictMode>
  );
}

export default Erosi;
