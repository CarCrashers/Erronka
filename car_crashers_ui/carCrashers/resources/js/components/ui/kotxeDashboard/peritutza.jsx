import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import PeritutzaModal from './peritutzaModal';
import PeritutzaFotosModal from './PeritutzaFotosModal';
import DashboardContent from './dashboardContent.jsx';
import './dashboardContent.css';

const Peritutza = ({ peritutza, isUserView = false, userMota}) => {

  const canEdit = userMota === 'langile' || userMota === 'admin';

  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedEskaera, setSelectedEskaera] = useState(null);

  const [showFotosModal, setShowFotosModal] = useState(false);
  const [selectedFotosEskaera, setSelectedFotosEskaera] = useState(null);

  const handleEdit = (eskaera) => {
    setSelectedEskaera(eskaera);
    setShowEditModal(true);
  };

  const handleCloseEditModal = () => {
    setShowEditModal(false);
    setSelectedEskaera(null);
  };

  const handleOpenFotos = (eskaera) => {
    setSelectedFotosEskaera(eskaera);
    setShowFotosModal(true);
  };

  const handleCloseFotos = () => {
    setShowFotosModal(false);
    setSelectedFotosEskaera(null);
  };

  const columns = [
    { key: 'matrikula', label: 'Matrikula', className: 'fw-bold', width: '120px' },
    { key: 'ibilgailua', label: 'Ibilgailua', width: '200px', render: (item) => `${item.marka} ${item.modelo}` },
    { key: 'urtea', label: 'Urtea', width: '90px' },
    {
      key: 'eskaera_egoera',
      label: 'Egoera',
      width: '110px',
      render: (item) => (
        <span
          className={`badge rounded-pill ${
            item.eskaera_egoera === 'amaituta'
              ? 'bg-success'
              : item.eskaera_egoera === 'prozesuan'
              ? 'bg-primary'
              : 'bg-warning text-dark'
          }`}
        >
          {item.eskaera_egoera?.toUpperCase() || 'ZAIN'}
        </span>
      ),
    },
    {
      key: 'prezioa',
      label: 'Prezioa',
      width: '110px',
      render: (item) => (item.prezioa ? `${item.prezioa} €` : <span className="text-muted small">---</span>),
    },
    {
      key: 'argazkiak',
      label: 'Argazkiak',
      width: '120px',
      render: (item) => {
        const count = item.argazki_urls?.length || 0;

        return (
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            title="Ikusi argazkiak"
            disabled={count === 0}
            onClick={(e) => {
              e.stopPropagation();
              handleOpenFotos(item);
            }}
          >
            <i className="bi bi-eye"></i>
            <span className="ms-2">{count}</span>
          </button>
        );
      },
    },
  ];

  return (
      <>
        {canEdit && (
          <div className="mb-3 d-flex justify-content">
            <Link href="/desguazatu" className="btn-dashboard-create text-decoration-none">
              <i className="bi bi-plus-circle me-2"></i>
              Eskaera Berria
            </Link>
          </div>
        )}

        <DashboardContent
          data={peritutza}
          title={isUserView ? 'Nire Eskaerak' : 'Peritutza Eskaerak'} 
          icon="bi bi-clipboard-data-fill"
          columns={columns}
          emptyMessage="Ez dago peritutza eskaerarik momentu honetan."
          keyField="id"
          onEdit={canEdit ? handleEdit : null}                        
          deleteRoute={canEdit ? (id) => `/peritutza/${id}` : null}   
        />

        {canEdit && (
          <PeritutzaModal show={showEditModal} onClose={handleCloseEditModal} eskaera={selectedEskaera} />
        )}

        <PeritutzaFotosModal show={showFotosModal} onClose={handleCloseFotos} eskaera={selectedFotosEskaera} />
      </>
  );
};

export default Peritutza;
