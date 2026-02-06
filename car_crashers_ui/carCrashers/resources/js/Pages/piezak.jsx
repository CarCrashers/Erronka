import React from 'react';
import Dashboard from './dashboard.jsx';
import { Head } from '@inertiajs/react';
import PiezakComponent from '../components/ui/kotxeDashboard/piezak.jsx';

function Piezak({ piezak, kotxeak = [] }) {
  return (
    <Dashboard>
      <Head title="Piezak" />
      <PiezakComponent piezak={piezak} kotxeak={kotxeak} />
    </Dashboard>
  );
}

export default Piezak;
