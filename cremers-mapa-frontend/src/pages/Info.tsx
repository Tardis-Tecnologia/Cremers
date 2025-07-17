import React from 'react';
import Sidebar from '../components/Sidebar';

const Info: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-row">
      <Sidebar />
      <section className="flex-1 flex flex-col items-center justify-center px-4 py-8">
        <header>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#1976d2', textAlign: 'left', width: '100%', maxWidth: 900, margin: '0 auto 1.5rem auto' }}>
            Informações
          </h1>
        </header>
        <div style={{ fontSize: '1.1rem', color: '#444', maxWidth: 900, textAlign: 'justify', margin: '0 auto' }}>
          Esta página traz informações complementares sobre o sistema, metodologia ou qualquer outro conteúdo relevante que você desejar exibir aqui.
        </div>
      </section>
    </main>
  );
};

export default Info;