import { useNavigate, useParams } from 'react-router-dom';
import { format, parse } from '@formkit/tempo';

import {
  useDeleteExpense,
  useDeleteExpenseLoaderData,
} from '../../hooks/graphql';
import styled from 'styled-components';
import { Heading } from '../elements/typography/heading';
import { CaptionedText } from '../compounds/captioned-text';
import { ErrorText } from '../elements/typography/error';
import { DefaultButton } from '../elements/buttons/default-button';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 17rem;
  margin-top: 2rem;
`;

const DeleteExpensePage: React.FC = () => {
  const navigate = useNavigate();
  const { expenseId } = useParams();
  const { expense, loading, error } = useDeleteExpenseLoaderData(
    expenseId == undefined ? 0 : parseInt(expenseId)
  );

  const { error: deleteError, deleteExpense } = useDeleteExpense();

  if (loading) return <Heading text="Loading..." />;
  if (error) return <ErrorText text={`Error : ${error.message}`} />;
  if (expense === null || expense === undefined)
    return <ErrorText text="Error : Unable to load expense" />;

  const handleYes = async () => {
    const id = expenseId == undefined ? 0 : parseInt(expenseId);
    const deleted = await deleteExpense(id);
    if (deleted) {
      navigate('/expenses/');
    }
  };

  const handleNo = () => {
    navigate(-1);
  };

  const date = format(parse(expense?.date), 'YYYY-MM-DD', 'en');

  return (
    <Container>
      <Heading
        text="Are you sure you want to delete the following expense?"
        variant="large"
      />

      <CaptionedText caption="Amount" text={`${expense.amount}`} />
      <CaptionedText
        caption="Category"
        text={`${expense.category.parent?.name} - ${expense.category.name}`}
      />
      <CaptionedText caption="Account" text={expense.account.name} />
      <CaptionedText caption="Date" text={`${date}`} />

      {deleteError && <ErrorText text="Unable to delete!" />}

      <ButtonsContainer>
        <DefaultButton title="No" onClick={handleNo} />
        <DefaultButton title="Yes" onClick={handleYes} />
      </ButtonsContainer>
    </Container>
  );
};

export default DeleteExpensePage;
