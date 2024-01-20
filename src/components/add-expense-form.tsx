import React, { useState, useContext } from "react";

import { AppContext } from "../context/app-context";

interface ExpenseState {
  name: string;
  cost: string;
}

export default function AddExpenseForm() {
  const { dispatch } = useContext(AppContext) as {
    dispatch: React.Dispatch<any>;
  };
  const [expense, setExpense] = useState<ExpenseState>({
    name: "",
    cost: "",
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setExpense({
      ...expense,
      [event.target.id]: event.target.value,
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLButtonElement>) {
    event.preventDefault();

    dispatch({
      type: "ADD_EXPENSE",
      payload: {
        name: expense.name,
        cost: parseInt(expense.cost),
      },
    });

    setExpense({
      name: "",
      cost: "",
    });
  }

  return (
    <form>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-sm">
          <label htmlFor="cost">Cost</label>
          <input
            type="text"
            className="form-control"
            id="cost"
            onChange={handleChange}
            required
          />
        </div>
        <div className="col-sm">
          <button
            type="submit"
            className="btn btn-primary mt-3"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
