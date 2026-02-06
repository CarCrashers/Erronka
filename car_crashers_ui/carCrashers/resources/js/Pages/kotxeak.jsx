import React from 'react';
import Dashboard from './dashboard.jsx';
import { Head } from '@inertiajs/react';
import KotxeakComponent from '../components/ui/kotxeDashboard/kotxeak.jsx';

function Kotxeak({ kotxeak }) {
  return (
    <Dashboard>
      <Head title="Kotxeak" />
      <KotxeakComponent kotxeak={kotxeak} />
    </Dashboard>
  );
}

export default Kotxeak;
