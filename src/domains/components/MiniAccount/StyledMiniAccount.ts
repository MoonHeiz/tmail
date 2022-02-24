import styled from 'styled-components';
import { MenuItemProps } from '../../interfaces/IStyles';

export const MiniAccount = styled.div`
  position: relative;
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  right: 0;
  background-color: #202225;
  border-radius: 5px;
`;

export const Dropdown = styled.ul`
  padding: 10px 0;
  list-style: none;
  color: #dcddde;
`;

export const MenuItem = styled.li<MenuItemProps>`
  padding: 7px 20px;
  white-space: nowrap;
  color: ${({ $red }) => ($red ? '#ff8b8b!important' : '')};

  &:hover {
    background-color: #2a2d32;
    color: #fff;
  }
`;

export const AccountFakeImage = styled.img`
  border-radius: 100%;
  color: #dcddde;
  height: 100%;
  width: 100%;
  background-color: #3b3b3b;
`;
