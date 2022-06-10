import styled from 'styled-components';
import LoginImage from '../assets/login2.png'

function Login() {
  return (
    <Container>
      <Content>
        <AreaLogin>
          <AreaInput>
            <span className='welcome'>Bem Vindo!</span>
            <img src={LoginImage} alt="loginimage" />
            <span>Email:</span>
            <input type="email" />
            <span>Senha:</span>
            <input type="password" />
            <p>Não tem uma conta?<strong>Criar uma conta</strong></p>
          </AreaInput>
        </AreaLogin>
      </Content>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const Content = styled.div`
  height: 400px;
  width: 400px;
  border-radius: 15px;
  background-color: blueviolet;
`;
const AreaLogin = styled.div`
  padding: 30px 40px;
`;
const AreaInput = styled.div`
  display: flex;
  flex-direction: column;

  img {
    height: 40px;
    width: 40px;
    margin: 20px 140px;
  }

  .welcome {
    text-align: center;
  }

  input {
    width: 100%;
    padding: 5px 10px;
    margin: 8px 0;
    box-sizing: border-box;
    border: none;
    outline: 0;
  }

  span {
    margin-top: 20px;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
  }
  
  strong {
    color: blue;
    cursor: pointer;
    margin-left: 5px;
  }
`;
