import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import DemografiaMedica from './pages/DemografiaMedica';
import About from './pages/About';
import Info from './pages/Info';
function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        {/* Aqui futuramente ficará o conteúdo visual principal */}
      </div>
      <div className="w-full flex justify-center pb-12">
        <button
          onClick={() => navigate('/demografia')}
          className="flex items-center gap-2 bg-white text-green-500 border font-semibold rounded-full px-12 py-10 text-4xl hover:bg-green-50 transition shadow"
        >
          <LoginRoundedIcon className="text-green-500" fontSize="large" />
          Entrar
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demografia" element={<DemografiaMedica />} />
      <Route path="/about" element={<About />} />
      <Route path="/info" element={<Info />} />
    </Routes>
  );
}

export default App;
