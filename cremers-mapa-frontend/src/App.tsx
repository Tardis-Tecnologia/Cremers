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
        <Button
          variant="contained"
          color="primary"
          size="large"
          startIcon={<LoginRoundedIcon />}
          sx={{ borderRadius: '999px', fontSize: '1.5rem', px: 6, py: 2, textTransform: 'none', fontWeight: 600 }}
          onClick={() => navigate('/demografia')}
        >
          Entrar
        </Button>
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
