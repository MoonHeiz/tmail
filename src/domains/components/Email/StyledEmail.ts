import styled from 'styled-components';

export const Email = styled.input.attrs({ type: 'email', readonly: 'readonly' })`
  height: 100%;
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: transparent;
  text-shadow: 0 0 0 #fff;

  &:focus {
    outline: none !important;
  }
`;
