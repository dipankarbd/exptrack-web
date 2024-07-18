import { format, parse } from '@formkit/tempo';

import { Table } from '../compounds/table';
import { useTransactions } from '../../hooks/graphql';
import { Heading } from '../elements/typography/heading';
import { ErrorText } from '../elements/typography/error';

const TransactionsPage = () => {
  const { loading, error, transactions } = useTransactions();

  if (loading) return <Heading text="Loading..." />;
  if (error) return <ErrorText text={`Error : ${error.message}`} />;

  const header = [
    'Debit',
    'Credit',
    'Balance',
    'Description',
    'Account',
    'Date',
  ];

  const rows = transactions.map(
    ({ id, debit, credit, balance, description, date, account }) => {
      return {
        key: id,
        items: [
          debit,
          credit,
          balance,
          description,
          account?.name,
          format(parse(date), { date: 'medium', time: 'short' }),
        ],
      };
    }
  );

  return <Table headerTitles={header} rows={rows} />;
};

export default TransactionsPage;
