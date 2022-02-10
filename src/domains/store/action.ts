import { IAccount } from '../interfaces/IAccount';
import { IAction } from '../interfaces/IAction';
import { IMessage } from '../interfaces/IMessage';
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

export const setModal = (content: null | string | JSX.Element) => {
  return {
    type: ActionType.changeModal,
    payload: content,
  };
};

export const setMessages = (messages: IMessage[]) => {
  return {
    type: ActionType.refreshMessages,
    payload: messages,
  };
};
