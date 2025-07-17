import React from 'react';
import Sidebar from '../components/Sidebar';
import mapaRS from '../assets/13214744_45166_GDO.png';

const DemografiaMedica: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col md:flex-row pt-14 md:pt-0">
      <Sidebar />

      <section className="flex-1 flex flex-col items-center py-6 px-2 md:px-4 lg:px-8 ml-0 md:ml-20">
        <div className="bg-white p-6 md:p-10 flex flex-col lg:flex-row gap-10 w-full">
          <div className="flex-1 min-w-[340px] lg:max-w-[60%]">
            <div className="flex flex-col gap-2">
              <header>
                <h1 className="text-3xl md:text-4xl font-semibold text-gray-700">
                  Demografia médica - dados gerais
                </h1>
                <div className="flex items-center gap-2 mt-2">
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

              <span className="text-2xl font-medium text-gray-600 mt-4">Médicos</span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 lg:gap-6 mt-2">
                {[
                  {
                    title: 'Médicos',
                    value: '598.573',
                    icon: (
                      <svg
                        className="w-6 h-6 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                        />
                      </svg>
                    ),
                  },
                  {
                    title: 'Dens. mil habitantes',
                    value: '2,81',
                    icon: (
                      <svg
                        className="w-6 h-6 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                      </svg>
                    ),
                  },
                  {
                    title: 'Generalista vs Especialista',
                    value: (
                      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center w-full">
                        <span className="text-[clamp(1rem,1.5vw,1.3rem)] font-bold break-words text-center max-w-[100px]">
                          275.324
                        </span>
                        <span className="text-[clamp(1rem,1.5vw,1.3rem)] font-bold break-words text-center max-w-[100px]">
                          323.249
                        </span>
                      </div>
                    ),
                    icon: (
                      <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 2a1 1 0 01.894.553l1.382 2.797 3.084.448a1 1 0 01.554 1.706l-2.23 2.174.527 3.073a1 1 0 01-1.451 1.054L10 12.347l-2.76 1.453a1 1 0 01-1.451-1.054l.527-3.073-2.23-2.174a1 1 0 01.554-1.706l3.084-.448L9.106 2.553A1 1 0 0110 2z" />
                      </svg>
                    ),
                  },
                ].map((card, i) => (
                  <div
                    key={i}
                    className="flex flex-col justify-center items-center bg-white border border-gray-300 rounded-xl p-3 w-full h-full min-h-[120px]"
                  >
                    <div className="flex items-center gap-2 mb-1 text-center">
                      {card.icon}
                      <span className="text-gray-700 font-medium text-sm sm:text-base text-center">
                        {card.title}
                      </span>
                    </div>
                    {typeof card.value === 'string' ? (
                      <span className="text-[clamp(1rem,1.5vw,1.5rem)] font-bold tracking-tight break-words text-center w-full">
                        {card.value}
                      </span>
                    ) : (
                      card.value
                    )}
                  </div>
                ))}
              </div>

              <span className="text-2xl font-medium text-gray-600 mt-6">Inscrições de médicos</span>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-5 lg:gap-6 mt-2">
                {[
                  { title: 'Total', value: '659.799' },
                  { title: 'Dens. mil habitantes', value: '3,09' },
                  { title: 'Principais', value: '597.650' },
                  { title: 'Secundários', value: '60.591' },
                  { title: 'Outros', value: '1.558' },
                ].map(({ title, value }, i) => (
                  <div
                    key={i}
                    className="flex flex-col justify-center items-center bg-white border border-gray-300 rounded-xl p-3 w-full h-full min-h-[100px]"
                  >
                    <span className="text-gray-700 font-medium text-sm sm:text-base text-center">{title}</span>
                    <span className="text-[clamp(1rem,1.5vw,1.4rem)] font-bold tracking-tight break-words text-center w-full">
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

          <div className="flex flex-col items-center w-full lg:max-w-[40%]">
            <span className="text-lg font-semibold text-gray-600 mb-2 mt-4 lg:mt-0">Mapa de densidade por UF</span>
            <div className="w-full aspect-[4/3] bg-gray-200 rounded-xl border border-gray-300 overflow-hidden flex items-center justify-center">
              <img src={mapaRS} alt="Mapa do RS" className="object-contain w-full h-full" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DemografiaMedica;
