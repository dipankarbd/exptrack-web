import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Heading } from '../elements/typography/heading';
import { DefaultLink } from '../elements/links/default-link';
import { RegisterContainer } from '../layouts/register-container';
import { RegisterForm } from '../modules/register-form';
import { register } from '../../api';

const StyledHeading = styled(Heading)`
  margin-bottom: 3rem;
`;

export const RegisterPage = () => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const navigate = useNavigate();

  const handleSubmit = async ({
    email,
    firstName,
    lastName,
    password,
  }: {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
  }) => {
    try {
      const resp = await register(email, firstName, lastName, password);
      console.log(resp.data);
      if (resp.data) {
        navigate('/login');
      }
    } catch (err: unknown) {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      const error = err as any;
      const msg = error.response?.data.error || error.message;
      setErrorMessage(msg);
    }
  };

  return (
    <RegisterContainer>
      <StyledHeading text="Register Yourself" variant="large" />
      <RegisterForm onSubmit={handleSubmit} error={errorMessage} />
      <DefaultLink to="/login" title="Login" />
    </RegisterContainer>
  );
};
