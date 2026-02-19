import React, { useState } from 'react';
import { usePage, router, Link } from '@inertiajs/react';
import '../mainDashboard/mainDashboard.css'; 

function ProfilaDashboard() {
    const { props } = usePage();
    const user = props.auth?.user;
    const allUsers = props.users || [];

    const [editing, setEditing] = useState(false);

    const handleRestore = (id) => {
        if (confirm('¿Quieres recuperar este usuario?')) {
            router.patch(route('users.restore', id));
        }
    };

    const handleDelete = (id) => {
        if (confirm('¿Seguro que quieres eliminar este usuario?')) {
            router.delete(route('users.destroy', id));
        }
    };

    return (
        <div className="container-fluid py-4">
            <div className="card shadow-sm border-0 mb-4">
                <div className="card-body p-4">
                    <h4 className="mb-4">Nire Profila</h4>
                </div>
            </div>

            {user?.mota === 'admin' && (
                <div className="card shadow-sm border-0">
                    <div className="card-header bg-white py-3">
                        <h5 className="mb-0">Erabiltzaileen Kudeaketa</h5>
                    </div>
                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>Izena</th>
                                        <th>Email</th>
                                        <th>Egoera</th>
                                        <th className="text-end">Ekintzak</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {allUsers.map((u) => (
                                        <tr key={u.id} className={u.deleted_at ? 'table-danger' : ''}>
                                            <td>{u.name}</td>
                                            <td>{u.email}</td>
                                            <td>
                                                {u.deleted_at ? (
                                                    <span className="badge bg-danger">Ezabatuta</span>
                                                ) : (
                                                    <span className="badge bg-success">Aktiboa</span>
                                                )}
                                            </td>
                                            <td className="text-end">
                                                {u.deleted_at ? (
                                                    <button 
                                                        onClick={() => handleRestore(u.id)}
                                                        className="btn btn-sm btn-success d-flex align-items-center gap-1 ms-auto"
                                                    >
                                                        <i className="bi bi-arrow-counterclockwise"></i>
                                                        Berreskuratu
                                                    </button>
                                                ) : (
                                                    u.id !== user.id && (
                                                        <button 
                                                            onClick={() => handleDelete(u.id)}
                                                            className="btn btn-sm btn-outline-danger"
                                                        >
                                                            <i className="bi bi-trash"></i>
                                                        </button>
                                                    )
                                                )}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProfilaDashboard;