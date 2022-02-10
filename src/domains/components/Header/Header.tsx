import { CSC } from '../../../styles/common';
import { useAppSelector } from '../../hooks/useRedux';
import { Email } from '../Email/Email';
import { Logo } from '../Logo/Logo';
import { MiniAccount } from '../MiniAccount/MiniAccount';
import { SwitchLanguage } from '../SwitchLanguage/SwitchLanguage';
import { WithLoader } from '../WithLoader/WithLoader';
import * as S from './StyledHeader';

export const Header = () => {
  const loading = useAppSelector(({ loading }) => loading);

  return (
    <S.Header>
      <CSC.AppContainer>
        <S.Container>
          <Logo />
          <WithLoader Component={Email} skeletonType="row" loading={loading} />
          <S.Controls>
            <SwitchLanguage />
            <WithLoader Component={MiniAccount} skeletonType="circle" loading={loading} w="27px" h="27px" />
          </S.Controls>
        </S.Container>
      </CSC.AppContainer>
    </S.Header>
  );
};
