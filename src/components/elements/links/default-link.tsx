import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Color } from '../color';

const Link = styled(NavLink)`
  font-family: 'Barlow', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6rem;
  color: ${Color.Blue70};
  text-decoration: none;

  &:hover {
    color: ${Color.Blue50};
  }

  &.active {
    color: ${Color.Blue80};
  }
`;

export interface DefaultLinkProps {
  title: string;
  to: string;
  className?: string;
}

export const DefaultLink: React.FC<DefaultLinkProps> = ({
  title,
  to,
  className,
}) => {
  return (
    <Link to={to} className={className}>
      {title}
    </Link>
  );
};
