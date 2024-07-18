import styled from 'styled-components';

import { Color } from '../color';

const Container = styled.label<{ $color?: string }>`
  font-family: 'Barlow', sans-serif;
  font-size: 1.2rem;
  line-height: 1.6rem;
  display: block;
  color: ${(props) => props.$color || Color.Gray100};
`;

export interface LabelProps {
  text: string;
  name?: string;
  color?: string;
  className?: string;
}

export const Label: React.FC<LabelProps> = ({
  text,
  color,
  name,
  className,
}) => {
  return (
    <Container htmlFor={name} $color={color} className={className}>
      {text}
    </Container>
  );
};
