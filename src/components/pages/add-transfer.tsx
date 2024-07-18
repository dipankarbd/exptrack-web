import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import {
  useCreateTransfer,
  useCreateTransferLoaderData,
} from '../../hooks/graphql';
import { Heading } from '../elements/typography/heading';
import { ErrorText } from '../elements/typography/error';
import { TransferForm } from '../modules/transfer-form';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const AddTransferPage: React.FC = () => {
  const navigate = useNavigate();
  const { accounts, loading, error } = useCreateTransferLoaderData();
  const { loading: creatingTransfer, createTransfer } = useCreateTransfer();

  const handleSubmit = async ({
    amount,
    fromAccountId,
    toAccountId,
    date,
  }: {
    amount: number;
    fromAccountId: number;
    toAccountId: number;
    date: string;
  }) => {
    await createTransfer(amount, fromAccountId, toAccountId, date);

    navigate('/transfers/');
  };

  if (loading) return <Heading text="Loading..." />;
  if (error) return <ErrorText text={`Error : ${error.message}`} />;

  return (
    <Container>
      <Heading text="New transfer" variant="midum" />
      <TransferForm
        accounts={accounts}
        onSubmit={handleSubmit}
        disableSubmit={creatingTransfer}
      />
    </Container>
  );
};

export default AddTransferPage;
