export interface IMessage {
  id: string;
  accountId: string;
  createdAt: string;
  updatedAt: string;
  downloadUrl: string;
  from: IAddresser;
  hasAttachments: boolean;
  intro: string;
  isDeleted: boolean;
  msgid: string;
  seen: boolean;
  size: number;
  subject: string;
  to: IAddresser[];
}

interface IAddresser {
  address: string;
  name: string;
}
