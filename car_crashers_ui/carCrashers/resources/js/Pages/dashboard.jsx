import React from 'react';
import HeaderDashboard from '../components/ui/headerDashboard/headerDashboard.jsx';
import AsideDashboard from '../components/ui/asideDashboard/asideDashboard';
import MainDashboard from '../components/ui/mainDashboard/mainDashboard.jsx';


function Dashboard() {
  return (
    <>
      <div className='w-100'>
        <HeaderDashboard />
        <div className='d-flex vh-100'>
          <AsideDashboard />
          <MainDashboard />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
