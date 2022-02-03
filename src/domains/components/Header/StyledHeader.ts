import styled from 'styled-components';
import logo from '../../../assets/logo.svg';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  background-color: #202225;
  border-bottom: 3px solid #5865f2;
  padding: 20px 0;
  z-index: 8999;
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  height: 30px;
  gap: 3px;
`;

export const SiteName = styled.h1`
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  text-transform: capitalize;
  color: #fff;

  &:first-letter {
    color: #5865f2;
  }
`;

export const LogoIcon = styled.div`
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;
  width: 30px;
  height: 30px;
`;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 10px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  align-items: center;
`;
