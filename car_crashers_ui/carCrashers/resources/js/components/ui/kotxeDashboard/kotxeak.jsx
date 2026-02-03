import React, { useState } from 'react';
import DashboardContent from './dashboardContent.jsx';
import KotxeaModal from './kotxeaModal.jsx';
import './dashboardContent.css';

function Kotxeak({ kotxeak }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedKotxea, setSelectedKotxea] = useState(null);

  const columns = [
    {
      key: 'matrikula',
      label: 'Matrikula',
      className: 'fw-bold'
    },
    {
      key: 'marka',
      label: 'Marka'
    },
    {
      key: 'modeloa',
      label: 'Modeloa'
    },
    {
      key: 'urtea',
      label: 'Urtea'
    },
    {
      key: 'created_at',
      label: 'Sartutako Data',
      render: (item) => new Date(item.created_at).toLocaleDateString('eu-ES')
    }
  ];

  const handleEdit = (kotxe) => {
    setSelectedKotxea(kotxe);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedKotxea(null);
  };

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
    </>
  );
}

export default Kotxeak;