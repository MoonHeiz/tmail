import styled from 'styled-components';
import emailIcon from '../../../assets/email-mini.svg';
import copyIcon from '../../../assets/email-copy.svg';

export const Email = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  cursor: pointer;
  gap: 5px;
`;

const Icon = styled.div`
  display: block;
  background-image: url(${emailIcon});
  content: '';
  width: 22px;
  background-repeat: no-repeat;
  height: 22px;
  background-position: center;
`;

export const EmailIcon = styled(Icon)`
  background-image: url(${emailIcon});
`;

export const CopyIcon = styled(Icon)`
  background-image: url(${copyIcon});
`;

export const EmailField = styled.input.attrs({ type: 'email', readonly: 'readonly' })`
  height: 100%;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: transparent;
  text-shadow: 0 0 0 #dcddde;
  padding: 0;

  &:focus {
    outline: none !important;
  }
`;
