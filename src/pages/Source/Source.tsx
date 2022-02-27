import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { SourceView } from '../../domains/components/SourceView/SourceView';
import { useAccount } from '../../domains/hooks/useAccount';
import { useFetch } from '../../domains/hooks/useFetch';
import { CSC } from '../../styles/common';

export const Source = () => {
  const { sourceId } = useParams();
  const { getSource } = useFetch();
  const [source, setSource] = useState<string | null>();
  const { account } = useAccount();

  useEffect(() => {
    (async () => {
      if (sourceId && account) {
        const sourceRequest = await getSource(sourceId, account.token);
        if (sourceRequest.data) {
          setSource(sourceRequest.data.data);
        } else {
          setSource(null);
        }
      }
    })();
  }, [account]);

  return <CSC.AppContainer>{source && <SourceView source={source} sourceId={sourceId} />}</CSC.AppContainer>;
};
