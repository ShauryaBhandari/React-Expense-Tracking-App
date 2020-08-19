export default (state, action) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      // For delete transaction case what we will do is return the original state but remove that 1 transaction that we wish to remove according to the payload ie the transaction id that we have sent form the global state
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
