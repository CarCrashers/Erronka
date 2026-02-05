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
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");

  const handleMotaChange = (newMota) => setMota(newMota);
  
  function handleTextChange(e) {
    setText(e.target.value);
  }

  function handleStatusChange(e) {
    setStatus(e.target.value);
  }

  function handleMaxPriceChange(e) {
    setMaxPrice(e.target.value);
  }

  function handleMinPriceChange(e) {
    setMinPrice(e.target.value);
  }

  const kotxeakCount = kotxeak?.length || 0;
  const piezakCount = piezak?.length || 0;

  const renderContent = () => {
    const items = mota === 0 ? kotxeak : piezak;
    
    return items?.filter((item) => {
        const textMatch = !text || 
        item.matrikula?.toLowerCase().includes(text.toLowerCase()) ||
        item.marka?.toLowerCase().includes(text.toLowerCase()) ||
        item.modeloa?.toLowerCase().includes(text.toLowerCase()) ||
        item.zatia?.toLowerCase().includes(text.toLowerCase());

        const statusMatch = !status || item.produktuak?.[0]?.egoera === status;

        const price = item.produktuak?.[0]?.prezioa || item.prezioa || 0;
        const priceMatch = (!minPrice || price >= parseFloat(minPrice)) &&
        (!maxPrice || price <= parseFloat(maxPrice));

        return textMatch && statusMatch && priceMatch;
      })
      .map((item) => (
        <div key={item.matrikula || item.id} className="col-lg-3 col-md-6 mb-4">
          {mota === 0 ? <KotxeakCard kotxea={item} /> : <PiezakCard pieza={item} />}
        </div>
      )) || [];
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
              <Search 
                text={text}
                status={status}
                maxPrice={maxPrice}
                minPrice={minPrice}
                onTextChange={handleTextChange}
                onStatusChange={handleStatusChange}
                onMaxPriceChange={handleMaxPriceChange}
                onMinPriceChange={handleMinPriceChange}
              />
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
