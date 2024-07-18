import styled from 'styled-components';

import { Color } from '../color';

const Container = styled.input`
  font-family: 'Barlow', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  line-height: 2.2rem;
  height: 4.8rem;
  padding-left: 3.2rem;
  padding-right: 3.2rem;
  border: none;
  text-decoration: none;
  text-align: center;
  display: inline-block;
  cursor: pointer;
  background-color: ${Color.Blue60};
  color: ${Color.White};
  &:hover {
    background-color: ${Color.Blue70};
  }
  &:active {
    background-color: ${Color.Blue80};
  }
  &:disabled {
    cursor: default;
    background-color: ${Color.Gray30};
    color: ${Color.Gray50};
  }
`;

export interface SubmitButtonProps {
  value: string;
  disabled?: boolean;
  className?: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({
  value,
  disabled = false,
  className,
}) => {
  return (
    <Container
      type="submit"
      disabled={disabled}
      value={value}
      className={className}
    />
  );
};
