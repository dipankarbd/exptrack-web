import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Root from './routes/root';
import Accounts from './routes/accounts';
import Expenses from './routes/expenses';
import Incomes from './routes/incomes';
import Transfers from './routes/transfers';
import Transactions from './routes/transactions';
import Index from './routes';
import AddExpense from './routes/add-expense';
import EditExpense from './routes/edit-expense';
import NotFound from './routes/404';
import DeleteExpense from './routes/delete-expense';
import AddIncome from './routes/add-income';
import DeleteIncome from './routes/delete-income';
import AddAccount from './routes/add-account';
import EditAccount from './routes/edit-account';
import AddTransfer from './routes/add-transfer';
import DeleteTransfer from './routes/delete-transfer';
import ProtectedRoutes from './routes/protected';
import Login from './routes/login';
import Register from './routes/register';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<ProtectedRoutes redirectPath="/login" />}>
        <Route path="/" element={<Root />} errorElement={<NotFound />}>
          <Route index element={<Index />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="accounts/new" element={<AddAccount />} />
          <Route path="accounts/:accountId/edit" element={<EditAccount />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="expenses/new" element={<AddExpense />} />
          <Route path="expenses/:expenseId/edit" element={<EditExpense />} />
          <Route
            path="expenses/:expenseId/delete"
            element={<DeleteExpense />}
          />
          <Route path="incomes" element={<Incomes />} />
          <Route path="incomes/new" element={<AddIncome />} />
          <Route path="incomes/:incomeId/delete" element={<DeleteIncome />} />
          <Route path="transfers" element={<Transfers />} />
          <Route path="transfers/new" element={<AddTransfer />} />
          <Route
            path="transfers/:transferId/delete"
            element={<DeleteTransfer />}
          />
          <Route path="transactions" element={<Transactions />} />
        </Route>
      </Route>

      <Route path="/login" element={<Login redirectPath="/accounts" />} />
      <Route path="/register" element={<Register />} />
    </>
  )
);

export default router;
