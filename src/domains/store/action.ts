import { IAccount } from '../interfaces/IAccount';
import { IAction } from '../interfaces/IAction';
import { IDomain } from '../interfaces/IDomain';
import { IMessagePreview } from '../interfaces/IMessage';
import { IModal } from '../interfaces/IModal';
import { ActionType } from './actionType';

export const setLoader = (loading: boolean): IAction<boolean> => {
  return { type: ActionType.loading, payload: loading };
};

export const setAccount = (account: IAccount): IAction<IAccount> => {
  return {
    type: ActionType.changeAccount,
    payload: account,
  };
};

export const clearAccount = (): IAction => {
  return { type: ActionType.clearAccount };
};

export const setModal = (content: IModal | null) => {
  return {
    type: ActionType.changeModal,
    payload: content,
  };
};

export const setMessages = (messages: IMessagePreview[]) => {
  return {
    type: ActionType.refreshMessages,
    payload: messages,
  };
};

export const setDomains = (domains: IDomain[]) => {
  return {
    type: ActionType.changeDomains,
    payload: domains,
  };
};
