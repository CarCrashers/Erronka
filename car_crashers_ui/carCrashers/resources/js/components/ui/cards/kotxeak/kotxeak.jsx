import './kotxeak.css';
import { Link } from '@inertiajs/react';

function Kotxeak({ kotxea }) {
    const productua = kotxea.produktuak?.[0] || {};
    const egoera = productua.egoera || kotxea.egoera || 'Unknown';
    const prezioa = productua.prezioa || 'Kontsultatu';
    const url = "/details/"+productua.matrikula;

    const argazkiUrl = productua.argazki_nagusia
        ? `${productua.argazki_nagusia}`
        : '/images/placeholder.png';

    return (
        <div className="card shadow-lg">
            <div className="position-relative">
                <img 
                    src={argazkiUrl} 
                    className="card-img-top" 
                    style={{ height: '200px', objectFit: 'cover' }}
                    alt={`${kotxea.marka} ${kotxea.modeloa}`}
                    onError={(e) => { 
                        e.target.src = '/images/placeholder.png';
                    }}
                />
                <span
                className="badge text-bg-success rounded-pill position-absolute"
                style={{ top: "10px", left: "10px", fontSize: "0.75rem" }}
                >
                {egoera}
                </span>
            </div>

            <div className="card-body d-flex flex-column flex-grow-1">
                {/* Marca y modelo más destacados */}
                <h5 className="card-title fw-bold text-dark mb-1 small">{kotxea.marka}</h5>
                <h6 className="card-subtitle text-muted mb-3 small">{kotxea.modeloa}</h6>

                <div className="bg-warning bg-opacity-25 rounded-3 p-2 text-center mb-3">
                    <small className="text-muted d-block">Prezioa</small>
                    <span className="fs-6 fs-md-5 fw-bold text-dark">{prezioa} €</span>
                </div>

                {/* Año con icono */}
                <p className="text-center text-secondary mb-3 small">
                    <i className="bi bi-calendar3 me-2"></i>
                    <span className="fw-semibold">{kotxea.urtea}</span>
                </p>

                {/* Botón a ancho completo */}
                <Link href="/details" className="btn btn-secondary btn-sm w-100 mt-auto">
                Ikusi <i className="bi bi-box-arrow-up-right"></i>
                </Link>
            </div>
        </div>
  );
}

export default Kotxeak;