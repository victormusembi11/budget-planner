import { useContext } from "react";

import { AppContext, Expense } from "../context/app-context";

export default function Remaining() {
  const { expenses, budget } = useContext(AppContext) as {
    expenses: Expense[];
    budget: number;
  };

  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  return (
    <div className="alert alert-success">
      <span>Remaining: ${budget - totalExpenses}</span>
    </div>
  );
}
