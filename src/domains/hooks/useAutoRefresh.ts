import { useEffect, useRef } from 'react';
import { MESSAGES_REFRESH_DELAY, TTF_MESSAGES_REFRESH_DELAY } from '../constants';
import { useAccount } from './useAccount';

export const useAutoRefresh = () => {
  const { refreshMessages } = useAccount();
  const id = useRef<NodeJS.Timeout>();

  useEffect(() => {
    return stopAutoRefreshMessages;
  }, []);

  const tick = () => {
    refreshMessages();
    id.current = setTimeout(() => tick(), MESSAGES_REFRESH_DELAY);
  };

  const startAutoRefreshMessages = () => {
    stopAutoRefreshMessages();
    setTimeout(() => refreshMessages(), TTF_MESSAGES_REFRESH_DELAY);
    id.current = setTimeout(() => tick(), MESSAGES_REFRESH_DELAY);
  };

  const stopAutoRefreshMessages = () => {
    if (id.current) {
      clearTimeout(id.current);
    }
  };

  return { startAutoRefreshMessages, stopAutoRefreshMessages };
};
