import styled from 'styled-components';
import { format, parse } from '@formkit/tempo';

import { Table } from '../compounds/table';
import { DefaultLink } from '../elements/links/default-link';
import { Heading } from '../elements/typography/heading';
import { ErrorText } from '../elements/typography/error';
import { useAccounts } from '../../hooks/graphql';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledLink = styled(DefaultLink)`
  margin-bottom: 1rem;
`;

const AccountsPage = () => {
  const { loading, error, accounts } = useAccounts();

  if (loading) return <Heading text="Loading..." />;
  if (error) return <ErrorText text={`Error : ${error.message}`} />;

  const header = [
    'Name',
    'Type',
    'State',
    'Initial Amount',
    'Balance',
    'Created At',
    '',
  ];

  const rows = accounts.map(
    ({ id, type, name, state, initialAmount, currentBalance, createdAt }) => {
      return {
        key: id,
        items: [
          name,
          type,
          state,
          initialAmount,
          currentBalance,
          format(parse(createdAt), { date: 'full' }),
        ],
        actions: [{ title: 'Edit', to: `/accounts/${id}/edit` }],
      };
    }
  );

  return (
    <Container>
      <StyledLink to="/accounts/new" title="Add New" />
      <Table headerTitles={header} rows={rows} />
    </Container>
  );
};

export default AccountsPage;
