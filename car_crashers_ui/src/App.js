import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Desguazatu from "./pages/desguazatu";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Desguazatu" element={<Desguazatu />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;

