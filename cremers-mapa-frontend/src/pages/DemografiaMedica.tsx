import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { normalize, dadosDelegacias, dadosMock } from '../utils/geoHelpers';
import MedicoCards from '../components/MedicoCards';
import CardInscricoes from '../components/CardInscricoes';
import 'leaflet/dist/leaflet.css';
import municipiosRSUrl from '../assets/municipios-rs.geojson?url';
import MapaDemografia from '../components/MapaDemografia';

// Sedes das delegacias médicas (nome e coordenadas bem distribuídas)
const sedesDelegacias = [
  { nome: 'porto alegre', coord: [-30.0346, -51.2177] }, // Sul
  { nome: 'passo fundo', coord: [-28.2627, -52.4061] }, // Norte
  { nome: 'santa maria', coord: [-29.6842, -53.8069] }, // Centro
  { nome: 'pelotas', coord: [-31.7649, -52.3371] }, // Extremo Sul
  { nome: 'caxias do sul', coord: [-29.1676, -51.1794] }, // Nordeste
  { nome: 'ijui', coord: [-28.3881, -53.9182] }, // Noroeste
];

// Função para calcular distância simples (haversine)
function distancia([lat1, lon1]: number[], [lat2, lon2]: number[]) {
  const toRad = (v: number) => (v * Math.PI) / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

// Cores para as delegacias
const coresDelegacias = ['#f59e42', '#60a5fa', '#34d399', '#f472b6', '#fbbf24', '#a78bfa'];

// Tipagem para as chaves do objeto dadosDelegacias
type DelegaciaKeys = keyof typeof dadosDelegacias;

// Função tipo guard para checar se a string é uma chave válida do objeto dadosDelegacias
function isDelegaciaKey(key: string): key is DelegaciaKeys {
  return key in dadosDelegacias;
}

const DemografiaMedica: React.FC = () => {
  const [municipioSelecionado, setMunicipioSelecionado] = useState<string>('Porto Alegre');
  const [delegaciaSelecionada, setDelegaciaSelecionada] = useState<string>('porto alegre');
  const [geojson, setGeojson] = useState<any>(null);
  const [municipioParaDelegacia, setMunicipioParaDelegacia] = useState<Record<string, string>>({});

  useEffect(() => {
    fetch(municipiosRSUrl)
      .then(res => res.json())
      .then((data) => {
        // Mapear cada município para a delegacia mais próxima
        const mapping: Record<string, string> = {};
        data.features.forEach((feature: any) => {
          const nome = feature.properties.name || '';
          const nomeNormalizado = normalize(nome);
          let coords = feature.geometry.coordinates;
          // Se for MultiPolygon, pega o maior polígono
          if (feature.geometry.type === 'MultiPolygon') {
            coords = coords.reduce((a: any, b: any) => (a[0].length > b[0].length ? a : b))[0];
          } else if (feature.geometry.type === 'Polygon') {
            coords = coords[0];
          }
          // Agora coords é um array de arrays [lon, lat]
          let sumLon = 0, sumLat = 0;
          coords.forEach((point: [number, number]) => {
            sumLon += point[0]; // longitude
            sumLat += point[1]; // latitude
          });
          const lon = sumLon / coords.length;
          const lat = sumLat / coords.length;
          // Acha a delegacia mais próxima
          let minDist = Infinity, delegacia = '';
          for (const sede of sedesDelegacias) {
            const d = distancia([lat, lon], sede.coord); // [lat, lon] para ambas
            if (d < minDist) { minDist = d; delegacia = sede.nome; }
          }
          mapping[nomeNormalizado] = delegacia;
        });
        setMunicipioParaDelegacia(mapping);
        setGeojson(data);
      });
  }, []);

  const key = normalize(delegaciaSelecionada);
  const dados = isDelegaciaKey(key)
    ? dadosDelegacias[key]
    : {
        medicos: '-',
        densidade: '-',
        generalista: '-',
        especialista: '-',
        inscricoes: { total: '-', densidade: '-', principais: '-', secundarios: '-', outros: '-' }
      };

  return (
    <main className="min-h-screen bg-white flex flex-col md:flex-row pt-14 md:pt-0">
      <Sidebar />
      <section className="flex-1 flex flex-col lg:flex-row items-start py-6 px-2 md:px-4 lg:px-8 ml-0 md:ml-20 gap-8">
        <div className="bg-white p-6 md:p-10 flex flex-col lg:flex-row flex-1 gap-8 w-full">
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
                    style={{ fontFamily: 'monospace' }} />
                </div>
              </header>
              <span className="text-2xl font-medium text-gray-600">Médicos</span>
              <MedicoCards
                medicos={dados.medicos}
                densidade={dados.densidade}
                generalista={dados.generalista}
                especialista={dados.especialista}
              />
              <CardInscricoes inscricoes={dados.inscricoes} />
              <div className="mt-6 bg-white rounded-xl p-4 border border-gray-300 text-base leading-relaxed text-gray-700">
                Este painel traz informações sobre o número total de médicos na região <b>{String(delegaciaSelecionada)}</b>, seguido da densidade de médicos por 1 mil habitantes...
                Nos próximos painéis, as informações foram refinadas segundo critérios definidos nas{' '}
                <a href="https://www.cremers.org.br/notas-metodologicas" className="text-blue-700 font-semibold underline hover:text-blue-900" target="_blank" rel="noopener noreferrer">
                  Notas Metodológicas
                </a>
              </div>
            </div>
          </div>
          {/* Bloco do mapa */}
          <MapaDemografia
            geojson={geojson}
            municipioParaDelegacia={municipioParaDelegacia}
            delegaciaSelecionada={delegaciaSelecionada}
            setDelegaciaSelecionada={setDelegaciaSelecionada}
            dadosDelegacias={dadosDelegacias}
          />
        </div>
      </section>
    </main>
  );
};

export default DemografiaMedica;
