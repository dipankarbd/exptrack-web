import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Account = {
  __typename?: 'Account';
  createdAt: Scalars['String']['output'];
  currentBalance: Scalars['Float']['output'];
  id: Scalars['Int']['output'];
  initialAmount: Scalars['Float']['output'];
  name: Scalars['String']['output'];
  state: AccountSate;
  type: AccountType;
  user: User;
};

export enum AccountSate {
  Active = 'Active',
  Closed = 'Closed',
  Inactive = 'Inactive',
}

export enum AccountType {
  Bank = 'Bank',
  Cash = 'Cash',
  CreditCard = 'CreditCard',
}

export type AddAccountInput = {
  initialAmount: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  type: AccountType;
};

export type AddExpenseInput = {
  accountId: Scalars['Int']['input'];
  amount: Scalars['Float']['input'];
  categoryId: Scalars['Int']['input'];
  date: Scalars['String']['input'];
};

export type AddIncomeInput = {
  accountId: Scalars['Int']['input'];
  amount: Scalars['Float']['input'];
  date: Scalars['String']['input'];
  source: IncomeSource;
};

export type AddTransferInput = {
  amount: Scalars['Float']['input'];
  date: Scalars['String']['input'];
  fromAccountId: Scalars['Int']['input'];
  toAccountId: Scalars['Int']['input'];
};

export type Expense = {
  __typename?: 'Expense';
  account: Account;
  amount: Scalars['Float']['output'];
  category: ExpenseCategory;
  date: Scalars['String']['output'];
  id: Scalars['Int']['output'];
};

export type ExpenseCategory = {
  __typename?: 'ExpenseCategory';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  parent?: Maybe<ExpenseCategory>;
};

export type Income = {
  __typename?: 'Income';
  account: Account;
  amount: Scalars['Float']['output'];
  date: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  source: IncomeSource;
};

export enum IncomeSource {
  Interest = 'Interest',
  Other = 'Other',
  Profit = 'Profit',
  Salary = 'Salary',
}

export type Mutation = {
  __typename?: 'Mutation';
  addAccount: Account;
  addExpense: Expense;
  addIncome: Income;
  addTransfer: Transfer;
  deleteExpense?: Maybe<Scalars['Boolean']['output']>;
  deleteIncome?: Maybe<Scalars['Boolean']['output']>;
  deleteTransfer?: Maybe<Scalars['Boolean']['output']>;
  updateAccount: Account;
  updateExpense: Expense;
};

export type MutationAddAccountArgs = {
  input: AddAccountInput;
};

export type MutationAddExpenseArgs = {
  input: AddExpenseInput;
};

export type MutationAddIncomeArgs = {
  input: AddIncomeInput;
};

export type MutationAddTransferArgs = {
  input: AddTransferInput;
};

export type MutationDeleteExpenseArgs = {
  id: Scalars['Int']['input'];
};

export type MutationDeleteIncomeArgs = {
  id: Scalars['Int']['input'];
};

export type MutationDeleteTransferArgs = {
  id: Scalars['Int']['input'];
};

export type MutationUpdateAccountArgs = {
  input: UpdateAccountInput;
};

export type MutationUpdateExpenseArgs = {
  input: UpdateExpenseInput;
};

export type Query = {
  __typename?: 'Query';
  account?: Maybe<Account>;
  accounts: Array<Account>;
  expense?: Maybe<Expense>;
  expenseCategories: Array<ExpenseCategory>;
  expenseCategory?: Maybe<ExpenseCategory>;
  expenses: Array<Expense>;
  income?: Maybe<Income>;
  incomes: Array<Income>;
  transactions: Array<Transaction>;
  transfer?: Maybe<Transfer>;
  transfers: Array<Transfer>;
};

export type QueryAccountArgs = {
  id: Scalars['Int']['input'];
};

export type QueryExpenseArgs = {
  id: Scalars['Int']['input'];
};

export type QueryExpenseCategoryArgs = {
  id: Scalars['Int']['input'];
};

export type QueryIncomeArgs = {
  id: Scalars['Int']['input'];
};

export type QueryTransferArgs = {
  id: Scalars['Int']['input'];
};

export type Transaction = {
  __typename?: 'Transaction';
  account: Account;
  balance: Scalars['Float']['output'];
  credit: Scalars['Float']['output'];
  date: Scalars['String']['output'];
  debit: Scalars['Float']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
};

export type Transfer = {
  __typename?: 'Transfer';
  amount: Scalars['Float']['output'];
  date: Scalars['String']['output'];
  fromAccount: Account;
  id: Scalars['Int']['output'];
  toAccount: Account;
};

export type UpdateAccountInput = {
  id: Scalars['Int']['input'];
  initialAmount: Scalars['Float']['input'];
  name: Scalars['String']['input'];
  state: AccountSate;
  type: AccountType;
};

export type UpdateExpenseInput = {
  accountId: Scalars['Int']['input'];
  amount: Scalars['Float']['input'];
  categoryId: Scalars['Int']['input'];
  date: Scalars['String']['input'];
  id: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  createdAt: Scalars['String']['output'];
  email: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  lastName: Scalars['String']['output'];
  role: UserRole;
};

export enum UserRole {
  Admin = 'Admin',
  Basic = 'Basic',
}

export type AddExpenseMutationMutationVariables = Exact<{
  input: AddExpenseInput;
}>;

export type AddExpenseMutationMutation = {
  __typename?: 'Mutation';
  expense: {
    __typename?: 'Expense';
    id: number;
    amount: number;
    date: string;
    category: {
      __typename?: 'ExpenseCategory';
      id: number;
      name: string;
      parent?: {
        __typename?: 'ExpenseCategory';
        id: number;
        name: string;
      } | null;
    };
    account: { __typename?: 'Account'; id: number; name: string };
  };
};

export type UpdateExpenseMutationMutationVariables = Exact<{
  input: UpdateExpenseInput;
}>;

export type UpdateExpenseMutationMutation = {
  __typename?: 'Mutation';
  expense: {
    __typename?: 'Expense';
    id: number;
    amount: number;
    date: string;
    category: {
      __typename?: 'ExpenseCategory';
      id: number;
      name: string;
      parent?: {
        __typename?: 'ExpenseCategory';
        id: number;
        name: string;
      } | null;
    };
    account: { __typename?: 'Account'; id: number; name: string };
  };
};

export type DeleteExpenseMutationMutationVariables = Exact<{
  deleteExpenseId: Scalars['Int']['input'];
}>;

export type DeleteExpenseMutationMutation = {
  __typename?: 'Mutation';
  deleted?: boolean | null;
};

export type AddIncomeMutationMutationVariables = Exact<{
  input: AddIncomeInput;
}>;

export type AddIncomeMutationMutation = {
  __typename?: 'Mutation';
  income: {
    __typename?: 'Income';
    id: number;
    amount: number;
    date: string;
    source: IncomeSource;
    account: { __typename?: 'Account'; id: number; name: string };
  };
};

export type DeleteIncomeMutationMutationVariables = Exact<{
  deleteIncomeId: Scalars['Int']['input'];
}>;

export type DeleteIncomeMutationMutation = {
  __typename?: 'Mutation';
  deleted?: boolean | null;
};

export type AddAccountMutationMutationVariables = Exact<{
  input: AddAccountInput;
}>;

export type AddAccountMutationMutation = {
  __typename?: 'Mutation';
  account: {
    __typename?: 'Account';
    id: number;
    type: AccountType;
    state: AccountSate;
    name: string;
    initialAmount: number;
    createdAt: string;
    currentBalance: number;
  };
};

export type UpdateAccountMutationMutationVariables = Exact<{
  input: UpdateAccountInput;
}>;

export type UpdateAccountMutationMutation = {
  __typename?: 'Mutation';
  account: {
    __typename?: 'Account';
    id: number;
    type: AccountType;
    state: AccountSate;
    name: string;
    initialAmount: number;
    createdAt: string;
    currentBalance: number;
  };
};

export type AddTransferMutationMutationVariables = Exact<{
  input: AddTransferInput;
}>;

export type AddTransferMutationMutation = {
  __typename?: 'Mutation';
  transfer: {
    __typename?: 'Transfer';
    id: number;
    amount: number;
    date: string;
    fromAccount: { __typename?: 'Account'; id: number; name: string };
    toAccount: { __typename?: 'Account'; id: number; name: string };
  };
};

export type DeleteTransferMutationMutationVariables = Exact<{
  deleteTransferId: Scalars['Int']['input'];
}>;

export type DeleteTransferMutationMutation = {
  __typename?: 'Mutation';
  deleted?: boolean | null;
};

export type GetAccountsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAccountsQuery = {
  __typename?: 'Query';
  accounts: Array<{
    __typename?: 'Account';
    id: number;
    type: AccountType;
    state: AccountSate;
    name: string;
    initialAmount: number;
    createdAt: string;
    currentBalance: number;
  }>;
};

export type GetIncomesQueryVariables = Exact<{ [key: string]: never }>;

export type GetIncomesQuery = {
  __typename?: 'Query';
  incomes: Array<{
    __typename?: 'Income';
    id: number;
    amount: number;
    date: string;
    source: IncomeSource;
    account: { __typename?: 'Account'; id: number; name: string };
  }>;
};

export type GetExpensesQueryVariables = Exact<{ [key: string]: never }>;

export type GetExpensesQuery = {
  __typename?: 'Query';
  expenses: Array<{
    __typename?: 'Expense';
    id: number;
    amount: number;
    date: string;
    category: {
      __typename?: 'ExpenseCategory';
      id: number;
      name: string;
      parent?: {
        __typename?: 'ExpenseCategory';
        id: number;
        name: string;
      } | null;
    };
    account: { __typename?: 'Account'; id: number; name: string };
  }>;
};

export type GetTransfersQueryVariables = Exact<{ [key: string]: never }>;

export type GetTransfersQuery = {
  __typename?: 'Query';
  transfers: Array<{
    __typename?: 'Transfer';
    id: number;
    amount: number;
    date: string;
    fromAccount: { __typename?: 'Account'; id: number; name: string };
    toAccount: { __typename?: 'Account'; id: number; name: string };
  }>;
};

export type GetTransactionsQueryVariables = Exact<{ [key: string]: never }>;

export type GetTransactionsQuery = {
  __typename?: 'Query';
  transactions: Array<{
    __typename?: 'Transaction';
    id: number;
    debit: number;
    credit: number;
    balance: number;
    description: string;
    date: string;
    account: { __typename?: 'Account'; id: number; name: string };
  }>;
};

export type GetCreateExpenseLoaderDataQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetCreateExpenseLoaderDataQuery = {
  __typename?: 'Query';
  accounts: Array<{ __typename?: 'Account'; id: number; name: string }>;
  expenseCategories: Array<{
    __typename?: 'ExpenseCategory';
    id: number;
    name: string;
    parent?: {
      __typename?: 'ExpenseCategory';
      id: number;
      name: string;
    } | null;
  }>;
};

export type GetEditExpenseLoaderDataQueryVariables = Exact<{
  expenseId: Scalars['Int']['input'];
}>;

export type GetEditExpenseLoaderDataQuery = {
  __typename?: 'Query';
  expenseCategories: Array<{
    __typename?: 'ExpenseCategory';
    id: number;
    name: string;
    parent?: {
      __typename?: 'ExpenseCategory';
      id: number;
      name: string;
    } | null;
  }>;
  expense?: {
    __typename?: 'Expense';
    id: number;
    date: string;
    amount: number;
    category: { __typename?: 'ExpenseCategory'; id: number };
    account: { __typename?: 'Account'; id: number; name: string };
  } | null;
};

export type GetDeleteExpenseLoaderDataQueryVariables = Exact<{
  expenseId: Scalars['Int']['input'];
}>;

export type GetDeleteExpenseLoaderDataQuery = {
  __typename?: 'Query';
  expense?: {
    __typename?: 'Expense';
    id: number;
    date: string;
    amount: number;
    category: {
      __typename?: 'ExpenseCategory';
      id: number;
      name: string;
      parent?: {
        __typename?: 'ExpenseCategory';
        id: number;
        name: string;
      } | null;
    };
    account: { __typename?: 'Account'; id: number; name: string };
  } | null;
};

export type GetCreateIncomeLoaderDataQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetCreateIncomeLoaderDataQuery = {
  __typename?: 'Query';
  accounts: Array<{ __typename?: 'Account'; id: number; name: string }>;
};

export type GetDeleteIncomeLoaderDataQueryVariables = Exact<{
  incomeId: Scalars['Int']['input'];
}>;

export type GetDeleteIncomeLoaderDataQuery = {
  __typename?: 'Query';
  income?: {
    __typename?: 'Income';
    id: number;
    amount: number;
    date: string;
    source: IncomeSource;
    account: { __typename?: 'Account'; id: number; name: string };
  } | null;
};

export type GetEditAccountLoaderDataQueryVariables = Exact<{
  accountId: Scalars['Int']['input'];
}>;

export type GetEditAccountLoaderDataQuery = {
  __typename?: 'Query';
  account?: {
    __typename?: 'Account';
    id: number;
    type: AccountType;
    state: AccountSate;
    name: string;
    initialAmount: number;
    currentBalance: number;
    createdAt: string;
  } | null;
};

export type GetCreateAccountLoaderDataQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetCreateAccountLoaderDataQuery = {
  __typename?: 'Query';
  accounts: Array<{ __typename?: 'Account'; id: number; name: string }>;
};

export type GetDeleteTransferLoaderDataQueryVariables = Exact<{
  transferId: Scalars['Int']['input'];
}>;

export type GetDeleteTransferLoaderDataQuery = {
  __typename?: 'Query';
  transfer?: {
    __typename?: 'Transfer';
    id: number;
    amount: number;
    date: string;
    fromAccount: { __typename?: 'Account'; id: number; name: string };
    toAccount: { __typename?: 'Account'; id: number; name: string };
  } | null;
};

export const AddExpenseMutationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddExpenseMutation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AddExpenseInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'expense' },
            name: { kind: 'Name', value: 'addExpense' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'category' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'parent' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'account' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AddExpenseMutationMutation,
  AddExpenseMutationMutationVariables
>;
export const UpdateExpenseMutationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateExpenseMutation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateExpenseInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'expense' },
            name: { kind: 'Name', value: 'updateExpense' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'category' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'parent' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'account' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateExpenseMutationMutation,
  UpdateExpenseMutationMutationVariables
>;
export const DeleteExpenseMutationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteExpenseMutation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'deleteExpenseId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'deleted' },
            name: { kind: 'Name', value: 'deleteExpense' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'deleteExpenseId' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteExpenseMutationMutation,
  DeleteExpenseMutationMutationVariables
>;
export const AddIncomeMutationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddIncomeMutation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AddIncomeInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'income' },
            name: { kind: 'Name', value: 'addIncome' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                { kind: 'Field', name: { kind: 'Name', value: 'source' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'account' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AddIncomeMutationMutation,
  AddIncomeMutationMutationVariables
>;
export const DeleteIncomeMutationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteIncomeMutation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'deleteIncomeId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'deleted' },
            name: { kind: 'Name', value: 'deleteIncome' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'deleteIncomeId' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteIncomeMutationMutation,
  DeleteIncomeMutationMutationVariables
>;
export const AddAccountMutationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddAccountMutation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AddAccountInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'account' },
            name: { kind: 'Name', value: 'addAccount' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'initialAmount' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currentBalance' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AddAccountMutationMutation,
  AddAccountMutationMutationVariables
>;
export const UpdateAccountMutationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'UpdateAccountMutation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'UpdateAccountInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'account' },
            name: { kind: 'Name', value: 'updateAccount' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'initialAmount' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currentBalance' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  UpdateAccountMutationMutation,
  UpdateAccountMutationMutationVariables
>;
export const AddTransferMutationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'AddTransferMutation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AddTransferInput' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'transfer' },
            name: { kind: 'Name', value: 'addTransfer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fromAccount' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'toAccount' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AddTransferMutationMutation,
  AddTransferMutationMutationVariables
>;
export const DeleteTransferMutationDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      name: { kind: 'Name', value: 'DeleteTransferMutation' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'deleteTransferId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            alias: { kind: 'Name', value: 'deleted' },
            name: { kind: 'Name', value: 'deleteTransfer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'deleteTransferId' },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  DeleteTransferMutationMutation,
  DeleteTransferMutationMutationVariables
>;
export const GetAccountsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetAccounts' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accounts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'initialAmount' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currentBalance' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetAccountsQuery, GetAccountsQueryVariables>;
export const GetIncomesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetIncomes' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'incomes' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                { kind: 'Field', name: { kind: 'Name', value: 'source' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'account' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetIncomesQuery, GetIncomesQueryVariables>;
export const GetExpensesDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetExpenses' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'expenses' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'category' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'parent' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'account' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetExpensesQuery, GetExpensesQueryVariables>;
export const GetTransfersDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetTransfers' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'transfers' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fromAccount' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'toAccount' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetTransfersQuery, GetTransfersQueryVariables>;
export const GetTransactionsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetTransactions' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'transactions' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'debit' } },
                { kind: 'Field', name: { kind: 'Name', value: 'credit' } },
                { kind: 'Field', name: { kind: 'Name', value: 'balance' } },
                { kind: 'Field', name: { kind: 'Name', value: 'description' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'account' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetTransactionsQuery,
  GetTransactionsQueryVariables
>;
export const GetCreateExpenseLoaderDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCreateExpenseLoaderData' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accounts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'expenseCategories' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'parent' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCreateExpenseLoaderDataQuery,
  GetCreateExpenseLoaderDataQueryVariables
>;
export const GetEditExpenseLoaderDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetEditExpenseLoaderData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'expenseId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'expenseCategories' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'parent' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'expense' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'expenseId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'category' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'account' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetEditExpenseLoaderDataQuery,
  GetEditExpenseLoaderDataQueryVariables
>;
export const GetDeleteExpenseLoaderDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetDeleteExpenseLoaderData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'expenseId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'expense' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'expenseId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'category' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'parent' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'account' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetDeleteExpenseLoaderDataQuery,
  GetDeleteExpenseLoaderDataQueryVariables
>;
export const GetCreateIncomeLoaderDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCreateIncomeLoaderData' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accounts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCreateIncomeLoaderDataQuery,
  GetCreateIncomeLoaderDataQueryVariables
>;
export const GetDeleteIncomeLoaderDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetDeleteIncomeLoaderData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'incomeId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'income' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'incomeId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                { kind: 'Field', name: { kind: 'Name', value: 'source' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'account' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetDeleteIncomeLoaderDataQuery,
  GetDeleteIncomeLoaderDataQueryVariables
>;
export const GetEditAccountLoaderDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetEditAccountLoaderData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'accountId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'account' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'accountId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'type' } },
                { kind: 'Field', name: { kind: 'Name', value: 'state' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'initialAmount' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'currentBalance' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'createdAt' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetEditAccountLoaderDataQuery,
  GetEditAccountLoaderDataQueryVariables
>;
export const GetCreateAccountLoaderDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetCreateAccountLoaderData' },
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'accounts' },
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'name' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetCreateAccountLoaderDataQuery,
  GetCreateAccountLoaderDataQueryVariables
>;
export const GetDeleteTransferLoaderDataDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetDeleteTransferLoaderData' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'transferId' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'transfer' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'transferId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'amount' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fromAccount' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'toAccount' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetDeleteTransferLoaderDataQuery,
  GetDeleteTransferLoaderDataQueryVariables
>;
