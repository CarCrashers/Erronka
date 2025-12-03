import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;

{/*
  Tener todas las paginas en la carpeta pages y llamarlas desde aquí con las rutas

  <BrowserRouter>
    <Routes>
      <Route />
    </Routes>
  </BrowserRouter>
  */}