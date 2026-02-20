import React from 'react';
import Layout from '../components/layout/layout.jsx';
import ReturnBack from '../components/ui/buttons/returnBack/returnBack.jsx';
import Carrusel from '../components/ui/carrusel/carrusel.jsx';
import KotxeakCard from '../components/ui/cards/kotxeak/kotxeak.jsx';
import PiezakCard from '../components/ui/cards/piezak/piezak.jsx';
import Goikoa from '../components/ui/goikoa/goikoa.jsx';
import { usePage } from '@inertiajs/react';


function Details() {
    const { produktua, pieza, antzekoKotxeak, antzekoPiezak } = usePage().props;
    const produk = produktua[0];
    const piezaa = pieza[0];

    return (
        <React.StrictMode>
        <Layout>
            <Goikoa>
                <h1>Piezaren informazioa</h1>
                <p>Behar duzun pieza aurkitu</p>
            </Goikoa>

            <div className='container'>
                <div className='row ms-2'>
                    <div className='col'>
                        <ReturnBack text='Katalogora itzuli' href='/erosi' />
                    </div>
                </div>

                <div className='row ms-2'>
                    <div className='col-12 col-lg-6'>
                        <Carrusel />
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 mt-lg-0 mt-md-4 mt-sm-4">
                        <div className="d-flex flex-column p-3 rounded-4 border shadow-lg h-100">
                            <h3>{piezaa.zatia}</h3>
                            <hr />
                            <span><strong>DATUAK:</strong></span>
                            <ul className="py-3">
                                <li>Matrikula: {piezaa.matrikula}</li>
                                <li>Egoera: {produk.egoera}</li>
                            </ul>
                            <p><strong>DESKRIBAPENA:</strong></p><br />
                            <p className="mb-0">
                                {produk.deskribapena}
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-2 h-50 mt-lg-0 mt-md-4 mt-sm-4">
                        <div className="d-flex flex-column justify-content-between h-100 p-3 rounded-4 border shadow-lg">
                            <div>
                                <h5>{produk.prezioa} €</h5>
                            </div>
                            <div className="mt-3">
                                <button className="bg-orange w-100 rounded-5 border-0 py-2 text-white">
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
