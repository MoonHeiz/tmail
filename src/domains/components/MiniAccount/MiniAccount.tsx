import { useRef } from 'react';
import { AVATARS_API } from '../../constants';
import { useAccount } from '../../hooks/useAccount';
import { useOutsideToggle } from '../../hooks/useOutsideToggle';
import { useAppDispatch } from '../../hooks/useRedux';
import { setLoader, setModal } from '../../store/action';
import { AccessibleControl } from '../AccessibleControl/AccessibleControl';
import { Form } from '../Form/Form';
import * as S from './StyledMiniAccount';

export const MiniAccount = () => {
  const controlRef = useRef<HTMLButtonElement>(null);
  const [isDropdownOpened, toggleDropdown] = useOutsideToggle(controlRef);
  const { account, exit, fastRegister, deleteAccount, customLogin } = useAccount();
  const dispatch = useAppDispatch();

  const openDropdownHandler = () => {
    if (!isDropdownOpened) {
      toggleDropdown();
    }
  };

  const exitHandler = async () => {
    exit();
    await fastRegister();
    dispatch(setLoader(false));
  };

  const loginHandler = () => {
    dispatch(
      setModal({
        title: 'Login',
        subtitle: 'Here you can log in to your account',
        content: <Form submit={loginSubmit} />,
      })
    );
  };

  const registerHandler = () => {
    dispatch(
      setModal({
        title: 'Register',
        content: <Form submit={loginSubmit} />,
      })
    );
  };

  const loginSubmit = async (e: React.FormEvent<HTMLFormElement>, email: string, password: string) => {
    await customLogin({ address: email, password });
  };

  const deleteHandler = async () => {
    await deleteAccount();
    await fastRegister();
    dispatch(setLoader(false));
  };

  return (
    <AccessibleControl forwardRef={controlRef} onClick={openDropdownHandler}>
      <S.MiniAccount>
        <S.AccountFakeImage src={`${AVATARS_API}/initials/${account!.address}.svg`} alt="your avatar" />
        {isDropdownOpened && (
          <S.DropdownWrapper>
            <S.AccountInfo>
              <S.Login>{account?.address}</S.Login>
              <S.Password>{account?.password}</S.Password>
            </S.AccountInfo>
            <S.Dropdown>
              <S.MenuItem onClick={registerHandler}>Custom account</S.MenuItem>
              <S.MenuItem onClick={loginHandler}>Login</S.MenuItem>
              <S.MenuItem onClick={exitHandler}>Sign out</S.MenuItem>
              <S.MenuItem onClick={deleteHandler} $red>
                Delete account
              </S.MenuItem>
            </S.Dropdown>
          </S.DropdownWrapper>
        )}
      </S.MiniAccount>
    </AccessibleControl>
  );
};
