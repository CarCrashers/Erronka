import React, { useState } from 'react';
import { Link, router } from '@inertiajs/react';
import PeritutzaModal from './peritutzaModal';
import DashboardContent from './dashboardContent.jsx'; // Importamos el componente común
import './dashboardContent.css'; // Importamos los estilos comunes

const Peritutza = ({ peritutza }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedEskaera, setSelectedEskaera] = useState(null);

    // Configuración de las columnas para DashboardContent
    const columns = [
        {
            key: 'matrikula',
            label: 'Matrikula',
            className: 'fw-bold'
        },
        {
            key: 'ibilgailua', // Clave inventada para el render combinado
            label: 'Ibilgailua',
            render: (item) => `${item.marka} ${item.modelo}`
        },
        {
            key: 'urtea',
            label: 'Urtea'
        },
        {
            key: 'eskaera_egoera',
            label: 'Egoera',
            render: (item) => (
                <span className={`badge rounded-pill ${
                    item.eskaera_egoera === 'amaituta' ? 'bg-success' : 
                    item.eskaera_egoera === 'prozesuan' ? 'bg-primary' : 
                    'bg-warning text-dark' // 'zain' por defecto
                }`}>
                    {item.eskaera_egoera?.toUpperCase() || 'ZAIN'}
                </span>
            )
        },
        {
            key: 'prezioa',
            label: 'Prezioa',
            render: (item) => item.prezioa ? `${item.prezioa} €` : <span className="text-muted small">---</span>
        }
    ];

    const handleEdit = (eskaera) => {
        setSelectedEskaera(eskaera);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setSelectedEskaera(null);
    };

    return (
        <>
            <div className="mb-3 d-flex justify-content">
                <Link href="/desguazatu" className="btn-dashboard-create text-decoration-none">
                    <i className="bi bi-plus-circle me-2"></i>
                    Eskaera Berria
                </Link>
            </div>

            <DashboardContent
                data={peritutza}
                title="Peritutza Eskaerak"
                icon="bi bi-clipboard-data-fill"
                columns={columns}
                emptyMessage="Ez dago peritutza eskaerarik momentu honetan."
                keyField="id"
                onEdit={handleEdit}
                deleteRoute={(id) => `/peritutza/${id}`} 
            />

            <PeritutzaModal 
                show={showModal} 
                onClose={handleCloseModal} 
                eskaera={selectedEskaera} 
            />
        </>
    );
};

export default Peritutza;