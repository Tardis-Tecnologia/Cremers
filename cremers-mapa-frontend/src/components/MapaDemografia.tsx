import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { sedesDelegacias, coresDelegacias, normalize } from '../utils/geoHelpers';

type Props = {
  geojson: any;
  municipioParaDelegacia: Record<string, string>;
  delegaciaSelecionada: string;
  setDelegaciaSelecionada: (delegacia: string) => void;
  dadosDelegacias: Record<string, any>; // nova prop
};

const MapaDemografia: React.FC<Props> = ({
  geojson,
  municipioParaDelegacia,
  delegaciaSelecionada,
  setDelegaciaSelecionada,
  dadosDelegacias,
}) => {
  return (
    <div className="flex flex-col items-center flex-1 w-full h-full">
      <span className="text-lg font-semibold text-gray-600 mb-2 mt-4 lg:mt-0">
        Mapa de densidade por UF
      </span>
      <div className="w-full h-[400px] lg:h-[600px] bg-gray-200 rounded-xl border border-gray-300 overflow-hidden flex items-center justify-center">
        <MapContainer center={[-29.5, -53]} zoom={7} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {geojson && (
            <GeoJSON
              data={geojson}
              onEachFeature={(feature: any, layer: any) => {
                const nome = feature.properties.name || '';
                const nomeNormalizado = normalize(nome);
                const delegacia = municipioParaDelegacia[nomeNormalizado] || '';
                const dados = dadosDelegacias[normalize(delegacia)] || {};

                layer.on({
                  click: (e: any) => {
                    const nomeClicado = e.target.feature.properties.name || '';
                    const nomeClicadoNormalizado = normalize(nomeClicado);
                    const delegaciaClicada = municipioParaDelegacia[nomeClicadoNormalizado] || '';
                    setDelegaciaSelecionada(delegaciaClicada);
                  },
                  mouseover: (e: any) => {
                    const index = sedesDelegacias.findIndex(
                      (s) => normalize(s.nome) === normalize(delegacia)
                    );
                    const fillColor = index >= 0 ? coresDelegacias[index] : '#d1d5db';
                    let tooltipContent = `${nome} - ${delegacia}`;
                    if (dados && dados.medicos) {
                      tooltipContent += `<br/>Médicos: ${dados.medicos}<br/>Densidade: ${dados.densidade}`;
                    }
                    layer.setStyle({
                      fillColor,
                      fillOpacity: 0.8,
                    });
                    layer.bindTooltip(tooltipContent, { sticky: true }).openTooltip(e.latlng);
                  },
                  mouseout: () => {
                    const index = sedesDelegacias.findIndex(
                      (s) => normalize(s.nome) === normalize(delegacia)
                    );
                    const fillColor = index >= 0 ? coresDelegacias[index] : '#d1d5db';

                    layer.setStyle({
                      fillColor,
                      fillOpacity: 0.6,
                      color: '#e5e7eb',
                      weight: 1,
                    });
                    layer.closeTooltip();
                  },
                });

                // Estilo inicial
                const indexInicial = sedesDelegacias.findIndex(
                  (s) => normalize(s.nome) === normalize(delegacia)
                );
                const fillColorInicial = indexInicial >= 0 ? coresDelegacias[indexInicial] : '#d1d5db';

                layer.setStyle({
                  fillColor: fillColorInicial, // sempre usa a cor da delegacia
                  fillOpacity: 0.6,
                  color: '#e5e7eb',
                  weight: 1,
                  cursor: 'pointer',
                });
              }}
            />
          )}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapaDemografia;
