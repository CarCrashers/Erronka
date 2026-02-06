import React, { useState } from 'react';
import { Link, router } from '@inertiajs/react';
import PeritutzaModal from './peritutzaModal';

const Peritutza = ({ peritutza }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedEskaera, setSelectedEskaera] = useState(null);

    const handleEdit = (eskaera) => {
        setSelectedEskaera(eskaera);
        setShowModal(true);
    };

    const handleDelete = (id) => {
        if (confirm('Ziur zaude eskaera hau ezabatu nahi duzula?')) {
            router.delete(`/peritutza/${id}`);
        }
    };

    return (
        <div className="container-fluid mt-4">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="h4 fw-bold text-dark">Peritutza Eskaerak</h2>
                <Link href="/desguazatu" className="btn btn-primary shadow-sm">
                    <i className="bi bi-plus-lg me-2"></i>Eskaera Berria
                </Link>
            </div>

            <div className="card shadow-sm border-0">
                <div className="card-body p-0 text-center">
                    <div className="table-responsive">
                        <table className="table table-hover align-middle mb-0">
                            <tbody>
                                {peritutza && peritutza.map((eskaera) => (
                                    <tr key={eskaera.id}>
                                        <td className="fw-bold ps-4">{eskaera.matrikula}</td>
                                        <td>{eskaera.marka} {eskaera.modelo}</td>
                                        <td>{eskaera.urtea}</td>
                                        <td>
                                            <span className={`badge rounded-pill ${
                                                eskaera.eskaera_egoera === 'amaituta' ? 'bg-success' : 
                                                eskaera.eskaera_egoera === 'prozesuan' ? 'bg-primary' : 
                                                'bg-warning text-dark' // Por defecto (zain)
                                            }`}>
                                                {eskaera.eskaera_egoera?.toUpperCase() || 'ZAIN'}
                                            </span>
                                        </td>
                                        <td>{eskaera.prezioa ? `${eskaera.prezioa} €` : <span className="text-muted small">---</span>}</td>
                                        <td className="text-end pe-4">
                                            <div className="btn-group">
                                                <button onClick={() => handleEdit(eskaera)} className="btn btn-sm btn-outline-primary">
                                                    <i className="bi bi-pencil-square"></i>
                                                </button>
                                                <button onClick={() => handleDelete(eskaera.id)} className="btn btn-sm btn-outline-danger">
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            {/* Invocamos el modal separado */}
            <PeritutzaModal 
                show={showModal} 
                onClose={() => setShowModal(false)} 
                eskaera={selectedEskaera} 
            />
        </div>
    );
};

export default Peritutza;