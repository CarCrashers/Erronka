import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Saldu from './pages/saldu';
import NorGara from './pages/norGara';
import Desguazatu from "./pages/desguazatu";
import Erosi from './pages/erosi';
import Details from './pages/details';
import Saskia from './pages/saskia';
import Error from './components/ui/error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/saldu" element={<Saldu />} />
        <Route path="/norGara" element={<NorGara />} />
        <Route path="/Desguazatu" element={<Desguazatu />} />
        <Route path="/erosi" element={<Erosi />} />
        <Route path="/details" element={<Details />} />
        <Route path="/saskia" element={<Saskia />} />
        <Route path="/error" element={<Error />} />"
      </Routes>
    </BrowserRouter> 
  );
}

export default App;

