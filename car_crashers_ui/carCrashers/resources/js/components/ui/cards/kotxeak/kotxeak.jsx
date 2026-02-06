import './kotxeak.css';
import imgCar from '@assets/images/carExample.jpeg';
import { Link } from '@inertiajs/react';

function Kotxeak({ kotxea }) {
    const productua = kotxea.produktuak?.[0] || {};
    const egoera = productua.egoera || kotxea.egoera || 'Unknown';
    const prezioa = productua.prezioa || 'Kontsultatu';
    const url = "details/"+productua.id;

    return (
        <div className="card shadow-lg">
            <div className="position-relative">
                <img src={imgCar} className="card-img-top" alt="..." />
                <span
                className="badge text-bg-success rounded-pill position-absolute"
                style={{ top: "10px", left: "10px" }}
                >
                {egoera}
                </span>
            </div>

            <div className="card-body">
                {/* Marca y modelo más destacados */}
                <h4 className="card-title fw-bold text-dark mb-1">{kotxea.marka}</h4>
                <h6 className="card-subtitle text-muted mb-3">{kotxea.modeloa}</h6>

                {/* Precio grande y llamativo */}
                <div className="bg-warning bg-opacity-25 rounded-3 p-2 text-center mb-3">
                    <small className="text-muted d-block">Prezioa</small>
                    <span className="fs-3 fw-bold text-dark">{prezioa} €</span>
                </div>

                {/* Año con icono */}
                <p className="text-center text-secondary mb-3">
                    <i className="bi bi-calendar3 me-2"></i>
                    <span className="fw-semibold">{kotxea.urtea}</span>
                </p>

                {/* Botón a ancho completo */}
                <Link href={url} className="btn btn-secondary w-100">
                Ikusi <i className="bi bi-box-arrow-up-right"></i>
                </Link>
            </div>
        </div>
  );
}

export default Kotxeak;