/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  ' \n  mutation AddExpenseMutation($input: AddExpenseInput!) {\n    expense: addExpense(input: $input) {\n      id\n      amount\n      date\n      category {\n        id\n        name\n        parent {\n          id\n          name\n        }\n      }\n      account {\n        id\n        name\n      }\n    }\n  } \n':
    types.AddExpenseMutationDocument,
  ' \n  mutation UpdateExpenseMutation($input: UpdateExpenseInput!) {\n    expense: updateExpense(input: $input) {\n      id\n      amount\n      date\n      category {\n        id\n        name\n        parent {\n          id\n          name\n        }\n      }\n      account {\n        id\n        name\n      }\n    }\n  } \n':
    types.UpdateExpenseMutationDocument,
  ' \n  mutation DeleteExpenseMutation($deleteExpenseId: Int!) {\n    deleted: deleteExpense(id: $deleteExpenseId)\n  }\n':
    types.DeleteExpenseMutationDocument,
  '\n  mutation AddIncomeMutation($input: AddIncomeInput!) {\n    income: addIncome(input: $input) {\n      id\n      amount\n      date\n      source\n      account {\n        id\n        name\n      }\n    }\n  }\n':
    types.AddIncomeMutationDocument,
  ' \n  mutation DeleteIncomeMutation($deleteIncomeId: Int!) {\n    deleted: deleteIncome(id: $deleteIncomeId)\n  }\n':
    types.DeleteIncomeMutationDocument,
  '\n  mutation AddAccountMutation($input: AddAccountInput!) {\n    account: addAccount(input: $input) {\n      id\n      type\n      state\n      name\n      initialAmount\n      createdAt\n      currentBalance\n    }\n  }\n':
    types.AddAccountMutationDocument,
  '\n  mutation UpdateAccountMutation($input: UpdateAccountInput!) {\n    account: updateAccount(input: $input) {\n      id\n      type\n      state\n      name\n      initialAmount\n      createdAt\n      currentBalance\n    }\n  }\n':
    types.UpdateAccountMutationDocument,
  '\n  mutation AddTransferMutation($input: AddTransferInput!) {\n    transfer: addTransfer(input: $input) {\n      id\n      amount\n      date\n      fromAccount {\n        id\n        name\n      }\n      toAccount {\n        id\n        name\n      }\n    }\n  }\n':
    types.AddTransferMutationDocument,
  ' \n  mutation DeleteTransferMutation($deleteTransferId: Int!) {\n    deleted: deleteTransfer(id: $deleteTransferId)\n  }\n':
    types.DeleteTransferMutationDocument,
  '\n  query GetAccounts {\n    accounts {\n      id\n      type\n      state\n      name\n      initialAmount\n      createdAt\n      currentBalance\n    }\n  }\n':
    types.GetAccountsDocument,
  '\n  query GetIncomes {\n    incomes {\n      id\n      amount\n      date\n      source\n      account {\n        id\n        name\n      }\n    }\n  }\n':
    types.GetIncomesDocument,
  '\n  query GetExpenses {\n    expenses {\n      id\n      amount\n      date\n      category {\n        id\n        name\n        parent {\n          id\n          name\n        }\n      }\n      account {\n        id\n        name\n      }\n    } \n  } \n':
    types.GetExpensesDocument,
  '\n  query GetTransfers {\n    transfers {\n      id\n      amount\n      date\n      fromAccount {\n        id\n        name\n      }\n      toAccount {\n        id\n        name\n      }\n    }\n  }\n':
    types.GetTransfersDocument,
  '\n  query GetTransactions {\n    transactions {\n      id\n      debit\n      credit\n      balance\n      description\n      date\n      account {\n        id\n        name\n      }\n    }\n  } \n':
    types.GetTransactionsDocument,
  '\n  query GetCreateExpenseLoaderData {\n    accounts {\n      id\n      name\n    } \n    expenseCategories {\n      id\n      name\n      parent {\n        id\n        name\n      }\n    }\n  } \n':
    types.GetCreateExpenseLoaderDataDocument,
  '\n  query GetEditExpenseLoaderData($expenseId: Int!) { \n    expenseCategories {\n      id\n      name\n      parent {\n        id\n        name\n      }\n    }\n    expense(id: $expenseId) {\n      id\n      date\n      amount\n      category {\n        id\n      }\n      account {\n        id,\n        name\n      }\n    }\n  }\n':
    types.GetEditExpenseLoaderDataDocument,
  '\n  query GetDeleteExpenseLoaderData($expenseId: Int!) {  \n    expense(id: $expenseId) {\n      id\n      date\n      amount\n      category {\n        id,\n        name,\n        parent {\n          id\n          name\n        }\n      }\n      account {\n        id,\n        name\n      }\n    }\n  }\n':
    types.GetDeleteExpenseLoaderDataDocument,
  '\n  query GetCreateIncomeLoaderData {\n    accounts {\n      id\n      name\n    }\n  } \n':
    types.GetCreateIncomeLoaderDataDocument,
  '\n  query GetDeleteIncomeLoaderData($incomeId: Int!) {\n    income(id: $incomeId) {\n      id\n      amount\n      date\n      source\n      account {\n        id\n        name\n      }\n    }\n  } \n':
    types.GetDeleteIncomeLoaderDataDocument,
  '\n  query GetEditAccountLoaderData($accountId: Int!) {\n    account(id: $accountId) {\n      id\n      type\n      state\n      name\n      initialAmount\n      currentBalance\n      createdAt \n    }\n  }\n':
    types.GetEditAccountLoaderDataDocument,
  '\n  query GetCreateAccountLoaderData {\n    accounts {\n      id\n      name\n    }\n  } \n':
    types.GetCreateAccountLoaderDataDocument,
  '\n  query GetDeleteTransferLoaderData($transferId: Int!) {\n    transfer(id: $transferId) {\n      id\n      amount\n      date\n      fromAccount {\n        id\n        name\n      }\n      toAccount {\n        id\n        name\n      }\n    }\n  } \n':
    types.GetDeleteTransferLoaderDataDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: ' \n  mutation AddExpenseMutation($input: AddExpenseInput!) {\n    expense: addExpense(input: $input) {\n      id\n      amount\n      date\n      category {\n        id\n        name\n        parent {\n          id\n          name\n        }\n      }\n      account {\n        id\n        name\n      }\n    }\n  } \n'
): (typeof documents)[' \n  mutation AddExpenseMutation($input: AddExpenseInput!) {\n    expense: addExpense(input: $input) {\n      id\n      amount\n      date\n      category {\n        id\n        name\n        parent {\n          id\n          name\n        }\n      }\n      account {\n        id\n        name\n      }\n    }\n  } \n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: ' \n  mutation UpdateExpenseMutation($input: UpdateExpenseInput!) {\n    expense: updateExpense(input: $input) {\n      id\n      amount\n      date\n      category {\n        id\n        name\n        parent {\n          id\n          name\n        }\n      }\n      account {\n        id\n        name\n      }\n    }\n  } \n'
): (typeof documents)[' \n  mutation UpdateExpenseMutation($input: UpdateExpenseInput!) {\n    expense: updateExpense(input: $input) {\n      id\n      amount\n      date\n      category {\n        id\n        name\n        parent {\n          id\n          name\n        }\n      }\n      account {\n        id\n        name\n      }\n    }\n  } \n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: ' \n  mutation DeleteExpenseMutation($deleteExpenseId: Int!) {\n    deleted: deleteExpense(id: $deleteExpenseId)\n  }\n'
): (typeof documents)[' \n  mutation DeleteExpenseMutation($deleteExpenseId: Int!) {\n    deleted: deleteExpense(id: $deleteExpenseId)\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation AddIncomeMutation($input: AddIncomeInput!) {\n    income: addIncome(input: $input) {\n      id\n      amount\n      date\n      source\n      account {\n        id\n        name\n      }\n    }\n  }\n'
): (typeof documents)['\n  mutation AddIncomeMutation($input: AddIncomeInput!) {\n    income: addIncome(input: $input) {\n      id\n      amount\n      date\n      source\n      account {\n        id\n        name\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: ' \n  mutation DeleteIncomeMutation($deleteIncomeId: Int!) {\n    deleted: deleteIncome(id: $deleteIncomeId)\n  }\n'
): (typeof documents)[' \n  mutation DeleteIncomeMutation($deleteIncomeId: Int!) {\n    deleted: deleteIncome(id: $deleteIncomeId)\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation AddAccountMutation($input: AddAccountInput!) {\n    account: addAccount(input: $input) {\n      id\n      type\n      state\n      name\n      initialAmount\n      createdAt\n      currentBalance\n    }\n  }\n'
): (typeof documents)['\n  mutation AddAccountMutation($input: AddAccountInput!) {\n    account: addAccount(input: $input) {\n      id\n      type\n      state\n      name\n      initialAmount\n      createdAt\n      currentBalance\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation UpdateAccountMutation($input: UpdateAccountInput!) {\n    account: updateAccount(input: $input) {\n      id\n      type\n      state\n      name\n      initialAmount\n      createdAt\n      currentBalance\n    }\n  }\n'
): (typeof documents)['\n  mutation UpdateAccountMutation($input: UpdateAccountInput!) {\n    account: updateAccount(input: $input) {\n      id\n      type\n      state\n      name\n      initialAmount\n      createdAt\n      currentBalance\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  mutation AddTransferMutation($input: AddTransferInput!) {\n    transfer: addTransfer(input: $input) {\n      id\n      amount\n      date\n      fromAccount {\n        id\n        name\n      }\n      toAccount {\n        id\n        name\n      }\n    }\n  }\n'
): (typeof documents)['\n  mutation AddTransferMutation($input: AddTransferInput!) {\n    transfer: addTransfer(input: $input) {\n      id\n      amount\n      date\n      fromAccount {\n        id\n        name\n      }\n      toAccount {\n        id\n        name\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: ' \n  mutation DeleteTransferMutation($deleteTransferId: Int!) {\n    deleted: deleteTransfer(id: $deleteTransferId)\n  }\n'
): (typeof documents)[' \n  mutation DeleteTransferMutation($deleteTransferId: Int!) {\n    deleted: deleteTransfer(id: $deleteTransferId)\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetAccounts {\n    accounts {\n      id\n      type\n      state\n      name\n      initialAmount\n      createdAt\n      currentBalance\n    }\n  }\n'
): (typeof documents)['\n  query GetAccounts {\n    accounts {\n      id\n      type\n      state\n      name\n      initialAmount\n      createdAt\n      currentBalance\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetIncomes {\n    incomes {\n      id\n      amount\n      date\n      source\n      account {\n        id\n        name\n      }\n    }\n  }\n'
): (typeof documents)['\n  query GetIncomes {\n    incomes {\n      id\n      amount\n      date\n      source\n      account {\n        id\n        name\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetExpenses {\n    expenses {\n      id\n      amount\n      date\n      category {\n        id\n        name\n        parent {\n          id\n          name\n        }\n      }\n      account {\n        id\n        name\n      }\n    } \n  } \n'
): (typeof documents)['\n  query GetExpenses {\n    expenses {\n      id\n      amount\n      date\n      category {\n        id\n        name\n        parent {\n          id\n          name\n        }\n      }\n      account {\n        id\n        name\n      }\n    } \n  } \n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetTransfers {\n    transfers {\n      id\n      amount\n      date\n      fromAccount {\n        id\n        name\n      }\n      toAccount {\n        id\n        name\n      }\n    }\n  }\n'
): (typeof documents)['\n  query GetTransfers {\n    transfers {\n      id\n      amount\n      date\n      fromAccount {\n        id\n        name\n      }\n      toAccount {\n        id\n        name\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetTransactions {\n    transactions {\n      id\n      debit\n      credit\n      balance\n      description\n      date\n      account {\n        id\n        name\n      }\n    }\n  } \n'
): (typeof documents)['\n  query GetTransactions {\n    transactions {\n      id\n      debit\n      credit\n      balance\n      description\n      date\n      account {\n        id\n        name\n      }\n    }\n  } \n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetCreateExpenseLoaderData {\n    accounts {\n      id\n      name\n    } \n    expenseCategories {\n      id\n      name\n      parent {\n        id\n        name\n      }\n    }\n  } \n'
): (typeof documents)['\n  query GetCreateExpenseLoaderData {\n    accounts {\n      id\n      name\n    } \n    expenseCategories {\n      id\n      name\n      parent {\n        id\n        name\n      }\n    }\n  } \n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetEditExpenseLoaderData($expenseId: Int!) { \n    expenseCategories {\n      id\n      name\n      parent {\n        id\n        name\n      }\n    }\n    expense(id: $expenseId) {\n      id\n      date\n      amount\n      category {\n        id\n      }\n      account {\n        id,\n        name\n      }\n    }\n  }\n'
): (typeof documents)['\n  query GetEditExpenseLoaderData($expenseId: Int!) { \n    expenseCategories {\n      id\n      name\n      parent {\n        id\n        name\n      }\n    }\n    expense(id: $expenseId) {\n      id\n      date\n      amount\n      category {\n        id\n      }\n      account {\n        id,\n        name\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetDeleteExpenseLoaderData($expenseId: Int!) {  \n    expense(id: $expenseId) {\n      id\n      date\n      amount\n      category {\n        id,\n        name,\n        parent {\n          id\n          name\n        }\n      }\n      account {\n        id,\n        name\n      }\n    }\n  }\n'
): (typeof documents)['\n  query GetDeleteExpenseLoaderData($expenseId: Int!) {  \n    expense(id: $expenseId) {\n      id\n      date\n      amount\n      category {\n        id,\n        name,\n        parent {\n          id\n          name\n        }\n      }\n      account {\n        id,\n        name\n      }\n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetCreateIncomeLoaderData {\n    accounts {\n      id\n      name\n    }\n  } \n'
): (typeof documents)['\n  query GetCreateIncomeLoaderData {\n    accounts {\n      id\n      name\n    }\n  } \n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetDeleteIncomeLoaderData($incomeId: Int!) {\n    income(id: $incomeId) {\n      id\n      amount\n      date\n      source\n      account {\n        id\n        name\n      }\n    }\n  } \n'
): (typeof documents)['\n  query GetDeleteIncomeLoaderData($incomeId: Int!) {\n    income(id: $incomeId) {\n      id\n      amount\n      date\n      source\n      account {\n        id\n        name\n      }\n    }\n  } \n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetEditAccountLoaderData($accountId: Int!) {\n    account(id: $accountId) {\n      id\n      type\n      state\n      name\n      initialAmount\n      currentBalance\n      createdAt \n    }\n  }\n'
): (typeof documents)['\n  query GetEditAccountLoaderData($accountId: Int!) {\n    account(id: $accountId) {\n      id\n      type\n      state\n      name\n      initialAmount\n      currentBalance\n      createdAt \n    }\n  }\n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetCreateAccountLoaderData {\n    accounts {\n      id\n      name\n    }\n  } \n'
): (typeof documents)['\n  query GetCreateAccountLoaderData {\n    accounts {\n      id\n      name\n    }\n  } \n'];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(
  source: '\n  query GetDeleteTransferLoaderData($transferId: Int!) {\n    transfer(id: $transferId) {\n      id\n      amount\n      date\n      fromAccount {\n        id\n        name\n      }\n      toAccount {\n        id\n        name\n      }\n    }\n  } \n'
): (typeof documents)['\n  query GetDeleteTransferLoaderData($transferId: Int!) {\n    transfer(id: $transferId) {\n      id\n      amount\n      date\n      fromAccount {\n        id\n        name\n      }\n      toAccount {\n        id\n        name\n      }\n    }\n  } \n'];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
