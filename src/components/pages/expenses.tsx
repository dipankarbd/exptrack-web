import styled from 'styled-components';
import { format, parse } from '@formkit/tempo';

import { useExpenses } from '../../hooks/graphql';
import { Table } from '../compounds/table';
import { DefaultLink } from '../elements/links/default-link';
import { Heading } from '../elements/typography/heading';
import { ErrorText } from '../elements/typography/error';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledLink = styled(DefaultLink)`
  margin-bottom: 1rem;
`;

const ExpensesPage = () => {
  const { loading, error, expenses } = useExpenses();

  if (loading) return <Heading text="Loading..." />;
  if (error) return <ErrorText text={`Error : ${error.message}`} />;

  const header = ['Category', 'Amount', 'Account', 'Date', ''];

  const rows = expenses.map(({ id, amount, date, account, category }) => {
    return {
      key: id,
      items: [
        `${category?.parent?.name} - ${category?.name}`,
        amount,
        account?.name,
        format(parse(date), { date: 'medium', time: 'short' }),
      ],
      actions: [
        { title: 'Edit', to: `/expenses/${id}/edit` },
        { title: 'Delete', to: `/expenses/${id}/delete` },
      ],
    };
  });

  return (
    <Container>
      <StyledLink to="/expenses/new" title="Add New" />
      <Table headerTitles={header} rows={rows} />
    </Container>
  );
};

export default ExpensesPage;
