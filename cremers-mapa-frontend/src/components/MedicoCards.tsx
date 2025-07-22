import React from 'react';
import MasksOutlinedIcon from '@mui/icons-material/MasksOutlined';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import CardInfo from './CardInfo';

interface MedicosCardsProps {
  medicos: string;
  densidade: string;
  generalista: string;
  especialista: string;
}

const MedicosCards: React.FC<MedicosCardsProps> = ({ medicos, densidade, generalista, especialista }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-6 mt-2">
      <CardInfo icon={<MasksOutlinedIcon className="text-gray-600" fontSize="medium" />} title="Médicos" value={medicos} />
      <CardInfo icon={<Groups2OutlinedIcon className="text-green-600" fontSize="medium" />} title="Dens. mil habitantes" value={densidade} />
      <CardInfo
        icon={<WorkspacePremiumOutlinedIcon className="text-yellow-500" fontSize="medium" />}
        title="Generalista vs Especialista"
        value={
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center w-full">
            <span className="text-[clamp(1rem,1.5vw,1.3rem)] font-bold break-words text-center max-w-[100px]">{generalista}</span>
            <span className="text-[clamp(1rem,1.5vw,1.3rem)] font-bold break-words text-center max-w-[100px]">{especialista}</span>
          </div>
        }
      />
    </div>
  );
};

export default MedicosCards;
