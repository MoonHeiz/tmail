import { IAccount } from './IAccount';

export interface IStorage {
  loading: boolean;
  account: IAccount | null;
}
