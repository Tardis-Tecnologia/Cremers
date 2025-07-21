// src/components/CardMedicos.tsx
import React from 'react';
import CardInfo from './CardInfo';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import MasksOutlinedIcon from '@mui/icons-material/MasksOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

const CardMedicos: React.FC = () => {
  return (
    <>
      <span className="text-2xl font-medium text-gray-600">Médicos</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-6 mt-2">
        <CardInfo
          icon={<MasksOutlinedIcon className="text-gray-600" fontSize="medium" />}
          title="Médicos"
          value="598.573"
        />
        <CardInfo
          icon={<Groups2OutlinedIcon className="text-green-600" fontSize="medium" />}
          title="Dens. mil habitantes"
          value="2,81"
        />
        <CardInfo
          icon={<WorkspacePremiumOutlinedIcon className="text-yellow-500" fontSize="medium" />}
          title="Generalista vs Especialista"
          value={
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center w-full">
              <span className="text-[clamp(1rem,1.5vw,1.3rem)] font-bold break-words text-center max-w-[100px]">
                275.324
              </span>
              <span className="text-[clamp(1rem,1.5vw,1.3rem)] font-bold break-words text-center max-w-[100px]">
                323.249
              </span>
            </div>
          }
        />
      </div>
    </>
  );
};

export default CardMedicos;
