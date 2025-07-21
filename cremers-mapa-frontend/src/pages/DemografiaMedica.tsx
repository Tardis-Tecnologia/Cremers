import React from 'react';
import Sidebar from '../components/Sidebar';
import mapaRS from '../assets/13214744_45166_GDO.png';
import MapaDemografia from '../components/MapaDemografia';
import CardMedicos from '../components/CardMedicos';
import CardInscricoes from '../components/CardInscricoes';

const DemografiaMedica: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col md:flex-row pt-14 md:pt-0">
      <Sidebar />

      <section className="flex-1 flex flex-col items-center py-6 px-2 md:px-4 lg:px-8 ml-0 md:ml-20">
        <div className="bg-white p-6 md:p-10 flex flex-col md:flex-row gap-8 w-full w-full">
          {/* Coluna Esquerda */}
          <div className="flex-1 min-w-[340px] max-w-[700px]">
            <div className="flex flex-col gap-2">
              <header>
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-700">Demografia médica - dados gerais</h1>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-lg">Data de atualização</span>
                  <input
                    type="text"
                    value="26/01/2024"
                    readOnly
                    className="border border-gray-300 rounded-md px-2 py-1 text-gray-700 text-lg bg-gray-100 w-[120px] text-center focus:outline-none"
                    style={{ fontFamily: 'monospace' }}
                  />
                </div>
              </header>
              {/* Médicos */}
              <CardMedicos />
              <CardInscricoes />

              <div className="mt-6 bg-white rounded-xl p-4 border border-gray-300 text-base leading-relaxed text-gray-700">
                Este painel traz informações sobre o número total de médicos no Brasil, seguido da densidade de médicos por 1 mil habitantes...
                Nos próximos painéis, as informações foram refinadas segundo critérios definidos nas{' '}
                <a href="#" className="text-blue-700 font-semibold underline hover:text-blue-900">
                  Notas Metodológicas
                </a>
              </div>
            </div>
          </div>

          <MapaDemografia imagem={mapaRS} />
        </div>
      </section>
    </main>
  );
};

export default DemografiaMedica;
