import styled, { css } from 'styled-components';

import { Color } from '../color';

const sharedStyles = css`
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
  display: inline-block;
  cursor: pointer;
`;

const ContainerPrimary = styled.button`
  ${sharedStyles}
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

const ContainerSecondary = styled.button`
  ${sharedStyles}
  background-color: ${Color.Gray80};
  color: ${Color.White};
  &:hover {
    background-color: ${Color.Gray80Hover};
  }
  &:active {
    background-color: ${Color.Gray100};
  }
  &:disabled {
    cursor: default;
    background-color: ${Color.Gray30};
    color: ${Color.Gray50};
  }
`;

const ContainerDanger = styled.button`
  ${sharedStyles}
  background-color: ${Color.Red60};
  color: ${Color.White};
  &:hover {
    background-color: ${Color.Red60Hover};
  }
  &:active {
    background-color: ${Color.Red80};
  }
  &:disabled {
    cursor: default;
    background-color: ${Color.Gray30};
    color: ${Color.Gray50};
  }
`;

const ContainerGhost = styled.button`
  ${sharedStyles}
  color: ${Color.Blue60};
  background-color: transparent;
  &:hover {
    background-color: ${Color.Blue10};
  }
  &:active {
    background-color: ${Color.Blue20};
  }
  &:disabled {
    background-color: transparent;
    cursor: default;
    color: ${Color.Gray50};
  }
`;

export interface DefaultButtonProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  disabled?: boolean;
  onClick: () => void;
}

export const DefaultButton: React.FC<DefaultButtonProps> = ({
  title,
  variant = 'primary',
  disabled = false,
  onClick,
}) => {
  if (variant === 'secondary') {
    return (
      <ContainerSecondary disabled={disabled} onClick={onClick}>
        {title}
      </ContainerSecondary>
    );
  } else if (variant === 'ghost') {
    return (
      <ContainerGhost disabled={disabled} onClick={onClick}>
        {title}
      </ContainerGhost>
    );
  } else if (variant === 'danger') {
    return (
      <ContainerDanger disabled={disabled} onClick={onClick}>
        {title}
      </ContainerDanger>
    );
  }

  return (
    <ContainerPrimary disabled={disabled} onClick={onClick}>
      {title}
    </ContainerPrimary>
  );
};
