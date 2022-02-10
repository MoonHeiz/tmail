import { APP_NAME } from '../../constants';
import * as S from './StyledLogo';

export const Logo = () => {
  return (
    <S.Logo>
      <S.LogoWrapper to="/">
        <S.LogoIcon />
        <S.AppName title={`Woof ~ ${APP_NAME} ~`}>{APP_NAME}</S.AppName>
      </S.LogoWrapper>
    </S.Logo>
  );
};
