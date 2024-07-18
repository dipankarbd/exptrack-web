import styled from 'styled-components';

const Span = styled.span<{ $color?: string }>`
  font-family: 'Barlow', sans-serif;
  font-size: 1.2rem;
  line-height: 1.6rem;
  color: ${(props) => props.$color || '#000'};
`;

export interface CaptionProps {
  text: string;
  color?: string;
}

export const Caption: React.FC<CaptionProps> = ({ text, color }) => {
  return <Span $color={color}>{text}</Span>;
};
