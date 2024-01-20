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

  const alertType = totalExpenses > budget ? "alert-danger" : "alert-success";

  return (
    <div className={`alert ${alertType}`}>
      <span>Remaining: ${budget - totalExpenses}</span>
    </div>
  );
}
