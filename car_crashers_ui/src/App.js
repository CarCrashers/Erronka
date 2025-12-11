import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import Erosi from './pages/erosi'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/erosi" element={<Erosi />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;

