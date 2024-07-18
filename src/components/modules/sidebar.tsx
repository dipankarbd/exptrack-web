import styled from 'styled-components';

import { Color } from '../elements/color';
import { LinkButton } from '../elements/buttons/link-button';
import { MainNav } from './main-nav';
import { Heading } from '../elements/typography/heading';

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Color.Blue10};
  min-height: 100vh;
`;

const StyledHeading = styled(Heading)`
  margin-left: 1.4rem;
  margin-bottom: 1rem;
`;

const StyledMainNav = styled(MainNav)`
  flex-grow: 1;
`;

const StylesLinkButton = styled(LinkButton)`
  align-self: flex-start;
  margin-left: 1.6rem;
  margin-bottom: 1rem;
`;

export interface SidebarProps {
  onLogout: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ onLogout }) => {
  return (
    <SidebarContainer>
      <StyledHeading variant="xl" text="Expense Tracker" />
      <StyledMainNav />
      <StylesLinkButton onClick={onLogout} title="Logout" />
    </SidebarContainer>
  );
};
