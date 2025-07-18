import React from 'react';
import Sidebar from '../components/Sidebar';
import mapaRS from '../assets/13214744_45166_GDO.png';
import CardInfo from '../components/CardInfo';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import MasksOutlinedIcon from '@mui/icons-material/MasksOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

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
                    style={{fontFamily: 'monospace'}}
                  />
                </div>
              </header>
              {/* Médicos */}
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

              <span className="text-2xl font-medium text-gray-600 mt-6">Inscrições de médicos</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-5 lg:gap-6 mt-2">
                {[
                  { title: 'Total', value: '659.799' },
                  { title: 'Dens. mil habitantes', value: '3,09' },
                  { title: 'Principais', value: '597.650' },
                  { title: 'Secundários', value: '60.591' },
                  { title: 'Outros', value: '1.558' },
                ].map(({ title, value }, i) => (
                  <div
                    key={i}
                    className="flex flex-col justify-center items-center bg-white border border-gray-300 rounded-xl p-3 sm:p-4 md:p-6 w-full h-full min-h-[100px] max-w-xs"
                  >
                    <span className="text-gray-700 font-medium text-sm sm:text-base text-center break-words">{title}</span>
                    <span className="break-words text-[clamp(1rem,1.5vw,1.4rem)] font-bold tracking-tight text-center w-full">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-white rounded-xl p-4 border border-gray-300 text-base leading-relaxed text-gray-700">
                Este painel traz informações sobre o número total de médicos no Brasil, seguido da densidade de médicos por 1 mil habitantes...
                Nos próximos painéis, as informações foram refinadas segundo critérios definidos nas{' '}
                <a href="#" className="text-blue-700 font-semibold underline hover:text-blue-900">
                  Notas Metodológicas
                </a>
                .
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center lg:max-w-[40%]">
            <span className="text-lg font-semibold text-gray-600 mb-2 mt-4 lg:mt-0">Mapa de densidade por UF</span>
            <div className="w-full bg-gray-200 rounded-xl border border-gray-300 overflow-hidden flex items-center justify-center inline-block">
              <img src={mapaRS} alt="Mapa do RS" className="object-contain w-full h-full block max-w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DemografiaMedica;
