import React from 'react';
import { usePage } from '@inertiajs/react'; 
import HeaderDashboard from '../components/ui/headerDashboard/headerDashboard.jsx';
import AsideDashboard from '../components/ui/asideDashboard/asideDashboard.jsx';
import MainDashboardContent from '../components/ui/mainDashboard/mainDashboard.jsx';
import ProfilaDashboard from '../components/ui/profilaDashboard/profilaDashboard.jsx';
import KontaktuaDashboard from '../components/ui/kontaktuaDashboard/kontaktua.jsx';
import '../components/ui/kotxeDashboard/kotxeak';

function Dashboard({ children }) {
  const { url, props } = usePage();

  const currentPath = window.location.pathname;
  return (
    <div className="d-flex flex-column vh-100 w-100">
      <div className="flex-shrink-0" style={{ height: '70px' }}>
         <HeaderDashboard />
      </div>
      <div className="d-flex flex-fill overflow-hidden">
        <aside className="h-100 overflow-auto border-end d-none d-lg-block" style={{ minWidth: '250px', maxWidth: '25%' }}>
          <AsideDashboard />
        </aside>
        <div className="d-lg-none">
          <button className="btn btn-light m-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#sidebarOffcanvas" aria-controls="sidebarOffcanvas">
            <i className="bi bi-list"></i> Menua
          </button>
          <div className="offcanvas offcanvas-start" tabIndex="-1" id="sidebarOffcanvas" aria-labelledby="sidebarOffcanvasLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="sidebarOffcanvasLabel">Menua</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body p-0">
              <AsideDashboard />
            </div>
          </div>
        </div>
        <main className="flex-fill overflow-auto bg-light p-2 p-md-3 p-lg-4" style={{ minHeight: '0' }}>
          {url === '/profile' ? (
            <ProfilaDashboard />
              ) : url === '/kontaktua' ? (
            <KontaktuaDashboard />
          ) : null}
          {url === '/dashboard' ? <MainDashboardContent {...props} /> : children}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;