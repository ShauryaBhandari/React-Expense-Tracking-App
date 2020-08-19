import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Transaction = ({ transaction }) => {
  const { delTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign} Rs.{Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => delTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};

export default Transaction;
