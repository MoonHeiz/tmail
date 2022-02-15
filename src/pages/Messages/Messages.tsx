/* eslint-disable react-hooks/exhaustive-deps */
import * as S from './StyledMessages';
import { useEffect } from 'react';
import { useAutoRefresh } from '../../domains/hooks/useAutoRefresh';
import { useAppSelector } from '../../domains/hooks/useRedux';
import { EmptyMessages } from '../../domains/components/EmptyMessages/EmptyMessages';
import { CSC } from '../../styles/common';
import { MessagePreview } from '../../domains/components/MessagePreview/MessagePreview';

export const Messages = () => {
  const messages = useAppSelector(({ messages }) => messages);
  const account = useAppSelector(({ account }) => account);
  const { startAutoRefreshMessages } = useAutoRefresh();

  useEffect(() => {
    startAutoRefreshMessages(account);
  }, [account]);

  const hasMessages = messages.length > 0;
  return (
    <CSC.AppContainer>
      {!hasMessages && <EmptyMessages />}
      {hasMessages && (
        <>
          <S.Inbox>Inbox</S.Inbox>
          {messages.map((message) => (
            <MessagePreview messageInfo={message} />
          ))}
        </>
      )}
    </CSC.AppContainer>
  );
};
