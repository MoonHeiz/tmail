import { useEffect } from 'react';
import { useFetch } from './useFetch';
import { useAppDispatch, useAppSelector } from './useRedux';
import { loadFromStorage } from '../../utils/localStorage';
import { IAccount } from '../interfaces/IAccount';

export const useAccount = () => {
  // const dispatch = useAppDispatch();
  // const a = useAppSelector(() =>)
  const {} = useFetch();

  const loadCached = () => {
    const cachedAccount = loadFromStorage<IAccount>('user');

    if (cachedAccount) {
    }
  };
};
