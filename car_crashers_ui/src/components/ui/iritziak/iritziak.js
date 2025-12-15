import './iritziak.css';

export default function Iritziak() {
  return (
    <section className="py-5 bg-white">
      <div className="container">
        
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">Bezeroek diotena gutaz</h2>
          <p className="text-muted fs-5">Milaka bezero kontent</p>
        </div>

        <div className="row g-4">

          <div className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm p-4 rounded-3 testimonial-card">
              
              <div className="d-flex mb-3 star-color">
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
              </div>

              <p className="text-muted testimonial-quote mb-4">"Nire autoa 48 ordu baino gutxiagoan saldu nuen. Prozesu oso azkarra eta konplikaziorik gabea. Guztiz gomendagarria."</p>
              <h5 className="fw-bold text-dark mb-0">María García</h5>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm p-4 rounded-3 testimonial-card">
              
              <div className="d-flex mb-3 star-color">
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
              </div>

              <p className="text-muted testimonial-quote mb-4">"Behar nuen pieza prezio ezin hobean aurkitu nuen. Kalitate bikainekoa eta egoera ezin hobean iritsi zen."</p>
              <h5 className="fw-bold text-dark mb-0">Juan Pérez</h5>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card h-100 border-0 shadow-sm p-4 rounded-3 testimonial-card">
              
              <div className="d-flex mb-3 star-color">
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
                <i className="bi bi-star-fill me-1"></i>
              </div>

              <p className="text-muted testimonial-quote mb-4">"Zerbitzu profesionala eta lehen mailako bezero arreta. Zalantzarik gabe, berriro erosiko dut hemen."</p>
              <h5 className="fw-bold text-dark mb-0">Laura Martínez</h5>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}