/* eslint-disable react-hooks/exhaustive-deps */
import { AppRouter } from './router';
import { GlobalStyles } from './styles/global';
import { Provider } from 'react-redux';
import { store } from './domains/store/store';
import { useEffect } from 'react';
import { useAccount } from './domains/hooks/useAccount';
import { useAppDispatch } from './domains/hooks/useRedux';
import { setLoader } from './domains/store/action';
import { Modal } from './domains/components/Modal/Modal';

export const App = () => {
  const { refreshAccountFromCache, fastRegister, refreshMessages } = useAccount();
  const dispatch = useAppDispatch();

  useEffect(() => {
    (async () => {
      const hasCachedAccount = await refreshAccountFromCache();
      if (hasCachedAccount) {
        refreshMessages(hasCachedAccount);
      } else {
        await fastRegister();
      }
      dispatch(setLoader(false));
    })();
  }, []);

  return (
    <Provider store={store}>
      <AppRouter />
      <GlobalStyles />
      <Modal />
    </Provider>
  );
};
