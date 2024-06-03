import React, { useState, useEffect, FormEvent } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Interface para representar uma mensagem
interface Message {
  username: string;
  message: string;
}

// Componente de Chat
const Chat: React.FC = () => {
  // Obtendo o nome do usuário dos parâmetros da URL
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();
  const [message, setMessage] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);

  // Carregando as mensagens armazenadas no localStorage quando o componente é montado
  useEffect(() => {
    const storedMessages = JSON.parse(
      localStorage.getItem('messages') || '[]'
    ) as Message[];
    setMessages(storedMessages);
  }, []);

  // Função para enviar uma mensagem
  const handleSendMessage = (e: FormEvent) => {
    e.preventDefault();
    if (message && username) {
      const newMessage: Message = { username, message };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      localStorage.setItem('messages', JSON.stringify(updatedMessages));
      setMessage('');
    }
  };

  // Função para retornar à página de login
  const handleBackToLogin = () => {
    navigate('/');
  };

  return (
    <div className="chat-container">
      <h1>Chat</h1>
      <button onClick={handleBackToLogin}>Sair</button>
      <ul className="messages">
        {messages.map((msg, index) => (
          <li
            key={index}
            className={
              msg.username === username ? 'my-message' : 'other-message'
            }
          >
            <strong>{msg.username}: </strong>
            {msg.message}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Digite uma mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Chat;
