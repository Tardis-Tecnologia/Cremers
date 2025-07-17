import React from 'react';
import Sidebar from '../components/Sidebar';
import mapaRS from '../assets/13214744_45166_GDO.png';

const DemografiaMedica: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-100 flex flex-col md:flex-row pt-14 md:pt-0">
      <Sidebar />
      <section className="flex-1 flex flex-col items-center py-6 px-2">
        <div className="bg-white   p-6 md:p-10 flex flex-col md:flex-row gap-8 w-full w-full">
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-2">
                {/* Médicos */}
                <div className="flex flex-col items-center bg-white border border-gray-300 rounded-xl p-3 min-w-[180px]">
                  <div className="flex items-center gap-2 mb-1">
                    {/* Ícone */}
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                    <span className="text-gray-700 font-medium">Médicos</span>
                  </div>
                  <span className="text-3xl font-bold tracking-tight">598.573</span>
                </div>
                {/* Densidade */}
                <div className="flex flex-col items-center bg-white border border-gray-300 rounded-xl p-3 min-w-[180px]">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
                    <span className="text-gray-700 font-medium">Dens. mil habitantes</span>
                  </div>
                  <span className="text-3xl font-bold tracking-tight">2,81</span>
                </div>
                {/* Generalista vs Especialista */}
                <div className="flex flex-col items-center bg-white border border-gray-300 rounded-xl p-3 min-w-[180px]">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-6 h-6 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 01.894.553l1.382 2.797 3.084.448a1 1 0 01.554 1.706l-2.23 2.174.527 3.073a1 1 0 01-1.451 1.054L10 12.347l-2.76 1.453a1 1 0 01-1.451-1.054l.527-3.073-2.23-2.174a1 1 0 01.554-1.706l3.084-.448L9.106 2.553A1 1 0 0110 2z" /></svg>
                    <span className="text-gray-700 font-medium">Generalista vs Especialista</span>
                  </div>
                  <div className="flex flex-row gap-6 mt-1">
                    <span className="text-2xl font-bold tracking-tight">275.324</span>
                    <span className="text-2xl font-bold tracking-tight">323.249</span>
                  </div>
                </div>
              </div>
              {/* Inscrições de médicos */}
              <span className="text-2xl font-medium text-gray-600">Inscrições de médicos</span>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mt-2">
                {/* Total */}
                <div className="flex flex-col items-center bg-white border border-gray-300 rounded-xl p-3 min-w-[120px]">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                    <span className="text-gray-700 font-medium">Total</span>
                  </div>
                  <span className="text-2xl font-bold tracking-tight">659.799</span>
                </div>
                {/* Densidade */}
                <div className="flex flex-col items-center bg-white border border-gray-300 rounded-xl p-3 min-w-[120px]">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
                    <span className="text-gray-700 font-medium">Dens. mil habitantes</span>
                  </div>
                  <span className="text-2xl font-bold tracking-tight">3,09</span>
                </div>
                {/* Principais */}
                <div className="flex flex-col items-center bg-white border border-gray-300 rounded-xl p-3 min-w-[120px]">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                    <span className="text-gray-700 font-medium">Principais</span>
                  </div>
                  <span className="text-2xl font-bold tracking-tight">597.650</span>
                </div>
                {/* Secundários */}
                <div className="flex flex-col items-center bg-white border border-gray-300 rounded-xl p-3 min-w-[120px]">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                    <span className="text-gray-700 font-medium">Secundários</span>
                  </div>
                  <span className="text-2xl font-bold tracking-tight">60.591</span>
                </div>
                {/* Outros */}
                <div className="flex flex-col items-center bg-white border border-gray-300 rounded-xl p-3 min-w-[120px]">
                  <div className="flex items-center gap-2 mb-1">
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h4v4" /></svg>
                    <span className="text-gray-700 font-medium">Outros
                      <svg className="inline w-4 h-4 ml-1 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><text x="12" y="16" textAnchor="middle" fontSize="12" fill="currentColor">?</text></svg>
                    </span>
                  </div>
                  <span className="text-2xl font-bold tracking-tight">1.558</span>
                </div>
              </div>
              {/* Texto explicativo */}
              <div className="mt-6 bg-white rounded-xl p-4 border border-gray-300">
                <p className="text-gray-700 text-base leading-relaxed">
                  Este painel traz informações sobre o número total de médicos no Brasil, seguido da densidade de médicos por 1 mil habitantes. Como os médicos podem ter mais de um registro concomitante por Unidade da Federação, também estão disponíveis o total de registros acompanhado da respectiva densidade por 1 mil habitantes. Na sequência estão o número de médicos com e sem especialidade, além do número de inscrições principais, secundárias e outras (provisórias e estudantes estrangeiros). Os dados aqui disponíveis referem-se aos registros em atividade existentes na base de dados do Conselho Federal de Medicina (CFM), formada a partir de informações oriundas dos 27 Conselhos Regionais de Medicina (CRMs). Nos próximos painéis, as informações foram refinadas segundo critérios definidos nas <a href="#" className="text-blue-700 font-semibold underline hover:text-blue-900">Notas Metodológicas</a>. Ao encontrar o símbolo <span className="inline-block align-middle"><svg className="inline w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><text x="12" y="16" textAnchor="middle" fontSize="12" fill="currentColor">?</text></svg></span>, passe o mouse sobre o número para visualizar as notas complementares importantes para a devida compreensão dos dados.
                </p>
              </div>
            </div>
          </div>
          {/* Coluna Direita - Mapa */}
          <div className="flex flex-col items-center min-w-[320px] max-w-[800px]  w-full ">
            <span className="text-lg font-semibold text-gray-600 mb-2 mt-2 md:mt-0">Mapa de densidade por UF</span>
            <div className="w-full aspect-[4/3] bg-gray-200 rounded-xl border border-gray-300 overflow-hidden flex items-center justify-center">
              {/* Placeholder do mapa */}
              <img src={mapaRS} alt="Mapa do RS" className="object-contain w-full h-full" />
                          </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DemografiaMedica; 