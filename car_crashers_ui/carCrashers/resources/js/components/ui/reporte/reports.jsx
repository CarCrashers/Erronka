import React from 'react';
import { Head } from '@inertiajs/react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Reports = ({ dataStats }) => {
  const data = {
    labels: ['Kotxeak', 'Piezak', 'Peritaje Eskaerak'],
    datasets: [
      {
        label: 'Guztira kantitatea',
        data: [
          dataStats.kotxeakCount, 
          dataStats.piezakCount, 
          dataStats.peritutzaEskaerakCount
        ],
        backgroundColor: [
          'rgba(255, 145, 0, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(75, 192, 192, 0.6)',
        ],
        borderColor: [
          'rgba(255, 145, 0, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: 'Inbentarioa eta eskaeren laburpena',
        font: { size: 18 }
      },
    },
    scales: {
      y: { beginAtZero: true }
    },
  };

  return (
    <div className="p-4">
      <Head title="Reportes" />
      
      <div className="container">
        <h1 className="mb-4">Estatistika Panela</h1>
        
        <div className="row">
          <div className="col-md-8">
            <div className="card shadow-sm p-3" style={{ height: '400px' }}>
              <Bar data={data} options={options} />
            </div>
          </div>

          <div className="col-md-4 d-flex flex-column gap-5">

          <div className="card border-0 shadow-sm border-start border-warning border-4 p-3">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <h6 className="text-muted mb-1 text-uppercase small fw-bold">Total Coches</h6>
                  <h3 className="mb-0">{dataStats.kotxeakCount}</h3>
                </div>
                <i className="bi bi-car-front h1 text-warning opacity-50"></i>
              </div>
            </div>
            <div className="card border-0 shadow-sm border-start border-primary border-4 p-3">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <h6 className="text-muted mb-1 text-uppercase small fw-bold">Total Piezas</h6>
                  <h3 className="mb-0">{dataStats.piezakCount}</h3>
                </div>
                <i className="bi bi-tools h1 text-primary opacity-50"></i>
              </div>
            </div>
            <div className="card border-0 shadow-sm border-start border-success border-4 p-3">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1">
                  <h6 className="text-muted mb-1 text-uppercase small fw-bold">Solicitudes Peritaje</h6>
                  <h3 className="mb-0">{dataStats.peritutzaEskaerakCount}</h3>
                </div>
                <i className="bi bi-clipboard-check h1 text-success opacity-50"></i>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Reports;