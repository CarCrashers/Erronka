import './piezak.css';
import imgPieza from '@assets/images/piezaExample.png';
import { Link } from '@inertiajs/react';

function Piezak({ pieza }) {
    const productua = pieza.produktuak?.[0] || {};
    const egoera = productua.egoera || kotxea.egoera || 'Unknown';
    const prezioa = productua.prezioa || 'Kontsultatu';
    const url = "details/"+productua.id;

    return(
        <div className="card shadow-lg">
            <div className="position-relative">
                <img src={imgPieza} className="card-img-top" alt="..." />
                <span
                className="badge text-bg-success rounded-pill position-absolute"
                style={{ top: "10px", left: "10px" }}
                >
                {egoera}
                </span>
            </div>

            <div className="card-body">
                {/* Marca y modelo más destacados */}
                <h4 className="card-title fw-bold text-dark mb-3">{pieza.zatia}</h4>

                {/* Precio grande y llamativo */}
                <div className="bg-warning bg-opacity-25 rounded-3 p-2 text-center mb-3">
                    <small className="text-muted d-block">Prezioa</small>
                    <span className="fs-3 fw-bold text-dark">{prezioa} €</span>
                </div>

                {/* Botón a ancho completo */}
                <Link href={url} className="btn btn-secondary w-100">
                Ikusi <i className="bi bi-box-arrow-up-right"></i>
                </Link>
            </div>
        </div>
    );
}

export default Piezak;