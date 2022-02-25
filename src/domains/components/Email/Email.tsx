import { useState } from 'react';
import { COPY_RETOGGLE_DELAY } from '../../constants';
import { useAccount } from '../../hooks/useAccount';
import * as S from './StyledEmail';

export const Email: React.VFC = () => {
  const { account } = useAccount();
  const [showCopyIcon, setShowCopyIcon] = useState(false);

  const copyEmailHandler = () => {
    reToggleCopyIcon();
    navigator.clipboard.writeText(account!.address);
  };

  const reToggleCopyIcon = () => {
    if (!showCopyIcon) {
      setShowCopyIcon(true);
      setTimeout(() => setShowCopyIcon(false), COPY_RETOGGLE_DELAY);
    }
  };

  return (
    <S.Email onClick={copyEmailHandler} role="button">
      {!showCopyIcon && <S.EmailIcon />}
      {showCopyIcon && <S.CopyIcon />}
      <S.EmailField
        defaultValue={account!.address}
        title="Your temporary Email address, click to copy to clipboard!"
      ></S.EmailField>
    </S.Email>
  );
};
