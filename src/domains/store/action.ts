import { IAccount } from '../interfaces/IAccount';
import { IAction } from '../interfaces/IAction';
import { ActionType } from './actionType';

export const setLoader = (loader: boolean): IAction<boolean> => ({ type: ActionType.loader, payload: loader });

export const setAccount = (account: IAccount): IAction<IAccount> => ({
  type: ActionType.changeAccount,
  payload: account,
});

export const clearAccount = (): IAction => ({
  type: ActionType.clearAccount,
});
