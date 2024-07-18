import styled from 'styled-components';

import { Heading } from '../elements/typography/heading';

const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding: 0.4rem;
`;

const Caption = styled(Heading)`
  width: 8rem;
`;

export interface CaptionedTextProps {
  caption: string;
  text: string;
  className?: string;
}

export const CaptionedText: React.FC<CaptionedTextProps> = ({
  caption,
  text,
  className,
}) => {
  return (
    <Container className={className}>
      <Caption text={caption} variant="midum" />
      <Heading text={text} variant="small" />
    </Container>
  );
};
