import styled from 'styled-components';

export const EmptyMessagesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  height: 100%;
  width: 100%;
  gap: 50px;
`;

export const EmptyMessagesText = styled.h2`
  color: #e6e9ed;
  font-weight: 100;
  font-size: 18px;
  max-width: calc(100% - 40%);

  @media (max-width: 768px) {
    max-width: calc(100% - 15%);
  }
`;

export const BigEmail = styled.img`
  width: 200px;

  @media (max-width: 768px) {
    width: 150px;
  }
`;
