import { useNavigate, useParams } from 'react-router-dom';
import { format, parse } from '@formkit/tempo';

import {
  useDeleteIncome,
  useDeleteIncomeLoaderData,
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

const DeleteIncomePage: React.FC = () => {
  const navigate = useNavigate();
  const { incomeId } = useParams();
  const { income, loading, error } = useDeleteIncomeLoaderData(
    incomeId == undefined ? 0 : parseInt(incomeId)
  );

  const { error: deleteError, deleteIncome } = useDeleteIncome();

  if (loading) return <Heading text="Loading..." />;
  if (error) return <ErrorText text={`Error : ${error.message}`} />;
  if (income === null || income === undefined)
    return <ErrorText text="Error : Unable to load income" />;

  const handleYes = async () => {
    const id = incomeId == undefined ? 0 : parseInt(incomeId);
    const deleted = await deleteIncome(id);
    if (deleted) {
      navigate('/incomes/');
    }
  };

  const handleNo = () => {
    navigate(-1);
  };

  const date = format(parse(income?.date), 'YYYY-MM-DD', 'en');

  return (
    <Container>
      <Heading
        text="Are you sure you want to delete the following income?"
        variant="large"
      />

      <CaptionedText caption="Amount" text={`${income.amount}`} />
      <CaptionedText caption="Source" text={`${income.source}`} />
      <CaptionedText caption="Account" text={income.account.name} />
      <CaptionedText caption="Date" text={`${date}`} />

      {deleteError && <ErrorText text="Unable to delete!" />}

      <ButtonsContainer>
        <DefaultButton title="No" onClick={handleNo} />
        <DefaultButton title="Yes" onClick={handleYes} />
      </ButtonsContainer>
    </Container>
  );
};

export default DeleteIncomePage;
