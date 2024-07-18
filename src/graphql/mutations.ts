import { gql } from '../__generated__';

export const CREATE_EXPENSE = gql(` 
  mutation AddExpenseMutation($input: AddExpenseInput!) {
    expense: addExpense(input: $input) {
      id
      amount
      date
      category {
        id
        name
        parent {
          id
          name
        }
      }
      account {
        id
        name
      }
    }
  } 
`);

export const UPDATE_EXPENSE = gql(` 
  mutation UpdateExpenseMutation($input: UpdateExpenseInput!) {
    expense: updateExpense(input: $input) {
      id
      amount
      date
      category {
        id
        name
        parent {
          id
          name
        }
      }
      account {
        id
        name
      }
    }
  } 
`);

export const DELETE_EXPENSE = gql(` 
  mutation DeleteExpenseMutation($deleteExpenseId: Int!) {
    deleted: deleteExpense(id: $deleteExpenseId)
  }
`);

export const CREATE_INCOME = gql(`
  mutation AddIncomeMutation($input: AddIncomeInput!) {
    income: addIncome(input: $input) {
      id
      amount
      date
      source
      account {
        id
        name
      }
    }
  }
`);

export const DELETE_INCOME = gql(` 
  mutation DeleteIncomeMutation($deleteIncomeId: Int!) {
    deleted: deleteIncome(id: $deleteIncomeId)
  }
`);

export const CREATE_ACCOUNT = gql(`
  mutation AddAccountMutation($input: AddAccountInput!) {
    account: addAccount(input: $input) {
      id
      type
      state
      name
      initialAmount
      createdAt
      currentBalance
    }
  }
`);

export const UPDATE_ACCOUNT = gql(`
  mutation UpdateAccountMutation($input: UpdateAccountInput!) {
    account: updateAccount(input: $input) {
      id
      type
      state
      name
      initialAmount
      createdAt
      currentBalance
    }
  }
`);

export const CREATE_TRANSFER = gql(`
  mutation AddTransferMutation($input: AddTransferInput!) {
    transfer: addTransfer(input: $input) {
      id
      amount
      date
      fromAccount {
        id
        name
      }
      toAccount {
        id
        name
      }
    }
  }
`);

export const DELETE_TRANSFER = gql(` 
  mutation DeleteTransferMutation($deleteTransferId: Int!) {
    deleted: deleteTransfer(id: $deleteTransferId)
  }
`);
