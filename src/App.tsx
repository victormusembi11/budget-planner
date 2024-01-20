import Budget from "./components/budget";
import Remaining from "./components/remaining";
import ExpenseTotal from "./components/expense-total";

export default function App() {
  return (
    <div className="container">
      <h1 className="mt-3">My Budget planner</h1>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget />
        </div>
        <div className="col-sm">
          <Remaining />
        </div>
        <div className="col-sm">
          <ExpenseTotal />
        </div>
      </div>
    </div>
  );
}
