import ItemDashboard from './itemDashboard';
import { router } from '@inertiajs/react';
import './asideDashboard.css';

function AsideDashboard() {
  const handleLogout = (e) => {
    e.preventDefault();
    router.post('/logout');
  }

  const handleHasiera = (e) => {
    e.preventDefault();
    router.get('/');
  }

  return (
    <div className="sidebar-dashboard border-end">
      <div
        className="offcanvas-md offcanvas-start"
        tabIndex="-1"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        {/* Header Offcanvas (Mobile) */}
        <div className="offcanvas-header d-md-none border-bottom">
          <h5 className="offcanvas-title fw-bold" id="sidebarMenuLabel">
            <i className="bi bi-tools me-2"></i>CarCrashers
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        {/* Contenido Principal */}
        <div className="offcanvas-body d-flex flex-column p-0">
          {/* Menú Principal */}
          <nav className="navbar-nav flex-column p-3 flex-grow-1">
            <ItemDashboard name="Dashboard" icon="bi bi-speedometer2" href="/dashboard" />
            <ItemDashboard name="Peritutza eskaerak" icon="bi bi-file-earmark" href="/peritutza" />
            <ItemDashboard name="Kotxeak" icon="bi bi-car-front-fill" href="/kotxeak" />
            <ItemDashboard name="Piezak" icon="bi bi-tools" href="/piezak" />
            <ItemDashboard name="Reports" icon="bi bi-graph-up" href="/reports" />

            {/* Sección Bestelakoak */}
            <div className="mt-4 pt-3 border-top">
              <h6 className="sidebar-heading text-muted text-uppercase px-0 mb-3 small">
                <span>Bestelakoak</span>
              </h6>
              <ul className="nav flex-column">
                <ItemDashboard name="Current month" icon="bi bi-calendar-month" href="#" />
                <ItemDashboard name="Last quarter" icon="bi bi-calendar3" href="#" />
                <ItemDashboard name="Social engagement" icon="bi bi-share" href="#" />
                <ItemDashboard name="Year-end sale" icon="bi bi-gift" href="#" />
              </ul>
            </div>
          </nav>

          {/* Menú Inferior */}
          <nav className="navbar-nav flex-column p-3 border-top">
            <ItemDashboard name="Hasiera" icon="bi bi-house" onclick={handleHasiera} href="/" />
            <ItemDashboard name="Sign out" icon="bi bi-door-closed" onclick={handleLogout} href="#" className="text-danger" />
          </nav>
        </div>
      </div>
    </div>
  );
}

export default AsideDashboard;
