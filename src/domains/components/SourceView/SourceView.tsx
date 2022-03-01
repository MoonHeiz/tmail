import { useTranslation } from 'react-i18next';
import { Back } from '../Back/Back';
import * as S from './StyledSourceView';

interface ISourceViewProps {
  sourceId?: string;
  source?: string | null;
}

export const SourceView: React.VFC<ISourceViewProps> = ({ sourceId, source }) => {
  const { t } = useTranslation();

  return (
    <>
      <Back to={`/message/${sourceId ? sourceId : ''}`} />
      <S.BasicContent>
        <S.Source>{t('source')}</S.Source>
      </S.BasicContent>
      <S.SourceContent>{source}</S.SourceContent>
    </>
  );
};
