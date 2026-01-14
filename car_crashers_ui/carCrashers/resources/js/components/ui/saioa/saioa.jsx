import { useForm, router } from '@inertiajs/react';
import React, { useState, useRef } from 'react';
import Logo from '@assets/images/logo.jpg';
import './saioa.css';

const Saioa = () => {
  const [isLogin, setIsLogin] = useState(true);
  const closeButtonRef = useRef(null);

  const { data, setData, post, processing, errors, reset, clearErrors } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const toggleMode = (e) => {
    e?.preventDefault?.();
    clearErrors();
    setData('password', '');
    setData('password_confirmation', '');
    setIsLogin((v) => !v);
  };

  const hideModal = () => {
    const modalEl = document.getElementById('saioa');
    if (!modalEl) return;

    // remove Bootstrap modal visible classes/styles
    modalEl.classList.remove('show');
    modalEl.style.display = 'none';
    modalEl.setAttribute('aria-hidden', 'true');
    modalEl.removeAttribute('aria-modal');

    // remove modal-open from body
    document.body.classList.remove('modal-open');
    document.body.style.removeProperty('padding-right');

    // remove any existing backdrops
    document.querySelectorAll('.modal-backdrop').forEach((el) => el.parentNode && el.parentNode.removeChild(el));

    // try clicking any close button inside modal
    try {
      const closeBtn = modalEl.querySelector('[data-bs-dismiss="modal"]');
      if (closeBtn) closeBtn.click();
    } catch (e) { /* ignore */ }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearErrors();

    const routeName = isLogin ? '/login' : '/register';

    post(routeName, {
      preserveScroll: true,
      onBefore: () => {},
      onSuccess: () => {
        // hide modal using DOM fallback
        hideModal();

        // reset sensitive fields
        reset('password', 'password_confirmation');

        // client-side navigate to home (ensures view update)
        try { router.visit('/'); } catch (err) {}
      },
      onError: () => {
        // validation errors are available in `errors`
      }
    });
  };


  return (
    <div className="modal fade" id="saioa" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4 rounded-4 shadow-lg border-0">
          <button type="button" className="btn-close position-absolute top-0 end-0 m-3" data-bs-dismiss="modal" aria-label="Close"></button>

          <div className="text-center mb-4">
            <img src={Logo} alt="Logo" className="mb-3 rounded-circle login-logo" />
            <h4 className="fw-bold text-dark">
              {isLogin ? 'Ongi etorri CarCrashers' : 'Sortu kontua'}
            </h4>
            <p className="text-muted">
              {isLogin ? 'Saioa hasi jarraitzeko.' : 'Bete datuak erregistratzeko.'}
            </p>
          </div>

          <button type="button" className="btn btn-outline-secondary w-100 py-2 mb-3 d-flex align-items-center justify-content-center gap-2 rounded-3">
            <i className="bi bi-google"></i> Google bidez jarraitu
          </button>

          <div className="d-flex align-items-center my-3">
            <hr className="flex-grow-1" />
            <span className="px-3 text-muted small">EDO</span>
            <hr className="flex-grow-1" />
          </div>

          <form onSubmit={handleSubmit} noValidate>
            {!isLogin && (
              <div className="mb-3">
                <label className="form-label text-muted small fw-bold">Izena</label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-end-0 text-muted"><i className="bi bi-person"></i></span>
                  <input type="text" className={`form-control bg-light border-start-0 ps-0 ${errors.name ? 'border-danger' : ''}`} placeholder="Zure izena" value={data.name} onChange={(e) => setData('name', e.target.value)}/>
                </div>
                {errors.name && <div className="text-danger">{errors.name}</div>}
              </div>
            )}

            {/* Email */}
            <div className="mb-3">
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0 text-muted">
                  <i className="bi bi-envelope"></i>
                </span>
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label text-muted small fw-bold">Email</label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0 text-muted">
                  <i className="bi bi-envelope"></i>
                </span>
                <input
                  type="email"
                  className={`form-control bg-light border-start-0 ps-0 ${errors.email ? 'border-danger' : ''}`}
                  placeholder="juan@adibidea.com"
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                />
              </div>
              {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>

            {/* Pasahitza */}
            <div className="mb-3">
              <label className="form-label text-muted small fw-bold">Pasahitza</label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0 text-muted">
                  <i className="bi bi-lock"></i>
                </span>
                <input
                  type="password"
                  className={`form-control bg-light border-start-0 ps-0 ${errors.password ? 'border-danger' : ''}`}
                  placeholder="••••••••"
                  value={data.password}
                  onChange={(e) => setData('password', e.target.value)}
                />
              </div>
              {errors.password && <div className="text-danger">{errors.password}</div>}
            </div>

            {/* Confirmación – solo registro */}
            {!isLogin && (
              <div className="mb-3">
                <label className="form-label text-muted small fw-bold">Pasahitza berretsi</label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-end-0 text-muted"><i className="bi bi-lock-fill"></i></span>
                  <input type="password" className="form-control bg-light border-start-0 ps-0" placeholder="••••••••" value={data.password_confirmation} onChange={(e) => setData('password_confirmation', e.target.value)}/>
                </div>
              </div>
            )}

            {isLogin && (
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="rememberCheck" checked={data.remember} onChange={(e) => setData('remember', e.target.checked)}/>
                <label className="form-check-label small text-muted" htmlFor="rememberCheck">Gogora nazazu</label>
              </div>
            )}

            <button type="submit" className="btn btn-dark w-100 py-2 mt-3 rounded-3" disabled={processing}>
              {processing ? 'Itxaron...' : (isLogin ? 'Saioa hasi' : 'Erregistratu')}
            </button>
          </form>

          <div className="d-flex justify-content-between mt-4 text-sm">
            {isLogin && (
              <a href="/forgot-password" className="text-decoration-none text-muted small">Pasahitza ahaztu zaizu?</a>
            )}

            <p className="text-muted small mb-0 ms-auto">
              {isLogin ? 'Ez duzu konturik? ' : 'Dagoeneko baduzu kontua? '}
              <a href="#" onClick={toggleMode} className="text-dark fw-bold text-decoration-none">
                {isLogin ? 'Erregistratu' : 'Saioa hasi'}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saioa;
