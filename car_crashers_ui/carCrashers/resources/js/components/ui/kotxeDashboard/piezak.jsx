import React, { useState } from 'react';
import DashboardContent from './dashboardContent.jsx';
import PiezaModal from './piezaModal.jsx';
import './dashboardContent.css';

function Piezak({ piezak, kotxeak = [] }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedPieza, setSelectedPieza] = useState(null);

  const columns = [
    {
      key: 'id',
      label: 'ID',
      render: (item) => `${item.id}`
    },
    {
      key: 'zatia',
      label: 'Pieza',
      className: 'fw-bold'
    },
    {
      key: 'matrikula',
      label: 'Kotxea (Matrikula)'
    },
    {
      key: 'created_at',
      label: 'Sartutako Data',
      render: (item) => new Date(item.created_at).toLocaleDateString('eu-ES')
    }
  ];

  const handleEdit = (pieza) => {
    setSelectedPieza(pieza);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedPieza(null);
  };

  return (
    <>
      <div className="mb-3">
        <button className="btn-dashboard-create" onClick={() => { setSelectedPieza(null); setShowModal(true); }}>
          <i className="bi bi-plus-circle"></i>
          Pieza Sortu
        </button>
      </div>

      <DashboardContent data={piezak} title="Piezen Stocka" icon="bi bi-tools" columns={columns} emptyMessage="Ez dago piezarik datu-basean" onEdit={handleEdit} deleteRoute={(id) => `/piezak/${id}`} />

      <PiezaModal show={showModal} onClose={handleCloseModal} pieza={selectedPieza} kotxeak={kotxeak} />
    </>
  );
}

export default Piezak;