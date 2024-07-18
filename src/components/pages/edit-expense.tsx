import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import {
  useEditExpenseLoaderData,
  useUpdateExpense,
} from '../../hooks/graphql';
import { ExpenseForm } from '../modules/expense-form';
import { Heading } from '../elements/typography/heading';
import { ErrorText } from '../elements/typography/error';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const EditExpensePage: React.FC = () => {
  const navigate = useNavigate();
  const { expenseId } = useParams();
  const { categories, expense, loading, error } = useEditExpenseLoaderData(
    expenseId == undefined ? 0 : parseInt(expenseId)
  );
  const {
    loading: updatingExpense,
    error: updateError,
    updateExpense,
  } = useUpdateExpense();

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
    const id = expenseId == undefined ? 0 : parseInt(expenseId);
    const updatedExpense = await updateExpense(
      id,
      amount,
      categoryId,
      accountId,
      date
    );

    if (updatedExpense) {
      navigate('/expenses/');
    }
  };

  if (loading) return <Heading text="Loading..." />;
  if (error) return <ErrorText text={`Error : ${error.message}`} />;

  if (expense === null || expense === undefined)
    return <ErrorText text="Error : Unable to load expense" />;

  const categoriesFormatted = categories
    .filter((obj) => obj.parent !== null)
    .map(({ id, name, parent }) => ({
      id: id,
      name: `${parent?.name} - ${name}`,
    }));

  const errorsFormatted = updateError?.graphQLErrors
    .map(({ message }) => message)
    .join('\n');

  return (
    <Container>
      <Heading text="Update expense" variant="midum" />
      <ExpenseForm
        categories={categoriesFormatted}
        expense={expense}
        onSubmit={handleSubmit}
        disableSubmit={updatingExpense}
        error={errorsFormatted}
      />
    </Container>
  );
};

export default EditExpensePage;
