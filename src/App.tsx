import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Chat from './Chat';
import './App.css';

// Configuração das rotas da aplicação
const App: React.FC = () => {
  return (
    <Routes>
      {/* Rota para a página de login */}
      <Route path="/" element={<Login />} />
      {/* Rota para a página de chat, com o nome do usuário como parâmetro */}
      <Route path="/chat/:username" element={<Chat />} />
    </Routes>
  );
};

export default App;
