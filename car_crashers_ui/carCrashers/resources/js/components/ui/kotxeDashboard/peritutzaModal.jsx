import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';

const PeritutzaModal = ({ show, onClose, eskaera }) => {
    const { data, setData, put, processing, reset, errors } = useForm({
        prezioa: '',
        eskaera_egoera: 'zain',
        desguazatzeko: false,
    });

    useEffect(() => {
        if (eskaera) {
            setData({
                prezioa: eskaera.prezioa || '',
                eskaera_egoera: eskaera.eskaera_egc || eskaera.eskaera_egoera || 'zain', 
                desguazatzeko: !!eskaera.desguazatzeko, 
            });
        }
    }, [eskaera]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!eskaera) return; 

        put(`/peritutza/${eskaera.id}`, {
            onSuccess: () => {
                onClose();
                reset();
            },
        });
    };

    if (!show) return null;

    return (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
            <div className="modal-dialog shadow-lg">
                <div className="modal-content border-0">
                    <form onSubmit={handleSubmit}>
                        <div className="modal-header bg-primary text-white">
                            <h5 className="modal-title">Editatu: {eskaera?.matrikula}</h5>
                            <button type="button" className="btn-close btn-close-white" onClick={onClose}></button>
                        </div>
                        <div className="modal-body p-4">
                            {/* PREZIOA */}
                            <div className="mb-3">
                                <label className="form-label fw-bold">Prezioa (€)</label>
                                <input 
                                    type="number" 
                                    step="0.01"
                                    className={`form-control ${errors.prezioa ? 'is-invalid' : ''}`}
                                    value={data.prezioa} 
                                    onChange={e => setData('prezioa', e.target.value)} 
                                />
                                {errors.prezioa && <div className="invalid-feedback">{errors.prezioa}</div>}
                            </div>

                            {/* EGOERA - CORREGIDO */}
                            <div className="mb-3">
                                <label className="form-label fw-bold">Egoera</label>
                                <select 
                                    className="form-select"
                                    // CAMBIO AQUÍ: Usamos data.eskaera_egoera
                                    value={data.eskaera_egoera} 
                                    // CAMBIO AQUÍ: Actualizamos 'eskaera_egoera'
                                    onChange={e => setData('eskaera_egoera', e.target.value)}
                                >
                                    <option value="zain">ZAIN</option>
                                    <option value="prozesuan">PROZESUAN</option>
                                    <option value="amaituta">AMAITUTA</option>
                                </select>
                            </div>

                            {/* DESGUAZATZE - CORREGIDO */}
                            <div className="form-check form-switch mt-4">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    role="switch"
                                    // CAMBIO AQUÍ: Usamos data.desguazatzeko
                                    checked={data.desguazatzeko} 
                                    // CAMBIO AQUÍ: Actualizamos 'desguazatzeko'
                                    onChange={e => setData('desguazatzeko', e.target.checked)} 
                                />
                                <label className="form-check-label fw-bold">Desguazatze?</label>
                            </div>
                        </div>
                        <div className="modal-footer bg-light">
                            <button type="button" className="btn btn-outline-secondary" onClick={onClose}>Utzi</button>
                            <button type="submit" className="btn btn-primary px-4" disabled={processing}>
                                {processing ? 'Gordetzen...' : 'Gorde Aldaketak'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PeritutzaModal;