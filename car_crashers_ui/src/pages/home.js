import React from 'react';
import '../App.css';
import Layout from '../components/layout/layout.js';
import Heroe from '../components/ui/heroe/heroe.js';


function Home() {
  return (
    <React.StrictMode>
        <Layout>
          <Heroe />
        </Layout>
    </React.StrictMode>  
  );
}

export default Home;