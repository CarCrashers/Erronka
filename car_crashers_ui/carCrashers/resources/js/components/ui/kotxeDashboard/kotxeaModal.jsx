import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import './dashboardContent.css';

function KotxeaModal({ show, onClose, kotxea = null, kotxeak = [] }) {
  const [formData, setFormData] = useState({
    matrikula: kotxea?.matrikula || '',
    marka: kotxea?.marka || '',
    modeloa: kotxea?.modeloa || '',
    urtea: kotxea?.urtea || new Date().getFullYear(),
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'urtea' ? parseInt(value) : value
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (kotxea) {
      // Actualizar
      router.put(`/kotxeak/${kotxea.matrikula}`, formData, {
        onError: (err) => {
          setErrors(err);
          setLoading(false);
        },
        onSuccess: () => {
          onClose();
          setLoading(false);
        }
      });
    } else {
      // Crear
      router.post('/kotxeak', formData, {
        onError: (err) => {
          setErrors(err);
          setLoading(false);
        },
        onSuccess: () => {
          onClose();
          setFormData({ matrikula: '', marka: '', modeloa: '', urtea: new Date().getFullYear() });
          setLoading(false);
        }
      });
    }
  };

  if (!show) return null;

  return (
    <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-bottom">
            <h5 className="modal-title">
              {kotxea ? 'Kotxea Eguneratu' : 'Kotxea Sortu'}
            </h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="matrikula" className="form-label fw-600">Matrikula</label>
                <input
                  type="text"
                  className={`form-control ${errors.matrikula ? 'is-invalid' : ''}`}
                  id="matrikula"
                  name="matrikula"
                  value={formData.matrikula}
                  onChange={handleChange}
                  disabled={!!kotxea}
                  placeholder="Ej: 1234ABC"
                  required
                />
                {errors.matrikula && <div className="invalid-feedback d-block small">{errors.matrikula}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="marka" className="form-label fw-600">Marka</label>
                <input
                  type="text"
                  className={`form-control ${errors.marka ? 'is-invalid' : ''}`}
                  id="marka"
                  name="marka"
                  value={formData.marka}
                  onChange={handleChange}
                  placeholder="Ej: Ford"
                  required
                />
                {errors.marka && <div className="invalid-feedback d-block small">{errors.marka}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="modeloa" className="form-label fw-600">Modeloa</label>
                <input
                  type="text"
                  className={`form-control ${errors.modeloa ? 'is-invalid' : ''}`}
                  id="modeloa"
                  name="modeloa"
                  value={formData.modeloa}
                  onChange={handleChange}
                  placeholder="Ej: Focus"
                  required
                />
                {errors.modeloa && <div className="invalid-feedback d-block small">{errors.modeloa}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="urtea" className="form-label fw-600">Urtea</label>
                <input
                  type="number"
                  className={`form-control ${errors.urtea ? 'is-invalid' : ''}`}
                  id="urtea"
                  name="urtea"
                  value={formData.urtea}
                  onChange={handleChange}
                  min="1900"
                  max={new Date().getFullYear()}
                  required
                />
                {errors.urtea && <div className="invalid-feedback d-block small">{errors.urtea}</div>}
              </div>
            </div>
            <div className="modal-footer border-top">
              <button type="button" className="btn-dashboard-modal-secondary" onClick={onClose}>
                Itxi
              </button>
              <button type="submit" className="btn-dashboard-modal-primary" disabled={loading}>
                {loading ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Gordetzen...
                  </>
                ) : (
                  kotxea ? 'Eguneratu' : 'Sortu'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default KotxeaModal;
