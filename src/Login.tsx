import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Componente de Login
const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const navigate = useNavigate();

  // Função para manejar o login e navegar para a página de chat
  const handleLogin = () => {
    if (username) {
      navigate(`/chat/${username}`);
    }
  };

  return (
    <div className="login-container">
      <h1>Bem-vindo ao Chat</h1>
      <input
        type="text"
        placeholder="Digite seu nome"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
};

export default Login;
