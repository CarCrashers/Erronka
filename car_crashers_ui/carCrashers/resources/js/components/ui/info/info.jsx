import './info.css';

function Info() {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        
        <div className="text-center mb-5">
          <h2 className="fw-bold text-dark">Zergatik aukeratu gu?</h2>
          <p className="text-muted fs-5">Sektoreko liderrak gara eta urteetako esperientzia dugu</p>
        </div>

        <div className="row g-4">
          
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm p-4 rounded-3 feature-card">
              <div className="d-flex align-items-center justify-content-center rounded mb-3 icon-box bg-custom-blue">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h5 className="fw-bold mb-2">Kalitate-bermea</h5>
              <p className="text-muted small mb-0">Gure pieza guztiak egiaztatuta eta bermatuta daude</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm p-4 rounded-3 feature-card">
              <div className="d-flex align-items-center justify-content-center rounded mb-3 icon-box bg-custom-green">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h5 className="fw-bold mb-2">Preziorik Onena</h5>
              <p className="text-muted small mb-0">Zure ibilgailua merkatuko preziorik onenean erosten dugu</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm p-4 rounded-3 feature-card">
              <div className="d-flex align-items-center justify-content-center rounded mb-3 icon-box bg-custom-orange">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h5 className="fw-bold mb-2">Zerbitzu Azkarra</h5>
              <p className="text-muted small mb-0">Tramitazioa eta entrega 24/48H</p>
            </div>
          </div>

          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 border-0 shadow-sm p-4 rounded-3 feature-card">
              <div className="d-flex align-items-center justify-content-center rounded mb-3 icon-box bg-custom-purple">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h5 className="fw-bold mb-2">Bilketa-puntu Ugari</h5>
              <p className="text-muted small mb-0">Bilketa-puntu ugari zure erosotasunerako</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Info;