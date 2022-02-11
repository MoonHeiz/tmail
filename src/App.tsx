/* eslint-disable react-hooks/exhaustive-deps */
import { AppRouter } from './router';
import { GlobalStyles } from './styles/global';
import { useEffect } from 'react';
import { useAccount } from './domains/hooks/useAccount';
import { useAppDispatch, useAppSelector } from './domains/hooks/useRedux';
import { setLoader } from './domains/store/action';
import { Modal } from './domains/components/Modal/Modal';
import { useAutoRefresh } from './domains/hooks/useAutoRefresh';

export const App = () => {
  const { refreshAccountFromCache, fastRegister } = useAccount();
  const account = useAppSelector(({ account }) => account);
  const dispatch = useAppDispatch();
  const { startAutoRefreshMessages } = useAutoRefresh();

  useEffect(() => {
    (async () => {
      const hasCachedAccount = await refreshAccountFromCache();
      if (!hasCachedAccount) {
        await fastRegister();
      }
      dispatch(setLoader(false));
    })();
  }, []);

  useEffect(() => {
    startAutoRefreshMessages(account);
  }, [account]);

  return (
    <>
      <AppRouter />
      <GlobalStyles />
      <Modal />
    </>
  );
};
