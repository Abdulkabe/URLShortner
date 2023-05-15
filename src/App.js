import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import UrlLogin from './urlLogin';
import History from './History';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<UrlLogin/>} />
          <Route path="history" element={<History />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
    
    </>
  );
}

export default App;
