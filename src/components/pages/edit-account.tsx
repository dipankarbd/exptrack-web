import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';

import {
  useEditAccountLoaderData,
  useUpdateAccount,
} from '../../hooks/graphql';
import { Heading } from '../elements/typography/heading';
import { AccountForm } from '../modules/account-form';
import { ErrorText } from '../elements/typography/error';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const EditAccountPage: React.FC = () => {
  const navigate = useNavigate();
  const { accountId } = useParams();
  const { account, loading, error } = useEditAccountLoaderData(
    accountId === undefined ? 0 : parseInt(accountId)
  );

  const {
    loading: updatingAccount,
    error: updateError,
    updateAccount,
  } = useUpdateAccount();

  const handleSubmit = async ({
    name,
    accountType,
    accountState,
    initialAmount,
  }: {
    name: string;
    accountType: string;
    accountState: string;
    initialAmount: number;
  }) => {
    const id = accountId == undefined ? 0 : parseInt(accountId);

    const updatedAccount = await updateAccount(
      id,
      name,
      accountType,
      accountState,
      initialAmount
    );

    if (updatedAccount) {
      navigate('/accounts/');
    }
  };

  if (loading) return <Heading text="Loading..." />;
  if (error) return <ErrorText text={`Error : ${error.message}`} />;

  if (account === null || account === undefined)
    return <ErrorText text="Error : Unable to load account" />;

  const errorsFormatted = updateError?.graphQLErrors
    .map(({ message }) => message)
    .join('\n');

  return (
    <Container>
      <Heading text="Update account" variant="midum" />
      <AccountForm
        account={account}
        onSubmit={handleSubmit}
        disableSubmit={updatingAccount}
        error={errorsFormatted}
      />
    </Container>
  );
};

export default EditAccountPage;
