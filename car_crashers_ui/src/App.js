import React from 'react';
import './App.css';
import Layout from './components/layout/layout.js';


function App() {
  return (
    <React.StrictMode>
        <Layout>
          <h1>Hola soy el hijo!</h1>
        </Layout>
    </React.StrictMode>  
  );
}

export default App;
