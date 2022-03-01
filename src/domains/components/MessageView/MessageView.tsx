import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { AVATARS_API, DAYS_DECLENSIONS, DECLENSION_CASES, MESSAGE_DOWNLOAD_EXT } from '../../constants';
import { useFetch } from '../../hooks/useFetch';
import { IAccount } from '../../interfaces/IAccount';
import { IMessage } from '../../interfaces/IMessage';
import { Back } from '../Back/Back';
import * as S from './StyledMessageView';

interface IMessageViewProps {
  message: IMessage;
  account: IAccount | null;
}

export const MessageView: React.VFC<IMessageViewProps> = ({ message, account }) => {
  const bodyRef = useRef<HTMLIFrameElement>(null);
  const { downloadMessage, deleteMessage } = useFetch();
  const navigate = useNavigate();
  const { t } = useTranslation();

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

  const printHandler = () => {
    const iframe = bodyRef.current;
    if (iframe) {
      const iframeWindow = iframe.contentWindow;
      iframe.focus();
      iframeWindow?.print();
    }
  };

  const downloadHandler = async () => {
    const downloadResponse = await downloadMessage(message.downloadUrl, account!.token);
    if (downloadResponse.data) {
      const url = window.URL.createObjectURL(new Blob([downloadResponse.data], { type: 'text/plain' }));
      let a = document.createElement('a');
      a.href = url;
      a.download = `${message.id}${MESSAGE_DOWNLOAD_EXT}`;
      a.click();
    }
  };

  const deleteMessageHandler = async () => {
    await deleteMessage(message.id, account!.token);
    navigate('/');
  };

  return (
    <>
      <Back to="/" />
      <S.BasicContent>
        <S.SubjectPreview>{message.subject}</S.SubjectPreview>
        <S.Controls>
          <S.ControlButton onClick={downloadHandler}>{t('downloadBtn')}</S.ControlButton>
          <S.ControlLink to={`/source/${message.id}`}>{t('sourceLink')}</S.ControlLink>
          <S.ControlButton onClick={printHandler}>{t('printBtn')}</S.ControlButton>
          <S.ControlButton onClick={deleteMessageHandler}>{t('deleteBtn')}</S.ControlButton>
        </S.Controls>
      </S.BasicContent>
      <S.MessageContent>
        <S.Head>
          <S.SenderInfo>
            <S.SenderImage src={`${AVATARS_API}/initials/${message.from.address}.svg`} alt="from image" />
            <S.Block>
              <S.Name>{message.from.name}</S.Name>
              <S.Subject>{message.from.address}</S.Subject>
            </S.Block>
          </S.SenderInfo>
          <S.Ago>{declension(getDayDifference(message.createdAt))}</S.Ago>
        </S.Head>
        <S.Body ref={bodyRef} srcDoc={message.html[0]}></S.Body>
      </S.MessageContent>
    </>
  );
};
