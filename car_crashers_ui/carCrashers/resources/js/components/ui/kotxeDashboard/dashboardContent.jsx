import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import './dashboardContent.css';

function DashboardContent({ data, title, icon, columns, emptyMessage, keyField = 'id', onEdit, deleteRoute }) {
  const [deletingId, setDeletingId] = useState(null);

  const hasActions = onEdit || deleteRoute;

  const handleDelete = (item) => {
    setDeletingId(item[keyField]);
    router.delete(deleteRoute(item[keyField]), {
      onSuccess: () => setDeletingId(null),
      onError: () => setDeletingId(null),
    });
  };

  return (
    <div className="card shadow-sm h-100">
      <div className="card-header bg-white py-2 py-md-3 d-flex justify-content-between align-items-center gap-2">
        <h5 className="mb-0 small">
          <i className={`${icon} me-2`}></i>
          {title}
        </h5>
        <span className="badge bg-light text-dark small">
          {data?.length || 0} {data?.length === 1 ? 'item' : 'items'}
        </span>
      </div>

      <div className="card-body p-0">
        {!data || data.length === 0 ? (
          <div className="text-center p-4 p-md-5">
            <i className="bi bi-inbox fs-1 text-muted"></i>
            <p className="text-muted mt-3 small">{emptyMessage}</p>
          </div>
        ) : (
          <div className="table-responsive">
            <table className="table table-hover table-striped mb-0 table-sm">
              <thead className="table-light sticky-top">
                <tr>
                  {columns.map((col) => (
                    <th key={col.key} style={{ minWidth: col.width || 'auto' }} className="small">
                      {col.label}
                    </th>
                  ))}
                  {hasActions && <th style={{ minWidth: '80px' }} className="small">Akzioak</th>}
                </tr>
              </thead>

              <tbody>
                {data.map((item) => {
                  const rowIsDeleting = deletingId === item[keyField];

                  return (
                    <tr key={item[keyField]} style={{ opacity: rowIsDeleting ? 0.6 : 1 }}>
                      {columns.map((col) => (
                        <td key={col.key} className={`${col.className || ''} small`} style={{ fontSize: '0.85rem' }}>
                          {col.render ? col.render(item) : item[col.key]}
                        </td>
                      ))}

                      {hasActions && (
                        <td className="small">
                          <div
                            className="dashboard-content-actions d-flex gap-1"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {/* Botón EDITAR: solo si onEdit existe */}
                            {onEdit && (
                              <button
                                type="button"
                                className="btn-dashboard-edit btn btn-sm btn-outline-primary"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onEdit(item);
                                }}
                                title="Eguneratu"
                                disabled={rowIsDeleting}
                              >
                                <i className="bi bi-pencil"></i>
                              </button>
                            )}

                            {/* Botón ELIMINAR: solo si deleteRoute existe */}
                            {deleteRoute && (
                              <button
                                type="button"
                                className="btn-dashboard-delete btn btn-sm btn-outline-danger"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (window.confirm('Ziur al zaude elementu hau ezabatu nahi duzula?')) {
                                    handleDelete(item);
                                  }
                                }}
                                title="Ezabatu"
                                disabled={rowIsDeleting}
                              >
                                {rowIsDeleting ? (
                                  <span
                                    className="spinner-border spinner-border-sm spinner-loading"
                                    role="status"
                                    aria-hidden="true"
                                  ></span>
                                ) : (
                                  <i className="bi bi-trash"></i>
                                )}
                              </button>
                            )}
                          </div>
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default DashboardContent;
