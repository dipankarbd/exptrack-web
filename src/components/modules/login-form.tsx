import styled from 'styled-components';
import React, { FormEvent, useEffect, useState } from 'react';

import { FormTextField } from '../compounds/form-text-field';
import { SubmitButton } from '../elements/buttons/submit-button';
import { ErrorText } from '../elements/typography/error';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledSubmitButton = styled(SubmitButton)`
  width: 20rem;
  align-self: flex-end;
`;

const StyledErrorText = styled(ErrorText)`
  padding: 0.4rem 0.4rem 0.4rem 7.2rem;
`;

export interface LoginFormProps {
  disableLogin?: boolean;
  error?: string;
  onSubmit: ({ email, password }: { email: string; password: string }) => void;
  className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({
  disableLogin,
  error,
  onSubmit,
  className,
}) => {
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setErrorMessage(error ?? '');
  }, [error]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget as HTMLFormElement);

    const email = formData.get('email')?.toString() ?? '';
    const password = formData.get('password')?.toString() ?? '';

    if (email === '' || password === '') {
      setErrorMessage('Email or password can not be empty');
      return;
    }

    onSubmit({ email, password });
  };

  return (
    <Form onSubmit={handleSubmit} className={className}>
      <FormTextField label="Email" name="email" placeholder="enter email" />
      <FormTextField
        label="Password"
        name="password"
        placeholder="enter password"
        secured={true}
      />
      {errorMessage && <StyledErrorText text={errorMessage} />}
      <StyledSubmitButton value="Login" disabled={disableLogin} />
    </Form>
  );
};
