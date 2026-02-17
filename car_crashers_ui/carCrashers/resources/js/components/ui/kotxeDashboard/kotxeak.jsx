import React, { useState } from 'react';
import DashboardContent from './dashboardContent.jsx';
import KotxeaModal from './kotxeaModal.jsx';
import KotxeakFotosModal from './KotxeakFotosModal.jsx';
import './dashboardContent.css';

function Kotxeak({ kotxeak }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedKotxea, setSelectedKotxea] = useState(null);

  const [showFotosModal, setShowFotosModal] = useState(false);
  const [selectedKotxeaFotos, setSelectedKotxeaFotos] = useState(null);

  const handleEdit = (kotxe) => {
    setSelectedKotxea(kotxe);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedKotxea(null);
  };

  const handleOpenFotos = (kotxe) => {
    setSelectedKotxeaFotos(kotxe);
    setShowFotosModal(true);
  };

  const handleCloseFotos = () => {
    setShowFotosModal(false);
    setSelectedKotxeaFotos(null);
  };

  const columns = [
    { key: 'matrikula', label: 'Matrikula', className: 'fw-bold', width: '120px' },
    { key: 'marka', label: 'Marka', width: '140px' },
    { key: 'modeloa', label: 'Modeloa', width: '140px' },
    { key: 'urtea', label: 'Urtea', width: '90px' },

    // NUEVO: fotos
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
              e.stopPropagation(); // importante si luego añades click por fila
              handleOpenFotos(item);
            }}
          >
            <i className="bi bi-eye"></i>
            <span className="ms-2">{count}</span>
          </button>
        );
      }
    },

    {
      key: 'created_at',
      label: 'Sartutako Data',
      width: '140px',
      render: (item) => new Date(item.created_at).toLocaleDateString('eu-ES')
    },
  ];

  return (
    <>
      <div className="mb-3">
        <button
          className="btn-dashboard-create"
          onClick={() => {
            setSelectedKotxea(null);
            setShowModal(true);
          }}
        >
          <i className="bi bi-plus-circle"></i>
          Kotxea Sortu
        </button>
      </div>

      <DashboardContent
        data={kotxeak}
        title="Kotxeen Zerrenda"
        icon="bi bi-car-front-fill"
        columns={columns}
        emptyMessage="Ez dago kotxerik datu-basean"
        keyField="matrikula"
        onEdit={handleEdit}
        deleteRoute={(matrikula) => `/kotxeak/${matrikula}`}
      />

      <KotxeaModal
        show={showModal}
        onClose={handleCloseModal}
        kotxea={selectedKotxea}
        kotxeak={kotxeak}
      />

      <KotxeakFotosModal
        show={showFotosModal}
        onClose={handleCloseFotos}
        kotxea={selectedKotxeaFotos}
      />
    </>
  );
}

export default Kotxeak;
