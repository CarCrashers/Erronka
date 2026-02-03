import React, { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';

function UserModal({ show, onClose, user = null }) {
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    password: '',
    mota: user?.mota || 'user',
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Actualizar el estado cuando cambia el usuario
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        password: '',
        mota: user.mota || 'user',
      });
    } else {
      setFormData({
        name: '',
        email: '',
        password: '',
        mota: 'user',
      });
    }
    setErrors({});
  }, [user, show]);

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

    if (user) {
      // Actualizar
      router.put(`/users/${user.id}`, formData, {
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
      router.post('/users', formData, {
        onError: (err) => {
          setErrors(err);
          setLoading(false);
        },
        onSuccess: () => {
          onClose();
          setFormData({ name: '', email: '', password: '', mota: 'user' });
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
              {user ? 'Erabiltzailea Eguneratu' : 'Erabiltzailea Sortu'}
            </h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-600">Izena</label>
                <input
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ej: Agoitz"
                  required
                />
                {errors.name && <div className="invalid-feedback d-block small">{errors.name}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-600">Email</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Ej: agoitz@carcrashers.test"
                  required
                />
                {errors.email && <div className="invalid-feedback d-block small">{errors.email}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-600">
                  {user ? 'Pasahitza (hutsik utziaz gero ez da aldatuko)' : 'Pasahitza'}
                </label>
                <input
                  type="password"
                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Min. 8 karaktere"
                  required={!user}
                />
                {errors.password && <div className="invalid-feedback d-block small">{errors.password}</div>}
              </div>

              <div className="mb-3">
                <label htmlFor="mota" className="form-label fw-600">Mota</label>
                <select
                  className={`form-select ${errors.mota ? 'is-invalid' : ''}`}
                  id="mota"
                  name="mota"
                  value={formData.mota}
                  onChange={handleChange}
                  required
                >
                  <option value="user">Erabiltzailea</option>
                  <option value="admin">Admin</option>
                </select>
                {errors.mota && <div className="invalid-feedback d-block small">{errors.mota}</div>}
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
                  user ? 'Eguneratu' : 'Sortu'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserModal;
