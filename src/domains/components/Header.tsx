import { useFetch } from '../hooks/useFetch';
import { useAppDispatch } from '../hooks/useRedux';
import { setLoaded } from '../store/action';

export const Header = () => {
  const dispatch = useAppDispatch();
  const { register, login } = useFetch();

  const handle = () => {
    // dispatch(setLoaded());
    // register('nasbucldy3rdxc@sinaite.net', 'ksksiksi');
    // login('nasbucldyrdxc@sinaite.net', 'ksksiksi');
  };
  return <button onClick={handle}>F</button>;
};
