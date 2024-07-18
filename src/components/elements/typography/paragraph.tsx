import styled from 'styled-components';

import { Color } from '../color';

const ParaDefault = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 1.4rem;
  line-height: 2.2rem;
  color: ${Color.Gray100};
`;

const ParaShort = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 1.4rem;
  line-height: 2rem;
  color: ${Color.Gray100};
`;

const ParaLong = styled.p`
  font-family: 'Barlow', sans-serif;
  font-size: 1.6rem;
  line-height: 2.4;
  color: ${Color.Gray100};
`;

export interface ParagraphProps {
  text: string;
  variant?: 'default' | 'short' | 'long';
}

export const Paragraph: React.FC<ParagraphProps> = ({
  text,
  variant = 'default',
}) => {
  if (variant === 'short') {
    return <ParaShort>{text}</ParaShort>;
  } else if (variant == 'long') {
    return <ParaLong>{text}</ParaLong>;
  }

  return <ParaDefault>{text}</ParaDefault>;
};
