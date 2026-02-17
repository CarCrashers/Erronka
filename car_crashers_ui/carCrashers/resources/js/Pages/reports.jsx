import React from 'react';
import Dashboard from './dashboard.jsx';
import { Head } from '@inertiajs/react';
import ReportsContent from '../components/ui/reporte/reports'; 

const ReportsPage = (props) => {
    return (
        <Dashboard>
        <Head title="Piezak" />
        <ReportsContent {...props} />
        </Dashboard>
    );
};

export default ReportsPage;