import { AVATARS_API } from '../../constants';
import { IMessagePreview } from '../../interfaces/IMessage';
import * as S from './StyledMessagePreview';

interface IMessagePreviewProps {
  messageInfo: IMessagePreview;
}

export const MessagePreview: React.VFC<IMessagePreviewProps> = ({ messageInfo }) => {
  return (
    <S.LinkMessage key={messageInfo.id} to={`/message/${messageInfo.id}`}>
      <S.SenderImage src={`${AVATARS_API}/initials/${messageInfo.from.address}.svg`} alt="sender" />
      <S.MailInfo>
        <S.SenderInfo>
          <S.Name>{messageInfo.from.name}</S.Name>
          <S.Address>{messageInfo.from.address}</S.Address>
        </S.SenderInfo>
        <S.MailContentPreview>
          <S.Subject>{messageInfo.subject}</S.Subject>
          <S.Intro>{messageInfo.intro}</S.Intro>
        </S.MailContentPreview>
      </S.MailInfo>
      <S.RightArrow />
    </S.LinkMessage>
  );
};
