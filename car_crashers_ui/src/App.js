import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Desguazatu from "./pages/desguazatu";
import Erosi from './pages/erosi';
import Details from './pages/details';
import Saskia from './pages/saskia';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Desguazatu" element={<Desguazatu />} />
        <Route path="/erosi" element={<Erosi />} />
        <Route path="/details" element={<Details />} />
        <Route path="/saskia" element={<Saskia />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;

