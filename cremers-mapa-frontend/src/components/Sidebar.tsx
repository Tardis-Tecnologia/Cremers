import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav
      className="bg-white border-r md:border-b-0 md:h-screen md:w-20 w-full h-16 flex md:flex-col flex-row items-center md:py-4 py-0 gap-2 shadow-sm fixed md:static top-0 left-0 z-30"
      aria-label="Menu lateral"
    >
      <header className="md:mb-4 md:mt-2 md:block flex items-center justify-center h-full w-16 md:w-auto">
        <span aria-label="Logo do sistema">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="#3CB371" xmlns="http://www.w3.org/2000/svg" className="md:w-12 md:h-12 w-9 h-9">
            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
            <path d="M7 14h2v2H7zm0-4h2v2H7zm0-4h2v2H7zm4 8h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2zm4 8h2v2h-2zm0-4h2v2h-2zm0-4h2v2h-2z"/>
          </svg>
        </span>
      </header>
      <ul className="md:flex-col flex-row flex gap-2 w-full items-center list-none p-0 m-0 h-full justify-center md:justify-start">
        <li>
          <button onClick={() => navigate('/')} className="p-2 rounded-lg hover:bg-gray-100 w-full flex justify-center" aria-label="Página inicial">
            <HomeRoundedIcon fontSize="large" />
          </button>
        </li>
        <li>
          <button onClick={() => navigate('/about')} className="p-2 rounded-lg hover:bg-gray-100 w-full flex justify-center" aria-label="Sobre">
            <InfoOutlinedIcon fontSize="large" />
          </button>
        </li>
        <li>
          <button onClick={() => navigate('/demografia')} className="p-2 rounded-lg hover:bg-gray-100 w-full flex justify-center" aria-label="Demografia Médica">
            <MedicalInformationIcon fontSize="large" />
          </button>
        </li>
      </ul>
      <div className="flex-1" />
    </nav>
  );
};

export default Sidebar; 