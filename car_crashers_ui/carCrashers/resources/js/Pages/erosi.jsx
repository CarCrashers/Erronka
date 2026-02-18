import React, { useState } from 'react';  // Sin useMemo temporalmente
import Layout from '../components/layout/layout.jsx';
import Search from '../components/ui/search/search.jsx';
import ProducToggle from '../components/ui/buttons/producToggle/productToggle.jsx';
import KotxeakCard from '../components/ui/cards/kotxeak/kotxeak.jsx';
import PiezakCard from '../components/ui/cards/piezak/piezak.jsx';
import Goikoa from '../components/ui/goikoa/goikoa.jsx';
import { usePage } from '@inertiajs/react';

function Erosi() {
  const { kotxeak, piezak } = usePage().props;
  const [mota, setMota] = useState(0);
  const [text, setText] = useState("");
  const [status, setStatus] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minPrice, setMinPrice] = useState("");

  const handleMotaChange = (newMota) => {
    setMota(newMota);
    setText(""); setStatus(""); setMaxPrice(""); setMinPrice("");
  };

  const filterItems = (items) => items?.filter(item => {
    const textMatch = !text || 
      item.matrikula?.toLowerCase().includes(text.toLowerCase()) ||
      item.marka?.toLowerCase().includes(text.toLowerCase()) ||
      item.modeloa?.toLowerCase().includes(text.toLowerCase()) ||
      item.zatia?.toLowerCase().includes(text.toLowerCase());
    
    const statusMatch = !status || item.produktuak?.[0]?.egoera === status;
    const price = item.produktuak?.[0]?.prezioa || 0;
    const priceMatch = (!minPrice || price >= parseFloat(minPrice)) && (!maxPrice || price <= parseFloat(maxPrice));
    
    return textMatch && statusMatch && priceMatch;
  }) || [];

  const filteredKotxeak = filterItems(kotxeak);
  const filteredPiezak = filterItems(piezak);

  return (
    <Layout>
      <Goikoa>
        <h1>Produktu Katalogoa</h1>
        <p>Produktu katalogo honetan, zure beharretara egokitutako ibilgailuak aurki ditzakezu.</p>
      </Goikoa>

      <div className="container my-4 py-5">
        <div className="row justify-content-center">
          <div className="col-12">
            <Search 
              text={text} status={status} maxPrice={maxPrice} minPrice={minPrice}
              onTextChange={(e) => setText(e.target.value)}
              onStatusChange={(e) => setStatus(e.target.value)}
              onMaxPriceChange={(e) => setMaxPrice(e.target.value)}
              onMinPriceChange={(e) => setMinPrice(e.target.value)}
            />
            <div className="py-2" />
            <ProducToggle mota={mota} onMotaChange={handleMotaChange} />
          </div>
        </div>

        <div className="row justify-content-start">
          <div className="col-12 mt-5 d-flex justify-content-around flex-wrap gap-3">
            <div key={`kotxeak-${mota}`} style={{ display: mota === 0 ? 'flex' : 'none', width: '100%' }}>
              {filteredKotxeak.map((kotxea, index) => (
                <div key={`kotxe-${kotxea.matrikula}-${index}`} className="col-lg-3 col-md-6 mb-4">
                  <KotxeakCard kotxea={kotxea} />
                </div>
              ))}
            </div>
            
            <div key={`piezak-${mota}`} style={{ display: mota === 1 ? 'flex' : 'none', width: '100%' }}>
              {filteredPiezak.map((pieza, index) => (
                <div key={`pieza-${pieza.id}-${index}`} className="col-lg-3 col-md-6 mb-4">
                  <PiezakCard pieza={pieza} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Erosi;
