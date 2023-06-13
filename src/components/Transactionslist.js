import React from "react";
import { getTransactions } from "../API/auth";
import { useQuery } from "@tanstack/react-query";
const Transactionslist = () => {
  const {
    data: transactions,
    isLoading: transactionsLoading,
    isError: transactionsError,
  } = useQuery({
    queryKey: ["transactions"],
    queryFn: getTransactions,
  });

  const renderTransactions = () => {
    if (transactionsLoading) {
      return <div>Loading...</div>;
    }

    if (transactionsError) {
      return <div>Error loading transactions!</div>;
    }

    return transactions.map((transaction) => {
      let color;

      switch (transaction.type) {
        case "deposit":
          color = "transactions-myaccount-container green";
          break;
        case "withdraw":
          color = "transactions-myaccount-container red";
          break;
        case "transfer":
          color = "transactions-myaccount-container purple";
          break;
        default:
          color = "transactions-myaccount-container black";
      }

      return (
        <div key={transaction.id} className={color}>
          <div className="transaction-text">
            Transaction Type: {transaction.type}
          </div>
          <div className="transaction-text">Amount: {transaction.amount}</div>
          <div className="transaction-text">Sender: {transaction.senderId}</div>
          <div className="transaction-text">
            Receiver: {transaction.receiverId}
          </div>
          <div className="transaction-text">
            Created At: {transaction.createdAt}
          </div>
          <div className="transaction-text">
            Updated At: {transaction.updatedAt}
          </div>
        </div>
      );
    });
  };
  return <div className="transactions-myaccount">{renderTransactions()}</div>;
};

export default Transactionslist;
