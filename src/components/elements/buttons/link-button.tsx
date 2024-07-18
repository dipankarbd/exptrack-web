import styled from 'styled-components';

import { Color } from '../color';

const Container = styled.button`
  font-family: 'Barlow', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.2rem;
  border: none;
  text-decoration: none;
  cursor: pointer;
  display: inline-block;
  background-color: transparent;
  color: ${Color.Blue60};
  &:hover {
    color: ${Color.Blue70};
  }
  &:active {
    color: ${Color.Blue80};
  }
  &:disabled {
    cursor: default;
    color: ${Color.Gray30};
  }
`;

export interface LinkButtonProps {
  title: string;
  disabled?: boolean;
  onClick: () => void;
  className?: string;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  title,
  disabled = false,
  onClick,
  className,
}) => {
  return (
    <Container disabled={disabled} onClick={onClick} className={className}>
      {title}
    </Container>
  );
};
