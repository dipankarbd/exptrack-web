import { gql } from '../__generated__/gql';

export const GET_ACCOUNTS = gql(`
  query GetAccounts {
    accounts {
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

export const GET_INCOMES = gql(`
  query GetIncomes {
    incomes {
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

export const GET_EXPENSES = gql(`
  query GetExpenses {
    expenses {
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

export const GET_TRANSFERS = gql(`
  query GetTransfers {
    transfers {
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

export const GET_TRANSACTIONS = gql(`
  query GetTransactions {
    transactions {
      id
      debit
      credit
      balance
      description
      date
      account {
        id
        name
      }
    }
  } 
`);

export const GET_CREATE_EXPENSE_LOADER_DATA = gql(`
  query GetCreateExpenseLoaderData {
    accounts {
      id
      name
    } 
    expenseCategories {
      id
      name
      parent {
        id
        name
      }
    }
  } 
`);

export const GET_EDIT_EXPENSE_LOADER_DATA = gql(`
  query GetEditExpenseLoaderData($expenseId: Int!) { 
    expenseCategories {
      id
      name
      parent {
        id
        name
      }
    }
    expense(id: $expenseId) {
      id
      date
      amount
      category {
        id
      }
      account {
        id,
        name
      }
    }
  }
`);

export const GET_DELETE_EXPENSE_LOADER_DATA = gql(`
  query GetDeleteExpenseLoaderData($expenseId: Int!) {  
    expense(id: $expenseId) {
      id
      date
      amount
      category {
        id,
        name,
        parent {
          id
          name
        }
      }
      account {
        id,
        name
      }
    }
  }
`);

export const GET_CREATE_INCOME_LOADER_DATA = gql(`
  query GetCreateIncomeLoaderData {
    accounts {
      id
      name
    }
  } 
`);

export const GET_DELETE_INCOME_LOADER_DATA = gql(`
  query GetDeleteIncomeLoaderData($incomeId: Int!) {
    income(id: $incomeId) {
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

export const GET_EDIT_ACCOUNT_LOADER_DATA = gql(`
  query GetEditAccountLoaderData($accountId: Int!) {
    account(id: $accountId) {
      id
      type
      state
      name
      initialAmount
      currentBalance
      createdAt 
    }
  }
`);

export const GET_CREATE_TRANSFER_LOADER_DATA = gql(`
  query GetCreateAccountLoaderData {
    accounts {
      id
      name
    }
  } 
`);

export const GET_DELETE_TRANSFER_LOADER_DATA = gql(`
  query GetDeleteTransferLoaderData($transferId: Int!) {
    transfer(id: $transferId) {
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
