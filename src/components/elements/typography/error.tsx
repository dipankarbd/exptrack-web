import styled from 'styled-components';

import { Color } from '../color';

const Container = styled.span`
  font-family: 'Barlow', sans-serif;
  font-size: 1.2rem;
  line-height: 1.6rem;
  display: block;
  color: ${Color.Red60};
`;

export interface LabelProps {
  text: string;
  className?: string;
}

export const ErrorText: React.FC<LabelProps> = ({ text, className }) => {
  return <Container className={className}>{text}</Container>;
};
