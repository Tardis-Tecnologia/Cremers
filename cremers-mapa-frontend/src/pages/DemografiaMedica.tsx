import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import CardInfo from '../components/CardInfo';
import Groups2OutlinedIcon from '@mui/icons-material/Groups2Outlined';
import MasksOutlinedIcon from '@mui/icons-material/MasksOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import delegaciasRSUrl from '../assets/delegacias-rs.geojson?url';
import municipiosRSUrl from '../assets/municipios-rs.geojson?url';
import L from 'leaflet';

// Mock de dados por região
const dadosMock = {
  RF1: {
    medicos: '10.000', densidade: '2,10', generalista: '4.000', especialista: '6.000',
    inscricoes: { total: '11.000', densidade: '2,30', principais: '9.000', secundarios: '1.500', outros: '500' }
  },
  RF2: {
    medicos: '8.500', densidade: '1,90', generalista: '3.500', especialista: '5.000',
    inscricoes: { total: '9.200', densidade: '2,00', principais: '7.800', secundarios: '1.000', outros: '400' }
  },
  RF3: {
    medicos: '7.200', densidade: '1,70', generalista: '3.000', especialista: '4.200',
    inscricoes: { total: '7.800', densidade: '1,80', principais: '6.500', secundarios: '900', outros: '400' }
  },
  RF4: {
    medicos: '6.800', densidade: '1,60', generalista: '2.800', especialista: '4.000',
    inscricoes: { total: '7.200', densidade: '1,70', principais: '6.000', secundarios: '800', outros: '400' }
  },
  RF5: {
    medicos: '12.000', densidade: '2,50', generalista: '5.000', especialista: '7.000',
    inscricoes: { total: '13.000', densidade: '2,70', principais: '10.500', secundarios: '1.800', outros: '700' }
  },
  RF6: {
    medicos: '9.000', densidade: '2,00', generalista: '3.800', especialista: '5.200',
    inscricoes: { total: '9.800', densidade: '2,10', principais: '8.000', secundarios: '1.200', outros: '600' }
  },
  RF7: {
    medicos: '5.500', densidade: '1,20', generalista: '2.200', especialista: '3.300',
    inscricoes: { total: '6.000', densidade: '1,30', principais: '4.800', secundarios: '800', outros: '400' }
  },
  RF8: {
    medicos: '7.800', densidade: '1,80', generalista: '3.200', especialista: '4.600',
    inscricoes: { total: '8.400', densidade: '1,90', principais: '6.900', secundarios: '1.100', outros: '400' }
  },
  RF9: {
    medicos: '6.200', densidade: '1,40', generalista: '2.500', especialista: '3.700',
    inscricoes: { total: '6.700', densidade: '1,50', principais: '5.400', secundarios: '900', outros: '400' }
  },
};

// Mock GeoJSON das regiões funcionais (RF1–RF9) - simplificado para exemplo
const geojsonRegioes = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": { "regiao": "RF1" },
      "geometry": { "type": "Polygon", "coordinates": [[[-51,-30],[-51,-31],[-50,-31],[-50,-30],[-51,-30]]] }
    },
    {
      "type": "Feature",
      "properties": { "regiao": "RF2" },
      "geometry": { "type": "Polygon", "coordinates": [[[-52,-30],[-52,-31],[-51,-31],[-51,-30],[-52,-30]]] }
    },
    {
      "type": "Feature",
      "properties": { "regiao": "RF3" },
      "geometry": { "type": "Polygon", "coordinates": [[[-50,-29],[-50,-30],[-49,-30],[-49,-29],[-50,-29]]] }
    },
    {
      "type": "Feature",
      "properties": { "regiao": "RF4" },
      "geometry": { "type": "Polygon", "coordinates": [[[-49,-30],[-49,-31],[-48,-31],[-48,-30],[-49,-30]]] }
    },
    {
      "type": "Feature",
      "properties": { "regiao": "RF5" },
      "geometry": { "type": "Polygon", "coordinates": [[[-51,-32],[-51,-33],[-50,-33],[-50,-32],[-51,-32]]] }
    },
    {
      "type": "Feature",
      "properties": { "regiao": "RF6" },
      "geometry": { "type": "Polygon", "coordinates": [[[-53,-32],[-53,-33],[-52,-33],[-52,-32],[-53,-32]]] }
    },
    {
      "type": "Feature",
      "properties": { "regiao": "RF7" },
      "geometry": { "type": "Polygon", "coordinates": [[[-54,-29],[-54,-30],[-53,-30],[-53,-29],[-54,-29]]] }
    },
    {
      "type": "Feature",
      "properties": { "regiao": "RF8" },
      "geometry": { "type": "Polygon", "coordinates": [[[-52,-31],[-52,-32],[-51,-32],[-51,-31],[-52,-31]]] }
    },
    {
      "type": "Feature",
      "properties": { "regiao": "RF9" },
      "geometry": { "type": "Polygon", "coordinates": [[[-50,-28],[-50,-29],[-49,-29],[-49,-28],[-50,-28]]] }
    }
  ]
};

const geojsonRS6 = {
  "type": "FeatureCollection",
  "features": [
    { "type": "Feature", "properties": { "regiao": "R1" }, "geometry": { "type": "Polygon", "coordinates": [[[-57,-27],[-54,-27],[-54,-28.5],[-57,-28.5],[-57,-27]]] } },
    { "type": "Feature", "properties": { "regiao": "R2" }, "geometry": { "type": "Polygon", "coordinates": [[[-54,-27],[-51,-27],[-51,-28.5],[-54,-28.5],[-54,-27]]] } },
    { "type": "Feature", "properties": { "regiao": "R3" }, "geometry": { "type": "Polygon", "coordinates": [[[-57,-28.5],[-54,-28.5],[-54,-30],[-57,-30],[-57,-28.5]]] } },
    { "type": "Feature", "properties": { "regiao": "R4" }, "geometry": { "type": "Polygon", "coordinates": [[[-54,-28.5],[-51,-28.5],[-51,-30],[-54,-30],[-54,-28.5]]] } },
    { "type": "Feature", "properties": { "regiao": "R5" }, "geometry": { "type": "Polygon", "coordinates": [[[-57,-30],[-54,-30],[-54,-32],[-57,-32],[-57,-30]]] } },
    { "type": "Feature", "properties": { "regiao": "R6" }, "geometry": { "type": "Polygon", "coordinates": [[[-54,-30],[-51,-30],[-51,-32],[-54,-32],[-54,-30]]] } },
  ]
};

// Mock de dados para as 6 delegacias
const dadosDelegacias = {
  'porto alegre': { medicos: '10.000', densidade: '2,10', generalista: '4.000', especialista: '6.000', inscricoes: { total: '11.000', densidade: '2,30', principais: '9.000', secundarios: '1.500', outros: '500' } },
  'passo fundo': { medicos: '8.000', densidade: '1,80', generalista: '3.000', especialista: '5.000', inscricoes: { total: '8.500', densidade: '1,90', principais: '7.000', secundarios: '1.000', outros: '500' } },
  'santa maria': { medicos: '7.500', densidade: '1,60', generalista: '2.800', especialista: '4.700', inscricoes: { total: '8.000', densidade: '1,70', principais: '6.500', secundarios: '1.000', outros: '500' } },
  'pelotas': { medicos: '9.200', densidade: '2,00', generalista: '3.800', especialista: '5.400', inscricoes: { total: '9.800', densidade: '2,10', principais: '8.000', secundarios: '1.200', outros: '600' } },
  'caxias do sul': { medicos: '6.800', densidade: '1,40', generalista: '2.500', especialista: '4.300', inscricoes: { total: '7.200', densidade: '1,50', principais: '5.800', secundarios: '1.000', outros: '400' } },
  'ijui': { medicos: '11.000', densidade: '2,40', generalista: '4.500', especialista: '6.500', inscricoes: { total: '12.000', densidade: '2,60', principais: '10.000', secundarios: '1.600', outros: '400' } },
};

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

// Função para normalizar nomes (remove acentos e deixa minúsculo, mas mantém letras)
function normalize(str: string) {
  return str.normalize('NFD').replace(/[0-\u036f]/g, '').replace(/\s+/g, '').toLowerCase();
}

// Cores para as delegacias
const coresDelegacias = ['#f59e42', '#60a5fa', '#34d399', '#f472b6', '#fbbf24', '#a78bfa'];

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
          const nome = feature.properties.NOME;
          let coords = feature.geometry.coordinates;
          // Se for MultiPolygon, pegue o maior polígono
          if (feature.geometry.type === 'MultiPolygon') {
            coords = coords.reduce((a: any, b: any) => (a[0].length > b[0].length ? a : b))[0];
          } else if (feature.geometry.type === 'Polygon') {
            coords = coords[0];
          }
          // Agora coords é um array de arrays [lon, lat]
          let lon = 0, lat = 0;
          coords.forEach((point: [number, number]) => { lon += point[0]; lat += point[1]; });
          lon /= coords.length; lat /= coords.length;
          // Acha a delegacia mais próxima
          let minDist = Infinity, delegacia = '';
          for (const sede of sedesDelegacias) {
            const d = distancia([lat, lon], sede.coord); // [lat, lon] para ambas
            if (d < minDist) { minDist = d; delegacia = sede.nome; }
          }
          mapping[nome] = delegacia;
          // console.log('Município:', nome, '-> Delegacia:', delegacia);
        });
        setMunicipioParaDelegacia(mapping);
        setGeojson(data);
      });
  }, []);

  const dados = dadosDelegacias[normalize(delegaciaSelecionada) as keyof typeof dadosDelegacias] || {
    medicos: '-',
    densidade: '-',
    generalista: '-',
    especialista: '-',
    inscricoes: { total: '-', densidade: '-', principais: '-', secundarios: '-', outros: '-' }
  };

type Regiao = keyof typeof dadosMock;
type Delegacia = keyof typeof dadosDelegacias;

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
                    style={{fontFamily: 'monospace'}} />
                </div>
              </header>
              {/* Médicos */}
              <span className="text-2xl font-medium text-gray-600">Médicos</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 lg:gap-6 mt-2">
                <CardInfo
                  icon={<MasksOutlinedIcon className="text-gray-600" fontSize="medium" />}
                  title="Médicos"
                  value={dados.medicos}
                />
                <CardInfo
                  icon={<Groups2OutlinedIcon className="text-green-600" fontSize="medium" />}
                  title="Dens. mil habitantes"
                  value={dados.densidade}
                />
                <CardInfo
                  icon={<WorkspacePremiumOutlinedIcon className="text-yellow-500" fontSize="medium" />}
                  title="Generalista vs Especialista"
                  value={
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center w-full">
                      <span className="text-[clamp(1rem,1.5vw,1.3rem)] font-bold break-words text-center max-w-[100px]">
                        {dados.generalista}
                      </span>
                      <span className="text-[clamp(1rem,1.5vw,1.3rem)] font-bold break-words text-center max-w-[100px]">
                        {dados.especialista}
                      </span>
                    </div>
                  }
                />
              </div>
              <span className="text-2xl font-medium text-gray-600 mt-6">Inscrições de médicos</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 md:gap-5 lg:gap-6 mt-2">
                {[
                  { title: 'Total', value: dados.inscricoes.total },
                  { title: 'Dens. mil habitantes', value: dados.inscricoes.densidade },
                  { title: 'Principais', value: dados.inscricoes.principais },
                  { title: 'Secundários', value: dados.inscricoes.secundarios },
                  { title: 'Outros', value: dados.inscricoes.outros },
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
                Este painel traz informações sobre o número total de médicos na região <b>{String(delegaciaSelecionada)}</b>, seguido da densidade de médicos por 1 mil habitantes...
                Nos próximos painéis, as informações foram refinadas segundo critérios definidos nas{' '}
                <a href="https://www.cremers.org.br/notas-metodologicas" className="text-blue-700 font-semibold underline hover:text-blue-900" target="_blank" rel="noopener noreferrer">
                  Notas Metodológicas
                </a>
                .
              </div>
            </div>
          </div>
          {/* Bloco do mapa */}
          <div className="flex flex-col items-center flex-1 w-full h-full">
            <span className="text-lg font-semibold text-gray-600 mb-2 mt-4 lg:mt-0">Mapa de densidade por UF</span>
            <div className="w-full h-[400px] lg:h-[600px] bg-gray-200 rounded-xl border border-gray-300 overflow-hidden flex items-center justify-center">
              <MapContainer
                center={[-29.5, -53]}
                zoom={7}
                style={{ height: '100%', width: '100%' }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {geojson && (
                  <GeoJSON
                    data={geojson}
                    onEachFeature={(feature: any, layer: any) => {
                      const nome = feature.properties.NOME;
                      const delegacia = municipioParaDelegacia[nome];
                      layer.on({
                        click: () => setDelegaciaSelecionada(delegacia),
                        mouseover: (e: any) => {
                          layer.setStyle({ fillColor: coresDelegacias[sedesDelegacias.findIndex(s => s.nome === delegacia)], fillOpacity: 0.8 });
                          layer.bindTooltip(`${nome} - ${delegacia}`, { sticky: true }).openTooltip(e.latlng);
                        },
                        mouseout: () => {
                          layer.setStyle({
                            fillColor: normalize(delegaciaSelecionada) === normalize(delegacia) ? coresDelegacias[sedesDelegacias.findIndex(s => s.nome === delegacia)] : '#d1d5db',
                            fillOpacity: 0.6,
                            color: '#e5e7eb', // borda clara
                            weight: 1,
                          });
                          layer.closeTooltip();
                        }
                      });
                      // Estilo inicial
                      layer.setStyle({
                        fillColor: normalize(delegaciaSelecionada) === normalize(delegacia) ? coresDelegacias[sedesDelegacias.findIndex(s => s.nome === delegacia)] : '#d1d5db',
                        fillOpacity: 0.6,
                        color: '#e5e7eb', // borda clara
                        weight: 1,
                        cursor: 'pointer',
                      });
                    }}
                  />
                )}
              </MapContainer>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DemografiaMedica;
