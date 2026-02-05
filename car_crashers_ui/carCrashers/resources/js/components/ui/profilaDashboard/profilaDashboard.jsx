import React, { useState } from 'react';
import { usePage, router, Link } from '@inertiajs/react';
import '../mainDashboard/mainDashboard.css'; 

function ProfilaDashboard() {
    const { props } = usePage();
    const user = props.auth?.user;

    // Estado para formulario de edición
    const [editing, setEditing] = useState(false);
    const [formData, setFormData] = useState({
        name: user?.name || '',
        email: user?.email || '',
        telefono: user?.telefono || '',
        mota: user?.mota || ''
    });
    const [errors, setErrors] = useState({});
    const [saving, setSaving] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        // Limpiar error al escribir
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: '' });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSaving(true);

        // Enviar al backend
        router.post('/user/profile', formData, {
            onSuccess: () => {
                setEditing(false);
                setSaving(false);
                setErrors({});
            },
            onError: (errors) => {
                setErrors(errors);
                setSaving(false);
            }
        });
    };

    if (!user) {
        return (
            <div className="p-5">
                <div className="alert alert-warning">
                    Erabiltzaile informazioa kargatzen...
                </div>
            </div>
        );
    }

    return (
        <div className="p-5">
            {/* Header */}
            <div className="dashboard-header mb-5">
                <h1 className="mb-1">📋 Zure Profila</h1>
                <p className="text-muted">Kudeatu zure kontuaren datuak</p>
            </div>

            {/* Card Principal */}
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="card h-100 shadow-sm">
                        <div className="card-header bg-white border-bottom-0 pt-4 px-4 d-flex justify-content-between align-items-center">
                            <h5 className="fw-bold mb-0">
                                <i className="bi bi-person-circle me-2"></i>
                                Kontu Informazioa
                            </h5>
                            <button 
                                className="btn btn-outline-primary btn-sm"
                                onClick={() => setEditing(!editing)}
                                disabled={saving}
                            >
                                {editing ? (
                                    <>
                                        <i className="bi bi-x-lg me-1"></i>
                                        Utzi
                                    </>
                                ) : (
                                    <>
                                        <i className="bi bi-pencil me-1"></i>
                                        Editatu
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="card-body px-4 py-4">
                            {!editing ? (
                                /* 👀 VISTA LECTURA */
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <label className="form-label fw-bold text-muted">Izena</label>
                                        <p className="fs-5 fw-semibold text-dark">{formData.name}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-bold text-muted">Emaila</label>
                                        <div className="d-flex align-items-center">
                                            <p className="fs-5 mb-0 fw-semibold text-dark me-2">
                                                {formData.email}
                                            </p>
                                            {!user.email_verified_at && (
                                                <span className="badge bg-warning text-dark">
                                                    Egiaztatu behar
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-bold text-muted">Telefonoa</label>
                                        <p className="fs-5 fw-semibold text-dark">{formData.telefono || 'Gehitu telefonoa'}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label fw-bold text-muted">Rola</label>
                                        <span className={`badge fs-6 ${
                                            formData.mota === 'admin' ? 'bg-danger' : 
                                            formData.mota === 'langile' ? 'bg-info' : 'bg-success'
                                        }`}>
                                            {formData.mota === 'admin' ? 'Administraria' :
                                             formData.mota === 'langile' ? 'Langilea' : 'Bezeroa'}
                                        </span>
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label fw-bold text-muted">Kontua sortua</label>
                                        <p className="fs-6 text-muted">
                                            {new Date(user.created_at).toLocaleDateString('eu-ES')}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                /* ✏️ MODO EDICIÓN */
                                <form onSubmit={handleSubmit}>
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <label className="form-label">Izena *</label>
                                            <input
                                                type="text"
                                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            {errors.name && (
                                                <div className="invalid-feedback">{errors.name}</div>
                                            )}
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Emaila *</label>
                                            <input
                                                type="email"
                                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                            />
                                            {errors.email && (
                                                <div className="invalid-feedback">{errors.email}</div>
                                            )}
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label">Telefonoa</label>
                                            <input
                                                type="tel"
                                                className={`form-control ${errors.telefono ? 'is-invalid' : ''}`}
                                                name="telefono"
                                                value={formData.telefono}
                                                onChange={handleInputChange}
                                                placeholder="600 123 456"
                                            />
                                            {errors.telefono && (
                                                <div className="invalid-feedback">{errors.telefono}</div>
                                            )}
                                        </div>
                                        <div className="col-12">
                                            <div className="d-flex gap-3 mt-4">
                                                <button
                                                    type="submit"
                                                    className="btn btn-primary px-4"
                                                    disabled={saving}
                                                >
                                                    {saving ? (
                                                        <>
                                                            <span className="spinner-border spinner-border-sm me-2"></span>
                                                            Gordetzen...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <i className="bi bi-check-lg me-2"></i>
                                                            Gorde Aldaketak
                                                        </>
                                                    )}
                                                </button>
                                                <button
                                                    type="button"
                                                    className="btn btn-outline-secondary px-4"
                                                    onClick={() => setEditing(false)}
                                                    disabled={saving}
                                                >
                                                    Utzi
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="row mt-4">
                        <div className="col-md-6">
                            <Link href="/dashboard" className="btn btn-outline-secondary w-100">
                                <i className="bi bi-arrow-left me-2"></i>
                                Itzuli Dashboard-era
                            </Link>
                        </div>
                        <div className="col-md-6">
                            <Link href="/eskaerak" className="btn btn-outline-primary w-100">
                                <i className="bi bi-receipt me-2"></i>
                                Nire Eskaerak
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilaDashboard;
