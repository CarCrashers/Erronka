import React from 'react';
import Layout from '../components/layout/layout.jsx';
import Search from '../components/ui/search/search.jsx';
import ProducToggle from '../components/ui/buttons/producToggle/productToggle.jsx';
import Card from '../components/ui/card/card.jsx';
import Pagination from '../components/ui/pagination/pagination.jsx';
import Goikoa from '../components/ui/goikoa/goikoa.jsx';

function Erosi() {
  return (
    <React.StrictMode>
      <Layout>
        <Goikoa>
          <h1>Produktu Katalogoa</h1>
          <p>Produktu katalogo honetan, zure beharretara egokitutako ibilgailuak aurki ditzakezu.</p>
        </Goikoa>

        <div className="container my-4 py-5">
          <div className="row justify-content-center">
            <div className="col-12">
              <Search />
              <div className="py-2" />
              <ProducToggle />
            </div>
          </div>

          <div class="row justify-content-start">
            <div class="col-12 mt-5 d-flex justify-content-lg-between justify-content-around flex-wrap gap-3">
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
