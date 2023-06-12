import { useQuery } from "@tanstack/react-query";
import React from "react";
import getTransctions from "../API/transactions";

export const Transactions = () => {
  const res = useQuery(["transactions"], () => getTransctions());
  const theTransactions = res.data?.data.map((x) => (
    <Transactions key={x.id} transaction={x} />
  ));
  console.log(res);

  return <div>{theTransactions}</div>;
};
