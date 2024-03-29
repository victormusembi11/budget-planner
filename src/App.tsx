import { AppProvider } from "./context/app-context";

import BudgetCard from "./components/budget";
import Remaining from "./components/remaining";
import ExpenseTotal from "./components/expense-total";
import ExpenseList from "./components/expense-list";
import AddExpenseForm from "./components/add-expense-form";

export default function App() {
  return (
    <AppProvider>
      <div className="container">
        <h1 className="mt-3">My Budget planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <BudgetCard />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="mt-3">
          <div className="col-sm">
            <AddExpenseForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}
