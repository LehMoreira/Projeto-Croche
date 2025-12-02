import React, { useState } from 'react';
import '../styles/Login.css';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://rm8ldona7j.execute-api.us-east-1.amazonaws.com/usuarios/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      const data = await response.json();

      if (response.ok) {
        window.location.href = '/home';
      } else {
        setErro(data.message || 'Erro no login');
      }
    } catch (error) {
      setErro('Erro na conexão com o servidor');
    }
  };

  return (
    <div className="container-form">
      <div className="container-img">
        <img src="../src/assets/imagens/logo.png" alt="Logo" />
        <p>Feito à mão</p>
      </div>

      <div className="form">
        <i className="bi bi-person-circle"></i>
        <h1>LOGIN</h1>

        {erro && <p style={{ color: 'red', fontSize: 14 }}>{erro}</p>}

        <form onSubmit={handleLogin}>
          <input type="email" className="form-control" placeholder="Email" value={email}
            onChange={(e) => setEmail(e.target.value)} required/>

          <input type="password" className="form-control" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)} required/>

          <input type="submit" className="btn-login" value="Entrar" />
          <input type="submit" className="btn-login" value="Cadastrar" />
        </form>
      </div>
    </div>
  );
};

export default Login;
