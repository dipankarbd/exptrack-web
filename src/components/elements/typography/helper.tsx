import styled from 'styled-components';

import { Color } from '../color';

const Span = styled.span`
  font-family: 'Barlow', sans-serif;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: ${Color.Gray50};
`;

export interface HelperTextProps {
  text: string;
}

export const HelperText: React.FC<HelperTextProps> = ({ text }) => {
  return <Span>{text}</Span>;
};
