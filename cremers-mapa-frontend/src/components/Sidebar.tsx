import React from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <nav
      className="bg-green-600 border-r md:border-b-0 h-14 md:h-screen w-full md:w-20 flex flex-row md:flex-col items-center md:py-4 py-0 gap-2 shadow-sm fixed md:static top-0 left-0 z-30"
      aria-label="Menu lateral"
    >
      <ul className="flex flex-row md:flex-col gap-1 md:gap-2 w-full list-none p-0 m-0 items-center md:items-start justify-center md:justify-start">
        <li className="p-1 md:p-2 rounded-lg flex justify-center w-full">
          <LocalHospitalIcon fontSize="medium" className="text-white" />
        </li>
        <li className="p-1 md:p-2 rounded-lg flex justify-center w-full">
          <button onClick={() => navigate('/')} className="rounded-lg hover:bg-green-700 w-full flex justify-center" aria-label="Página inicial">
            <HomeRoundedIcon fontSize="medium" className="text-white" />
          </button>
        </li>
        <li className="p-1 md:p-2 rounded-lg flex justify-center w-full">
          <button onClick={() => navigate('/about')} className="rounded-lg hover:bg-green-700 w-full flex justify-center" aria-label="Sobre">
            <InfoOutlinedIcon fontSize="medium" className="text-white" />
          </button>
        </li>
        <li className="p-1 md:p-2 rounded-lg flex justify-center w-full">
          <button onClick={() => navigate('/demografia')} className="rounded-lg hover:bg-green-700 w-full flex justify-center" aria-label="Demografia Médica">
            <MedicalInformationIcon fontSize="medium" className="text-white" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar; 