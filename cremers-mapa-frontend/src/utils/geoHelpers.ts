// src/utils/geoHelpers.ts

export const sedesDelegacias = [
  { nome: 'porto alegre', coord: [-30.0346, -51.2177] },
  { nome: 'passo fundo', coord: [-28.2627, -52.4061] },
  { nome: 'santa maria', coord: [-29.6842, -53.8069] },
  { nome: 'pelotas', coord: [-31.7649, -52.3371] },
  { nome: 'caxias do sul', coord: [-29.1676, -51.1794] },
  { nome: 'ijui', coord: [-28.3881, -53.9182] },
];

export const coresDelegacias = [
  '#f59e42',
  '#60a5fa',
  '#34d399',
  '#f472b6',
  '#fbbf24',
  '#a78bfa'
];

export function normalize(str: string): string {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '')
    .toLowerCase();
}

// Mock de dados por região
export const dadosMock = {
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

// Mock de dados para as 6 delegacias
export const dadosDelegacias = {
  'porto alegre': { medicos: '10.000', densidade: '2,10', generalista: '4.000', especialista: '6.000', inscricoes: { total: '11.000', densidade: '2,30', principais: '9.000', secundarios: '1.500', outros: '500' } },
  'passo fundo': { medicos: '8.000', densidade: '1,80', generalista: '3.000', especialista: '5.000', inscricoes: { total: '8.500', densidade: '1,90', principais: '7.000', secundarios: '1.000', outros: '500' } },
  'santa maria': { medicos: '7.500', densidade: '1,60', generalista: '2.800', especialista: '4.700', inscricoes: { total: '8.000', densidade: '1,70', principais: '6.500', secundarios: '1.000', outros: '500' } },
  'pelotas': { medicos: '9.200', densidade: '2,00', generalista: '3.800', especialista: '5.400', inscricoes: { total: '9.800', densidade: '2,10', principais: '8.000', secundarios: '1.200', outros: '600' } },
  'caxias do sul': { medicos: '6.800', densidade: '1,40', generalista: '2.500', especialista: '4.300', inscricoes: { total: '7.200', densidade: '1,50', principais: '5.800', secundarios: '1.000', outros: '400' } },
  'ijui': { medicos: '11.000', densidade: '2,40', generalista: '4.500', especialista: '6.500', inscricoes: { total: '12.000', densidade: '2,60', principais: '10.000', secundarios: '1.600', outros: '400' } },
};
