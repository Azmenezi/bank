import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getTransactionID } from "../API/transactions";

const Transaction = () => {
  const { tranId } = useParams();
  const tran = useQuery(["transaction", getTransactionID(tranId)]);
  if (!tran) {
    return <div>Not found</div>;
  }

  return <div>Transaction</div>;
};

export default Transaction;
