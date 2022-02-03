export interface IAuthAccount {
  address: string;
  password: string;
}

export interface IValidateAccount {
  token: string;
  id: string;
}

export interface IAccount extends IAuthAccount, IValidateAccount {
  createdAt?: string;
  isDeleted?: boolean;
  isDisabled?: boolean;
  quota?: number;
  updatedAt?: string;
  used?: number;
}

export interface IIntermediateAccount {
  address: string;
  createdAt: string;
  id: string;
  isDeleted: boolean;
  isDisabled: boolean;
  quota: number;
  updatedAt: string;
  used: number;
}
