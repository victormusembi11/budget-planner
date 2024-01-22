import { useContext, useEffect } from "react";

import { AppContext } from "../context/app-context";
import useFetch from "../hooks/use-fetch";
import Loading from "./loading";
import Error from "./error";

interface BudgetType {
  id: number;
  budget: number;
}

export default function BudgetCard() {
  const { budget, dispatch } = useContext(AppContext) as {
    budget: number;
    dispatch: React.Dispatch<any>;
  };

  const { data, loading, error } = useFetch("http://localhost:8000/budget/1/");

  const budgetData = data as unknown as BudgetType;

  useEffect(() => {
    if (data) {
      dispatch({
        type: "SET_BUDGET",
        payload: budgetData.budget,
      });
    }
  }, [budgetData.budget, data, dispatch]);

  if (loading) return <Loading />;

  if (error) return <Error />;

  return (
    <div className="alert alert-secondary">
      <span>Budget: ${budget}</span>
    </div>
  );
}
