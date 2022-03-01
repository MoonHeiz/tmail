import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const baseControl = css`
  background-color: #393c43;
  border: 1px solid #2b2d32;
  color: #fff;
  padding: 10px 25px;
  border-radius: 5px;
  width: 100%;
  white-space: nowrap;

  &:hover {
    background-color: #40434a;
  }

  &:active {
    background-color: #26292c;
  }
`;

export const BasicContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const ControlButton = styled.button`
  cursor: pointer;
  ${baseControl}
`;

export const ControlLink = styled(Link)`
  display: block;
  text-align: center;
  ${baseControl}
`;

export const Controls = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    justify-content: space-between;
    gap: 10px;
  }
`;

export const SubjectPreview = styled.h2`
  color: #dcddde;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MessageContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 25px;
  overflow: hidden;
`;

export const Block = styled.div``;

export const Ago = styled.div`
  color: #6f7581;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Name = styled.h3`
  color: #5865f2;
  font-weight: 500;
  margin: 0;
`;

export const Subject = styled.p`
  margin: 0;
  color: #0e0e0e;
`;

export const SenderInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const SenderImage = styled.img`
  width: 58px;
  height: 58px;
  border-radius: 100%;
`;

export const Body = styled.iframe`
  display: block;
  border: none;
  width: 100%;
  height: 750px;
`;
