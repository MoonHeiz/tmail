import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../../../assets/logo.svg';

export const Logo = styled.div``;

export const LinkLogoWrapper = styled(Link)`
  display: inline-flex;
  align-items: center;
  height: 30px;
`;

export const AppName = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  text-transform: capitalize;
  color: #dcddde;
  white-space: nowrap;

  &:first-letter {
    color: #5865f2;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const LogoIcon = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  width: 30px;
  height: 30px;
`;
