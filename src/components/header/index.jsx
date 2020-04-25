import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  font-size: calc(10px + 2vmin);
  color: white;
  justify-content: space-between;
  padding: 0 1em 0 1em;
  box-shadow: 0 8px 6px -6px #444;
`;

const Logo = styled.h1`
  color: #eee;
  font-size: 1.5em;
  font-family: 'Pacifico', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
  text-shadow: 0 1px 1px #000;
  align-self: center;
`;

const NavMenu = styled.ul`
  list-style: none;
  align-self: center;
`;

const NavMenuItem = styled.li`
  display: inline-block;
  margin: 0 0.5em 0 0.5em;
  padding: 0.5em 0.5em 0.5em 0.5em;
  border: 1px solid #eee;
  border-radius: 0.3em;
`;

const NavLink = styled.span`
  color: #eee;
  &:hover {
    color: yellow;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Logo>Time with Tom</Logo>
      <NavMenu>
        <NavMenuItem>
          <Link to="/schedule">
            <NavLink>schedule</NavLink>
          </Link>
        </NavMenuItem>
        <NavMenuItem>
          <Link to="/booking-request">
            <NavLink>booking request</NavLink>
          </Link>
        </NavMenuItem>
      </NavMenu>
    </Wrapper>
  );
};

export default Header;
