import styled from 'styled-components';
import { Color } from '../elements/color';
import { DefaultLink } from '../elements/links/default-link';

const Container = styled.table`
  font-family: 'Barlow', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.4rem;
  text-align: left;
  border-collapse: collapse;
  overflow: hidden;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
`;

const Th = styled.th`
  background-color: ${Color.Blue60};
  color: ${Color.White};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  border-top: 0.1rem solid ${Color.White};
  border-bottom: 1px solid ${Color.Gray30};
  padding: 1rem;
`;

const Tr = styled.tr`
  &:nth-child(even) td {
    background-color: ${Color.Blue10};
  }
`;

const Td = styled.td`
  background-color: ${Color.White};
  padding: 1rem;
  border-bottom: 0.1rem solid ${Color.Gray10};
`;

const StyledLink = styled(DefaultLink)`
  margin-right: 1rem;
`;

export interface TableProps {
  headerTitles: string[];
  /* eslint-disable @typescript-eslint/no-explicit-any */
  rows: { key: any; items: any[]; actions?: { title: string; to: string }[] }[];
  className?: string;
}

export const Table: React.FC<TableProps> = ({ headerTitles, rows }) => {
  const renderActions = (actions: { title: string; to: string }[]) => {
    return actions.map(({ title, to }) => (
      <StyledLink key={to} title={title} to={to} />
    ));
  };

  return (
    <Container>
      <thead>
        <Tr>
          {headerTitles.map((title) => (
            <Th key={title}>{title}</Th>
          ))}
        </Tr>
      </thead>
      <tbody>
        {rows.map(({ key, items, actions }) => (
          <Tr key={key}>
            {items.map((item, idx) => {
              return <Td key={`${idx}-${key}`}>{item}</Td>;
            })}
            {actions && <Td>{renderActions(actions)}</Td>}
          </Tr>
        ))}
      </tbody>
    </Container>
  );
};
{
  /* <NavLink to={`/expenses/${id}/edit`}>Edit</NavLink>
                <NavLink to={`/expenses/${id}/delete`}>Delete</NavLink> */
}
