import { Expense } from "./expense";

export interface AppState {
  budget: number;
  expenses: Expense[];
}

export type AppAction = {
  payload: any;
  type: string;
};
