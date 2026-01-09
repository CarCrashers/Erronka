import Logo from '@assets/images/logo.jpg';
import { useForm } from '@inertiajs/react';
import FloatingInput from '../floatingInput/floatingInput';
import './saioa.css';

const Saioa = () => {
  const { data, setData, post, processing, errors } = useForm({
    korreoa: '',
    pasahitza: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/login', {
      onSuccess: () => {
        const modalEl = document.getElementById('saioa');
        if (modalEl) {
          const modal = bootstrap.Modal.getInstance(modalEl) 
            || new bootstrap.Modal(modalEl);
          modal.hide();
        }
      },
  })
};

  return (
    <div
      className="modal fade"
      id="saioa"
      tabIndex="-1"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content rounded-4 border-0 p-4 shadow-lg">
          <div className="mb-4 text-center">
            <img
              src={Logo}
              alt="CarCrashers Logo"
              className="rounded-circle login-logo mb-3"
            />
            <h4 className="fw-bold text-dark">Ongi etorri CarCrashers</h4>
            <p className="text-muted">Saioa hasi jarraitzeko.</p>
          </div>

          <button className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center rounded-3 mb-3 gap-2 py-2">
            <i className="bi bi-google"></i> Continue with Google
          </button>

          <div className="d-flex align-items-center my-3">
            <hr className="flex-grow-1" />
            <span className="text-muted small px-3">EDO</span>
            <hr className="flex-grow-1" />
          </div>

          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-3">
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0 text-muted">
                  <i className="bi bi-envelope"></i>
                </span>

                <FloatingInput
                  id="loginEmail"
                  type="email"
                  value={data.korreoa}
                  onChange={(e) => setData('korreoa', e.target.value)}
                  placeholder="juan@adibidea.com"
                  required
                  name="korreoa"
                >
                  Email
                </FloatingInput>
              </div>
              {errors.korreoa && (
                <div className="text-danger mt-1">{errors.korreoa}</div>
              )}
            </div>

            {/* Pasahitza */}
            <div className="mb-3">
              <div className="input-group">
                <span className="input-group-text bg-light border-end-0 text-muted">
                  <i className="bi bi-lock"></i>
                </span>

                <FloatingInput
                  id="loginPassword"
                  type="password"
                  value={data.pasahitza}
                  onChange={(e) => setData('pasahitza', e.target.value)}
                  placeholder="••••••••"
                  required
                  name="pasahitza"
                >
                  Pasahitza
                </FloatingInput>
              </div>
              {errors.pasahitza && (
                <div className="text-danger mt-1">{errors.pasahitza}</div>
              )}
            </div>

            <button
              type="submit"
              className="btn btn-dark w-100 rounded-3 mt-3 py-2"
              disabled={processing}
            >
              {processing ? 'Sartzen...' : 'Sign in'}
            </button>
          </form>

          <div className="d-flex justify-content-between mt-4 text-sm">
            <a
              href="#"
              className="text-decoration-none text-muted small"
            >
              Pasahitza ahaztu zaizu?
            </a>
            <p className="text-muted small mb-0">
              Kontu bat behar?{' '}
              <a
                href=""
                className="text-dark fw-bold text-decoration-none"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saioa;
