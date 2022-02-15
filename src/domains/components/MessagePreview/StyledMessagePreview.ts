import { Link } from 'react-router-dom';
import styled from 'styled-components';
import rightArrowIcon from '../../../assets/right-arrow.svg';

export const RightArrow = styled.div`
  background-image: url(${rightArrowIcon});
  background-repeat: no-repeat;
  background-size: cover;
  width: 18px;
  height: 18px;
  transition: transform 0.1s ease-in-out;
`;

export const LinkMessage = styled(Link)`
  display: flex;
  gap: 15px;
  align-items: center;
  width: 100%;
  padding: 15px 20px;
  border-radius: 7px;
  background-color: #393c43;
  margin-bottom: 10px;

  &:last-child {
    margin: 0;
  }

  &:hover ${RightArrow} {
    transform: translateX(5px);
  }
`;

export const SenderImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 100%;
`;

export const MailInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
  gap: 25px;
`;

export const SenderInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-around;
`;

export const Address = styled.p`
  color: #7c7f84;
  margin: 0;
  font-size: 16px;
`;

export const Name = styled.h5`
  color: #b0b7ff;
  margin: 0;
  font-size: 18px;
`;

export const MailContentPreview = styled(SenderInfo)``;

export const Subject = styled.div`
  color: #dcddde;
  white-space: nowrap;
`;

export const Intro = styled.p`
  color: #7c7f84;
  margin: 0;
  white-space: nowrap;
`;
