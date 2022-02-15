import { IAccount } from './IAccount';
import { IMessagePreview } from './IMessage';

export interface IStorage {
  loading: boolean;
  account: IAccount | null;
  modalContent: null | JSX.Element | string;
  messages: IMessagePreview[];
}
