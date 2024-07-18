import styled from 'styled-components';
import { format, parse } from '@formkit/tempo';

import { Table } from '../compounds/table';
import { DefaultLink } from '../elements/links/default-link';
import { Heading } from '../elements/typography/heading';
import { ErrorText } from '../elements/typography/error';
import { useTransfers } from '../../hooks/graphql';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledLink = styled(DefaultLink)`
  margin-bottom: 1rem;
`;

const TransfersPage = () => {
  const { loading, error, transfers } = useTransfers();

  if (loading) return <Heading text="Loading..." />;
  if (error) return <ErrorText text={`Error : ${error.message}`} />;

  const header = ['Amount', 'From', 'To', 'Date', ''];

  const rows = transfers.map(({ id, amount, date, fromAccount, toAccount }) => {
    return {
      key: id,
      items: [
        amount,
        fromAccount?.name,
        toAccount?.name,
        format(parse(date), { date: 'medium', time: 'short' }),
      ],
      actions: [{ title: 'Delete', to: `/transfers/${id}/delete` }],
    };
  });

  return (
    <Container>
      <StyledLink to="/transfers/new" title="Add New" />
      <Table headerTitles={header} rows={rows} />
    </Container>
  );
};

export default TransfersPage;
