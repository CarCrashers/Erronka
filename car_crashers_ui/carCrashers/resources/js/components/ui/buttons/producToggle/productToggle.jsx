import './productToggle.css';

function ProducToggle() {
  return (
    <div className="d-flex justify-content-xxl-start justify-content-center">
      <div className="col-10 col-sm-8 col-md-6 col-lg-5 col-xl-4">
        <ul
          className="nav nav-pills nav-fill p-1 small rounded-5 shadow-sm"
          id="pillNav2"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active rounded-5"
              id="home-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="true"
            >
              <i className="bi bi-car-front-fill"></i> Kotxea (4)
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link rounded-5"
              id="profile-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="false"
            >
              <i className="bi bi-tools"></i> Pieza (20)
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProducToggle;