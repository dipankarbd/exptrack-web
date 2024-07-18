import styled from 'styled-components';

import { Color } from '../color';

const Input = styled.input<{ $hasError?: boolean }>`
  font-family: 'Barlow', sans-serif;
  width: 99%;
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

const Error = styled.h1`
  font-family: 'Barlow', sans-serif;
  padding-left: 0.2rem;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.8rem;
  color: ${Color.Red60};
`;

const Container = styled.div`
  width: 100%;
`;

export interface DefaultTextInputProps {
  name: string;
  placeholder: string;
  value?: string;
  error?: string;
  disabled?: boolean;
  secured?: boolean;
}

export const DefaultTextInput: React.FC<DefaultTextInputProps> = ({
  name,
  placeholder,
  value,
  error,
  disabled = false,
  secured,
}) => {
  const hasError: boolean = error ? true : false;

  const input = secured ? (
    <Input
      type="password"
      name={name}
      disabled={disabled}
      defaultValue={value}
      placeholder={placeholder}
      $hasError={hasError}
    />
  ) : (
    <Input
      type="text"
      name={name}
      disabled={disabled}
      defaultValue={value}
      placeholder={placeholder}
      $hasError={hasError}
    />
  );

  return (
    <Container>
      {input}
      {error && <Error>{error}</Error>}
    </Container>
  );
};
