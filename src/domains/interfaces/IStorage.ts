import { IAccount } from './IAccount';

export interface IStorage {
  loader: boolean;
  account: IAccount | null;
}
