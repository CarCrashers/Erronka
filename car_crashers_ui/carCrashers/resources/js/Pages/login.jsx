import Logo from "@assets/images/logo_b.png";
import FloatingInput from "../components/ui/floatingInput/floatingInput";



function Login() {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-dark">
      <main className="form-signin w-100" style={{ maxWidth: '420px' }}>
        <form>
          <div className="text-center mb-4">
            <div className="d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: 64, height: 64 }}>
              <img src= {Logo} alt=""  style={{ width: 64, height: 64 }}  />
            </div>
          </div>

          <h1 className="h3 mb-3 fw-normal text-center text-white">
            Hasi Saioa
          </h1>

          <div className="form-floating mb-2">
            <FloatingInput > 
                Email-a sartu
            </FloatingInput>
            {/*<input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />*/}
          </div>

          <div className="form-floating mb-2">
            <FloatingInput  type="password" className="form-control" id="floatingPassword"> 
              Pasahitza
            </FloatingInput>

          </div>

          <div className="form-check text-start my-3">
            <input
              className="form-check-input"
              type="checkbox"
              value="remember-me"
              id="checkDefault"
            />
            <label className="form-check-label text-white" htmlFor="checkDefault">
              Remember me???
            </label>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">
            Hasi Saioa
          </button>

          <p className="mt-5 mb-3 text-body-secondary text-center">
            © 2025-2026
          </p>
        </form>
      </main>
    </div>
  );
}

export default Login;
