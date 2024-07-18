import React, { FormEvent, useEffect, useState } from 'react';
import styled from 'styled-components';

import { SubmitButton } from '../elements/buttons/submit-button';
import { ErrorText } from '../elements/typography/error';
import { FormSelectField } from '../compounds/form-select-field';
import { FormNumberField } from '../compounds/form-number-field';
import { FormDateField } from '../compounds/form-date-field';

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

export interface TransferFormProps {
  accounts: { id: number; name: string }[];
  disableSubmit?: boolean;
  error?: string;
  onSubmit: (data: {
    amount: number;
    fromAccountId: number;
    toAccountId: number;
    date: string;
  }) => void;
  className?: string;
}

export const TransferForm: React.FC<TransferFormProps> = ({
  accounts,
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

    if (formData.get('amount') === '' || formData.get('date') === '') {
      setErrorMessage('Invalid entry');
      return;
    }

    const amount = parseFloat(formData.get('amount')?.toString() ?? '0.0');
    const fromAccountId = parseFloat(
      formData.get('fromAccountId')?.toString() ?? '0'
    );
    const toAccountId = parseFloat(
      formData.get('toAccountId')?.toString() ?? '0'
    );
    const date = formData.get('date')?.toString() ?? '1/1/2000';

    onSubmit({ amount, fromAccountId, toAccountId, date });
  };

  const accountItems = accounts?.map(({ id, name }) => {
    return { text: name, value: `${id}` };
  });

  return (
    <Form onSubmit={handleSubmit} className={className}>
      <FormNumberField name="amount" label="Amount" />
      <FormSelectField name="fromAccountId" label="From" items={accountItems} />
      <FormSelectField name="toAccountId" label="To" items={accountItems} />
      <FormDateField name="date" label="Date" />

      {errorMessage && <StyledErrorText text={errorMessage} />}

      <StyledSubmitButton value="Save" disabled={disableSubmit} />
    </Form>
  );
};
