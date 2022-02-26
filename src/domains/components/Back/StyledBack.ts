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
