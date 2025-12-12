import React from 'react';
import '../App.css';
import Layout from '../components/layout/layout.js';
import Heroe from '../components/ui/heroe/heroe.js';
import Info from '../components/ui/info/info.js';


function Home() {
  return (
    <React.StrictMode>
        <Layout>
          <Heroe />
        <Info />
        </Layout>
    </React.StrictMode>  
  );
}

export default Home;