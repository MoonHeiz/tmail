import { deleteRequest, getRequest, postRequest } from '../../utils/requests';
import { API } from '../constants';
import { IIntermediateAccount, IValidateAccount } from '../interfaces/IAccount';
import { IDomain } from '../interfaces/IDomain';
import { IMessagePreview, IMessage } from '../interfaces/IMessage';
import { ISource } from '../interfaces/ISource';

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

  const getMessages = (token: string) => {
    return getRequest<IMessagePreview[]>(`${API}/messages`, token);
  };

  const getMessage = (messageId: string, token: string) => {
    return getRequest<IMessage>(`${API}/messages/${messageId}`, token);
  };

  const deleteMe = (id: string, token: string) => {
    return deleteRequest(`${API}/accounts`, id, token);
  };

  const downloadMessage = (downloadURL: string, token: string) => {
    return getRequest<string>(`${API}${downloadURL}`, token);
  };

  const getSource = (messageId: string, token: string) => {
    return getRequest<ISource>(`${API}/sources/${messageId}`, token);
  };

  const deleteMessage = (messageId: string, token: string) => {
    return deleteRequest(`${API}/messages`, messageId, token);
  };

  return { register, login, deleteMe, getDomains, getMessages, getMessage, downloadMessage, getSource, deleteMessage };
};
