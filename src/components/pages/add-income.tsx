import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import {
  useCreateIncome,
  useCreateIncomeLoaderData,
} from '../../hooks/graphql';
import { Heading } from '../elements/typography/heading';
import { IncomeForm } from '../modules/income-form';
import { ErrorText } from '../elements/typography/error';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const AddIncomePage: React.FC = () => {
  const navigate = useNavigate();
  const { accounts, loading, error } = useCreateIncomeLoaderData();
  const { loading: creatingIncome, createIncome } = useCreateIncome();

  const handleSubmit = async ({
    amount,
    source,
    accountId,
    date,
  }: {
    amount: number;
    source: string;
    accountId: number;
    date: string;
  }) => {
    await createIncome(amount, source, accountId, date);
    navigate('/incomes/');
  };

  if (loading) return <Heading text="Loading..." />;
  if (error) return <ErrorText text={`Error : ${error.message}`} />;

  return (
    <Container>
      <Heading text="New income" variant="midum" />
      <IncomeForm
        accounts={accounts}
        onSubmit={handleSubmit}
        disableSubmit={creatingIncome}
      />
    </Container>
  );
};

export default AddIncomePage;
