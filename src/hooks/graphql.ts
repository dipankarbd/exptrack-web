import { useMutation, useQuery } from '@apollo/client';
import {
  GET_ACCOUNTS,
  GET_CREATE_EXPENSE_LOADER_DATA,
  GET_EXPENSES,
  GET_INCOMES,
  GET_TRANSACTIONS,
  GET_TRANSFERS,
  GET_EDIT_EXPENSE_LOADER_DATA,
  GET_DELETE_EXPENSE_LOADER_DATA,
  GET_CREATE_INCOME_LOADER_DATA,
  GET_DELETE_INCOME_LOADER_DATA,
  GET_EDIT_ACCOUNT_LOADER_DATA,
  GET_CREATE_TRANSFER_LOADER_DATA,
  GET_DELETE_TRANSFER_LOADER_DATA,
} from '../graphql/queries';
import {
  CREATE_ACCOUNT,
  CREATE_EXPENSE,
  CREATE_INCOME,
  CREATE_TRANSFER,
  DELETE_EXPENSE,
  DELETE_INCOME,
  DELETE_TRANSFER,
  UPDATE_ACCOUNT,
  UPDATE_EXPENSE,
} from '../graphql/mutations';
import {
  AccountSate,
  AccountType,
  IncomeSource,
} from '../__generated__/graphql';

export const useAccounts = () => {
  const { loading, error, data } = useQuery(GET_ACCOUNTS, {
    fetchPolicy: 'network-only',
  });

  return {
    accounts: data ? data.accounts : [],
    loading,
    error,
  };
};

export const useIncomes = () => {
  const { loading, error, data } = useQuery(GET_INCOMES, {
    fetchPolicy: 'network-only',
  });

  return {
    incomes: data ? data.incomes : [],
    loading,
    error,
  };
};

export const useExpenses = () => {
  const { loading, error, data } = useQuery(GET_EXPENSES, {
    fetchPolicy: 'network-only',
  });

  return {
    expenses: data ? data.expenses : [],
    loading,
    error,
  };
};

export const useTransfers = () => {
  const { loading, error, data } = useQuery(GET_TRANSFERS, {
    fetchPolicy: 'network-only',
  });

  return {
    transfers: data ? data.transfers : [],
    loading,
    error,
  };
};

export const useTransactions = () => {
  const { loading, error, data } = useQuery(GET_TRANSACTIONS, {
    fetchPolicy: 'network-only',
  });

  return {
    transactions: data ? data.transactions : [],
    loading,
    error,
  };
};

export const useCreateExpenseLoaderData = () => {
  const { loading, error, data } = useQuery(GET_CREATE_EXPENSE_LOADER_DATA, {
    fetchPolicy: 'network-only',
  });

  return {
    accounts: data ? data.accounts : [],
    categories: data ? data.expenseCategories : [],
    loading,
    error,
  };
};

export const useEditExpenseLoaderData = (expenseId: number) => {
  const { loading, error, data } = useQuery(GET_EDIT_EXPENSE_LOADER_DATA, {
    fetchPolicy: 'network-only',
    variables: {
      expenseId: expenseId,
    },
  });

  return {
    categories: data ? data.expenseCategories : [],
    expense: data?.expense,
    loading,
    error,
  };
};

export const useDeleteExpenseLoaderData = (expenseId: number) => {
  const { loading, error, data } = useQuery(GET_DELETE_EXPENSE_LOADER_DATA, {
    fetchPolicy: 'network-only',
    variables: {
      expenseId: expenseId,
    },
  });

  return {
    expense: data?.expense,
    loading,
    error,
  };
};

export const useCreateExpense = () => {
  const [mutate, { loading }] = useMutation(CREATE_EXPENSE, {
    onError: (err) => {
      console.log('err', err);
    },
  });

  return {
    createExpense: async (
      amount: number,
      categoryId: number,
      accountId: number,
      date: string
    ) => {
      const { data } = await mutate({
        variables: {
          input: {
            amount,
            categoryId,
            accountId,
            date,
          },
        },
      });

      return data?.expense;
    },

    loading: loading,
  };
};

export const useUpdateExpense = () => {
  const [mutate, { loading, error }] = useMutation(UPDATE_EXPENSE, {
    onError: (err) => {
      console.log('err', err);
    },
  });

  return {
    updateExpense: async (
      id: number,
      amount: number,
      categoryId: number,
      accountId: number,
      date: string
    ) => {
      const { data } = await mutate({
        variables: {
          input: {
            id,
            amount,
            categoryId,
            accountId,
            date,
          },
        },
      });

      return data?.expense;
    },

    loading: loading,
    error: error,
  };
};

export const useDeleteExpense = () => {
  const [mutate, { loading, error }] = useMutation(DELETE_EXPENSE, {
    onError: (err) => {
      console.log('err', err);
    },
  });

  return {
    deleteExpense: async (id: number) => {
      const { data } = await mutate({
        variables: {
          deleteExpenseId: id,
        },
      });

      return data?.deleted;
    },

    loading: loading,
    error: error,
  };
};

export const useCreateIncomeLoaderData = () => {
  const { loading, error, data } = useQuery(GET_CREATE_INCOME_LOADER_DATA, {
    fetchPolicy: 'network-only',
  });

  return {
    accounts: data ? data.accounts : [],
    loading,
    error,
  };
};

export const useDeleteIncomeLoaderData = (incomeId: number) => {
  const { loading, error, data } = useQuery(GET_DELETE_INCOME_LOADER_DATA, {
    fetchPolicy: 'network-only',
    variables: {
      incomeId: incomeId,
    },
  });

  return {
    income: data?.income,
    loading,
    error,
  };
};

export const useCreateIncome = () => {
  const [mutate, { loading }] = useMutation(CREATE_INCOME, {
    onError: (err) => {
      console.log('err', err);
    },
  });

  return {
    createIncome: async (
      amount: number,
      source: string,
      accountId: number,
      date: string
    ) => {
      const { data } = await mutate({
        variables: {
          input: {
            amount,
            source: IncomeSource[source as keyof typeof IncomeSource],
            accountId,
            date,
          },
        },
      });

      return data?.income;
    },

    loading: loading,
  };
};

export const useDeleteIncome = () => {
  const [mutate, { loading, error }] = useMutation(DELETE_INCOME, {
    onError: (err) => {
      console.log('err', err);
    },
  });

  return {
    deleteIncome: async (id: number) => {
      const { data } = await mutate({
        variables: {
          deleteIncomeId: id,
        },
      });

      return data?.deleted;
    },

    loading: loading,
    error: error,
  };
};

export const useEditAccountLoaderData = (accountId: number) => {
  const { loading, error, data } = useQuery(GET_EDIT_ACCOUNT_LOADER_DATA, {
    fetchPolicy: 'network-only',
    variables: {
      accountId: accountId,
    },
  });

  return {
    account: data?.account,
    loading,
    error,
  };
};

export const useCreateAccount = () => {
  const [mutate, { loading }] = useMutation(CREATE_ACCOUNT, {
    onError: (err) => {
      console.log('err', err);
    },
  });

  return {
    createAccount: async (
      name: string,
      accountType: string,
      initialAmount: number
    ) => {
      const { data } = await mutate({
        variables: {
          input: {
            name,
            type: AccountType[accountType as keyof typeof AccountType],
            initialAmount,
          },
        },
      });

      return data?.account;
    },

    loading: loading,
  };
};

export const useUpdateAccount = () => {
  const [mutate, { loading, error }] = useMutation(UPDATE_ACCOUNT, {
    onError: (err) => {
      console.log('err', err);
    },
  });

  return {
    updateAccount: async (
      id: number,
      name: string,
      accountType: string,
      accountState: string,
      initialAmount: number
    ) => {
      const { data } = await mutate({
        variables: {
          input: {
            id,
            name,
            type: AccountType[accountType as keyof typeof AccountType],
            state: AccountSate[accountState as keyof typeof AccountSate],
            initialAmount,
          },
        },
      });

      return data?.account;
    },

    loading: loading,
    error: error,
  };
};

export const useCreateTransferLoaderData = () => {
  const { loading, error, data } = useQuery(GET_CREATE_TRANSFER_LOADER_DATA, {
    fetchPolicy: 'network-only',
  });

  return {
    accounts: data ? data.accounts : [],
    loading,
    error,
  };
};

export const useDeleteTransferLoaderData = (transferId: number) => {
  const { loading, error, data } = useQuery(GET_DELETE_TRANSFER_LOADER_DATA, {
    fetchPolicy: 'network-only',
    variables: {
      transferId: transferId,
    },
  });

  return {
    transfer: data?.transfer,
    loading,
    error,
  };
};

export const useCreateTransfer = () => {
  const [mutate, { loading }] = useMutation(CREATE_TRANSFER, {
    onError: (err) => {
      console.log('err', err);
    },
  });

  return {
    createTransfer: async (
      amount: number,
      fromAccountId: number,
      toAccountId: number,
      date: string
    ) => {
      const { data } = await mutate({
        variables: {
          input: {
            amount,
            fromAccountId,
            toAccountId,
            date,
          },
        },
      });

      return data?.transfer;
    },

    loading: loading,
  };
};

export const useDeleteTransfer = () => {
  const [mutate, { loading, error }] = useMutation(DELETE_TRANSFER, {
    onError: (err) => {
      console.log('err', err);
    },
  });

  return {
    deleteTransfer: async (id: number) => {
      const { data } = await mutate({
        variables: {
          deleteTransferId: id,
        },
      });

      return data?.deleted;
    },

    loading: loading,
    error: error,
  };
};
