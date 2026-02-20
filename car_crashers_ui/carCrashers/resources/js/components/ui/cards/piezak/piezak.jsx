import './piezak.css';
import imgPieza from '@assets/images/piezaExample.png';
import { Link } from '@inertiajs/react';

function Piezak({ pieza }) {
    const productua = pieza.produktuak?.[0] || {};
    const egoera = productua.egoera || 'Unknown';
    const prezioa = productua.prezioa || 'Kontsultatu';
    const url = "details/"+productua.matrikula+"/"+pieza.id;

    return(
        <div className="card shadow-lg h-100">
            <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
                <img src={imgPieza} className="card-img-top w-100 h-100 object-fit-cover" alt="..." />
                <span
                className="badge text-bg-success rounded-pill position-absolute"
                style={{ top: "10px", left: "10px", fontSize: "0.75rem" }}
                >
                {egoera}
                </span>
            </div>

            <div className="card-body d-flex flex-column flex-grow-1">
                {/* Marca y modelo más destacados */}
                <h5 className="card-title fw-bold text-dark mb-3 small">{pieza.zatia}</h5>

                <div className="bg-warning bg-opacity-25 rounded-3 p-2 text-center mb-3">
                    <small className="text-muted d-block">Prezioa</small>
                    <span className="fs-6 fs-md-5 fw-bold text-dark">{prezioa} €</span>
                </div>

                {/* Botón a ancho completo */}
                <Link href={url} className="btn btn-secondary btn-sm w-100 mt-auto">
                Ikusi <i className="bi bi-box-arrow-up-right"></i>
                </Link>
            </div>
        </div>
    );
}

export default Piezak;