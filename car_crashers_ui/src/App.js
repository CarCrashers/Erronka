import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Saldu from './pages/saldu';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saldu" element={<Saldu />} />

      </Routes>
    </BrowserRouter> 
  );
}

export default App;

