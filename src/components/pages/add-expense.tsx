import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import {
  useCreateExpense,
  useCreateExpenseLoaderData,
} from '../../hooks/graphql';
import { Heading } from '../elements/typography/heading';
import { ExpenseForm } from '../modules/expense-form';
import { ErrorText } from '../elements/typography/error';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const AddExpensePage: React.FC = () => {
  const navigate = useNavigate();
  const { accounts, categories, loading, error } = useCreateExpenseLoaderData();
  const { loading: creatingExpense, createExpense } = useCreateExpense();

  const handleSubmit = async ({
    amount,
    categoryId,
    accountId,
    date,
  }: {
    amount: number;
    categoryId: number;
    accountId: number;
    date: string;
  }) => {
    const expense = await createExpense(amount, categoryId, accountId, date);
    if (expense) {
      navigate(`/expenses/${expense?.id}/edit`);
    }
  };

  if (loading) return <Heading text="Loading..." />;
  if (error) return <ErrorText text={`Error : ${error.message}`} />;

  const categoriesFormatted = categories
    .filter((obj) => obj.parent !== null)
    .map(({ id, name, parent }) => ({
      id: id,
      name: `${parent?.name} - ${name}`,
    }));

  return (
    <Container>
      <Heading text="New expense" variant="midum" />
      <ExpenseForm
        categories={categoriesFormatted}
        accounts={accounts}
        onSubmit={handleSubmit}
        disableSubmit={creatingExpense}
      />
    </Container>
  );
};

export default AddExpensePage;
