import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import DashboardContent from '../kotxeDashboard/dashboardContent.jsx';
import UserModal from './erabiltzaileModal.jsx';

function Erabiltzaileak({ users }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleRestore = (user) => {
    if (confirm('¿Quieres recuperar este usuario?')) {
      router.patch(`/users/${user.id}/restore`, {}, {
        onSuccess: () => {
          console.log('Usuario recuperado');
        },
        onError: (errors) => {
          console.error('Error al recuperar usuario:', errors);
        }
      });
    }
  };

  const columns = [
    {
      key: 'id',
      label: 'ID',
      render: (item) => `${item.id}`
    },
    {
      key: 'name',
      label: 'Izena',
      className: 'fw-bold'
    },
    {
      key: 'email',
      label: 'Email'
    },
    {
      key: 'mota',
      label: 'Mota',
      render: (item) => (
        <span className={`badge ${item.mota === 'admin' ? 'bg-danger' : 'bg-info'}`}>
          {item.mota === 'admin' ? 'Admin' : 'Erabiltzailea'}
        </span>
      )
    },
    {
      key: 'deleted_at',
      label: 'Egoera',
      render: (item) => (
        item.deleted_at ? (
          <span className="badge bg-danger">Ezabatuta</span>
        ) : (
          <span className="badge bg-success">Aktiboa</span>
        )
      )
    },
    {
      key: 'created_at',
      label: 'Sartutako Data',
      render: (item) => new Date(item.created_at).toLocaleDateString('eu-ES')
    }
  ];

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };

  return (
    <>
      <div className="mb-3">
        <button className="btn-dashboard-create" onClick={() => { setSelectedUser(null); setShowModal(true);}}>
          <i className="bi bi-plus-circle"></i>
          Erabiltzailea Sortu
        </button>
      </div>

      <DashboardContent data={users} title="Erabiltzaileak" icon="bi bi-people" columns={columns} emptyMessage="Ez dago erabiltzailerik datu-basean" onEdit={handleEdit} deleteRoute={(id) => `/users/${id}`} onRestore={handleRestore}/>

      <UserModal show={showModal} onClose={handleCloseModal} user={selectedUser}/>
    </>
  );
}

export default Erabiltzaileak;
