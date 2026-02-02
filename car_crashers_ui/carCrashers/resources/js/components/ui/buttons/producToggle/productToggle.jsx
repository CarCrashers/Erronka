import './productToggle.css';

function ProducToggle({ mota, onMotaChange, kotxeakCount, piezakCount }) {
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
              className={`nav-link rounded-5 ${mota === 0 ? 'active' : ''}`}
              id="home-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="true"
              onClick={() => onMotaChange(0)}
            >
              <i className="bi bi-car-front-fill"></i> Kotxea ({kotxeakCount})
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className={`nav-link rounded-5 ${mota === 1 ? 'active' : ''}`}
              id="profile-tab2"
              data-bs-toggle="tab"
              type="button"
              role="tab"
              aria-selected="false"
              onClick={() => onMotaChange(1)}
            >
              <i className="bi bi-tools"></i> Pieza ({piezakCount})
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProducToggle;