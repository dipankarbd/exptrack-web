import styled from 'styled-components';
import React, { FormEvent, useEffect, useState } from 'react';

import { SubmitButton } from '../elements/buttons/submit-button';
import { ErrorText } from '../elements/typography/error';
import { FormSelectField } from '../compounds/form-select-field';
import { FormNumberField } from '../compounds/form-number-field';
import { FormTextField } from '../compounds/form-text-field';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledSubmitButton = styled(SubmitButton)`
  width: 20rem;
  align-self: flex-end;
  margin-right: 1rem;
`;

const StyledErrorText = styled(ErrorText)`
  padding: 0.4rem 0.4rem 0.4rem 7.2rem;
`;

export interface AccountFormProps {
  account?: {
    id: number;
    type: string;
    state: string;
    name: string;
    initialAmount: number;
    currentBalance: number;
    createdAt: string;
  };
  disableSubmit?: boolean;
  error?: string;
  onSubmit: (data: {
    name: string;
    accountType: string;
    accountState: string;
    initialAmount: number;
  }) => void;
  className?: string;
}

export const AccountForm: React.FC<AccountFormProps> = ({
  account,
  disableSubmit,
  error,
  onSubmit,
  className,
}) => {
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setErrorMessage(error ?? '');
  }, [error]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget as HTMLFormElement);

    if (formData.get('initialAmount') === '') {
      setErrorMessage('Invalid input');
      return;
    }

    const name = formData.get('name')?.toString() ?? 'Unnamed!';
    const accountType = formData.get('accountType')?.toString() ?? 'Cash';
    const accountState = formData.get('accountState')?.toString() ?? 'Active';
    const initialAmount = parseFloat(
      formData.get('initialAmount')?.toString() ?? '0.0'
    );

    onSubmit({ name, accountType, accountState, initialAmount });
  };

  const accountTypes = ['Bank', 'Cash', 'CreditCard'].map((item) => ({
    text: item,
    value: item,
  }));
  const accountStates = ['Active', 'Inactive', 'Closed'].map((item) => ({
    text: item,
    value: item,
  }));

  return (
    <Form onSubmit={handleSubmit} className={className}>
      <FormTextField
        name="name"
        label="Name"
        value={account?.name}
        placeholder=""
      />
      <FormSelectField
        name="accountType"
        label="Account Type"
        value={account?.type}
        items={accountTypes}
      />
      {account && (
        <FormSelectField
          name="accountState"
          label="Account State"
          value={account?.state}
          items={accountStates}
        />
      )}
      <FormNumberField
        name="initialAmount"
        label="Amount"
        value={account?.initialAmount}
      />

      {errorMessage && <StyledErrorText text={errorMessage} />}

      <StyledSubmitButton value="Save" disabled={disableSubmit} />
    </Form>
  );
};
