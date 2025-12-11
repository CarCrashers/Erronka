import React from 'react';
import '../App.css';
import Layout from '../components/layout/layout.js';
import Pagination from '../components/ui/pagination/pagination.js';
import Search from '../components/ui/search/search.js';
import ProducToggle from '../components/ui/buttons/producToggle/productToggle.js';
import Card from '../components/ui/card/card.js';

function Erosi() {
  return (
    <React.StrictMode>
        <Layout>
            <div className="container-fluid">
                <div className="row justify-content-center bg-secondary">
                    <div className="col-8 py-5">
                        <h1>Catálogo de Productos</h1>
                        <p>Encuentra el vehículo o pieza que necesitas</p>
                    </div>
                </div>
                <Search />
                <ProducToggle />
                <div class="row justify-content-center">
                    <div class="col-8 d-flex justify-content-between flex-wrap">
                        <Card />
                    </div>
                </div>
                <Pagination />
            </div>
        </Layout>
    </React.StrictMode>  
  );
}

export default Erosi;