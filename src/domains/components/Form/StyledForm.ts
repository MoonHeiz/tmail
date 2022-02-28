import styled from 'styled-components';

interface FieldProps {
  $partRounded?: boolean;
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  display: block;
  color: #fff;
`;

export const Field = styled.input<FieldProps>`
  width: 100%;
  height: 30px;
  border: 0;
  text-align: center;
  border-radius: ${({ $partRounded }) => ($partRounded ? '5px 0 0 5px' : '5px')};
  color: #0e0e0e;
`;

export const Block = styled.div``;

export const Select = styled.select`
  flex: 1;
  border: none;
  border-radius: 0 5px 5px 0px;
`;

export const Option = styled.option`
  color: red;
`;

export const EmailContainer = styled.div`
  display: flex;
`;

export const Submit = styled.button.attrs({ type: 'submit' })`
  height: 40px;
  border-radius: 7px;
  background-color: #5865f2;
  color: #fff;

  &:hover {
    background-color: #6572ff;
  }

  &:active {
    background-color: #3544ed;
  }
`;
