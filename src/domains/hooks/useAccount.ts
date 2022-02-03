import { useFetch } from './useFetch';
import { useAppDispatch } from './useRedux';
import { IAccount, IAuthAccount } from '../interfaces/IAccount';
import { clearAccount, setAccount } from '../store/action';
import { generateHash } from '../../utils/helpers';
import { loadFromStorage, saveToLocalStorage } from '../../utils/localStorage';
import { LOCAL_STORAGE_ACCOUNT_KEY } from '../constants';

export const useAccount = () => {
  const dispatch = useAppDispatch();
  const { login, getDomains, register } = useFetch();

  const validate = async (account: IAuthAccount): Promise<IAccount | null> => {
    const response = await login(account.address, account.password);
    if (response.data) {
      return { ...account, token: response.data.token, id: response.data.id };
    }

    return null;
  };

  const refreshAccountFromCache = async () => {
    const cachedAccount = loadFromStorage<IAccount>(LOCAL_STORAGE_ACCOUNT_KEY);
    if (cachedAccount) {
      const validated = await validate(cachedAccount);
      if (validated) {
        dispatch(setAccount(validated));
        return validated;
      }
    }
    return null;
  };

  const customRegister = async (address: string, password: string) => {
    const customRegisterResponse = await register(address, password);
    if (customRegisterResponse.data) {
      const validated = await validate({ ...customRegisterResponse.data, address, password });
      if (validated) {
        saveToLocalStorage<IAccount>(LOCAL_STORAGE_ACCOUNT_KEY, validated);
        dispatch(setAccount(validated));
        return validated;
      }
    }
    return null;
  };

  const fastRegister = async () => {
    const domainsResponse = await getDomains();
    if (domainsResponse.data) {
      const genAddress = generateHash(5);
      const genPassword = generateHash(8);
      const randomDomain = domainsResponse.data[Math.floor(Math.random() * domainsResponse.data.length)].domain;
      const account = await customRegister(`${genAddress}@${randomDomain}`, genPassword);
      if (account) {
        return account;
      }
    }
    return null;
  };

  const exit = () => {
    dispatch(clearAccount());
  };

  return { refreshAccountFromCache, fastRegister, exit };
};
