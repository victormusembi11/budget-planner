import { useContext } from "react";
import { TiDelete } from "react-icons/ti";

import { AppContext } from "../context/app-context";

interface ExpenseItemProps {
  id: number;
  name: string;
  cost: number;
}

export default function ExpenseItem({ id, name, cost }: ExpenseItemProps) {
  const { dispatch } = useContext(AppContext) as {
    dispatch: React.Dispatch<any>;
  };

  function handleDeleteExpense() {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: id,
    });
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span className="badge bg-primary mr-3">${cost}</span>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </div>
    </li>
  );
}
