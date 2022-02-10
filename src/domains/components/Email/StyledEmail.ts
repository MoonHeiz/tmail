import styled from 'styled-components';
import emailIcon from '../../../assets/email-mini.svg';

export const Email = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;

  &::before {
    display: block;
    background-image: url(${emailIcon});
    content: '';
    width: 22px;
    background-repeat: no-repeat;
    height: 22px;
    background-position: center;
    margin-right: 5px;
    }
  }
`;

export const EmailField = styled.input.attrs({ type: 'email', readonly: 'readonly' })`
  height: 100%;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: transparent;
  text-shadow: 0 0 0 #fff;
  padding: 0;

  &:focus {
    outline: none !important;
  }
`;
