import './productToggle.css';

function ProducToggle() {
  return (
    <div className="row justify-content-center pt-3">
      <div className="col-8">
        <div className="col-xxl-3 col-xl-3 col-lg-4 col-md-5 col-sm-7 col-8">
          <ul className="nav nav-pills nav-fill p-1 small rounded-5 shadow-sm" id="pillNav2" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">
                Coche (4)
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">
                Pieza (20)
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProducToggle;
