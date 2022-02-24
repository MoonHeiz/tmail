import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  display: block;
  color: #fff;
`;

export const Field = styled.input`
  width: 100%;
  height: 30px;
  border: 0;
  text-align: center;
  border-radius: 5px;
  color: #0e0e0e;
`;

export const Block = styled.div``;

export const Submit = styled.button.attrs({ type: 'submit' })`
  height: 40px;
  border-radius: 7px;
  background-color: #5865f2;
  color: #fff;
`;
