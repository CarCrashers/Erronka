import React, { useEffect, useState } from 'react';
import Layout from '../components/layout/layout.jsx';
import ReturnBack from '../components/ui/buttons/returnBack/returnBack.jsx';
import Carrusel from '../components/ui/carrusel/carrusel.jsx';
import KotxeakCard from '../components/ui/cards/kotxeak/kotxeak.jsx';
import PiezakCard from '../components/ui/cards/piezak/piezak.jsx';
import Goikoa from '../components/ui/goikoa/goikoa.jsx';
import { usePage, router, Head } from '@inertiajs/react';


function Details() {
    const { produktua, kotxea, antzekoKotxeak, antzekoPiezak } = usePage().props;
    const produk = produktua[0];
    const kotxe = kotxea[0];

    const [showAlert, setShowAlert] = useState(false);
    const { flash } = usePage().props;

    const gehituSaskira = () => {
        router.post(`/details/save/${kotxe.matrikula}`, {
        produktua_id: produk.id,
        });
    };

    
    useEffect(() => {
    if (flash?.success) {
      setShowAlert(true);
    
      const timer = setTimeout(() => setShowAlert(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [flash?.success]);

    return (
        <React.StrictMode>
        <Layout>
             {showAlert && (
                <div className="alert alert-success alert-dismissible fade show position-fixed" 
                    style={{ top: '20px', right: '20px', zIndex: 9999, maxWidth: '400px' }}
                    role="alert">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    {flash.success}
                </div>
            )}
            <Goikoa>
                <h1>Kotxearen informazioa</h1>
                <p>Behar duzun kotxea aurkitu</p>
            </Goikoa>
            <div className='container'>
                <div className='row ms-2'>
                    <div className='col'>
                        <ReturnBack text='Katalogora itzuli' href='/erosi' />
                    </div>
                </div>

                <div className='row ms-2'>
                    <div className='col-12 col-lg-6'>
                        <Carrusel produktua={produk} />
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 mt-lg-0 mt-md-4 mt-sm-4">
                        <div className="d-flex flex-column p-3 rounded-4 border shadow-lg h-100">
                            <h3>{kotxe.marka} {kotxe.modeloa}</h3>
                            <hr />
                            <ul className="py-3">
                                <li>Urtea: {kotxe.urtea}</li>
                                <li>Matrikula: {kotxe.matrikula}</li>
                                <li>Egoera: {produk.egoera}</li>
                            </ul>
                            <p className="mb-0">
                                {produk.deskribapena}
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-2 h-50 mt-lg-0 mt-md-4 mt-sm-4">
                        <div className="d-flex flex-column justify-content-between h-100 p-3 rounded-4 border shadow-lg">
                            <div>
                                <h5 className="">{produk.prezioa} €</h5>
                            </div>
                            <div className="mt-3">
                                <button
                                    type="button"
                                    className="bg-orange w-100 rounded-5 border-0 py-2 text-white"
                                    onClick={gehituSaskira}
                                >
                                    Saskira gehitu
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="row flex-column ms-2 mt-5 mb-4 p-3 rounded-4 border shadow-lg">
                    <div className="col-12 px-3">
                        <h1>Antzeko produktuak</h1>
                    </div>

                    <div className="col-12 d-flex justify-content-lg-between justify-content-around flex-wrap mt-3 gap-3">
                        {antzekoKotxeak.map((kotxea) =>
                            <KotxeakCard kotxea={kotxea} />
                        )}
                        {/* {antzekoPiezak.map((pieza) =>
                            <PiezakCard pieza={pieza} />
                        )} */}
                    </div>
                </div>
            </div>
        </Layout>
        </React.StrictMode>
    );
}

export default Details;
