import * as S from './StyledEmptyMessages';
import emailBigIcon from '../../../assets/email-big.svg';
import { useTranslation } from 'react-i18next';

export const EmptyMessages = () => {
  const { t } = useTranslation();

  return (
    <S.EmptyMessagesContainer>
      <S.BigEmail alt="big evil email" src={emailBigIcon} />
      <S.EmptyMessagesText>{t('emptyMessages')}</S.EmptyMessagesText>
    </S.EmptyMessagesContainer>
  );
};
