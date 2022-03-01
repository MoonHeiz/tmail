import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { AVATARS_API } from '../../constants';
import { useAccount } from '../../hooks/useAccount';
import { useOutsideToggle } from '../../hooks/useOutsideToggle';
import { useAppDispatch } from '../../hooks/useRedux';
import { IForm } from '../../interfaces/IForm';
import { setLoader, setModal } from '../../store/action';
import { AccessibleControl } from '../AccessibleControl/AccessibleControl';
import { Form } from '../Form/Form';
import * as S from './StyledMiniAccount';

export const MiniAccount = () => {
  const controlRef = useRef<HTMLButtonElement>(null);
  const [isDropdownOpened, toggleDropdown] = useOutsideToggle(controlRef);
  const { account, exit, fastRegister, deleteAccount, customLogin, customRegister, getDomainsFromStorage } =
    useAccount();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

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
        title: t('loginTitle'),
        subtitle: t('loginSubtitle'),
        content: <Form submit={loginSubmit} submitValue={t('loginSubmit')} />,
      })
    );
  };

  const registerHandler = async () => {
    const availableDomains = await getDomainsFromStorage();
    dispatch(
      setModal({
        title: t('registerTitle'),
        content: <Form submit={registerSubmit} domains={availableDomains} submitValue={t('registerSubmit')} />,
      })
    );
  };

  const loginSubmit = async ({ email, password }: IForm) => {
    await customLogin({ address: email, password });
  };

  const registerSubmit = async ({ email, password, selectedDomain }: IForm) => {
    dispatch(setLoader(true));
    await customRegister(`${email}@${selectedDomain}`, password);
    dispatch(setLoader(false));
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
              <S.MenuItem onClick={registerHandler}>{t('miniAccountCustomAccount')}</S.MenuItem>
              <S.MenuItem onClick={loginHandler}>{t('miniAccountLogin')}</S.MenuItem>
              <S.MenuItem onClick={exitHandler}>{t('miniAccountSignOut')}</S.MenuItem>
              <S.MenuItem onClick={deleteHandler} $red>
                {t('miniAccountDelete')}
              </S.MenuItem>
            </S.Dropdown>
          </S.DropdownWrapper>
        )}
      </S.MiniAccount>
    </AccessibleControl>
  );
};
