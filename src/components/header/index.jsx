import React from 'react';
import styled from 'styled-components';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';
import { COLOURS, GRADIENTS, LINKS, SHADOWS } from '../../config';
import isMenuActive from '../../utils/menu-active';

const Wrapper = styled.div`
  background: ${GRADIENTS.BLUE};
  min-height: 10vh;
  display: flex;
  flex-direction: row;
  font-size: calc(10px + 2vmin);
  color: white;
  justify-content: space-between;
  padding: 0 1em 0 1em;
  box-shadow: ${SHADOWS.BLACK};
`;

const Logo = styled.h1`
  color: ${COLOURS.GREEN};
  font-size: 1.1em;
  font-family: 'Pacifico', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
  text-shadow: 0 1px 1px ${COLOURS.DARK_PURPLE};
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
  border: ${(props) => (props.isActive ? `1px solid ${COLOURS.GREEN}` : `0`)};
  border-radius: ${(props) => (props.isActive ? `0.5em` : `0`)};
  a {
    text-decoration: none;
  }
`;

const NavLink = styled.span`
  font-family: 'Pacifico', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
  font-size: 0.85em;
  color: ${COLOURS.LIGHT_GRAY};
  &:hover {
    color: ${COLOURS.GREEN};
  }
`;

const Header = () => {
  const location = useLocation();
  const activeLink = useRouteMatch(location.pathname);

  return (
    <Wrapper>
      <Logo>Time with Tom</Logo>
      <NavMenu>
        <NavMenuItem isActive={isMenuActive(activeLink, LINKS.SCHEDULE)}>
          <Link to="/schedule">
            <NavLink>schedule</NavLink>
          </Link>
        </NavMenuItem>
        <NavMenuItem isActive={isMenuActive(activeLink, LINKS.BOOKING_REQUEST)}>
          <Link to="/booking-request">
            <NavLink>booking request</NavLink>
          </Link>
        </NavMenuItem>
      </NavMenu>
    </Wrapper>
  );
};

export default Header;
