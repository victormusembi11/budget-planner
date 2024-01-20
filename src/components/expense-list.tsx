import ExpenseItem from "./expense-item";

export default function ExpenseList() {
  const expenses = [
    {
      id: 1,
      name: "shopping",
      cost: 40,
    },
    {
      id: 2,
      name: "holiday",
      cost: 400,
    },
    {
      id: 3,
      name: "car service",
      cost: 50,
    },
  ];

  return (
    <ul className="list-group">
      {expenses.map((expense) => (
        <ExpenseItem id={expense.id} name={expense.name} cost={expense.cost} />
      ))}
    </ul>
  );
}
