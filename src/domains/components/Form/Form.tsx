import React, { useState } from 'react';
import * as S from './StyledForm';

interface IFormProps {
  submit: (e: React.FormEvent<HTMLFormElement>, email: string, password: string) => void;
}

export const Form: React.VFC<IFormProps> = ({ submit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit(e, email, password);
  };

  return (
    <S.Form onSubmit={submitHandler}>
      <S.Block>
        <S.Label htmlFor="email">Email</S.Label>
        <S.Field id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="login" />
      </S.Block>
      <S.Block>
        <S.Label htmlFor="password">Password</S.Label>
        <S.Field id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="password" />
      </S.Block>
      <S.Submit>Login</S.Submit>
    </S.Form>
  );
};
