import styled from 'styled-components';

interface IMenuItemProps {
  $red?: boolean;
}

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

export const MenuItem = styled.li<IMenuItemProps>`
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

export const AccountInfo = styled.div`
  padding: 0 15px;
`;

export const Login = styled.h5`
  color: #fff;
  margin: 0 0 5px;
  user-select: all;
  font-size: 14px;
`;

export const Password = styled(Login)``;
