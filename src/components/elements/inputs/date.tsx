import styled from 'styled-components';

import { Color } from '../color';

const Input = styled.input`
  font-family: 'Barlow', sans-serif;
  width: 100%;
  border: 0.2rem solid ${Color.Gray50};
  padding: 1rem 1.6rem;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
  box-sizing: border-box;
  text-align: left;
  outline: 0;
  color: ${Color.Gray100};

  &:focus {
    border: 0.2rem solid ${Color.Blue50};
  }

  &:disabled {
    background-color: ${Color.Gray30};
    color: ${Color.Gray50};
  }
`;

export interface DateInputProps {
  name: string;
  value?: string;
  disabled?: boolean;
}

export const DateInput: React.FC<DateInputProps> = ({
  name,
  value,
  disabled = false,
}) => {
  return (
    <Input type="date" name={name} disabled={disabled} defaultValue={value} />
  );
};
