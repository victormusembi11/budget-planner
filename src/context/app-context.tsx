import React, { createContext, useReducer, Dispatch } from "react";

import { Expense } from "../types/expense";
import { AppState, AppAction } from "../types/app";

const AppReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    case "SET_EXPENSES":
      return {
        ...state,
        expenses: action.payload,
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

const initialState: AppState = {
  budget: 0,
  expenses: [],
};

export const AppContext = createContext<
  | { budget: number; expenses: Expense[]; dispatch: Dispatch<AppAction> }
  | undefined
>(undefined);

export function AppProvider({ children }: React.PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <AppContext.Provider
      value={{
        budget: state.budget,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
