import React from 'react';
import styled from 'styled-components';
import { GRADIENTS, SHADOWS } from '../../config';

const Wrapper = styled.div`
  background: ${GRADIENTS.BLUE};
  min-height: 5vh;
  display: flex;
  flex-direction: row;
  font-size: calc(10px + 2vmin);
  color: white;
  justify-content: space-around;
  padding: 0 1em 0 1em;
  box-shadow: ${SHADOWS.BLACK};
  font-family: 'Pacifico', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
    'Helvetica Neue', sans-serif;
`;

const Mfb = styled.div`
  align-self: center;
`;

const Copyright = styled.div`
  align-self: center;
`;

const CopyrightText = styled.span`
  font-size: 0.5em;
  color: white;
  align-self: center;
`;

const Link = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-decoration: none;
`;

const LinkText = styled.span`
  font-size: 0.5em;
  color: white;
  padding-left: 0.5em;
  align-self: center;
`;

const Image = styled.img`
  width: 24px;
  height: 24px;
  align-self: center;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Mfb>
        <Link href="https://mfbproject.co.za" target="_blank">
          <Image src="/assets/images/mfbproject.png" />
          <LinkText>created by mfb project</LinkText>
        </Link>
      </Mfb>
      <Copyright>
        <CopyrightText>
          Copyright &copy; 2020 Muzikayise Flynn Buthelezi (zuluCoda)
        </CopyrightText>
      </Copyright>
    </Wrapper>
  );
};

export default Footer;
