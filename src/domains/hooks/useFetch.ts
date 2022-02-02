import { deleteRequest, getRequest, postRequest } from '../../utils/helpers';
import { API } from '../constants';

export const useFetch = () => {
  const register = (address: string, password: string) => {
    return postRequest(`${API}/accounts`, { address, password });
  };

  const login = (address: string, password: string) => {
    return postRequest(`${API}/token`, { address, password });
  };

  const me = (token: string) => {
    return getRequest(`${API}/me`, token);
  };

  const deleteMe = (id: string, token: string) => {
    return deleteRequest(`${API}/accounts`, id, token);
  };

  const getDomains = (page: number = 1) => {
    return getRequest(`${API}/domains?page=${page}`);
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
