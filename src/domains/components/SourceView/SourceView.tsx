import { Back } from '../Back/Back';
import * as S from './StyledSourceView';

interface ISourceViewProps {
  sourceId?: string;
  source?: string | null;
}

export const SourceView: React.VFC<ISourceViewProps> = ({ sourceId, source }) => {
  return (
    <>
      <Back to={`/message/${sourceId ? sourceId : ''}`} />
      <S.BasicContent>
        <S.Source>Source</S.Source>
      </S.BasicContent>
      <S.SourceContent>{source}</S.SourceContent>
    </>
  );
};
