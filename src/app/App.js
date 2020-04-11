import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

const Header = styled.div`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Logo = styled.div`
  margin: 20px 0;
  color: #eee;
  font-size: 28px;
  line-height: 0.9;
  font-weight: 200;
  font-family: 'Pacifico';
  text-shadow: 0 1px 1px #000;
  text-align: left;
`;

const Nav = styled.div``;

function App() {
  return (
    <Container>
      <Header>
        <Logo>Time with Tom</Logo>
        <Nav>
          <ul>
            <li></li>
          </ul>
        </Nav>
      </Header>
    </Container>
  );
}

export default App;
