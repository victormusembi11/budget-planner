import { useContext } from "react";
import { AppContext } from "../context/app-context";

export default function Budget() {
  const { budget } = useContext(AppContext) as { budget: number };

  return (
    <div className="alert alert-secondary">
      <span>Budget: ${budget}</span>
    </div>
  );
}
