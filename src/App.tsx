/* eslint-disable react-hooks/exhaustive-deps */
import { AppRouter } from './router';
import { GlobalStyles } from './styles/global';
import { useEffect } from 'react';
import { useAccount } from './domains/hooks/useAccount';
import { useAppDispatch } from './domains/hooks/useRedux';
import { setLoader } from './domains/store/action';
import { Modal } from './domains/components/Modal/Modal';
import { AUTH_ERROR_DELAY } from './domains/constants';
import './utils/i18n';

export const App = () => {
  const { refreshAccountFromCache, fastRegister } = useAccount();
  const dispatch = useAppDispatch();

  const authAccount = async () => {
    let hasCachedAccount = await refreshAccountFromCache();
    if (!hasCachedAccount) {
      hasCachedAccount = await fastRegister();
    }
    if (hasCachedAccount) {
      dispatch(setLoader(false));
    } else {
      setTimeout(authAccount, AUTH_ERROR_DELAY);
    }
  };

  useEffect(() => {
    authAccount();
  }, []);

  return (
    <>
      <AppRouter />
      <GlobalStyles />
      <Modal />
    </>
  );
};
