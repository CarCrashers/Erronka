import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import './dashboardContent.css';

function DashboardContent({ data, title, icon, columns, emptyMessage, keyField = 'id', onEdit, deleteRoute }) {
  const [deletingId, setDeletingId] = useState(null);

  const handleDelete = (item) => {
    setDeletingId(item[keyField]);
    router.delete(deleteRoute(item[keyField]), {
      onSuccess: () => {
        setDeletingId(null);
      },
      onError: () => {
        setDeletingId(null);
      }
    });
  };

  return (
    <div className="card shadow-sm h-100">
      <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
        <h5 className="mb-0">
          <i className={`${icon} me-2`}></i>
          {title}
        </h5>
        <span className="badge bg-light text-dark">
          {data?.length || 0} {data?.length === 1 ? 'item' : 'items'}
        </span>
      </div>
      <div className="card-body p-0">
        {!data || data.length === 0 ? (
          <div className="text-center p-5">
            <i className="bi bi-inbox fs-1 text-muted"></i>
            <p className="text-muted mt-3">{emptyMessage}</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover table-striped mb-0">
              <thead className="table-light sticky-top">
                <tr>
                  {columns.map((col) => (
                    <th key={col.key} style={{ minWidth: col.width || 'auto' }}>
                      {col.label}
                    </th>
                  ))}
                  <th style={{ minWidth: '120px' }}>Akzioak</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr key={item[keyField]} style={{ opacity: deletingId === item[keyField] ? 0.6 : 1 }}>
                    {columns.map((col) => (
                      <td key={col.key} className={col.className || ''}>
                        {col.render ? col.render(item) : item[col.key]}
                      </td>
                    ))}
                    <td>
                      <div className="dashboard-content-actions">
                        <button
                          type="button"
                          className="btn-dashboard-edit"
                          onClick={() => onEdit(item)}
                          title="Eguneratu"
                          disabled={deletingId === item[keyField]}
                        >
                          <i className="bi bi-pencil"></i>
                        </button>
                        <button
                          type="button"
                          className="btn-dashboard-delete"
                          onClick={() => {
                            if (window.confirm('Ziur al zaude elementu hau ezabatu nahi duzula?')) {
                              handleDelete(item);
                            }
                          }}
                          title="Ezabatu"
                          disabled={deletingId === item[keyField]}
                        >
                          {deletingId === item[keyField] ? (
                            <span className="spinner-border spinner-border-sm spinner-loading" role="status" aria-hidden="true"></span>
                          ) : (
                            <i className="bi bi-trash"></i>
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardContent;
