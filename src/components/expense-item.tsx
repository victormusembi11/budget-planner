import { TiDelete } from "react-icons/ti";

interface ExpenseItemProps {
  id: number;
  name: string;
  cost: number;
}

export default function ExpenseItem({ id, name, cost }: ExpenseItemProps) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {name}
      <div>
        <span className="badge bg-primary mr-3">${cost}</span>
        <TiDelete size="1.5em"></TiDelete>
      </div>
    </li>
  );
}
