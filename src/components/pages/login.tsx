import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Heading } from '../elements/typography/heading';
import { LoginContainer } from '../layouts/login-container';
import { LoginForm } from '../modules/login-form';
import { DefaultLink } from '../elements/links/default-link';

import { authenticate } from '../../api';

const StyledHeading = styled(Heading)`
  margin-bottom: 3rem;
`;

interface LoginPageProps {
  redirectPath: string;
}

export const LoginPage: React.FC<LoginPageProps> = ({ redirectPath }) => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const navigate = useNavigate();

  const handleSubmit = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    try {
      const resp = await authenticate(email, password);
      if (resp.data.token) {
        const token = resp.data.token.replace('Bearer ', '');
        localStorage.setItem('auth-token', token);
        navigate(redirectPath);
      }
    } catch (err: unknown) {
      /* eslint-disable @typescript-eslint/no-explicit-any */
      const error = err as any;
      const msg = error.response?.data.error || error.message;
      setErrorMessage(msg);
    }
  };

  return (
    <LoginContainer>
      <StyledHeading text="Login Here" variant="large" />
      <LoginForm onSubmit={handleSubmit} error={errorMessage} />
      <DefaultLink to="/register" title="Register" />
    </LoginContainer>
  );
};
