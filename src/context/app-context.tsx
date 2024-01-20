import React, { createContext, useReducer, Dispatch } from "react";

export interface Expense {
  id: number;
  name: string;
  cost: number;
}

export interface AppState {
  budget: number;
  expenses: Expense[];
}

export type AppAction = {
  payload: any;
  type: string;
};

const AppReducer = (state: AppState, action: AppAction) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    default:
      return state;
  }
};

const initialState: AppState = {
  budget: 2000,
  expenses: [
    { id: 12, name: "shopping", cost: 50 },
    { id: 13, name: "holiday", cost: 400 },
    { id: 14, name: "car service", cost: 50 },
  ],
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
