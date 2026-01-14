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
    <div className="sidebar border-right col-md-3 col-lg-2 bg-body-tertiary border p-0">
      <div
        className="offcanvas-md offcanvas-end bg-body-tertiary"
        tabIndex="-1"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header d-md-none">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            Company name
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-label="Close">
          </button>
        </div>

        <div className="offcanvas-body d-md-flex flex-column pt-lg-3 overflow-y-auto p-0">
          {/* menua */}
          <ul className="nav flex-column">
            <ItemDashboard name="Dashboard" icon="bi bi-speedometer2" />
            <ItemDashboard name="Peritutza eskaerak" icon="bi bi-file-earmark" />
            <ItemDashboard name="Kotxeak" icon="bi bi-car-front-fill" />
            <ItemDashboard name="Piezak" icon="bi bi-tools" />
            <ItemDashboard name="Reports" icon="bi bi-graph-up" />
          </ul>

          {/* bestelakoak */}
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

          <ul className="nav flex-column mb-auto">
            <ItemDashboard name="Current month" icon="bi bi-file-earmark-text" />
            <ItemDashboard name="Last quarter" icon="bi bi-file-earmark-text" />
            <ItemDashboard name="Social engagement" icon="bi bi-file-earmark-text" />
            <ItemDashboard name="Year-end sale" icon="bi bi-file-earmark-text" />
          </ul>

          <hr className="my-3" />

          {/* logout */}
          <ul className="nav flex-column mb-auto">
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
