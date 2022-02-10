import { useAppSelector } from '../../hooks/useRedux';
import * as S from './StyledEmail';

export const Email: React.VFC = () => {
  const account = useAppSelector(({ account }) => account);

  const copyEmailHandler = () => {
    navigator.clipboard.writeText(account!.address);
  };

  return (
    <S.Email onClick={copyEmailHandler} role="button">
      <S.EmailField
        defaultValue={account!.address}
        title="Your temporary Email address, click to copy to clipboard!"
      ></S.EmailField>
    </S.Email>
  );
};