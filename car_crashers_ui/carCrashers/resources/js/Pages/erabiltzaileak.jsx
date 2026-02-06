import React from 'react';
import Dashboard from './dashboard.jsx';
import { Head } from '@inertiajs/react';
import ErabiltzailaComponent from '../components/ui/erabiltzaile/erabiltzaileak.jsx';

function Erabiltzaileak({ users }) {
  return (
    <Dashboard>
      <Head title="Erabiltzaileak" />
      <ErabiltzailaComponent users={users} />
    </Dashboard>
  );
}

export default Erabiltzaileak;
