import { AVATARS_API, DAYS_DECLENSIONS, DECLENSION_CASES } from '../../constants';
import { IMessage } from '../../interfaces/IMessage';
import * as S from './StyledMessageView';

interface IMessageViewProps {
  message?: IMessage;
}

export const MessageView: React.VFC<IMessageViewProps> = ({ message }) => {
  const declension = (value: number): string => {
    if (value % 100 > 4 && value % 100 < 20) {
      return `${value} ${DAYS_DECLENSIONS[2]} ago`;
    }

    return `${value} ${DAYS_DECLENSIONS[DECLENSION_CASES[value % 10 < 5 ? value % 10 : 5]]} ago`;
  };

  const getDayDifference = (jsonedDate: string) => {
    const createdAtDate = new Date(jsonedDate);
    const currentDate = new Date();
    const timeDifference = Math.abs(currentDate.getTime() - createdAtDate.getTime());
    const daysAgo = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return daysAgo;
  };

  return (
    <>
      <S.BackContainer>
        <S.LinkBack to="/">
          <S.LeftArrow />
          Back
        </S.LinkBack>
      </S.BackContainer>
      <S.BasicContent>
        <S.SubjectPreview>{message!.subject}</S.SubjectPreview>
        <S.Controls>
          <S.ControlButton>Download</S.ControlButton>
          <S.ControlButton>Source</S.ControlButton>
          <S.ControlButton>Print</S.ControlButton>
          <S.ControlButton>Delete</S.ControlButton>
        </S.Controls>
      </S.BasicContent>
      <S.MessageContent>
        <S.Head>
          <S.SenderInfo>
            <S.SenderImage src={`${AVATARS_API}/initials/${message!.from.address}.svg`} alt="from image" />
            <S.Block>
              <S.Name>{message!.from.name}</S.Name>
              <S.Subject>{message!.from.address}</S.Subject>
            </S.Block>
          </S.SenderInfo>
          <S.Ago>{declension(getDayDifference(message!.createdAt))}</S.Ago>
        </S.Head>
        <S.Body srcDoc={message!.html[0]}></S.Body>
      </S.MessageContent>
    </>
  );
};
