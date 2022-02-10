import * as S from './StyledEmptyMessages';
import emailBigIcon from '../../../assets/email-big.svg';

export const EmptyMessages = () => {
  return (
    <S.EmptyMessagesContainer>
      <S.BigEmail alt="email big" src={emailBigIcon} />
      <S.EmptyMessagesText>
        Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure.
        Temp Mail provides temporary, secure, anonymous, free, disposable email address.
      </S.EmptyMessagesText>
    </S.EmptyMessagesContainer>
  );
};
