import React, { useState, useContext } from 'react';
import { Container, Content, AreaLogin, AreaInput } from './styles';
import LoginImage from '../../assets/login2.png';
import { AuthContext } from '../../contexts/auth';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const { auth, setAuth } = useContext(AuthContext);
  console.log('auth', auth);

  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "juanluuca3@gmail.com" && password === "123456") {
      setAuth(true);
      navigate("/home");
      window.alert("Login efetuado com sucesso");
    } else {
      window.alert("Usuario ou senha incorretas");
    }
  }

  return (
    <Container>
      <Content>
        <AreaLogin>
          <AreaInput>
            <form onSubmit={handleSubmit}>
              <span className='welcome'>Bem Vindo!</span>
              <img src={LoginImage} alt="loginimage" />
              <span>Email:</span>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}/>
              <span>Senha:</span>
              <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} />
                <div className='btn'>
                  <button type="submit">Entrar</button>
                </div>
              <p>Não tem uma conta?<strong>Criar uma conta</strong></p>
            </form>
          </AreaInput>
        </AreaLogin>
      </Content>
    </Container>
  );
}