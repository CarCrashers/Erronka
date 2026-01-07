import React from 'react';
import '../../css/App.css';
import Layout from '../components/layout/layout.jsx';
import Heroe from '../components/ui/heroe/heroe.jsx';
import Info from '../components/ui/info/info.jsx';
import Iriziak from '../components/ui/iritziak/iritziak.jsx';


function Home() {
  return (
    <React.StrictMode>
        <Layout>
          <Heroe />
          <Info />
          <Iriziak />
        </Layout>
    </React.StrictMode>  
  );
}

export default Home;