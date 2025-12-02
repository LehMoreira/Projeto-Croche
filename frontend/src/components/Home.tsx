import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';
import logo from '../assets/imagens/logo.png';
import Chat from '../components/Chat';
import Ajuda from '../components/Ajuda';

const Home: React.FC = () => {
  const [mostrarChat, setMostrarChat] = useState(false);
  const [mostrarAjuda, setMostrarAjuda] = useState(false);
  const produtos = [ //dados ficticios, sem comunicação com o banco
  {
    id: 1,
    nome: 'Tapete de Crochê',
    descricao: 'Tapete feito à mão com fios de algodão.',
    preco: 59.90,
    imagem: '../src/assets/imagens/tapete.png'
  },
  {
    id: 2,
    nome: 'Amigurumi Coelhinho',
    descricao: 'Boneco artesanal perfeito para presentes.',
    preco: 39.90,
    imagem: '../src/assets/imagens/coelho.png'
  },
  {
    id: 3,
    nome: 'Kit Sousplat',
    descricao: 'Conjunto com 4 peças coloridas.',
    preco: 89.90,
    imagem: '../src/assets/imagens/deco_prato.png'
  }
];

  const navigate = useNavigate();

  return (
    <>
    <main className="produtos-container">
      {produtos.map((produto) => (
      <div key={produto.id} className="produto-card">
        <img src={produto.imagem} alt={produto.nome} className="produto-img" />
        <h3>{produto.nome}</h3>
        <p>{produto.descricao}</p>
      <span className="preco">R$ {produto.preco.toFixed(2)}</span>
    </div>
    ))}
    </main>

      <header>
        <nav className="navbar">
          <div className="navbar-conteudo">
            <img id="logo" src={logo} alt="Logo" />

            <form className="menu">
              <button type="button" className="btn-form">
                <i className="bi bi-list"></i>
              </button>
              <div className="menu-pesquisa">
                <input type="text" placeholder="Digite o que você procura" />
                <button type="button" className="btn-form">
                  <i className="bi bi-search"></i>
                </button>
              </div>
              <div className="menu-logout">
                <button type="button" className="btn-form" onClick={() => setMostrarChat(!mostrarChat)}>
                  <i className="bi bi-chat-quote"></i>
                </button>
                <label className="form-label-logout">CHAT</label>
              </div>

              <div className="menu-logout">
                <button type="button" className="btn-form">
                  <i className="bi bi-question-circle" onClick={() => setMostrarAjuda(!mostrarAjuda)}></i>
                </button>
                <label className="form-label-logout">AJUDA</label>
              </div>

              <div className="menu-logout">
                <button type="button" className="btn-form" onClick={() => navigate('/')}>
                  <i className="bi bi-box-arrow-in-right"></i>
                </button>
                <label className="form-label-logout">SAIR</label>
              </div>

            </form>
          </div>
        </nav>
      </header>
      {mostrarChat && <Chat />}
      {mostrarAjuda && <Ajuda />}
    </>
  );
};

export default Home;
