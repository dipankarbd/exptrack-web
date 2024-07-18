import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { Color } from '../elements/color';

const Nav = styled.nav`
  width: 25rem;

  ul {
    list-style: none;
    position: relative;

    li a {
      display: flex;
      text-decoration: none;
      padding-left: 1.5rem;
      padding-top: 1.6rem;
      padding-bottom: 1.6rem;
      color: ${Color.Blue80};
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      &.active {
        background: ${Color.White};
        color: ${Color.Blue80};
        font-size: 1.4rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
    }
  }
`;

export interface MainNavProps {
  className?: string;
}

export const MainNav: React.FC<MainNavProps> = ({ className }) => {
  return (
    <Nav className={className}>
      <ul>
        <li>
          <NavLink to="expenses">Expense</NavLink>
        </li>
        <li>
          <NavLink to="incomes">Income</NavLink>
        </li>
        <li>
          <NavLink to="transfers">Transfer</NavLink>
        </li>
        <li>
          <NavLink to="transactions">Transaction</NavLink>
        </li>
        <li>
          <NavLink to="accounts">Account</NavLink>
        </li>
      </ul>
    </Nav>
  );
};
