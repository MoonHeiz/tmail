import { useEffect, useRef } from 'react';
import { MESSAGES_REFRESH_DELAY, TTF_MESSAGES_REFRESH_DELAY } from '../constants';
import { IAccount } from '../interfaces/IAccount';
import { useAccount } from './useAccount';

export const useAutoRefresh = () => {
  const { refreshMessages } = useAccount();
  const id = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return stopAutoRefreshMessages;
  }, []);

  const tick = (account: IAccount | null) => {
    if (account) {
      refreshMessages(account);
    }
    id.current = setTimeout(() => tick(account), MESSAGES_REFRESH_DELAY);
  };

  const startAutoRefreshMessages = (account: IAccount | null) => {
    if (id.current) {
      stopAutoRefreshMessages();
    }
    if (account) {
      setTimeout(() => refreshMessages(account), TTF_MESSAGES_REFRESH_DELAY);
      id.current = setTimeout(() => tick(account), MESSAGES_REFRESH_DELAY);
    }
  };

  const stopAutoRefreshMessages = () => {
    if (id.current) {
      clearInterval(id.current);
    }
  };

  return { startAutoRefreshMessages, stopAutoRefreshMessages };
};
