import styled from 'styled-components';
import { format, parse } from '@formkit/tempo';

import { Table } from '../compounds/table';
import { DefaultLink } from '../elements/links/default-link';
import { Heading } from '../elements/typography/heading';
import { ErrorText } from '../elements/typography/error';
import { useIncomes } from '../../hooks/graphql';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledLink = styled(DefaultLink)`
  margin-bottom: 1rem;
`;

const IncomesPage = () => {
  const { loading, error, incomes } = useIncomes();

  if (loading) return <Heading text="Loading..." />;
  if (error) return <ErrorText text={`Error : ${error.message}`} />;

  const header = ['Source', 'Amount', 'Account', 'Date', ''];

  const rows = incomes.map(({ id, amount, date, source, account }) => {
    return {
      key: id,
      items: [
        source,
        amount,
        account?.name,
        format(parse(date), { date: 'medium', time: 'short' }),
      ],
      actions: [{ title: 'Delete', to: `/incomes/${id}/delete` }],
    };
  });

  return (
    <Container>
      <StyledLink to="/incomes/new" title="Add New" />
      <Table headerTitles={header} rows={rows} />
    </Container>
  );
};

export default IncomesPage;
