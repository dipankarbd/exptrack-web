import React, { FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

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

export interface RegisterFormProps {
  disableRegister?: boolean;
  error?: string;
  onSubmit: ({
    email,
    firstName,
    lastName,
    password,
  }: {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
  }) => void;
  className?: string;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({
  disableRegister,
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
    const firstName = formData.get('firstName')?.toString() ?? '';
    const lastName = formData.get('lastName')?.toString() ?? '';
    const password = formData.get('password')?.toString() ?? '';

    if (
      email === '' ||
      password === '' ||
      firstName === '' ||
      lastName === ''
    ) {
      setErrorMessage('Invalid entry');
      return;
    }

    onSubmit({ email, firstName, lastName, password });
  };

  return (
    <Form onSubmit={handleSubmit} className={className}>
      <FormTextField label="Email" name="email" placeholder="enter email" />
      <FormTextField
        label="First Name"
        name="firstName"
        placeholder="enter first nam"
      />
      <FormTextField
        label="Last Name"
        name="lastName"
        placeholder="enter last name"
      />
      <FormTextField
        label="Password"
        name="password"
        placeholder="enter password"
        secured={true}
      />
      {errorMessage && <StyledErrorText text={errorMessage} />}
      <StyledSubmitButton value="Register" disabled={disableRegister} />
    </Form>
  );
};
