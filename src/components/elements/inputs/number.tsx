import styled from 'styled-components';

import { Color } from '../color';

const Input = styled.input<{ $hasError?: boolean }>`
  font-family: 'Barlow', sans-serif;
  width: 100%;
  border: 0.2rem solid
    ${(props) => (props.$hasError ? Color.Red60 : Color.Gray50)};
  padding: 1rem 1.6rem;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  box-sizing: border-box;
  text-align: left;
  outline: 0;
  color: ${Color.Gray100};

  &:focus {
    border: 0.2rem solid
      ${(props) => (props.$hasError ? Color.Red60 : Color.Blue50)};
  }

  &:disabled {
    background-color: ${Color.Gray30};
    color: ${Color.Gray50};
  }
`;

export interface NumberTextInputProps {
  name: string;
  value?: number;
  disabled?: boolean;
}

export const NumberTextInput: React.FC<NumberTextInputProps> = ({
  name,
  value = 0,
  disabled = false,
}) => {
  return (
    <Input
      type="number"
      name={name}
      disabled={disabled}
      defaultValue={value}
      step=".1"
    />
  );
};
