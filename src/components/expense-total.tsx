import { useContext } from "react";

import { AppContext } from "../context/app-context";
import { Expense } from "../types/expense";

export default function ExpenseTotal() {
  const { expenses } = useContext(AppContext) as { expenses: Expense[] };

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-primary">
      <span>Spent so far: ${totalExpenses}</span>
    </div>
  );
}
