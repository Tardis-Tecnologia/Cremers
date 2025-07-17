import React from 'react';

interface CardInfoProps {
  icon: React.ReactNode;
  title: string;
  value: React.ReactNode;
}

const CardInfo: React.FC<CardInfoProps> = ({ icon, title, value }) => (
  <div className="flex flex-col justify-center items-center bg-white border border-gray-300 rounded-xl p-3 sm:p-4 md:p-6 w-full h-full min-h-[100px] max-w-xs">
    <div className="flex items-center gap-2 mb-1 text-center">
      {icon}
      <span className="text-gray-700 font-medium text-sm sm:text-base text-center">
        {title}
      </span>
    </div>
    <span className="break-words text-[clamp(1rem,1.5vw,1.5rem)] font-bold tracking-tight text-center w-full">
      {value}
    </span>
  </div>
);

export default CardInfo; 