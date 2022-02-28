export interface IForm {
  e: React.FormEvent<HTMLFormElement>;
  email: string;
  password: string;
  selectedDomain?: string;
}
