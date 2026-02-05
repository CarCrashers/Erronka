import React from 'react';
import { usePage } from '@inertiajs/react'; 
import HeaderDashboard from '../components/ui/headerDashboard/headerDashboard.jsx';
import AsideDashboard from '../components/ui/asideDashboard/asideDashboard.jsx';
import MainDashboardContent from '../components/ui/mainDashboard/mainDashboard.jsx';
import ProfilaDashboard from '../components/ui/profilaDashboard/profilaDashboard.jsx';
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
        <aside className="h-100 overflow-auto border-end" style={{ minWidth: '250px' }}>
          <AsideDashboard />
        </aside>
        <main className="flex-fill overflow-auto bg-light" style={{ padding: '2rem' }}>
          {url === '/profile' ? <profilaDashboard /> : children}
          {/* {url.startsWith('/dashboard') ? <MainDashboardContent {...props} /> : children} */}
          {url === '/dashboard' ? <MainDashboardContent {...props} /> : children}
        </main>
      </div>
    </div>
  );
}

export default Dashboard;