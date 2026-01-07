import React, { useState } from 'react';
import Logo from '@assets/images/logo.jpg';
import './saioa.css';

const Saioa = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setError('Mesedez, sartu baliozko helbide elektroniko bat.'); 
    } else {
      setError('');
      console.log('Datuak bidaltzen:', { email, password });
      alert('Saioa ondo hasi da');
    }
  };

  return (
    <div className="modal fade" id="saioa" tabIndex="-1" aria-labelledby="loginModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content p-4 rounded-4 shadow-lg border-0">
          
          <div className="text-center mb-4">
            <img src={Logo} alt="CarCrashers Logo" className="mb-3 rounded-circle login-logo" />
            <h4 className="fw-bold text-dark">Ongi etorri CarCrashers</h4>
            <p className="text-muted">Saioa hasi jarraitzeko.</p>
          </div>

          <button className="btn btn-outline-secondary w-100 py-2 mb-3 d-flex align-items-center justify-content-center gap-2 rounded-3">
            <i className="bi bi-google"></i> Continue with Google
          </button>

          <div className="d-flex align-items-center my-3">
            <hr className="flex-grow-1" />
            <span className="px-3 text-muted small">EDO</span>
            <hr className="flex-grow-1" />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label text-muted small fw-bold">Email</label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0 text-muted"><i className="bi bi-envelope"></i></span>
                <input type="email" className={`form-control bg-light border-start-0 ps-0 ${error ? 'border-danger' : ''}`} placeholder="juan@adibidea.com" value={email} onChange={(e) => { setEmail(e.target.value); if (error) setError('');}}/>
              </div>
              {error && <div className="text-danger">{error}</div>}
            </div>

            <div className="mb-3">
              <label className="form-label text-muted small fw-bold">Pasahitza</label>
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0 text-muted"><i className="bi bi-lock"></i></span>
                <input type="password" className="form-control bg-light border-start-0 ps-0" placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
            </div>

            <button type="submit" className="btn btn-dark w-100 py-2 mt-3 rounded-3">Sign in</button>
          </form>

          <div className="d-flex justify-content-between mt-4 text-sm">
            <a href="#" className="text-decoration-none text-muted small">Pasahitza ahaztu zaizu?</a>
            <p className="text-muted small mb-0">Kontu bat behar? <a href="#" className="text-dark fw-bold text-decoration-none">Sign up</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saioa;