import { useContext, useEffect } from "react";

import { AppContext } from "../context/app-context";
import { Expense } from "../types/expense";
import useFetch from "../hooks/use-fetch";
import ExpenseItem from "./expense-item";

import Loading from "./loading";
import Error from "./error";

export default function ExpenseList() {
  const { expenses, dispatch } = useContext(AppContext) as {
    expenses: Expense[];
    dispatch: React.Dispatch<any>;
  };

  const { data, loading, error } = useFetch("http://localhost:8000/expense/");

  useEffect(() => {
    if (data) {
      dispatch({
        type: "SET_EXPENSES",
        payload: data,
      });
    }
  }, [data, dispatch]);

  if (loading) return <Loading />;

  if (error) return <Error />;

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
