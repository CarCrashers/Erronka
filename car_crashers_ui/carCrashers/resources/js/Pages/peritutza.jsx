import React from 'react';
import Dashboard from './dashboard.jsx';
import { Head } from '@inertiajs/react';
import PeritutzaComponent from '../components/ui/kotxeDashboard/peritutza.jsx';

function Peritutza({ peritutza }) {
  return (
    <Dashboard>
      <Head title="Peritutza Eskaerak" />
      <PeritutzaComponent peritutza={peritutza} />
    </Dashboard>
  );
}

export default Peritutza;
