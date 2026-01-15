import ItemDashboard from './itemDashboard';
import { router } from '@inertiajs/react';

function AsideDashboard() {
  const handleLogout = (e) =>{
    e.preventDefault();
    router.post('/logout');
  }


  const handleHasiera = (e) =>{
    e.preventDefault();
    router.get('/');
  }
  return (
    <div className="sidebar d-flex flex-column justify-content-end border-right col-md-3 col-lg-2 bg-body-tertiary border pb-5 h-100">
      <div
        className="offcanvas-md offcanvas-end bg-body-tertiary"
        tabIndex="-1"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header d-md-none">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            CarCrashers
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-label="Close">
          </button>
        </div>

        <div className="offcanvas-body d-flex flex-column justify-content-between pt-lg-3 overflow-y-auto p-0">
          {/* menua */}
          <div>
            <ul className="nav flex-column">
              <ItemDashboard name="Dashboard" icon="bi bi-speedometer2" />
              <ItemDashboard name="Peritutza eskaerak" icon="bi bi-file-earmark" />
              <ItemDashboard name="Kotxeak" icon="bi bi-car-front-fill" />
              <ItemDashboard name="Piezak" icon="bi bi-tools" />
              <ItemDashboard name="Reports" icon="bi bi-graph-up" />
            </ul>

            {/* bestelakoak */}
            <div>
              <h6 className="sidebar-heading d-flex justify-content-between align-items-center text-body-secondary text-uppercase mb-1 mt-4 px-3">
                <span>Bestelakoak</span>
                <a
                  className="link-secondary"
                  href="#"
                  aria-label="Add a new report"
                >
                  <i className="bi bi-plus-circle"></i>
                </a>
              </h6>

              <ul className="nav flex-column">
                <ItemDashboard name="Current month" icon="bi bi-file-earmark-text" />
                <ItemDashboard name="Last quarter" icon="bi bi-file-earmark-text" />
                <ItemDashboard name="Social engagement" icon="bi bi-file-earmark-text" />
                <ItemDashboard name="Year-end sale" icon="bi bi-file-earmark-text" />
              </ul>
            </div>
          </div>

          {/* logout */}
          <ul className="nav flex-column">
            <ItemDashboard name="Hasiera" icon="bi bi-house" onclick={handleHasiera} />
            <ItemDashboard name="Settings" icon="bi bi-gear-wide-connected" />
            <ItemDashboard name="Sign out" icon="bi bi-door-closed" onclick={handleLogout}/>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AsideDashboard;
