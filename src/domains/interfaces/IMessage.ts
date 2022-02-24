export interface IMessagePreview {
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

export type IMessage = Omit<IMessagePreview, 'intro'> & IMessageBody;

interface IMessageBody {
  attachments: [];
  bcc: [];
  cc: [];
  flagged: boolean;
  html: string[];
  retention: boolean;
  retentionDate: string;
  text: string;
  verifications: [];
}

interface IAddresser {
  address: string;
  name: string;
}
