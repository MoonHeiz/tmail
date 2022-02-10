import { CSC } from '../../../styles/common';
import * as S from './StyledMessages';
import { useAppSelector } from '../../hooks/useRedux';
import { EmptyMessages } from '../EmptyMessages/EmptyMessages';
import { AVATARS_API } from '../../constants';

export const Messages = () => {
  const messages = useAppSelector(({ messages }) => messages);
  const hasMessages = messages.length > 0;

  return (
    <S.Messages>
      <CSC.AppContainer>
        {!hasMessages && <EmptyMessages />}
        {hasMessages && (
          <>
            <S.Inbox>Inbox</S.Inbox>
            {messages.map((mes) => (
              <S.Message key={mes.id} to={mes.id}>
                <S.SenderImage src={`${AVATARS_API}/initials/${mes.from.address}.svg`} alt="from image" />
                <S.MailInfo>
                  <S.SenderInfo>
                    <S.Name>{mes.from.name}</S.Name>
                    <S.Address>{mes.from.address}</S.Address>
                  </S.SenderInfo>
                  <S.MailContentPreview>
                    <S.Subject>{mes.subject}</S.Subject>
                    <S.Intro>{mes.intro}</S.Intro>
                  </S.MailContentPreview>
                </S.MailInfo>
                <S.RightArrow />
              </S.Message>
            ))}
          </>
        )}
      </CSC.AppContainer>
    </S.Messages>
  );
};
