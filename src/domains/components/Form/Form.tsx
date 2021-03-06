import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IDomain } from '../../interfaces/IDomain';
import { IForm } from '../../interfaces/IForm';
import * as S from './StyledForm';

interface IFormProps {
  submit: (sub: IForm) => void;
  domains?: IDomain[];
  submitValue: string;
}

export const Form: React.VFC<IFormProps> = ({ submit, domains, submitValue }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedDomain, setSelectedDomain] = useState(domains && domains[0].domain);
  const { t } = useTranslation();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit({ e, email, password, selectedDomain });
  };

  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDomain(e.target.value);
  };

  const hasDomains = domains && domains.length > 0;
  return (
    <S.Form onSubmit={submitHandler}>
      <S.Block>
        <S.Label htmlFor="email">{t('emailField')}</S.Label>
        <S.EmailContainer>
          <S.Field
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('emailField')}
            minLength={3}
            required
            $partRounded={hasDomains}
          />
          {hasDomains && (
            <S.Select value={selectedDomain} onChange={selectHandler}>
              {domains.map(({ domain, id }) => (
                <S.Option key={id}>@{domain}</S.Option>
              ))}
            </S.Select>
          )}
        </S.EmailContainer>
      </S.Block>
      <S.Block>
        <S.Label htmlFor="password">{t('passwordField')}</S.Label>
        <S.Field
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={t('passwordField')}
          minLength={3}
          required
        />
      </S.Block>
      <S.Submit>{submitValue}</S.Submit>
    </S.Form>
  );
};
