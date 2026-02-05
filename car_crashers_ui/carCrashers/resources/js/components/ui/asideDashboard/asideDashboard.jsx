import ItemDashboard from './itemDashboard';
import { router, usePage } from '@inertiajs/react';
import './asideDashboard.css';

function AsideDashboard() {
  const { props } = usePage();
  const user = props.auth?.user;
  
  const isAdmin = user?.mota === 'admin'; 

  const handleLogout = (e) => {
    e.preventDefault();
    router.post('/logout');
  }

  return (
    <div className="sidebar-dashboard border-end">
      <div className="offcanvas-md offcanvas-start" tabIndex="-1" id="sidebarMenu">
        
        <div className="offcanvas-header d-md-none border-bottom">
          <h5 className="offcanvas-title fw-bold">CarCrashers</h5>
        </div>

        <div className="offcanvas-body d-flex flex-column p-0">
          <nav className="navbar-nav flex-column p-3 flex-grow-1">
            
            {isAdmin ? (
              <>
                <div className="small text-muted text-uppercase mb-2">Administrazioa</div>
                <ItemDashboard name="Dashboard" icon="bi bi-speedometer2" href="/dashboard" />
                <ItemDashboard name="Peritutza eskaerak" icon="bi bi-file-earmark" href="/peritutza" />
                <ItemDashboard name="Kotxeak" icon="bi bi-car-front-fill" href="/kotxeak" />
                <ItemDashboard name="Piezak" icon="bi bi-tools" href="/piezak" />
                <ItemDashboard name="Reports" icon="bi bi-graph-up" href="/reports" />
                
                <div className="mt-4 pt-3 border-top">
                  <h6 className="sidebar-heading text-muted text-uppercase px-0 mb-3 small">Admin Tools</h6>
                  <ItemDashboard name="Erabiltzaileak" icon="bi bi-people" href="/users" />
                </div>
              </>
            ) : (
              <>
                <div className="small text-muted text-uppercase mb-2">Nire Gunea</div>
                <ItemDashboard name="Nire Arbela" icon="bi bi-speedometer2" href="/dashboard" />
                <ItemDashboard name="Nire Eskaerak" icon="bi bi-file-text" href="/my-requests" />
                <ItemDashboard name="Nire Kotxeak" icon="bi bi-car-front" href="/my-cars" />
                <ItemDashboard name="Fakturak" icon="bi bi-receipt" href="/invoices" />
                
                <div className="mt-4 pt-3 border-top">
                  <h6 className="sidebar-heading text-muted text-uppercase px-0 mb-3 small">Laguntza</h6>
                  <ItemDashboard name="Zure datuak" icon="bi bi-person-circle" href="/profile" />
                  <ItemDashboard name="Kontaktua" icon="bi bi-envelope" href="/contact" />
                  
                </div>
              </>
            )}

          </nav>

          <nav className="navbar-nav flex-column p-3 border-top">
            <ItemDashboard name="Hasiera" icon="bi bi-house" href="/" />
            <ItemDashboard name="Saioa itxi" icon="bi bi-door-closed" href="/logout" method="post" className="text-danger" />
          </nav>
        </div>
      </div>
    </div>
  );
}

export default AsideDashboard;