import { useAppSelector } from '../../hooks/useRedux';
import * as S from './StyledEmail';

export const Email: React.VFC = () => {
  const account = useAppSelector(({ account }) => account);

  const copyEmailHandler = () => {
    navigator.clipboard.writeText(account!.address);
  };
  return (
    <S.Email
      onClick={copyEmailHandler}
      value={account!.address}
      title="Your temporary Email address, click to copy to clipboard!"
    ></S.Email>
  );
};
