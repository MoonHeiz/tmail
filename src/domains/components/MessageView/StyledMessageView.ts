import { Link } from 'react-router-dom';
import styled from 'styled-components';
import rightArrowIcon from '../../../assets/right-arrow.svg';

export const BackContainer = styled.div`
  padding: 20px 0 23px;
`;

export const LeftArrow = styled.div`
  background-image: url(${rightArrowIcon});
  background-repeat: no-repeat;
  background-size: cover;
  width: 20px;
  height: 20px;
  transition: transform 0.1s ease-in-out;
  transform: rotate(180deg);
`;

export const LinkBack = styled(Link)`
  align-items: center;
  display: inline-flex;
  font-size: 20px;
  color: #7c7f84;
  transition: color 0.1s ease-in-out;

  &:hover > ${LeftArrow} {
    transform: rotate(180deg) translateX(5px);
  }

  &:hover {
    color: #fff;
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
  background-color: #393c43;
  border: 1px solid #2b2d32;
  color: #fff;
  padding: 10px 25px;
  border-radius: 5px;
  width: 100%;
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
