import { useTranslation } from 'react-i18next';
import * as S from './StyledBack';

interface IBackProps {
  to: string;
}

export const Back: React.VFC<IBackProps> = ({ to }) => {
  const { t } = useTranslation();

  return (
    <S.BackContainer>
      <S.LinkBack to={to}>
        <S.LeftArrow />
        {t('back')}
      </S.LinkBack>
    </S.BackContainer>
  );
};
