import { useContext } from "react";

import { AppContext, Expense } from "../context/app-context";

import ExpenseItem from "./expense-item";

export default function ExpenseList() {
  const { expenses } = useContext(AppContext) as {
    expenses: Expense[];
  };

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          id={expense.id}
          name={expense.name}
          cost={expense.cost}
        />
      ))}
    </ul>
  );
}
