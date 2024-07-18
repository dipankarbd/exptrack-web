import styled from 'styled-components';

import { Color } from '../elements/color';

const Container = styled.main`
  width: 60rem;
  background-color: ${Color.Gray10};
  min-height: 1vh;
  margin: 10rem auto;
  padding: 2rem;
`;

export interface RegisterContainerProps {
  children?: React.ReactNode;
}

export const RegisterContainer: React.FC<RegisterContainerProps> = ({
  children,
}) => {
  return <Container>{children}</Container>;
};
