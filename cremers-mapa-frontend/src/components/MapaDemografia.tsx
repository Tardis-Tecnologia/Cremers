
import React from 'react';

interface MapaDemografiaProps {
  imagem: string;
  alt?: string;
  titulo?: string;
}

const MapaDemografia: React.FC<MapaDemografiaProps> = ({
  imagem,
  alt = 'Mapa do RS',
  titulo = 'Mapa de Demografia por UF',
}) => {
  return (
    <div className="flex flex-col items-center lg:max-w-[40%]">
      <span className="text-lg font-semibold text-gray-600 mb-2 mt-4 lg:mt-0">
        {titulo}
      </span>
      <div className="w-full bg-gray-200 rounded-xl border border-gray-300 overflow-hidden flex items-center justify-center inline-block">
        <img
          src={imagem}
          alt={alt}
          className="object-contain w-full h-full block max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default MapaDemografia;
