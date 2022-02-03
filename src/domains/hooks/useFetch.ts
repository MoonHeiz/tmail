import { deleteRequest, getRequest, postRequest } from '../../utils/helpers';
import { API } from '../constants';
import { IIntermediateAccount, IValidateAccount } from '../interfaces/IAccount';
import { IDomain } from '../interfaces/IDomain';

export const useFetch = () => {
  const getDomains = (page: number = 1) => {
    return getRequest<IDomain[]>(`${API}/domains?page=${page}`);
  };

  const login = (address: string, password: string) => {
    return postRequest<IValidateAccount>(`${API}/token`, { address, password });
  };

  const register = (address: string, password: string) => {
    return postRequest<IIntermediateAccount>(`${API}/accounts`, { address, password });
  };

  // --------

  const me = (token: string) => {
    return getRequest(`${API}/me`, token);
  };

  const deleteMe = (id: string, token: string) => {
    return deleteRequest(`${API}/accounts`, id, token);
  };

  const getMessages = (token: string) => {
    return getRequest(`${API}/messages`, token);
  };

  const getMessage = (messageId: string, token: string) => {
    return getRequest(`${API}/messages/${messageId}`, token);
  };

  const deleteMessage = (messageId: string, token: string) => {
    return deleteRequest(`${API}/messages`, messageId, token);
  };

  return { register, login, me, deleteMe, getDomains, getMessages, getMessage, deleteMessage };
};
