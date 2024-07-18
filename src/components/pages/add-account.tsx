import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { AccountForm } from '../modules/account-form';
import { useCreateAccount } from '../../hooks/graphql';
import { Heading } from '../elements/typography/heading';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const AddAccountPage: React.FC = () => {
  const navigate = useNavigate();
  const { loading: creatingAccount, createAccount } = useCreateAccount();

  const handleSubmit = async ({
    name,
    accountType,
    initialAmount,
  }: {
    name: string;
    accountType: string;
    accountState: string;
    initialAmount: number;
  }) => {
    const account = await createAccount(name, accountType, initialAmount);
    if (account) {
      navigate(`/accounts/${account?.id}/edit`);
    }
  };

  return (
    <Container>
      <Heading text="New Account" variant="midum" />
      <AccountForm onSubmit={handleSubmit} disableSubmit={creatingAccount} />
    </Container>
  );
};

export default AddAccountPage;
