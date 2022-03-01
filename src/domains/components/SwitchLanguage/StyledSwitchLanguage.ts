import styled from 'styled-components';
import switchLanguageIcon from '../../../assets/switch-language.svg';

interface FlagImageProps {
  $current?: boolean;
}

export const SwitchLanguage = styled.div`
  cursor: pointer;
  position: relative;
  background-image: url(${switchLanguageIcon});
  background-repeat: no-repeat;
  background-size: contain;
  height: 100%;
  width: 100%;
`;

export const FlagImage = styled.img<FlagImageProps>`
  display: block;
  cursor: pointer;
  height: 30px;
  width: 45px;
  padding: 7px;
  object-fit: cover;
  background-color: ${({ $current }) => ($current ? '#393c43' : '')};

  &:hover {
    background-color: #2a2d32;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  right: 0;
  top: 30px;
  border-radius: 5px;
  flex-direction: column;
  background-color: #202225;
`;
