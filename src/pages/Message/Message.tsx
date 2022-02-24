/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MessageView } from '../../domains/components/MessageView/MessageView';
import { useAccount } from '../../domains/hooks/useAccount';
import { useFetch } from '../../domains/hooks/useFetch';
import { IMessage } from '../../domains/interfaces/IMessage';
import { CSC } from '../../styles/common';
import * as S from './StyledMessage';

export const Message: React.VFC = () => {
  const { messageId } = useParams();
  const { getMessage } = useFetch();
  const [message, setMessage] = useState<IMessage | null>();
  const { account } = useAccount();

  useEffect(() => {
    (async () => {
      if (messageId && account) {
        const messageRequest = await getMessage(messageId, account.token);
        if (messageRequest.data) {
          setMessage(messageRequest.data);
        } else {
          setMessage(null);
        }
      }
    })();
  }, [account]);

  return <CSC.AppContainer>{message && <MessageView message={message} />}</CSC.AppContainer>;
};
