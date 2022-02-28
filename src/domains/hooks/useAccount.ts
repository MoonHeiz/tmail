import { useFetch } from './useFetch';
import { useAppDispatch, useAppSelector } from './useRedux';
import { IAccount, IAuthAccount } from '../interfaces/IAccount';
import { clearAccount, setAccount, setDomains, setLoader, setMessages } from '../store/action';
import { generateHash } from '../../utils/helpers';
import { clearLocalStorage, loadFromStorage, saveToLocalStorage } from '../../utils/localStorage';
import { LOCAL_STORAGE_ACCOUNT_KEY } from '../constants';

export const useAccount = () => {
  const dispatch = useAppDispatch();
  const { login, getDomains, register, getMessages, deleteMe } = useFetch();
  const account = useAppSelector(({ account }) => account);
  const domains = useAppSelector(({ domains }) => domains);

  const validate = async (account: IAuthAccount): Promise<IAccount | null> => {
    const response = await login(account.address, account.password);
    if (response.data && response.status === 200) {
      return { ...account, token: response.data.token, id: response.data.id };
    }

    return null;
  };

  const customLogin = async (account: IAuthAccount) => {
    dispatch(setLoader(true));
    const validated = await validate(account);
    if (validated) {
      saveToLocalStorage<IAccount>(LOCAL_STORAGE_ACCOUNT_KEY, validated);
      dispatch(setAccount(validated));
    }
    dispatch(setLoader(false));
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

  const getDomainsFromStorage = async () => {
    if (domains.length <= 0) {
      const domainsResponse = await getDomains();
      if (domainsResponse.data) {
        dispatch(setDomains(domainsResponse.data));
        return domainsResponse.data;
      }
      return [];
    } else {
      return domains;
    }
  };

  const fastRegister = async () => {
    const availableDomains = await getDomainsFromStorage();
    if (availableDomains.length > 0) {
      const genAddress = generateHash(5);
      const genPassword = generateHash(8);
      const randomDomain = availableDomains[Math.floor(Math.random() * availableDomains.length)].domain;
      const registeredAccount = await customRegister(`${genAddress}@${randomDomain}`, genPassword);
      if (registeredAccount) {
        return registeredAccount;
      }
    }
    return null;
  };

  const refreshMessages = async () => {
    if (account) {
      const messagesResponse = await getMessages(account.token);
      if (Array.isArray(messagesResponse.data)) {
        dispatch(setMessages(messagesResponse.data));
        return messagesResponse.data;
      }
    }
    return null;
  };

  const deleteAccount = async () => {
    if (account) {
      dispatch(setLoader(true));
      await deleteMe(account.id, account.token);
      clearLocalStorage(LOCAL_STORAGE_ACCOUNT_KEY);
      dispatch(clearAccount());
    }
  };

  const exit = () => {
    dispatch(setLoader(true));
    clearLocalStorage(LOCAL_STORAGE_ACCOUNT_KEY);
    dispatch(clearAccount());
  };

  return {
    account,
    refreshAccountFromCache,
    fastRegister,
    refreshMessages,
    deleteAccount,
    customLogin,
    getDomainsFromStorage,
    customRegister,
    exit,
  };
};
