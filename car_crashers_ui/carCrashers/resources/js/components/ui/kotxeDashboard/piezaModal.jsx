import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import './dashboardContent.css';

function PiezaModal({ show, onClose, pieza = null, kotxeak = [] }) {
  const [formData, setFormData] = useState({
    zatia: pieza?.zatia || '',
    matrikula: pieza?.matrikula || '',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
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

    if (pieza) {
      // Actualizar
      router.put(`/piezak/${pieza.id}`, formData, {
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
      router.post('/piezak', formData, {
        onError: (err) => {
          setErrors(err);
          setLoading(false);
        },
        onSuccess: () => {
          onClose();
          setFormData({ zatia: '', matrikula: '' });
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
              {pieza ? 'Pieza Eguneratu' : 'Pieza Sortu'}
            </h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="zatia" className="form-label fw-600">Pieza</label>
                <input
                  type="text"
                  className={`form-control ${errors.zatia ? 'is-invalid' : ''}`}
                  id="zatia"
                  name="zatia"
                  value={formData.zatia}
                  onChange={handleChange}
                  placeholder="Aurreko kapoaren buelta, atzealdeko presa, etab."
                  required
                />
                {errors.zatia && <div className="invalid-feedback d-block small">{errors.zatia}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="matrikula" className="form-label fw-600">Kotxea (Matrikula)</label>
                <select
                  className={`form-select ${errors.matrikula ? 'is-invalid' : ''}`}
                  id="matrikula"
                  name="matrikula"
                  value={formData.matrikula}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Aukeratu kotxea --</option>
                  {kotxeak.map((kotxe) => (
                    <option key={kotxe.matrikula} value={kotxe.matrikula}>
                      {kotxe.matrikula} - {kotxe.marka} {kotxe.modeloa}
                    </option>
                  ))}
                </select>
                {errors.matrikula && <div className="invalid-feedback d-block small">{errors.matrikula}</div>}
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
                  pieza ? 'Eguneratu' : 'Sortu'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PiezaModal;
