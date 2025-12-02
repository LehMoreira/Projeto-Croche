import React, { useEffect, useRef, useState } from 'react';
import '../styles/Chat.css';

interface Mensagem {
  autor: 'Você' | 'Bot';
  texto: string;
}

const Chat: React.FC = () => {
  const [mensagem, setMensagem] = useState('');
  const [conversa, setConversa] = useState<Mensagem[]>([]);
  const mensagensRef = useRef<HTMLDivElement>(null);

  const enviarMensagem = async () => {
    if (!mensagem.trim()) return;

    const msgUsuario: Mensagem = { autor: 'Você', texto: mensagem };
    setConversa((prev) => [...prev, msgUsuario]);
    setMensagem('');

    try {
      const res = await fetch('http://localhost:3000/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mensagem }),
      });

      const data = await res.json();
      const msgGemini: Mensagem = { autor: 'Bot', texto: data.reply };
      setConversa((prev) => [...prev, msgGemini]);
    } catch {
      setConversa((prev) => [
        ...prev,
        { autor: 'Bot', texto: 'Erro ao processar a mensagem.' },
      ]);
    }

    setMensagem('');
  };

  useEffect(() => {
    mensagensRef.current?.scrollTo({
      top: mensagensRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [conversa]);

  return (
    <div className="chat-container">
      <div className="chat-box" ref={mensagensRef}>
        {conversa.map((msg, index) => (
          <div key={index} className={`mensagem ${msg.autor === 'Você' ? 'usuario' : 'gemini'}`}>
            <strong>{msg.autor}:</strong> {msg.texto}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input type="text" placeholder="Digite sua mensagem..." value={mensagem} onChange={(e) => setMensagem(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && enviarMensagem()}/>
        <button onClick={enviarMensagem}>Enviar</button>
      </div>
    </div>
  );
};

export default Chat;
