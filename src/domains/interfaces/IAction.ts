import { ActionType } from '../store/actionType';

export interface IAction<T = never> {
  type: ActionType;
  payload?: T;
}
