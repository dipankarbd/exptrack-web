import styled from 'styled-components';
import React, { FormEvent, useEffect, useState } from 'react';

import { SubmitButton } from '../elements/buttons/submit-button';
import { ErrorText } from '../elements/typography/error';
import { FormSelectField } from '../compounds/form-select-field';
import { FormNumberField } from '../compounds/form-number-field';
import { FormDateField } from '../compounds/form-date-field';
import { format, parse } from '@formkit/tempo';
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

export interface ExpenseFormProps {
  accounts?: { id: number; name: string }[];
  categories: { id: number; name: string }[];
  expense?: {
    id: number;
    date: string;
    amount: number;
    category: {
      id: number;
    };
    account: {
      id: number;
      name: string;
    };
  };
  disableSubmit?: boolean;
  error?: string;
  onSubmit: (data: {
    amount: number;
    categoryId: number;
    accountId: number;
    date: string;
  }) => void;
  className?: string;
}

export const ExpenseForm: React.FC<ExpenseFormProps> = ({
  accounts,
  categories,
  expense,
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
      setErrorMessage('Invalid input');
      return;
    }

    const amount = parseFloat(formData.get('amount')?.toString() ?? '0.0');
    const categoryId = parseFloat(formData.get('category')?.toString() ?? '0');
    const accountId =
      expense?.account.id ??
      parseFloat(formData.get('account')?.toString() ?? '0');
    const date = formData.get('date')?.toString() ?? '1/1/2000';

    onSubmit({ amount, categoryId, accountId, date });
  };

  const cateoryItems = categories.map(({ id, name }) => {
    return { text: name, value: `${id}` };
  });

  const accountItems = accounts?.map(({ id, name }) => {
    return { text: name, value: `${id}` };
  });

  const selectedCategoryId = expense ? `${expense.category.id}` : undefined;
  const selectedAccountId = expense ? `${expense.account.id}` : undefined;
  const defaultDate = expense
    ? format(parse(expense.date), 'YYYY-MM-DD', 'en')
    : '';

  return (
    <Form onSubmit={handleSubmit} className={className}>
      <FormNumberField name="amount" label="Amount" value={expense?.amount} />
      <FormSelectField
        name="category"
        label="Category"
        value={selectedCategoryId}
        items={cateoryItems}
      />

      {expense && (
        <FormTextField
          name="account"
          label="Account"
          value={expense.account.name}
          placeholder=""
          disabled={true}
        />
      )}

      {!expense && accountItems && (
        <FormSelectField
          name="account"
          label="Account"
          value={selectedAccountId}
          items={accountItems}
        />
      )}

      <FormDateField name="date" label="Date" value={defaultDate} />

      {errorMessage && <StyledErrorText text={errorMessage} />}

      <StyledSubmitButton value="Save" disabled={disableSubmit} />
    </Form>
  );
};
