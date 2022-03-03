import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { COPY_RETOGGLE_DELAY } from '../../constants';
import { useAccount } from '../../hooks/useAccount';
import * as S from './StyledEmail';

export const Email: React.VFC = () => {
  const { account } = useAccount();
  const [showCopyIcon, setShowCopyIcon] = useState(false);
  const { t } = useTranslation();

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
        type="email"
        title={t('emailClipboard')}
        readOnly={true}
      ></S.EmailField>
    </S.Email>
  );
};
