import { useParams } from 'react-router-dom';
import { CSC } from '../../styles/common';

export const Source = () => {
  const { sourceId } = useParams();

  return <CSC.AppContainer>{sourceId}</CSC.AppContainer>;
};
