import styled from 'styled-components';

import { Color } from '../elements/color';

const Container = styled.main`
  width: 50rem;
  background-color: ${Color.Gray10};
  min-height: 1vh;
  margin: 10rem auto;
  padding: 2rem;
`;

export interface LoginContainerProps {
  children?: React.ReactNode;
}

export const LoginContainer: React.FC<LoginContainerProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
