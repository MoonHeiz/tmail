import { IAccount } from './IAccount';
import { IDomain } from './IDomain';
import { IMessagePreview } from './IMessage';
import { IModal } from './IModal';

export interface IStorage {
  loading: boolean;
  account: IAccount | null;
  modal: IModal | null;
  messages: IMessagePreview[];
  domains: IDomain[];
}
