import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Saldu from './pages/saldu';
import NorGara from './pages/norGara';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saldu" element={<Saldu />} />
        <Route path="/norGara" element={<NorGara />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;

