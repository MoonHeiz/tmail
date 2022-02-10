import { Link } from 'react-router-dom';
import styled from 'styled-components';
import rightArrowIcon from '../../../assets/right-arrow.svg';

export const Messages = styled.div`
  flex: 1;
`;

export const MessagesInbox = styled.h2`
  color: #e6e9ed;
  font-size: 26px;
  margin: 15px 0 20px;
`;

export const RightArrow = styled.div`
  background-image: url(${rightArrowIcon});
  background-repeat: no-repeat;
  background-size: cover;
  width: 18px;
  height: 18px;
  transition: transform 0.1s ease-in-out;
`;

export const Message = styled(Link)`
  display: flex;
  gap: 15px;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
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

export const Inbox = styled.h2`
  font-size: 28px;
  color: #fff;
  margin: 10px 0 20px;
`;

export const SenderImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 100%;
`;

export const Address = styled.div`
  color: #7c7f84;
`;

export const Name = styled.div`
  color: #b0b7ff;
`;

export const SenderInfo = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-around;
`;

export const MailInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
  gap: 25px;
`;

export const MailContentPreview = styled(SenderInfo)``;

export const Subject = styled.div`
  color: #fff;
  white-space: nowrap;
`;

export const Intro = styled.p`
  color: #7c7f84;
  margin: 0;
  white-space: nowrap;
`;
