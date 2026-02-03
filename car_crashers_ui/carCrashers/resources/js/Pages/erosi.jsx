import React from 'react';
import Layout from '../components/layout/layout.jsx';
import Search from '../components/ui/search/search.jsx';
import ProducToggle from '../components/ui/buttons/producToggle/productToggle.jsx';
import KotxeakCard from '../components/ui/cards/kotxeak/kotxeak.jsx';
import PiezakCard from '../components/ui/cards/piezak/piezak.jsx';
import Pagination from '../components/ui/pagination/pagination.jsx';
import Goikoa from '../components/ui/goikoa/goikoa.jsx';
import { useState } from 'react';
import { usePage } from '@inertiajs/react';

function Erosi() {
  const { kotxeak, piezak } = usePage().props;
  const [mota, setMota] = useState(0);

  const handleMotaChange = (newMota) => setMota(newMota);

  const kotxeakCount = kotxeak?.length || 0;
  const piezakCount = piezak?.length || 0;

  const renderContent = () => {
    if (mota === 0) {
      return (
        <>
          {kotxeak?.map((kotxea) => (
            <div key={kotxea.matrikula} className="col-lg-3 col-md-6 mb-4">
              <KotxeakCard kotxea={kotxea} />
            </div>
          ))}
        </>
      );
    } else {
      return (
        <>
          {piezak?.map((pieza) => (
            <div key={pieza.id} className="col-lg-3 col-md-6 mb-4">
              <PiezakCard pieza={pieza} />
            </div>
          ))}
        </>
      );
    }
  };

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
              <ProducToggle 
                mota={mota}
                onMotaChange={handleMotaChange}
                kotxeakCount={kotxeakCount}
                piezakCount={piezakCount}
              />
            </div>
          </div>

          <div class="row justify-content-start">
            <div class="col-12 mt-5 d-flex justify-content-around flex-wrap gap-3">
              {/* Mostrar aquí los coches o piezas depende el ProducToggle */}
              {renderContent()}
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
