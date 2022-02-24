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
  background-color: rgb(0 0 0 / 80%);
`;

export const Modal = styled.div`
  position: relative;
  background-color: #36393f;
  border-radius: 10px;
  box-shadow: 0 2px 5px 1px rgb(0 0 0 / 21%);
  min-width: 350px;
`;

export const Head = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 35px 35px 10px 35px;
  margin-bottom: 25px;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 26px;
  color: #fff;
  font-weight: 700;
`;

export const Subtitle = styled.h5`
  font-size: 18px;
  color: #dcddde;
  font-weight: 400;
  margin: 10px 0;
`;

export const Content = styled.div`
  padding: 0 35px 35px;
`;
