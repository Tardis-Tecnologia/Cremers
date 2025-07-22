import React from 'react';

export interface InscricoesData {
  total: string;
  densidade: string;
  principais: string;
  secundarios: string;
  outros: string;
}

interface CardInscricoesProps {
  inscricoes: InscricoesData;
}

const CardInscricoes: React.FC<CardInscricoesProps> = ({ inscricoes }) => {
  const dadosInscricoes = [
    { title: 'Total', value: inscricoes.total },
    { title: 'Dens. mil habitantes', value: inscricoes.densidade },
    { title: 'Principais', value: inscricoes.principais },
    { title: 'Secundários', value: inscricoes.secundarios },
    { title: 'Outros', value: inscricoes.outros },
  ];

  return (
    <>
      <span className="text-2xl font-medium text-gray-600 mt-6">Inscrições de médicos</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-5 lg:gap-6 mt-2">
        {dadosInscricoes.map(({ title, value }, i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-center bg-white border border-gray-300 rounded-xl p-3 sm:p-4 md:p-6 w-full h-full min-h-[100px] max-w-xs"
          >
            <span className="text-gray-700 font-medium text-sm sm:text-base text-center break-words">
              {title}
            </span>
            <span className="break-words text-[clamp(1rem,1.5vw,1.4rem)] font-bold tracking-tight text-center w-full">
              {value}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardInscricoes;
