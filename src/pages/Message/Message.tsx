/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AVATARS_API, DAYS_DECLENSIONS, DECLENSION_CASES } from '../../domains/constants';
import { useFetch } from '../../domains/hooks/useFetch';
import { useAppSelector } from '../../domains/hooks/useRedux';
import { IMessage } from '../../domains/interfaces/IMessage';
import { CSC } from '../../styles/common';
import * as S from './StyledMessage';

export const Message: React.VFC = () => {
  const { messageId } = useParams();
  const { getMessage } = useFetch();
  const [message, setMessage] = useState<IMessage>();
  const account = useAppSelector(({ account }) => account);

  useEffect(() => {
    (async () => {
      if (messageId && account) {
        const messageRequest = await getMessage(messageId, account.token);
        if (messageRequest.data) {
          setMessage(messageRequest.data);
        }
      }
    })();
  }, [account]);

  const declension = (value: number): string => {
    if (value % 100 > 4 && value % 100 < 20) {
      return DAYS_DECLENSIONS[2];
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
    <CSC.AppContainer>
      {message && (
        <>
          <S.BackContainer>
            <S.LinkBack to="/">
              <S.LeftArrow />
              Back
            </S.LinkBack>
          </S.BackContainer>
          <S.BasicContent>
            <S.SubjectPreview>{message.subject}</S.SubjectPreview>
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
                <S.SenderImage src={`${AVATARS_API}/initials/${message.from.address}.svg`} alt="from image" />
                <S.Block>
                  <S.Name>{message.from.name}</S.Name>
                  <S.Subject>{message.from.address}</S.Subject>
                </S.Block>
              </S.SenderInfo>
              <S.Ago>{declension(getDayDifference(message.createdAt))}</S.Ago>
            </S.Head>
            <S.Body srcDoc={message.html[0]}></S.Body>
          </S.MessageContent>
        </>
      )}
    </CSC.AppContainer>
  );
};
