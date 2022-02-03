import { IAccount } from '../interfaces/IAccount';
import { IAction } from '../interfaces/IAction';
import { ActionType } from './actionType';

export const setLoader = (loading: boolean): IAction<boolean> => ({ type: ActionType.loading, payload: loading });

export const setAccount = (account: IAccount): IAction<IAccount> => ({
  type: ActionType.changeAccount,
  payload: account,
});

export const clearAccount = (): IAction => ({
  type: ActionType.clearAccount,
});
