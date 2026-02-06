import React from 'react';
import Layout from '../components/layout/layout.jsx';
import ReturnBack from '../components/ui/buttons/returnBack/returnBack.jsx';
import Carrusel from '../components/ui/carrusel/carrusel.jsx';
import KotxeakCard from '../components/ui/cards/kotxeak/kotxeak.jsx';
import PiezakCard from '../components/ui/cards/piezak/piezak.jsx';
import Goikoa from '../components/ui/goikoa/goikoa.jsx';
import { usePage } from '@inertiajs/react';


function Details() {
    const { produktua, antzekoKotxeak, antzekoPiezak } = usePage().props;

    return (
        <React.StrictMode>
        <Layout>
            <Goikoa>
                <h1>Produktuaren informazioa</h1>
                <p>Behar duzun kotxea edo pieza aurkitu</p>
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
                            <h3>{produktua.matrikula}</h3>
                            <hr />
                            <h3>Marka</h3>
                            <ul className="py-3">
                                <li>Datuak: Datu</li>
                                <li>Datuak: Datu</li>
                                <li>Datuak: Datu</li>
                                <li>Datuak: Datu</li>
                            </ul>
                            <p className="mb-0">
                                Descripcion: Lorem ipsum dolor sit amet consectetur adipiscing elit, euismod mauris ridiculus accumsan fames aptent, est venenatis sollicitudin aenean lectus neque.
                            </p>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-2 h-50 mt-lg-0 mt-md-4 mt-sm-4">
                        <div className="d-flex flex-column justify-content-between h-100 p-3 rounded-4 border shadow-lg">
                            <div>
                                <h5 className="text-danger">XX.XX $</h5>
                                <p className="text-success mb-0">Stock-a: XX</p>
                            </div>
                            <div className="mt-3">
                                <select className="form-select mb-2">
                                    <option>Kopurua...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>...</option>
                                </select>
                                <button className="bg-orange w-100 rounded-5 border-0 py-2 text-white">
                                    Saskira gehitu
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div class="row flex-column ms-2 mt-5 mb-4 p-3 rounded-4 border shadow-lg">
                    <div class="col-12 px-3">
                        <h1>Antzeko produktuak</h1>
                    </div>

                    <div class="col-12 d-flex justify-content-lg-between justify-content-around flex-wrap mt-3 gap-3">
                        {antzekoKotxeak.map((kotxea) =>
                            <KotxeakCard kotxea={kotxea} />
                        )}
                        {antzekoPiezak.map((pieza) =>
                            <PiezakCard pieza={pieza} />
                        )}
                    </div>
                </div>
            </div>
        </Layout>
        </React.StrictMode>
    );
}

export default Details;
