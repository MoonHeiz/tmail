import { useRef } from 'react';
import { AVATARS_API } from '../../constants';
import { useAccount } from '../../hooks/useAccount';
import { useOutsideToggle } from '../../hooks/useOutsideToggle';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux';
import { setLoader, setModal } from '../../store/action';
import { AccessibleControl } from '../AccessibleControl/AccessibleControl';
import * as S from './StyledMiniAccount';

export const MiniAccount = () => {
  const controlRef = useRef<HTMLButtonElement>(null);
  const [isDropdownOpened, toggleDropdown] = useOutsideToggle(controlRef);
  const account = useAppSelector(({ account }) => account);
  const { exit, fastRegister } = useAccount();
  const dispatch = useAppDispatch();

  const openDropdownHandler = () => {
    toggleDropdown();
  };

  const exitHandler = async () => {
    exit();
    await fastRegister();
    dispatch(setLoader(false));
  };

  const loginHandler = () => {
    dispatch(setModal(<h1>skskks</h1>));
  };

  return (
    <AccessibleControl forwardRef={controlRef} onClick={openDropdownHandler}>
      <S.MiniAccount>
        <S.AccountFakeImage src={`${AVATARS_API}/initials/${account!.address}.svg`} alt="your avatar" />
        {isDropdownOpened && (
          <S.DropdownWrapper>
            <S.Dropdown>
              <S.MenuItem onClick={loginHandler}>Login</S.MenuItem>
              <S.MenuItem onClick={exitHandler}>Sign out</S.MenuItem>
            </S.Dropdown>
          </S.DropdownWrapper>
        )}
      </S.MiniAccount>
    </AccessibleControl>
  );
};
