import { IAction } from '../interfaces/IAction';
import { IStorage } from '../interfaces/IStorage';
import { ActionType } from './actionType';

const initialState: IStorage = {
  loading: true,
  account: null,
};

export const reducer = (state = initialState, action: IAction<any>) => {
  switch (action.type) {
    case ActionType.loading:
      return { ...state, loading: action.payload };
    case ActionType.changeAccount:
      return { ...state, account: action.payload };
    case ActionType.clearAccount:
      return { ...state, account: null };
    default:
      return state;
  }
};
