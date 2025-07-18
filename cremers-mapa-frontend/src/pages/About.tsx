import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Sidebar from '../components/Sidebar';

const About: React.FC = () => {
  return (
    <Box component="main" className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <Sidebar />

     <Box className="flex-1 flex flex-col px-2 md:px-4 py-4 pt-14 md:pt-4 md:pl-28">
        <Box className="w-full max-w-6xl mx-auto">
          <Typography
            variant="h4"
            component="h1"
            fontWeight={600}
            color="#40626a"
            gutterBottom
            style={{ textAlign: 'left' }}
          >
            Apresentação
          </Typography>
        </Box>

        <section className="p-4 md:p-8 w-full max-w-6xl mx-auto">
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ textAlign: 'justify', marginBottom: 16 }}
          >
            As informações sobre o perfil e a distribuição dos médicos são relevantes para a sociedade em diferentes sentidos. Elas podem ajudar os gestores do sistema de saúde das diferentes esferas municipal, estadual ou federal no gerenciamento de seus recursos, além de contribuir também com legisladores que desejam criar dispositivos para atuar na área da saúde.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ textAlign: 'justify', marginBottom: 16 }}
          >
            Já é de amplo conhecimento que nos últimos anos a profissão médica tem assistido mudanças significantes nas suas estruturas. Somado aos desafios contínuos já existente na profissão com as funções de normatização, fiscalização, orientação, formação, valorização profissional, o número elevado de jovens profissionais que chegam ao mercado de trabalho anualmente e a evolução tecnológica e da legislação trouxeram a necessidade de avaliação constante desses cenários.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ textAlign: 'justify', marginBottom: 16 }}
          >
            Nesse sentido, o Conselho Federal de Medicina (CFM) deixa à disposição da sociedade o portal de Demografia Médica. Nele os diferentes tipos de usuários poderão avaliar, de forma continuada, as mudanças em processo no perfil e na distribuição dos médicos que atuam no Brasil. Entre as ferramentas oferecidas estão painéis com filtros que permitem desde uma visão geral do Brasil, até as consultas mais regionalizadas, o que inclui até mesmo a avaliação de pequenos conglomerados de municípios.
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ textAlign: 'justify', marginBottom: 16 }}
          >
            A disponibilização dos dados dinamicamente atualizados levará, consequentemente, à perene produção de conhecimento sobre os diferentes fenômenos que atingem a população de médicos. Com este trabalho o CFM espera atingir uma de suas principais missões, que diz respeito à promoção do bem-estar da sociedade Brasileira.
          </Typography>
          <Typography
            variant="h6"
            component="p"
            align="center"
            fontWeight={700}
            color="#222"
            style={{ marginTop: 24 }}
          >
            Conselho Federal de Medicina (CFM)
          </Typography>
        </section>
      </Box>
    </Box>
  );
};

export default About;
