import styled from 'styled-components';

export const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  background-color: #202225;
  border-bottom: 3px solid #5865f2;
  padding: 20px 0;
  z-index: 8999;
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
