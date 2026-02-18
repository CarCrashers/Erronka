import Logo from "@assets/images/logo_b.png";
import FloatingInput from "../components/ui/floatingInput/floatingInput";



function Login() {
  return (
    <div className="d-flex align-items-center justify-content-center min-vh-100 bg-dark px-2">
      <main className="form-signin w-100" style={{ maxWidth: '380px' }}>
        <form>
          <div className="text-center mb-4">
            <div className="d-inline-flex align-items-center justify-content-center rounded-circle" style={{ width: 56, height: 56 }}>
              <img src= {Logo} alt="Logo"  style={{ width: 56, height: 56 }}  />
            </div>
          </div>

          <h1 className="h5 h-md-4 mb-3 fw-normal text-center text-white">
            Hasi Saioa
          </h1>

          <div className="form-floating mb-2">
            <FloatingInput > 
                Email-a sartu
            </FloatingInput>
          </div>

          <div className="form-floating mb-2">
            <FloatingInput  type="password" className="form-control" id="floatingPassword"> 
              Pasahitza
            </FloatingInput>

          </div>

          <div className="form-check text-start my-3">
            <FloatingInput type="checkbox" className="form-check-input" id="checkDefault" value="remember-me">
              Gogoratu
            </FloatingInput>
          </div>

          <button className="btn btn-primary btn-sm w-100 py-2" type="submit">
            Hasi Saioa
          </button>

          <p className="mt-5 mb-0 text-body-secondary text-center small">
            © 2025-2026
          </p>
        </form>
      </main>
    </div>
  );
}

export default Login;
