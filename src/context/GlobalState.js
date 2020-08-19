import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  transactions: [
    // { id: 1, text: "Food", amount: -200 },
    // { id: 2, text: "Salary", amount: 2000 },
    // { id: 3, text: "Groceries", amount: -1000 },
    // { id: 4, text: "Food", amount: -200 },
  ],
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component to wrap all other components so that they have access to global context
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function delTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        delTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
