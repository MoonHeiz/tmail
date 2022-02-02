import { IStorage } from '../interfaces/IStorage';
import { ActionType } from './actionType';

interface IAction {
  type: ActionType;
  payload?: any;
}

const initialState: IStorage = {
  loaded: false,
  account: {},
};

export const reducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ActionType.loaded:
      return { ...state, loaded: true };
    default:
      return state;
  }
};
