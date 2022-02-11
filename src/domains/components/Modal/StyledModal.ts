import styled from 'styled-components';

export const Outside = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
`;

export const ContentContainer = styled.div`
  position: relative;
  background-color: #dcddde;
  border-radius: 10px;
  box-shadow: 0 2px 5px 1px rgb(0 0 0 / 21%);
  min-width: 350px;
  padding: 30px;
`;
